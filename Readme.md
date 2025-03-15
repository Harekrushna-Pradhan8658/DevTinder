# npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (devtinder-be)
version: (1.0.0)                                                  
description: DEVTINDER                                            
entry point: (index.js)                                           
test command:                                                     
git repository:                                                   
keywords: nodejs, javascript
author: Harekrushna Pradhan
license: (ISC)                                                    
About to write to C:\Users\pradh\OneDrive\Desktop\DevTinder-BE\package.json:

{
  "name": "devtinder-be",
  "version": "1.0.0",
  "description": "DEVTINDER",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "nodejs",
    "javascript"
  ],
  "author": "Harekrushna Pradhan",
  "license": "ISC"
}


Is this OK? (yes) yes

PS C:\Users\pradh\OneDrive\Desktop\DevTinder-BE> node app.js
node:internal/modules/cjs/loader:1143
  throw err;
  ^

Error: Cannot find module 'C:\Users\pradh\OneDrive\Desktop\DevTinder-BE\app.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1140:15)
    at Module._load (node:internal/modules/cjs/loader:981:27)     
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v18.20.5

# npm i express
# npm i -g nodemon