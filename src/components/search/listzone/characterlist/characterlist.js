function CharacterList(props) {
    return(
        <li className="list-group-item txt-yellow bg-lightGrey text-start">
            <input type="submit" className="btn-list text-break" value={props.Character.name} />
        </li>
    );

}

export default CharacterList;