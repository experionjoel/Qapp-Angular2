import { Routes, RouterModule } from "@angular/router";
import { QuestionsComponent } from './questions/questions.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { QUEST_ROUTES } from './questions/questions.routes'

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/questions', pathMatch: 'full' },    
    { path: 'questions', component: QuestionsComponent, children: QUEST_ROUTES },
    { path: 'ask-question', component: AskQuestionComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);