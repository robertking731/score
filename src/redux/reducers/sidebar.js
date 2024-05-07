import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions/types';

// Initial State Alerts
const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SIDEBAR_OPEN:
      return [...state, payload];
    case SIDEBAR_CLOSE:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}