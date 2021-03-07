import React from 'react'
// import './style.css'
import {connect} from 'react-redux'
import { addNewPost } from '../actions/postsAction'
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import {CKEditor} from "@ckeditor/ckeditor5-react"

class PostForm extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            text: '',
            title_error: '',
            text_error: '',
            addNewPost: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleAddNewPost = () => {
        this.setState({
            addNewPost: true
        })
    }

    handleBodyChange=(event,editor)=>{
        const text=editor.getData()
        this.setState({
           text
        })
    }


    handleValidation = () => {
        let title_error = '';
        let text_error = ''
        //title
        if(this.state.title === '') {
            title_error = 'Title is required!!!'
        }
        //text
        if(this.state.text === '') {
            text_error = 'Text is required!!!'
        }

        if(title_error || text_error) {
            this.setState({title_error, text_error})
        }if(title_error === '' && text_error === '') {
            return true
        }else {
            return false
        }
    }

    
    handleSubmit = (e) => {
        e.preventDefault()
        const isValid = this.handleValidation()
        if(isValid) {
            const formData = {
                title: this.state.title,
                text: this.state.text
            }      
        //console.log(formData)
        const redirect = () => {
            return this.props.history.push('/PostLists')
        }
        this.props.dispatch(addNewPost(formData,redirect))

        this.setState({
            title: '',
            text: ''
        })}
    }

    render() {
        return (
            <div className = "form-container">
                <form onSubmit = {this.handleSubmit}>
                    <div>
                            <input 
                                type = "text" 
                                id = "title" 
                                name = "title" 
                                value = {this.state.title}
                                onChange = {this.handleChange}
                                className = "text-field" 
                                placeholder= "title"
                            />
                        <span className = "error">{this.state.title_error}</span>
                    </div> <br />

                    {/* <div> */}
                        {/* <label htmlFor = "text">Text</label> &nbsp; */}
                            {/* <textarea 
                                type = "text" 
                                id = "text" 
                                name = "text" 
                                value = {this.state.text}
                                onChange = {this.handleChange}
                                className = "text-area" 
                                placeholder= "text"
                            > </textarea>
                        <span className = "error">{this.state.text_error}</span> */}

                        <div>
                            <CKEditor
                            editor={ClassicEditor}
                            data={this.state.text}
                            onChange={this.handleBodyChange}
                            className = "text-area"
                            style= {{width: "20px"}}
                            />
                        </div>
                    {/* </div> <br /> */}

                    <input type = "submit" value = "PUBLISH"  className = "publish-button" />
            </form>

            </div>
            )}
    }

export default connect()(PostForm)