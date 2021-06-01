import { ACTION, ACTION_TYPE } from './def';

function reducer(state: any, action: ACTION) {
  switch (action.type) {
    case ACTION_TYPE.SUB_MENU_TOGGLE:
      return { ...state, collapsed: action['collapsed'] };

    default:
      break;
  }

  return state;
}

export default reducer;
