import React from "react";

const ShowButton = ({ show, setShow, Value }) => {
  const styleHead = {
    border: "1px solid black",
    cursor: "pointer",
    borderRadius: "10px",
    padding: "5px",
    width: "300px",
    marginBottom: "5px",
  };
  return (
    <div className="delete">
      <h3 style={styleHead} onClick={() => setShow(!show)}>
        {Value}
      </h3>
    </div>
  );
};

export default ShowButton;
