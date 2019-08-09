const UPDATE_ITEM = 'UPDATE_ITEM';
const RESET_ITEM = 'RESET_ITEM';
const RESET_ITEM_IMAGE = 'RESET_IMAGE_IMAGE';

const INITIAL_STATE = {
  imageUrl: 'http://via.placeholder.com/350x250?text=Please+select+an+image',
  name: '',
  description: 'Describe Your Item',
  tags: [],
  user: {},
  itemowner: {
    id: '',
    fullname: '',
    email: '',
    bio: ''
  },
  title: 'Name Your Item',
  createdAt: new Date()
};

export const updateNewItem = item => {
  return {
    type: UPDATE_ITEM,
    payload: item
  };
};

export const resetItem = () => {
  return {
    type: RESET_ITEM
  };
};

export const resetNewItemImage = () => {
  return {
    type: RESET_ITEM_IMAGE
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
    }

    case RESET_ITEM_IMAGE: {
      return {
        ...state,
        imageurl: INITIAL_STATE.imageUrl
      };
    }

    default:
      return state;
  }
};

export default reducer;
