function changeRange() {
	var r = parseInt( document.getElementById( 'r' ).value )
	var g = parseInt( document.getElementById( 'g' ).value )
	var b = parseInt( document.getElementById( 'b' ).value )

	var color = '#' + hex( r ) + hex( g ) + hex( b )

	document.getElementById( 'display' ).style.backgroundColor = color
	document.getElementById( 'hex-label' ).innerText = color
	document.getElementById( 'r-label' ).innerText = r
	document.getElementById( 'g-label' ).innerText = g
	document.getElementById( 'b-label' ).innerText = b

	if ( r < 100 && g < 100 && b < 100 ) {
		document.getElementById( 'display' ).style.color = 'white'
	} else if ( g > 100 ) {
		document.getElementById( 'display' ).style.color = 'white'
	} else {
		document.getElementById( 'display' ).style.color = 'black'
	}
}

function hex( v ) {
	var hex = v.toString( 16 )

	if ( v < 16 ) {
		hex = '0' + hex
	}
	return hex
}