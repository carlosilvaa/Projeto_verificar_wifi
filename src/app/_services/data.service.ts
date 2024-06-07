import { Injectable } from '@angular/core';
import { Data } from '../_models/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private localStorageKey = 'data';
  data: Data[] = [];

  constructor() { 
    // recupera dados do local storage
    const localStorageData = localStorage.getItem(this.localStorageKey);
    if (localStorageData) {
      this.data = JSON.parse(localStorageData);
    }
  }

  private saveDataToLocalStorage() {
    // Salva os dados no localStorage
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.data));
  }

  setData(data: Data[]){
    this.data = data;
    this.saveDataToLocalStorage(); // Salva os dados no localStorage após alterações
  }

  getData(){
    return this.data;
  }

  addItem(item: Data) {
    this.data.push(item);
    this.saveDataToLocalStorage(); // Salva os dados no localStorage após adicionar um item
  }

  editItem(index: number, newItem: Data) {
    if (index >= 0 && index < this.data.length) {
      this.data[index] = newItem;
      this.saveDataToLocalStorage(); // Salva os dados no localStorage após editar um item
    }
  }

  deleteItem(index: number) {
    if (index >= 0 && index < this.data.length) {
      this.data.splice(index, 1);
      this.saveDataToLocalStorage(); // Salva os dados no localStorage após excluir um item
    }
  }
}
