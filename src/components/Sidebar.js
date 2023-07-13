import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import Homepage from './Home';
import { FaUser } from 'react-icons/fa';

const Sidebar = ({media,setMedia}) => {
  const [show, setShow] = useState(false);

  return ( 
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show) & setMedia(!media)}>
          <i className={`men fas fa-bars ${show ? 'fa-solid ' : null}`}></i>
          

        </div>
       <div className="user-info ">
        <FaUser className="user-icon" />
        
      </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
            <Link to='/' className='nav-logo'>
              <i className={`fas fa-home-alt nav-logo-icon`}></i>
              <span className='nav-logo-name'>Status</span>
            </Link>

            <div className='nav-list'>
              
              <Link to='/historique' className='nav-link'>
                <i className='fas fa-hotel nav-link-icon'></i>
                <span className='nav-link-name'>Historique</span>
              </Link>
               <Link to='/demande' className='nav-link'>
                <i className='fas fa-hotel nav-link-icon'></i>
                <span className='nav-link-name'>Create demande</span>
              </Link>
               <Link to='/liste_des_demande' className='nav-link'>
                <i className='fas fa-hotel nav-link-icon'></i>
                <span className='nav-link-name'>List des demandes</span>
              </Link>
               <Link to='/AdminPage' className='nav-link'>
                <i className='fas fa-hotel nav-link-icon'></i>
                <span className='nav-link-name'>demandes Emolyees</span>
              </Link>
            </div>
          </div>

          <Link to='/logout' className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </Link>
        </nav>
      </aside>
      
    
    </main>
  );
};

export default Sidebar;
