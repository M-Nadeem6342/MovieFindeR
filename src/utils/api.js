import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjY3YWFiZWZkZDQxZjA2MTBhODYzOTFjZWFjNzI4YiIsInN1YiI6IjY0NmFkNWM5NTRhMDk4MDE3MjhhNDJjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DEtqLyF8x0ldZ94FwAmJYB9f-_u6sjE7Qs35fQgAkJw";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try{
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;

    }
    catch(error){
        console.log(error);
        return error;

}
}