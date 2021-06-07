import React from "react";
import errorImage from "../assets/images/Erreur-404-1.jpg";

const Errors = () => {
  return (
    <div className="errorspage">
      <a href="/" className="active">
        <img src={errorImage} alt="errorImage" />
      </a>
    </div>
  );
};

export default Errors;
