import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { dniValidator } from 'src/app/dni.directive';

@Component({
  selector: 'app-formularios-reactivos',
  templateUrl: './formularios-reactivos.component.html',
  styleUrls: ['./formularios-reactivos.component.css']
})
export class FormulariosReactivosComponent {
  grupo = this.fb.group({
    nombre: ['', Validators.required],
    apellido: [''],
    dni: ['', [Validators.required, Validators.pattern(/^[XYZ\d]\d{7}[A-Z]$/), dniValidator()]],
    colegas: this.fb.array([
      this.fb.control('')
    ])
  });

  get dni() {
    return this.grupo.get('dni') as FormControl;
  }

  get colegas() {
    return this.grupo.get('colegas') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  enviar():  void {
    console.info(this.grupo.value);
  }

  nuevoColega() {
    this.colegas.push(this.fb.control(''));
  }
}
