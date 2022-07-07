import { Component, OnInit } from '@angular/core';
import { ArgInterface } from 'src/app/models/arg.inteface';
import { ArgService } from 'src/app/services/arg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-miargentina',
  templateUrl: './miargentina.component.html',
  styleUrls: ['./miargentina.component.scss']
})
export class MiargentinaComponent implements OnInit {
  public argList: ArgInterface[] = [];

  constructor(private argService: ArgService, private router: Router) { }

  ngOnInit(): void {
    this.argService.getArg().subscribe((data: any) => {
      this.argList = data
    })
  }

  public catchArg(arg: any) {
    this.argService.editItem(arg);
    this.router.navigate(["/gestion"]);
  }

}
