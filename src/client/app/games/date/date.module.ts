import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { DateComponent } from './date.component';

@NgModule({
    imports: [MaterialModule, CommonModule],
    declarations: [DateComponent],
    exports: [DateComponent, MaterialModule]
})

export class DateModule { }