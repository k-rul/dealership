import { Directive, ElementRef, Renderer2, Input } from '@angular/core'

@Directive({
    selector: '[changeBackground]',
})

export class ChangeBackgroundDirective {

    // @Input('changeBackground')
    // set changeBackground(changeBackground: string) {
    //     if (changeBackground) {
    //         this.setBackground(changeBackground);
    //     } else {
    //         this.setBackground('gray');
    //     }
    // }

    _elementValue: string;
    @Input('elementValue')
    set elementValue(elementValue: string) {
        this._elementValue = elementValue;
        this.setBackground('red');
    }

    constructor(public elRef: ElementRef, public renderer: Renderer2) {
    }

    setBackground(color: string) {
        if (this._elementValue == "") {
            this.renderer.setStyle(this.elRef.nativeElement, 'background-color', color);
        }else{
            this.renderer.setStyle(this.elRef.nativeElement, 'background-color', null);
        }
    }

}
