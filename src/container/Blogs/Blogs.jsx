import React, {Component, Fragment} from 'react';
import './blogs.css';
import BlogsComponent from '../../component/BlogsComponent/BlogsComponent';
import axios from 'axios';

class Blogs extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false
    }

    getPostApi = () => {
        axios.get(`http://localhost:3004/posts?_sort=id&_order=desc`)
        .then((result)=>{
            this.setState({
                post: result.data
            })
        })
    }
    postDataApi = () => {
        axios.post(`http://localhost:3004/posts`, this.state.formBlogPost)
        .then((res) => {
            console.log(res);
            this.getPostApi();
            this.setState({
                isUpdate:false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            });
        }, (err) => {
            console.log('error: ', err);
        })
    }
    putDataApi = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
        .then((res)=> {
            console.log(res);
            this.getPostApi();
            this.setState({
                isUpdate:false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            });
        });
    }
    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`)
        .then((res) =>{
            // console.log(res);
            this.getPostApi();
        })
    }

    handleFormInput = (event) => {
        // console.log('data input', event.target)
        // let title = event.target.value
        let formBlogPostData = {...this.state.formBlogPost};
        let timenow = new Date().getTime();
        // console.log(timenow);
        if(!this.state.isUpdate){
            formBlogPostData['id'] = timenow;
        }
        formBlogPostData[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostData
        // }, () => {
        //     console.log('data input', this.state.formBlogPost)
        })

    }

    handleSubmit = () => {
        // console.log(this.state.formBlogPost);
        if(this.state.isUpdate){
            this.putDataApi();
        }else{
            this.postDataApi();
        }
    }

    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }
    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => console.log(json))
        // axios.get(`http://localhost:3004/posts`)
        // .then((result)=>{
        //     this.setState({
        //         post: result.data
        //     })
        // })
        this.getPostApi();
    }
    render() {
        return (
            <Fragment>
                <h2 className="title">Selamat datang di Blog Dwi Nuryadi</h2>
                {/* <BlogsComponent title="title" desc="desc"/> */}
                <div className="content">
                <div className="formData">
                    <label htmlFor="title" className="judul">Title Blog</label>
                        <input 
                            type="text" 
                            name="title" 
                            id="title" 
                            placeholder="add title" 
                            className="title-form"
                            value={this.state.formBlogPost.title}
                            onChange={this.handleFormInput}
                        />
                    <label htmlFor="body-content" className="judul">Blog Content</label>
                        <textarea 
                            name="body" 
                            id="body" 
                            cols="30"
                            rows="10" 
                            placeholder="add blogs contnet" 
                            className="title-form"
                            value={this.state.formBlogPost.body}
                            onChange={this.handleFormInput}
                        ></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan data</button>
                </div>
                    {
                        this.state.post.map(post => {
                            return <BlogsComponent 
                                        key={post.id} 
                                        data={post}
                                        remove={this.handleRemove}
                                        update={this.handleUpdate}
                                    />
                        })
                    }
                </div>
            </Fragment>
        )
    }
}

export default Blogs;