import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AuthenticationService,Note,Userdata } from 'src/app/services/authentication.service';
import { ModalPage } from 'src/app/modal/modal/modal.page'; 
import {FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: 'demo.page.html',
  styleUrls: ['demo.page.scss']
})
export class DemoPage {
  @Input() id: string;

  user: Userdata = null;

  notes: Note[] = [];
  userdatas:Userdata[]=[];
  loginForm:FormGroup;
  isSubmitted=false;
x='';
  constructor(private dataService: AuthenticationService,  private cd: ChangeDetectorRef, private alertCtrl: AlertController, private modalCtrl: ModalController,public formBuilder:FormBuilder,) {
    this.dataService.getNotes().subscribe(res => {
      this.notes = res;
      this.cd.detectChanges();
    });
    this.dataService.getUsers().subscribe(res=>{
      console.log(res)
      this.userdatas=res;
    })
  }
  ngOnInit() {
    this.dataService.getUserById(this.id).subscribe(res => {
      this.user = res;
    });
    this.loginForm =this.formBuilder.group({
      email:['',[Validators.required,Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]],
      })
  }
async addUser(){
this.user=this.loginForm.value

await this.dataService.addUser(this.user)
}


  async addNote() {
    const alert = await this.alertCtrl.create({
      header: 'Add Note',
      inputs: [
        {
          name: 'title',
          placeholder: 'My cool note',
          type: 'text'
        },
        {
          name: 'text',
          placeholder: 'Learn Ionic',
          type: 'textarea'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Add',
          handler: res => {
            this.dataService.addNote({ text: res.text, title: res.title });
          }
        }
      ]
    });
 
    await alert.present();
  }
 
  async openNote(note: Note) {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: { id: note.id },
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.8
    });
 
    await modal.present();
  }
  submitForm(){
    this.isSubmitted=true;
    if(!this.loginForm.valid){
      console.log("provide required values")
      return false;
    }else{
      alert("Login Successfull")
      console.log(this.loginForm.value.email)
      this.loginForm.reset()
      //move to home page  after login

    }
  }


}