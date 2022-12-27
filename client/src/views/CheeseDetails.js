import React from "react";
// import "./CheeseDetails.css";

function CheeseDetailsView(props) {
  return (
    <div className="CheeseDetailsView">
      <header>
        {/* <button
        key={c.id}
        id="button"
        type="button"
        className="btn btn-outline-danger savedbtn py-0 mb-4"
        name={c.name}
        onClick={(e) => toggleSaved(c)}
      >
        {c.saved ? (
          <i className="bi bi-plus-circle-fill"></i>
        ) : (
          <i className="bi bi-plus-circle"></i>
        )}
      </button>
      <button
        key={c.id}
        id="button"
        type="button"
        className="btn btn-outline-danger favoritebtn py-0 mb-4"
        name={c.name}
        onClick={(e) => toggleFavorite(c)}
      >
        {c.favorite ? (
          <i className="bi bi-heart-fill"></i>
        ) : (
          <i className="bi bi-heart"></i>
        )}
      </button> */}
      </header>

      <div className="row">
        <div className="col-3">
          <img />
        </div>
        <div className="col-9">
          <h1>Cheese Name</h1>

          <h3>Départment</h3>
          <h3>Milk Type</h3>
          <h3>Overall Rating</h3>
        </div>
      </div>
      <div className="row">
        <h3>Description</h3>
        <p></p>
      </div>

      <div>
        <h2>Users who love this cheese</h2>
      </div>
    </div>
  );
}

export default CheeseDetailsView;
