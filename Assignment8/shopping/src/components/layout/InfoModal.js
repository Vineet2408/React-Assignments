import React, { Fragment } from 'react'

const InfoModal = (props) => {

    let user = props.user;
    let prod = props.prod;
   
    return (
        <div className="modal">
            <header>
                <h3 className="text-center text-decoration-underline">{props.title}</h3>
                <hr></hr>
            </header>
            <div className="container text-white">
                {
                    (props.user) && (
                        <Fragment>
                            <div className="row">
                                <div className="col-6 ml-2">
                                   <p> <strong className="text-capitalize"> Name : {user.name} {user.lastName}</strong></p>
                                </div>
                                <div className="col-6"></div>
                            </div>
                            <div className="row">
                                <p><i> <strong>Email</strong> : {user.email}</i></p>
                            </div>
                            <div className="row">
                                <p><strong>Age</strong> : {user.age}</p>
                            </div>
                            <div className="row">
                                <p><strong>Contact</strong> : {user.contact}</p>
                            </div>
                        </Fragment>
                    )
                }
                {
                    (props.prod) && (
                        <Fragment>
                            <div className="row">
                                <div className="col-6 ml-2">
                                   <p> <strong className="text-capitalize"> Name : {prod.title}</strong></p>
                                </div>
                                <div className="col-6"></div>
                            </div>
                            <div className="row">
                                <p><i> <strong>Description</strong> : {prod.description}</i></p>
                            </div>
                            <div className="row bg-success">
                                <p><strong>Price</strong> : {prod.price}</p>
                            </div>
                          
                        </Fragment>
                    )
                }
            
                <div className="row justify-content-around">
                    <div className="col-2">
                        <button className="btn btn-success" onClick={props.onDismiss}>Dismiss</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoModal;
