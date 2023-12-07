// import logo from './logo.svg';
import './css/index.css';
import { data } from './data/cont';
import $ from'jquery'
import { ball } from './data/stat';
import { useState } from 'react';
function App() {
  let play=Math.ceil(Math.random()*2)
  // console.log(play)
  const [voon,setVoon]=useState(0)
  let moon
  // let voon=0
  const [goal,setGoal]=useState(0)
  // let goal=0
  const [juck,setJuck]=useState(0)
  // let juck=0
  const gong=function (e) {
    let attk=Math.floor(Math.random()*2)
    let tg=$(e.target).text()
    if (tg='SHOOT') {
      $('.comp').fadeIn(0).delay(3000).fadeOut(0)
      $('.ttxt').html(`
          ${ball[0][attk][0]}
          <br>
          ${ball[0][attk][1]}
          <img src=${ball[0][attk][2]}>
      `)
      moon=voon+15
      setVoon(moon)
      if (attk==0) {
        let coal=goal+1
        setGoal(coal)
      }
    }
    if (tg='PASS') {
      $('.comp').fadeIn(0).delay(3000).fadeOut(0)
      $('.ttxt').html(`
          ${ball[0][attk][0]}
          <br>
          ${ball[0][attk][1]}
          <img src=${ball[0][attk][2]}>
      `)
      moon=voon+15
      setVoon(moon)
      if (attk==0) {
        let coal=goal+1
        setGoal(coal)
      }
    }
    // console.log(voon)
  }
  const subi=function (e) {
    let attk=Math.floor(Math.random()*2)
    let tg=$(e.target).text()
    if (tg='TACKLE') {
      $('.comp').fadeIn(0).delay(3000).fadeOut(0)
      $('.ttxt').html(`
          ${ball[1][attk][0]}
          <br>
          ${ball[1][attk][1]}
          <img src=${ball[1][attk][2]}>
      `)
      moon=voon+15
      setVoon(moon)
      if (attk==0) {
        let coal=juck+1
        setJuck(coal)
      }
    }
    if (tg='PRESS') {
      $('.comp').fadeIn(0).delay(3000).fadeOut(0)
      $('.ttxt').html(`
          ${ball[1][attk][0]}
          <br>
          ${ball[1][attk][1]}
          <img src=${ball[1][attk][2]}>
      `)
      moon=voon+15
      setVoon(moon)
      if (attk==0) {
        let coal=juck+1
        setJuck(coal)
      }
    }
    // moon+=15
  }
  // console.log(voon)
  if (voon==90) {
    setTimeout(() => {
      $('.stdu').html(`
          <p>GAME SET.<br>MY TEAM ${goal} : ${juck} ENEMY.</p>
          <br><br>
          <div style="outline: 1px solid black;width: 80%;height: 10vh;display: flex;justify-content: center;align-items: center;transform: translateX(12%);bottom: 20vh;position: absolute;" onclick="location.reload()">RESET</div>
      `).css({textAlign:'center'}).find('p').css({position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'})
    }, 3000);
  }
  return (
    <>
      <div className='jong'><div className='gtxt'></div></div>
      <div className='comp'><div className='ttxt'></div></div>
      <div className='stdu'>
        <p className='time'><span className='boon'>{voon}</span>min</p>
        <b className='mtch'>MYTEAM({goal})<br/>VS<br/>ENEMY({juck})</b>
        {play==1&&
        <>
        <img src={data.strk.imgs} className='back'></img>
        <div className='txt1' onClick={gong}>{data.strk.text[0]}</div>
        <div className='txt2' onClick={gong}>{data.strk.text[1]}</div>
        </>
        }
        {play==2&&
        <>
        <img src={data.dfds.imgs} className='back'></img>
        <div className='txt1' onClick={subi}>{data.dfds.text[0]}</div>
        <div className='txt2' onClick={subi}>{data.dfds.text[1]}</div>
        </>
        }
      </div>
    </>
  );
}

export default App;
