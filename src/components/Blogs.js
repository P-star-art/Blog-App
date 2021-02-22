import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearchInput, setBlogData } from '../features/userSlice';
import '../styles/Blogs.css';


const Blogs = () => {

    const userInput = useSelector(selectSearchInput);
    const blog_url = `https://gnews.io/api/v4/search?q=${userInput}&lang=en&token=cfc904c6b8439f0c442fb91117e50cd2`;
    const dispatch = useDispatch();

    const [blogs, setBlogs] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(blog_url)
            .then(response => {
                dispatch(setBlogData(response.data));
                setBlogs(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    }, [userInput])

    return (
        <div className="blog__page">
            <h1 className="blog__page__header">Blogs</h1>
            {loading ? <h1 className="loading">Loading...</h1> : ""}
            <div className="blogs">
                {blogs?.articles?.map(blog => (
                    <a className="blog" target="_blank" href={blog.url}>
                        <img src={blog.image} />
                        <div>
                            <h3 className="sourceName">
                                <a target="_blank" href={blog.source.url}>{blog.source.name}</a>
                                <span>{blog.publishedAt}</span>
                            </h3>
                            <h1>{blog.title}</h1>
                            <p>{blog.description}</p>
                        </div>
                    </a>
                ))}

                {blogs?.totalArticles == 0 && (
                    <h1 className="no__blogs"> No blogs available 😞. Search something else to read blogs on the
                    greatest platform.</h1>
                )}
            </div>
        </div>
    );
}

export default Blogs;