import { Link } from 'react-router-dom';

const NavBar = () => {
      console.log('Navbar loaded');
      return (
            <div className="container">
                  <div className="logo-container">
                        <img className="logo" src="https://imgs.search.brave.com/rOLwQJEuFtyT2OvPZ-mKNBK1MAlGXmWrt1SlfumyaQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWFnZXNmcmVlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvU3dp/Z2d5LUxvZ28tUE5H/LnBuZw" alt="Swiggy" />
                  </div>
                  <div className="nav-items">
                        <ul>
                              <li><Link to='/'>Home</Link></li>
                              <li><Link to='/contact-us'>Contacts</Link></li>
                              <li><Link to='/'>Profile</Link></li>
                              <li><Link to='/about'>About</Link></li>
                        </ul>
                  </div>
            </div>
      )
}

export default NavBar