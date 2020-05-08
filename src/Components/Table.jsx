import React, { useState, useEffect } from 'react';

function bubble(arr, key) {
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length-i-1; j++) {
      if(arr[j][key] > arr[j+1][key]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
}

const Table = (props) => {

  const [library, setLibrary] = useState(props.books);

  const sortByTitle = (e) => {
    const temp = [...library];
    bubble(temp, "title");
    setLibrary(temp);
  }

  const sortByAuthor = (e) => {
    const temp = [...library];
    bubble(temp, "author");
    setLibrary(temp);
  }

  useEffect( () => {
    setLibrary(props.books);
  }, [props.books]);

  return (
    <>
      <button className="btn btn-success" onClick={ sortByTitle }>Sort By Title</button>
      <button className="btn btn-primary" onClick={ sortByAuthor }>Sort By Author</button>
      <table className="table">
        <tbody>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
          {library.map( (book, i) => 
            <tr key={ i }>
              <td>{ book.title }</td>
              <td>{ book.author }</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Table;