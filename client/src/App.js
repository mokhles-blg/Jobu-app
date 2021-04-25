import { useEffect } from "react";
import { Switch, Route } from "react-router";
import { useDispatch } from "react-redux";
import Errors from "./pages/Errors";
import LandPage from "./pages/LandPage";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Jobs from "./pages/Jobs";
import ApplicationForm from "./pages/ApplicationForm";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { currentUser } from "./JS/actions/user";
import PrivateRoute from "./router/PrivateRoute";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  return (
    <div className="App">
      <Navbar />
      <Switch>
        {" "}
        <Route exact path="/" component={LandPage} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/postDetails/:id" component={PostDetails} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/applicationForm" component={ApplicationForm} />
        <Route path="/createPost" component={CreatePost} />
        {/*
       <Route path="/*" component={Errors} />
        */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
