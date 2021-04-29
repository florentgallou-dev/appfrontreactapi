function ListZone(props) {
    //Récupère la valeur envoyée par additem récupérée par shoppinglist dans le props et la stock dans une variable
    let items = ["Luke", "Leïa", "Lando", "C3P0", "Han", "Boba", "JarJar", "Palpatine"]
    items = items.map((item) => <li className="list-group-item txt-yellow bg-lightGrey text-start"><input type="submit" className="btn-list text-break" value={item} /></li>);
    
    return (
        <ul className="list-group list-group-flush p-3 my-5">
            {items}
        </ul>
    );
}

export default ListZone;