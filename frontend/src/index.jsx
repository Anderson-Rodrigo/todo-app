import React from 'react'
import ReactDom from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
//import Field from './field'
//import fieldReducer from './fieldReducer'
import App from './main/app'
import counterReducer from './counterReducer'
import Counter from './counter'

// const reducers = combineReducers({
//     counter: counterReducer
// })

// ReactDom.render(
//     <Provider store={createStore(reducers)}>
//         <Field initialValue='Teste' />
//     </Provider>
//     ,document.getElementById('app')
// )

ReactDom.render(
     <App />, 
  document.getElementById('app')
)