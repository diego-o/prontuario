import { LoginService } from './../../services/service-login/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/models/usuario-model';
import { PacienteService } from 'src/services/service-paciente/paciente.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: Usuario;
  message: string = "";

  constructor(
    private router: Router,
    private LoginService: LoginService,
    private PacienteService: PacienteService,
    private Toast: ToastController
  ) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
  }

  get Usuario() {
    return this.usuario;
  }

  Logar() {
    this.message = "";
    this.LoginService.Logar(this.usuario).subscribe(user => {
      if (user != null) {
        this.PacienteService.getPaciente(this.usuario.cpf).subscribe(paciente => {
          this.PacienteService.SetPaciente(paciente);

          this.router.navigate(['tabs']);
          this.usuario = new Usuario();
        });
      } else {
        this.message = "Falha na autenticação";
        this.ShowToast(this.message);
      }
    }, error => {
      this.message = "Erro ao tentar se autenticar.";
      this.ShowToast(error.message);
      console.log(error);
    });
  }

  async ShowToast(Message: string) {
    const toast = await this.Toast.create({
      message: Message,
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'OK'
    });
    toast.present();
  }

}
