/*eslint-disable*/
import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경]= useState(0);
  let [입력값, 입력값변경] = useState('');

  // var 어레이 = [2,3,4];
  // var 뉴어레이 = 어레이.map(function(a){
  //   return a * 10
  // });

  // console.log(어레이 + "<-어레이");
  // console.log(뉴어레이 + "<-뉴어레이");
  
  // function 제목바꾸기(){
  //   var newArray = [...글제목];
  //   newArray[0] = '여자 코트 추천';
  //   글제목변경(newArray);
  // }

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      
       {
         글제목.map(function(a,i){
           return(
            <div className='list' key={i}>
              <h3 onClick={()=>{누른제목변경(i)}}>{ a } <span onClick={()=>{따봉변경(따봉 + 1)}}>👍</span> { 따봉 } </h3>
              <p>2월 17일 발행</p>
              <hr/>
            </div>
           )
         })
       }
     
      {/* <button onClick={()=>{modal변경(true)}}>열기</button> */}

      <button onClick={()=>{modal변경(!modal)}}>열고/닫기</button>
      
      <div className='publish'>
        <input onChange={(e)=>{입력값변경(e.target.value)}}/>
        <button onClick={()=>{
          let arrayCopy = [...글제목];
          arrayCopy.unshift(입력값);
          글제목변경(arrayCopy);
        }}>저장</button>
      </div>
      
      {/* <button onClick={()=>{누른제목변경(0)}}>1</button>
      <button onClick={()=>{누른제목변경(1)}}>2</button>
      <button onClick={()=>{누른제목변경(2)}}>3</button> */}
      
      {
        modal === true
        ? <Modal 글제목 = {글제목} 누른제목={누른제목}/>
        : null
      }

      

    </div>
  );
}

function Modal(props){
  return(
    <div className='modal'>
        <h2>{props.글제목[props.누른제목]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
