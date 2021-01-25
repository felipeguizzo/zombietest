import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Resource } from 'src/app/models/Resource';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-resource-delete',
  templateUrl: './resource-delete.component.html',
  styleUrls: ['./resource-delete.component.css']
})
export class ResourceDeleteComponent implements OnInit {

  resource?: Resource;

  constructor(
    private _resourceService: ResourceService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.resource = new Resource();

    this.route.paramMap.pipe(
      switchMap(params => this._resourceService.getById(String(params.get("id"))))
    )
      .subscribe(
        (c) => {
          this.resource = c;
        },
        (error) => alert('Ocorreu um erro no servidor, tente novamente.')
      )
  }

  deleteResource() {
    this._resourceService.delete(String(this.resource?.id)).subscribe(
      () => this.router.navigateByUrl("resources"),
      () => alert("Erro ao tentar excluir")
    )
  }

}

