import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage.jsx';
import HomePage from './components/HomePage.jsx';
import ProductDetailsPage from './components/ProductDetailsPage.jsx';
import Layout from './components/Layout.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* Wrap these pages with Layout */}
        <Route element={<Layout />}>
          <Route path="/products" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
