import { industriesImage } from '../utils/MockData';
import PropsIndusrtries from "./PropsIndustries";
import "./IndustriesComp.css";
function IndustriesComp() {
  return (
    <div className=''>
      {industriesImage.map((item) => (
        <PropsIndusrtries
          banking={item.banking}
          medical={item.medical}
          business={item.business}
          education={item.education}
          entertainment={item.entertainment}
          shopping={item.shopping}
        />
      ))}
    </div>
  );
}
export default IndustriesComp;
