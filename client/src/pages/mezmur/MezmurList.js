import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Mezmur from "./Mezmur.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { FETCH_ONE } from "../../constants/actionTypes.js";

const startingState = [{
    title: "",
    langetext: "",
  }];
const MezmurList = () => {
    const [startState, setStartState] = useState(startingState)
    const { dispatch } = useDispatch();
    //const { title, langetext } = props;
   // const mezmurs = useSelector((state)=>(state.postreducer));
    // console.log(title);
    let { id } = useParams();
    useEffect(()=>{
        //getData();
        axios.get('http://localhost:8000/mezmur').then((response)=>{
          setStartState(response.data);
        });
    }, []);
   
    return (
        <>
        <h1>List of Mezmurs</h1>
        
        <div>
        {/* {startState.map((state)=>(
        <div key={state._id} > */}
        {/* {<Mezmur key={startState} {...startState} />} */}
        
        {startState.map((mez)=>{
            <ul style={{color: "yellow", backgroundColor: "green"}} key={mez._id}>
                <li style={{color: "blue", backgroundColor: "yellow"}}>{mez.title} </li>
            </ul>
        })}
        
       
        </div>
        </>
    )
};

export default MezmurList; 