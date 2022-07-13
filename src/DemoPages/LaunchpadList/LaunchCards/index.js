import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  CardHeader,
  CardFooter,
  Card,
  CardBody,
  Button,
  Progress,
} from "reactstrap";
import classnames from "classnames";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LaunchCards() {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <div className="container">
      <h2>Current Presales</h2>
      <Card
        tabs="true"
        className="mb-3"
        style={{ boxShadow: "none", backgroundColor: "transparent" }}
      >
        <CardHeader
          className="card-header-tab card-header-tab-animation"
          style={{ backgroundColor: "transparent" }}
        >
          {/* <div className="card-header-title font-size-lg text-capitalize fw-normal">
            <i className="header-icon lnr-gift icon-gradient bg-love-kiss"> </i>
            Tabs Alternate Animation
          </div> */}
          <Nav className="mx-auto">
            <NavItem>
              <NavLink
                href="#"
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                All Launchpads
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                Advanced Mode
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                className={classnames({ active: activeTab === "3" })}
                onClick={() => {
                  toggle("3");
                }}
              >
                My Contributions
              </NavLink>
            </NavItem>
          </Nav>
        </CardHeader>
        <CardBody>
          <TabContent activeTab={activeTab}>
            {/* ALL LAUNCHPADS */}
            <TabPane tabId="1" className="all-launchpad">
              <div className="d-flex align-items-end">
                <input type="text" name="" id="" className="search" />
                <div className="mx-3">
                  <label htmlFor="" style={{minWidth:"110px"}}>Filter</label>
                  <Form.Select aria-label="Default select example">
                    <option>All Status</option>
                    <option value="1">Upcoming</option>
                    <option value="2">In Progress</option>
                    <option value="3">Ended</option>
                  </Form.Select>
                </div>
                <div>
                  <label htmlFor="" style={{minWidth:"110px"}}>Sort By</label>
                  <Form.Select aria-label="Default select example">
                    <option>No Filter</option>
                    <option value="1">Hardcap</option>
                    <option value="2">Softcap</option>
                    <option value="3">Ended</option>
                  </Form.Select>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-4 bg-white shadow-lg p-3" id="launch-card-self">
                  <div className="d-flex justify-content-between align-items-center">
                    <div id="avatar" className="bg-danger">
                      <img
                        src="https://ipfs.infura.io/ipfs/QmaPZvUzFELZgBUgjvyHFC5iR7rGNUT4q9vsbd86R635z8"
                        alt=""
                      />
                    </div>
                    <div id="status" className="bg-warning text-secondary px-2 py-1 rounded-pill">Upcoming</div>
                  </div>
                  <h4 className="mb-0">Name</h4>
                  <p className="text-secondary">1 BNB = 1,000,000 ACU</p>
                  <p>Progress (0.00%):</p>
                  <Progress
                    className="mb-3"
                    animated
                    color="success"
                    value="25"
                  />
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span>Sale Starts In:</span><br />
                      <span className="fw-bold">01:08:21:28</span>
                    </div>
                    <Link to="/launchpad/detailpage" className="btn btn-primary">View Details</Link>
                  </div>
                </div>
              </div>
            </TabPane>

            <TabPane tabId="2">
              <p>
                Like Aldus PageMaker including versions of Lorem. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
            </TabPane>
            <TabPane tabId="3">
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.{" "}
              </p>
            </TabPane>
          </TabContent>
        </CardBody>
        {/* <CardFooter className="d-block text-center">
          <Button className="btn-wide" color="link">
            Link Button
          </Button>
          <Button className="btn-wide btn-shadow" color="danger">
            Delete
          </Button>
        </CardFooter> */}
      </Card>
    </div>
  );
}
