export const initialState = {
    basket:[
        {
            id:'1100',
            title:'Game of Thrones',
            price:9.2,
            rating:5,
            image:"https://images.unsplash.com/photo-1616368309964-3a686de13b4d"
        },
        {
            id:'1101',
            title:'La Casa de Papel',
            price:9,
            rating:5,
            image:"https://images.unsplash.com/photo-1616368309964-3a686de13b4d"
        }
    ],
    user:null,
};
export const getBasketTotal = (basket) => basket?.reduce((amount,item) => item.price + amount, 0);


function reducer(state,action){
    //console.log("ACTION",action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            return { 
                ...state,
                basket:[...state.basket,action.item]
            }
        case 'REMOVE_FROM_BASKET':
            //Logic for removing item from basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if(index >=0){
                newBasket.splice(index,1); 
            }
            else{
                console.warn(`cant remove product (id:${action.id})`)
            }
            return { ...state,basket:newBasket, };
        default:
            return state;
    }
}

export default reducer;