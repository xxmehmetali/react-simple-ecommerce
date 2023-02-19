import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems : cartItems
}

export default function cartReducer(state = initialState, {type, payload}) {
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c => c.product.id === payload.id);
            if (product) {
                //ürün state te varolduğu için quantity arttırılıyor ancak state in geri döndürülmesi lazım componentlerin tekrar render edilebilmesi için.
                product.quantity++;
                return {
                    ...state
                }
            } else {
                return {
                    // state içinde ekstra proplar varsa ilk onları yazıyor
                    ...state, 
                    // daha sonrasında state içindeki cartItems ı eziyor alttaki satır ile
                    // ürün sepette olmadığı için statiik olarak 1 verildi
                    cartItems : [...state.cartItems, {quantity : 1, product : payload}]
                }
                // [{quantity: 1, product : {productName : "prod1"}}];
            }
            break;
        case REMOVE_FROM_CART:
            return {
                ...state,
                // silinmek istenen ürünler hariç yeni bir array referansı oluşturup onu atıyor. statein içini yazdırıyor ve alttaki satır ile stateten gelen cartitems i eziyor. 
                cartItems : state.cartItems.filter(c => c.product.id !== payload.id)
            }
            break;
        default:
            return state;
    }
}