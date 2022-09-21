import './FullContainer.css'
import Nav from "./navigationBar/Nav";
import ServicesTitle from "./serviceCards/services/ServicesTitle";
import UiUxCard from "./serviceCards/services/UiUxCard";
import Ind from './industries/Ind';
import IndustriesTitle from './industries/IndustriesTitle';
import Blog from './Utils/Blog/Blog';

function FullContainer() {
  return (
    <div >
      <div className="fullnav"><Nav /></div>
      <ServicesTitle />
      <UiUxCard />
      <IndustriesTitle/>
      <Ind/>
      <Blog/>
    </div>
  );
}

export default FullContainer