import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subjects } from '../model/subjects';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  
  constructor(private httpClient:HttpClient) { }



  getSubjects(){
    let response : Subjects[]=[];
    return this.httpClient.get<{[key:string]:Subjects}>("assets/data.json").
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
      
      console.log(data)
      return data;
    }
    );
   
  }
}
