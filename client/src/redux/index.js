import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import reducer from './ShareItemPreview/reducer';
import ShareItemPreviewReducer from './ShareItemPreview/reducer';
// @TODO: Import your reducers

const middleware = [];

const store = createStore(
  combineReducers({
    ShareItemPreview: ShareItemPreviewReducer
  }),

  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
// (/* @TODO: Combine your reducers */),
