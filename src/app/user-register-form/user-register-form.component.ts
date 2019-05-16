import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'user-register-form',
	templateUrl: './user-register-form.component.html',
	styleUrls: ['./user-register-form.component.css']
})
export class UserRegisterFormComponent implements OnInit {

	registered = false;
	submitted = false;
	userForm : FormGroup;

	constructor(private formBuilder: FormBuilder){

	}

		invalidUsername(){
		return (this.submitted && this.userForm.controls.userName.errors!=null);
	}
		invalidEmail(){
		return (this.submitted && this.userForm.controls.email.errors!=null);
	}
		invalidPassword(){
		return (this.submitted && this.userForm.controls.pwd.errors!=null);
	}
		invalidPassword2(){
		return (this.submitted && this.userForm.controls.pwd.errors!=null);
	}

	ngOnInit(){
		this.userForm = this.formBuilder.group({
			userName : ['', Validators.required],
			email : ['', [Validators.required, Validators.email]],
			password : ['', [Validators.required, Validators.minLength(5), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
			password2 : ['', [Validators.required, Validators.minLength(5), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
		});
	}
	onSubmit(){
		this.submitted = true;
		if(this.userForm.invalid == true){
			return;
		}else{
			this.registered = true;
		}
	}

}
