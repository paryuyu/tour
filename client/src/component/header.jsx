
import "./header.css"
import { useNavigate } from "react-router-dom";

function Header({ datas }) {
  const nav = useNavigate();
const navClick = () =>{
    nav("/")
}
    return (<div className="searchingArea">
        <i className="fas fa-map-marked-alt" id="mapIcon" onClick={navClick}/>
        <input type="text" className="seachingBar" placeholder="가고싶은 곳을 검색해보세요." /><button type="submit" className="searchingButton" >검색</button>
    </div>);
}

export default Header;