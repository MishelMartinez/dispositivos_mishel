
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ImpresionesComponent} from './components/impresiones/impresiones.component'
import {ImpresionComponent} from "./components/impresion/impresion.component";
import {AboutComponent} from './components/about/about.component'
import {ResultadosComponent} from "./components/resultados/resultados.component";


const APP_ROUTES: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'impresion/:id',component:ImpresionComponent},
  {path:'resultados/:modelo',component:ResultadosComponent},
  {path:'impresiones',component:ImpresionesComponent},

  {path:'',pathMatch:'full',redirectTo:'home'}
];
export const  APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

