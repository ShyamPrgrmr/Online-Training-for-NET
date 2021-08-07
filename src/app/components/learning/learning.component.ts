import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subjects } from './../../model/subjects';
import {map} from 'rxjs/operators';
import { SubjectsService } from 'src/app/services/subjects.service';


@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {

  constructor(private learningService:SubjectsService,private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getSubjects();
  }

  subjects:Subjects[] = [];
  paper:string = "1";
  isSelect:boolean = false;
  showLoading=false;

  getSubjects(){
    this.httpClient.get<{[key:string]:Subjects}>("assets/data.json").
    pipe(
      map(  (responseData:{[key:string]:Subjects}) =>{
        const subjects = [];
        let id = 0;
        for(const key in responseData){
          id++;
          subjects.push({...responseData[key], id })
        }
        return subjects;
      }
    ))
    .subscribe(
     data=>{
        this.subjects = data;
      }
    );
  }

  onPaperChange(option:any){
    this.isSelect = false;
    this.paper = option.target.value;
    this.showLoading = true;
    setTimeout(()=>{
      this.showLoading = false;
      this.isSelect = true;
    },1000);
  }

}
