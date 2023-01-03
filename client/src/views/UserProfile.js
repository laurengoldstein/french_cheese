import React from "react";
// import "./UserProfile.css";

function UserProfileView(props) {
  return (
    <div className="UserProfileView">
      <h1 className="text-center">Username</h1>
      <div className="row">
        <h3 className="col-3 me-4">About</h3>
        <h2 className="col-7">Following</h2>
      </div>

      <div className="row">
        <h2>Favorites</h2>
      </div>
      <div>
        {/* Only show saved if it's user's own profile */}
        <h2>Your Saved Cheeses</h2>
      </div>
    </div>
  );
}

export default UserProfileView;
