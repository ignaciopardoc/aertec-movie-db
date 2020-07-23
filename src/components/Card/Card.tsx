import React from "react";
import { IApiResponse } from "../../interfaces/IApiResponse";
import "./style.css";
import logo from "../../tmdblogo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface IGlobalProps {}

interface IProps {
  movie: IApiResponse;
}

type TProps = IGlobalProps & IProps;

const Card = (props: TProps) => {
  const backgroundImage =
    props.movie.poster_path === null
      ? `url(${logo})`
      : `url(http://image.tmdb.org/t/p/w500${props.movie.poster_path})`;

  let releaseDate =
    props.movie.release_date !== undefined
      ? props.movie.release_date.substr(0, 4)
      : "";

  return (
    <div className="col-md-4 col-12" key={props.movie.id}>
      <Link to={`/detail/${props.movie.id}`}>
          <div
            className="card mt-5 movieCardDiv"
            style={{
              backgroundImage: backgroundImage,
            }}
          >
            <div className="p-3 overlay">
              <div className="row topCardDiv">
                <div className="col-5">
                  <h5>{props.movie.title}</h5>
                </div>
                <div className="col-5">
                  <h5>
                    {props.movie.vote_average}
                    <FontAwesomeIcon
                      className="ml-2"
                      icon={faStar}
                    ></FontAwesomeIcon>
                  </h5>
                </div>
                <div className="col-2">
                  <h5>{releaseDate}</h5>
                </div>
              </div>
            </div>
          </div>
      </Link>
    </div>
  );
};

export default Card;
