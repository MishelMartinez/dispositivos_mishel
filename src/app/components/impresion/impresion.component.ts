import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ImpresionesService,Impresion3d} from "../../services/impresiones.service";

@Component({
  selector: 'app-impresion',
  templateUrl: './impresion.component.html',
  styleUrls: ['./impresion.component.css']
})
export class ImpresionComponent implements OnInit {

  impresion:Impresion3d;
  constructor(private activateRoute:ActivatedRoute,
              private impresionService:ImpresionesService)
  {

    this.activateRoute.params.subscribe(params=>{


      this.impresion = this.impresionService.getImpresion((params['id']));
      console.log(this.impresion);

    });
  }

  ngOnInit(): void {
  }

}
