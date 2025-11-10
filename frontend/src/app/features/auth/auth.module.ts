import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ShareModules } from "../../shared/shared.module";
import { LoginForm } from "./components/login/login-form";

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, ShareModules, LoginForm],
    exports: [LoginForm]
})
export class AuthModule {}