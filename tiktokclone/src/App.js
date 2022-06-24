import './App.css';
import Video from './Video';


function App() {
  return (
    //BEM 
    <div className="app">
      <center>
        <div className="app__videos"> 
          <Video/>
          <Video/>
          <Video/>
          <Video/>
        </div>
      </center>
      
    </div>
  );
}

export default App;
