import { useState } from "react";

import HomeHeader from "./Header/HomeHeader/header";
import Dropdown from "./Page/Home/Dropdown/dropdown";
import HomeSection from "./Page/Home/Section/section";

import Header from "./Header/header";
import Tab from "./Page/Sign/Tab/tab";
import Section from "./Page/Sign/Section/section";

import Footer from "./Page/Footer/footer";

const App = () => {
  const [activeTab, setActiveTab] = useState("login");
  const activeTabHandler = (at) => {
    setActiveTab(at);
  };
  return (
    <div className="App">
      <Header />
      <Tab activeTab={activeTabHandler} />
      <Section activeTab={activeTab} />
      <Footer />
      {/**
      <HomeHeader />
      <Dropdown />
      <Section />
*/}
    </div>
  );
};

export default App;
