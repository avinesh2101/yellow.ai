import "./styles.css"
import Drop from "./DropDown/Drop"
// import logo from "./image/logo.png"
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
    <h4 className="top"> #YellowMessengerCares | Fight Covid19 with a pro-bono chatbot . 
    <button class="btn btn-light" data-mdb-ripple-color="dark">Get Free chatbot </button>
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
              {/* <a href='#features' className='page-scroll'>
                Features
              </a> */}
              <Drop/>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
              
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
            <li>
            <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}
