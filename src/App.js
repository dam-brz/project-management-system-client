import './App.css';
import Dashboar from './components/Dashboar';
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddProject from './components/Project/AddProject';
import { Provider } from "react-redux";
import store from './store';
import UpdateProject from './components/Project/UpdateProject';
import ProjectBoard from './components/ProjectBoard/ProjectBoard';
import AddProjectTask from './components/ProjectBoard/ProjectTasks/AddProjectTask';
import UpdateProjectTask from './components/ProjectBoard/ProjectTasks/UpdateProjectTask';
import LandingPage from './components/Layout/LandingPage';
import Register from './components/UserManagement/Register';
import Login from './components/UserManagement/Login';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/dashboard" component={Dashboar}/>
          <Route exact path="/addProject" component={AddProject}/>
          <Route exact path="/updateProject/:id" component={UpdateProject}/>
          <Route exact path="/projectBoard/:projectIdentifier" component={ ProjectBoard }/>
          <Route exact path="/addProjectTask/:projectIdentifier" component={ AddProjectTask }/>
          <Route exact path="/updateProjectTask/:projectIdentifier/:projectSequence" component={ UpdateProjectTask }/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
