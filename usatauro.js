window.onkeydown = function(e){
	if( e.keyCode == 13 && e.shiftKey ){
		t=document.getElementsByTagName("textarea")[0].value,ans="";
		var ans = "";
		var tmp = "";
		for( var i = 0; i < t.length; i++ ){
			if( t[i] === " " ){
				ans += tmp.split("").reverse().join("") + " ";
				tmp = "";
			}else if( t[i] === '\n' ){
				ans += tmp.split("").reverse().join("") + "\n";
				tmp = "";
			}else{
				tmp += t[i];
			}
		}
		ans += tmp.split("").reverse().join("");
		document.getElementsByTagName("textarea")[0].value = ans;
		document.getElementsByName("submit")[0].click();
	}
}
