import React, {useEffect, useState} from 'react'

import Hero from '../components/Hero';
import Feature from '../components/Feature';

function IndexPage() {

    const [featuredMovieList, setFeaturedMovieList] = useState([]);
    const [featuredTvList, setFeaturedTvList] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/featuredMovieList").then(res=>{
            return res.json();
        }).then(json=>{
            setFeaturedMovieList(json);
        })
    }, []);

    useEffect(()=>{
        fetch("http://localhost:5000/featuredTvList").then(res=>{
            return res.json();
        }).then(json=>{
            setFeaturedTvList(json);
        })
    }, []);

    return (
      <>
        <Hero/>
        <div class="container">
          <Feature name="Featured Movies" list={featuredMovieList}/>
          <Feature name="Featured TV Shows" list={featuredTvList}/>
        {/*  Service*/}
        </div>
      </>
    )
}

export default IndexPage
