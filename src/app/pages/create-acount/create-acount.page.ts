import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client/client.service';
import { Cliente } from 'src/app/models/cliente';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-create-acount',
  templateUrl: './create-acount.page.html',
  styleUrls: ['./create-acount.page.scss'],
})
export class CreateAcountPage implements OnInit {

  private crud:ClientService;
  private selectedFile: File | null = null; 
  previewUrl: string | ArrayBuffer | null = null; 


  cliente:Cliente = {
    id:"",
    nombre: "",
    apellido_paterno:  "",
    apellido_materno: "",
    email:"",
    password: "",
    estado: "Activo",
    red_social: "Facebook",
    imagen1:"",
  }
  constructor(crud:ClientService, private router:Router) { 
    this.crud = crud;
  }

  ngOnInit() {

  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result; // Guardar la URL de vista previa
      };
      reader.readAsDataURL(file);
    }
  }
  
  botonGuardar() {
    console.log('cliente a guardar : ', this.cliente);
    this.crud.guardar(this.cliente,this.selectedFile!).subscribe(
      response => {
        console.log('Cliente guardado con éxito:', response);
      },
      error => {
        console.error('Error al guardar cliente:', error.error);
      }
    );
  }



}
