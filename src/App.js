import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';

// import components
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" caseSensitive={false} element={<Home />} />
          <Route path="/about" caseSensitive={false} element={<About />} />
          <Route
            path="/cocktail/:id"
            caseSensitive={false}
            element={<SingleCocktail />}
          />
          <Route path="*" caseSensitive={false} element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
