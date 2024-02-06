import React from 'react';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Footer from './Components/Footer';
import ScrollToTopButton from './Components/ScrollToTopButton';
import RotatingBanner from './Components/RotatingBanner';
// import DateFilter from './Components/DataFilter';

function App() {
  // Define your banner images here with correct paths
  const bannerImages = [
    '/image6.png', // Relative path to your images
    '/image7.png',
    '/image8.png',
    // Add more image URLs as needed
  ];

  return (
    <React.Fragment>
      <Navbar />
      <RotatingBanner images={bannerImages} /> {/* Pass the banner images as a prop */}
      <Search />
      {/* <DateFilter /> */}
      <Footer />
      <ScrollToTopButton />
    </React.Fragment>
  );
}

export default App;
