import { useContext } from "react";
import { useRef } from "react"
import "./item.css"
import { tourItems } from "../App"
import { Navigate, useLinkClickHandler, useNavigate } from "react-router-dom";

function Item({ data, onSelected }) {
  const destRef = useRef();
  const useSelected = useContext(tourItems)
  const navigate = useNavigate()
  const clickHandle = ()=>{
    navigate("/detail/"+data.id, {state:data} )
    onSelected(data)
  }
  
  return (<div className="itemBox" onClick={clickHandle}  >

    <h6 className="smallTitle" ref={destRef}>{data.tourDestNm}</h6>
    <div className="smallIntro">{data.tourDestIntro}</div>

  </div>);
}

export default Item;