// import React, { Component } from 'react';
// import fire from '../../../config/fire';
// import '../../../App.css';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

// class Home extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//         quizlist : {
//             question: 'title',
//             option1: 1,
//             option2: 2,
//             option3: 3,
//             option4: 4,
//             answer: 2
//         },
//         // quizdes : {
//         //     q: '',
//         //     o1: '',
//         //     o2: '',
//         //     o3: '',
//         //     o4: '',
//         //     a: '',
//         // }
//         qarr: [] 
//         }
//         this.quiz = this.quiz.bind(this)
//     }
//     quiz() {
//         // fire.database().ref('quizlist/HTML/').push(this.state.quizlist);
//         fire.database().ref('quizlist/').on('child_added', shot => {
            
//             const obj = {
//                     q: shot.val().question,
//                     o1: shot.val().option1,
//                     o2: shot.val().option2,
//                     o3: shot.val().option3,
//                     o4: shot.val().option4,
//                     a: shot.val().answer,
//             }
//             const x = this.state.qarr;
//             x.push({obj})
//             this.setState({qarr: x})
//             console.log(this.state.qarr)

//         })
//     }
//   render() {
//         const {qarr} = this.state;
//     return (
//       <div>
//           <Button type="submit" onClick={this.quiz} variant="contained" size="medium" color="primary">
//                                     Sign In
//           </Button>
//           {
//               qarr.map((v, i)=>{

//               })
//           }
//     </div>
//   );
// }
// }
// export default Home;
