import React from "react";
// config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";
// Components
import HeroImage from "./HeroImage/index";
import Grid from "./Grid/index";
import Thumb from "./Thumb/index";
import Spinner from "./Spinner/index";
import SearchBar from "./SearchBar/index";
import Button from "./Button/index";
// Hooks
import { useHomeFetch } from "../Hooks/useHomeFetch";
// Image
import NoImage from "../images/no_image.jpg";

const Home: React.FC = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setMore } =
    useHomeFetch();

   if(error){
     <div>Something went wrong!!!</div>
   } 
  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? "SearchResults" : "Popular Movies"}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          ></Thumb>
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={()=> setMore(true)}/>
      )}
    </>
  );
};

export default Home;
