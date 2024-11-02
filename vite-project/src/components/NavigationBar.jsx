 import './NavigationBar.css';
 
 export default function NavigationBar() {
    return <>
      <div className='mainPage'>
        <div className='mainPage-container'>
          <nav className='mainPage-nav'>
  
            <div className='navBar-left'>
              <div className="logo">
                <a href="#">Shortly</a>
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
      </div>
    </>
  }