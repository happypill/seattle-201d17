# Hints/Tips for the Wirefeame Exercise

## Selecting Elements

A key part of effective CSS is not overdoing it. You do not need to apply classes or IDs to every element you want to manipulate with CSS; you can reach what you need with selectors that target elements of an individual type. ***Keep in mind that every class and ID you add contributes to the complexity of your code, and code that is more complex has more things in it that can break.*** So, strive to be resourceful.

Review page 238 in the Duckett HTML book. And also review how cascading and inheritance works.

Here are some alternate approaches to just using a bunch of IDs and classes that rely on how your HTML is structured.

```
li {
    something you do to all <li> elements;
}
```
... or selectors that target an element type that is a descendant of another...

```
header img {
    stuff you to the only the <img> that are inside the <header>
}
```

...remembering you can go down layers with those...

```
header ul li {
    stuff you do to the <li> elements inside of <ul>s inside the <header>
}
```

...and also target only elements of a particular type within a class...

```
.right p {
    this only affects <p> tags with a class of "right"
}

and

.featured_section img {
    stuff
}
```

...or a specific element within a group such as...

```
.always_three li:last-child {
    stuff
}
```

...and do not foget the button behavior!

```
button:hover {
   this is the state of the button after you hover over it
}
```

**HINT:** Those are all things you can use. My solution has them all; but some are there just to show off, and you may find a solution for selecting an element that makes more sense to you. There are additional selectors I use that are similar to the ones above, but are not shown.

In my solution, here are all of the classes and IDs that are being used:

```
<nav class="inner">

<main>
  <ul class="always_three">

<section class="featured_section">
  <article class="right">
```

Yep, only 4 classes. And no IDs. Total number of selectors: 16.

## Styling Elements

Again, strive for simplicity. The more that is there, the more that can break or cause unexpected interactions.

Here are some CSS rules that I am using. Each group shown is contained somewhere inside individual selectors, and is also the entirety of the rules applying to that selector:

```
{
  height: 320px;
  overflow: auto;
  font-size: 18px;
  font-style: italic;
  line-height: 24px;
 }

--------

{
  clear: both;
  background: #444;
  height: 150px;
}

--------


{
  display: inline-block;
  margin-top: 40px;
  margin-right: 75px;
}

--------


{
  float: left;
  width: 50%;
}

--------

{
  text-decoration: none;
  color: #888;
}
```

OK, there you go with lots of breadcrumbs and hints! We'll flesh this out on Monday. My total CSS... just over 90 lines.
