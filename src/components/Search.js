import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import warning from 'tiny-warning';




export default class Seach extends Component {
    state = { comic: [], warning: false };


    handleSubmit = async (e) => {
        e.preventDefault();
        const comic = document.querySelector('#search-term').value;
        if (comic >= 1 && comic <= 2219) {
            const url = `https://xkcd.now.sh/?comic=${comic}`;
            const data = await axios.get(url);
            console.log(data.data);
            this.setState({
                comic: data.data,
                warning: false,
            })
        } else {
            console.log('NaN')
            this.setState({
                warning: true,  
                comic: [],             
            })
        }
    }


    render() {
        const { img, title: alt, alt: title } = this.state.comic;

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


        return <>
            <h1>Search</h1>
            {links}
            {this.state.warning
            ?
            <h1>Please enter a number between 1 and 2219</h1>
            :
            <div></div>
            }
            <form onSubmit={this.handleSubmit}>
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

            <img
                className="searchImage" 
                src={img}
                alt={alt}
                title={title}
            />
            <div>
                {title}
            </div>
        </>
    }
}