import { Component, input } from '@angular/core';
import { Button01 } from '../../../../components/button-01/button-01';
import { Inputcomponent } from '../../../../components/input/input';

@Component({
  selector: 'app-register-user',
  imports: [Button01, Inputcomponent],
  templateUrl: './register-user.html',
  styleUrl: './register-user.css',
})
export class RegisterUser {

}
