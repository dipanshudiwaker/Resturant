import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
     <SubHeading title="Chase The New Flavour"/>
     <h1 className='app__header-h1'>The key to Fine Dining</h1>
    <p className='p_opensans' style={{ margin:'2rem 0',color:'white'}} > Sit Tell Us a restaurant experience that is of a higher quality and greater formality compared to the experience at a casual dining restaurant. The atmosphere of a fine dining establishment is usually more elegant, and the food is served in a more formal way</p>
    <button type="button" className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
    <img src={images.welcome} alt="welcome"/>
    </div>
  </div>
);

export default Header;
