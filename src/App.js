import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/nav";
import "./assets/css/style.css";
import Home from "./pages/home";
import Aboutus from "./pages/aboutus";
import Youtube from "./pages/youtube";
import Blogs from "./pages/blogs";
import Footer from "./components/footer";
import Gallery from "./pages/gallery";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={Aboutus} />
            <Route path="/youtube" component={Youtube} />
            <Route path="/blog" component={Blogs} />
            <Route path="/gallery" component={Gallery} />
          </Switch>
          <Footer />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
