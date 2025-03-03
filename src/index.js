import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Import Bootstrap CSS & JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Import Font Awesome (optional, in case you use icons in JSX)
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import Global Styles
import "./styles/variables.css"; // Adjust based on your folder structure
import "./styles/navbar.css";
import "./styles/footer.css";
import "./styles/responsive.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
