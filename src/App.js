import { Fragment } from 'react';
import Header from './components/Header';
import SectionA from './components/SectionA';
import SectionB from './components/SectionB';
import SectionC from './components/SectionC';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <SectionA />
      <SectionB />
      <SectionC />
      <Footer />
    </Fragment>
  );
}

export default App;
