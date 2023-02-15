
import './App.css';
import Choices from './components/Choices';
import NextQuestionButton from './components/NextQuestionButton';
import Question from './components/Question';

function App() {
  return (
    <div className="App">
      <Question/>
      {/* <Choices/>
      <NextQuestionButton/> */}
    </div>
  );
}

export default App;
