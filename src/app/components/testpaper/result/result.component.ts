import { Component, Input, OnInit } from '@angular/core';
import { CorrectQuestion } from 'src/app/model/correctQuestions';
import { TestpaperService } from 'src/app/services/testpaper.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  constructor(
    private service:TestpaperService
  ) { }
  @Input('result') results:CorrectQuestion[] = []; 
  isAnsweredAllQuestions:boolean = true;
  totalNumber:number = 0;
  totalCorrect:number = 0;

  ngOnInit(): void {
    this.checkIfAnsweredAll();
    let temp:{totalCorrect:number,totalNumber:number} = this.service.getTotalcorrectAndNumber();
    this.totalCorrect = temp.totalCorrect;
    this.totalNumber = temp.totalNumber;
  }

  checkIfAnsweredAll(){
    this.results.forEach(data=>{
      if(!data.isAnswered) this.isAnsweredAllQuestions = false;
    });

  }
}
