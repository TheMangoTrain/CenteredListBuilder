import React from 'react';
import './assets/App.css';
import Header from './components/Header';
import ListStyler from './components/ListStyler';
import ListOutput from './components/ListOutput';
import Footer from './components/Footer';

// Making use of Redux's React Hooks
import { useDispatch, useSelector } from "react-redux";


// App is structred as a functional component (as opposed to a class), which enables use of React Hooks
const App = () => {

  // Associate variables with Redux store variables
  const listOutput = useSelector(state => state.listOutput);

  // Initiate Redux dispatch, in order to pass data back into store
  const dispatch = useDispatch();

  function changeList(e) {
    // Pass data into a particular store reducer action
    dispatch({ type: 'OUTPUT_LIST', payload: e })   
  }



  return (
    <div className="App">
      <header className="App-header">
        <Header Title="Centered-list Styler" />
      </header>

      <main>

        <div id="appInput">
          <h2>1</h2>
          <div>
            <div className="title">Paste or type your list here</div>
            <textarea placeholder="Item 1&#13;&#10;Item 2&#10;Item 3&#10;Item 4&#10;Item 5" wrap="off" onChange={e => changeList(e.target.value)} />
          </div>

          <div className="list"><ListOutput List={listOutput} /></div>
        </div>

        <div id="appStyler">
          <h2>2</h2>
          <div>
            <div className="title">Choose styles</div>
            <ListStyler />        
          </div>
          <div>

          </div>
        </div>


        <div id="appResult">
          <h2>3</h2>
          <div>
            <div className="title">Copy result</div>
            <ListOutput List={listOutput} Code="true" />
          </div>
          <div className="list">
            <ListOutput List={listOutput} />
          </div>
        </div>


      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
