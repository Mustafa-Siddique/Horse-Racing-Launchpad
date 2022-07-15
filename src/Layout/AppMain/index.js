import { Route, Redirect } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";

import { ToastContainer } from "react-toastify";
import Create from "../../DemoPages/Create";

const Dashboards = lazy(() => import("../../DemoPages/Dashboards"));

const Widgets = lazy(() => import("../../DemoPages/Widgets"));
const Elements = lazy(() => import("../../DemoPages/Elements"));
const Components = lazy(() => import("../../DemoPages/Components"));
const Charts = lazy(() => import("../../DemoPages/Charts"));
const Forms = lazy(() => import("../../DemoPages/Forms"));
const Tables = lazy(() => import("../../DemoPages/Tables"));
const _LaunchpadList = lazy(() => import("../../DemoPages/LaunchpadList"));
const Leaderboard = lazy(() => import("../../DemoPages/Leaderboard"))

const AppMain = () => {
  return (
    <Fragment>
    {/* Create Form */}

    <Suspense
      fallback={
        <div className="loader-container">
          <div className="loader-container-inner">
            <h6 className="mt-3">
              Please wait while we load the Launchpad
              <small>
                Because this is a demonstration we load at once all the
                Dashboard Widgets. This wouldn't happen in a real
                live app!
              </small>
            </h6>
          </div>
        </div>
      }
    >
      <Route path="/create" component={Create} />
    </Suspense>

      {/* Launchpad Lists */}

      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-3">
                Please wait while we load all the Launchpad Lists
                <small>
                  Because this is a demonstration we load at once all the
                  Dashboard Widgets. This wouldn't happen in a real
                  live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path="/launchpad" component={_LaunchpadList} />
      </Suspense>

      {/* Components */}

      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-5">
                Please wait while we load all the Components
                <small>
                  Because this is a demonstration we load at once all the
                  Components. This wouldn't happen in a real live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path="/components" component={Components} />
      </Suspense>

      {/* Forms */}

      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-5">
                Please wait while we load all the Forms
                <small>
                  Because this is a demonstration we load at once all the Forms
                 . This wouldn't happen in a real live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path="/forms" component={Forms} />
      </Suspense>

      {/* Charts */}

      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-3">
                Please wait while we load all the Charts
                <small>
                  Because this is a demonstration we load at once all the Charts
                 . This wouldn't happen in a real live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path="/charts" component={Charts} />
      </Suspense>

      {/* Leaderboard */}

      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-3">
                Please wait while we load all the Charts
                <small>
                  Because this is a demonstration we load at once all the Charts
                 . This wouldn't happen in a real live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path="/leaderboard" component={Leaderboard} />
      </Suspense>

      {/* Tables */}

      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-5">
                Please wait while we load all the Tables
                <small>
                  Because this is a demonstration we load at once all the Tables
                 . This wouldn't happen in a real live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path="/tables" component={Tables} />
      </Suspense>

      {/* Elements */}

      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-3">
                Please wait while we load all the Elements
                <small>
                  Because this is a demonstration we load at once all the
                  Elements. This wouldn't happen in a real live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path="/elements" component={Elements} />
      </Suspense>

      {/* Dashboard Widgets */}

      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-3">
                Please wait while we load all the Dashboard Widgets
                <small>
                  Because this is a demonstration we load at once all the
                  Dashboard Widgets. This wouldn't happen in a real
                  live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path="/widgets" component={Widgets} />
      </Suspense>

      {/* Dashboards */}

      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-3">
                Please wait while we load all the Dashboards
                <small>
                  Because this is a demonstration, we load at once all the
                  Dashboards. This wouldn't happen in a real live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route exact path="/" component={Dashboards} />
      </Suspense>

      <ToastContainer />
    </Fragment>
  );
};

export default AppMain;
