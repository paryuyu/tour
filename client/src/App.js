
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Fragment, useCallback, useContext, useEffect, useReducer, useState } from "react";
import React from 'react';
import Header from "./component/header";
import Content from "./component/content";
import Detail from "./component/detail";
import Erroor from "./component/error";
import Map from './component/map';
import { createContext } from 'react';
import "./App.css"
//TourAPI에서 파일 전체로 안넘기고 개별 함수로 넘겨서 중괄호 해줘야함.
import { TourAPI } from "./service/tourAPI";
import ReviewAPI from './service/reviewAPI';

const tourAPI = new TourAPI();


//어카운트 API에 baseURL보내주는 생성자함수임. //집에서는 아이피 바꿔줘야함.
const serverIp = "192.168.4.25"
const reviewAPI = new ReviewAPI(`http://${serverIp}:8070`)










const reducer = function (state, action) {
  switch (action.type) {
    //type이 setAll이면 기존state값 을 변경해버리기 
    case "setDatas":
      return { ...state, datas: action.datas };

  }

  return state;
  //여기서 리턴값이 state값으로 바뀜.
  //return state는 앞에서 명령이 잘못되면 꼬이니까 그냥 기본state값으로 리턴되게 해주는거.
}

export const tourItems = React.createContext(null);

function App() {

  const [state, dispatch] = useReducer(reducer, { version: 1.0, datas: [] });
  //fetch로 따로 받아올때는 import하고 api 파일 안의 함수를 다시 불러와야 함..

  //console.log(state, "<==========state")

  useEffect(() => {
    tourAPI.getInfos()
      .then(rc => {
        dispatch({ type: "setDatas", datas: rc.TourDestBaseInfo })
      }) //명령내리기.
  }, [])


  //그냥 props로 넘겨서 받아오자.
  const[selectItem, setSelectItem] =  useState()
  const onSelected=(data)=>{
    setSelectItem(data)
  }

  return (
    <Fragment>
      <tourItems.Provider value={state}>
      <BrowserRouter>
      <Header datas={state} />
      <div className='group'>
      <Map className="mapOut"/>
        <Routes>
          <Route path="/" element={<Content datas={state.datas} onSelected={onSelected}/>} />
          <Route path="/detail/:id" element={<Detail item={selectItem} />} />
          <Route path="*" element={<Erroor />} />
        </Routes>
      </div>
      </BrowserRouter>
      </tourItems.Provider>

    </Fragment>
  );
}

export default App;
