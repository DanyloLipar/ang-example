import { Component, Input } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
    selector: 'app-autocomplete',
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {
    @Input() control!: FormControl;
    @Input() options: any;
}

