# Prismic-11ty-Netlify Minimalist Boilerplate
 
This is a work-in-progress minimal boilerplate that uses [Prismic CMS](https://prismic.io), [11ty static site generator](https://www.11ty.dev) and is hosted on [Netlify](https://netlify.com). It can be deployed and used for free within the free tiers offered by those services.

This boilerplace does not include any build tools for compiling/minifying your SASS/JavaScript, I want to keep it tool-agnostic for now, so you'll need to add these on top yourself.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/martinkz/1prismic-11ty-netlify)

## How to set up

You'll need a free Netlify and Prismic.io accounts. First set these up.

1. Fork this repository
2. In Netlify, use the 'New site from Git' button and choose the forked repository you just created
3. When you get to deploy & build settings, you need to add your Prismic repository as an environmental variable (see screenshots)

![Show advanced](https://raw.githubusercontent.com/martinkz/imagebank/master/prismic-11ty-netlify/netlify-setup-1.png)
![Add environmental variable](https://raw.githubusercontent.com/martinkz/imagebank/master/prismic-11ty-netlify/netlify-setup-2.png)
