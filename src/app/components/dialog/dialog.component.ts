import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent {
  turnosForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
    this.turnosForm = this.formBuilder.group({
      fechaInicial: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      servicio: ['', Validators.required]
    })
  }

}
