import { Box, Button, Container, Grid, Typography } from '@mui/material';
import './App.css';
import Navbar from 'components/navbar'
import Landing from 'views/landing'
import Text from 'components/commonTypography'
import LineBreak from 'components/lineBreak'
import CommonButton from 'components/commonButton'
import About from 'views/about'
function App() {
  return (
    <Box>
      <Navbar />
      <Landing />
      <About/>
    </Box>
  );
}

export default App;
