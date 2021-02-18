import {combineReducers} from 'redux'
import languageType from './languageType'
import asyncDemoString from './asyncDemoString'

const AppRedux = combineReducers({
    languageType,
    asyncDemoString
});

export default AppRedux
