import { Injectable } from '@angular/core';
import { CorrectQuestion } from '../model/correctQuestions';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class TestpaperService {

  constructor() { }
  questions:Question[] = [];
  correctAnswers:CorrectQuestion[] = [];

  setQuestions(questions:Question[]){
    this.questions = questions;
    this.questions.forEach(data=>{ 
      if(!this.checkIfAlreadyAvailable(data)){
        this.correctAnswers.push({...data,isCorrect:false,isAnswered:false})
      }
    });
  }

  getTotalcorrectAndNumber(){
    let totalNumber:number = 0;
    let totalCorrect:number = 0;
    this.correctAnswers.forEach(data=>{
      if(data.isCorrect) totalCorrect++;
      totalNumber++;
    });
    return {totalCorrect,totalNumber};
  }

  checkIfAlreadyAvailable(check:Question){
    let flag = false;
    this.correctAnswers.forEach(data=>{
      if(data.id === check.id){
        flag = true;
      }
    });
    return flag;
  }

  clearAllQuestions(){
    this.correctAnswers = [];
    this.questions = [];
  }

  addToAnswer(question:Question,isCorrect:boolean){
    
    let temp:CorrectQuestion[] = this.correctAnswers.map(data=>{
      if(data.id === question.id){
        return {...question,isCorrect,isAnswered:true};
      }
      return data;
    })
    
    this.correctAnswers = temp;

    return (this.correctAnswers);
  }

  getAllAnswers(){
    return this.correctAnswers;

  }

}
