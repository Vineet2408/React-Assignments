import { Component } from "react";

class ImageCarousel extends Component
{

    render()
    {
        let i=0;
        let p="<";
        let n=">";
        return (
            <div className="carousel" >
            <table>
                <tbody>
                    <tr>
                        <td>
                        <button onClick={()=>{this.props.onPrevious((i<=0)?i=2:--i)}} className="carousel-previous-btn"> {p}</button>
                        </td>
                        <td>
                        <img src="https://i1.sndcdn.com/artworks-000482183808-s7h0nx-t500x500.jpg" id="carouselItem" alt="carousel-pics"/>
                        </td>
                        <td>
                        <button onClick={()=>{this.props.onNext((i>=2)?i=0:++i)}} className="carousel-next-btn"> {n}</button>
                        </td>
                    </tr>
                </tbody>
    
            </table>
        </div>
    
        );
    }
}

export default ImageCarousel;