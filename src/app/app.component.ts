import { Component, OnInit } from '@angular/core';
import { Itodo } from './table/models/table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ourTableApp';
  todoArr:Array<Itodo>=[]

  Todo_URL=`https://jsonplaceholder.typicode.com/todos`

  constructor(
    private _httpClient : HttpClient
  ){}

  ngOnInit(): void {
    this._httpClient.get<Array<Itodo>>(this.Todo_URL)
    .subscribe((res:Array<Itodo>)=>{
      console.log(res);
      this.todoArr=res
    })
  }

}
