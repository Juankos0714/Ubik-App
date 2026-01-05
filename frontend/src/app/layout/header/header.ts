import { Component } from '@angular/core';
import { Logo01 } from "../../components/logo-01/logo-01";
import { RouterLink } from "@angular/router";
import { Button01 } from "../../components/button-01/button-01";

@Component({
  selector: 'app-header',
  imports: [Logo01, RouterLink, Button01],
  templateUrl: './header.html',
})

export class Header {
 logo : string = 'https://res.cloudinary.com/du4tcug9q/image/upload/v1763473322/Logo_Ubik_jxgzqi.png';
}
