/* AXIOS - CREATING NEW POST */
import React from "react"
import Container from "./Container"
import Axios from "axios"

function CreatePost() {
    async function handleSubmit(e) {
        e.preventDefault()

        try {
            await Axios.post("/create-post", { title: "Test Title", body: "Test Body", token: localStorage.getItem("goSocialToken") })
            console.log("New Post Created")
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
                    <input autoFocus name="title" id="post-title" className="form-control form-control-lg form-control-title" type="text" placeholder="" autoComplete="off" />
                </div>

                <div className="form-group">
                    <label htmlFor="post-body" className="text-muted mb-1 d-block">
                        <small>Body Content</small>
                    </label>
                    <textarea name="body" id="post-body" className="body-content tall-textarea form-control" type="text"></textarea>
                </div>

                <button className="btn btn-primary">Save New Post</button>
            </form>
        </Container>
    )
}

export default CreatePost
