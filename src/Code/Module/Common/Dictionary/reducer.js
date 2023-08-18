const initialState = {
  dict: {}
};

export default function reducer(state = initialState, action) {
  console.log();
  switch (action.type) {
    case 'MARK_DICT':
      return {
        ...state,
        dictMark: action.payload
      };
    case 'GENDERS_DICT':
      return {
        ...state,
        dictGenders: action.payload
      };

    case 'ROLES_DICT':
      return {
        ...state, dictRoles:
          action.payload
      };
    default:
      return state;
  }
}