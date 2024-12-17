import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">
        <HighlightIcon className="header-icon" />
        Write Your Daily Notes😄
      </h1>
    </header>
  );
}

export default Header;
