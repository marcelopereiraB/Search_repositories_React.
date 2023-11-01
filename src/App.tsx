import { Box } from '@mui/material';
import { Home } from './app/application/pages/Home';
import { GlobalStyles } from './app/styles/globalStyles';
import { Footer } from './app/application/layout/Footer';
import { Header } from './app/application/layout/header';

function App() {
  return (
    <Box>
      <GlobalStyles />
      <Header />
      <Home />
      <Footer />
    </Box>
  );
}

export default App;
