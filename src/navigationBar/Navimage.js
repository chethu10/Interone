import {navimage} from "../utils/MockData";
import NavEdt from "./NavEdt";

function Navimage() {
  return (
    <div>
      {navimage.map((item) => (
        <NavEdt companyImage={item.companyImage} />
      ))}
      </div>
  )}
  export default Navimage;
