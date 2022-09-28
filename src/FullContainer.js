import "./FullContainer.css";
import Nav from "./navigationBar/Nav";
import ServicesTitle from "./serviceCards/services/ServicesTitle";
import UiUxCard from "./serviceCards/services/UiUxCard";
import Ind from "./industries/Ind";
import IndustriesTitle from "./industries/IndustriesTitle";
import Blog from "./blogComponent/Blog";
import BlogTitle from "./blogComponent/BlogTitle";
// import Button from './Button/Button';

function FullContainer() {
  return (
    <div className="fullcont">
      <Nav />
      <ServicesTitle />
      <UiUxCard />
      <IndustriesTitle />
      <Ind />
      <BlogTitle />
      <Blog />
    </div>
  );
}

export default FullContainer;
