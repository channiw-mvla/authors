import React, { useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
const AllAuthors = ({authors,setAuthors}) => {
  useEffect(() => {
    axios.get('http://localhost:8000/api/authors')
    .then((res)=>setAuthors(res.data))
    .catch((err)=>console.log(err));
  },[]);
  
  const handleDelete = id => {
    axios.delete('http://localhost:8000/api/authors/'+id)
    .then(()=>setAuthors(authors.filter(author=>author._id!==id)))
    .catch((err)=>console.log(err));
  }
  
  return (
    <table className="table table-striped w-auto">
      <thead>
        <tr>
          <th>Author</th>
          <th>Actions Available</th>
        </tr>
      </thead>
      <tbody>

        {
          authors.map((author,index)=>{
            return( 
                <tr key={index}>
                  <th>
                    {author.name}
                  </th>
                  <th>
                    <Link to={"/edit/"+author._id}>
                      <button className="btn btn-primary">Edit</button>
                    </Link>
                    <button className="btn btn-danger mx-3" onClick={()=>handleDelete(author._id)}>Delete</button>
                  </th>
                </tr>
              
          )})
          
        }
      </tbody>
    </table>
  )
}

export default AllAuthors