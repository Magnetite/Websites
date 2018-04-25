
//templateJS 
//A library for dynamically making and changing the template of a webpage
// By Steven Williams

template = {

    make: el => document.createElement(el),
    add:  (parent, child) => parent.appendChild(child),
    place: el => { template.add("body", el); }
}
