import React, { useState, useMemo, useContext, useRef } from "react";
import TinderCard from "react-tinder-card";
import "./CardComponent.scss";
import heart from "../../../assets/img/Heart.svg";
import vector from "../../../assets/img/Vector.svg";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { ClassContext } from "../../../ClassContext";
import ligth from "../../../assets/img/light.png";
import dark from "../../../assets/img/dark.png";

export const CardComponent = ({ sports }) => {
  const [currentIndex, setCurrentIndex] = useState(sports.length - 1);
  const currentIndexRef = useRef(currentIndex);

  const docFire = doc;
  const setDocFire = setDoc;
  const { isActive } = useContext(ClassContext);

  const { toggleClass } = useContext(ClassContext);
  const sendDb = async (id, name, url, state) => {
    const ref = localStorage.getItem("user");
    await setDocFire(docFire(db, ref, id), {
      id,
      name,
      url,
      state,
    });
  };

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
  const swiped = async (direction, id, name, url, index) => {
    updateCurrentIndex(index - 1);
    const state = direction === "right" ? "like" : "dislike";
    await sendDb(id, name, url, state);
    sports.pop();
  };

  const outOfFrame = (name, idx) => {
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (id, name, url, state, dir) => {
    if (canSwipe && currentIndex <= sports.length) {
      await childRefs[currentIndex].current.swipe(dir);
      await sendDb(id, name, url, state);
    }
  };

  return (
    <div className="card">
      <div className="card-container">
        {sports.map((sport, index) => (
          <div>
            <TinderCard
              ref={childRefs[index]}
              className="swipe"
              preventSwipe={[`up`, `down`]}
              key={sport.idSport}
              onSwipe={(dir) =>
                swiped(
                  dir,
                  sport.idSport,
                  sport.strSport,
                  sport.strSportThumb,
                  index
                )
              }
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

            <div className="buttons">
              <button
                style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
                onClick={() =>
                  swipe(
                    sport.idSport,
                    sport.strSport,
                    sport.strSportThumb,
                    "dislike",
                    "left"
                  )
                }
                disabled={!canSwipe}
                className="btn-rounded btn-rounded__small"
              >
                <img src={vector} alt="dislike"></img>
              </button>

              <button
                style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
                onClick={() =>
                  swipe(
                    sport.idSport,
                    sport.strSport,
                    sport.strSportThumb,
                    "like",
                    "right"
                  )
                }
                disabled={!canSwipe}
                className="btn-rounded"
              >
                <img src={heart} alt="like"></img>
              </button>
            </div>
            <div className="card-container__light">
              <button onClick={toggleClass}>
                <img src={isActive ? dark : ligth} alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
