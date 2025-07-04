export default [
  {
    id: "q1",
    text: "What is React, and why would you use it?",
    answers: [
      "React is a JavaScript library for building user interfaces. It is used to create reusable UI components and manage application state.",
      "React is a full framework for building web applications.",
      "React is a templating engine for generating HTML.",
      "React is used only for mobile app development.",
    ],
  },
  {
    id: "q2",
    text: "What are components in React?",
    answers: [
      "Components are independent, reusable pieces of UI that can be composed together to create complex UIs.",
      "Components are JavaScript objects that store data for the application.",
      "Components are a part of React's state management system.",
      "Components are only used to display static content in React applications.",
    ],
  },
  {
    id: "q3",
    text: "What is JSX in React?",
    answers: [
      "JSX is a syntax extension that allows you to write HTML-like code within JavaScript.",
      "JSX is a template engine used in React to create dynamic pages.",
      "JSX is a tool for managing state in React applications.",
      "JSX is a React-specific JavaScript framework.",
    ],
  },
  {
    id: "q4",
    text: "What is the Virtual DOM and how does it work?",
    answers: [
      "The Virtual DOM is a lightweight copy of the actual DOM, used to improve performance by minimizing direct DOM manipulations.",
      "The Virtual DOM is used to handle HTTP requests in React.",
      "The Virtual DOM is a debugging tool that helps identify issues in React applications.",
      "The Virtual DOM is a JavaScript library that helps manage state in React apps.",
    ],
  },
  {
    id: "q5",
    text: "What is the difference between state and props in React?",
    answers: [
      "State is a mutable data structure that belongs to the component and can be updated, while props are immutable and passed from parent components.",
      "State is used to define the layout of a component, while props are used to manage the app's data.",
      "State is used for styling components, while props handle interactions.",
      "State and props are the same, but one is for data and the other is for events.",
    ],
  },
  {
    id: "q6",
    text: "How can you conditionally render content in React?",
    answers: [
      "By using JavaScript conditional operators like if, ternary, or logical && inside the render method.",
      "By using a custom syntax in JSX, similar to PHP.",
      "By applying different classes in the CSS to show or hide elements.",
      "By using React's built-in lifecycle methods to determine when to display content.",
    ],
  },
  {
    id: "q7",
    text: "What is React's Context API and when would you use it?",
    answers: [
      "The Context API allows you to pass data through the component tree without having to manually pass props at every level.",
      "The Context API is used for managing React's internal state.",
      "The Context API helps handle routing in React applications.",
      "The Context API is used to interact with third-party APIs in React.",
    ],
  },
  {
    id: "q8",
    text: "What is the use of React Hooks?",
    answers: [
      "React Hooks allow you to use state and lifecycle features in functional components.",
      "React Hooks are only used for optimizing the performance of React applications.",
      "React Hooks allow for easier styling of components.",
      "React Hooks are used to connect React components to Redux.",
    ],
  },
  {
    id: "q9",
    text: "What is the purpose of useEffect in React?",
    answers: [
      "useEffect is used to handle side effects, such as fetching data or manipulating the DOM, in functional components.",
      "useEffect is used to manage state in React components.",
      "useEffect is used to handle UI updates in real-time.",
      "useEffect is used to set up event listeners in React components.",
    ],
  },
  {
    id: "q10",
    text: "What is the difference between controlled and uncontrolled components in React?",
    answers: [
      "Controlled components are components whose state is managed by React, while uncontrolled components manage their own state internally.",
      "Controlled components are only used for form elements, while uncontrolled components are for all other elements.",
      "Controlled components use refs to manage their state, while uncontrolled components don't.",
      "Controlled components use useState, while uncontrolled components rely on class components.",
    ],
  },
  {
    id: "q11",
    text: "What are higher-order components (HOCs) in React?",
    answers: [
      "Higher-order components are functions that take a component and return a new component with additional props or behavior.",
      "Higher-order components are used to manage state in React.",
      "Higher-order components are a type of React hook.",
      "Higher-order components are used to handle side effects in React.",
    ],
  },
  {
    id: "q12",
    text: "What is the role of keys in React lists?",
    answers: [
      "Keys help React identify which items have changed, been added, or removed in a list, improving performance.",
      "Keys are used to define the order of list items in React.",
      "Keys are required for using React Hooks.",
      "Keys are used to define event handlers in lists.",
    ],
  },
  {
    id: "q13",
    text: "What are React Fragments and when would you use them?",
    answers: [
      "Fragments allow you to group multiple elements without adding extra nodes to the DOM.",
      "Fragments are used to handle form data in React.",
      "Fragments are a way to render multiple components as a single element.",
      "Fragments are used to create reusable components in React.",
    ],
  },
  {
    id: "q14",
    text: "What is Redux, and how does it integrate with React?",
    answers: [
      "Redux is a state management library that allows you to manage the global state of your application outside of React's component state.",
      "Redux is used for handling routing in React applications.",
      "Redux is a tool for managing the DOM in React.",
      "Redux is a React-specific routing library.",
    ],
  },
  {
    id: "q15",
    text: "What is the use of useMemo in React?",
    answers: [
      "useMemo is used to memoize expensive calculations, optimizing performance by preventing unnecessary recalculations.",
      "useMemo is used to store the state of a component.",
      "useMemo is used to handle form data in React.",
      "useMemo is used to fetch data in React applications.",
    ],
  },
  {
    id: "q16",
    text: "How does React handle events?",
    answers: [
      "React uses a synthetic event system that normalizes events across different browsers.",
      "React events are directly linked to the DOM elements.",
      "React events are based on the native DOM event system without modification.",
      "React does not handle events; it relies on JavaScript libraries for event management.",
    ],
  },
  {
    id: "q17",
    text: "What is the difference between useState and useReducer in React?",
    answers: [
      "useState is used for simple state management, while useReducer is used for more complex state logic involving multiple sub-values.",
      "useState is used for managing form data, while useReducer is for managing global state.",
      "useState can only be used in class components, while useReducer is used in functional components.",
      "useState manages state globally, while useReducer is for local component state.",
    ],
  },
  {
    id: "q18",
    text: "What is the purpose of the React Router?",
    answers: [
      "React Router is used to handle navigation and routing in React applications.",
      "React Router is used to manage state in React applications.",
      "React Router is a library for managing form inputs in React.",
      "React Router is used to handle HTTP requests in React applications.",
    ],
  },
  {
    id: "q19",
    text: "What are prop drilling and how do you avoid it?",
    answers: [
      "Prop drilling occurs when you pass props through many layers of components, and it can be avoided by using Context API or state management libraries like Redux.",
      "Prop drilling is the process of managing state within a single component.",
      "Prop drilling happens when state is too large to fit into a single component.",
      "Prop drilling is a technique for optimizing React performance by reducing unnecessary renders.",
    ],
  },
  {
    id: "q20",
    text: "What are the benefits of using TypeScript with React?",
    answers: [
      "TypeScript provides static typing, which helps catch errors early and improves code maintainability.",
      "TypeScript improves the rendering speed of React components.",
      "TypeScript is used to manage React state in large applications.",
      "TypeScript allows you to write React code in a more modular fashion.",
    ],
  },
];
