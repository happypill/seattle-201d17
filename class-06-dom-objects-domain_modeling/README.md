# Class 6: The DOM, Domain Modeling, and Introduction to Objects

<a id="top"></a>
# Today's Plan: Week 2, Monday Lecture

- Announcements
  - Sam has a meeting at 3:00 this afternoon, so he'll be out of lab for about 30-40 minutes.
  - There are two new classes starting today (401s in JS and Python). Up to this point we've been able to use our classroom as overflow lab space, but no more, because the JS 401 will be using our rooms in the afternoon. And with around 20+ students in the Python class sharing the co-working area with us in the afternoons, it's going to be **crowded**. So, when we finish class this morning, we'll need to vacate the classroom, and I suggest you go out and immediately try to establish (grab) yourself a spot in the co-working space while there are places available. We won't pair-program again until Wednesday at the soonest, so feel free to utilize any of the areas to the front of the space, such as the couches or the bar area way up in the front corner.
  - Let's have a quick conversation about the flow of Week 2 so you know what is coming, and how to think about managing your time.
  - We also need to talk about potential weather impacts on class this week, particularly Tuesday morning.

- [Go over student survey responses](student-comments.md)
- [Go over the domain modeling readings](#modeling)
- [The Document Object Model](#dom)

*15 minute break*

- [Object literals + lab prep](#objects)

# Readings

- [Article on Domain Modeling](https://github.com/codefellows/domain_modeling#domain-modeling) (Sobol)
- ["Understanding The Problem Domain Is The Hardest Part Of Programming"](http://simpleprogrammer.com/2013/07/15/understanding-the-problem-domain-is-the-hardest-part-of-programming/) (Sonmez)
- JS Chapter 3: "Functions, Objects, and Methods" (pp.101-144)
- JS Chapter 5: "The Document Object Model"

**Learning Objectives**

As a result of completing Day 6 of Code 201, students will:

- Be able to translate a real-world problem domain into a code model by using provided user stories and technical requirements, as measured by successful completion of the daily code assignment
- Demonstrate an understanding of how the browser represents an HTML document as an object that can be manipulated with JavaScript, as measured by successful completion of the daily code assignment and a quiz administered in Canvas.
- Use JavaScript to dynamically render array data as an unordered list in the DOM, as measured by successful completion of the daily code assignment
- Demonstrate an understanding of how object literals are structured in JavaScript, as well as how to access and reassign values/functionality to their properties and methods, as measured by successful completion of the daily code assignment and a quiz administered in Canvas.
- Demonstrate an understanding of how dot notation and bracket notation are used to access/reassign properties and methods in JavaScript objects, as measured by successful completion of the daily code assignment and a quiz administered in Canvas.

---

<a id="readings"></a>
### Go over the assigned readings

**Article on Domain Modeling (Sobol)**

- Domain modeling is the process of creating a conceptual model for a specific problem. And a domain model that's articulated well can verify and validate your understanding of that problem.
- Here's some tips to follow when building your own domain models:
  - When modeling a single entity that'll have many instances, build self-contained objects with the same attributes and behaviors.
  - Model its attributes with a constructor function that defines and initializes properties.
  - Model its behaviors with small methods that focus on doing one job well.
  - Create instances using the new keyword followed by a call to a constructor function.
  - Store the newly created object in a variable so you can access its properties and methods from outside.
  - Use the this variable within methods so you can access the object's properties and methods from inside.

**"Understanding The Problem Domain Is The Hardest Part Of Programming" (Sonmez)**

- Why problem domains are hard
- Programming is easy if you understand the problem domain

**JS Chapter 5: "The Document Object Model"**

- p.186: The DOM tree is a model of a web page (diagram on p.187)
- p.188: Overview working with the DOM tree (accessing elements, setting values, create, attributes)
- p.190: Caching DOM queries (i.e. variables)
- p.192: Accessing elements
- p.196: Nodelists: DOM queries that return more than one element
- p.208: Traversing the DOM
- p.212: How to get/update element content
- p.236: Examining the DOM in Chrome

[-top-](#top)

**JS Chapter 3: "Functions, Objects, and Methods" (pp.100-144)**

- p.101: Object literal notation
- p.102: Accessing an object and dot notation
- Using bracket notation for object access (not in Duckett book)
- p.106: Creating an object: constructor notation (‘this’ is shown but not explained)
- p.107: Updating an object
- p.108-112: Creating many objects: constructor notation (‘this’ explained on p.108)
- p.118: Arrays are objects
- p.119: Arrays of objects & objects in arrays
- p.120: What are built-in objects?
- p.124: Window object
- p.126: Document object
- p.128: String object
- p.130: Working with strings (concatenation)
- p.132: Number object
- p.134: Math object

---

<a id="code"></a>
### Live code & assignment overview

We'll go over the basics of this week's assignment and discuss how it is going to evolve. We'll also do a code demo to show some of the techniques that will be needed for lab today.

[-top-](#top)
