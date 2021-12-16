import { useState } from "react";
import {
  Link,
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
/*HOME PAGE*/
import Header from "./Header/header";
import Dropdown from "./Page/Home/Dropdown/dropdown";
import HomeSection from "./Page/Home/Section/section";
import QAs from "./Page/Home/QAs/qas";
/*SIGN PAGE*/
import SignHeader from "./Header/SignHeader/header";
import Tab from "./Page/Sign/Tab/tab";
import Section from "./Page/Sign/Section/section";
/*RESTAURANTS PAGE*/
import Restaurants from "./Page/Restaurants/restaurants";
/*404 PAGE*/
import NotFound from "./Page/NotFound/notFound";

import Footer from "./Page/Footer/footer";

const App = () => {
  const [activeTab, setActiveTab] = useState("login");
  const activeTabHandler = (at) => {
    setActiveTab(at);
  };
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/sign">
            <SignHeader />
            <Tab activeTab={activeTabHandler} />
            <Section activeTab={activeTab} />
            <Footer />
          </Route>
          <Route path="/restaurants">
            <Header />
            <Restaurants />
            <Footer />
          </Route>
          <Route path="/home">
            <Header />
            <Dropdown />
            <HomeSection />
            <QAs />
            <Footer />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
