# p5js-rogue
A small rogue-like game written in Javascript and p5js

[See the concept](concept/concept.md)

# Building/Running

The game is built using nodejs and gulp.
The distribution web-site is then opened in a Browser - it's static content so it can be served by any HTTP server, or simply opened in a file.

To install the tools (on CentOS 7):

    sudo yum install nodejs npm
    sudo npm install --global gulp
    npm install

To install the tools (on the Raspberry Pi):

    ??? - still working on this one... Raspberian Jesse contains a very old version of nodejs in apt-get

To build and run:

    gulp
    firefox build/dist/index.html &

There is also a edit/compile/run cycle. Currently you need to refresh the browser window after each change - I've not got Browsify working yet:

    gulp watch &
    firefox build/dist/index.html &

# Third-party components

The "p5.d.ts" and "p5.global-mode.d.ts" files in the "src/definitions" folder come from the
[Jess Klein and Atul Varma](https://github.com/toolness/friendly-error-fellowship/tree/gh-pages/experiments/typescript).
There appeared to be no license attached to this repository when it was accessed (1 April 2017).
