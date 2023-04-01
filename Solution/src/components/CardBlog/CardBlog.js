import React, { useState } from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import   '../Header/Header.css'

  import 'react-toastify/dist/ReactToastify.css';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'

const CardBlog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);

  const handleMark = (id) => {
    const updatedBlogs = blogs.map((blog) => {
      if (blog.id === id) {
        return {
          ...blog,
          timeSpent: blog.timeSpent + parseInt(blog.readTime),
        };
      }
      return blog;
    });
    setBlogs(updatedBlogs);
  };

  const handleBook = (id) => {
    toast("You Have Already Bookmarked This Blog");
    const updatedBlogs = blogs.map((blog) => {
     
      if (blog.id === id) {
        return {
          ...blog,
          bookmarked: !blog.bookmarked,
          
        };
      }
      return blog;
    });
    setBlogs(updatedBlogs);

    const bookmarkedBlog = blogs.find((blog) => blog.id === id);
    if (bookmarkedBlog.bookmarked) {
      setBookmarkedBlogs([...bookmarkedBlogs, bookmarkedBlog]);
    } else {
      const filteredBlogs = bookmarkedBlogs.filter(
        (blog) => blog.id !== bookmarkedBlog.id
      );
      setBookmarkedBlogs(filteredBlogs);
    }
    
  };

  return (
    <div className="d-flex display">
    
      <div className="card-container  text-center w-100 col-md-6 p-5">
        {blogs.map((blog) => (
          <div className="card w-50 m-5" key={blog.id}>
        
            <img src={blog.coverImage} alt={blog.title} /> 
           
            <div className="card-body ">
            <div className="d-flex">
            <div className="card-header d-flex">
                <img  className="profile1"src={blog.authorImage} alt={blog.author} />
                <p >{blog.author}<p >{blog.publishDate}</p>
                 </p>
                
                
              </div>
              <p className="time">{blog.readTime}</p>
              <button  className="mark btn" onClick= {() => handleBook(blog.id,blog.bookmarked)}>
              <FontAwesomeIcon icon={faBookBookmark} />
                  
                </button>
            </div>
              
             
                
                  
                
              <h3 >{blog.title}</h3>
            
              <div >
                <button className="btn" onClick={() => handleMark(blog.id)}>
                  Mark as read
                </button>
                
              </div>
            </div>
          </div>
        ))}
      </div>
      

      <div className="side ">
        <h3>Bookmarked Blogs ({bookmarkedBlogs.length})</h3>
        <ul>
          {bookmarkedBlogs.map((blog) => (
            <li key={blog.id}>{blog.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardBlog;
