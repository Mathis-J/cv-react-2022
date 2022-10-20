import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <div className='sidebar'>
          <div className="id">
            <div className="idContent">
              <img src={require("../media/PhotoProfil-trv-175.jpg")} alt="PicProfil" />
              <h3>Mathis JANCEL</h3>
            </div>
          </div>

          <div className="navigation">
            <ul>
              <li>
                <NavLink end to="/">
                  <i className="fas fa-home"></i>
                  <span>Accueil</span>
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/competences" activeClasseName="active">
                  <i className="fas fa-mountain"></i>
                  <span>Compétences</span>
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/portfolio" activeClasseName="active">
                  <i className="fas fa-folder-open"></i>
                  <span>PortFolio</span>
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/contact" activeClasseName="active">
                  <i className="fas fa-user"></i>
                  <span>Contact</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="socialNetwork">
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/mathis-jancel/" target="_blank" rel="noopener noreferrer">
                  <i className='fab fa-linkedin'></i></a>
              </li>
              <li>
                <a href="https://github.com/Mathis-J" target="_blank" rel="noopener noreferrer">
                  <i className='fab fa-github'></i></a>
              </li>
            </ul>
            <div className="signature"><p>Mathis Jancel - 2022</p></div>
          </div>
        </div>
    );
};

export default Navigation;