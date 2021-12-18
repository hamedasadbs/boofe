/*INNER-COMPONENTS*/
import { useState } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
/*CHILD-COMPONENTS*/
/*->HOME PAGE<-*/
import { HomeHeader } from "./Header/HomeHeader/header";
import { Dropdown } from "./Page/Home/Dropdown/dropdown";
import { HomeSection } from "./Page/Home/Section/section";
import { QAs } from "./Page/Home/QAs/qas";
import { PublicOpinion } from "./Page/Home/PublicOpinion/publicOpinion";
/*->SIGN PAGE<-*/
import { SignHeader } from "./Header/SignHeader/header";
import { Tab } from "./Page/Sign/Tab/tab";
import { SignSection } from "./Page/Sign/Section/section";
/*->RESTAURANTS PAGE<-*/
import { RestaurantHeader } from "./Header/RestaurantHeader/header";
import { Restaurants } from "./Page/Restaurants/restaurants";
/*->404 PAGE<-*/
import { NotFound } from "./Page/NotFound/notFound";
/*->FOOTER<-*/
import { Footer } from "./Page/Footer/footer";

export const App = () => {
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
            <SignSection activeTab={activeTab} />
            <Footer />
          </Route>
          <Route path="/restaurants">
            <RestaurantHeader />
            <Restaurants />
            <Footer />
          </Route>
          <Route path="/home">
            <HomeHeader />
            <Dropdown />
            <HomeSection />
            <QAs />
            <PublicOpinion />
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
