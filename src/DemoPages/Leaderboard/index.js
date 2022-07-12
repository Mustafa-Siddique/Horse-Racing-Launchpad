import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Tables
import Tabularboard from "./TabularBoard";

// Layout
import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

const Leaderboard = ({ match }) => (
  <Fragment>
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          {/* Leaderboard */}
          <Route path={`${match.url}/`} component={Tabularboard} />
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Leaderboard;