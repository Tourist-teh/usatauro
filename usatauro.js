window.onkeydown = function(e){
	if( e.keyCode == 13 && e.shiftKey ){
		w=document.getElementsByTagName("textarea")[0].value,ans="";
		for(var i=0; i<w.split(" ").length; i++){ans+=w.split(" ")[i].split("").reverse().join("")+" ";} document.getElementsByTagName("textarea")[0].value = ans;
		document.getElementsByName("submit")[0].click();
	}
}