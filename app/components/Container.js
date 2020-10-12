import React, { useEffect } from "react"

function Container(props) {
    // Change Page title and scroll to top on first load
    useEffect(() => {
        document.title = `${props.title} | goSocial`
        window.scrollTo(0, 0)
    }, [])

    return <div className={"container py-md-5 " + (props.wide ? "" : "container--narrow")}>{props.children}</div>
}

export default Container
