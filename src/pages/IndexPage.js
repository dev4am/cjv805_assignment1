import React, {useEffect, useState} from 'react'

import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Spotlight from "../components/Spotlight";
import {BackendUrl} from "../BackendUrl";

function IndexPage() {

    const [featuredMovieList, setFeaturedMovieList] = useState([]);
    const [featuredTvList, setFeaturedTvList] = useState([]);

    useEffect(()=>{
        fetch(BackendUrl.FEATURED_MOVIE, {credentials: 'include'}).then(res=>{
            return res.json();
        }).then(json=>{
            setFeaturedMovieList(json.data);
        })
    }, []);

    useEffect(()=>{
        fetch(BackendUrl.FEATURED_TV, {credentials: 'include'}).then(res=>{
            return res.json();
        }).then(json=>{
            setFeaturedTvList(json.data);
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
