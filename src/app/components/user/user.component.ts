import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { OperatngSystemService } from '../../core/services.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'user-component',
  standalone: true,
  imports: [UserComponent, UpperCasePipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  //Pasarle datos al componente del componente hijo al padre
  @Input() occupation: string = '';

  //Pasar datos desde el componente padre al hijo
  @Output() greet = new EventEmitter<string>();
  operatingSistemService = inject(OperatngSystemService)
  operatingSystem = this.operatingSistemService.getOperatingSystem();
  username: string = 'Dariana';
  doesUserExist: boolean = true;
  isEditable: boolean = true;
  onMouserOver(osName: string) {
    console.log(osName);
  }
  emitToParent():void {
    this.greet.emit("Hola soy tu  hijo");
  }
}
