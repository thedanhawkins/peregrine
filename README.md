# Peregrine
The Peregrine Falcon is the fastest member of the animal kingdom, https://en.wikipedia.org/wiki/Peregrine_falcon. Let's nick some of that speed for our web projects.

![Kickass Peregrine Falcon](http://www.audubon.org/sites/default/files/styles/wysiwyg_slide/public/sfw_66v8930_0.jpg?itok=tRoYAOE9 "Kickass Peregrine Falcon")
Photo: [Luke Massey](http://www.lmasseyimages.com/)
##Installation
*Ok here goes, I'm going to attempt to write a comprehensive guide to install this bad boy*

###1. Clone repo
Make sure you have [Github Desktop](https://desktop.github.com) installed. Then click the little button with an arrow pointing down on a computer. This downloads the repo to your computer and adds it to Github Desktop. You can now contribute to Peregrine by creating branches and submitting pull requests. But to start using Peregrine you should copy the Peregrine folder and rename it as per your project.

###2. Install the package
You will need to install [Node.js](https://nodejs.org/en/) and then get the latest version of npm by running the following command in terminal

`sudo npm install npm -g`

Now 'cd' to your project directory (the one you created from a copy in step 1) and run:

`sudo npm install`

This one may take a while. Once it's complete you should have all the npm packages required to use Peregrine.

###3. Run initial build
Peregrine needs to run it's first build process so that you have something to view in your browser. Run this in terminal:

`gulp build`

###4. Set up a virtual host on your local environment.
I recommend MAMP Pro for this, you should get a 30 day free trial when you download it. Set up a host that points to the child directory of `/dist` inside your project. If you had a project called 'peregrine' you would point to `{{file-path-to-your-project}}/peregrine/dist/peregrine/`

###5. Preview in your browser
If you set up MAMP and the virtual host correctly you should now be able to enter the name of the host in to your browser and see this page:

![Peregrine Welcome Page](http://imgur.com/RYaj3kU "Peregrine Welcome Page")

**Congrats! You've installed Peregrine!**
Enjoy making websites with it.