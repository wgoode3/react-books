import React, { useState } from 'react';


const Form = (props) => {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const readABook = (e) => {
    e.preventDefault();
    const newBook = {title, author};
    props.addANewBook( newBook );
    setTitle("");
    setAuthor("");
  }

  return (
    <form onSubmit={ readABook }>
      <div className="form-group">
        <label>Title</label>
        <input 
          type="text" 
          name="title" 
          value={ title }
          onChange={ (e) => setTitle(e.target.value) }  
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Author</label>
        <input 
          type="text" 
          name="author" 
          value={ author }
          onChange={ (e) => setAuthor(e.target.value) }
          className="form-control"
        />
      </div>
      <input type="submit" value="add book" className="btn btn-outline-info" />
    </form>
  );
}

export default Form;