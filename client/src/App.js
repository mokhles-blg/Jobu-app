import { Switch, Route } from "react-router";
import Errors from "./pages/Errors";
import LandPage from "./pages/LandPage";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SearchingPage from "./pages/SearchingPage";
import ApplicationForm from "./pages/ApplicationForm";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        {" "}
        <Route exact path="/" component={LandPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/searchingPage" component={SearchingPage} />
        <Route path="/postDetails" component={PostDetails} />
        <Route path="/profile" component={Profile} />
        <Route path="/applicationForm" component={ApplicationForm} />
        <Route path="/createPost" component={CreatePost} />
        <Route path="/*" component={Errors} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
