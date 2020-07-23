import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { API_URL_SINGLE, API_KEY } from "../../utils/API_KEY";
import { connect } from "react-redux";
import ISingleMovieResponse from "../../interfaces/ISingleMovieResponse";
import "./style.css";

import Youtube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IStore } from "../../interfaces/IStore";

interface IGlobalProps {
  language: string;
}

interface IProps {}

type TProps = IGlobalProps & IProps;

const FilmDetail = (props: TProps) => {
  const [filmData, setFilmData] = useState<ISingleMovieResponse | undefined>(
    undefined
  );
  const { movieId } = useParams();

  const getMovieData = async () => {
    const response = await Axios.get(
      `${API_URL_SINGLE}${movieId}?api_key=${API_KEY}&language=${props.language}&append_to_response=videos,images`
    );

    if (response.data !== undefined) {
      setFilmData(response.data as any);
    }
  };
  if (filmData !== undefined) {
    console.log(filmData);
  }
  useEffect(() => {
    getMovieData();
  }, [movieId, props.language]);

  return (
    <div className="row h-100">
      <div className="col-12">
        <div className="card p-5">
          <div className="row">
            <div className="col-md-6 col-12">
              {filmData !== undefined &&
                filmData?.videos?.results[0]?.key !== undefined && (
                  <Youtube
                    containerClassName="videoContainer"
                    videoId={
                      filmData?.videos.results[0].key
                        ? filmData?.videos.results[0].key
                        : undefined
                    }
                  />
                )}
            </div>
            <div className="col-md-6 col-12">
              <h3>{filmData?.title}</h3>
              <h5>{filmData?.release_date.substr(0, 4)}</h5>
              <h5>
                {filmData?.vote_average}
                <FontAwesomeIcon
                  className="ml-2"
                  icon={faStar}
                ></FontAwesomeIcon>{" "}
                ({filmData?.vote_count})
              </h5>
              <p>{filmData?.tagline}</p>
              <p>{filmData?.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ language }: IStore): IGlobalProps => ({
  language,
});

export default connect(mapStateToProps)(FilmDetail);
