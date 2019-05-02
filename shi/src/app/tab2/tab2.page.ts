import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
 imgs =["assets/emoji_u270a.png", "assets/emoji_u270b.png", "assets/emoji_u270c.png"]

 
  
 res:string
 perdu:number = 0
 gagne:number = 0
 egalite:number = 0
 pierre:"assets/emoji_u270a.png"
 feuille:"assets/emoji_u270b.png"
 ciseau:"assets/emoji_u270c.png"

 recomencer(){
  this.res=""
  this.perdu = 0
  this.gagne = 0
  this.egalite = 0
 }
 
 ordi(shi){
    let ordi=Math.floor(Math.random() * 3)
    console.log(ordi)
    if(shi==ordi){
      console.log("egalite")
      this.res="egalite"
      this.egalite++
    }

    if(shi==0 && ordi==1 || shi==1 && ordi==2 || shi==2 && ordi==0){
      console.log("perdu")
      this.res='perdu'
      this.perdu++


    }
    if(shi==1 && ordi==0 || shi==2 && ordi==1 || shi==0 && ordi==2){
      console.log("gagner")
      this.gagne++
      this.res='gagne'
    }

  }
 shifumi(shi){
   if(shi==this.imgs[0]){
     //pierre
this.ordi(0)
     
   }
   if(shi==this.imgs[1]){
     //feille
this.ordi(1)

  }
  if(shi==this.imgs[2]){
     //ciseau
this.ordi(2)

  }
 }


}
