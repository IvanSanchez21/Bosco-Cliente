import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductoComponent } from './productos/productos.component';
import { ProductoService } from './productos/producto.service';
import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms';
import { formatCurrency } from '@angular/common';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { SucursalService } from './sucursales/sucursal.service';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaService } from './categorias/categoria.service';
import { ProdXsucComponent } from './prod-xsuc/prod-xsuc.component';
import { ProdXSucService } from './prod-xsuc/prodXsuc.service';
import { ProdXcatComponent } from './prod-xcat/prod-xcat.component';
import { ProdXCatService } from './prod-xcat/prodXcat.service';
//import { DetalleComponent } from './clientes/detalle/detalle.component';
import { LoginComponent } from './usuarios/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/productos', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'productos', component: ProductoComponent},
  {path: 'clientes/form', component: FormComponent},
  {path: 'clientes/form/:id', component: FormComponent},
  {path: 'sucursales', component: SucursalesComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'prodXsuc', component: ProdXsucComponent},
  {path: 'prodXcat', component: ProdXcatComponent},
  {path: 'login', component: LoginComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    ProductoComponent,
    FormComponent,
    SucursalesComponent,
    CategoriasComponent,
    ProdXsucComponent,
    ProdXcatComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ClienteService, ProductoService, SucursalService, CategoriaService, ProdXSucService, ProdXCatService
  
   ],
  
  
  bootstrap: [AppComponent]
})
export class AppModule { }
