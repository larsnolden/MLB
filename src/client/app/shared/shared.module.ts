import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

//import my modules to bundle them in here
import { GameDataService } from './game-data/index';
import { GameDetailDataService } from './game-detail-data/index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule.forRoot()],
  exports: [CommonModule, FormsModule, RouterModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
       providers: [GameDataService, GameDetailDataService]
    };
  }
}
