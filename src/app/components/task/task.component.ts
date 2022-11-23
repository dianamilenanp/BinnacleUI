import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  taskList: any = [];
  taskForm = this.formBuilder.group({
    codigo: '',
    titulo: '',
    fecha_inicial: '',
    fecha_final: '',
    hora_inicial: '',
    hora_final: '',
    descripcion: '',
    estado_avance: '',
    prioridad: ''
  })
  
  editableTask: boolean = false;
  idTask: any;

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.taskService.getAllTasksData().subscribe((data: {}) => {
      this.taskList = data;
    });
  }

  newTaskEntry() {
    this.taskService.newTask(this.taskForm.value).subscribe(
      () => {
        //Redirigiendo a la ruta actual /animal y recargando la ventana
        this.router.navigate(['/task']).then(() => {
          window.location.reload();
        })
      }
    );
  }

  deleteTaskEntry(id: any) {
    console.log(id)
    this.taskService.deleteTask(id).subscribe(
      () => {
        //Enviando mensaje de confirmación
        this.openMessage("Actividad eliminada", "Actualizar lista");
      }
    );
  }

  updateTaskEntry() {
    //Removiendo valores vacios del formulario de actualización
    for (let key in this.taskForm.value) {
      if (this.taskForm.value[key] === '') {
        this.taskForm.removeControl(key);
      }
    }
    this.taskService.updateTask(this.idTask, this.taskForm.value).subscribe(
      () => {
        //Enviando mensaje de confirmación
        this.openMessage("Animal editado", "Actualizar lista");
      }
    );
  }

  toggleEditTask(id: any) {
    this.idTask = id;
    console.log(this.idTask)
    this.editableTask = !this.editableTask;
  }

}