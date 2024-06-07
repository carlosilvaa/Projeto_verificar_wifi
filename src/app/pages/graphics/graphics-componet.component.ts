import { Data } from '@angular/router';
import { DataService } from './../../_services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafics-componet',
  templateUrl: './graphics-componet.component.html',
  styleUrl: './graphics-componet.component.css'
})
export class GraficsComponetComponent implements OnInit {

  public dataSource: Data[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataSource = this.dataService.getData();
  }

}
