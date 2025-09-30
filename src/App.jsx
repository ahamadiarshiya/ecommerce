import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage.jsx';
import HomePage from './components/HomePage.jsx';
import ProductDetailsPage from './components/ProductDetailsPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/products" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />

      </Routes>
    </Router>
  );
}

export default App;
