import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService {
    itens: CartItem[] = []

    clear(){
        this.itens = []
    }

    addItem(item:MenuItem){
        let foundItem = this.itens.find((mItem) => mItem.menuItem.id === item.id)
        if(foundItem){
            this.increaseQty(foundItem)
        }else{
            this.itens.push(new CartItem(item))
        }
    }

    increaseQty(item: CartItem){
        item.quantity = item.quantity + 1
    }

    decreaseQty(item: CartItem){
        item.quantity = item.quantity - 1
        if (item.quantity === 0){
            this.removeItem(item)
        }
    }

    removeItem(item: CartItem){
        this.itens.splice(this.itens.indexOf(item), 1)
    }

    total(): number{
        return this.itens.map(item => item.value()).
        reduce((prev, value) => prev+value, 0)
    }
}