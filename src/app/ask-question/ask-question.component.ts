import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionService } from '../services/question.service'; 
import { Question } from '../shared/question';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html'
})

export class AskQuestionComponent implements OnInit {

  constructor(private questionService: QuestionService) { }

  clearDescript:any;
  clearQs:any;
  questionItem: Question;
  @Output() cleared = new EventEmitter();
  ngOnInit() {
  }

//Function to save the question to local storage using the questionService.  
  onSubmit(value: any) {
    console.log(value.qtitle);
    this.questionItem = new Question(value.qtitle, value.description, []);
    console.log(this.questionItem);
    this.questionService.storeQuestion(this.questionItem);
    this.onClear();
    
  }
//Function to clear the fields.
  onClear() {
    this.clearDescript = null;
    this.clearQs = null;
    this.cleared.emit(null);
  }

}
