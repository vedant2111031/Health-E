import './App.css'
import Layout from './layout/Layout'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (<>
  <Layout/>
  <ToastContainer />
  </>
  )
}

export default App
