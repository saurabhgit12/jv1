let p_no = document.querySelector(".passengerNO");
let p_no_html = p_no.innerText;
let inc_btn = document.querySelector(".btn1");
let save_btn = document.querySelector(".btn1");
inc_btn.addEventListener('click', function(){
	p_no.innerText = ++p_no_html

	console.log(p_no_html);
})


