import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <h2>{props.result.word}</h2>
        {props.result.phonetics.map(function(phonetics, index) { 
          return (
            <div key={index}>
              <Phonetics phonetics={phonetics} />
            </div>
          );
        })}
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