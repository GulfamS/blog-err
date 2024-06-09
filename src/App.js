import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Header from "./components/Header";
import BlogPost from "./components/BlogPost";
import {ToastContainer} from "react-toastify"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <ToastContainer/>
        <Routes>
          <Route path="/" component={<Home/>}/>
          <Route path="/profile" component={<Profile/>}/>
          <Route path="/blog-post" component={<BlogPost/>}/>
          <Route path="/dashboard" component={<Dashboard/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;