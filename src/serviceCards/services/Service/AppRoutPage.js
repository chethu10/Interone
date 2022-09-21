import './UiUxRoutPage.css';

function AppRoutPage(props) {
  return (
    <div className="uiuxcont">
      <div className='UiuxTitle'>{props.title}</div>
      <div className='imgAndSub'>
          <div className='pic'><img src={props.image} alt="" /></div>
        <div className='sub'>{props.subtitle}</div>
        </div>
      <div className='content'>{props.content}</div>
    </div>
  );
}
export default AppRoutPage;