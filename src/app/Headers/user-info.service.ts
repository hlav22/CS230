import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserInfoComponent } from "../Headers/user-info.component";
import { UserInfo } from "./user-info.model";

@Injectable({ providedIn: 'root' })
export class UserInfoService {
    private baseUrl: string = 'https://cs230lab-7d52e-default-rtdb.firebaseio.com/';
    private myInfoEndpoint: string = 'my-info.json';

    constructor(private http: HttpClient) {

    }

    getUserInfo() {
        console.log(this.baseUrl + this.myInfoEndpoint);
        return this.http.get<UserInfoComponent>(this.baseUrl + this.myInfoEndpoint);
    }

    modifyUserInfo() {
        var temp: UserInfo = {
            FirstName: 'Modified',
            LastName: "Modified1",
            GitHub: "Modified2",
            MixAccount: "Modified3"
        }
        return this.http.post(this.baseUrl + this.myInfoEndpoint, temp);
    }
}