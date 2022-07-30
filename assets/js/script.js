const menus=document.querySelectorAll('.makanan');
for (let menu of menus) {
	menu.addEventListener('click',function(event){
		const gambar=menu.querySelector('img');
		const name=menu.querySelector('h3');
		const value=menu.querySelector('h4');
		const onCart={
            theGambar:gambar.src,
			theName:name.innerText,
			theValue:value.innerText
		}
		console.log(onCart);
		putMakanan(onCart);
		renderHistory();
		alert("Berhasil Ditambahkan Kekeranjang Anda");
	});
}
const hapus=document.querySelector('#hapus');
hapus.addEventListener('click', function(event){
	localStorage.removeItem(CACHE_KEY);
	renderHistory();
});
