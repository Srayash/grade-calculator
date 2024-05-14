import Navbar from './Navbar';
import AddSgpaRow from './addSgpa';
import ReactGA from "react-ga";

import ReactGA from 'react-ga';
ReactGA.initialize('G-K795Y58GZB');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (

    <div className="App">
      <Navbar />
      <AddSgpaRow />
    </div>
    
  );
}

export default App;
