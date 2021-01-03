import React from 'react'
import ReactMarkdown from "react-markdown";

function Post({ image, description, likes } ){
    const API_URL = 'http://localhost:1330'
    const formatImageUrl = (url) => `${API_URL}${url}`

    return (
        <div className="bg-white rounded-lg shadow-lg w-full md:w-1/2">
            <img src={formatImageUrl(image.url)} alt={image.alternativeText} className="rounded-t-lg"/>
            <div className="p-4">
                <ReactMarkdown className="prose mb-4">{description}</ReactMarkdown>
                <div><span>Likes: {likes}</span></div>
            </div>
        </div>
    )
}

export default Post