import { Directive, ElementRef, Renderer2, Input } from '@angular/core'

@Directive({
    selector: '[changeBackground]',
})

export class ChangeBackgroundDirective {

    @Input()
    set changeBackground(changeBackground: string) {
        if (changeBackground) {
            this.setBackground(changeBackground);
        } else {
            this.setBackground('gray');
        }
    }

    constructor(public elRef: ElementRef, public renderer: Renderer2) {
    }

    setBackground(color: string) {
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', color);
    }

}
