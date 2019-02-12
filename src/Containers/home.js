import React, {Component} from 'react';
import BlogTile from '../Components/blogTile';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';

class home extends Component{

    state = {
        posts: [],
    };

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                console.log(res.data);
                this.setState({
                    posts: res.data
                })
            });
    };

    handleDelete = (event, id) => {
        event.preventDefault();
        const postIndex = this.state.posts.findIndex(post=>{
            return post.id === id;
        });
        let posts = [...this.state.posts];
        posts.splice(postIndex, 1);
        this.setState({
            posts: posts
        })
    };

    render(){
        let view;
        if(this.state.posts.length >= 1){
            view = this.state.posts.map(post=>{
                return <Link to={'post/'+post.id} key={post.id}><BlogTile title={post.title} body={post.body} key={post.id} click={(event)=>this.handleDelete(event, post.id)}/></Link>
            })
        }else {
            view = <div>No Posts Available</div>
        }

        return(
            <div>
                {view}
            </div>
        )
    }
}

export default home;
