import {Component, OnInit} from '@angular/core';

class List {
  todo: String;
  done: boolean;

  constructor() {
    this.done = false;
  }
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})


export class TodoComponent implements OnInit {

  list = new List();
  todoList: List[] = [];
  btnDisabled: boolean = true;

  constructor() {}

  ngOnInit() {}

  addTodo() {

    this.todoList.push(this.list);
    this.list = new List();
    console.log(this.todoList);
  }

  checkDone() {
    this.list.done = !this.list.done;

    if (!this.btnDisabled) {
      this.btnDisabled = true
    }

    //btnDisabled passera à false uniquement si au moins un attribut done est à true
    for (let todo of this.todoList) {
      if (todo.done) {
        this.btnDisabled = false;
      }
    }

  }

  deleteOne(todo: String) {

    let taille = this.todoList.length;

    for (let i = 0; i < taille; i++) {

      if (this.todoList[i].todo == todo) {
        this.todoList.splice(i, 1);
        break
      }
    }
  }

  deleteAll() {

    let taille = this.todoList.length;

    for (let i = 0; i < taille; i++) {

      if (this.todoList[i].done === true) {
        this.todoList.splice(i, 1);
        taille = this.todoList.length;
        i = -1;
      }
    }
  }

}
