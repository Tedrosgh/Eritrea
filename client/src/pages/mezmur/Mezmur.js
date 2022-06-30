import React, {useEffect, useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link, NavLink, useHis, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getSingleMezmur } from '../../actions/postsActions';

const page = {page: '/mezmur'};

const Mezmur=()=>{
    const startingState = [{
        title: "",
        langetext: "",
      }];
      const [startState, setStartState] = useState(startingState);
      const [show, setShow] = useState({display: 'none'});
      const toggleShow =()=>{
        try {
            setShow({display: 'block'})
            
        } catch (error) {
            console.log(error); 
        }
    };
    
    const [state, setState] = React.useState(page);
    const history = useHistory();
    let { id } = useParams();
    const { dispatch } = useDispatch();
    const handlenewMezmur=()=>{
        history.push('/mezmur/addmezmur'); 
    };
    const handleListMezmur = () => {
        history.push('/mezmur/list')
    };
    const findHandler = () => {
        history.push('/mezmur/:id');
    };
    
    const editHandler=()=>{
        history('/mezmur/editmezmur');
    };
    const loginHandler4=()=>{
        history('/mezmur/deletemezmur'); 
    };
    const displayHandler3=()=>{
        history('/mezmur/displaymezmur');

    };
    const loginHandler2=goto=>{
        history(goto) ; 
    };
    const loginHandler3=goto=>{
        setState({goto});};
    const onBackClick = e => {
            //e.preventDefault()
            // navigate(-1);
            history(e)
          };
           
              useEffect(()=>{
                  axios.get('http://localhost:8000/mezmur').then((response)=>{
                    setStartState(response.data);
                  });
              }, []);
             
        const getSinglemezmur = () => {
            getSingleMezmur(startState._id)
        };
    
   console.log(getSinglemezmur);
    return (
    <div className="sunday">
        <h1>Mezmur</h1> 
            <Stack spacing={2} direction="row" justifyContent={'center'}>
                <Button variant="outlined" onClick={handlenewMezmur}>Add new Mezmur</Button>
                {/* <Button variant="outlined" onClick={handleListMezmur}>mezmur List</Button> */}
                {/* <Button variant="outlined" onClick={findHandler}>Current Mezmur</Button> */}
                {/* <Button variant="outlined" onClick={loginHandler4}>Delete Mezmur</Button>
                <Button variant="outlined"> <NavLink to='/mezmur/displaymezmur'> Display Mezmur</NavLink></Button>
                <Button variant="outlined"> <NavLink to='/mezmur/searchmezmur'>search Mezmur</NavLink> </Button>
                <Button variant="outlined"> <NavLink to='/mezmur/help'> HELP ?</NavLink></Button> */}
            </Stack>
  
            <h3>Title of the mezmur</h3>
            <div> {startState.map((mez)=>(
            <ul style={{color: "yellow", backgroundColor: "green"}} key={mez._id}>
                <li style={{color: "red" }} onClick={getSingleMezmur}><Link to={`/mezmur/${mez._id}`}> {[mez.title]} </Link>  </li> 
            </ul>))}
        </div>
    </div>
    )
};
export default Mezmur;