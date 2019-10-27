import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';




export default class Seach extends Component {
    state = { comic: [], search: null };

    async componentDidMount() {
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const comic = document.querySelector('#search-term').value;
        console.log(comic);
        const url = `https://xkcd.now.sh/?comic=${comic}`;
        const data = await axios.get(url);
        console.log(data.data);
        this.setState({
            comic: data.data
        })
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
                        Home
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
            <form onSubmit={this.handleSubmit}>
                <input
                    id='search-term'
                    placeholder='Please enter a number between 1 and 2219'
                    className="searchInput"
                />
                <input
                    type='submit'
                    className="searchSubmit btn"
                    value="Search for a comic"
                />
            </form>

            <img
                className="latestImage" 
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