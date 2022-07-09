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
} from "reactstrap";
import classnames from "classnames";
import { useState } from "react";

export default function LaunchCards() {
    const [activeTab, setActiveTab] = useState("1")

    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }

  return (
    <div className="container">
      <h2>Current Presales</h2>
      <Card tabs="true" className="mb-3" style={{boxShadow:"none", backgroundColor:"transparent"}}>
        <CardHeader className="card-header-tab card-header-tab-animation" style={{backgroundColor:"transparent"}}>
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
            <TabPane tabId="1">
                <div>
                    <input type="text" name="" id="" />
                </div>
              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
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
