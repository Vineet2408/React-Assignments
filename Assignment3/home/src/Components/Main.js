
import React from 'react';
import { Component } from 'react';
import Header from './Header';
import ImageCarousel from './ImageCarousel';
import Footer from './Footer';
class Main extends Component
{
    constructor()
    {
        super();

        this.state={
                pics:[
                        {imageLink:'https://i1.sndcdn.com/artworks-000482183808-s7h0nx-t500x500.jpg'},
                        {imageLink:'https://i.ytimg.com/vi/8qLL2Gx3I_k/maxresdefault.jpg'},
                        {imageLink:'https://i.ytimg.com/vi/9bXgeAJbM1g/maxresdefault.jpg'}
                    ]
        }
        this.onNext = this.onNext.bind(this);
        this.onPrevious = this.onPrevious.bind(this);
    }

    render()
    {
        return (<div>
            <Header></Header>
            <ImageCarousel onNext={this.onNext} onPrevious={this.onPrevious}></ImageCarousel>
            <Footer></Footer>
        </div>);
    }

    onNext(i)
    {
        console.log('next',i);
        let link=this.state.pics[i];
        document.getElementById('carouselItem').src=link.imageLink;
        console.log(link.imageLink);
    }
    onPrevious(i)
    {
        console.log('previous',i);
        let link=this.state.pics[i];
        document.getElementById('carouselItem').src=link.imageLink;
        console.log(link.imageLink);
    }
}
export default Main;