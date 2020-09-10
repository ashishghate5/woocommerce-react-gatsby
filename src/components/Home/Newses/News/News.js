import React from 'react';
import blogImg from "../../../../assets/images/blog.png"

const News = () => {
  return (
    <div className="col-xs-6 col-sm-4">
      <div className="blog-item">
        <div className="blog-img">
          <a href="#" title="blog">
            <img src={blogImg} alt="image" />
          </a>
        </div>
        <div className="blog-content">
          <p className="para1"><a href="#" title="blog title">Préparer la rentrée</a></p>
          <p className="para2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla viverra
            neque pellentesque
          </p>
          <a href="#" title="Voir plus">Voir plus</a>
        </div>
      </div>
    </div>      
  );
}

export default News;
