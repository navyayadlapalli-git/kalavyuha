import './App.css'
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { HashRouter as Router } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import SideBar from './components/SideBar'

const theme = createTheme({
  palette: {
    primary: {
      main: "#2C5B77", 
    },
    secondary: {
      main: "#dc004e",
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className='main-content'>
          <SideBar />
          <AppRoutes />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
