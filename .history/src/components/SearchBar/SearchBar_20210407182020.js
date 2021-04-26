import { Button } from "@material-ui/core";
import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="bgImage">
      <div>
        <h1 className="search-bar-title">Find your best product</h1>
        <div className="search-bar">
          <input placeholder="Search house..." type="text" />
          <Button className="search-btn" color="secondary" variant="contained">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
