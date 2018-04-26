
//templateJS 
//A library for dynamically making and changing the templates & elements of a webpage
// By Steven Williams

template = {

    make: el => document.createElement(el),
    add:  (parent, child) => parent.appendChild(child),
    place: el => { template.add("body", el); },
    list: (arr, type) => { 
        if (type !== "ul" && type !== "ol"){
            return false;
        }
       let lst =  template.make(type);
        a.forEach( item => template.add(lst, item) );
    }
}
