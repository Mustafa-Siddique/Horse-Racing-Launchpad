import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Form
import Form from "./Form";

// Layout
import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

const Create = ({ match }) => (
  <Fragment>
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          {/* Create */}
          <Route exact path={`${match.url}/`} component={Form} />
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Create;
