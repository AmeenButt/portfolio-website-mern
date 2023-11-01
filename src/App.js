import { Box } from '@mui/material';
import './App.css';
import Navbar from 'components/navbar'
import Landing from 'views/landing'
import About from 'views/about'
import Services from 'views/services'
import Experience from 'views/experience'
function App() {
  return (
    <Box>
      <Navbar />
      <Landing />
      <About/>
      <Services/>
      <Experience/>
    </Box>
  );
}

export default App;
