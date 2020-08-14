function pop() {
	var b_top = document.getElementById('b_top');
	var body = document.getElementsByTagName('body')[0];
	var b_left = document.getElementById("b_left");
	var b_right = document.getElementById("b_right");
	var card = document.getElementById("card");
	if (b_top.style.display == "none") {
		b_top.style.display = "block";
		body.style.backgroundImage = "url(textures/background.jpg)";
		b_left.style.display = "none";
		b_right.style.display = "none";
		card.style.display = "none";

	}else{
		b_top.style.display = "none";
		body.style.backgroundImage = "url(textures/shop/bg_shop.png)";
		b_left.style.display = "block";
		b_right.style.display = "block";
		card.style.display = "block";

	}
}
function cz(){
	var body = document.getElementsByTagName('body')[0];
	var purple = document.getElementById("purple");
	var d_cz = document.getElementById("d_cz");
	console.log(purple)
	
	if (b_top.style.display == "none") {
		d_cz.style.display = "block";
		// body.style.opacity = "0.5";
		// d_cz.style.opacity = "1";
	}else{
		d_cz.style.display = "none";
		body.style.opacity = "1";

	}
}
function close1(){

	var d_cz = document.getElementById("d_cz");
	d_cz.style.display = "none";
}
function bag(){
	var d_bag = document.getElementById("d_bag");
	if (b_top.style.display == "none") {
		d_bag.style.display = "block";
	}else{
		d_bag.style.display = "none";

	}

}
function close2(){
	var d_bag = document.getElementById("d_bag");
	d_bag.style.display = "none";
}