import React, {useState} from 'react';

function Input(props) {

    let [valueInput, setValueInput] = useState(props.field.value);

    const onChangeInput = (evt) => {
        setValueInput(evt.target.value)
        props.onChange(evt)
    }

    return (
        <input id={`auth-input-${props.field.name}`}
               onChange={onChangeInput}
               name={props.field.name}
               value={valueInput}
               className={props.className}
               type={props.field.type}
               placeholder={props.field.placeholder}
               required={props.field.required}
               pattern={props.field.regexp}
        />
    )
}

export default Input