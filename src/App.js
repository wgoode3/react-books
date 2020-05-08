import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Components/Table';
import Form from './Components/Form';


function App() {

  const [books, setBooks] = useState([
    {title: "War and Peace", author: "Leo Tolstoy"},
    {title: "To Kill a Mockingbird", author: "Harper Lee"}
  ]);

  return (
    <div className="container"> 
      <div className="jumbotron">
        <h1>Books</h1>
      </div>
      <div className="row">
        <div className="col-4">
          <Form addANewBook={ newBook => setBooks( [ newBook, ...books ] ) }/>
        </div>
        <div className="col-8">
          <Table books={books} />
        </div>
      </div>
    </div>
  );
}

export default App;
