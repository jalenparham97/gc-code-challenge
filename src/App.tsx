import { WeatherContextProvider } from './context';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Result from './Components/Result/Result';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <WeatherContextProvider>
        <div className="content">
          <Form />
          <Result />
        </div>
      </WeatherContextProvider>
    </div>
  );
}

export default App;
