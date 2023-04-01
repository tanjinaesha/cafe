import React from 'react';

const Blog = () => {
    return (
        <>
            <h1>Pros Vs State</h1>
            <p>props
Properties, also known as props, refer to a component's setup. They come from above and are unchangeable in the eyes of the Component getting them. </p>
<p>state
When a Component mounts, a data structure called the state is created with a preset value</p>
<h1>how does UseState work?</h1>
<p>UseState returns a collection with these two values: the counter or state variable that contains the number you entered. The component will once more be rendered by React thanks to the state setter function's (setCounter) ability to change the state variable.</p>
hi there

        </>
    );
};

export default Blog;