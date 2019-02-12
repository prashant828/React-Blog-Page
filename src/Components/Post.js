import React, {Component} from 'react';
import axios from 'axios';
import classes from './Post.module.css'

class post extends Component{

    state = {
        post: {
            title: null,
            body: null
        }
    };

    componentDidMount(){
        console.log(this.props.match.params.id);
        let url = 'https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id;
        axios.get(url)
            .then(res=>{
                console.log(res.data);
                this.setState({
                    title: res.data.title,
                    body: res.data.body
                })
            })
    }

    render(){
        return(
            <div className={classes.post}>
                <h2>{this.state.title}</h2>
                <p>{this.state.body}</p>
            </div>

        )
    }
}

export default post;
