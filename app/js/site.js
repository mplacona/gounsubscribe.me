// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-43498910-1', 'gounsubscribe.me');
ga('send', 'pageview');

// Gogle +1    
window.___gcfg = {lang: 'en-GB'};
(function() {
    var po = document.createElement('script'); 
    po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; 
    s.parentNode.insertBefore(po, s);
})();

// Facebook
(function() {
    var fb1 = document.createElement('script');
    fb1.type = 'text/javascript';
    fb1.async = true;
    fb1.src = 'http://connect.facebook.net/en_GB/all.js#xfbml=1', 'facebook-jssdk';
    var fb2 = document.getElementsByTagName('script')[0];
    fb2.parentNode.insertBefore(fb1, fb2);
})();


// Twitter
(function() {
    var twitterScriptTag = document.createElement('script');
    twitterScriptTag.type = 'text/javascript';
    twitterScriptTag.async = true;
    twitterScriptTag.src = 'http://platform.twitter.com/widgets.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(twitterScriptTag, s);
})();

// menu
(function(){
    var url = window.location;
    $('ul.nav a').filter(function() {
        return this.href == url;
    }).parent().addClass('active');
})();

// Rest of the site
function search() {
    location.href="#"+String(document.getElementById("siteName").value).toLowerCase().replace(/[^ a-z0-9]/g, '').replace(/\s+/g, '-');
}

openLink = function(link){
    window.open(link);  
}

var websites = []
var elements = document.getElementsByTagName("h2");
for (var i = 0; i < elements.length; i++){
    websites.push(elements[i].innerText);
}

$( "#siteName" ).autocomplete({
    source: websites,
    delay: 0,
    messages: {
        noResults: '',
        results: function() {}
    },
    select: function (event, ui) { search() },
}).keydown(function(e){
    if (e.keyCode === 13){
        search();
    }
});
