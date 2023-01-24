import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './routes/home.routes';
import { HomeComponent } from './home.component';
import { ListMovementsComponent } from './pages/list-movements/list-movements.component';

@NgModule({
  declarations: [HomeComponent, ListMovementsComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [],
  providers: [],
})
export class HomeModule {}
