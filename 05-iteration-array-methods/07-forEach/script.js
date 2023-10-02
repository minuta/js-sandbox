"use strict";

const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// View prototype chain
console.log(socials.__proto__);

socials.forEach(function (item) {
    console.log(item);
});
