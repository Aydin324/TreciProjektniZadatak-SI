function izracunaj(){
	let cijena = document.getElementById("cijenaBox").value;
	let checkState = document.getElementById("euroCheck").checked;
	let dropdown = document.getElementById("selectHom").value;

	//-----------------------------------------------------------

	let _pdv = (cijena * 1.15) * 0.17;

	let _carina;
	if(checkState)
		_carina = 0;
	else
		_carina = cijena * 0.15;
	console.log(_carina);

	let _hom;
	switch(dropdown){
		case "M1 i N1":
			_hom = 150;
			break;
		case "M2, M3, N2, i N3":
			_hom = 250;
			break;
		case "O1 i O2":
			_hom = 110;
			break;
		case "O3 i O4":
			_hom = 150;
			break;
		case "L1, L2 i L3":
			_hom = 80;
			break;
		case "L4 i L5":
			_hom = 90;
			break;
		case "L6 i L7":
			_hom = 100;
			break;
		default:
			_hom = 0;
	}

	//-----------------------------------------------------------

	document.getElementById("carinaBox").value = _carina.toFixed(2);
	document.getElementById("pdvBox").value = _pdv.toFixed(2);
	document.getElementById("homBox").value = _hom.toFixed(2);
	let final = Number(cijena) + Number(_carina) + 
		Number(_pdv) + Number(_hom);
	document.getElementById("zvBox").value = final.toFixed(2);

}

function tema(){
	let checkTema = document.getElementById("temaBtn").checked;
	if(checkTema)
		document.getElementById("body").style="color: #f3a621";
	else
		document.getElementById("body").style="color: default";
}