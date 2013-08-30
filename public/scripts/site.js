(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-43498910-1', 'gounsubscribe.me');
    ga('send', 'pageview');

function search() {
    location.href="#"+String(document.getElementById("siteName").value).toLowerCase().replace(/[^ a-z0-9]/g, '').replace(/\s+/, '-');
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
