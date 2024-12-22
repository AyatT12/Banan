

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import 'wowjs/css/libs/animate.css';
import './i18n'
import Loader from './components/Loader';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import 'swiper/css/effect-coverflow';
import 'bootstrap-icons/font/bootstrap-icons.css';

const AppWithLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  
  return loading ? <Loader /> : <App />;

};
 const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AppWithLoader />);
export default AppWithLoader;