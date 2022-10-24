import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Mathis JANCEL</h1>
          <h2>Développeur Front-end</h2>
          <div className="pdf">
            <a href="../media/CV-Mathis-JANCEL.pdf" download>
              Télécharger le CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
