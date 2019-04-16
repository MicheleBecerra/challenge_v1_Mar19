import React from 'react';
import PropTypes from 'prop-types';

const PostArticle = ({ title, _id, text }) => {
    return (
        <div>
            <h1> Componente con los elementos requeridos para mostrar el artículo</h1>
            <h3> Articulo: {title} / ID: {_id} / Contenido: {text} </h3>
        </div>
    );
};

PostArticle.propTypes = {
    title: PropTypes.string,
     _id: PropTypes.string,
    text: PropTypes.string,
};

export default PostArticle;