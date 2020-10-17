import React, {useEffect, useState} from 'react';
import './App.scss'
import {Header} from '../Header/Header'
import {questions} from '../data/questions'
import {Main} from '../Main/Main'

const App: React.FC = () => {
  const [techQuestions, setAllQuestions] = useState({be: [''], fe: ['']})
  const [endQuestions, setEndQuestions] = useState([''])

  useEffect(() => {
    setAllQuestions(questions)
  }, [])

  const shuffleQuestions = (questions: array) => {
    for (var i = questions.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = questions[i];
        questions[i] = questions[j];
        questions[j] = temp;
    }
  }

  const organizeQuestions = (type:string) => {
    if (type === 'all') { 
      const allQs = techQuestions.be.concat(techQuestions.fe)
       for (var i = allQs.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = allQs[i];
        allQs[i] = allQs[j];
        allQs[j] = temp;
    }
      setEndQuestions(allQs)
    } else {
      const endQuestions = techQuestions[type]
      shuffleQuestions(endQuestions)
      setEndQuestions(endQuestions)
    }
  }

  

  return (
    <div className="App">
      <Header organizeQuestions={organizeQuestions}
      />
        {/* <Main endQuestions={endQuestions} /> */}
    </div>
  );
}

export default App;
