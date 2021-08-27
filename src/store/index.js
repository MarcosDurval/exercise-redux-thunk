// Importe o método applyMiddleware
import { createStore,  applyMiddleware } from 'redux';
// Importe o redux-thunk
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers';

// Aplique o middleware
const store = createStore(
  rootReducer,composeWithDevTools(applyMiddleware(thunk))
);

export default store;
