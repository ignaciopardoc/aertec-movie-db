/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Card from "../Card/Card";
import axios from "axios";
import { API_URL_QUERY } from "../../utils/API_KEY";
import { IStore } from "../../interfaces/IStore";
import { connect } from "react-redux";
import { useDebounce } from "use-debounce";
import { setMovies } from "../../redux/actions";
import { IApiResponse } from "../../interfaces/IApiResponse";

interface IGlobalProps {
  searchText: string;
  movieData: IApiResponse[];
  language: string;
}

interface IProps {
  setMovies(movies: IApiResponse[]): void;
}

type TProps = IGlobalProps & IProps;

const Home = (props: TProps) => {
  const searchMovie = async () => {
    if (props.searchText?.length) {
      let response = await axios.get(
        `${API_URL_QUERY}${props.searchText}&language=${props.language}`
      );
      console.log(response.data.results);
      props.setMovies(
        response.data.results.sort(
          (a: IApiResponse, b: IApiResponse) => b.popularity - a.popularity
        )
      );
    } else{
      props.setMovies([])
    }
  };

  // Avoid asking API each time a letter is added
  const [debounce] = useDebounce(props.searchText, 500);

  useEffect(() => {
    if (debounce) {
      searchMovie();
    }
  }, [props.searchText, props.language, debounce]);

  return (
    <div className="container-fluid px-5 pb-5">
      <div className="row">
        {props.movieData.map((movie: IApiResponse) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({
  searchText,
  movieData,
  language,
}: IStore): IGlobalProps => ({
  searchText,
  movieData,
  language,
});

const mapDispatchToProps = {
  setMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
