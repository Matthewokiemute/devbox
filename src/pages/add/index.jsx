import React from "react";
import "./Add.scss";

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" placeholder="e.g. I will do something I'm really good at" />
            <label htmlFor="category">Category</label>
            <select name="category" id="category">
              <option value="design">Graphic Design</option>
              <option value="development">Web Development</option>
              <option value="writing">Technical Writing</option>
              <option value="music">Music Editing</option>
              <option value="animation">Animation</option>
            </select>
            <label htmlFor="cover">Cover Image</label>
            <input type="file" />
            <label htmlFor="images">Upload Image(s)</label>
            <input type="file" multiple />
            <label htmlFor="description">Description</label>
            <textarea name="" id="" cols="30" rows="18" placeholder="Brief description to introduce your service to customers"></textarea>
            <button>Create Gig</button>
          </div>
          <div className="right">
            <label htmlFor="service">Service Title</label>
            <input type="text" placeholder="e.g. One-page web design" />
            <label htmlFor="short-description">Short Description</label>
            <textarea name="short-description" id="" cols="30" rows="10" placeholder="Short description of your service"></textarea>
            <label htmlFor="delivery">Delivery Time(e.g. 3 days)</label>
            <input type="number" min={1} />
            <label htmlFor="number">Revision Number</label>
            <input type="number" min={1} />
            <label htmlFor="features">Add Features</label>
            <input type="text" placeholder="e.g. page design" />
            <input type="text" placeholder="e.g. files uploading" />
            <input type="text" placeholder="e.g. setting up a domain" />
            <input type="text" placeholder="e.g. hosting" />
            <label htmlFor="price">Price</label>
            <input type="number" min={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
