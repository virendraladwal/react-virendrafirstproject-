import React, { useState, useEffect} from "react";

function Form() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [createdby, setCreatedby] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem("blogs"));
    if (savedBlogs) {
      setBlogs(savedBlogs);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingIndex === -1) {
      // Create a new blog
      const newBlog = { name, description, createdby };
      setBlogs([...blogs, newBlog]);
      localStorage.setItem("blogs", JSON.stringify([...blogs, newBlog]));
    } else {
      // Update an existing blog
      const updatedBlogs = [...blogs];
      updatedBlogs[editingIndex] = { name, description, createdby };
      setBlogs(updatedBlogs);
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
      setEditingIndex(-1);
    }

    // Reset the input values
    setName("");
    setDescription("");
    setCreatedby("");
  };

  const handleEdit = (index) => {
    // Set the input values to the selected blog's content
    setName(blogs[index].name);
    setDescription(blogs[index].description);
    setCreatedby(blogs[index].createdby);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedBlogs = [...blogs];
    updatedBlogs.splice(index, 1);
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };


// form>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
        <h5>Name:</h5>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
        <h5>Description:</h5>
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <br />
        <label>
          <h5>createdby</h5>
          <input
            type="text"
            value={createdby}
            onChange={(event) => setCreatedby(event.target.value)}
          />
        </label>
        <br />
        <button type="submit"></button>
        {/* {editingIndex === -1 ? "Submit" : "Update"}</button>
        {editingIndex !== -1 && <button onClick={() => setEditingIndex(-1)}>Cancel</button>} */}
      </form>
{/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>
            <p>Name: {blog.name}</p>
            <p>Description: {blog.description}</p>
            <p>Created by: {blog.createdby}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Form;