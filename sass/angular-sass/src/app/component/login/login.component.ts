import { Component } from "@angular/core"
import { type FormBuilder, type FormGroup, Validators } from "@angular/forms"
import type { Router } from "@angular/router"

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  loginForm: FormGroup
  isSubmitting = false
  errorMessage = ""

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = "Por favor, preencha todos os campos corretamente.";
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = "";
    setTimeout(() => {
      const email = this.loginForm.get("email")?.value;
      const password = this.loginForm.get("password")?.value;

      console.log("Tentativa de login com:", { email, password });

      if (email === "admin@example.com" && password === "password123") {
        this.router.navigate(["/dashboard0"]);
      } else {
        this.errorMessage = "Credenciais inválidas. Tente novamente.";
      }

      this.isSubmitting = false;
    }, 1500);
  }
}
