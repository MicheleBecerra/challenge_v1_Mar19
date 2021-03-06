import React from 'react';
import PropTypes from 'prop-types';

const PublicPostData = ({ title, _id, images, isPrivate, text, status, publish_date }) => {
    return (
        <div>
            <div className = 'public-post-data'></div>
            <h1> Datos de cada post ya sea publico o privado</h1>
            <div>Título del artículo<i>{title}</i></div>
            <div>Número ID: <i>{_id}</i></div>
            <div>Imagen: <i>{images}</i></div>
            <div>Disponibilidad del artículo: <i>{isPrivate}</i> </div>
            <div> Texto : <i>{text}</i></div>
            <div>Status del Post: <i>{status}</i></div>
            <div>Fecha de Publicación:  <i>{publish_date}</i></div>
            
        </div>
    );
};

PublicPostData.propTypes = {

    title: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    images: PropTypes.element.isRequired,
    isPrivate: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    publish_date: PropTypes.string.isRequired,

};

export default PublicPostData ;

