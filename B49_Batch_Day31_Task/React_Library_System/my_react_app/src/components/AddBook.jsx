import React, { useState } from 'react'
import book_data from './BookData'
import author_data from './AuthorData';
import Header from './Header';

function AddBook() {

    const [book, addbook] = useState([...book_data])


    const handleAddbook = e => {
        e.preventDefault();
        const titleInput = document.getElementById("title");
        const authorInput = document.getElementById("author");
        const isbnInput = document.getElementById("isbnNumber");
        const publishinput = document.getElementById("publisheddate");
        const title = titleInput.value.trim();
        const author = authorInput.value.trim();
        const isbn = isbnInput.value.trim();
        const publishdate = publishinput.value.trim();
        if (title && author && isbn && publishdate) {
            book_data.push({ title, author, isbn, publishdate });
            addbook([...book_data])
        }else{
            alert("Please fill in all the fields correctly.");
        }

    };




    function handleEditBook(event) {
        const index = event.target.getAttribute("data-index");
        console.log(index);
        const record = book_data[index];
        console.log(record);
    
        const titleInput = document.getElementById("title");
        const authorInput = document.getElementById("author");
        const authoroption = document.getElementsByName(book_data[index].author);
        const isbnInput = document.getElementById("isbnNumber");
        const publishinput = document.getElementById("publisheddate");
    
        titleInput.value = record.title;
        authorInput.select  = authoroption;
        isbnInput.value = record.isbn;
        publishinput.value = record.publishdate;
    
        book_data.splice(index, 1);
        addbook([...book_data])
        
    }


    function handleDeleteBook(event) {
        const index = event.target.getAttribute("data-index");
        book_data.splice(index, 1);
        addbook([...book_data]);
    }





    return (
        <>
            {/* <Header/> */}
            <div className="container mt-md-5">
                <h1>Add Books</h1>
                <form id="crudForm" onSubmit={handleAddbook} >
                    <div className="form-group">
                        <label htmlFor="name">Title:</label>
                        <input type="text" className="form-control" id="title"/>
                    </div>

                    <div>
                        <label htmlFor="author">Author:</label><br />
                        <select id="author" className='w-100 form-control my-1'>
                            {
                                author_data.map((items, index) => (
                                    <option name={items.name} value={items.name} key={index}>{items.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="isbnNumber">IsbnNumber:</label>
                        <input type="text" className="form-control" id="isbnNumber"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="publisheddate">Published Date:</label>
                        <input type="date" className="form-control" id="publisheddate"/>
                    </div>

                    <button type='submit' className="btn btn-primary my-2 px-5">Add Books</button>

                </form>


                <div>
                    <div className="row">
                        {
                            book_data.map((val, indexes) => (
                                <div className="col-md-6" key={indexes}>
                                    <div className="card mt-5">
                                        <h5 className="card-header">book-{indexes + 1}</h5>
                                        <div className="card-body">
                                            <h5 className="card-title mb-3">Title:{val.title}</h5>
                                            <p className="card-text">It is a <span className='fw-bold'>{val.genre}</span> categorized book, and it's ISBN number is <span className='fw-bold'>{val.isbn}</span>.</p>
                                            <p className="card-text">Author:{val.author}</p>
                                            <p className="card-text">Published Date:{val.publishdate}</p>
                                            <div>
                                                <button type="button" className="btn btn-sm px-5 btn-outline-info" data-index={indexes} onClick={handleEditBook} >Edit</button>
                                                <button type="button" className="btn mx-1 btn-sm px-5 opacity-75 btn-outline-danger" data-index={indexes} onClick={handleDeleteBook} >Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddBook