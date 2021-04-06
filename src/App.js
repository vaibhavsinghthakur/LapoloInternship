import './App.css';
import Data from "./Data.js"
function App() {
  return (
    <div className="App">
      <h4>I have used the ODD and EVEN concept, I have added an ID which is a number for each object sequentially, and have used that ID to render items alternately based on even and odd. If you want to add new Items to this you can add more objects in the useState() and remember to give it a suitable ID number based on the previous object, if the previous object ID is 'even' make new object ID 'odd' or if previous object ID is 'odd' make new object ID 'even'. </h4>
      <Data/>
    </div>
  );
}

export default App;
