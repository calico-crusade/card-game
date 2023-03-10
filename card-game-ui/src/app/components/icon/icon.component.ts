import { Component, Input } from '@angular/core';

@Component({
  selector: 'cg-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
    @Input('font-size') size?: string; 
    @Input('unsize') unsize: boolean = false;
    @Input('fill') fill: boolean = false;
    @Input('spin') spin: boolean | 'false' | 'true' | '' = false;
}
