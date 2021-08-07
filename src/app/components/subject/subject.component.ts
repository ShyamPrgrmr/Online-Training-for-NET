import { Component, Input, OnInit } from '@angular/core';
import { Subjects } from 'src/app/model/subjects';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  @Input('subject')
  subject !: Subjects;
  isOpened=true;

  ngOnInit(): void {
  }

  toggle(){
    this.isOpened = !this.isOpened;
  }

}
