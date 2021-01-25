import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Resource } from 'src/app/models/Resource';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-resource-form',
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.css']
})
export class ResourceFormComponent implements OnInit {

  resourceForm?: FormGroup;
  submittingForm: boolean = false;
  currentAction?: string;
  resource?: Resource;
  pageTitle?: string;

  constructor(
    private _resourceService: ResourceService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.resource = new Resource();
    this.setCurrentAction();    
  }

  ngAfterContentChecked(){
    this.updatePageTitle();
  }

  private setCurrentAction() {   
    if(this.route.snapshot.url[1].path == "insert"){
      this.currentAction = "new";    
    }
    else
    {
      this.currentAction = "edit";
      this.fillResource();          
    }
  }
  
  submitForm(resourceForm: any) {
    console.log(resourceForm)
    this.submittingForm = true;

    if (this.currentAction == "new") {
      this.createResource(resourceForm);
    }
    else {
      this.updateResource(resourceForm);
    }
  }

   private fillResource() {
    if(this.currentAction == "edit"){
      this.route.paramMap.pipe(
        switchMap(params => this._resourceService.getById(String(params.get("id"))))
      )
      .subscribe(
        (c)=>{
          this.resource = c;
        },
        (error) => alert('Ocorreu um erro no servidor, tente novamente.')
      )
    }
  }
  
  private createResource(resourceForm: any) {
    const resource: Resource = Object.assign(new Resource(), resourceForm.value);    

     this._resourceService.insert(resource)
       .subscribe(
          () => this.successSaved(),
          error => this.errorSaving(error)
       )
  }
 
  private updateResource(resourceForm: any) {
    const resource: Resource = Object.assign(new Resource(), resourceForm.value);    

    this._resourceService.update(resource)
      .subscribe(
        resource => this.successSaved(),
        error => this.errorSaving(error)
      )
  }

  private successSaved() {
    this.router.navigateByUrl("resources")
  }

  private errorSaving(error: any) {
    alert(error.body.error);
  }

  private updatePageTitle() {
    if(this.currentAction == "new")
      this.pageTitle = "Cadastro de Novo Resource";
    else{
      const resourceNome = this.resource?.title || ""
      this.pageTitle = "Editando Resource: " + resourceNome;
    }
  }
}