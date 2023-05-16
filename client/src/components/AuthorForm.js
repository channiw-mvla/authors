import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const AuthorForm = ({authors,setAuthors}) => 
    {
    const navigate = useNavigate();
    const [error, setError] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors',{"name":e.target.name.value})
        .then((res)=>{
            if(res.data.message !== undefined)
                setError(res.data.error.message)
            else
                navigate("/")
        })
        .catch((err)=>console.log(err));
        setAuthors([...authors,e.target.name.value])
    }
  return (
    <>
        <Link to={"/"}>Home</Link>
        <h1>Add a new author</h1>
        
        {
            error==="" ? <></>:<div className="alert alert-danger">{error}</div>
        }
        <form action="" onSubmit={e=>handleSubmit(e)}>
            <input type="text" name='name' className="form-control mb-3" placeholder='Name' />
            <button className="btn btn-primary">Submit</button>
        </form>
    </>
  )
}

export default AuthorForm