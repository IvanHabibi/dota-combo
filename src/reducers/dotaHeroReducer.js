const dotaHeroReducer = (state={
  dota_heroes:[],
  counter:1
},action)=>{
  switch (action.type) {
    case 'MARKED': 
    let count = state.counter
    console.log(count)
    if(count<=6 ){
          let data = state.dota_heroes.map(hero=>{
      if(hero.id===action.payload){
        if(hero.taken===false){
          if(count!==6){
           hero.taken=true
           count++
           }
          }else{
             hero.taken=false
            count--                  
          }
      }
        return hero
    })
      state = {
      ...state,
      counter: count,
      dota_heroes:data
    }
    }
    break;
        
       case 'INIT_HERO':
          state = {
              ...state,
            dota_heroes:action.payload
            }
          break;

          case 'RESET':
          let data = state.dota_heroes.map(hero=>{
            if(hero.taken===true){
              hero.taken=false
            }
            return hero
          })
          state = {
              ...state,
            dota_heroes: data
            }
          break;
          default: return state
  }
  return state
}

export default dotaHeroReducer


