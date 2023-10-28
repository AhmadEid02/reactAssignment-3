import React from 'react'
import { useState } from 'react'

const ButtonP = () => {
    const [bool, setbool] = useState(true);
    let hide = () => {
        bool?setbool(false):setbool(true)
    }
    return (
        <div>
            <button onClick={hide}>click me</button>
            {bool && <p>phar</p>}
        </div>
    )
}

export default ButtonP
