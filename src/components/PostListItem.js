import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import urlPath from '../api/url';


const PostListItem = ({ title, _id, images, isPrivate, publish_date }) => {
    return (
        <div>
            <div className = "post-list-item">
                <div className = "field" >
                                      
                    <h2> {title} </h2>

                    <div> Número ID: <i>{_id} </i></div>
                    <div> Imagen: <i>{images} </i>
                    <br/>
                    <Link to = {`posts/${_id}`} >Leer más ... {title}.</Link>
                    </div>
                    <div>Disponibilidad del artículo: <i>{isPrivate}</i> </div>
                    <div>Fecha de Publicación:  <i>{publish_date}</i></div>

                </div>

            </div>          
        </div>
    );
};


PostListItem.propTypes = {
    title: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    isPrivate: PropTypes.bool.isRequired,
    status: PropTypes.string.isRequired,
    publish_date: PropTypes.string.isRequired,  
};

export default PostListItem;