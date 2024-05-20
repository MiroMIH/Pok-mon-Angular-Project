import { Directive, ElementRef, HostListener ,Input} from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {


  private initialColor:string ='#f5f5f5';

  constructor(private el:ElementRef) 
  {
    this.setHeight(180);
    this.setBorderColor('#f5f5f5');
   }


  @Input('appBorderCard') borderColor:string;


  @HostListener('mouseenter')
  onMouseEnter()
  {

    //PROBABLY BEST TO IMPLEMENT THIS USIGN SWITCH CASE
    //MICRO OPTIMIZATION
    console.log(this.borderColor);
    if(this.borderColor=="Plante")
    {
    this.setBorderColor('GREEN');
    }
    if(this.borderColor=="Feu")
    {
    this.setBorderColor('red');
    }
    if(this.borderColor=="Eau")
    {
    this.setBorderColor('PURPLE');
    }
    if(this.borderColor=="Insecte")
    {
    this.setBorderColor('BROWN');
    }
    if(this.borderColor=="Electrik")
    {
    this.setBorderColor('yellow');
    }

  }

  @HostListener('mouseleave')
  onMouseLeave()
  {
    this.setBorderColor('#f5f5f5');
  }

  private  setHeight(height:number)
  {
    this.el.nativeElement.style.height=`${height}px`;
  }


  private  setBorderColor(color:string)
  {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
