import React from 'react'

const InfoModal = (props) => {

    let user = props.user;
    let prod = props.prod;
   
    return (
        <div className="modal">
            <header>
                <h3>{props.title}</h3>
            </header>
            <div className="row">
                {
                    (props.user) && (
                        <div className="card">
                            <p className="card-title"><strong>{user.name} {user.lastName}</strong></p>
                            <p>{user.email}</p>
                            <p>{user.age} {user.contact}</p>
                        </div>
                    )
                }
                {
                    (props.prod) && (
                        <div className="card">
                            <p className="card-title"><strong>{prod.title}</strong> </p>
                            <p>{user.description}</p>
                            <p>{user.price} </p>
                        </div>
                    )
                }
            </div>
            <div className="row justify-content-center">
                <div className="col-4"></div>
                <button className="btn btn-success" onClick={props.onDismiss}>Dismiss</button>
            </div>
        </div>
    )
}

export default InfoModal;
