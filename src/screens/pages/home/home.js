import React, { Component } from 'react';
import fire from '../../../config/fire';
import Quiz from '../quiz/quiz';
import Button from '@material-ui/core/Button';
import QuizList from '../quizlist/quizlist';
// import Button from '@material-ui/core/Button';
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
        choosenQuiz: '',
        // quizlist : {
        //     question:'How do you write an inline style specifying the font-size:12px and color:red; in JSX',
        //     option1:"style={{font-size:12,color:'red'}}",
        //     option2:"style={{fontSize:'12px',color:'red'}}",
        //     option3:"style={fontSize:'12px',color:'red'}",
        //     option4:"style={{font-size:12px,color:'red'}}",
        //     answer:"style={{fontSize:'12px',color:'red'}}"
        //          },
    }
    this.quizTitle = this.quizTitle.bind(this)

}
Mcq(){
    fire.database().ref('quizlist/ReactJs/').push(this.state.quizlist);

}
quizTitle(e) {
    this.setState({choosenQuiz: e})        
}
  render() {
      const {choosenQuiz} = this.state;
    //   console.log(choosenQuiz)

    return (
        <div>
            {choosenQuiz === '' ? <QuizList quizTitle = {this.quizTitle}/> : <Quiz choosenQuiz = {choosenQuiz}/>}
            {/* <Button variant="contained" size="medium" color="default" onClick={()=> this.Mcq()}>
                        Next
            </Button> */}
        </div>
  );
}
}
export default Home;
