import { NgFor, CommonModule, NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Base } from 'src/app/helper/base';
import { Addproduct, ProductImage } from 'src/app/model/model';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,ToastrModule, NgFor,CommonModule, NgStyle,NavbarComponent],
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {
  imageUrl: string | ArrayBuffer | null = null;
  // addproduct:Addproduct[]=[];
  productImage:ProductImage[]=[];
  addproduct: Addproduct = new Addproduct();
  selectedFiles: File[] = [];
  base:any;
  AddProductFrm:FormGroup;
  constructor(private router: Router,private formBuilder: FormBuilder,
    private ApiService: ApiServiceService,private http: HttpClient,private toastr: ToastrService,
  ) {
    this.base = Base;
    this.AddProductFrm = this.formBuilder.group({
      productName: ['', [Validators.required]],
      productDescription: ['', [Validators.required]],
      productDiscountedPrice: ['', [Validators.required]],
      productActualPrice: ['', [Validators.required]],
      // productImages: ['', [Validators.required]],
    })
  }
  ngOnInit(): void {
  }
  get formControl() {
    return this.AddProductFrm.controls;
  }
  // 'https://task-buddy-ylrx.onrender.com/products/addNewProduct' \
  onSubmit() {
    try{
      debugger;
      // this.submitted = true;
      const formdata = this.AddProductFrm.value;
      this.addproduct=formdata;
      this.addproduct.productImages=this.productImage;
      // this.AddProductFrm.productImages=this.productImage

      console.log(JSON.stringify(this.addproduct));
      // this.selectedFiles
      if (this.AddProductFrm.valid == true) {
        this.ApiService.post('products/addNewProduct',this.addproduct).subscribe((res: any) => {
            

            console.log(JSON.stringify(res));
           
          
          
           } ,
          (err: Error) => {
          //  debugger
          //  throw err;
          console.log(err);
          // alert("Please Check userId and password!");
          // this.toastr.error("Please Check userId and password!",'Error');
          //  alert(err.message)
         }
       );
      } 
      else 
      alert('Something went wrong, please try again')
      //  this.toastr.error('Something went wrong, please try again!', 'Error!');
    }
    catch(err:any){
      throw err;
    }
  }

  onFileSelected(event: any): void {
    // debugger;
    const file = (event.target as HTMLInputElement).files?.[0];
    // this.selectedFiles = event.target.files;
    this.productImage = event.target.files;
    if (file) {

      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
