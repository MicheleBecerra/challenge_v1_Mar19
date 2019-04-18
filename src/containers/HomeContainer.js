import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  AppFrame  from './../components/AppFrame';
import PostActions from './../components/PostActions';



class HomeContainer extends Component {
    render() {
        return (
            <div>   
                <AppFrame
                    header= 'Home'
                    body={
                        <div>
                            Esta es la pantalla inicial con todos los posts.
                            
                            <PostActions>
                                <Link to='/public/posts'> Todos los post del la API </Link>
                                <br />
                                <Link to='/public/posts'> Todos los post públicos de la la API </Link>
                                <br />
                                <Link to='/posts/:id'> Todos los post  privados  de la la API </Link>
                            </PostActions>
                        </div>

                    }
                ></AppFrame>



            </div>
        );
    }
}


export default HomeContainer;