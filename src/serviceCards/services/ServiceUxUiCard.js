import{/*servicecardImgs*/servicecardcontent} from '../../Utils/MockData';
import PropsUxUiCard from './PropsUxUiCard';
import './PropsUxUiCard.css';
import PropTypes from 'prop-types';


function ServiceUxUiCard(){
    return(
        <div className='card'>
        {servicecardcontent.map((item) => (
          <PropsUxUiCard 
          link={item.link}
          image={item.image}
          title={item.title}
          content={item.content}/>
        ))}
      </div>
    )
}
ServiceUxUiCard.proptype={
  link:PropTypes.string,
  image:PropTypes.string,
  title:PropTypes.string,
  content:PropTypes.string,
}
export default ServiceUxUiCard;