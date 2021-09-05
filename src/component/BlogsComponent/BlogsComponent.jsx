import React from 'react';

const BlogsComponent = (props) => {
    return (
        <div className="post">
            <div className="img">
                <img src="https://i.ibb.co/18VWgdh/Apa-Itu-Internet-Marketing-TERBARU-1024x6221-1.jpg" className="gambarpaket" alt="internet-marketing" border="0" />
            </div>
            <div className="article">
                <p className="title">{props.data.title}</p>
                <p className="title">{props.data.desc}</p>
                <button className="delete" onClick={() => props.remove(props.data.id)}>Hapus post</button>
                <button className="update" onClick={() => props.update(props.data)}>Edit post</button>
            </div>
        </div>
    );
};

export default BlogsComponent;