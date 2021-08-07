import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question';
import { TestpaperService } from 'src/app/services/testpaper.service';

@Component({
  selector: 'app-singlequestion',
  templateUrl: './singlequestion.component.html',
  styleUrls: ['./singlequestion.component.css']
})
export class SinglequestionComponent implements OnInit {
  constructor(
    private testpaperservice:TestpaperService
  ) { }
  @Input('question') question !: Question;
  checked:number = -1;
  key:string = Math.random()+"";
  ngOnInit(): void {}
  onOptionSelect(evt:number){
    let data:any;
    if(evt === this.question.answer){
      data = this.testpaperservice.addToAnswer(this.question,true);
    }else{
      data = this.testpaperservice.addToAnswer(this.question,false);
    }
  }
}
