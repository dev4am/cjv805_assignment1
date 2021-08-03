
const dev = {
    REGISTER: "http://localhost:8080/user/register",
    LOGIN: "http://localhost:8080/user/login",
    FEATURED_MOVIE: "http://localhost:8080/video/featured/movie",
    FEATURED_TV: "http://localhost:8080/video/featured/tv",
    ALL_MOVIE: "http://localhost:8080/video/movie",
    ALL_TV: "http://localhost:8080/video/tv",
    VIDEO_DETAIL: "http://localhost:8080/video",
}

const prod = {
    REGISTER: "http://localhost:8080/user/register",
    LOGIN: "http://localhost:8080/user/login",
    FEATURED_MOVIE: "https://cjv805-fengkuizhang-db.herokuapp.com/featuredMovieList",
    FEATURED_TV: "https://cjv805-fengkuizhang-db.herokuapp.com/featuredTvList",
    ALL_MOVIE: "https://cjv805-fengkuizhang-db.herokuapp.com/movieList",
    ALL_TV: "https://cjv805-fengkuizhang-db.herokuapp.com/tvList",
    VIDEO_DETAIL: "https://cjv805-fengkuizhang-db.herokuapp.com/video",
}

export const BackendUrl = dev;