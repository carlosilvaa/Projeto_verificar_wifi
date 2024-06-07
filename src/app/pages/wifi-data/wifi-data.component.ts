import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../../_models/data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../_services/data.service';
declare var $: any;
@Component({
  selector: 'app-wifi-data',
  templateUrl: './wifi-data.component.html',
  styleUrl: './wifi-data.component.css'
})
export class WifiDataComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({})
  data: Data[] = [];

  constructor(private fb: FormBuilder, private dataService: DataService) { }

  formReset(){
    this.dataForm.reset();
  }
  ngOnInit(): void {
    this.iniciarForm();
    this.loadData();
  }
  loadData() {
    this.data = this.dataService.getData(); // Carrega local storage
  }

  submitForm() {
    if (this.dataForm.valid) {
      const newData = this.dataForm.value;
      this.dataService.addItem(newData); // adiciona no local storage
      this.formReset();
      this.data = this.dataService.getData(); // Atualiza do local storage
    }
  }

  iniciarForm() {
    this.dataForm = this.fb.group({
      local: ['', [Validators.required, Validators.maxLength(250)]],
      dbm24: ['', Validators.required],
      dbm50: ['', Validators.required],
      mb24: ['', Validators.required],
      mb50: ['', Validators.required],
      interferencia: ['', Validators.required],
    })
  }

  // Edição do formulário
  editedItem: any = null

  editItem(item: any) {
    this.editedItem = item; // Armazena o item em edição
    this.dataForm.patchValue({
      local: item.local,
      dbm24: item.dbm24,
      dbm50: item.dbm50,
      mb24: item.mb24,
      mb50: item.mb50,
      interferencia: item.interferencia
    });
  }
  
  editForm() {
    if (this.dataForm.valid && this.editedItem !== null) {
      // Atualiza os valores do item em edição com os valores do formulário
      Object.assign(this.editedItem, this.dataForm.value);
      this.dataForm.reset(); // Limpa o formulário
      this.editedItem = null; // Limpa o item em edição
    }
    this.dataService.setData(this.data)
  }

  // Fim Edição do formulário

  // Exclusão do comodo

  deleteItem(item: Data) {
    const index = this.data.indexOf(item);
    if (index !== -1) {
      this.dataService.deleteItem(index); // Excluir do local storage
      this.data = this.dataService.getData(); // atualiza local storage
    }
  }
  
  // Fim Exclusão do comodo
}
