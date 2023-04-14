import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
            <div className="flex flex-col w-full border-opacity-50">
                   <div className="grid h-[120px] text-5xl font-semibold card bg-base-300 rounded-box place-items-center">Blogs</div>
                </div>
            </div>
           <div className='my-6'>
            <h1 className='text-2xl font-semibold'>1. When should you use context API?</h1>
            <p>Ans: The Context API in React is used to share data between components without having to pass props through every level of the component tree. It allows to create a context object that holds the data you want to share, and any component can access that data by "subscribing" to the context using the useContext hook. This makes your code more efficient and easier to manage.</p>
           </div>
           <div className='my-6'>
            <h1 className='text-2xl font-semibold'>2. What is a custom hook?</h1>
            <p>Ans: A custom hook is a function in React that allows you to reuse common logic across multiple components in your application. It helps to avoid code duplication, create reusable and composable code, and make your codebase more maintainable.</p>
           </div>
           <div className='my-6'>
            <h1 className='text-2xl font-semibold'>3. What is useRef?</h1>
            <p>Ans: useRef is a hook in React that allows functional components to store mutable values that persist across component renderings. It provides an object with a current property that can be used to store and access a mutable value. This value can be updated without causing a component re-render.</p>
           </div>
           <div className='my-6'>
            <h1 className='text-2xl font-semibold'>4. What is useMemo?</h1>
            <p>Ans: useMemo is a hook in React that optimizes the performance of functional components by memoizing the results of expensive calculations. It works by computing a memoized value only when one of its dependencies changes. This helps avoid the unnecessary repetition of expensive calculations on each component render, making your code more efficient.</p>
           </div>
        </div>
    );
};

export default Blog;