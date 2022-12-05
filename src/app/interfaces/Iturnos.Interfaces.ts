export interface ITurnos {
    idTurno: number
    idServicio: number
    nombreServicio: string
    fecha: string
    horaInicio: string
    horaFin: string
    estado: string
}

export interface IFormulario {
    fechaInicial: string
    fechaFinal: string
    servicio: number
}

export interface IServicios {
    idServicio: number
    nombreServicio: string
}