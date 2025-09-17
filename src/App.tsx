
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { AboutPage, LoginPage } from './pages';

function App()
{

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
