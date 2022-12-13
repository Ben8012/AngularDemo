import { Directive, ElementRef, Output, EventEmitter } from '@angular/core';

import * as M from 'materialize-css';


@Directive({
    selector: '[matSelect]'
})
export class MatSelectDirective {
    private _instance: M.FormSelect | null = null

    constructor( private $er: ElementRef<HTMLSelectElement> ) {}

    ngAfterViewInit()
    {
        this._instance = M.FormSelect.init(this.$er.nativeElement);
    }

}
