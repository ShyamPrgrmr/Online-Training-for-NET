import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor() { }

  @Input('data')
  questionData !: Question;

  answer:string = "";
  isShowAnswer:boolean = false;

  ngOnInit(): void {
    this.answer = this.questionData.options[this.questionData.answer-1];
  }

  btnShowClick=()=>{
    this.isShowAnswer = !this.isShowAnswer;
  }
}
