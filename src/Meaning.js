import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3><em>{props.meaning.partOfSpeech}</em></h3>
        {props.meaning.definitions.map(function(definition, index) {
        return (
          <div key={index}>
            <p id="definition">{definition.definition}</p>
            <p id="example"><em>{definition.example}</em></p>
            <Synonyms synonyms={definition.synonyms} />
            <br />
          </div>
        );
        })}
      </section>
    </div>
  );
}