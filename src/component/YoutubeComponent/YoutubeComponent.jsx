import react from "react";
import "./YoutubeComponent.css";

const YoutubeComponent = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img
          src="https://i.ytimg.com/vi/5kHyviqjhCk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDF0yuD_ntjcyW46BiPDkjd2v68dwx"
          alt=""
        />
      </div>
      <div className="">
        <p className="title">{props.title}</p>
        <span className="badge">{props.time}</span>
      </div>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

YoutubeComponent.defaultProps = {
  title: "Belajar ReactJS [Indonesia]",
  time: "00.00",
  desc: "xx kali ditonton, x hari yang lalu",
};

export default YoutubeComponent;
