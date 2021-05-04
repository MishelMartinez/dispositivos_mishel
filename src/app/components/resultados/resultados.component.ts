import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Impresion3d, ImpresionesService} from "../../services/impresiones.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  impresiones:Impresion3d[]=[];


  constructor(private impresionesService_:ImpresionesService,
              private router:ActivatedRoute,
              private router_:Router) {

    this.router.params.subscribe(params=>{


      this.impresiones = this.impresionesService_.searchPrinter((params['modelo']));
      console.log(this.impresiones);

    });

  }

  ngOnInit(): void {
  }

  VerImpresion(idx:number){
    console.log("entro");

    this.router_.navigate(['/impresion',idx]);

  }

}
