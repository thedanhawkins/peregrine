<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>{{Page Title}}</title>
        <meta name="description" content="{{Page description}}">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <meta property="og:image" content="{{Page thumbnail URL}}"/>
        <!--[if lt IE 9]>
        <script src="https://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
        <!-- Touch Icons - iOS and Android 2.1+ 152x152 pixels in size. --> 
        <link rel="apple-touch-icon-precomposed" href="/assets/images/apple-touch-icon-precomposed.png">
        <!-- Firefox, Chrome, Safari, IE 11+ and Opera. 96x96 pixels in size. -->
        <link rel="icon" href="/assets/images/favicon.png">
        <link rel="stylesheet" href="/assets/stylesheets/main.css">
    </head>
    <body>
        <header id="site-header" class="site-hero">
            
        </header>
        <main class="site-content">
            <section class="row">
                <div class="small-12 colum">
                    <h1>Welcome to Peregrine!</h1>
                </div>
            </section>
            <section class="row">
                <div class="small-12 medium-4 colum">
                    <img src="http://www.audubon.org/sites/default/files/styles/wysiwyg_slide/public/sfw_66v8930_0.jpg?itok=tRoYAOE9" alt="Kickass Peregrine Falcon">
                </div>
            </section>
        </main>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script type="text/javascript" src="/assets/javascripts/foundation.min.js"></script>
        <script type="text/javascript" src="/assets/javascripts/main.js"></script>
        <script>
            jQuery(document).ready(function() {
                $(document).foundation();
                App.init();
            });
        </script>
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

          ga('create', '{{tracking-ID}}', 'auto');
          ga('send', 'pageview');

        </script>
    </body>
</html>
