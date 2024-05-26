import Menu from './menu.tsx';

const Cart = ()=>{
    return (
        <section className="max-w-md mx-auto">
            <h1>Menu Checkout</h1>
            <ul>
            <Menu item={{name:"Qourma",quantity:1}}/>
            <Menu item={{name:"Karahi",quantity:2}}/>
            <Menu item={{name:"Naan",quantity:5}}/>
            <Menu item={{name:"Cake",quantity:1}}/>
            </ul>
        </section>
        
    )
}
export default Cart;