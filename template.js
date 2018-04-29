
//templateJS 
//A library for dynamically making and changing the templates & elements of a webpage
// By Steven Williams

template = {

    make: el => document.createElement(el),
    add:  (parent, child) => parent.appendChild(child),
    place: el => { template.add("body", el); },

    el: (prnt, elem) => { 
        let m = template.make(el);
        template.add(prnt, m);
        },

    list: (arr, type) => { 
        if (type !== "ul" && type !== "ol"){
            return false;
        }
        var tmp;
       let lst =  template.make(type);
        a.forEach( item => {
            tmp = template.make("li"); 
            template.add(tmp, item); //todo test this
            template.add(lst, tmp);
        } );
    }
}
