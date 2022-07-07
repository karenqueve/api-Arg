import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArgService } from 'src/app/services/arg.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {

  public argForm!: FormGroup;
  public newArg = this.argService.argData;
  public argID = this.argService.argData.id;

  constructor(private formBuilder: FormBuilder, private argService: ArgService, private router: Router) { }

  ngOnInit(): void {
    this.argService.clearData();
    this.argForm = this.formBuilder.group({
      title: [this.newArg.title, [Validators.required, Validators.minLength(2)]],
      habitantes: [this.newArg.habitantes, [Validators.required]],
      cover: [this.newArg.cover, [Validators.required]],
    })

    this.argForm.valueChanges.subscribe((changes) => {
      this.newArg = changes;
    })
  }

  public onSubmit() {
    if (this.argID === "") {
      this.argService.editArg(this.argID, this.newArg).subscribe();
      alert("Recomendación editada!");
    } else {
      this.argService.postArg(this.newArg).subscribe();
      alert("Recomendación creada!");
    }

    this.argForm.reset();

    this.router.navigate(["/miargentina"]);
  }

  public delete() {
    this.argService.deleteArg(this.argID);
    this.argForm.reset();
    alert("Se ha eliminado Correctamente!")
  }
}



