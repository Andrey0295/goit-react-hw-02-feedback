import React from 'react';

import Container from './components/Container/Container';
import MainFeedback from './components/MainFeedback/MainFeedback';

function App() {
  return (
    <>
      <Container>
        <div className="App">
          <p>Hello React</p>
        </div>
        <MainFeedback />
      </Container>
    </>
  );
}

export default App;
