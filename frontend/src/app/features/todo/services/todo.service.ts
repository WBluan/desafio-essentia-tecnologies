import { Injectable } from "@angular/core";
import { ApiService } from "../../../core/services/api.service";
import { Observable } from "rxjs";
import { Todo } from "../model/todo.model";

@Injectable({ providedIn: 'root' })
export class TodoService {
    private baseUrl = '/api/tasks'

    constructor(private api: ApiService) {}

    getAll(): Observable<Todo[]> {
        return this.api.get<Todo[]>(this.baseUrl);
    }

    create(task: Partial<Todo>): Observable<Todo> {
        return this.api.post<Todo>(this.baseUrl, task);
    }

    update(id: number, todo: Partial<Todo>): Observable<void> {
        return this.api.put<void>(`${this.baseUrl}/${id}`, todo);
    }

    delete(id: number): Observable<void> {
        return this.api.delete<void>(`${this.baseUrl}/${id}`);
    }
}