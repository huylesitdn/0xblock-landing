import React from "react";

const NotFound = () => {
    return (
        <>
            <section>
                <div className="container">
                    <h1>Oops! The page you are looking for is not available.</h1>
                    <Link className="btn btn-primary" to="/">Get back to Home</Link>
                </div>
            </section>
        </>
    )
}

export default NotFound