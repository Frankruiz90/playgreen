import React from "react";
import "./SmallCard.scss";
import dislike from "../../../assets/img/dislike.svg";
import like from "../../../assets/img/like.svg";

export default function SmallCard({ data }) {
  return (
    <div className="contaner-small">
      <div
        className="contaner-small__info"
        style={{
          backgroundImage: "url(" + data.url + ")",
        }}
      >
        {" "}
        <p>{data.name}</p> <pre>{}</pre>
      </div>
      <div className="contaner-small__img">
        <img src={data.state === "dislike" ? dislike : like} alt="" />
      </div>
    </div>
  );
}
