import React from "react";
import "./Popup.css";

function Popup(props) {

    const displayStyle = {
        display: "none"
    }

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-header">
          <h1>{props.name}</h1>
          <button
            className="close-btn"
            onClick={() => props.setTrigger(false)}
            style={(props.name === "See you soon again😇" || props.name === "We're sorry to see you go🥺") ? displayStyle : null }
          >
            Close
          </button>
        </div>
        <div className="popup-Child">{props.children}</div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
