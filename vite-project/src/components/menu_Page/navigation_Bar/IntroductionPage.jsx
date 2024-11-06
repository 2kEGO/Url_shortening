 import './IntroductionPage.css';
 import logo from "./img/logo.svg";
 import bodyImg from './img/illustration-working.svg';


 import brandImg from './img/icon-brand-recognition.svg';
 import detailedImg from './img/icon-detailed-records.svg';
 import fullImg from './img/icon-fully-customizable.svg';

 import { useState } from 'react';
 
 export default function IntroductionPage() {

  const [display, setDisplay] = useState("www");


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

      <div className="sidePage-container">
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

          <div className="url-shorten-container">
            <div className='left-container'>
              <a href="">{display}</a>
            </div>
            <div className='right-container'>
              <a href="">www</a>
              <button>Copy</button>
            </div>
          </div>



          <div className="stat-container">
            <h1>Advance Statistics</h1>
            <h2>Track how your links are performing across the web with our advanced statistics dashboard</h2>
          </div>

          <div className="three-box-container">
            <div className="box-container">

              <div className='circle'>
                <img src={brandImg} alt="" />
              </div>
              <h2>Brand Recognition</h2>
              <h3>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</h3>
            </div>

            <div className="box-container">
              <div className='circle'>
                  <img src={detailedImg} alt="" />
                </div>
                <h2>Detailed Records</h2>
                <h3>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</h3>
              </div>

            <div className="box-container">
              <div className='circle'>
                  <img src={fullImg} alt="" />
                </div>
                <h2>Fully Customizable</h2>
                <h3>Impove brand awareness and content discoverability through customizable links, upercharing audienece engagement.</h3>
              </div>
          </div>

        </div>
      </div>
    </>
  }