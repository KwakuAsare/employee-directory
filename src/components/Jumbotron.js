import React from "react";


function Jumbotron() {
    return (
        <div className="container">
            <div className="jumbotron bg-warning text-center">
                <h1>User Directory</h1>
                <p>Use the search button</p>
                <p>
                    <button className="btn btn-primary btn-lg">Learn more</button>
                </p>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    <div className="col">Column</div>
                    <div className="col">Column</div>
                    <div className="col">Column</div>
                    <div className="col">Column</div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;

