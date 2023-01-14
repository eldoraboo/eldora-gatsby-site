import React from "react";
import { Link } from "@reach/router";

import me from "../../static/profile.jpg";
import dimo from "../../static/mozzi.jpg";

export const AboutSidebar = () => {
  return (
    <aside className="post-sidebar">
      <div className="post-sidebar-card">
        <h2>Me</h2>
        <img src={me} alt="Eldora" />
      </div>
      <div className="post-sidebar-card">
        <Link to="/peet">Adventures of Peet</Link>
      </div>
    </aside>
  );
};
