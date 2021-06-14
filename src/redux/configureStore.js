import { createStore, applyMiddleware } from 'redux' //applyMiddleware use thunk+persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// import createSensitiveStorage from "redux-persist-sensitive-storage";

//intergrate redux thunk
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/index' //setting RootReducer

// const storage = createSensitiveStorage({
//   keychainService: "myKeychain",
//   sharedPreferencesName: "mySharedPrefs"
// });


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer'] // เลือกเก็บบาง Reducer
  //blacklist
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
// const persistedReducer = persistCombineReducers(persistConfig, rootReducer)

const configureStore = () => {
  // let store = createStore(persistedReducer, composeWithDevTools( applyMiddleware(...middleware) ))
  let store = createStore(
    persistedReducer, 
    composeWithDevTools(applyMiddleware(thunk))
  )
  let persistor = persistStore(store)
  return { store, persistor }
}

export default configureStore