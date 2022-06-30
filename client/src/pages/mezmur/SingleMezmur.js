import React, {useEffect, useState} from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useParams } from "react-router-dom";



    const startingState = [{
        title: "",
        langetext: "",
      }];
    
const SingleMezmur = () => {
    const { id } = useParams();
    const [startState, setStartState] = useState(startingState);
    useEffect(()=>{
        axios.get(`http://localhost:8000/mezmur/${id}`).then((response)=>{
          setStartState(response.data);
        });
    }, []);
        console.log(startState._id);
  
    return (
        <div>
            <h2> {startState.title} </h2>
            <p style={{whiteSpace: 'pre-wrap'}}>{startState.langetext}</p>

            
        </div>
    )
}
export default SingleMezmur;