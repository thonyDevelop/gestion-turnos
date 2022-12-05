import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { IFormulario, ITurnos } from './interfaces/Iturnos.Interfaces';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gestion-turnos';
  dataFormulario: IFormulario = { fechaInicial: '', fechaFinal: '', servicio: 0 }
  turnosGenerados: ITurnos[] = []
  constructor(private dialog: MatDialog,
    private api: ApiService) { }
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '30%'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataFormulario = result.value;
      this.generarTurnos(this.dataFormulario)
    });
  }

  generarTurnos(data: IFormulario) {
    if (data.fechaInicial != null && data.fechaFinal != null && data.servicio != null) {
      this.api.getGenerarTurnos().subscribe({
        next: (res) => {
          this.turnosGenerados = res
        },
        error: (err) => {
          alert('ocurrio un error')
        }
      })
    } else {
      alert("Faltaron opciones por digitar")
    }
  }


}
