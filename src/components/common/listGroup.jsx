import React from 'react';

const ListGroup = props => {
    const { items, textProperty, valueProperty, onItemSelect, selectedItem } = props;

    return ( 
    <ul className="list-group">
        {items.map(item => 
        (<li key={item[valueProperty]} 
        className={item === selectedItem ? "list-group-item active" : "list-group-item"}
        onClick={() => onItemSelect(item)}>
            {item[textProperty]}
        </li>))}
    </ul> );
}
// Va intégrer dans l'instance du composant directement ces propriétés ci-dessous
// afin de gagner en flexibilité
ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
};
 
export default ListGroup;