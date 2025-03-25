import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-create-acount',
  templateUrl: './create-acount.page.html',
  styleUrls: ['./create-acount.page.scss'],
})
export class CreateAcountPage implements OnInit {

  private api:UserService;
  private selectedFile: File | null = null; 
  previewUrl: string | ArrayBuffer | null = null; 


  user:User = {
    name: '',
    lastName: '',
    image: '',
    email: '',
    phone: '',
    password: '',
    socialMedia: 'Facebook',
  }
  constructor(crud:UserService, private router:Router) { 
    this.api = crud;
  }

  ngOnInit() {

  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  
  botonGuardar() {
    this.api.saveUser(this.user,this.selectedFile).subscribe({
      next: (response) => {
        console.log('Usuario creado:', response);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Error al crear el usuario:', error);
      },
      complete: () => {
        console.log('La acción se completó correctamente');
      }
    });
  }

}
