export default function deadlineReducer(state = 0, action) {
  switch(action.type) {
    case 'PLUS_DEADLINE': return state + 1;
    case 'MINUS_DEADLINE': return state - 1;
    case 'SET_DEADLINE': return action.value;
    default: return state;
  }
}