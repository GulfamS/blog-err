import {BrowserRouter, Route} from "react-router-dom"
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Header from "./components/Header";
import BlogPost from "./components/BlogPost";
import Login from "./components/Login";
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Header/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/blog-post" component={BlogPost}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/login" component={Login}/>
    </BrowserRouter>
  );
}

export default App;