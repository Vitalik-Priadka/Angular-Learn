import { HttpClient} from "@angular/common/http";
import { Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

@Injectable()
export class HttpService {
  public host: string;

  constructor(private http: HttpClient){
    this.host = environment.host;
  }

  public get(route: string){
    return this.http.get(this.host + route);
  }

}
