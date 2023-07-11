import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  title = 'test';
  todoListForm!: FormGroup;
  isAdd: boolean = true;
  todoList = [
    { "task": "HTML I", "done": "true" },
    { "task": "CSS", "done": "true" },
    { "task": "Responsive design", "done": "true" },
    { "task": "Git", "done": "true" },
    { "task": "JavaScript I", "done": "true" },
    { "task": "JavaScript II", "done": "false" }
  ];
  constructor() {

  }
  ngOnInit() {
    this.todoListForm = new FormGroup({
      id: new FormControl(""),
      task: new FormControl("", [Validators.required]),
      done: new FormControl("", [Validators.required]),
    })

    this.todoListForm.patchValue({
      done: 'false'
    })
  }
  addTask() {
    let todoList = {
      task: this.todoListForm.value.task,
      done: this.todoListForm.value.done
    }
    this.todoList.push(todoList);
  }

  updateTask() {
    this.isAdd = false;
    let todoList = {
      task: this.todoListForm.value.task,
      done: this.todoListForm.value.done
    }
    this.todoList.splice(this.todoListForm.value.id, 1, todoList);
  }

  delete(id: any) {
    this.todoList.splice(id, 1);;
  }

  reset() {
    this.todoListForm.reset();
    this.todoListForm.patchValue({
      done: ''
    })
  }
  openModal(){
    this.todoListForm.reset();
    this.todoListForm.patchValue({
      done: 'false'
    })
    this.isAdd =true;
  }

  update(id: any) {
    this.isAdd = false;
    this.todoListForm.patchValue({
      task: this.todoList[id].task,
      done: this.todoList[id].done,
      id: id,
    })
  }

}
