import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";
import firstimage from "../img/img.png";
import secondimage from "../img/clicks.png";
import contiimg from "../img/conti.png";
import sales from "../img/sales.png";
import "./lastHour.css";
import info from "../constants/data";

//import Info from "../constants/data";

const Today = () => {

  return (
    <div className="container">
      {info.map((info) => {
        return (
          <div className="row" id="headr">
            <div className="col-lg-3">
              <div className="row">
                <div className="col-md-2">
                  <span>
                    {" "}
                    <li className="sidecircle"></li>
                  </span>
                </div>
                <div className="col-md-2">
                  <span> Errors : 0%</span>

                  <div>Average:0% </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="row">
                <div className="col-md-2">
                  <span>
                    {" "}
                    <li className="sidecircle"></li>
                  </span>
                </div>
                <div className="col-md-2">
                  <span> Zeroes: 0%</span>
                  <div>Average: 0%</div>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="row">
                <div className="col-md-2">
                  <span>
                    {" "}
                    <li className="sidecircle"></li>
                  </span>
                </div>
                <div className="col-md-2">
                  <span> Timeouts : 0% </span>
                  <div>Average: 0%</div>
                </div>
              </div>
            </div>

            <div className="ProgressBar">
              <ProgressBar>
                <ProgressBar striped variant="success" now={35} key={1} />
                <ProgressBar variant="warning" now={20} key={2} />
                <ProgressBar striped variant="danger" now={10} key={3} />
              </ProgressBar>
            </div>

            <div className="soil">
              <div className="row">
                <div className="col-lg-3">
                  <div className="row">
                
                    <div className="col-md-2">
                      <span> </span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="row">
              
                    <div className="col-md-2">
                      <span></span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="row">
                    <div className="col-md-2">
               
                    </div>
                    <div className="col-md-2">
                      <span> </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="soil">
              <div className="row">
                <div className="col-lg-2">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="ffrs">
                        <div>
                          {" "}
                          <img src={firstimage} alt="picone" />{" "}
                        </div>
                        <div className="img">
                          {" "}
                          <img src={contiimg} alt="picone" />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="row" id="search">
                    <h3 className="searchh3"> Searches</h3>
                    <h5 className="searchh5l">
                      {" "}
                      {" "}
                      <span className="searchh5lp">Last Hour</span>
                    </h5>
                    <h5 className="searchh5p">
                      {" "}
                    {" "}
                      <span className="searchhpp">Previous Last Hour</span>
                    </h5>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="row" id="search">
                    <h5 className="mtraffic"> Mobile traffic: 100% </h5>
                    <h5 className="mtraffic"> Web traffic : 100%</h5>
                    <p className="mtrafficg">
                      {" "}
                      You get 100% traffic on mobile and desktop devices.
                    </p>

                    <p className="mobilehelp">
                      {" "}
                      Help:{" "}
                      <span className="mobilehelps">
                        Searches, Pessimisation
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="soil">
              <div className="row">
                <div className="col-lg-2">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="ffrs">
                        <div>
                          {" "}
                          <img src={secondimage} alt="picone" />{" "}
                        </div>
                        <div className="img">
                          {" "}
                          <img src={contiimg} alt="picone" />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="row" id="search">
                    <h3 className="clicks123"> Clicks</h3>
                    <h5 className="clickslast">
                      {" "}
                      {" "}
                      <span className="lastt">Last Hour</span>{" "}
                    </h5>
                    <h5 className="clicksprevious">
                      {" "}
                      {" "}
                      <span className="lasth">Previous Last Hour</span>
                    </h5>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="row" id="search">
                    <h3 className="ctrh">
                      {" "}
                      CTR: 0%
                    </h3>
                    <p className="conver">
                      {" "}
                      Conversion from searches to clicks on all devices.
                    </p>

                    <p className="mobilehelp">
                      {" "}
                      Help: <span className="mobilehelps">CTR, Cliks</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="soil">
              <div className="row">
                <div className="col-lg-2">
                  <div className="row">
                    <div className="col-md-2">
                      <span>
                        {" "}
                        <img src={sales} alt="picone" />{" "}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="row" id="search">
                    <h3 className="searchh3"> Sales</h3>
                    <h5 className="searchh51">
                      {" "}
                      0 <span className="searchhpp">Last Hour</span>
                    </h5>
                    <h5 className="searchh5p">
                      {" "}
                      0 <span className="searchh5lp">Previous Last Hour</span>
                    </h5>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="row" id="search">
                    <h3 className="ctrhu">
                      {" "}
                      STR: 
                    </h3>
                    <h3 className="ctrhu">
                      {" "}
                      Avg. Check:
               
                    </h3>
                    <p className="conver">
                      {" "}
                      Conversion from cliks to bookings on all devices.
                    </p>

                    <p className="mobilehelp">
                      Help:{" "}
                      <span className="mobilehelps">
                        STR, Bookings, Avg. Check
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Today;
