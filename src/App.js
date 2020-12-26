import './App.css';
import Live from './pages/live'
import Result from './pages/result'
import Contact from './pages/Contact'
import {TransitionGroup,CSSTransition} from "react-transition-group";
import {BrowserRouter as Router,Link, Route} from 'react-router-dom'
function App() {
  const routes = [
    { key: 1, path: '/live', name: 'Home', Component: Live },
    { key: 2, path: '/result', name: 'About', Component: Result },
    { key: 3, path: '/contact', name: 'Contact', Component: Contact },
  ]
  return (
    <Router>
      <div class="row">
          <div class="col-lg-6 sutun1">
          <div className="menu">
              <ul>
                  <li><Link to="/live"><i className="fas fa-home"></i>Anasayfa</Link></li>
                  <li><Link to="/live"><i className="fas fa-home"></i>Canlı Yayın</Link></li>
                  <li><Link to="/result"> <i className="fas fa-home"></i>Sonuçlar</Link></li>
                  <li><Link to="/contact"> <i className="fas fa-home"></i>iletişim</Link></li>
              </ul>
          </div>
            <div className="baslik">
              <h1 className="baslik-buyuk">
                Hackhathon'a hoşgeldiniz!
              </h1>
              <h6 className="mt-5">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use.
              </h6>
              <div className="mt-5">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZX13KoNPSpw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
          </div >
          </div>
          </div>
          <div class="col-lg-4">
            <div className="rel">
          {routes.map(({ path, Component },i) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  key={i}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
          </div>
          </div>
       </div>
    </Router>
  );
}
export default App;