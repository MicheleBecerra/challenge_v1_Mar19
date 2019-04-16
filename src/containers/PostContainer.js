import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from  './../components/AppFrame';
import { getPostById } from './../selectors/posts';

class PostContainer extends Component {
    render() {
        return (
            <div>
                <AppFrame header = {` ID de la publicación: ${this.props._id}`}
                    body= {<p>  {this.props.post.title}</p>}>

                </AppFrame>
            </div>
        );
    }
}

PostContainer.propTypes = {
_id: PropTypes.string.isRequired,

};

const mapStateToProps = ( state, props) => ({
    post :  getPostById( state, props)
});

export default connect(mapStateToProps, null) (PostContainer);