import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../shared/question';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html'
})
export class QuestionItemComponent implements OnInit {

  @Input() question: Question;
  @Input() questionId: number;
  private answerCount: number;
  private showCount = false;

  constructor(private questionService: QuestionService) { 
  }

  ngOnInit() {

  }

}
