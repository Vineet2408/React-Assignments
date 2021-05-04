import { Component } from "react";
import Form from './Form';
import Header from './Header';
import Display from './Display';
class Main extends Component
{
    constructor()
    {
        super();
        this.onDisplay= this.onDisplay.bind(this);
        this.onClear = this.onClear.bind(this);
    }
    onDisplay(name,password)
    {
        document.getElementById('labelName').innerHTML=name;
        document.getElementById('labelPass').innerHTML=password;
    }
    onClear()
    {
        document.getElementById('labelName').innerHTML='';
        document.getElementById('labelPass').innerHTML='';
    }

    render()
    {
        return (
            <div>
                 <Header></Header>
                <div class="container-fluid">
                    <div class="row">
                    <div class="col-md-6">
                        <Form onDisplay={this.onDisplay}></Form>
                    </div>
                    <div class="col-md-6">
                        <Display onClear={this.onClear}></Display>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Main;