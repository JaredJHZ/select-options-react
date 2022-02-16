export const Item = ({opt, selectHandler}) => {
    let cl = "option " + (opt.selected ? 'selected' : '');
    return (
        <li className={cl} onClick={(event) => selectHandler(opt.id)}>
            {opt.name}
        </li>
    );
}