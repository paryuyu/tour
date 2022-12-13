import { useContext } from "react";
import { useEffect, useRef } from "react";

import { tourItems } from "../App";
import "./map.css"

const { kakao } = window; //react에서 짤때는 이렇게 불러들여와야함.
/*
 var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴 */


function Map() {
    const tourLatLang = useContext(tourItems); //context로 가져와주기.
    console.log(tourLatLang, "map")

    const divRef = useRef();
    //마운트할 때 지도 생성
    useEffect(() => {
        const options = {
            center: new kakao.maps.LatLng(35.1599785, 126.8513072),
            level: 8
        }

        const map = new kakao.maps.Map(divRef.current, options);  //지도 생성 및 객체 리턴

            //클러스터 생성
        const clusterer = new kakao.maps.MarkerClusterer({
            map: map,
            minLevel: 7,
            averageCenter: true
        })

        const bounds = map.getBounds();

        //마커 여러개 찍어주기.
        const markers = tourLatLang.datas.map((item) => {

            //바운즈
            //let rst = bounds.contain(new kakao.maps.LatLng(item.lat, item.lng))
            //console.log(rst,"<---bounds") //이렇게 하면 맵의 바운더리 안에 있는 애들만 true가 나옴 바운더리 밖은 false!

            const marker = new kakao.maps.Marker({
                position: new kakao.maps.LatLng(item.lat, item.lng)

            });
            return marker;
           
        })
      
        //forEach는 작업만, map은 배열생성 -> forEach쓰려면 push 해줘야함.
        //마커 클러스터 써보기.
        clusterer.addMarkers(markers)

    }, [tourLatLang.datas])



    return (<div ref={divRef} className="mapBody">map</div>);
}

export default Map;