const Apikey = process.env.Apikey
const request = {
  fetchTrending: {
      title:'Trending',
      url:`/trending/all/week?api_key=${Apikey}&language=en-US`},
  fetchNetflixOrignals:{
    title:'Tv Movies',
    url:`/trending/all/week?api_key=${Apikey}&with_networks=10770`},
  fetchTopRated: {
    title:'Top Rated',  
    url:`/movie/top_rated?api_key=${Apikey}&language=en-US`},
  fetchActionMovies: {
    title:'Action Movies',  
    url:`/discover/movie?api_key=${Apikey}&with_genres=28`},
  fetchComedyMovies: {
    title:'Comedy Moies',  
    url:`/discover/movie?api_key=${Apikey}&with_genres=35`},
  fetchHorrorMovies: {
    title:'Horror Movies',  
    url:`/discover/movie?api_key=${Apikey}&with_genres=27`},
  fetchRomanceMovies: {
    title:'Romance Movies',  
    url:`/discover/movie?api_key=${Apikey}&with_genres=10749`},
  fetchDocumentries: {
    title:'Sci-Fi',  
    url:`/discover/movie?api_key=${Apikey}&with_genres=878`},
};
export default request;
