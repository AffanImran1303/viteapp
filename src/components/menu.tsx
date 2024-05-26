type Props={
    item:{
        name:string,
        quantity:number,
    };
}

const Menu=(props: Props)=>{

    return(

        <li className="flex gap-5 text-xl justify-between">
            <p>{props.item.name}</p>
            <span>{props.item.quantity}</span>
        </li>
    )
}
export default Menu;