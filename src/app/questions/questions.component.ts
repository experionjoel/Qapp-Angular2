import { Component, OnInit } from '@angular/core';
import { QuestionDetailComponent } from './question-detail/question-detail.component'
import { QuestionListComponent } from './question-list/question-list.component'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html'
})

// This component is the parent component of the question-list
// and question-detail child components.
export class QuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
