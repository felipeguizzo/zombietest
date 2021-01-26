import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MovimentationType } from 'src/app/enums/Type';
import { Movement } from 'src/app/models/Movement';
import { Resource } from 'src/app/models/Resource';
import { MovementService } from 'src/app/services/movement.service';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-movement-form',
  templateUrl: './movement-form.component.html',
  styleUrls: ['./movement-form.component.css']
})
export class MovementFormComponent implements OnInit {

  movementForm?: FormGroup;
  submittingForm: boolean = false;
  movement?: Movement;
  pageTitle?: string;
  resourceList: Resource[] = [];

  constructor(
    private _movementService: MovementService,
    private route: ActivatedRoute,
    private router: Router,
    private _resourceService: ResourceService
  ) { }

  ngOnInit(): void {
    this.movement = new Movement();
    this._resourceService.get().subscribe(
      c => this.resourceList = c,
      error => alert('Erro ao carregar a lista')
    );
  }

  submitForm(movementForm: any) {
    console.log(movementForm)
    this.submittingForm = true;

      this.createMovement(movementForm);
  }

  private createMovement(movementForm: any) {
    const movement: Movement = Object.assign(new Movement(), movementForm.value);

    movement.type = Number(movement.type);
    this._movementService.insert(movement)
      .subscribe(
        () => this.successSaved(),
        error => this.errorSaving(error)
      )
  }

  private successSaved() {
    this.router.navigateByUrl("movements")
  }

  private errorSaving(error: any) {
    alert(error.error.message);
  }

}
