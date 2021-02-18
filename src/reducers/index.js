import {combineReducers} from 'redux'
import languageType from './languageType'
import asyncDemoString from './asyncDemoString'
import menuStatus from './menuStatus'

const AppRedux = combineReducers({
    languageType,
    asyncDemoString,
    menuStatus
});

export default AppRedux
