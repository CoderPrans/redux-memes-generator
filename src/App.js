import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import Home from './components/Home';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1> MEME GENERATOR </h1>
        </div>
        <Home />
          <style jsx="true">{`
            h1 {
              font-weight: normal;
              font-family: 'Patrick Hand', cursive;
            }
          `}</style>
    </Provider>
  );
}

export default App;
