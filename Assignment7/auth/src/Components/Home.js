import { Component } from "react";

class Home extends Component
{
    render()
    {
        return (
            <div>
                <h1 className='home-heading'><strong>React Js Assignment</strong></h1>
                <div className='container component'>
                    <div className='row'>
                        <div className='col-4'>
                            <h4> <strong>Task Completed :</strong></h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <ul>
                                <li>Login</li>
                                <li>Validation</li>
                                <li>Upcoming feature :- Update Profile</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;