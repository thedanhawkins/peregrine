# Peregrine
The Peregrine Falcon is the fastest member of the animal kingdom, https://en.wikipedia.org/wiki/Peregrine_falcon. Let's nick some of that speed for our web projects.

Peregrine is a starting point for your web development projects. It uses [Zurb's Foundation Framework](http://foundation.zurb.com) and [Gulp](http://gulpjs.com) to speed up your workflow. Use it create whatever you desire - websites, wordpress themes, web apps and more.

![Kickass Peregrine Falcon](http://www.audubon.org/sites/default/files/styles/wysiwyg_slide/public/sfw_66v8930_0.jpg?itok=tRoYAOE9 "Kickass Peregrine Falcon")
Photo: [Luke Massey](http://www.lmasseyimages.com/)

## Installation
*Ok here goes, I'm going to attempt to write a comprehensive guide to install this bad boy*

### 1. Clone repo
Make sure you have [Github Desktop](https://desktop.github.com) installed. Then click the little button with an arrow pointing down on a computer. This downloads the repo to your computer and adds it to Github Desktop. You can now contribute to Peregrine by creating branches and submitting pull requests. But to start using Peregrine you should copy the Peregrine folder and rename it as per your project.

### 2. Install the package
You will need to install [Node.js](https://nodejs.org/en/) and then get the latest version of npm by running the following command in terminal

`sudo npm install npm -g`

Now 'cd' to your project directory (the one you created from a copy in step 1) and run:

`sudo npm install`

This one may take a while. Once it's complete you should have all the npm packages required to use Peregrine.

### 3. Run initial build
Peregrine needs to run it's first build process so that you have something to view in your browser. Run this in terminal:

`gulp build`

### 4. Set up a virtual host on your local environment.
I recommend MAMP Pro for this, you should get a 30 day free trial when you download it. Set up a host that points to the child directory of `/dist` inside your project. If you had a project called 'peregrine' you would point to `{{file-path-to-your-project}}/peregrine/dist/peregrine/`

### 5. Preview in your browser
If you set up MAMP and the virtual host correctly you should now be able to enter the name of the host in to your browser and see this page:

![Peregrine Welcome Page](http://i.imgur.com/RYaj3kU.png "Peregrine Welcome Page")

**Congrats! You've installed Peregrine!**
Enjoy making websites with it.

## File structure
Everything you create for your project should be placed in `/assets`. There is space for:
* **Markup** - *html, php, whatever you fancy. This will get copied in to the root of your distributable project by Gulp*
* **Images** - *compressed and moved in to the distributable project by Gulp*
* **Stylesheets** - *all controlled via* `main.scss`*. This all gets concatenated and minified by Gulp*
* **Javascripts** - *you'll find* `app.js`* and *`helpers.js`* for your custom js and folders for vendor and extra js. Custom and vendor js gets concatenated and uglified by Gulp*
* **Fonts** - *place your font files here and they will get moved over to the distributable project by Gulp*

## Gulp tasks
Peregrine comes with a set of gulp tasks to speed up your build process.

### gulp (default task)
When you are developing your project this is your go-to task. The default task will process your markup, stylesheets and javascript.

### gulp build
The build task needs to be run to get your project started. It creates a clean distributable version of your project in `/dist` processing markup, stylesheets, javascript, fonts and images.

### gulp watch
This task will watch for any changes in `/assets` and run `gulp`, the default task, accordingly.

### gulp images
This task should be used when you add new images to your project. It will compress your images and put them in the `/dist`. This task is also run as part of `gulp build`.