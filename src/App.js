import { Box } from '@mui/material';
import './App.css';
import Navbar from 'components/navbar'
import Landing from 'views/landing'
import About from 'views/about'
import Services from 'views/services'
import Experience from 'views/experience'
import Portfolio from 'views/portfolio'
import StayInTouch from 'views/stayInTouch'
import Footer from 'components/footer'
function App() {
  return (
    <Box>
      <Navbar />
      <Landing />
      <About/>
      <Services/>
      <Experience/>
      <Portfolio />
      <StayInTouch/>
      <Footer/>
    </Box>
  );
}

export default App;
