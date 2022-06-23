import './App.css';
import Video from './Video';
import "./App.css";

function App() {
  return (
    //BEM 
    <div className="app">
      <h1>Hello Clever Programmers, Lets build the next web</h1>

      <div className="app__videos"> 
        <Video/>
        <Video/>
        <Video/>
        <Video/>
      </div>
    </div>
  );
}

export default App;
