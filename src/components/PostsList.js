import React from 'react';
import PropTypes from 'prop-types';
import PostListItem from './PostListItem';


const PostsList =  ({ posts })=> {
    return (
        <div>
            <div className="posts-list">
            {
                posts.map( p =>
                    <PostListItem
                    key={p.id}
                    id={p.id}  
                    images={p.images}
                    title={p.title}
                    urlPath={urlPath}>                                       
                    </PostListItem>)
            }
            </div>
        </div>
    );
};

PostsList.propTypes = {
    posts: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default PostsList;