const CACHE_KEY="keranjang_makanan";
function checkForStorage(){
	return typeof(Storage)!=="undefined";
}
function putMakanan(data){
	if (checkForStorage()) {
		let historyData=null;
		if (localStorage.getItem(CACHE_KEY)===null) {
			historyData=[];
		}
		else{
			historyData=JSON.parse(localStorage.getItem(CACHE_KEY));
		}
		historyData.unshift(data);
		if (historyData.length>5) {
			historyData.pop();
		}
		localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
	}
}
function showMakanan(){
	if (checkForStorage()) {
		return JSON.parse(localStorage.getItem(CACHE_KEY))||[];
	}
	else{
		return[];
	}
}
function renderHistory(){
	const historyData = showMakanan();
	let historyList = document.querySelector("#historyList");
	// selalu hapus konten HTML pada elemen historyList agar tidak menampilkan data ganda
	historyList.innerHTML="";
	for (let history of historyData) {
		let row=document.createElement('tr');
        row.innerHTML="<td>"+`<img src="${history.theGambar}">`+"</td>";
		row.innerHTML+="<td>"+history.theName+"</td>";
		row.innerHTML+="<td>"+history.theValue+"</td>";
		historyList.appendChild(row);
	}
}
renderHistory();