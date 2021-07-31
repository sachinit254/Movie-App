import React from "react";
// @ts-ignore
import { useParams } from "react-router-dom";
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
// components
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import Grid from "./Grid";
import Spinner from "./Spinner";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";

// Hook
import { useMovieFetch } from "../Hooks/useMovieFetch";
// Image
import NoImage from "../images/no_image.jpg";

const Movie:React.FC = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);
  if (loading) <Spinner/>;
  if (error) <div>Something went wrong!!!</div>;
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie.actors?.map(actor=>(
          <Actor key={actor.credit_id} name={actor.name} character={actor.character} imageUrl={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`: NoImage}/>
        ))}
      </Grid>
    </>
  );
};

export default Movie;
