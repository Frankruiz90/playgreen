import axios from "axios";
import React, { useEffect, useState } from "react";

// const baseURL = 'https://apimocha.com/playgreen/sports';

export const Home = () => {
    const [sports, setSports] = useState([])

    useEffect(() => {
        
          const getData = async () => {
            await axios.get('https://apimocha.com/playgreen/sports').then((response)=> {
                console.log(response.data.sports);
                setSports(response.data.sports);
                console.log('response',sports);
            });
        };
        getData();
        
      }, []);

  return <div>
    {sports.map(sport=> <div> <p>{sport.strSport}{sport.strSportDescription}</p><img src={sport.strSportThumb} alt="" /></div> )}
  </div>;
};
