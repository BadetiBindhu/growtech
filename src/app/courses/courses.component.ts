import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  title1="Mean Full Stack Developer ";
  title2="Data Science";
 technologies = [
  {
    id: 1,
    title: "HTML",
    category: "frontend",
    description: "HyperText Markup Language is the standard language used to create the structure of web pages and web applications. It defines the meaning and structure of web content.",
    img: "https://img.icons8.com/color/96/html-5.png"
  },
  {
    id: 2,
    title: "CSS",
    category: "frontend",
    description: "Cascading Style Sheets is used to control the layout and appearance of HTML elements, including colors, fonts, spacing, and responsiveness.",
    img: "https://img.icons8.com/color/96/css3.png"
  },
  {
    id: 3,
    title: "JavaScript",
    category: "frontend",
    description: "A versatile scripting language that enables interactive web pages and dynamic functionality such as animations, form validation, and real-time updates.",
    img: "https://img.icons8.com/color/96/javascript.png"
  },
  {
    id: 4,
    title: "TypeScript",
    category: "frontend",
    description: "A superset of JavaScript that adds static typing, interfaces, and other features, helping developers catch errors during development and build scalable applications.",
    img: "https://img.icons8.com/color/96/typescript.png"
  },
  {
    id: 5,
    title: "ES6",
    category: "frontend",
    description: "Also known as ECMAScript 2015, ES6 introduced modern JavaScript features like arrow functions, classes, template literals, promises, and modules.",
    img: "https://img.icons8.com/color/96/javascript--v2.png"
  },
  {
    id: 6,
    title: "Bootstrap",
    category: "frontend",
    description: "A powerful front-end framework for designing responsive and mobile-first websites using ready-to-use components, grid systems, and JavaScript plugins.",
    img: "https://img.icons8.com/color/96/bootstrap.png"
  },
  {
    id: 7,
    title: "TailwindCSS",
    category: "frontend",
    description: "A utility-first CSS framework that enables rapid UI development with minimal custom CSS by using predefined classes for layout, spacing, and styling.",
    img: "https://img.icons8.com/color/96/tailwindcss.png"
  },
  {
    id: 8,
    title: "React",
    category: "frontend",
    description: "A JavaScript library developed by Facebook for building fast and interactive user interfaces using a component-based architecture and virtual DOM.",
    img: "https://img.icons8.com/color/96/react-native.png"
  },
  {
    id: 9,
    title: "NextJS",
    category: "frontend",
    description: "A React-based framework that provides features like server-side rendering, static site generation, API routes, and better performance optimization for web apps.",
    img: "https://img.icons8.com/color/96/nextjs.png"
  },
  {
    id: 10,
    title: "Angular",
    category: "frontend",
    description: "A robust front-end web application framework maintained by Google that supports MVC architecture, two-way data binding, and large-scale enterprise applications.",
    img: "https://img.icons8.com/color/96/angularjs.png"
  },
  {
    id: 11,
    title: "ExpressJS",
    category: "backend",
    description: "A minimalist Node.js web framework used for building RESTful APIs and web applications quickly and efficiently with robust routing and middleware support.",
    img: "https://img.icons8.com/ios/96/express-js.png"
  },
  {
    id: 12,
    title: "NodeJS",
    category: "backend",
    description: "An open-source, cross-platform JavaScript runtime environment that executes JavaScript code on the server, enabling full-stack JavaScript development.",
    img: "https://img.icons8.com/color/96/nodejs.png"
  },
  {
    id: 13,
    title: "MongoDB",
    category: "database",
    description: "A NoSQL document database that stores data in flexible, JSON-like documents. Ideal for handling large volumes of unstructured or semi-structured data.",
    img: "https://img.icons8.com/color/96/mongodb.png"
  },
  {
    id: 14,
    title: "SQL",
    category: "database",
    description: "Structured Query Language is used for managing and querying relational databases, enabling precise control over data manipulation and structure.",
    img: "https://img.icons8.com/color/96/sql.png"
  },
  {
    id: 15,
    title: "GitHub",
    category: "tools",
    description: "A web-based platform for version control using Git, enabling collaboration, code sharing, pull requests, and issue tracking across development teams.",
    img: "https://img.icons8.com/ios-glyphs/96/github.png"
  },
  {
    id: 16,
    title: "Firebase",
    category: "backend",
    description: "A Backend-as-a-Service (BaaS) platform by Google offering real-time databases, authentication, cloud functions, and hosting for web and mobile apps.",
    img: "https://img.icons8.com/color/96/firebase.png"
  },
  {
    id: 17,
    title: "REST API",
    category: "backend",
    description: "REST (Representational State Transfer) API is an architectural style for designing networked applications. It uses HTTP requests to perform CRUD operations and is stateless, scalable, and easy to implement.",
    img: "https://www.javacodegeeks.com/wp-content/uploads/2024/01/rest-api-icon.png"
  }
];
technologiesds= [
    {
        "id": 1,
        "title": "python",
        "description": "A high-level, interpreted programming language known for its readability and versatility.",
        "category": "library",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
        "id": 2,
        "title": "NumPy",
        "description": "A fundamental package for scientific computing with Python, enabling fast array operations.",
        "category": "library",
        "img": "https://numpy.org/images/logo.svg"
    },
    {
        "id": 3,
        "title": "Pandas",
        "description": "A data manipulation and analysis library that provides data structures like DataFrame.",
        "category": "library",
        "img": "https://miro.medium.com/v2/resize:fit:300/0*IeKuNMsyN2vPzJFp.png"
    },
    {
        "id": 4,
        "title": "Matplotlib",
        "description": "A comprehensive library for creating static, animated, and interactive visualizations in Python.",
        "category": "library",
        "img": "https://students.c-sharpcorner.com/uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_171730799692.jpg"
    },
    {
        "id": 5,
        "title": "Seaborn",
        "description": "A Python data visualization library based on matplotlib that provides high-level interface for drawing attractive graphics.",
        "category": "library",
        "img": "https://seaborn.pydata.org/_images/logo-tall-lightbg.svg"
    },
    {
        "id": 6,
        "title": "Linear Regression",
        "description": "A supervised learning algorithm used for predicting a continuous dependent variable.",
        "category": "ml-model",
        "img": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Linear_regression.svg"
    },
    {
        "id": 7,
        "title": "Logistic Regression",
        "description": "A classification algorithm used to predict binary outcomes using a logistic function.",
        "category": "ml-model",
        "img": "https://miro.medium.com/v2/resize:fit:800/1*zLfpo6F_Bfi6uvRL6iLX_Q.jpeg"
    },
    {
        "id": 8,
        "title": "Decision Tree",
        "description": "A tree-like model used to make decisions based on feature splits in the dataset.",
        "category": "ml-model",
        "img": "https://upload.wikimedia.org/wikipedia/commons/f/f3/CART_tree_titanic_survivors.png"
    },
    {
        "id": 9,
        "title": "Random Forest",
        "description": "An ensemble learning method using multiple decision trees for improved accuracy and stability.",
        "category": "ml-model",
        "img": "https://upload.wikimedia.org/wikipedia/commons/7/76/Random_forest_diagram_complete.png"
    },
    {
        "id": 10,
        "title": "AdaBoost",
        "description": "A boosting technique that combines multiple weak learners to form a strong classifier.",
        "category": "ml-model",
        "img": "https://upload.wikimedia.org/wikipedia/commons/1/1a/AdaBoost.png"
    },
    {
        "id": 11,
        "title": "Gradient Boosting",
        "description": "A machine learning technique for regression and classification using decision trees sequentially.",
        "category": "ml-model",
        "img": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Gradient_boosting_regression_tree_example.png"
    },
    {
        "id": 12,
        "title": "XGBoost",
        "description": "An optimized distributed gradient boosting library designed to be highly efficient and flexible.",
        "category": "ml-model",
        "img": "https://upload.wikimedia.org/wikipedia/commons/0/05/XGBoost_logo.png"
    }
];

}
