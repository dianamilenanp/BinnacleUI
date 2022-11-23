import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userList: any = [];
  userForm = this.formBuilder.group({
    nombre: '',
    apellido: '',
    curso: '',
    rol: '',
    correo_usuario: '',
    telefono_usuario: '',
    grado_usuario: '',
    correo_contacto: '',
    telefono_contacto: '',
    grado_contacto: '',
    observaciones: '',
    contrasena: ''
  })

  editableUser: boolean = false;
  idUser: any;


  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsersData().subscribe((data: {}) => {
      this.userList = data;
    });
  }

  newUserEntry() {
    this.userService.newUser(this.userForm.value).subscribe(
      () => {
        //Redirigiendo a la ruta actual /animal y recargando la ventana
        this.router.navigate(['/user']).then(() => {
          window.location.reload();
        })
      }
    );
  }
/*
  deleteUserEntry(id: any) {
    console.log(id)
    this.userService.deleteUser(id).subscribe(
      () => {
        //Enviando mensaje de confirmación
        this.openMessage("Actividad eliminada", "Actualizar lista");
      }
    );
  }

  updateUserEntry() {
    //Removiendo valores vacios del formulario de actualización
    /*for (let key in this.userForm.value) {
      if (this.userForm.value[key] === '') {
        this.userForm.removeControl(key);
      }
    }
    this.userService.updateUser(this.idUser, this.userForm.value).subscribe(
      () => {
        //Enviando mensaje de confirmación
        this.openMessage("Animal editado", "Actualizar lista");
      }
    );
  }

  toggleEditUser(id: any) {
    this.idUser = id;
    console.log(this.idUser)
    this.editableUser = !this.editableUser;
  }*/

}