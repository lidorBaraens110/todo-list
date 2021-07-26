import React from 'react';

function Item(prop) {

    console.log(prop.item.done)
    return (
        <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', textDecoration: prop.item.done === true && 'line-through' }}>
            <span onClick={() => {
                prop.onChecked(prop.id)
            }} style={{
                // text-decoration: line-through

                textDecoration: prop.done === true && 'line-through'
            }}>
                {prop.item}
            </span>
            <button onClick={() => prop.delete(prop.id)} style={{ backgroundColor: 'transparent', fontSize: '2rem', fontWeight: '700' }}>-</button>
        </li >
    )
}
export default Item;