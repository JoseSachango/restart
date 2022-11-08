import React from 'react';
import { useRoutes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import RTL from './layouts/full-layout/customizer/RTL';
import ThemeSettings from './layouts/full-layout/customizer/ThemeSettings';
import Router from './routes/Router';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useAuth0 } from '@auth0/auth0-react';
import { ContextProvider } from './Context';

const App = () => {
 
  const routing = useRoutes(Router);
  const theme = ThemeSettings();
  const customizer = useSelector((state) => state.CustomizerReducer);
  const {isLoading} = useAuth0()
  if(isLoading) return <div>Loading...</div>
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <RTL direction={customizer.activeDir}>
          <CssBaseline />
          {routing}
        </RTL>
      </ContextProvider>     
    </ThemeProvider>
  );
};

export default App;



































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
