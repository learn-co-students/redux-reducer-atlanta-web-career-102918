export function manageFriends(state, action){
}

const manageFrinds = (state, action) => {
  switch (action.type) {
    case 'ADD_FRIEND':
      return { friends: [...state.friends, action.friend]}
    case 'REMOVE_FREIND':
        return {friends: (state.friends.filter(curFriend => curFriend !== action.friend))}
    default:
      return state

  }
}
