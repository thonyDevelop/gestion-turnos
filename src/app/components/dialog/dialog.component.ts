import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IServicios } from 'src/app/interfaces/Iturnos.Interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent {
  turnosForm!: FormGroup;
  servicios: IServicios[] = []
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService
  ) { }
  ngOnInit(): void {
    this.getServicios()
    this.turnosForm = this.formBuilder.group({
      fechaInicial: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      servicio: ['', Validators.required]
    })
  }

  getServicios() {
    this.api.getServicios().subscribe({
      next: (res) => {
        this.servicios = res
      },
      error: (err) => {
        alert('ocurrio un error')
      }
    })
  }

}
