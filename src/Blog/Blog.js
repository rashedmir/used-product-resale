import React from 'react';

const Blog = () => {
  return (
    <div>
      <div>
        <section className="bg-transparent dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-black dark:text-white">
              Questions
            </h2>
            <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-1">
              <div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-2xl font-medium text-black dark:text-white">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    What are the different ways to manage a state in a React
                    application?
                  </h3>
                  <p className="text-gray-600 text-xl dark:text-gray-400 text-justify">
                    There are four main types of state you need to properly manage
                    in your React apps: <br />
                    1. Local state, <br />
                    2. Global state, <br />
                    3. Server state, <br />
                    4. URL state
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-2xl font-medium text-black dark:text-white">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    How does prototypical inheritance work?
                  </h3>
                  <p className="text-gray-600 text-xl dark:text-gray-400 text-justify">
                    The Prototypal Inheritance is a feature in javascript used to
                    add methods and properties in objects. It is a method by which
                    an object can inherit the properties and methods of another
                    object. Traditionally, in order to get and set the Prototype
                    of an object, we use Object. getPrototypeOf and Object.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-2xl font-medium text-black dark:text-white">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    What is a unit test? Why should we write unit tests?
                  </h3>
                  <p className="text-gray-600 text-xl dark:text-gray-400 text-justify">
                    Unit Testing is a type of software testing where individual
                    units or components of a software are tested. <br /> They
                    enable you to catch bugs early in the development process.
                    Automated unit tests help a great deal with regression
                    testing. They detect code smells in your codebase. For
                    example, if you're having a hard time writing unit tests for a
                    piece of code, it might be a sign that your function is too
                    complex.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-2xl font-medium text-black dark:text-white">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    React vs. Angular vs. Vue?
                  </h3>
                  <p className="text-gray-600 text-xl dark:text-gray-400 text-justify">
                    Angular: <br /> Angular has a steep learning curve,
                    considering it is a complete solution, and mastering Angular
                    requires you to learn associated concepts like TypeScript and
                    MVC. Even though it takes time to learn Angular, the
                    investment pays dividends in terms of understanding how the
                    front end works. <br />
                    React: <br /> React offers a Getting Started guide that should
                    help one set up React in about an hour. The documentation is
                    thorough and complete, with solutions to common issues already
                    present on Stack Overflow. React is not a complete framework
                    and advanced features require the use of third-party
                    libraries. This makes the learning curve of the core framework
                    not so steep but depends on the path you take with additional
                    functionality. However, learning to use React does not
                    necessarily mean that you are using the best practices. <br />
                    Vue: <br /> Vue provides higher customizability and hence is
                    easier to learn than Angular or React. Further, Vue has an
                    overlap with Angular and React with respect to their
                    functionality like the use of components. Hence, the
                    transition to Vue from either of the two is an easy option.
                    However, simplicity and flexibility of Vue is a double-edged
                    sword — it allows poor code, making it difficult to debug and
                    test.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;