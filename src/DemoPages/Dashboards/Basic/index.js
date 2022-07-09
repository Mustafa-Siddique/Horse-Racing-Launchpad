import React from "react";
import avatar from "../../../assets/utils/images/avatars/horse.png";

export default function index() {
  return (
    <div className="container py-5 dashboard-main">
      <div className="text-center pt-5">
        <h1 className="mb-3">The Launchpad Protocol for Everyone!</h1>
        <h4>
          Architect helps everyone to create their own tokens and token sales in
          few seconds.
        </h4>
        <h4>
          Tokens created on Architect will be verified and published on explorer
          websites.
        </h4>
        <div className="mt-4 pt-1">
          <div className="btn-wide btn btn-primary btn-lg mb-2 mx-1">Create Now</div>
          <div className="btn-wide btn btn-primary btn-lg mb-2 mx-1">Learn More</div>
        </div>
      </div>

      <div className="row total-stats mt-5">
        <div className="col-lg-3 col-sm-6 my-2 my-xl-0">
          <div className="total-stat-card rounded">
            <p>$211.2M</p>
            <span>Total Liquidity Raised</span>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 my-2 my-xl-0">
          <div className="total-stat-card rounded">
            <p>11250</p>
            <span>Total Projects</span>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 my-2 my-xl-0">
          <div className="total-stat-card rounded">
            <p>1.2M</p>
            <span>Total Participants</span>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 my-2 my-xl-0">
          <div className="total-stat-card rounded">
            <p>$110.6M</p>
            <span>Total Values Locked</span>
          </div>
        </div>
      </div>

      <div className="text-center" style={{ marginTop: "100px" }}>
        <h1 className="mb-3">A Suite of Tools for Token Sales.</h1>
        <h4 style={{ maxWidth: "750px", margin: "auto" }}>
          A suite of tools were built to help you create your own tokens and
          launchpads in a fast, simpleand cheap way, with no prior code
          knowledge required and 100% decentralized!
        </h4>
      </div>

      <div className="row total-stats mt-5">
        <div className="col-lg-3 col-sm-6 my-2 my-xl-0">
          <div className="total-stat-card rounded">
            <img src={avatar} alt="" />
            <p className="fs-2">Standard</p>
            <span className="text-center">Mint standard tokens on ETH, BSC, AVAX, Fantom, Polygon.</span>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 my-2 my-xl-0">
          <div className="total-stat-card rounded">
            <img src={avatar} alt="" />
            <p className="fs-2">Deflationary</p>
            <span className="text-center">Generate deflationary tokens with tax and/or charity functions.</span>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 my-2 my-xl-0">
          <div className="total-stat-card rounded">
            <img src={avatar} alt="" />
            <p className="fs-2">Customization</p>
            <span className="text-center">Create a token sale for your own custom token easily.</span>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 my-2 my-xl-0">
          <div className="total-stat-card rounded">
            <img src={avatar} alt="" />
            <p className="fs-2">Launchpad</p>
            <span className="text-center">Use the token you mint to create a launchpad with just a few clicks</span>
          </div>
        </div>
      </div>

      <p className="mt-5 mb-4 text-center">Disclaimer: The information provided shall not in any way constitute a recommendation as to whether you should invest in any product discussed. We accept no liability for any loss occasioned to any person acting or refraining from action as a result of any material provided or published.</p>
    </div>
  );
}
