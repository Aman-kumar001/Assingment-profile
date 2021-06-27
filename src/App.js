import { makeStyles } from '@material-ui/core';
import './App.css';
import Card from './components/Card';
import { useState,useEffect } from 'react';
const style=makeStyles({
  pending:{
    width:"100vw",
    height:"80vh",
    backgroundColor:"#FFEE93",
    paddingTop:"20vh",
  },
  loop:{

  },

})

function App() {
  const classes=style();
  const [loop,setLoop]=useState(false);
  const url="https://randomuser.me/api/";
  const [all,setall]=useState([]);
  useEffect(() => {
      fetch(url)
      .then(res=>{return res.json()})
      .then(data=>setall(data))
      setLoop(true)
  }, [])
  console.log(all);
  return (
    <div className="App">
      {all.length!==0 && <Card data={all}/>}
    </div>
  );
}

export default App;
