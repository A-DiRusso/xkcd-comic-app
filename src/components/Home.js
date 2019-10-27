import React, { Component } from 'react'
import axios from 'axios';


export default class Home extends Component {
    state = { comic: [] };

    async componentDidMount() {
        const url = `https://xkcd.now.sh/?comic=latest`;
        const data = await axios.get(url);
        console.log(data.data);
        this.setState({
            comic: data.data
        })

    }
    render() {
        const { img, title: alt, alt: title } = this.state.comic;
        return <>
            <h1>Home</h1>
            <img 
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