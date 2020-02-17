import React, { useState } from "react";

import WorkoutAutoSuggest from "../util/Autosuggest";
import { allWorkouts } from "../data/workoutList/_AllWorkouts";

const Search = () => {
  const [doResultExist, setDoResultExist] = useState(true);

  const noFilteredObjHandler = () => {
    setDoResultExist(!doResultExist);
  };

  return (
    <>
      <WorkoutAutoSuggest
        object={allWorkouts}
        searchKey="workoutKor"
        noFilteredObj={() => noFilteredObjHandler()}
      />
      {!doResultExist ? "검색결과가 없습니다" : null}
    </>
  );
};

export default Search;
