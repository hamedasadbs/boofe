import HomeHeader from "./Header/HomeHeader/header";
import Dropdown from "./Page/Home/Dropdown/dropdown";
import HomeSection from "./Page/Home/Section/section";

import Header from "./Header/header";
import Tab from "./Page/Sign/Tab/tab";
import Section from "./Page/Sign/Section/section";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Tab />
      <Section />
      {/**
      <HomeHeader />
      <Dropdown />
      <Section />
*/}
    </div>
  );
};

export default App;
