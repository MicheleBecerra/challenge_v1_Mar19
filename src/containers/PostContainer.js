import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from  './../components/AppFrame';
import { getPostById } from './../selectors/posts';

class PostContainer extends Component {
    render() {
        return (
            <div>
                <AppFrame header = {<h2> {this.props.post.title} </h2>}
                    body= {
                        <div>
                            <img src= {this.props.post.images} width='300px' height= '200px'/>
                            <p> Mucho texto bla bla bla ..... no traía texto la APi.</p>
                        </div>                    
                    } 
                >

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