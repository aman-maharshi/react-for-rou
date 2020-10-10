import React from "react"

function Footer() {
    return (
        <footer className="mt-lg-5 mt-md-3 text-center text-muted py-3">
            <p>
                <a href="/" className="mx-1">
                    Home
                </a>{" "}
                |{" "}
                <a className="mx-1" href="/about-us">
                    About Us
                </a>{" "}
                |{" "}
                <a className="mx-1" href="/terms">
                    Terms
                </a>
            </p>
        </footer>
    )
}

export default Footer
