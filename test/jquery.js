( function() {

var parts = document.location.search.slice( 1 ).split( "&" ),
	length = parts.length,
	i = 0,
	current,
	version,
	url;

for ( ; i < length; i++ ) {
	current = parts[ i ].split( "=" );
	if ( current[ 0 ] === "jquery" ) {
		version = current[ 1 ];
		break;
	}
}

if ( version === "git" ) {
	url = "http://code.jquery.com/jquery-git.js";
} else if ( version === "3.x-git" ) {
	url = "http://code.jquery.com/jquery-3.x-git.js";
} else {
	url = "../external/jquery-" + ( version || "3.4.1" ) + "/jquery.js";
}

document.write( "<script src='" + url + "'></script>" );

} )();
