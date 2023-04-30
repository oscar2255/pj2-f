import React from "react";
import "./index.css";
import Post from "./Post.jsx";
import img1 from './javalogo.png';


const Posts = () => {
   
    const blogPosts = [
        {
          
            title: "Post 1 example",
            body: `JavaScript is a widely-used programming language that is primarily used to create web pages that are interactive and dynamic. It is a client-side scripting language, 
      meaning that it is executed on the user's computer rather than on the server. This allows for faster processing and greater flexibility. JavaScript can be used for a wide variety of purposes, 
      including creating forms, validating input, and adding animations and effects to web pages. It is often used in conjunction with other web development technologies such as HTML and CSS to create dynamic and 
      engaging websites. Additionally, JavaScript has an extensive library of pre-built functions and plugins, making it easy for developers to implement complex features quickly and efficiently. 
       Overall, JavaScript is an essential component of modern web development and is a must-learn language for anyone interested in creating dynamic and interactive web pages.`,
            author: "oscar gonzales" ,
            imgUrl:
                "https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png",
        },
        {

            title: "Post 2 example",
            body: `JavaScript is a widely-used programming language that is primarily used to create web pages that are interactive and dynamic. It is a client-side scripting language, 
      meaning that it is executed on the user's computer rather than on the server. This allows for faster processing and greater flexibility. JavaScript can be used for a wide variety of purposes, 
      including creating forms, validating input, and adding animations and effects to web pages. It is often used in conjunction with other web development technologies such as HTML and CSS to create dynamic and 
      engaging websites. Additionally, JavaScript has an extensive library of pre-built functions and plugins, making it easy for developers to implement complex features quickly and efficiently. 
       Overall, JavaScript is an essential component of modern web development and is a must-learn language for anyone interested in creating dynamic and interactive web pages.`,
            author: "oscar gonzales",
            imgUrl:
                "https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png",
        },
        
        {

            title: "Post 3 example",
            body: `JavaScript is a widely-used programming language that is primarily used to create web pages that are interactive and dynamic. It is a client-side scripting language, 
      meaning that it is executed on the user's computer rather than on the server. This allows for faster processing and greater flexibility. JavaScript can be used for a wide variety of purposes, 
      including creating forms, validating input, and adding animations and effects to web pages. It is often used in conjunction with other web development technologies such as HTML and CSS to create dynamic and 
      engaging websites. Additionally, JavaScript has an extensive library of pre-built functions and plugins, making it easy for developers to implement complex features quickly and efficiently. 
       Overall, JavaScript is an essential component of modern web development and is a must-learn language for anyone interested in creating dynamic and interactive web pages.`,
            author: "oscar gonzales",
            imgUrl:
                "https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png",
        },
        {

            title: "Post 4 example",
            body: `JavaScript is a widely-used programming language that is primarily used to create web pages that are interactive and dynamic. It is a client-side scripting language, 
      meaning that it is executed on the user's computer rather than on the server. This allows for faster processing and greater flexibility. JavaScript can be used for a wide variety of purposes, 
      including creating forms, validating input, and adding animations and effects to web pages. It is often used in conjunction with other web development technologies such as HTML and CSS to create dynamic and 
      engaging websites. Additionally, JavaScript has an extensive library of pre-built functions and plugins, making it easy for developers to implement complex features quickly and efficiently. 
       Overall, JavaScript is an essential component of modern web development and is a must-learn language for anyone interested in creating dynamic and interactive web pages.`,
            author: "oscar gonzales",
            imgUrl:
                "https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png",
        },
    ];

    return (
        <div className="wrap">
          
            {blogPosts.map((post, index) => (
                <Post key={index} index={index} post={post} />

            ))}
        </div>

    );
};

export default Posts;