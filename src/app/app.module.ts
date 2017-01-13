import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocalStorageModule } from 'angular-2-local-storage';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionStartComponent } from './questions/question-start.component';
import { QuestionDetailComponent } from './questions/question-detail/question-detail.component';
import { QuestionItemComponent } from './questions/question-list/question-item.component';
import { HeaderComponent } from './header.component';
import { QuestionService } from './services/question.service';

import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    AskQuestionComponent,
    QuestionListComponent,
    QuestionStartComponent,
    QuestionDetailComponent,
    QuestionItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    LocalStorageModule.withConfig({
    prefix: 'app-root',
    storageType: 'localStorage'
    })
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
