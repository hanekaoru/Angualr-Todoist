import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent implements OnInit {

  public list: any = []
  public value: String = ''

  constructor(private storage: StorageService) { }

  // 新增待办项
  addList(e) {

    // 利用对象存储，方便记录状态
    let obj = {
      value: this.value,
      status: 1
    }
    
    // 先去获取数据
    let todolist = this.storage.getItem('todolist')

    // 回车触发事件
    if (e.keyCode === 13 && obj.value !== '') {
      if (todolist) {
        todolist.push(obj)
        this.storage.setItem('todolist', todolist)
      } else {
        let arr = []
        arr.push(obj)
        this.storage.setItem('todolist', arr)
      }

      this.list.push(obj)
      this.value = ''
    }
  }

  // 删除待办项
  delList(index) {
    this.list.splice(index, 1)
    this.storage.removeItem('todolist')
    this.storage.setItem('todolist', this.list)
  }

  // 改变待办项状态
  changeStatus(index, status) {
    this.list[index].status = status
    this.storage.setItem('todolist', this.list)
  }

  // 初始化
  ngOnInit() {
    this.list = this.storage.getItem('todolist') ? this.storage.getItem('todolist') : []
  }

}