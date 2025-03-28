import { Component, OnInit } from '@angular/core';
import { User, userResponse } from 'src/app/interfaces/user';
import { LoadingService } from 'src/app/services/Loading/loading.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  standalone: false,
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  
  protected currentUser:User = {} as User;
  private selectedFile: File | null = null; 
  protected previewUrl: string | ArrayBuffer | null = null; 
  protected newUser:User = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    socialMedia: '',
    image: '',
    direction: []
  }

  constructor(
    private userService:UserService,
    private loadingctrl:LoadingService) { }

  async ngOnInit() {
    await this.loadingctrl.presentLoading();
   this.loadCurrentUser();
  }

  protected   loadCurrentUser() {
    this.userService.getAuthenticatedUser().subscribe({
      next:async  (response) => {
          this.currentUser = response.data;
          this.newUser = { ...this.currentUser };
      },
      error: (error) => {
        console.error('Error al obtener el usuario:', error);
      },
      complete: async () => {
        await this.loadingctrl.dismissLoading();
      }
    });
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


   updateUser(): void {
    const archivo = this.selectedFile ? this.selectedFile : null;

    const formData = new FormData();
    formData.append('name', this.newUser.name);
    formData.append('lastName', this.newUser.lastName);
    formData.append('email', this.newUser.email);
    formData.append('phone', this.newUser.phone);
   // formData.append('password', this.newUser.password);
    formData.append('socialMedia', this.newUser.socialMedia);
    if (archivo) {
      formData.append('image', archivo);
    }

    this.loadingctrl.presentLoading("guardando datos.");
    this.userService.updateUser(this.newUser,formData).subscribe({
      next: async (response) => {
        console.log('Usuario actualizado correctamente:', response);
      },
      error: (error) => {
        console.error('Error al actualizar el usuario:', error);
      },
      complete: async () => {
        await this.loadingctrl.dismissLoading();
      }
    });
  }

}
