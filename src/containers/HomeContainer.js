import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

class HomeContainer extends Component {
    render() {
        return (
            <div>
                <h1> Home Container</h1>
                <Link to='/public/post'> Todos los post del la API </Link>
            </div>
        );
    }
}

HomeContainer.propTypes = {

};

export default HomeContainer;