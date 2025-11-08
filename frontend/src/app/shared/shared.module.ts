import { NgModule } from "@angular/core";
import { Button } from "./components/button/button";
import { FormInput } from "./components/input/form-input";
import { FormLine } from "./components/form-line/form-line";
import { Subtitle } from "./components/subtitle/subtitle";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Title } from "./components/title/title";
import { Form } from "./components/form/form";
import { Page } from "./components/page/page";
import { TextLink } from "./components/text-link/text-link";


@NgModule({
    imports: [
        Button,
        FormInput,
        FormLine,
        Title,
        Subtitle,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        Form,
        Page,
        TextLink
    ],
    exports:[
        Button,
        FormInput,
        FormLine,
        Title,
        Subtitle,
        Form,
        Page,
        TextLink
    ]
})

export class ShareModules {};