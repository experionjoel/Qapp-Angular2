import { Routes } from "@angular/router"
import { QuestionStartComponent } from "./question-start.component"
import { QuestionDetailComponent } from "./question-detail/question-detail.component"

export const QUEST_ROUTES: Routes = [
    { path: '', component: QuestionStartComponent },
    { path: ':id', component: QuestionDetailComponent }
]; 