import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

const AutosuggestUtil = props => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    if (inputLength === 0) {
      return [];
    } else {
      let filteredObj = props.object.filter(ob =>
        ob[props.searchKey].toLowerCase().includes(inputValue)
      );
      if (filteredObj.length === 0) {
      }
      return filteredObj;
    }
  };

  const getSuggestionValue = suggestion => {
    return suggestion[props.searchKey];
  };
  const renderSuggestion = suggestion => (
    <div>{suggestion[props.searchKey]}</div>
  );

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "운동을 검색해보세요",
    value,
    onChange: onChange
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

export default AutosuggestUtil;
