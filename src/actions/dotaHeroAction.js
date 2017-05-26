
import axios from 'axios'



export function markHero(id){
  return{
    type : "MARKED",
    payload: id
  }
}

export function initHero(){
  return dispatch => {
    axios.get('http://localhost:3001/dota_heroes/')
    .then(function(response){
      dispatch({
          type : "INIT_HERO",
          payload: response.data
        })
    })
  }
}

export function resetState(){
  return{
    type : "RESET"
  }
}