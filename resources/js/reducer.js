import { combineReducers } from 'redux'

import auth from './redux/auth'
import reservation from './redux/reservation'
import feedback from './redux/feedback'
import contact from './redux/contact'
import activity from './redux/activity'
import application from './redux/application'
import course from './redux/course'
import cart from './redux/cart'
import transaction from './redux/transaction'
import ebook from './redux/ebook'
import media from './redux/media'

const reducer = combineReducers({
    auth,
    cart,
    reservation,
    feedback,
    contact,
    activity,
    application,
    course,
    transaction,
    ebook,
    media
})

export default reducer