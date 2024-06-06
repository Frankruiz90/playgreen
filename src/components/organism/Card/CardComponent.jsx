import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
// import CardSport from "react-tinder-card";
import "./CardComponent.scss";
import heart from "../../../assets/img/Heart.svg";
import vector from "../../../assets/img/Vector.svg";

export const CardComponent = ({ sports }) => {
  const [currentIndex, setCurrentIndex] = useState(sports.length - 1);
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(sports.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };
  const canSwipe = currentIndex >= 0;
  const swiped = (direction, nameToDelete, index) => {
    updateCurrentIndex(index - 1);
    sports.pop();
  };

  const outOfFrame = (name, idx) => {
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex <= sports.length) {
      await childRefs[currentIndex].current.swipe(dir);
      sports.pop(); // Swipe the card!
      console.log(sports);
    }
  };

  return (
    <div className="card">
      <div className="card-container">
        {sports.map((sport, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={sport.idSport}
            onSwipe={(dir) => swiped(dir, sport.idSport, index)}
            onCardLeftScreen={() => outOfFrame(sport.idSport, index)}
          >
            <div
              style={{
                backgroundImage: "url(" + sport.strSportThumb + ")",
              }}
              className="card"
            >
              <div className="card-title">
                <h3>{sport.strSport}</h3>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="buttons">
        <button
          style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          onClick={() => swipe("left")}
          disabled={!canSwipe}
          className="btn-rounded btn-rounded__small"
        >
          <img src={vector} alt="dislike"></img>
        </button>

        <button
          style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          onClick={() => swipe("right")}
          disabled={!canSwipe}
          className="btn-rounded"
        >
          <img src={heart} alt="like"></img>
        </button>
      </div>
    </div>
  );
};
