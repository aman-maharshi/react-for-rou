import React from "react"
import Container from "./Container"

import Axios from "axios"

function HomeGuest() {
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await Axios.post("http://localhost:8080/register", { username: "test", email: "test@test.com", password: "qwerty123456" })
            console.log("User was successfully created")
        } catch (e) {
            console.log(e.response.data)
        }
    }

    return (
        <Container title="Home Guest" wide={true}>
            <div className="row align-items-center">
                <div className="col-lg-5 pb-3 py-lg-5 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username-register" className="text-muted mb-1">
                                <small>Username</small>
                            </label>
                            <input id="username-register" name="username" className="form-control" type="text" placeholder="Pick a username" autoComplete="off" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email-register" className="text-muted mb-1">
                                <small>Email</small>
                            </label>
                            <input id="email-register" name="email" className="form-control" type="text" placeholder="you@example.com" autoComplete="off" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password-register" className="text-muted mb-1">
                                <small>Password</small>
                            </label>
                            <input id="password-register" name="password" className="form-control" type="password" placeholder="Create a password" />
                        </div>
                        <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
                            Sign up for goSocial
                        </button>
                    </form>
                </div>
            </div>
        </Container>
    )
}

export default HomeGuest
