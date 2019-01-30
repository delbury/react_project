export const PLUS_DEADLINE = 'PLUS_DEADLINE';
export const MINUS_DEADLINE = 'MINUS_DEADLINE';
export const SET_DEADLINE = 'SET_DEADLINE'

export const plusDeadline = () => ({
  type: PLUS_DEADLINE,
});

export const minusDeadline = () => ({
  type: MINUS_DEADLINE,
});

export const setDeadline = (value) => ({
  type: SET_DEADLINE,
  value: value
});