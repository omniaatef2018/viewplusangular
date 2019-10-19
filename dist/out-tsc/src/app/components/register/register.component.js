import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var RegisterComponent = /** @class */ (function () {
    // companyfullname:string;
    // companyemail:string;
    // companycountry:string ;
    // companyarea:string;
    // companymobile:number;
    // companypassword:string;
    // companyname:string;
    // companyempolyee:string;
    function RegisterComponent(httpClient) {
        this.httpClient = httpClient;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.signuppersonal = function (personalform) {
        this.httpClient.post('http://localhost/api/methods/create.php', {
            "name": this.name,
            "email": this.email,
            "phone": this.mobile,
            "passowrd": this.passowrd,
            "country": this.country,
            "area": this.area
        }).subscribe(function (data) {
            console.log(data);
        });
    };
    RegisterComponent = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map