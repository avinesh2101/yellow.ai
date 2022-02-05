import "./styles.css"
import Button  from "./Button/Button"
// import logo from "./image/logo.png"
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
    <h4 className="top"> #YellowMessengerCares | Fight Covid19 with a pro-bono chatbot . 
    {/* <button class="btn btn-light" data-mdb-ripple-color="dark">Get Free chatbot </button> */}
    </h4>
      <div className='container'>
      
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          
          <img className="logo" src={process.env.PUBLIC_URL + `/img/logo.png`}  />

          <a className='navbar-brand page-scroll' href='#page-top'>      
          yellow.ai
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#benefits' className='page-scroll'>
                Why yellow.ai?
              </a>
            </li>
            <li>
              <a href='#features' className='page-scroll'>
                Platform
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Solutions
              </a>
            </li>
            <li>
              <a href='#company' className='page-scroll'>
                Company
              </a>
            </li>
            <li>
            {/* <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '} */}
                {/* <button className='btn btn-custom  page-scroll'>Request a demo</button> */}
                <Button/>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}
