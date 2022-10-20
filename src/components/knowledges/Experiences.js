import React from "react";

const Experiences = () => {
  return (
    <div className="experience">
      <h3>Expérience</h3>
      <div className="exp-1">
        <h4>Développeur web - Anytime</h4>
        <h5>Nantes 2021 - 2022</h5>
        <p>
          En stage et alternance à Anytime avec l'ENI, développeur fullstack
          PHP/React
          <br />
          <br />
          Méthode : Agile
          <br />
          Outils : Git, GitLab, Docker | Support : MacBook Pro 13
          <br />
          IDE : PHPStorm, VScode
          <br />
          <hr />
          Front : TypeScript avec React v18.2.0
          <br />
          Développer interface utilisateur de type desktop, des composants
          <br />
          Résolution de bug | Effectuer des changements UX
          <br />
          Développer la partie front-end d’une interface utilisateur web
          <br />
          <hr />
          Back : PHP v7.1
          <br />
          Développer des composants dans le langage d’une base de données,
          d’accès aux données
          <br />
          Résolution de bug | Review de code
          <br />
          Développer la partie back-end d’une interface utilisateur web
        </p>
      </div>
      <div className="exp-2">
        <h4>Agent d'entretien - UGC </h4>
        <h5>Saint-Herblain 2019</h5>
        <p>Agent d'entretien au cinéma UGC (Atlantis) et caissier</p>
      </div>
      <div className="exp-3">
        <h4>Animateur périscolaire - Paz à pas </h4>
        <h5>Sainte-Pazanne 2016 - 2019</h5>
        <p>Animateur périscolaire pour enfant de 3 à 12 ans</p>
      </div>
    </div>
  );
};

export default Experiences;
