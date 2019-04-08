import React from 'react';
import PropTypes from 'prop-types';

const PostListItem = ({title}) => {
    return (
        <div>
            <div className = "post-list-item">
                <div className = "field" >
                    <h1>Artículo del Post Seleccionado</h1>
                    <br/>
                    <h3>{title}</h3>
                    <Link to = {`${props.urlPath}{:idPost}`}> TEXTOOOOOOO ....</Link>
                </div>

            </div>
            
        </div>
    );
};

PostListItem.propTypes = {
    title: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,    
};

export default PostListItem;