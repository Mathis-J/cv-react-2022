import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fa-solid fa-bicycle"></i>
                    <span>Vélo</span>
                </li>
                <li className="hobby">
                    <i className="fa-solid fa-hiking"></i>
                    <span>Randonnées</span>
                </li>
                <li className="hobby">
                    <i className="fa-solid fa-person-skiing"></i>
                    <span>Ski</span>
                </li>
                <li className="hobby">
                    <i class="fa-solid fa-music"></i>
                    <span>Métal</span>
                </li>
                <li className="hobby">
                    <i className="fa-solid fa-film"></i>
                    <span>Films</span>
                </li>
                <li className="hobby">
                    <i className="fa-solid fa-gamepad"></i>
                    <span>Jeux-vidéos</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;