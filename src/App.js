import { Fragment } from 'react';
import Header from './components/Header';
import SectionA from './components/SectionA';
import SectionB from './components/SectionB';
import SectionC from './components/SectionC';

function App() {
  return (
    <Fragment>
      <Header />
      <SectionA />
      <SectionB />
      <SectionC />
    </Fragment>
  );
}

export default App;
