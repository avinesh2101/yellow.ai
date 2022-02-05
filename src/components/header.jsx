import "./youtube_embed/youtubestyles.css";
import YoutubeEmbed from "./youtube_embed/YoutubeEmbed";

export const Header = (props) => {
  return (
    <header id='header'>
     <div >
      <div className='rowC'>

      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row ' >

              <div className='col-lg-5 col-md-offset-2 intro-text1'>
                <h1  >Convert unstructured data to <span>contextual and searchable insights </span> </h1>
                <p>Turn 100’s of documents worth of unstructured data into a fine-tuned structured and searchable set in a fast, easy and comprehensive way – with our AI and ML-powered Insights Interface!</p>
                <button></button>
              </div>

              <div className=' col-md-offset-2 intro-text'>
              <YoutubeEmbed embedId="dQw4w9WgXcQ" />  
              </div>

            </div>
          </div>
        </div>
      </div>
      </div>  
      </div>
    
    </header>
  )
}
