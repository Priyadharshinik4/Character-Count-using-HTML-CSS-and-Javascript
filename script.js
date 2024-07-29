function charcount(str) {
	let text = str.length;
    document.getElementById("one").innerHTML = 'Total Character: '+ text;
    document.getElementById("two").innerHTML = 'Remaining: '+(50-text);
    if(text>50)
    {
        alert("Character Count can't exceed...");
    }
}

