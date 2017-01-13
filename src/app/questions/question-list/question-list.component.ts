import { Component, OnInit } from '@angular/core';
import { Question } from '../../shared/question';
import { QuestionItemComponent } from './question-item.component';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html'
})
export class QuestionListComponent implements OnInit {

  questions: Question[] = [];

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questions = this.questionService.loadQuestions();
  }

}
