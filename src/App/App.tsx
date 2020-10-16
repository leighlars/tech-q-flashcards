import React, {useEffect, useState} from 'react';
import './App.scss'
// import {Route} from 'react-router-dom'
import {Header} from '../Header/Header'
import {questions} from '../questions'
import {Main} from '../Main/Main'

const App: React.FC = () => {
  const [techQuestions, setTechQuestions] = useState({be: [''], fe: ['']})
  const [endQuestions, setEndQuestions] = useState([''])

  useEffect(() => {
    setTechQuestions(questions)
  })

  const organizeQuestions = (type:string) => {
    if (type === 'all') { 
      const allQs = techQuestions.be.concat(techQuestions.fe)
      setEndQuestions(allQs)
    } else {
      const getEndQs = techQuestions[type]
      setEndQuestions(getEndQs)
    }
  }

  return (
    <div className="App">
      <Header organizeQuestions={organizeQuestions}
      />
        <Main endQuestions={endQuestions} />
    </div>
  );
}

export default App;
