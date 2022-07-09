import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Cards
import LaunchCards from "./LaunchCards";

// Layout
import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

const _LaunchpadLists = ({ match }) => (
  <Fragment>
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          {/* _LaunchpadLists */}
          <Route path={`${match.url}/`} component={LaunchCards} />
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default _LaunchpadLists;
