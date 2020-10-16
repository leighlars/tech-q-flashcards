import React, {useEffect, useState} from 'react';
import './App.scss'
import {Header} from '../Header/Header'
import {questions} from '../questions'
import {Question} from '../Question/Question'

function App() {
  const [techQuestions, setTechQuestions] = useState({be: [''], fe: ['']})

  useEffect(() => {
    setTechQuestions(questions)
  })

  // const organizeQuestions = (type: string) => {
  //   const questionType = techQuestions[type]
  // }

  return (
    <div className="App">
      <Header/>


    </div>
  );
}

export default App;
