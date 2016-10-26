import { Component, EventEmitter } from '@angular/core';


@Component ({
	moduleId: module.id,
	selector: 'date-selector',
	templateUrl: 'date.component.html',
	styleUrls: ['date.component.css'],
	outputs: ['dateChanged'],
})

export class DateComponent {

	dateChanged = new EventEmitter<any[]>();

	onDateChanged(value: any[]) {
		this.dateChanged.emit(value);
	}

	days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
	//months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
	months = [1,2,3,4,5,6,7,8,9,10,11,12];
	years = [2010, 2011, 2012, 2013, 2014, 2015, 2016];
}