import { Component, Input, OnInit } from '@angular/core';
import { CorrectQuestion } from 'src/app/model/correctQuestions';
import { Question } from 'src/app/model/question';
import { TestpaperService } from 'src/app/services/testpaper.service';

@Component({
  selector: 'app-testpaper',
  templateUrl: './testpaper.component.html',
  styleUrls: ['./testpaper.component.css']
})
export class TestpaperComponent implements OnInit {

  constructor(private testpaperservice:TestpaperService) { }
  @Input('questionarry') questions:Question[] = [];
  @Input('paperid') paperid !: string;
  @Input('subjectid') subjectid !:string;

  isCheckResult:boolean = false;
  isShowMessage:boolean = false;

  ngOnInit(): void {
    this.testpaperservice.clearAllQuestions();
    this.testpaperservice.setQuestions(this.questions);
  }

  ngAfterContentInit(){
    
  }

  getResluts():CorrectQuestion[]{
    return this.testpaperservice.getAllAnswers();
  }

  checkResult(){
    let flag:number = 0;
    this.getResluts().forEach(data=>{
      if(!data.isAnswered) {flag = 1;}
    })

    if(flag == 0){
      this.isCheckResult = true;
    }

    if(!this.isCheckResult){
      this.isShowMessage = true;
      setInterval(()=>{
        this.isShowMessage = false;
      },1500);
    }

  }

}
