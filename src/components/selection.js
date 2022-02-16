import { useState } from "react";
import '../App.css';
import { Item } from "./items";
export const Selection = () => {

    const [options , setOptions] = useState([
        {
            name:'football',
            selected: false,
            id:0
        },
        {
            name:'basketball',
            selected: false,
            id:1
        },
        {
            name:'tennis',
            selected: false,
            id:2
        }
    ])

    const selectHandler = (id) => {
        const newOptions = options.map(
            option => {
                if (option.id === id) {
                    return {
                        ...option,
                        selected: !option.selected
                    }
                } else {
                    return option;
                }
            }
        )

        setOptions(newOptions);
    }

    return (
        <div>
            <h1>Select your favorite sports</h1>
            {
                options.map(
                    (opt) => {
                        return <Item key={opt.id} opt={opt} selectHandler={selectHandler} />
                    }
                )
            }
        </div>
    )
}