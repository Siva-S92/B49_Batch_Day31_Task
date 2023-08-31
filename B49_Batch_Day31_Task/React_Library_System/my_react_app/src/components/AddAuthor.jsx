import React, { useEffect, useState } from 'react'
import author_data from './AuthorData';
import Header from './Header';

function AddAuthor() {
    
    const [data, setdata] = useState([...author_data])

    const handleSubmit = e => {
        e.preventDefault();
        const nameInput = document.getElementById("name");
        const birrthdateInput = document.getElementById("birthdate");
        const descriptionInput = document.getElementById("description");
        const name = nameInput.value.trim();
        const birthdate = birrthdateInput.value.trim();
        const description = descriptionInput.value.trim();
        if (name && birthdate && description) {
            author_data.push({ name, birthdate, description });
            setdata([...author_data])
        }else{
            alert("Please fill in all the fields correctly.");
        }

    };

    // function to handle edit button click
    function handleEditClick(event) {
        const index = event.target.getAttribute("data-index");
        console.log(index);
        const record = author_data[index];
        console.log(record);
    
        const nameInput = document.getElementById("name");
        const birthdateInput = document.getElementById("birthdate");
        const descriptionInput = document.getElementById("description");
    
        nameInput.value = record.name;
        birthdateInput.value = record.birthdate;
        descriptionInput.value = record.description;
    
        author_data.splice(index, 1);
        setdata([...author_data])
        
    }


    // Function to handle delete button click
    function handleDeleteClick(event) {
        const index = event.target.getAttribute("data-index");
        author_data.splice(index, 1);
        setdata([...author_data])
    }



    return (
        <>
            {/* <Header/> */}
            <div className="container mt-md-5">
                <h1>Add Authors</h1>
                <form id="crudForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Author Name:</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Birthdate:</label>
                        <input type="date" className="form-control" id="birthdate" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Description:</label>
                        <input type="text" className="form-control" id="description" />
                    </div>
                    <button type='submit' className="btn btn-primary my-2 px-5">Add Authors</button>
                    <table className="table mt-4 border">
                        <thead>
                            <tr>
                                <th>AuthorName</th>
                                <th>Birthdate</th>
                                <th>Description</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody id="dataRows">
                            {data.map((item, index)=> (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.birthdate}</td>
                                    <td>{item.description}</td>
                                    <td>
                                    <button type="button" className="btn btn-sm btn-info" data-index={index} onClick={handleEditClick}>Edit</button>
                                    <button type="button" className="btn btn-sm btn-danger mx-1"  data-index={index} onClick={handleDeleteClick}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    )
}

export default AddAuthor