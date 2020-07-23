import React from "react";
import "./navbar.css";
import { IStore } from "../../interfaces/IStore";
import { setSeachText, setLanguage } from "../../redux/actions";
import { connect } from "react-redux";
import logo from "../../tmdblogo.svg";
import { Link } from "react-router-dom";

interface IProps {
  setSeachText(text: string): void;
  setLanguage(language: string): void;
}

interface IGlobalProps {
  searchText: string;
  language: string;
}

type TProps = IProps & IGlobalProps;

const Navbar = (props: TProps) => {
  return (
    <nav className="">
      <div className="row h-100 w-100 px-3">
        <div className="col-md-1 col-3 logoDiv">
          <Link to="/" className="logoDiv">
            <img className="w-100" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="col-md-5 col-9 searchDiv">
          <input
            placeholder="Enter the movie title here"
            type="text"
            onChange={(e) => props.setSeachText(e.target.value)}
            value={props.searchText}
            className="form-control"
            name="searchInput"
            id="searchInput"
          />
        </div>
        <div className="col-md-3 col-12 languageDiv">
          <select
            name="languageSelect"
            id="languageSelect"
            value={props.language}
            className="form-control"
            onChange={(e) => props.setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="de">Deutsch</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ searchText, language }: IStore): IGlobalProps => ({
  searchText,
  language,
});
const mapDispatchToProps = {
  setSeachText,
  setLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
