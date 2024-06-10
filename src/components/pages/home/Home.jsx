import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { CardComponent } from "../../organism/Card/CardComponent";
import "./Home.scss";
import Loading from "../../organism/loading/Loading";

export function Home() {
  const [sports, setSports] = useState([]);
  const getData = async () => {
    try {
      const data = [];
      await axios
        .get("https://dff6kz4nmb.execute-api.us-east-1.amazonaws.com/development/test-front")
        .then((response) => {
          response.data.sports.forEach((doc) => {
            data.push(doc);
          });
        });
      setSports(data);
    } catch (error) {
      window.alert(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container-home">
      <div className="home-card">
        <Suspense fallback={<Loading />}>
          {sports.length && <CardComponent sports={sports}></CardComponent>}
        </Suspense>
      </div>
    </div>
  );
}
