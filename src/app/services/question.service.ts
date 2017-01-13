import { Injectable } from '@angular/core';
import { Question } from '../shared/question';
import { LocalStorageService } from 'angular-2-local-storage';

// This service is used as the interface for data management. This service 
// has methods to store and retrieve data from local storage.

@Injectable()
export class QuestionService {
  questionSet: Question[] = [];
  questionSetString: string;

//This array holds dummy data.
  questions: Question[] = [
    new Question
    (
    'What is a star made up of ?', 
    'The star is a shining source of light. How does it get its energy?', 
    ['I don\'t know','I think so.' ]
    ),
    new Question
    (
    'What is the sun made up of ?', 
    'The sun is a shining source of light. How does it get its energy?', 
    ['I don\'t know','I think it is made up of gas.' ]
    ),
    new Question
    (
    'What is the moon made up of  ?', 
    'The moon is a shining source of light. How does it get its energy?', 
    ['It reflects its light.', 'It reflects light from the stars.' ]
    ),
    new Question
    (
    'What are galaxies made up of ?', 
    'The galaxy is a source of light. How do stars join it ?', 
    []
    )
  ];

  constructor(private localStorageService: LocalStorageService) { }

//This method is used to return the dummy array od Question.
  getQuestions() {
    return this.questions;
  }

//This method is used to return question from local storage.
  getQuestion(id: number) {
       if (localStorage.getItem("questions") === null) {
          return this.questions[id];
     } else {
          this.questionSet = JSON.parse(localStorage.getItem('questions'));
          return this.questionSet[id];
      }  
  }

//This method is used to store a question object into local storage.
  storeQuestion(questionItem: Question) {

     if (localStorage.getItem("questions") === null) {
          this.questionSet.unshift(questionItem);
          this.questionSetString = JSON.stringify(this.questionSet);
          localStorage.setItem("questions", this.questionSetString);
     } else {
          this.questionSet = JSON.parse(localStorage.getItem('questions'));
          this.questionSet.unshift(questionItem)
          localStorage.setItem('questions', JSON.stringify(this.questionSet));
      }
  }

//This method returns a question object array by fetching data from local storage.
  loadQuestions() {
       if (localStorage.getItem("questions") === null) {
          return this.questions;
     } else {
          this.questionSet = JSON.parse(localStorage.getItem('questions'));
          return this.questionSet;
      }  
  }

//This method stores answers for questions based on the question ID passed to 
//it from the calling class.
  storeAnswer(id:number, answerItem: string) {
       if (localStorage.getItem("questions") === null) {
          this.questions[id].answers.unshift(answerItem);
     } else {
          this.questionSet = JSON.parse(localStorage.getItem('questions'));
          this.questionSet[id].answers.unshift(answerItem);
          this.questionSetString = JSON.stringify(this.questionSet);
          localStorage.setItem("questions", this.questionSetString);
      } 
  }

}
