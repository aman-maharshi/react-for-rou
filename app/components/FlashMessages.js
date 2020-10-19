import React from "react"

function FlashMessages({ messages }) {
    return (
        <div className="floating-alerts">
            {messages.map((item, index) => {
                return (
                    <div key={index} className="alert alert-success text-center floating-alert shadow-sm">
                        {item}
                    </div>
                )
            })}
        </div>
    )
}

export default FlashMessages
