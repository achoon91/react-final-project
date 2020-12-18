import {createStore,applyMiddleware,compose} from 'redux'
import thunk from "redux-thunk";// 비동기 프로그램
/*
    async axios.get()
 */
// index.js는 파일명을 지정하지 않아도 된다
import rootReducer from '../reducers'
import {createLogger} from 'redux-logger/src'

const logger=createLogger()
const initalState={}
const middleware=[thunk,logger]
const store=createStore(
    rootReducer,
    initalState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
export default store
