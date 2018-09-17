import React, { Component } from 'react';
import fire from '../../../config/fire';
import '../../../App.css';
import Button from '@material-ui/core/Button';
class QuizList extends Component {
  constructor(props) {
    super(props)
    this.state = {
                quizlist : {
            question: 'title',
            option1: 1,
            option2: 2,
            option3: 3,
            option4: 4,
            answer: 2
        },
        qListArr: [],
        }
        this.quiz = this.quiz.bind(this)

    }
    componentDidMount() {
        this.quiz();
      }
    quiz() {
        // fire.database().ref('quizlist/React Js/').push(this.state.quizlist);
        fire.database().ref('quizlist/').on('child_added', shot => {
            const quizlist = this.state.qListArr;
            quizlist.push(shot.key)
            this.setState({qListArr: quizlist})
        })
    }
   
  render() {
        const {qListArr} = this.state;
        const {quizTitle} = this.props;
        // console.log(this.state.choosenQuiz)

    return (
      <div className="quizListCont">
          <h1>Quiz List</h1>
          {
              qListArr.map((v, i)=>{
                return <div key={v} className="quizList">
                    <li >
                         {v} 
                    </li>
                    <Button variant="contained" key={v} onClick={()=> quizTitle(v)} size="small" color="secondary" className="quizListBtn">
                         Start Test
                    </Button>
                </div>
            })
          }
    </div>
  );
}
}
export default QuizList;
