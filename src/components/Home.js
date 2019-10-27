//This allows us to make a react component
import React, { Component } from 'react';
//This module allows us to link router to all other routers
import { Link } from 'react-router-dom';
// this allows us the syntactic sugar of async and await over fetch .then
import axios from 'axios';
// brings in our custom style
import './styles.css';

// we are inline export defaulting 
export default class Home extends Component {
    //react handles the consturctor now, but I really should switch this to hooks for further practice
    state = { comic: [] };

    //We have to asynchronously go to xkcd to get our comics once the page is loaded the render will refire after we setState()
    async componentDidMount() {
        // we give axios the url and tell it what kind of verb we want to call - post, put, get, delete 
        const url = `https://xkcd.now.sh/?comic=latest`;
        const data = await axios.get(url);
        //we use the returned promised data to set state
        this.setState({
            comic: data.data
        })

    }
    render() {
        //destructuring the propties we need out of state and aliasing alt and title for the proper name change
        const { img, title: alt, alt: title } = this.state.comic;
        // these are the links for a nav menu which should probably be in its own component
        const links = 
            <ul>
                <li>
                    <Link 
                        to='/'
                        className='latest'
                    >
                        Latest
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/search'
                        className='search'
                    >
                        Search
                    </Link>
                </li>
            </ul>
        //we return some JSX that has the apropriate state information    
        return <>
            <h1>Home</h1>
            {links}
            <div className="comicContainer">
                <img
                    className="latestImage" 
                    src={img}
                    alt={alt}
                    title={title}
                />
            </div>
            <div className="imageTitle">
                {title}
            </div>
        </>
    }
}