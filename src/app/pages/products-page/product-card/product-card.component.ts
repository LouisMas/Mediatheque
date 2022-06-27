import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input()
  produit: any;

  @Input()
  typeProduct: string="";

IMG_DEFAULT : string =  "https://imgs.search.brave.com/UTL4VUoIdQ7FHKtAXpRLDCAcdyAlLPtCyQo24GWoxA8/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC50/aThXVzdhNEg2emJs/RGlEN2pMalVRSGFG/aiZwaWQ9QXBp" ;

  constructor() { }

  ngOnInit(): void {

    console.log(this.produit)
    
  }

}
