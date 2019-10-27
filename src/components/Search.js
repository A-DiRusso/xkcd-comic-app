import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Seach extends Component {
    state = { comic: [] };

    async componentDidMount() {
        const url = `https://xkcd.now.sh/?comic=303`;
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
            </ul>
        return <>
            <h1>Search</h1>
            {links}
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