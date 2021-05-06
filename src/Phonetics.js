import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics.text);
  return (
    <div className="Phonetics">
      {props.phonetics.text}
      <br />
      <a href={props.phonetics.audio} target="_blank">Pronounce</a>

    </div>
  );
}