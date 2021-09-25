import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Details from "./Pages/details";
import Reviews from "./Pages/reviews";
import Shop from "./Pages/shop";
import UpcomingEvents from "./Pages/upcomingEvents";
import HomeScreen from "./Pages/homeScreen"

function App() {
  return (
    <Router>
      <Navbar />

      <Route exact path="/" component={HomeScreen} />
      <Route path="/details" component={Details} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/shop" component={Shop} />
      <Route path="/upcomingEvents" component={UpcomingEvents} />

      <Footer />
    </Router>
  );
}

export default App;
