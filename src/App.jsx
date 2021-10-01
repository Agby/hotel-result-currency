import React, { Suspense } from 'react';
import HotelListPage from './pages/HotelListPage';

function App() {
  return (
    <Suspense fallback={<>loading</>}>
      <div className="App">
        <header className="App-header">
          <HotelListPage />
        </header>
      </div>
    </Suspense>
  );
}

export default App;
