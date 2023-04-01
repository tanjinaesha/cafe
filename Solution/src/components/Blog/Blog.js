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
<p>UseState returns a collection with these two values: the counter or state variable that contains the number  entered. The component will once more be rendered by React </p>
hi there
<h1>Purpose of useEffect other than fetching data.</h1>
<p>useEffect hook will send a network call. When that fetch resolves, the setState function will be used to set the server response to the local state. The component will then display as a result, updating the DOM with the new data.  </p>
<h1>How does React works?</h1>

        </>
    );
};

export default Blog;