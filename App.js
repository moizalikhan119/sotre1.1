import React from 'react';
import Navigator from './Navigator/Navigator';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import ProductReducer from './Store/Reducers/ProductReducer';

const App = () => {
  const rootReducer = combineReducers({
    product: ProductReducer,
  });

  const Store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  return (
    <Provider store={Store}>
      <Navigator />
    </Provider>
  );
};
export default App;
