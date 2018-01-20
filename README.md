# rc4c-js
RC4C cipher, it's RC4 extension with two S-boxes on key and IV, and with 3 scrambling phases.

## Download
[Compress](https://raw.githubusercontent.com/schwarzlichtbezirk/rc4c-js/master/dist/rc4c.min.js)  
[Uncompress](https://raw.githubusercontent.com/schwarzlichtbezirk/rc4c-js/master/src/rc4c.js)

## Installation
You can also install rc4c by using Bower.

    bower install rc4c-js

## Usage
You can encrypt / decrypt message by single call rc4c(key, iv, str), or create object, then call setup-function and series of process calls.
```js
let c = new rc4c() // create cipher instance
c.setup("some-key", "some-iv") // setup key and IV for encryption
let s = "" // temporary storage
s += c.process("abcd") // add 1 chunk
s += c.process("1234") // add 2 chunk
console.log(s) // display encrypted result

s = rc4c("some-key", "some-iv", s) // decrypt storage by single explicit call
console.log(s) // display decrypted original
```
At output you can see:
```
.bfDÝEr
abcd1234
```

## License
Author: &copy; schwarzlichtbezirk (schwarzlichtbezirk@gmail.com)  
The project is released under the [MIT license](http://www.opensource.org/licenses/MIT).
