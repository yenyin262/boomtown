//action types

const UPDATE_ITEM = 'UPDATE_ITEM';
const RESET_ITEM = 'RESET_ITEM';

const INITIAL_STATE = {
  imageUrl: 'http://via.placeholder.com/350x250?text=Please+select+an+image',
  name: '',
  description: '',
  tags: [],
  user: {},
  createdAt: new Date()
};

//action creators
export const updateNewItem = item => {
  return {
    type: UPDATE_ITEM,
    payload: item
  };
};

export const resetItem = () => {
  return {
    type: RESET_ITEM
    // payload: {}
  };
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_ITEM: {
      const newItem = action.payload;
      return { ...state, ...newItem };
    }
    case RESET_ITEM: {
      return { ...INITIAL_STATE };
      // return INITIAL_STATE;
    }

    default:
      return state;
  }
};

export default reducer;
