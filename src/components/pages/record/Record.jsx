import React, { Suspense, useEffect, useState } from "react";
import "./Record.scss";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase-config";
import SmallCard from "../../organism/smallCard/SmallCard";
import Loading from "../../organism/loading/Loading";
import { NavLink } from "react-router-dom";
import arroLeft from "../../../assets/img/arrow-left.svg";

export default function Record() {
  const [historys, setHistorys] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const getDocsFire = getDocs;
        const querySnapshot = await getDocsFire(
          collection(db, localStorage.getItem("user"))
        );
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({
            ...doc.data(),
            id: doc.data().id,
            name: doc.data().name,
            state: doc.data().state,
            url: doc.data().url,
          });
        });
        setHistorys(docs);
      } catch (error) {}
    };
    getData();
  }, []);
  return (
    <div className="container-small">
      <div className="container-small__return">
        <NavLink to="/home">
          <img src={arroLeft} alt="" />
        </NavLink>
      </div>
      <div className="container-small__text">
        <h2>History</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      <Suspense fallback={<Loading />}>
        {historys.map((history) => (
          <SmallCard data={history} />
        ))}
      </Suspense>
    </div>
  );
}
