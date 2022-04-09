import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EditProfileService } from 'src/app/Services/edit-profile.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-edit-porfile-admin',
  templateUrl: './edit-porfile-admin.component.html',
  styleUrls: ['./edit-porfile-admin.component.css']
})
export class EditPorfileAdminComponent implements OnInit {

  constructor(public editProfile:EditProfileService,public userservice:UserService , private toastr: ToastrService) { }
  userValues: any = {}
  username:any  = localStorage.getItem('name')
  ngOnInit(): void {
    this.editProfile.getUserData({username:this.username}) 
    setTimeout(() => {
      this.userValues = {
        id: this.editProfile.dataFromUsers.id,
        fullName: this.editProfile.dataFromUsers.fullName,
        email: this.editProfile.dataFromUsers.email,
        phone: this.editProfile.dataFromUsers.phone,
        imagepath: this.editProfile.dataFromUsers.imagepath,
        roleid: this.editProfile.dataFromUsers.roleid,
      }

      console.log('this.editProfile.dataFromUsers.imagepath',this.editProfile.tempimg)

    }, 2000);

  
  }

  UpdateForm: FormGroup = new FormGroup({
    id: new FormControl(),
    fullName: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    imagepath: new FormControl(),
    roleid: new FormControl()
  })


  UpdatePassword: FormGroup = new FormGroup({
    Userid: new FormControl(),
    Password: new FormControl(),
  
  })



  uploadFile(file:any)
  {
    if(file.length===0){
      return;
    }
    let fileUpload=<File>file[0];
    const fromData=new FormData();
    fromData.append('file',fileUpload,fileUpload.name);
    this.userservice.uploadAttachment(fromData);
  
  }

  update()
  {
    debugger
    this.UpdateForm.controls['id'].setValue( this.editProfile.dataFromUsers.id);
    this.UpdateForm.controls['email'].setValue(this.editProfile.dataFromUsers.email);
    this.UpdateForm.controls['roleid'].setValue( this.editProfile.dataFromUsers.roleid);     
    this.userservice.updateUserNormal(this.UpdateForm.value);
    console.log('dataFromUsers',this.editProfile.dataFromUsers)

    
    window.location.reload();
  }

  passwordUpdate(){
    this.UpdatePassword.controls['Userid'].setValue( this.editProfile.dataFromUsers.id);
    this.editProfile.updatePassword(this.UpdatePassword.value);
  
    window.location.reload();
    this.toastr.success('Your password updated');
  }

}
