import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    setResult(response.data[0]);
  }
  
  function search() {
    let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`; // api website https://dictionaryapi.dev/
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
      <Result result={result} />
    </div>
  );
  } else {
    load();
    return null;
  }
}