// import logo from './logo.svg';
import './css/index.css';
import { data } from './data/cont';
function App() {
  let play=Math.ceil(Math.random()*2)
  // console.log(play)
  return (
    <>
      <div className='stdu'>
        <p className='time'><span className='boon'>0</span>min</p>
        <b className='mtch'>MYTEAM(0)<br/>VS<br/>ENEMY(0)</b>
        {play==1&&
        <>
        <img src={data.strk.imgs} className='back'></img>
        <div className='txt1'>{data.strk.text[0]}</div>
        <div className='txt2'>{data.strk.text[1]}</div>
        </>
        }
        {play==2&&
        <>
        <img src={data.dfds.imgs} className='back'></img>
        <div className='txt1'>{data.dfds.text[0]}</div>
        <div className='txt2'>{data.dfds.text[1]}</div>
        </>
        }
      </div>
    </>
  );
}

export default App;
