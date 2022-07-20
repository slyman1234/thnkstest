import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./Tabs.css";
import LastHour from "../components/lastHour";
import Today from "../components/Today";
import Yesterday from "../components/Yesterday";
import Last3days from "../components/Last3days";

const Tabss = () => {
  return (
    <div className="container">
      <div className="mainmetric">
        <h2>Main Metrics</h2>
      </div>

      <Tabs
        defaultActiveKey="Yesterday"
        id="uncontrolled-tab-example"
        className="col-md-6"
      >
        <Tab eventKey="home" title="Last Hour" className="tabhead">
          <LastHour />
        </Tab>
        <Tab eventKey="profile" title="Today" className="tabhead">
          <Today />
        </Tab>
        <Tab eventKey="Yesterday" title="Yesterday" className="tabhead">
          <Yesterday />
        </Tab>

        <Tab eventKey="contact" title="Last 3 Days">
          <Last3days />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Tabss;
