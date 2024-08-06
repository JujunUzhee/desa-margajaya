import React from 'react';

import "../index.css";

function App({ children }) {
  return (
    <>
      <main className='bg-white'>
        {children}
      </main>

    </>
  );
}

export default App;
