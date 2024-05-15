import React, {useState} from 'react';
function ToDo(props) {
    const [q, setQantity]=useState(1);
    const d =() => {
        if (q>1){
            setQantity(q-1);
        }
        else{
            setQantity(1);
        }
    };
    const i = () => {
        setQantity(q+1);
    };
    const b = () => {
        alert ("Вы заказали " + q + " пиццы");
    };

    return (
        <div className='fone' >
            <img  src={props.image1} alt="проблема(((" className="img_main"/>
            <p class="piz">{props.title}</p>
            <p className="tex">{props.text}</p>
            <select>
                <option selected='selected'>Диаметр</option>
                <option>30 см</option>
                <option>40 см</option>
            </select>
            <p className='rub'>{props.rub}</p>
            <div className='add'>
                <button className='mm' onClick={d}>-</button>
                <span className='kol'>{q}</span>
                <button className='pp' onClick={i}>+</button>
                <button className='buy' onClick={b}>КУПИТЬ!</button>
            </div>
        </div>
    );
}

export default ToDo;