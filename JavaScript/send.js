
let button = document.querySelector( '.button' );
button.disabled = true;

document.querySelector( '#file' ).addEventListener( 'change', function( e ) {
	
	let file = this.files[0];
	
	document.querySelector( '#label-file' ).textContent = file.name;

	if( file )
	{
		button.classList.add( 'enable-button' );
		button.disabled = false;

		button.addEventListener( 'click', function( e ) {
			let xhr = new XMLHttpRequest ( );
			let data = new FormData();
			data.append( 'file', file );
			
			xhr.open( 'POST', 'http://localhost:8080/api/file' );
			xhr.send( data );

			xhr.addEventListener( 'load', function( e ) {

				let resultado = JSON.parse( xhr.responseText);

				alert( resultado.mensagem );
			});

		});
	}
});
