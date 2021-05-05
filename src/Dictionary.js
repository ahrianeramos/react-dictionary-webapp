import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`; // api website https://dictionaryapi.dev/
    axios.get(apiUrl).then(handleResponse);



  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
    </div>
  );
}