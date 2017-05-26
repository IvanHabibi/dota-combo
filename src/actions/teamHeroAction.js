
import axios from 'axios'


export function deleteTeam(id){
  return dispatch => {
    axios.delete(`http://localhost:3001/teams/${id}`)
    .then(function(response){
      dispatch({
    type : "DELETE",
    payload: id
  })
    })
  }
}

export function addCombo(title,content,heroes){
     let selectedHeroes = (heroes).filter(hero=>{
      console.log(hero.taken)
      return hero.taken===true
    })
  return dispatch =>{
    axios.post('http://localhost:3001/teams',{
        title,
        content,
        heroes:selectedHeroes
    })
    .then(function(response){
        dispatch({
            type : "ADD",
    payload: {
        title,
        content,
        heroes:selectedHeroes
    }
        })
    })
  }
}

export function initTeam(){
  return dispatch => {
    axios.get('http://localhost:3001/teams/')
    .then(function(response){
      dispatch({
          type : "INIT_TEAM",
          payload: response.data
        })
    })
  }
}