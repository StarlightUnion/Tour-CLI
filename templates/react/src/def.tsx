// action type

export
enum ACTION_TYPE {
  SUB_MENU_TOGGLE
}


export
interface ACTION {
  type: ACTION_TYPE;
  [prop: string]: any;
}
