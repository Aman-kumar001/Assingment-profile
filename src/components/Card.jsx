import { makeStyles } from "@material-ui/core";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import Tilt from "react-vanilla-tilt";
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
const style=makeStyles({
    container:{
        width:"100vw",
        height:"80vh",
        backgroundColor:"#FFEE93",
        paddingTop:"20vh",
         
    },
    card:{
        width:"35vw",
        height:"55vh",
        margin:"auto",
        marginTop:0,
        backgroundColor:"#FCF5C7",
        borderRadius:"20px",
        "@media only screen and (max-width: 800px)":{
            width:"60vw",
            height:"60vh",
        },
        "@media only screen and (max-width: 400px)":{
            width:"80vw",
            height:"70vh",
        },
    },
    image:{
        height:"20vh",
        display:"flex",
        backgroundColor:"#FFC09F",
        borderTopLeftRadius:"20px",
        borderTopRightRadius:"20px",
        "@media only screen and (max-width: 800px)":{
            height:"28vh",
        },
        "@media only screen and (max-width: 400px)":{
            height:"30vh",
        },
    }
})



const Card = ({data}) => {
    const { height, width } = useWindowDimensions();
    const classes=style();
    const tiltStyle={
        backgroundColor:"#FFEE93",
        width:`${width>400?(width>800?"35vw":"60vw"):("80vw")}`,
        marginLeft:`${width>400?(width>800?"35vw":"20vw"):("10vw")}`,
        borderRadius:"20px"
    }
    return ( 
        <div className={classes.container}>
            <Tilt style={tiltStyle}>
            <div className={classes.card}>
                <div className={classes.image}>
                    <div className="topLeft">
                          <img src={data.results[0].picture.medium} alt="" className="pic"/>  
                    </div>
                    <div className="topRight">
                        <p
                            className="name"
                        >{data.results[0].name.title} {data.results[0].name.first} {data.results[0].name.last}</p>
                        <p className="gender">{data.results[0].gender} ,  {data.results[0].dob.age}
                        </p>
                        <p className="location">
                            {data.results[0].location.city} , {data.results[0].location.country}
                        </p>
                    </div>
                </div>
                <div className="content">
                    <p>
                        User Name:<b> {data.results[0].login.username}</b> 
                    </p>
                    <h2 style={{textAlign:"center"}}>Contacts</h2>
                    <p className="mail"><MailOutlineIcon style={{position:"relative",top:"5px"}}/> {data.results[0].email}</p>
                    <p className="phone"> <LocalPhoneIcon style={{position:"relative",top:"5px"}}/> {data.results[0].cell}</p>
                    
                </div>
            </div>
            </Tilt>
        </div>
     );
}
 
export default Card;