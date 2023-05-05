//=========================================================================//
//----------------------------  THE DOM  ----------------------------------// 
//=========================================================================//

// Document
// Object
// Model

// getElementById ---------------------------------------------------------//
// RETURNS an Element object representing the element with the id property

// document.getElementById()


// getElementByTagName ----------------------------------------------------// 

// document.getElementByTagName()


// getElementByClassName --------------------------------------------------// 

// document.getElementByClassName()


// querySelector ----------------------------------------------------------// 
// only gets us the first match

// document.querySelector()

//Example:

// document.querySelector(".className")

// document.querySelector("#idName")

// to select an image or element based on their position among siblings
// of the same type (tag name)
// Example:
// document.querySelector("img:nth-of-type(image number based on position)")

// to select by type and attribute
// Example:
// document.querySelector("attribute[title="titleName")

// /* <a> elements with an href matching "https://example.org" */
// a[href="https://example.org"]
// {
//   color: green;
// }

// /* <a> elements with an href containing "example" */
// a[href*="example"] {
//   font-size: 2em;
// }

// /* <a> elements with an href ending ".org" */
// a[href$=".org"] {
//   font-style: italic;
// }

// /* <a> elements whose class attribute contains the word "logo" */
// a[class~="logo"] {
//   padding: 2px;
// }

// <a href="/wiki/Java" title="Java">Java</a>
// document.querySelector("a[title='Java']")

// querySelectorAll -------------------------------------------------------// 
// same idea, but returns a collection of matching elements


//=========================================================================//
//---------------------------  PROPERTIES  --------------------------------// 
//-------------------------------  &  -------------------------------------// 
//----------------------------  METHODS  ----------------------------------//
//=========================================================================//

// the important ones:
// classList         // innerText()
// getAttribute()    // textContent
// setAttribute()    // innerHTML
// appendChild()     // value
// append()          // parentElement
// prepend()         // children
// removeChild()     // nextSibling
// remove()          // previousSibling
// createElement     // style

// innerHTML, textContent, innerText --------------------------------------// 
// you can manipulate and change the inner value of an element

// Example:
// document.querySelector("h1").innerHTML += "lalalala"
// += adds to it
// document.querySelector("h1").innerHTML = "lalalala"
// = overwrites

// innerHTML: 
// retrieves the full contents including the tagNames inside an element

// textContent:
// gives us all the text because it's not sensitive to what is hidden

// innerText:
// gives us the text and is sensitive to what is displayed or hidden


// attributes -------------------------------------------------------------// 

// changing an attribute
// document.querySelector(attributeName).attribute = newAttribute

// Example changing an id
// document.querySelector(#currentIdName).id = "newIdName"

// Example changing a link
// document.querySelector("a").href = "newIdName"

// or use getAttribute() and setAttribute() 

// retrieves directly from HTML using getAttribute()

// you can change an attribute with setAttribute() 
// (.setAttribute("attribute", "newAttribute"))

// Example: 
// const h2 = document.querySelector("h2")
// h2.getAttribute("class")
// h2.setAttribute("class", "border")

// manipulating styles ----------------------------------------------------// 

// to make specific changes
// Example changing style of an h1 element
// h1.style.color = "green"
// h1.style.fontSize = "3em"
// etc...

// to show the style
// window.getComputedStyle(attribute).styleType
// Example:
// window.getComputedStyle(h1).color  //retrives the style as a string


// ClassList --------------------------------------------------------------// 

// you can add a class
// Example: 
// h2.classList.add("border")
// h2.classList.add("purple")

// you can remove a class
// Example: 
// h2.classList.remove("purple")

// checking to see if it contains something
// Example: 
// h2.classList.contains("purple") // returns false

// to toggle classes
// h2.classList.toggle("purple") // returns false
// h2.classList.toggle("purple") // returns true
// h2.classList.toggle("purple") // returns false
// and so on... (it's like an on and off switch)

// Traversing Parent/Child/Sibling ----------------------------------------// 

// .parentElement (traversing upwards)
// can only have one parent element

// .children (lists of children)
// .children[numberOfChild] Example: .children[0] will show the first child
// can have more than one child element

// .previousSibling
// .nextSibling
// gives us the corresponding node

// .nextElementSibling
// gives us the next adjacent sibling
// allows us to navigate to the next element 
// better when you don't need the spaces inbetween


// Append & AppendChild ---------------------------------------------------// 

// Example of adding an image:
const newImg = document.createElement("img")
newImg.src = "https://imagelink.com"
// but not on the page yet, so you append it
document.body.appendChild(newImg) // will append the img as body's child
// last child of the body
// you can style the image with a class (if needed)
newImg.classList.add("className")

// note: you need to create an empty element first before changing it, etc...
//      then append it (so it appears on the page)

// Element.append() 
// not available in internet explorer
// more flexible
// appends to the end (easy way to add text)

// Element.prepend()
// appends to the front

// Element.insertAdjacentElement()
// "beforebegin": before targetElement
// "afterbegin": inside targetElement, before its first child
// "beforeend": inside targetElement, after its last child
// "afterend": after targetElement


// Example: 
const h1 = document.querySelector("h1")
h1.insertAdjacentElement("afterend", h2) 

// or

const h3 = document.createElement("h3")
h3.innerText = "I am h3"
h1.after(h3) // goes after h1 
h1.before(h3) // goes before h1


// removeChild & remove ---------------------------------------------------// 

var oldChild = node.removeChild(child);

OR 

node.removeChild(child)

// child is the child node to be removed
// node is the parent node of child
// oldChild holds reference to the removed child node

const b = document.querySelector('b') // select it first and put it variable
b.parentElement.removeChild(b)
// looks at the parentElement of b

//or

// node.remove()
// ChildNode.remove() method removes the object from the tree it belongs to
// better practice