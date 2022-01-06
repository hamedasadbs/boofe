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
import { SignTab } from "./Page/Sign/Tab/tab";
import { SignSection } from "./Page/Sign/Section/section";
/*->RESTAURANTS PAGE<-*/
import { RestaurantHeader } from "./Header/RestaurantHeader/header";
import { Restaurants } from "./Page/Restaurants/restaurants";
/*->Admin PAGE<-*/
import { AdminTab } from "./Page/Admin/Tab/tab";
import { AdminSection } from "./Page/Admin/Section/section";
/*->404 PAGE<-*/
import { NotFound } from "./Page/NotFound/notFound";
/*->FOOTER<-*/
import { Footer } from "./Page/Footer/footer";

export const App = () => {
  const [signActiveTab, setSignActiveTab] = useState("login");
  const [adminActiveTab, setAdminActiveTab] = useState("add");
  const [token, setToken] = useState("حساب کاربری");

  const signActiveTabHandler = (at) => {
    setSignActiveTab(at);
  };

  const adminActiveTabHandler = (at) => {
    setAdminActiveTab(at);
  };

  const tokenHandler = (tk) => {
    alert(tk);
    setToken(tk);
  };
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/sign">
            <SignHeader />
            <SignTab activeTab={signActiveTabHandler} />
            <SignSection activeTab={signActiveTab} token={tokenHandler} />
            <Footer />
          </Route>
          <Route path="/restaurants">
            <RestaurantHeader />
            <Restaurants />
            <Footer />
          </Route>
          <Route path="/home">
            <HomeHeader token={token} />
            <Dropdown />
            <HomeSection />
            <QAs />
            <PublicOpinion />
            <Footer />
          </Route>
          <Route path="/admin">
            <SignHeader />
            <AdminTab activeTab={adminActiveTabHandler} />
            <AdminSection activeTab={adminActiveTab} />
          </Route>
          <Route exact path="/boofe/">
            <Redirect to="/home" />
          </Route>
          <Route path="/">
            <SignHeader />
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
