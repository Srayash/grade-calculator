import Navbar from './Navbar';
import AddSgpaRow from './addSgpa';
import ReactGA from "react-ga";

const MEASUREMENT_ID = "G-K795Y58GZB";
ReactGA.initialize(MEASUREMENT_ID);

function App() {
  return (

    <div className="App">
      <Navbar />
      <AddSgpaRow />
    </div>
    
  );
}

export default App;
