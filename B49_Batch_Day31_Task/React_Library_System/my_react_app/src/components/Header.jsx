// Header.js
import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import AddBook from './AddBook'
import AddAuthor from './AddAuthor'

function Header() {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid bg-dark">
                    <a className="navbar-brand fw-bold mx-auto text-white py-1 fs-1" href="#">My Library Records</a>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-6  d-flex justify-content-end w-50 my-3">
                        <a className='btn btn-outline-info rounded fw-bold fs-3 text-decoration-none text-dark'><Link to="/" className='text-decoration-none text-dark'>Add Books</Link></a>
                    </div>
                    <div className="col-md-6 d-flex justify-content-start w-50 my-3">
                        <a className='btn btn-outline-info rounded fw-bold fs-3 text-decoration-none text-dark'><Link to="/authors" className='text-decoration-none text-dark'>Add Authors</Link></a>
                    </div>
                </div>
            </div>


            <Routes>
                <Route path='/' exact Component={AddBook}></Route>
                <Route path='/authors' Component={AddAuthor}></Route>

            </Routes>
        </>
    )
}

export default Header