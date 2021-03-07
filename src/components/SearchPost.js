import React from 'react'
// import './style.css'
import { connect } from 'react-redux'
// import parse from 'html-react-parser'
import {GiCancel} from "react-icons/gi"
import { AiOutlineSearch } from "react-icons/ai";

class SearchPost extends React.Component {
    constructor() {
        super()
        this.state = {
            search: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    render() {
        return (
            <div className="search-style">
                <span className = "icon-search"><AiOutlineSearch /></span>
                <input 
                    type = "search"
                    className = "search-input-field" 
                    placeholder = "Search"  
                    value = {this.state.search}
                    name = 'search'
                    onChange = {this.handleChange}    
                />  <br />
            {
               this.props.posts.length>0 ? this.props.posts.filter((post) => post.title.includes(this.state.search)||post.text.includes(this.state.search)).map((ele, i)=>{
                    return (
                        <div className = "container">
                            <div className = "box-style">
                                <h2 key = {i} className= "title">{ele.title}</h2>
                                <div className= "text-container">{ele.text}</div>
                            </div>
                        </div>
                    )
                }) : <h5>Oops!!!No posts,Add few posts!!!</h5>
            }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(SearchPost) 