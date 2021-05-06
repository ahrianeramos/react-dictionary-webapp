import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetics.audio} 
        target="_blank"
        rel="noreferrer">
          <i class="fas fa-volume-up"></i>
      </a>
      {props.phonetics.text}
    </div>
  );
}