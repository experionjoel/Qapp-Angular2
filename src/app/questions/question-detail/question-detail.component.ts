import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { NgForm } from '@angular/forms';

import { QuestionService } from '../../services/question.service';
import { Question } from '../../shared/question';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html'
})

export class QuestionDetailComponent implements OnInit, OnChanges {

  private subscription: Subscription;
  private questionIndex: number;
  selectedQuestion: Question;
  clearDescript:any;
  private answerTextBoxFlag = false;
  private answerButtonHide = false;
  private answerVisibility = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService
  ) { }

// This function monitors the change in the route and hence notifies 
// the component question-detail
  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.questionIndex = params['id'];
        this.selectedQuestion = this.questionService.getQuestion(this.questionIndex);
		console.log("select",this.selectedQuestion.answers.length);
        if(this.selectedQuestion.answers.length > 0) {
          this.answerVisibility = true;
		  console.log("inside",this.answerVisibility);
        }
        this.answerTextBoxFlag = false;
        this.answerButtonHide = false;
        // this.answerVisibility = false;
      }
    )
  }

  ngOnChanges(changes) {

  }

// This function manages the visibility of the answer textarea and 
// the 'Answer Now' button.
  setInputVisible() {
    this.answerTextBoxFlag = true;
    this.answerButtonHide = true;
  }

// This function saves the answer entered. It is triggered on the click
// of the POST button. It also clears the fields.
  onSubmit(reply: any) {
    console.log(reply.answer);
    this.questionService.storeAnswer(this.questionIndex, reply.answer);
    this.clearDescript = null;
  }

// This method is used to unsubscribe from the presently selected route
	ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
