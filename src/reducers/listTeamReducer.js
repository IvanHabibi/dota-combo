const listTeamReducer = (state=[],action)=>{
  switch (action.type) {
    case 'ADD':
    const team ={
      title:action.payload.title,
      content:action.payload.content,
      heroes:action.payload.heroes,
      id: (state[(state.length)-1].id)+1
      }
    state = [...state, team]
      break;
    case 'DELETE':
      state = state.filter(team=>{
        return team.id!==action.payload
      })
      break;
      case 'INIT_TEAM':
      state = action.payload
      break;
    default: return state

  }
  return state
}

export default listTeamReducer
