import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearchInput, setBlogData } from '../features/userSlice';


const Blogs = () => {

    const userInput = useSelector(selectSearchInput);
    const blog_url = `https://gnews.io/api/v4/search?q=${userInput}&token=cfc904c6b8439f0c442fb91117e50cd2`;
    const dispatch = useDispatch();

    const [blogs, setBlogs] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(blog_url)
            .then(response => {
                console.log(response.data);
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
            <h1>dfhg</h1>
        </div>
    );
}

export default Blogs;