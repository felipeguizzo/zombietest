import { Component, OnInit } from '@angular/core';
import { Movement } from 'src/app/models/Movement';
import { MovementService } from 'src/app/services/movement.service';

@Component({
  selector: 'app-movement-list',
  templateUrl: './movement-list.component.html',
  styleUrls: ['./movement-list.component.css']
})
export class MovementListComponent implements OnInit {

  Movements: Movement[] = [];

  constructor(
    private _MovementService: MovementService,
  ) { }

  ngOnInit() {
    this._MovementService.get().subscribe(
      c => this.Movements = c,
      error => alert('Erro ao carregar a lista')
    )
  }

}
