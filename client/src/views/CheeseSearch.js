import React, { useState } from "react";
import Map from "../components/Map";
// import "./CheeseSearch.css";

function CheeseSearchView(props) {
  const EMPTY_CHEESE_SEARCH_FORM = {
    location: "",
    milkType: "any",
  };

  const [cheeseSearchData, setCheeseSearchData] = useState(
    EMPTY_CHEESE_SEARCH_FORM
  );

  function handleCheeseSearchChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setCheeseSearchData((state) => ({
      ...state,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // getCheeseResults(cheeseSearchData);
    setCheeseSearchData(EMPTY_CHEESE_SEARCH_FORM);
  }

  return (
    <div className="CheeseSearchView">
      <div className="row">
        <h1>Find your new favorite french cheeses!</h1>
      </div>
      <div className="row pt-4 bg-light">
        <h3>
          Search by département, city and/or milk type to uncover all that
          France's creameries have to offer.
        </h3>
        <form className="row gy-2 gx-4" onSubmit={handleSubmit}>
          <div className="row justify-content-center">
            <div className="col-4">
              <label className="form-label" htmlFor="title">
                Département or City
              </label>
              <input
                type="text"
                className="form-control"
                id="input-location"
                name="location"
                placeholder="Savoie"
                value={cheeseSearchData.location}
                onChange={(e) => handleCheeseSearchChange(e)}
              />
            </div>

            <div className="col-2 dropdown">
              <label className="form-label" htmlFor="title">
                Milk Type
              </label>
              <select
                className="form-select"
                name="milkType"
                onChange={handleCheeseSearchChange}
                value={cheeseSearchData.milkType}
              >
                <option value="any">Any Type</option>
                <option value="cow">Cow</option>
                <option value="goat">Goat</option>
                <option value="sheep">Sheep</option>
                <option value="mixed">Mixed</option>
              </select>
            </div>
          </div>

          <div className="row pb-0 justify-content-center">
            <button type="submit" className="btn btn-outline">
              Search
            </button>
          </div>
        </form>
      </div>

      <Map />
    </div>
  );
}

export default CheeseSearchView;
