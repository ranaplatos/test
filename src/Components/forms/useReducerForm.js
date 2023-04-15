import { formAction } from "./useActionform"

export const initialSTATE = {
    title:"",
    desc: "",
    price: 0,
    category: "",
    tags:[],
    quantity:0,
}

export const formReducer = (state,action) => {
    switch(action.type){
        case formAction.CHANGE_INPUT:
            return{
                ...state,
                [action.payload.name]: action.payload.value
            }
            case formAction.ADD_TAG:
                return{
                    ...state,
                    tags: [...state.tags,action.payload]
                }
                case formAction.REMOVE_TAG:
                    return{
                        ...state,
                        tags: state.tags.filter((t)=>t!==action.payload)
                    }
                    case formAction.DECREASE_QUANTITY:
                        return{
                            ...state,
                            quantity: state.quantity-1
                        }
                        case formAction.INCREASE_QUANTITY:
                            return {
                                ...state,
                                quantity: state.quantity+1
                            }
                            default:
                                return state;
    }
} 

