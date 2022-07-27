# node
node notes

//////// my notes ////////

NODE

Runs javascript on the OS / terminal instead of in a browser

MODULES, IMPORT/EXPORT

"
In programming, modules are self-contained units of functionality that can be shared and reused across projects. They make our lives as developers easier, as we can use them to augment our applications with functionality that we haven’t had to write ourselves. They also allow us to organize and decouple our code, leading to applications that are easier to understand, debug and maintain.
"

module.exports = // anything in here you wish to make available to other files. value(s), objects, functions, etc etc etc.

/* in the destination file: */ let taco = require('./folder/subfolder/filename');
// grab the export (i.e. the module) from that file

ONE module.exports LINE PER FILE

may be imported by any number of other files, any number of times

PATH TO IMPORT ALWAYS STARTS WITH ./

path to invoke does not require ./



