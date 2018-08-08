
//templateJS 
//A library for dynamically making and changing the templates & elements of a webpage
// By Steven Williams

template = {

    make: el => document.createElement(el),
    add:  (parent, child) => parent.appendChild(child),
    place: el => { this.add("body", el); },

    el: (prnt, elem) => { 
        let m = this.make(el);
        this.add(prnt, m);
        },

    list: (arr, type) => { 
        if (type !== "ul" && type !== "ol"){
            return false;
        }
        var tmp;
       let lst =  this.make(type);
        a.forEach( item => {
            tmp = this.make("li"); 
            this.add(tmp, item); //todo test this
            this.add(lst, tmp);
        } );
    }
}
