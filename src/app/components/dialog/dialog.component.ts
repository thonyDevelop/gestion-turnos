import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent {
  turnosForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService
  ) { }
  ngOnInit(): void {
    this.turnosForm = this.formBuilder.group({
      fechaInicial: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      servicio: ['', Validators.required]
    })
  }

  generarTurnos() {
    if (this.turnosForm.valid) {
      this.api.getGenerarTurnos().subscribe({
        next: (res) => {
          console.log(res)

        },
        error: (err) => {
          alert('ocurrio un error')
        }
      })
    }
  }
}
