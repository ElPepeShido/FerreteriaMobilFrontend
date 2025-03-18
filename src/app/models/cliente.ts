export interface Cliente{
      id:string,
      nombre: string,
      apellido_paterno: string,
      apellido_materno: string,
      email:string,
      password: string,
      estado: string,
      red_social: string,
      imagen1: string,
}

export interface ClienteResponse {
   message: string,
   data: Cliente[],
   error:string
}