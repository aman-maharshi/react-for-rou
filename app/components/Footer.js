import React from "react"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="text-center text-muted py-3">
            <p>
                <Link to="/" className="mx-1">
                    Home
                </Link>{" "}
                |{" "}
                <Link className="mx-1" to="/about-us">
                    About Us
                </Link>{" "}
                |{" "}
                <Link className="mx-1" to="/terms">
                    Terms
                </Link>
            </p>
        </footer>
    )
}

export default Footer
