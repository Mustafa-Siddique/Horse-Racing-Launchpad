import React from "react";
import {
  FaGlobe,
  FaTwitter,
  FaTelegramPlane,
  FaGithub,
  FaLock,
} from "react-icons/fa";
import { ListGroup, ListGroupItem } from "reactstrap";

export default function LaunchDetails() {
  return (
    <div
      className="container lauch-detail-main mt-5"
      style={{ maxWidth: "1200px" }}
    >
      <div className="row">
        <div className="col-xl-8 bg-white p-4">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <h3 className="fs-3 mb-0">Name</h3>&nbsp;
              <div className="badge mt-1 bg-info">Info</div>
            </div>
            <div
              id="status"
              className="bg-warning text-secondary px-2 py-1 rounded-pill"
            >
              <FaLock /> Upcoming
            </div>
          </div>
          <div className="d-flex fs-4 col-md-2 justify-content-between">
            <a href="/">
              <FaGlobe />
            </a>
            <a href="/">
              <FaTwitter />
            </a>
            <a href="/">
              <FaTelegramPlane />
            </a>
            <a href="/">
              <FaGithub />
            </a>
          </div>
          <p className="mt-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
        <div className="col-xl-4">
          <img
            src="https://images.unsplash.com/photo-1566251037378-5e04e3bec343?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9yc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="mt-4 bg-white p-3">
          <ListGroup flush>
        <ListGroupItem disabled tag="a" href="#">Cras justo odio</ListGroupItem>
        <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
        <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
      </ListGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
