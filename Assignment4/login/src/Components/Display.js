import { Component } from "react";

class Display extends Component
{
    render()
    {
        return (
            <div class=" container bg-dark text-white" id="display">
                <div class="row ">
                    <div class="col-md-7 offset-md-2">
                        <label for="name" >Name</label>
                        <p id="labelName"></p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-7 offset-md-2">
                        <label for="password" >Password</label>
                        <p id="labelPass"></p>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-md-5 offset-md-2">
                        <button  class="btn-danger" onClick={()=>{this.props.onClear()}}>Clear</button>
                    </div>
                </div>
                
            </div>
        );
    }
}
export default Display;