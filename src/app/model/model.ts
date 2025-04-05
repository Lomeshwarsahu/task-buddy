export class Model {
    userName: string | undefined;
    userPassword: string | undefined;
    // confirm_password: string | undefined;
    // otp: string | undefined;
    // otP_for:string | undefined;
}
export class Addproduct {
        productId!: number;
        productName!: string;
        productDescription!: string;
        productDiscountedPrice!: number;
        productActualPrice!: number;
        // productImages!: any;
        productImages!: ProductImage[];


    // {
    //     "productId": 0,
    //     "productName": "string",
    //     "productDescription": "string",
    //     "productDiscountedPrice": 0,
    //     "productActualPrice": 0,
    //     "productImages": [
    //       {
    //         "id": 0,
    //         "name": "string",
    //         "type": "string",
    //         "picByte": [
    //           "string"
    //         ]
    //       }
    //     ]
    //   }
}
export class ProductImage {
    id!: number;
    name!: string;
    type!: string;
    picByte!: string[];
}
