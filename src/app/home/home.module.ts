import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './routes/home.routes';
import { HomeComponent } from './home.component';
import { ListMovementsPage } from './pages/list-movements/list-movements.component';
import { HeaderComponent } from './components/header/header.component';
import { ListMovementsComponent } from './components/list-movements/list-movements.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { StoreModule } from '@ngrx/store';
import { MovementReducer } from './store/reducers/movements.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MovementsEffects } from './store/effects/movements.effects';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ListMovementsPage,
    ListMovementsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    InfiniteScrollModule,
    StoreModule.forFeature('movementsModule', MovementReducer),
    EffectsModule.forFeature([MovementsEffects]),
  ],
  exports: [],
  providers: [],
})
export class HomeModule {}
