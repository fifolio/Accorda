import { useState } from "react";

export default function Connection() {

    const [connected, setConnected] = useState(false)
    setInterval(() => {
        setConnected(true)
    }, 120000);


    return (
        <div className="my-3 alert alert-warning" role="alert">
            <h6>Connect to Server:</h6>
            <i>Please wait unill the server-side connection complete to post your job application</i>
            <div className="mt-2 fw-semibold text-success">
                <span>✔ Send Request</span><br />
                <span>✔ Authentication</span><br />
                <span className={`${connected ? '' : 'd-none' }`}>✔ Connected</span>
            </div>
        </div>
    )
}