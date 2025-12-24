import { Component } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faHouse, faCompass, faCircleUser} from '@fortawesome/free-regular-svg-icons';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-nav-bar-bottom',
  imports: [FaIconComponent, RouterLink],
  templateUrl: './nav-bar-bottom.html',
})
export class NavBarBottom {

  faHouse = faHouse;
  faCompass = faCompass
  faCircleUser = faCircleUser;

}
