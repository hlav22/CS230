import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core"

import { UserInfo } from "./user-info.model";


@Injectable()
@Component({
    selector: "user-info",
    templateUrl: "user-info.component.html"
})
export class UserInfoComponent implements OnInit {
    myInfo: UserInfo | undefined;
    constructor(private http: HttpClient) {
        console.log(this.myInfo); //notice this import is messed up
        
    }
    ngOnInit(): void {
        console.log("Sending Request To serve");
        this.getUserInfo();
        console.log("Registering showUserInfo as a subscriber");
        this.showUserInfo();
    }

    getUserInfo() {
        return this.http.get<UserInfo>('https://cs230lab-7d52e-default-rtdb.firebaseio.com/my-info.json')
    }
    showUserInfo() {
        this.getUserInfo().subscribe((data: UserInfo) => {
            console.log(data);
            this.myInfo = data;
        })
    }
}