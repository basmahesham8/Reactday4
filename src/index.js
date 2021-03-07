//JSX 
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
//
// import 'jquery/dist/jquery'
// import 'popper.js/dist/popper'
// import 'bootstrap/dist/js/bootstrap'
import App from './App'
import { render } from 'react-dom'
//
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'


const createStoreWithMW = applyMiddleware(/*middlewares*/ )(createStore)
render(<Provider store={createStoreWithMW(reducers)}>

    <App />
</Provider>
    , document.querySelector('#root'))