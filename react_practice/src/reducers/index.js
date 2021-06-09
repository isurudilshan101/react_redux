import {combinedReducer} from 'redux';
import AllPostReducer from './reducer-AllPost';

const  rootReducer=combinedReducer({
    allPosts:AllPostReducer,
})

export default rootReducer;