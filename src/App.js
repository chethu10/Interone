import { Routes, Route } from "react-router-dom";
import "./App.css";
import FullContainer from "./FullContainer";
import RouteApp from "./serviceCards/services/Service/RouterApp";
import RouteMobile from "./serviceCards/services/Service/RouterMobile";
import RouteUxUi from "./serviceCards/services/Service/RouteUxUi";
import RouteWeb from "./serviceCards/services/Service/RouteWeb";
import TestingNestJSusing from "./BlogCont/Blog/Testing-NestJS-using-est";
import BlogSeeClick from "./BlogCont/BlogSeeClick";
// import BlogSeeClick from "./BlogCont/BlogSeeClick";


function App() {
  return (
      <Routes>
      <Route path="/Service/Ui" element={<RouteUxUi/>}/>
      <Route path="/service/app" element={<RouteApp/>}/>
      <Route path="/service/web" element={<RouteWeb/>}/>
      <Route path="/service/Mobile" element={<RouteMobile/>}/>
      <Route path="/service/AppDep" element={<RouteMobile/>}/>
      <Route path="/Testing-NestJS-using-est" element={<TestingNestJSusing/>}/>
      <Route path="/BlogCont/BlogSeeClick" element={<BlogSeeClick/>}/>
      <Route path="/" element={<FullContainer/>}/>
      </Routes>
  );
}

export default App;
