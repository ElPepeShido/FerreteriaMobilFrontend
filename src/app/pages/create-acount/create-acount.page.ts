import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-create-acount',
  templateUrl: './create-acount.page.html',
  styleUrls: ['./create-acount.page.scss'],
})
export class CreateAcountPage implements OnInit {

  private crud:UserService;
  private selectedFile: File | null = null; 
  previewUrl: string | ArrayBuffer | null = null; 


  user:User = {
    id:"",
    name: "",
    last_name:  "",
    email:"",
    password: "",
    image:"",
    phone:"",
    rfc:"",
    role:"",
    updated_at:"",
    created_at:"",
  }
  constructor(crud:UserService, private router:Router) { 
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
  
  // botonGuardar() {
  //   console.log('Usuario a guardar : ', this.user);
  //   this.crud.guardar(this.user,this.selectedFile!).subscribe(
  //     response => {
  //       console.log('Cliente guardado con éxito:', response);
  //     },
  //     error => {
  //       console.error('Error al guardar cliente:', error.error);
  //     }
  //   );
  // }



}
