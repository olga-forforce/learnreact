import React, {useState} from "react";

export default function NameForm() {
    const [name, setName] = useState('Olha');
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.name.value);
    }
    const handleChange = (event) => {
        setName(event.target.value)
    }
    const onKeyDown = (event) => {
        if (event.keyCode === 81) {
            event.preventDefault();
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Имя:
                <input
                    value={name}
                    onChange={handleChange}
                    onKeyDown={onKeyDown}
                    id="name" type="text"/>

            </label>
            <button type="submit">Отправить</button>
        </form>
    )

}