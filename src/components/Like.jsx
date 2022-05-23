import React, { useEffect } from 'react'

const Like = (props) => {
    const likerId = props.likerId
    const filterId = props.filterId
    const isTrue = props.isTrue
    if (isTrue) {
        fetch('http://localhost:3002/post', {
            method: 'PUT',
            headers: new Headers({ "content-type": "application/json" }),
            body: JSON.stringify({
                likerId: likerId,
                filterId: filterId
            })
        }).then(result => result.json())
            .then(json => {
                console.log(json)
            })
    } else {
        console.log('UNDONE')
    }
    // }

    return (
        <div>
            <p>{props.filterId}</p>
            <p></p>
        </div>
    )
}

export default Like