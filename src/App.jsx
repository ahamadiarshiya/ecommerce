import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage.jsx';
import ProductList from './components/ProductList.jsx';
import ProductDetailsPage from './components/ProductDetailsPage.jsx';
import Layout from './components/Layout.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Login page WITHOUT header/footer */}
        <Route path="/login" element={<LoginPage />} />

        {/* All other pages WITH header/footer */}
        <Route element={<Layout />}>
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
