import React, { useEffect, useState } from "react";
import "./Record.scss";
import { collection, doc, getDocs } from "firebase/firestore";
import {  db } from "../../../firebase-config";
import SmallCard from "../../organism/smallCard/SmallCard";

export default function Record() {
  const [historys, setHistorys] = useState([])
  
  useEffect(()=>{
    const getData = async ()=> {
      try {
        const user = localStorage.getItem('user')
        console.log('user',user);
        const getDocsFire = getDocs
        const querySnapshot = await getDocsFire(collection(db, localStorage.getItem('user')));
        console.log('querySnapshot',querySnapshot);
        const docs = [];
          querySnapshot.forEach((doc) => {
            console.log('doc',doc.data());
            docs.push({...doc.data(), id: doc.data().id, name: doc.data().name,state:doc.data().state, url: doc.data().url });
          });
          setHistorys(docs);
          console.log('historys',historys);
        
      } catch (error) {
        
      }

    }
    getData();

  },[])
  return <div className="container-small">
      <div className="container-small__text">
        <h2>
          History
        </h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      {historys.map((history)=>
      <SmallCard data={history} />

    )}
    </div>;
}
