
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
    REGISTER: "https://cjv805-fengkuizhang-springboot.herokuapp.com/user/register",
    LOGIN: "https://cjv805-fengkuizhang-springboot.herokuapp.com/user/login",
    FEATURED_MOVIE: "https://cjv805-fengkuizhang-springboot.herokuapp.com/video/featured/movie",
    FEATURED_TV: "https://cjv805-fengkuizhang-springboot.herokuapp.com/video/featured/tv",
    ALL_MOVIE: "https://cjv805-fengkuizhang-springboot.herokuapp.com/video/movie",
    ALL_TV: "https://cjv805-fengkuizhang-springboot.herokuapp.com/video/tv",
    VIDEO_DETAIL: "https://cjv805-fengkuizhang-springboot.herokuapp.com/video",
}

export const BackendUrl = process.env.ACTIVE_PROFILE || dev;