import { combineReducers } from 'redux'

import auth from './redux/auth'
import reservation from './redux/reservation'
import feedback from './redux/feedback'
import contact from './redux/contact'
import activity from './redux/activity'
import application from './redux/application'
import course from './redux/course'
import cart from './redux/cart'

const reducer = combineReducers({
    auth,
    cart,
    reservation,
    feedback,
    contact,
    activity,
    application,
    course
})

export default reducer