import React, { useState } from 'react';

function SetInput({ onClick }) {

    const [mission, setMission] = useState('')

    function handlingChange(event) {
        setMission(event.target.value)
    }

    return (
        <div>
            <input value={mission} onChange={handlingChange} type="text" />
            <button onClick={() => {
                onClick(mission); setMission('')
            }}>
                <span>Add</span>
            </button>
        </div>
    )
}
export default SetInput;