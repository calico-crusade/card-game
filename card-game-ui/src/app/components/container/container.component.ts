import { Component, Input } from '@angular/core';

@Component({
    selector: 'cg-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

    @Input() loading: boolean = false;
    @Input('loading-text') loadingText?: string;
    @Input() error?: string;

}
