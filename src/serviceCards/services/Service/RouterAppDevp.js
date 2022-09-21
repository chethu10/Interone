import { AppDevelopment} from "../../../Utils/MockData";
import PropTypes from "prop-types";
import AppDevpRoutePage from "./AppDevpRoutePage";

function RouterAppDevp() {
  return (
    <div>
      {AppDevelopment.map((item) => (
        <AppDevpRoutePage
          title={item.title}
          image={item.image}
          subtitle={item.subtitle}
          content={item.content}
        />
      ))}
    </div>
  );
}
RouterAppDevp.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
};
export default RouterAppDevp;