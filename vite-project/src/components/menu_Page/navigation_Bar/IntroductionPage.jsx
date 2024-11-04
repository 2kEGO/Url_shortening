 import './IntroductionPage.css';
 import logo from "./img/logo.svg";
 import bodyImg from './img/illustration-working.svg';

 import { useState } from 'react';
 
 export default function IntroductionPage() {

  const [display, setDisplay] = useState("");


    return <>
      <div className='mainPage'>

        <div className='mainPage-container'>

          <nav className='mainPage-nav'>
  
            <div className='navBar-left'>
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <ul>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Resouces</a>
                </li>
              </ul>
            </div>
  
            <div className='navBar-right'>
              <ul>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <span>
                    <a href="#">Sign Up</a>
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        
        </div>
      
        <div className='header-body-container'>

          <div className="header-body-left">
            <h1>More than just shorter links</h1>
            <h2>Build your brand's recognition and get detailed insights on how your links are performming</h2>
            <button>Get Started</button>
          </div>


          <div className="header-body-right">
            <img src={bodyImg} alt="" />
          </div>
        </div>
      
      
      </div>

      <div className="sidePage">
        
        <div className="url-container">
          
          <div className="url-display">
            <div className="display-container">
              <input type="text" placeholder='Shorten a link here...' />
              <h4>Please add a link</h4>
            </div>
            
            <button>Shorten It!</button>

          </div>

        </div>

        <div className="stat-container">
          <h1>Advance Statistics</h1>
          <h2>Track how your links are performing across the web with our advanced statistics dashboard</h2>
        </div>

      </div>
    </>
  }