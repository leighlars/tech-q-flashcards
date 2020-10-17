import React, {useState} from 'react';
import './App.scss'
import {Header} from '../Header/Header'
import {questions} from '../data/questions'
import {Main} from '../Main/Main'
import {Form} from '../Form/Form'


const App: React.FC = props => {
  const [techQuestions, setAllQuestions] = useState(questions)
  const [endQuestions, setEndQuestions] = useState<Array<string>>([])
  const [user, setUser] = useState({name: '', questions: ['']})

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
  
  const addUser = (name:string) => {
    setUser({name, questions: []})
  }

  const addUserQuestion = (question: string) => {
    const userQuestions = [...user.questions, question]
    setUser({...user, questions: userQuestions })
    if (user.questions.length > 4) {
      setUser({name: '', questions: []})
    }
  }

  return (
    <div className="App">
      <Header organizeQuestions={organizeQuestions}/>
      {user.name === '' && <Form addUser={addUser}/>}
      <Main endQuestions={endQuestions} user={user} addUserQuestion={addUserQuestion}/>
    </div>
  );
}

export default App;
