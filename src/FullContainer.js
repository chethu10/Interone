import './FullContainer.css'
import Nav from "./navigationBar/Nav";
import ServicesTitle from "./serviceCards/services/ServicesTitle";
import UiUxCard from "./serviceCards/services/UiUxCard";
import Ind from './industries/Ind';
import IndustriesTitle from './industries/IndustriesTitle';
import Blog from './BlogCont/Blog';
import BlogTitle from './BlogCont/BlogTitle';

function FullContainer() {
  return (
    <div className='fullcont' >
      <div className="fullnav"><Nav /></div>
      <ServicesTitle />
      <UiUxCard />
      <IndustriesTitle/>
      <Ind/>
      <BlogTitle/>
      <Blog/>
    </div>
  );
}




export default FullContainer