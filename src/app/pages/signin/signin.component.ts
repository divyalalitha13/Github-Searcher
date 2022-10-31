import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms"
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    const {email,password} = f.form.value;
    //TODO: do your checking here but firebase already checks some pwd should be greater than 6
    this.auth.signIn(email,password)
    .then((res)=>{
      this.router.navigateByUrl('/');
      this.toastr.success("SignIn success")
    })
    .catch((err)=>{
      console.log(err.message)
      this.toastr.error("SignIn failed")
    })
  }

}
