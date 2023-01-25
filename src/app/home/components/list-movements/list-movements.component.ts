import { Component, OnInit } from '@angular/core';
import { MovementsFacadeService } from '../../store/facades/movements.facade';

@Component({
  selector: 'home-list-movements',
  templateUrl: 'list-movements.component.html',
  styleUrls: ['list-movements.component.scss'],
})
export class ListMovementsComponent implements OnInit {
  public items = new Array(10).fill(null);
  constructor(private _movementsFacadeService: MovementsFacadeService) {
    this._movementsFacadeService.getMovements();
  }

  ngOnInit() {}

  getList$ = this._movementsFacadeService.getMovements$;

  onScroll() {
    this._movementsFacadeService.getMovements();
  }
}
