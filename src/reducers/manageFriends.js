

export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return { friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
        let friendsLeft = state.friends.filter(curFriend => curFriend.id !== action.id )
        return {friends: friendsLeft}
    default:
      return state

  }
}
