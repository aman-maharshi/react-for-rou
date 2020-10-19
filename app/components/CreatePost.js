/* AXIOS - CREATING NEW POST */
import React, { useState } from "react"
import Container from "./Container"
import Axios from "axios"
import { withRouter } from "react-router-dom" /* To use history to redirect */

function CreatePost(props) {
    const [postTitle, setPostTitle] = useState()
    const [postBody, setPostBody] = useState()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const response = await Axios.post("/create-post", { title: postTitle, body: postBody, token: localStorage.getItem("goSocialToken") })
            props.addFlashMessage("New post created.")
            // Redirect to new post URL
            props.history.push(`/post/${response.data}`)
        } catch (e) {
            console.log(e.response.data)
        }
    }

    return (
        <Container title="Create Post">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="post-title" className="text-muted mb-1">
                        <small>Title</small>
                    </label>
                    <input onChange={e => setPostTitle(e.target.value)} autoFocus name="title" id="post-title" className="form-control form-control-lg form-control-title" type="text" placeholder="" autoComplete="off" />
                </div>

                <div className="form-group">
                    <label htmlFor="post-body" className="text-muted mb-1 d-block">
                        <small>Body Content</small>
                    </label>
                    <textarea onChange={e => setPostBody(e.target.value)} name="body" id="post-body" className="body-content tall-textarea form-control" type="text"></textarea>
                </div>

                <button className="btn btn-primary">Save New Post</button>
            </form>
        </Container>
    )
}

export default withRouter(CreatePost)
