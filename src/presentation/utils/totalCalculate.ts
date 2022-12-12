import Product from "../../@types/Product";

export default function totalCalculate(items: Product[]){
    let total = 0;
    items.forEach((item: Product) => {
        total = total + (item.quantity*item.price);
    });
    return total;
}