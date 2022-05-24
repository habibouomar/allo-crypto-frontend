import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [name,setName] = useState('')
    const [bio,setBio] = useState('')
    const [text,setText] = useState('')
    const [errMsg,setErrMsg] = useState('')

    const Navigate = useNavigate();
    const nameChanger =(e)=>{
        e.preventDefault();
        setName(e.target.value)
    }
    
    const bioChanger =(e)=>{
        e.preventDefault();
        setBio(e.target.value)
    }
    
    const textChanger =(e)=>{
        e.preventDefault();
        setText(e.target.value)
    
    }

    const poster=(e)=>{
        e.preventDefault();
        fetch('http://localhost:3002/user', {
            method:'POST',
            headers:new Headers({"content-type":"application/json"}),
            body: JSON.stringify({
                userName:name,
                aboutMe:bio,
                picture:text
            })
        }).then(result=>result.json())
        .then(json=>{
            if(json.Error === false){
                setErrMsg('User Name Already exists')
                Navigate('')
            }else{

                console.log(json)
                console.log(json.result.userName)
                localStorage.setItem('userId', json.result._id)
                localStorage.setItem('userName', json.result.userName)
                localStorage.setItem('bio', json.result.aboutMe)
                Navigate('/home')
                setErrMsg('')
            }

           
        
        })
    }

  return (
    <div>
        <form action="">
            <div>
                <span style={{fonrSize:'20px',color:'black'}}>{errMsg}</span>
                <input type="name"  onChange={nameChanger}/>
            </div>
            <div>
                <textarea type="text" onChange={bioChanger}/>
            </div>
            <div>
                <input type="text" onChange={textChanger}/>
            </div>
            <div>
                <button onClick={poster}>submit</button>
            </div>
        </form>
    </div>
  )
}

export default Login
