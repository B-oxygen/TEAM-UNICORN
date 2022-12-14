
import styles from './app.module.css';
import Main from './components/main/main';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Maker from './components/maker/maker';

function App({authService}) {
  return  (
  <div className={styles.app}>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main authService = {authService} />} />
          <Route path="/maker" element={<Maker />} />
        </Routes>
    </BrowserRouter> 
  </div>)
}

export default App;
