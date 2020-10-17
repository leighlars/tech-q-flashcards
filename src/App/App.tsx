import React, {useState} from 'react';
import './App.scss'
import {Header} from '../Header/Header'
import {questions} from '../data/questions'
import {Main} from '../Main/Main'

const App: React.FC = () => {
  const [techQuestions, setAllQuestions] = useState(questions)
  const [endQuestions, setEndQuestions] = useState<Array<string>>([])


  const shuffleQuestions = (questions: Array<string>) => {
    for (var i = questions.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = questions[i]
        questions[i] = questions[j]
        questions[j] = temp
    }
    return questions
  }

  const organizeQuestions = (type:string) => {
    const allQs = [...techQuestions.be, ...techQuestions.fe]
    // @ts-ignore
    const typeQuestions = techQuestions[type]
    const shuffledQuestions = type === 'all' ? shuffleQuestions(allQs) : shuffleQuestions(typeQuestions)
    setEndQuestions(shuffledQuestions)
  }
  

  return (
    <div className="App">
      <Header organizeQuestions={organizeQuestions}/>
      <Main endQuestions={endQuestions} />
    </div>
  );
}

export default App;
