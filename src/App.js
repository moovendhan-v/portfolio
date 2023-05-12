import React from 'react';
import Nav from './components/nav';
import "./assets/css/style.css";
// import Home from './pages/home';
// import Aboutus from './pages/aboutus';
// import Youtube from './pages/youtube';
import Footer from './components/footer';
import Gallery from './pages/gallery';
// import Blogs from './pages/blogs';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        {/* <Home /> */}
        {/* <Aboutus /> */}
        {/* <Youtube /> */}
        {/* <Blogs /> */}
        <Gallery />
        <Footer />
      </header>
    </div>
  );
}

export default App;
