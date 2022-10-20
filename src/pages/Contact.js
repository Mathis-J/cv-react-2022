import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Nantes - Anger</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0665901802">
                <span
                  classeName="clickInput"
                  onClick={() => {
                    alert("Numéro de téléphone copié");
                  }}
                >
                  06 65 90 18 02
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <CopyToClipboard text="mathisjancelii@gmail.com">
                <span
                  classeName="clickInput"
                  onClick={() => {
                    alert("Adresse email copié");
                  }}
                >
                  mathisjancelii@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.linkedin.com/in/mathis-jancel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="https://github.com/Mathis-J"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>GitHub</h4>
              <i className="fab fa-github fa-2x"></i>
            </a>
          </ul>
        </div>
        <div className="signature">
          <p>Mathis Jancel - 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
