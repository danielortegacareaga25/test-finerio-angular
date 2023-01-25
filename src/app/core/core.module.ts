import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from './store/effects/auth.effect';
import { AuthReducer } from './store/reducers/auth.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('authModule', AuthReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class CoreModule {}
