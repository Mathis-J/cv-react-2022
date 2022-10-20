import React from "react";
import Formations from "../components/knowledges/Formations";
import Hobbies from "../components/knowledges/Hobbies";
import Languages from "../components/knowledges/Languages";
import Experiences from "../components/knowledges/Experiences";
import Navigation from "../components/Navigation";

const Knowledges = () => {
  return (
    <div className="knowledges">
      <Navigation />
      <div className="knowledgesContent">
        <Languages />
        <Formations />
        <Experiences />
        <Hobbies />
      </div>
    </div>
  );
};

export default Knowledges;
