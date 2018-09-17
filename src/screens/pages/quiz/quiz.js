import React, { Component } from 'react';
import fire from '../../../config/fire';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
        choosenQuiz: '',
        qarr: [],
        value: '',
        correctAnswer: 1,
        l : 0 ,
        nextBtnText: 'Next',
        result: ''
      }        
      this.testChoises = this.testChoises.bind(this)
    }
    testChoises(){
      fire.database().ref(`quizlist/${this.props.choosenQuiz}/`).on('child_added', (shot)=>{
        // console.log(shot.val())
        const obj = {
                q: shot.val().question,
                o1: shot.val().option1,
                o2: shot.val().option2,
                o3: shot.val().option3,
                o4: shot.val().option4,
                a: shot.val().answer,
        }
                      const x = this.state.qarr;
                      x.push(obj)
                      this.setState({qarr: x})
                      // console.log(this.state.qarr)
      })
    }
    componentDidMount(){
      this.testChoises()
    }
    handleChange = event => {
      this.setState({ value: event.target.value });
    };
    next(e, i){
      let {value, correctAnswer,l,qarr,nextBtnText} = this.state;
      // let l = 0;
      if(value !== ''){
      if(e === value) {
        this.setState({correctAnswer: correctAnswer + 1})       
      }
      this.setState({l: l + 1})
      if(l + 1 === qarr.length -1) {
        this.setState({nextBtnText: "Submit"})
      }
    }
    else {
      alert('select an awnser ')
    }
      if(nextBtnText === 'Submit') {
              this.setState({result: correctAnswer})
      }
    }

    x(){
      let {qarr , value, l,nextBtnText} = this.state;
      
      return qarr.map((v, i)=>{
        if(i === l){ 
        return <div className="box" key={i}>
         <h3>Question No : {(i+1)} </h3>
         <h4> {v.q}</h4>
         <FormControl component="fieldset">
         <RadioGroup
          aria-label="Answer"
          name="Answer"
          value={this.state.value}
          onChange={this.handleChange}
        >
        <FormControlLabel value={v.o1} control={<Radio />} label={v.o1} />
        <FormControlLabel value={v.o2} control={<Radio />} label={v.o2} />
        <FormControlLabel value={v.o3} control={<Radio />} label={v.o3} />
        <FormControlLabel value={v.o4} control={<Radio />} label={v.o4} />
        </RadioGroup>
        <br/>
        <br/>
        <div  className="nextBtn">
          <Button variant="contained" size="medium" color="default" onClick={()=>this.next(v.a,i)}>
                {nextBtnText}
          </Button>
        </div>
        </FormControl>
        
        </div>
        }
      })
    }
    result(){
      return <h1> your score is {this.state.result} out of {this.state.qarr.length}</h1>
    }
    
  render() {
    const {result} = this.state;
    return (
        <div className="App">
        {result ? this.result() : this.x()}
        </div>
    );
  }
}

export default Quiz;
