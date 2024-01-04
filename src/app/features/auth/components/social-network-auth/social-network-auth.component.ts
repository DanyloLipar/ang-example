import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network-auth.component.html',
  styleUrls: ['./social-network-auth.component.scss']
})
export class SocialNetworkAuthComponent {
  @Input({required:true}) title?: string;
}
