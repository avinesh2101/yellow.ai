
import {FaCrosshairs,FaBoxes,FaRobot,FaPlayCircle,FaArrowsAlt,FaSearch,FaDatabase,FaWrench,FaChevronDown} from "react-icons/fa";


export const Benefits = (props) =>{
    return(
        <div id="benefits">
            <div  className="benefits row ">
            <div className=" col-md-4 col-sm-6 ">
            <h1>15%</h1>
            <p>Increase in Productivity</p>
            {/* <img   className=" col-md-4 col-sm-6 " src={process.env.PUBLIC_URL + `/img/flower.png`}></img> */}
            </div>

            <div className="col-md-4 col-sm-6">
            <h1>30%</h1>
            <p>Cost reduction</p>
            </div>

            <div className="col-md-4 col-sm-6">
            <h1>100+</h1>
            <p>Global Enterprise customers</p>
            </div> 
            </div>

            <div className="row" >
                <h2 className='heading' >Reap the <span>benefits of fast, contextual and AI-enabled </span>insights interface </h2>
                
                <div className="space   ">
                <div className='col-md-2 col-md-offset-2 '>
                        <details>
                            <summary> 
                                <FaCrosshairs style={{color: '#73CBF2', fontSize: '25px'}} /> 
                                <p>Totally optimized search-to-resolution journeys to speed up your operations</p>
                                <FaChevronDown style={{color: 'black', fontSize: '25px'}}  className="down" />
                            </summary>
                            <p>Users can go from search to resolution within 2 clicks! Optimize the way people search for information by giving them contextually-correct resolutions, within seconds, in the first try itself.</p>
                        </details>

                        <details>
                             
                             <summary>
                             <FaRobot style={{color: '#73CBF2', fontSize: '25px'}} />
                             Epcot Center 
                        <FaChevronDown style={{color: 'black', fontSize: '25px'}}  className="down" />
                             </summary>
                             <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                        </details>

                        <details>
                              <summary>
                            <FaBoxes style={{color: '#73CBF2', fontSize: '25px'}} /> 
                              Epcot Center
                        <FaChevronDown style={{color: 'black', fontSize: '25px'}}  className="down" />

                              </summary>
                              <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                        </details>

                        <details>
                              <summary>
                        <FaPlayCircle style={{color: '#73CBF2', fontSize: '25px'}} />
                              Epcot Center
                        <FaChevronDown style={{color: 'black', fontSize: '25px'}}  className="down" />
                              
                              </summary>
                              <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                        </details>
                </div>
                <div className='col-md-3 col-md-offset-2 '>
                    <img className="img-responsive" src={process.env.PUBLIC_URL + `/img/Rectangle.jpg`}></img>
                </div>
                </div>
                
            </div>

            <div className="row backcolor  ;" >
                <h2 className="heading" ><span>Top features</span> to boost the quality and speed of contextual searches</h2>
                <div className="space   ">

                <div className='col-md-3 col-md-offset-2'>
                <img className="img-responsive" src={process.env.PUBLIC_URL + `/img/about.jpg`}></img>
                </div>

                <div className='col-md-5 col-md-offset-2 '>
                        <details>
                            <summary> 
                                <FaSearch style={{color: '#73CBF2', fontSize: '25px'}} /> 
                               <p> FAQ machine, context-based searching, fine-tuned search results </p>
                                <FaChevronDown style={{color: 'black', fontSize: '25px'}}  className="down" />
                            </summary>
                            <p>Successfully process queries in their natural language. The system also matches the query to the closest FAQs to give additional info. You can further fine-tune results by adding your custom tags.</p>
                        </details>

                        <details>
                             
                             <summary>
                             <FaDatabase style={{color: '#73CBF2', fontSize: '25px'}} />
                             <p>Auto-synced indexing of all connected databases for up-to-date responses</p>
                            <FaChevronDown style={{color: 'black', fontSize: '25px'}}  className="down" />
                             
                             </summary>
                             <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                        </details>

                        <details>
                              <summary>
                            <FaArrowsAlt style={{color: '#73CBF2', fontSize: '25px'}} /> 
                            <p>Self-learning system, plus, all analytics to help create better content</p>
                            <FaChevronDown style={{color: 'black', fontSize: '25px'}} className="down" />
                              
                              </summary>
                              <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                        </details>

                        <details>
                              <summary>
                                <FaWrench style={{color: '#73CBF2', fontSize: '25px'}} />
                                <p>Pre-trained industrial-specific models for faster go-to-market speeds</p>
                                <FaChevronDown style={{color: 'black', fontSize: '25px'}}  className="down" />
                               </summary>
                              <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                        </details>
                </div>
                </div>
            </div>
        
        </div>
        
    );

}






