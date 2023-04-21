import React from 'react';
import About from './About';

function App() {
  const bio = 'I made this!';

  return (
    <div>
      <h1>About Me</h1>
      <About bio={bio} />
    </div>
  );
}

export default App;

