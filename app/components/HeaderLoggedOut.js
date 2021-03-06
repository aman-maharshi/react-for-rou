/* AXIOS - USER LOGIN */
import React, { useState } from "react"
import Axios from "axios"

function HeaderLoggedOut({ setLoggedIn }) {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await Axios.post("/login", { username: username, password: password })

            if (response.data) {
                // console.log(response.data)
                localStorage.setItem("goSocialToken", response.data.token)
                localStorage.setItem("goSocialUsername", response.data.username)
                localStorage.setItem("goSocialAvatar", response.data.avatar)
                setLoggedIn(true)
            } else {
                console.log("Incorrect Username / Password")
            }
        } catch (e) {
            console.log(e.response.data)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mb-0 pt-2 pt-md-0">
            <div className="row align-items-center">
                <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                    <input
                        onChange={e => {
                            setUsername(e.target.value)
                        }}
                        name="username"
                        className="form-control form-control-sm"
                        type="text"
                        placeholder="Username"
                        autoComplete="off"
                    />
                </div>
                <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                    <input
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                        name="password"
                        className="form-control form-control-sm"
                        type="password"
                        placeholder="Password"
                    />
                </div>
                <div className="col-md-auto">
                    <button className="btn btn-success btn-sm">Sign In</button>
                </div>
            </div>
        </form>
    )
}

export default HeaderLoggedOut
