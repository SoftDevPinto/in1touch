import React from 'react';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Footer from './Components/Footer';
import ScrollToTopButton from './Components/ScrollToTopButton';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Search />
      <Footer />
      <ScrollToTopButton />
    </React.Fragment>

  );
}

export default App;
