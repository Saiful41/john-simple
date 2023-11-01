import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
           <img src={logo} alt="" />
          <div>
          <a href="#order">Order</a>
           <a href="#Order view">Order view</a>
           <a href="#Manage History">Manage History</a>
           <a href="#login">login</a> 
          </div>
        </nav>
    );
};

export default Header;