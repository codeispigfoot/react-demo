import React, { useEffect, useState } from 'react';
import OrderList from './components/OrderList';
import Header from './components/Header'
import TestPage from './components/TestPage';

function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (hash === '#/test') {
    return <TestPage />;
  }

  return (
    <div className="App">
      <Header/>
      <nav aria-label="页面导航" style={{ padding: '12px 16px' }}>
        <a href="#/test">测试页面</a>
      </nav>
      <OrderList/>
    </div>
  );
}

export default App;
