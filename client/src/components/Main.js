import React from 'react'
import AllAuthors from './AllAuthors';
import { Link } from 'react-router-dom'

const Main = ({authors,setAuthors}) => {
  return (
    <>
        <Link to= '/new'>Add an Author</Link>
        <h1>We have quotes by:</h1>
        <AllAuthors authors={authors} setAuthors={setAuthors}/>
    </>
  )
}

export default Main