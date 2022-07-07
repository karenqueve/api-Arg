import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ArgService {

  constructor(private httpClient: HttpClient) { }

  public argData = {
    title: "",
    cover: "",
    habitantes: "",
    id: "",
  }

  public clearData() {
    this.argData = {
      title: "",
      cover: "",
      habitantes: "",
      id: "",
    }
  }

  public editItem(item: any) {
    this.argData = item
  }


  public getArg() {
    return this.httpClient.get("http://localhost:3000/argentina")
  }

  public postArg(newArg: any) {
    return this.httpClient.post("http://localhost:3000/argentina", newArg)
  }

  public deleteArg(argID: any) {
    return this.httpClient.delete("http://localhost:3000/argentina/" + argID)
  }

  public editArg(argID: any, editedArg: any) {
    return this.httpClient.put("http://localhost:3000/argentina" + argID, editedArg)
  }
}
