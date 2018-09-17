import { Personagem } from "./personagem/personagem.model";
import { MEAT_API } from "../../app/app.api";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { ErrorHandler } from '../app.error-handler';
import { MenuItem } from "../personagem-detalhe/menu-item/menu-item.model";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class PersonagensService {

    constructor(private http: Http){}

    personagens(): Observable<Personagem[]> {
        return this.http.get(`${MEAT_API}/personagens`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    personagemById(id: number): Observable<Personagem>{
        return this.http.get(`${MEAT_API}/personagens/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    reviewsOfPersonagem(id: number): Observable<any>{
        return this.http.get(`${MEAT_API}/personagens/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    menuOfPersonagem(id: number): Observable<MenuItem[]>{
        return this.http.get(`${MEAT_API}/personagens/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
}