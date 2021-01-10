import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { rootReducer } from './index'

export default createStore(rootReducer, devToolsEnhancer({}))
