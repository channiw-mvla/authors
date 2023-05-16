import React, { useEffect, useState } from 'react'
import { Link, useNavigate,useParams } from 'react-router-dom'
import axios from 'axios'
const EditAuthor = ({authors,setAuthors}) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [author, setAuthor] = useState([])
    const [error, setError] = useState("")
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/"+id)
        .then(res => setAuthor(res.data))
        .catch(err => console.log(err))
        } 
    , [])
    const handleSubmit = e =>{
        e.preventDefault();
        axios.patch("http://localhost:8000/api/authors/"+id,{"name":e.target.name.value})
        .then(res => { 
            console.log(res.data)
            if(res.data.message !== undefined)
                setError(res.data.error.message)
            else
                navigate("/")
            })
        .catch(err => console.log(err))
        
    }
    
  return (
    <>
        <Link to={"/"}>Home</Link>
        <h1>Edit this Author:</h1>
        {
            error==="" ? <></>:<div className="alert alert-danger">{error}</div>
        }
        <form action="" onSubmit={e=>handleSubmit(e)}>
            <input name='name' type="text" className="form-control mb-3" defaultValue={author.name} placeholder={author.name}/>
            <button className="btn btn-primary">Update</button>
        </form>
    </>
  )
}

export default EditAuthor