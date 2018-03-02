import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  // 设置
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  // 获取
  getItem(key) {
    return JSON.parse(localStorage.getItem(key))
  }

  // 删除
  removeItem(key) {
    localStorage.removeItem(key)
  }

}
