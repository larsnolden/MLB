import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';		//import component
import { SharedModule } from '../shared/shared.module'; //import shared modules


import { MaterialModule } from '@angular/material';


@NgModule({
	imports: [CommonModule, MaterialModule],
	declarations: [DetailComponent],
	exports: [DetailComponent, MaterialModule]
})

export class DetailModule {}