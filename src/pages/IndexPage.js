import React, {useEffect, useState} from 'react'

import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Spotlight from "../components/Spotlight";

function IndexPage() {

    const [featuredMovieList, setFeaturedMovieList] = useState([]);
    const [featuredTvList, setFeaturedTvList] = useState([]);

    useEffect(()=>{
        fetch("https://cjv805-fengkuizhang-db.herokuapp.com/featuredMovieList").then(res=>{
            return res.json();
        }).then(json=>{
            setFeaturedMovieList(json);
        })
    }, []);

    useEffect(()=>{
        fetch("https://cjv805-fengkuizhang-db.herokuapp.com/featuredTvList").then(res=>{
            return res.json();
        }).then(json=>{
            setFeaturedTvList(json);
        })
    }, []);

    return (
      <>
        <Hero/>
        <div className="container">
          <Feature name="Featured Movies" type="movie" list={featuredMovieList}/>
          <Feature name="Featured TV Shows" type="tv" list={featuredTvList}/>
            <Spotlight/>
        </div>
      </>
    )
}

export default IndexPage
