import { useLocation, useNavigate, useParams } from "react-router-dom";
import Review from "./review";

import { tourItems } from "../App"
import "./detail.css"
import { useContext } from "react";

function Detail({ item }) {

    let params = useParams();
    //console.log(params.id,"<====params")
    //그럼 id값이 같은 애들을 불러오기???
    //어떠케...?
    const { state } = useLocation();
    //console.log(state,"datailState")
    //리뷰 컴포넌트 만들기
    console.log(item, "<====item")
    console.log(state, "<====state")
    const useSelected = useContext(tourItems)

    let navi = useNavigate()
    //find로 params id랑 datas id랑 비교해서 객체로 불러올 수 있음.

    const findItem = useSelected.datas.find(a => { return a.id === params.id }
    )

    console.log(findItem, "findItem")
        const backHandle = () =>{
            navi(-1)
        }

    return(<>
    <div className="DetailBox">
    <i className="fas fa-arrow-left" onClick={backHandle} id="backIcon"/>

        <h5><i className="fas fa-map-marker-alt" id="markDest" /> {findItem ? findItem.tourDestNm : '정보 확인 중'}</h5>
        <div className="Detailsbox">
        <i className="fas fa-walking fa-3x" id="human"></i>
            <div><b>지번주소</b>{findItem ? findItem.addrRoad: '정보 확인 중'}</div>
            <div><b>관리기관</b>{findItem ? findItem.mngAgcNm: '정보 확인 중'}</div>
            <div><b>관리기관 전화번호</b>{findItem ? findItem.mngAgcTel: '정보 확인 중'}</div>
            <div><b>공공편익시설 정보</b>{findItem ? findItem.publicConvFcltInfo: '정보 확인 중'}</div>
            <div><b>관광지소개</b>{findItem ? findItem.tourDestIntro: '정보 확인 중'}</div> 


        </div>
    <Review/>
       
    </div>
    </>
  )





}

export default Detail;