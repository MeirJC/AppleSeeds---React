import React from "react";
import "./Card.css";
function Card({
  firstName,
  lastName,
  quote,
  imgUrl,
  isActive,
  doubleClick,
  isEdit,
}) {
  return (
    <div>
      <div className="cardContainer" onClick={doubleClick}>
        <h3 contentEditable={isEdit}>
          {firstName} {lastName}
        </h3>
        <div>
          <p contentEditable={isEdit}>{quote}</p>
        </div>
        <div>
          <img
            className="userImg"
            src={`${imgUrl}`}
            alt="avatar"
            style={{ marginBottom: "0.75rem" }}
          />
        </div>
        <div className="isActive">
          Active:{" "}
          {isActive ? (
            <span
              className="material-symbols-outlined"
              style={{
                color: "green",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            >
              check_circle
            </span>
          ) : (
            <span
              className="material-symbols-outlined"
              style={{
                color: "crimson",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            >
              do_not_disturb_on{" "}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
