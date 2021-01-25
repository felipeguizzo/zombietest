import { Component, OnInit } from '@angular/core';
import { Resource } from 'src/app/models/Resource';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {

  resources: Resource[] = [];

  constructor(
    private _resourceService: ResourceService,
  ) { }

  ngOnInit() {
    this._resourceService.get().subscribe(
      c => this.resources = c,
      error => alert('Erro ao carregar a lista')
    )
  }

  /*get filterResources() {
    return this.resources.filter( x => Number(x.id) > 0);
  }*/
}
