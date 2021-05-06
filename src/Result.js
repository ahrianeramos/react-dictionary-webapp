import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Result.css";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <section>
        <h2><strong>{props.result.word}</strong></h2>
        {props.result.phonetics.map(function(phonetics, index) { 
          return (
            <div key={index}>
              <Phonetics phonetics={phonetics} />
            </div>
          );
        })}
          </section>
        {props.result.meanings.map(function(meaning, index) {
          return (
            <div key={index}>
            <Meaning meaning={meaning} />
          </div>
        );
      })}
      </div>
    );
  } else {
    return null;
  }
}