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
var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
po.src = 'https://apis.google.com/js/plusone.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();

// Facebook
(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Twitter
!function(d,s,id){
var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
if(!d.getElementById(id)){js=d.createElement(s);js.id=id;
js.src=p+'://platform.twitter.com/widgets.js';
fjs.parentNode.insertBefore(js,fjs);}}
(document, 'script', 'twitter-wjs');

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
    delay: 0
});
