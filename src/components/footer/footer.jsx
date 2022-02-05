import { useState } from 'react'
import emailjs from 'emailjs-com'
import React from "react";
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaYoutube} from "react-icons/fa";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const initialState = {
  name: '',
  email: '',
  message: '',
}

export const Footer = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
    <div  className="benefits ">
            <h1>Go ahead! Signup a demo.</h1>
            {/* <Button></Button> */}
            <button></button>
      </div>

     

		  <Box>
	<Container>
		<Row>
		<Column>
			<Heading>
		<img className="logo" src={process.env.PUBLIC_URL + `/img/logo.png`}  />

			 yellow.ai</Heading>
			<FooterLink >© 2021 Biotonic Technology 
Private Limited.</FooterLink>
	  		<hr/>
			<Heading>Get it on the latest in AI</Heading>
			<br/>
		<img  src={process.env.PUBLIC_URL + `/img/t4.png`}  />

			<br/>
			<hr/>
		<img className="logo2" src={process.env.PUBLIC_URL + `/img/t1.png`}  />
		<img className="logo2" src={process.env.PUBLIC_URL + `/img/t2.png`}  />
		<img className="logo2" src={process.env.PUBLIC_URL + `/img/t3.png`}  />



		</Column>
		<Column>
			<Heading>Company</Heading>
			<FooterLink href="#">About us</FooterLink>
			<FooterLink href="#">Contact us</FooterLink>
			<FooterLink href="#">Customer stories</FooterLink>
			<FooterLink href="#">Joins us</FooterLink>
			<FooterLink href="#">News</FooterLink>
			<FooterLink href="#">Academy</FooterLink>
			<FooterLink href="#">Billy-yelllow.ai's</FooterLink>
			<Heading>Resources</Heading>
			<FooterLink href="#">Blog</FooterLink>
			<FooterLink href="#">E-books</FooterLink>
			<FooterLink href="#">Community</FooterLink>
			<FooterLink href="#">Academy</FooterLink>
			<FooterLink href="#">Documentation</FooterLink>

		</Column>
		<Column>
			<Heading>Platform</Heading>
			<FooterLink href="#">NLP</FooterLink>
			<FooterLink href="#">Studio</FooterLink>
			<FooterLink href="#">Omni Channel</FooterLink>
			<FooterLink href="#">Inbox</FooterLink>
			<FooterLink href="#">Community</FooterLink>
			<FooterLink href="#">Blog</FooterLink>
			<FooterLink href="#">Analytics</FooterLink>
			<FooterLink href="#">Insight engine</FooterLink>



		</Column>
		<Column>
			<Heading>Insdustries</Heading>
			<FooterLink href="#">Automotive</FooterLink>
			<FooterLink href="#">Energy</FooterLink>
			<FooterLink href="#">Omni Channel</FooterLink>
			<FooterLink href="#">Inbox</FooterLink>
			<FooterLink href="#">Community</FooterLink>
			<FooterLink href="#">Blog</FooterLink>
			<FooterLink href="#">Analytics</FooterLink>
			<FooterLink href="#">Insight engine</FooterLink>
			<FooterLink href="#">Energy</FooterLink>
			<FooterLink href="#">Banking</FooterLink>
			<FooterLink href="#">E-com</FooterLink>
			<FooterLink href="#">Retail</FooterLink>
			<FooterLink href="#">Gaming</FooterLink>
			<FooterLink href="#">Telecom</FooterLink>
			<FooterLink href="#">QSR</FooterLink>
			<FooterLink href="#">Insight engine</FooterLink>
			
		</Column>
		</Row>
	</Container>
	</Box>
	<hr/>




		  {/* **************************** */}

      <div id='footer'>
        <div className='container text-center'>
          <p>
		  Formerly known as Yellow Messenger
          </p>
        {/* </div> */}
		{/* <div style={{display: 'flex', justifyContent:'flex-end'}} > */}
		
		<FaFacebookF style={{color: 'gray', fontSize: '25px'}} />
		<FaTwitter style={{color: 'gray', fontSize: '25px'}} />
		<FaInstagram style={{color: 'gray', fontSize: '25px'}} />
		<FaLinkedinIn style={{color: 'gray', fontSize: '25px'}} />
		<FaYoutube style={{color: 'gray', fontSize: '25px'}} />

		</div>
		
      </div>
    </div>
  )
}

export default Footer;
