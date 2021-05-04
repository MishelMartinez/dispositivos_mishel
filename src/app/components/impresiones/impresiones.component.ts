import { Component, OnInit } from '@angular/core';

import{ImpresionesService,Impresion3d} from "../../services/impresiones.service";

import {Router} from "@angular/router";

@Component({
  selector: 'app-impresiones',
  templateUrl: './impresiones.component.html',
  styleUrls: ['./impresiones.component.css']
})
export class ImpresionesComponent implements OnInit {




  constructor(private impresiones_:ImpresionesService,
              private router:Router) { }


  impresiones:Impresion3d[]=[];


  ngOnInit(): void {

this.impresiones = this.impresiones_.getImpresiones();

console.log(this.impresiones);


  }

  VerImpresion(idx:number){
    console.log("entro");

    this.router.navigate(['/impresion',idx]);

  }




}
