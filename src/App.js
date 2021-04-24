import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import GreyBar from "./components/GreyBar";
import EditorWrapper from "./components/EditorWrapper"

function App() {
  return (
    <>
      <GreyBar />
      <EditorWrapper>
          <CharacterEditor />
          <Footer />
      </EditorWrapper>
    </>
  );
}

export default App;
