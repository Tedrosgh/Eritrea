import mezmursRouter from "../../../server/routes/mezmurs";
import {
    FETCH_ALL,
    FETCH_ONE,
    CREATE,
    UPDATE,
    DELETE,
    LIKE,
  } from "../constants/actionTypes";

  
  const mezmurReducer = (mezmurs = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return action.payload;
      case CREATE:
        return [...mezmurs, action.payload];
      case FETCH_ONE:
        return mezmurs.map((post)=>
        post._id === action.payload._id ? action.payload : post
        )
      case UPDATE:
        return mezmurs.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
      case DELETE:
        return mezmurs.filter((post) => post._id !== action.payload);
      case LIKE:
        return mezmurs.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
      default:
        return mezmurs;
    }
  };
  
  export default mezmurReducer;
  