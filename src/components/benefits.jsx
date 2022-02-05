
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
                
                  <div className="space fix" style={{display: "grid",gridTemplateColumns: "1fr 1fr"  }}>
                <div   >
                        <details>
                            <summary> 
                            <p><FaCrosshairs style={{color: '#73CBF2', fontSize: '25px'}} /> 
                                Totally optimized search-to-resolution journeys to speed up your operations
                                <FaChevronDown style={{color: 'black', fontSize: '25px'}}  className="down" />
                                </p>
                            </summary>
                            <p style={{background:"#DFEDF5"}}> Users can go from search to resolution within 2 clicks! Optimize the way people search for information by giving them contextually-correct resolutions, within seconds, in the first try itself.</p>
                        </details>
                        <br/>
                        <details>
                             <summary>
                            <p> <FaRobot style={{color: '#73CBF2', fontSize: '25px'}} />
                             Auto-curated relevant FAQs that improve over time as the arch system learns
                        <FaChevronDown style={{color: 'black', fontSize: '25px'}}  className="down" />
                        </p>
                             </summary>
                             <p style={{background:"#DFEDF5"}} >Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                        </details>
                        <br/>
                        <details>
                              <summary>
                              <p>
                            <FaBoxes style={{color: '#73CBF2', fontSize: '25px'}} /> 
                            Centralize all unstructured data, even if they exist in distant data silos author
                        <FaChevronDown style={{color: 'black', fontSize: '25px'}}  className="down" />
                        </p>
                              </summary>
                              <p style={{background:"#DFEDF5"}}>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                        </details>
                        <br/>
                        <details>
                              <summary>
                              <p>
                                <FaPlayCircle style={{color: '#73CBF2', fontSize: '25px'}} />
                                Deploy in just a few clicks with all the pre-trained models you need we give  .
                                <FaChevronDown style={{color: 'black', fontSize: '25px'}}  className="down" />
                        
                        </p>
                              </summary>
                              <p style={{background:"#DFEDF5"}} >Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                        </details>
                </div>
                <div className='col-md-6 col-md-offset-2'>
                    <img className=" img " src={process.env.PUBLIC_URL + `/img/Rectangle.jpg`}></img>
                </div>
                </div>  
                
            </div>

            <div className="row backcolor  ;" >
                <h2 className="heading" ><span>Top features</span> to boost the quality and speed of contextual searches</h2>
                <div className="space   ">

                <div className='col-md-3 col-md-offset-2 space'>
                <img className="img-responsive" src={process.env.PUBLIC_URL + `/img/about.jpg`}></img>
                </div>

                <div className='col-md-5 col-md-offset-0 space2'>
                        <details>
                            <summary>  
                               <p>
                               <FaSearch style={{color: '#73CBF2', fontSize: '25px'}} />
                                 FAQ machine, context -based searching , fine - tuned search results 
                               <FaChevronDown style={{color: 'black', fontSize: '25px'}}  className="down" /> 
                               </p>
                            </summary>
                            <p style={{background:"#DFEDF5"}}>Successfully process queries in their natural language. The system also matches the query to the closest FAQs to give additional info. You can further fine-tune results by adding your custom tags.</p>
                        </details>
                          <br/>
                        <details> 
                             <summary>
                             <p>
                             <FaDatabase style={{color: '#73CBF2', fontSize: '25px'}} />
                             Auto-synced indexing connected databases for uptodate responses 
                            <FaChevronDown style={{color: 'black', fontSize: '25px'}}  className="down" />
                            </p>
                             </summary>
                             <p style={{background:"#DFEDF5"}} >Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                        </details>
                        <br/>
                        <details>
                              <summary>
                              <p>
                            <FaArrowsAlt style={{color: '#73CBF2', fontSize: '25px'}} /> 
                            Self-learning system, plus, all analytics to help create better content
                            <FaChevronDown style={{color: 'black', fontSize: '25px'}} className="down" />
                            </p>    
                              </summary>
                              <p style={{background:"#DFEDF5"}} >Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                        </details>
                        <br/>
                        <details>
                              <summary>
                              <p>
                                <FaWrench style={{color: '#73CBF2', fontSize: '25px'}} />
                                Pre-trained industrial-specific models for faster goto-market speeds
                                <FaChevronDown style={{color: 'black', fontSize: '25px'}}  className="down" />
                                </p>
                               </summary>
                              <p style={{background:"#DFEDF5"}} >Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                        </details>
                </div>
                </div>
            </div>
        
        </div>
        
    );

}






