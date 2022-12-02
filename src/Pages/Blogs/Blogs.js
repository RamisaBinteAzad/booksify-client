import React from 'react';

const Blogs = () => {
    return (
      <div className="text-center">
        <h2 className="text-4xl font-bold pt-9 mb-8">
          <span className="text-primary">All</span>  Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  mt-16 mx-auto container mb-9 px-10  gap-6  ">
          <div className="card p-4 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-primary">
                What are the different ways to manage a state in a React
                application?
              </h2>
              <p className="text-xs my-5">
                There are four main types of state you need to properly manage
                in your React apps: Local state, Global state, Server state, and
                URL state. <br />
                Local state is data we manage in one or another component. Local
                state is most often managed in React using the useState hook.
                <br />
                Global state is necessary when we want to get and update data
                anywhere in our app, or in multiple components at least.
                <br />
                Server state is a simple concept, but can be hard to manage
                alongside all of our local and global UI state.
                <br />
                URL state – Data that exists on our URLs, including the pathname
                and query parameters.
              </p>
            </div>
          </div>
          <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-primary">
                React vs. Angular vs. Vue?
              </h2>
              <p className="text-xs my-5">
                Angular is a front-end framework with lots of components,
                services, and tools. On Angular’s site, you can see that they
                define Angular as: “The modern web developer’s platform” It is
                developed and maintained by Google developers, but curiously it
                is not used to implement any of their most common products such
                as Search or YouTube. React is considered a UI library. They
                define themselves as: “A JavaScript library for building user
                interfaces” Facebook developers are behind the development and
                maintenance of this library. And, in this case, most of
                Facebook’s products are made with React. Last but not least,
                Vue.js is, according to its site: “A progressive JavaScript
                framework” Vue.js is developed and led by Evan You, but also it
                counts on a huge open-source community.
              </p>
            </div>
          </div>
          <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-primary">
                What is a unit test? Why should we write unit tests?
              </h2>
              <p className="text-xs my-5 ">
                The main objective of unit testing is to isolate written code to
                test and determine if it works as intended. Unit testing is an
                important step in the development process, because if done
                correctly, it can help detect early flaws in code which may be
                more difficult to find in later testing stages.”.
              </p>
            </div>
          </div>
          <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-primary">
                What is a unit test? Why should we write unit tests?
              </h2>
              <p className="text-xs my-5 ">
                The main objective of unit testing is to isolate written code to
                test and determine if it works as intended. Unit testing is an
                important step in the development process, because if done
                correctly, it can help detect early flaws in code which may be
                more difficult to find in later testing stages.”.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blogs;