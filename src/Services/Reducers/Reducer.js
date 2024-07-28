import {Add_To_Cart} from '../constants'
const intialState={
  cardData:[]
}
const cardItems= (state = intialState, action)=>{
  switch(action.type){
    case Add_To_Cart: 
    return{
      ...state,
      cardData:action.Data,
    };
    default:
      return state
  }
};

export default cardItems;