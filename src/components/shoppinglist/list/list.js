function List(props) {
    let items = props.items.map((item) => <li className="list-group-item">{item}</li>);
    return (
        <ul classNameName="list-group list-group-flush">
            {items}
        </ul>
    );
}

export default List;