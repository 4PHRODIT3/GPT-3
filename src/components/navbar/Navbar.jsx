import React,{useState} from 'react';
import "./navbar.css";
import { RiMenu3Line,RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';


const MenuItems = () => {
  return (
    <>
      <p><a href="#home">Home</a></p>
      <p><a href="#wgpt3">What is GPT3?</a></p>
      <p><a href="#features"></a>Open AI</p>
      <p><a href="#possibility">Case Studies</a></p>
      <p><a href="#blog">Library</a></p>
    </>
  );
}

const Navbar = () => {
  const [menuToggler,setMenuToggler] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-link'>
        <div className='gpt3__navbar-link_logo'>
            <img src={logo} alt="gpt3 logo"  />
        </div>
        <div className='gpt3__navbar-link_container'>
          <MenuItems />
        </div>
      </div>
      <div className='gpt3__navbar-sign' >
        <p><a href="#signin">Sign in</a></p> 
        <button type='button'>Sign up</button> 
      </div>
      <div className='gpt3__navbar_md-link'>
        <div className='gpt3__navbar_md-menu' onClick={() => setMenuToggler(!menuToggler)}>{
          menuToggler ? <RiCloseLine color='#fff' size={27} /> : <RiMenu3Line color='#fff' size={27} />
        }</div>
      
        {
          menuToggler && <div className='gpt3__navbar-md-link_container scale-up-center'>
            
            <MenuItems />
          <div className='gpt3__navbar-md-sign' >
              <p><a href="#signin">Sign in</a></p> 
              <button type='button'>Sign up</button> 
            </div>
          </div>
        }
        
      </div>
    </div>
  )
}

export default Navbar;