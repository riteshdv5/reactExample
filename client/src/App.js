import "./App.css";
import {Routes, Route } from "react-router-dom";
import Navigation from "./components/layout/header";
import Home from  "./webpages/home";
import Contact from "./webpages/contact";
import FileUpload from "./webpages/fileUpload";

function App() {
  return (
    <div className="App">
      <header>
         <Navigation/>
      </header>
     
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/fileUpload" element={<FileUpload/>} />
            <Route exact path="/Contact" element={<Contact/>} />
          </Routes>
        </div>
       
      {/* <header className="">
     
      </header>
      <section>
         <LoginForm />
      </section>
      <footer>

      </footer> */}
    </div>
  );
}

export default App;
