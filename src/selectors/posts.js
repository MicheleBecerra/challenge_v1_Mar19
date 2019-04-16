import { createSelector } from 'reselect';


export const getPosts = state => state.posts ;

export const getPostById = createSelector( 
    (state, props) => state.posts.find( p => p._id === props._id),
    post => post
)