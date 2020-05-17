# Prismic-11ty-Netlify Minimalist Boilerplate / Demo
 
This is a work-in-progress minimal boilerplate that uses [Prismic CMS](https://prismic.io), [11ty static site generator](https://www.11ty.dev) and is hosted on [Netlify](https://netlify.com). It can be deployed and used for free within the free tiers offered by those services.

This boilerplace does not include any build tools for compiling/minifying your SASS/JavaScript, I want to keep it tool-agnostic for now, so you'll need to add these on top yourself.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/martinkz/1prismic-11ty-netlify)

## How to set up

You'll need a free [Netlify](https://netlify.com) and [prismic.io](https://prismic.io) accounts. Set these up first.

### Set up Prismic

1. In your Prismic account, create a new repository. 
2. In your repository, create 2 custom types called Homepage and Page. Add a Title field (API ID 'title') to Homepage and a UID field to Page (API ID 'uid'). You can later change or remove these custom types or fields. This is just to get the demo site to work. The UID field on the pages is used as a slug (URL fragment).
3. Create a Homepage and a couple Pages. This is the data 11ty will use to build your site.
4. Find your API endpoing in your repository settings, you will need it when you're setting up Netlify.

![API Endpoint](https://raw.githubusercontent.com/martinkz/imagebank/master/prismic-11ty-netlify/netlify-setup-3.png)

### Deploy to Netlify

1. Fork this repository.
2. In Netlify, use the 'New site from Git' button and choose the forked repository you just created.
3. When you get to deploy & build settings, you need to add your Prismic repository API endpoint as an environmental variable (see screenshots below).

![Show advanced](https://raw.githubusercontent.com/martinkz/imagebank/master/prismic-11ty-netlify/netlify-setup-1.png)
![Add environmental variable](https://raw.githubusercontent.com/martinkz/imagebank/master/prismic-11ty-netlify/netlify-setup-2.png)
