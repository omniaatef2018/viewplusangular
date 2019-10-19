import { async, TestBed } from '@angular/core/testing';
import { ForgetpasswordComponent } from './forgetpassword.component';
describe('ForgetpasswordComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ForgetpasswordComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ForgetpasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=forgetpassword.component.spec.js.map