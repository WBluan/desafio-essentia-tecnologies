import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo-component/todo-component";

@NgModule({
    imports: [TodoComponent],
    exports: [TodoComponent]
})

export class TodoModule {}