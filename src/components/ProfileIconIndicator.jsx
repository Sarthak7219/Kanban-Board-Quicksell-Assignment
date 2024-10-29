import React from "react";
import "./ProfileIconIndicator.css";

// Define the mapping between group values and their corresponding icon paths
const iconMapping = {
  4: "./images/urgentP.svg",
  3: "./images/highP.svg",
  2: "./images/medP.svg",
  1: "./images/lowP.svg",
  0: "./images/noP.svg",
  Todo: "./images/To-do.svg",
  "In progress": "./images/in-progress.svg",
  Backlog: "./images/Backlog.svg",
  "Anoop sharma": "./images/profile-icon.svg",
  Yogesh: "./images/profile-icon.svg",
  "Shankar Kumar": "./images/profile-icon.svg",
  Ramesh: "./images/profile-icon.svg",
  Suresh: "./images/profile-icon.svg",
  Canceled: "./images/Cancelled.svg",
  Completed: "./images/Done.svg",
};

function ProfileIconIndicator({ value, users }) {
  console.log("Hello profile");
  console.log("value:", value);

  // Get the icon source based on the groupValue
  const iconSrc = iconMapping[value] || "/images/default-icon.svg"; // Fallback icon

  // Find the user object that matches the value
  const user = users.find((user) => user.name === value);
  console.log("user");
  console.log(user);
  // Determine the circle source based on user's availability
  let circleSrc = "/images/default-circle.svg"; // Default circle icon
  if (user) {
    circleSrc = user.available
      ? "./images/circle-yellow.svg"
      : "./images/circle-gray.svg"; // Set circle based on availability
  }
  console.log("circleSrc");
  console.log(circleSrc);
  return (
    <div className="profile-icon">
      <img src={iconSrc} alt={value} className="profile" />

      {/* Render the indicator circle if the user is found */}
      {user && (
        <img
          src={circleSrc}
          alt=""
          className={`indicator-icon ${
            user.available ? "available" : "unavailable"
          }`}
        />
      )}
    </div>
  );
}

export default ProfileIconIndicator;
