import { Analytics } from '@vercel/analytics/react';
import Navbar from './Navbar';
import AddSgpaRow from './addSgpa';

function App() {
  return (

    <div className="App">
      <Navbar />
      <AddSgpaRow />
      <Analytics />
    </div>
    
  );
}

export default App;
