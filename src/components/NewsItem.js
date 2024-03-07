import React from "react";

const NewsItem= (props) =>{
  

 
    let {title, description, imageUrl , newsUrl,author, date,source} = props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://www.svethardware.cz/tesla-charge-on-solar-aneb-chytre-nabijeni-elektromobilu-na-solarni-prebytky/60458/img/tesla-charge-on-solar-800.webp"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {" "}
              <p className="card-text">
                <small class="text-body-secondary">
                  {" "}
                  By {!author ? "Unknowm" : author} on{" "}
                  {new Date(date).toGMTString()}
                </small>
              </p>
              {description}
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
