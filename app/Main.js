import React from "react"
import ReactDOM from "react-dom"

function Example() {
    return (
        <div>
            <h1>Heya</h1>
        </div>
    )
}

ReactDOM.render(<Example />, document.querySelector("#root"))

if (module.hot) {
    module.hot.accept()
}
