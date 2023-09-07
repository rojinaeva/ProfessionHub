import React from 'react';

const Blog = () => {
    return (
        <div className='mt-20 mb-12 bg-current p-12'>
          <p className='mt-2 text-green-600 font-semibold font-serif text-xl'>Q:When should you use context API?
           <p className='text-base text-white mt-4 '>A:Context is typically utilized when multiple components at various nesting levels require access to the same data. It should be used with discretion because it makes component reuse more difficult. Component composition is typically a simpler approach than context if you simply want to avoid providing some props over several layers.</p>
           </p>
          <p className='mt-2 text-green-600 font-semibold font-serif text-xl'>Q:What is a custom hook?
           <p className='text-base text-white mt-4 '>A:A custom hook is a JavaScript function that begins with 'use' and can be used to invoke other hooks. Let's look at some of the key distinctions between a custom React JS hook and React JS components: A custom hook does not require a signature.</p>
           </p>
          <p className='mt-2 text-green-600 font-semibold font-serif text-xl'>Q:What is useRef?
           <p className='text-base text-white mt-4 '>A:The built-in React hook useRef(initialValue) receives one argument as the initial value and returns a reference (aka ref). A reference is an object with the unique property current.</p>
           </p>
          <p className='mt-2 text-green-600 font-semibold font-serif text-xl'>Q:What is useMemo?
           <p className='text-base text-white mt-4 '>A:UseMemo Hook can be used to prevent costly, resource-intensive processes from running indefinitely. In this example, we have a costly function that executes on every render. When you change the count or add a todo, you will notice a delay in execution.</p>
           </p>
        </div>
    );
};

export default Blog;