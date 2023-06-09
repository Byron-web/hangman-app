import React from "react";

//Notifies user if they type the same letter more than once.
const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
      <p>You have already entered this letter</p>
    </div>
  );
};

export default Notification;
