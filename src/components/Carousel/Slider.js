import Carousel from "./Carousel";
const Slider =(props)=>
{
    return (

        <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
        <h1 className="heading" > <span>Curious to know more?</span></h1>    
         <h1 className="heading2">See what we can do for your industry.</h1>       
            <Carousel
                show={4}
                infiniteLoop
            >
                <div>
                    <div style={{padding: 8}}>
                        <img src={process.env.PUBLIC_URL + `/img/img1.png`} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={process.env.PUBLIC_URL + `/img/img2.png`} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={process.env.PUBLIC_URL + `/img/img3.png`} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={process.env.PUBLIC_URL + `/img/img4.png`} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={process.env.PUBLIC_URL + `/img/img5.png`} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={process.env.PUBLIC_URL + `/img/img1.png`} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={process.env.PUBLIC_URL + `/img/img2.png`} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={process.env.PUBLIC_URL + `/img/img3.png`} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
            </Carousel>
        </div>
    );
}
export  default Slider