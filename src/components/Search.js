//Search imports follow the same need/use pattern of Home.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css';




export default class Seach extends Component {
    state = { comic: [], warning: false };


    handleSubmit = async (e) => {
        //we don't want the event to fire on page load
        e.preventDefault();
        // on submit we access the dom to get the entered value for id searc-term
        const comic = document.querySelector('#search-term').value;
        // we are controlling the imput to be a number between 1 and 2219 per the instructions
        if (comic >= 1 && comic <= 2219) {
            const url = `https://xkcd.now.sh/?comic=${comic}`;
            const data = await axios.get(url);
            //we should really put some error handling here incase the API is down 
            //setState with the returned promise, and make sure no warning error shows
            this.setState({
                comic: data.data,
                warning: false,
            })
            //this is the bad input path
        } else {
            this.setState({
                warning: true,  
                comic: [],             
            })
        }
    }


    render() {
        // addtionally destructuring out the warning boolean
        const { comic: { img, title: alt, alt: title }, warning } = this.state;

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
            </ul>;

        // this JSX returns a warning message or the happy path based on state
        // the imput form persists 
        return <>
            <h1>Search</h1>
            {links}
            {warning
            ?
            <h1>Please enter a number between 1 and 2219</h1>
            :
            <div></div>
            }
            <form className='searchForm' onSubmit={this.handleSubmit}>
                <input
                    id='search-term'
                    placeholder='Please enter a number'
                    className="searchInput"
                />
                <input
                    type='submit'
                    className="searchSubmit"
                    value="Search for a comic"
                />
            </form>
            <div className="comicContainer">
                <img
                    className="searchImage" 
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