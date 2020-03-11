import { combineReducers } from 'redux-immutable'
import { reducer as loginReducer} from '../component/login/store'
// import { reducer as articleDetailReducer } from '../pages/articleDetail/store'
// import { reducer as homeReducer } from '../pages/home/store'
// import { reducer as summaryReducer } from '../pages/summary/store'
// import { reducer as articleReducer } from '../pages/article/store'
// import { reducer as homepageReducer } from '../pages/homepage/store'
// import { reducer as summaryDetailReducer} from '../pages/summaryDetail/store'


export default combineReducers({
    login: loginReducer,
})