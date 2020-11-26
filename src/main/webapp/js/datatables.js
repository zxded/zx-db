/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#dt/jq-3.3.1/dt-1.10.21/e-1.9.4
 *
 * Included libraries:
 *   jQuery 3 3.3.1, DataTables 1.10.21, Editor 1.9.4
 */

/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/*! DataTables 1.10.21
 * ©2008-2020 SpryMedia Ltd - datatables.net/license
 */

/**
 * @summary     DataTables
 * @description Paginate, search and order HTML tables
 * @version     1.10.21
 * @file        jquery.dataTables.js
 * @author      SpryMedia Ltd
 * @contact     www.datatables.net
 * @copyright   Copyright 2008-2020 SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */

/*jslint evil: true, undef: true, browser: true */
/*globals $,require,jQuery,define,_selector_run,_selector_opts,_selector_first,_selector_row_indexes,_ext,_Api,_api_register,_api_registerPlural,_re_new_lines,_re_html,_re_formatted_numeric,_re_escape_regex,_empty,_intVal,_numToDecimal,_isNumber,_isHtml,_htmlNumeric,_pluck,_pluck_order,_range,_stripHtml,_unique,_fnBuildAjax,_fnAjaxUpdate,_fnAjaxParameters,_fnAjaxUpdateDraw,_fnAjaxDataSrc,_fnAddColumn,_fnColumnOptions,_fnAdjustColumnSizing,_fnVisibleToColumnIndex,_fnColumnIndexToVisible,_fnVisbleColumns,_fnGetColumns,_fnColumnTypes,_fnApplyColumnDefs,_fnHungarianMap,_fnCamelToHungarian,_fnLanguageCompat,_fnBrowserDetect,_fnAddData,_fnAddTr,_fnNodeToDataIndex,_fnNodeToColumnIndex,_fnGetCellData,_fnSetCellData,_fnSplitObjNotation,_fnGetObjectDataFn,_fnSetObjectDataFn,_fnGetDataMaster,_fnClearTable,_fnDeleteIndex,_fnInvalidate,_fnGetRowElements,_fnCreateTr,_fnBuildHead,_fnDrawHead,_fnDraw,_fnReDraw,_fnAddOptionsHtml,_fnDetectHeader,_fnGetUniqueThs,_fnFeatureHtmlFilter,_fnFilterComplete,_fnFilterCustom,_fnFilterColumn,_fnFilter,_fnFilterCreateSearch,_fnEscapeRegex,_fnFilterData,_fnFeatureHtmlInfo,_fnUpdateInfo,_fnInfoMacros,_fnInitialise,_fnInitComplete,_fnLengthChange,_fnFeatureHtmlLength,_fnFeatureHtmlPaginate,_fnPageChange,_fnFeatureHtmlProcessing,_fnProcessingDisplay,_fnFeatureHtmlTable,_fnScrollDraw,_fnApplyToChildren,_fnCalculateColumnWidths,_fnThrottle,_fnConvertToWidth,_fnGetWidestNode,_fnGetMaxLenString,_fnStringToCss,_fnSortFlatten,_fnSort,_fnSortAria,_fnSortListener,_fnSortAttachListener,_fnSortingClasses,_fnSortData,_fnSaveState,_fnLoadState,_fnSettingsFromNode,_fnLog,_fnMap,_fnBindAction,_fnCallbackReg,_fnCallbackFire,_fnLengthOverflow,_fnRenderer,_fnDataSource,_fnRowAttributes*/

(function( factory ) {
	"use strict";

	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery'], function ( $ ) {
			return factory( $, window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = function (root, $) {
			if ( ! root ) {
				// CommonJS environments without a window global must pass a
				// root. This will give an error otherwise
				root = window;
			}

			if ( ! $ ) {
				$ = typeof window !== 'undefined' ? // jQuery's factory checks for a global window
					require('jquery') :
					require('jquery')( root );
			}

			return factory( $, root, root.document );
		};
	}
	else {
		// Browser
		factory( jQuery, window, document );
	}
}
(function( $, window, document, undefined ) {
	"use strict";

	/**
	 * DataTables is a plug-in for the jQuery Javascript library. It is a highly
	 * flexible tool, based upon the foundations of progressive enhancement,
	 * which will add advanced interaction controls to any HTML table. For a
	 * full list of features please refer to
	 * [DataTables.net](href="http://datatables.net).
	 *
	 * Note that the `DataTable` object is not a global variable but is aliased
	 * to `jQuery.fn.DataTable` and `jQuery.fn.dataTable` through which it may
	 * be  accessed.
	 *
	 *  @class
	 *  @param {object} [init={}] Configuration object for DataTables. Options
	 *    are defined by {@link DataTable.defaults}
	 *  @requires jQuery 1.7+
	 *
	 *  @example
	 *    // Basic initialisation
	 *    $(document).ready( function {
	 *      $('#example').dataTable();
	 *    } );
	 *
	 *  @example
	 *    // Initialisation with configuration options - in this case, disable
	 *    // pagination and sorting.
	 *    $(document).ready( function {
	 *      $('#example').dataTable( {
	 *        "paginate": false,
	 *        "sort": false
	 *      } );
	 *    } );
	 */
	var DataTable = function ( options )
	{
		/**
		 * Perform a jQuery selector action on the table's TR elements (from the tbody) and
		 * return the resulting jQuery object.
		 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
		 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
		 *  @param {string} [oOpts.filter=none] Select TR elements that meet the current filter
		 *    criterion ("applied") or all TR elements (i.e. no filter).
		 *  @param {string} [oOpts.order=current] Order of the TR elements in the processed array.
		 *    Can be either 'current', whereby the current sorting of the table is used, or
		 *    'original' whereby the original order the data was read into the table is used.
		 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
		 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
		 *    'current' and filter is 'applied', regardless of what they might be given as.
		 *  @returns {object} jQuery object, filtered by the given selector.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Highlight every second row
		 *      oTable.$('tr:odd').css('backgroundColor', 'blue');
		 *    } );
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to rows with 'Webkit' in them, add a background colour and then
		 *      // remove the filter, thus highlighting the 'Webkit' rows only.
		 *      oTable.fnFilter('Webkit');
		 *      oTable.$('tr', {"search": "applied"}).css('backgroundColor', 'blue');
		 *      oTable.fnFilter('');
		 *    } );
		 */
		this.$ = function ( sSelector, oOpts )
		{
			return this.api(true).$( sSelector, oOpts );
		};
		
		
		/**
		 * Almost identical to $ in operation, but in this case returns the data for the matched
		 * rows - as such, the jQuery selector used should match TR row nodes or TD/TH cell nodes
		 * rather than any descendants, so the data can be obtained for the row/cell. If matching
		 * rows are found, the data returned is the original data array/object that was used to
		 * create the row (or a generated array if from a DOM source).
		 *
		 * This method is often useful in-combination with $ where both functions are given the
		 * same parameters and the array indexes will match identically.
		 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
		 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
		 *  @param {string} [oOpts.filter=none] Select elements that meet the current filter
		 *    criterion ("applied") or all elements (i.e. no filter).
		 *  @param {string} [oOpts.order=current] Order of the data in the processed array.
		 *    Can be either 'current', whereby the current sorting of the table is used, or
		 *    'original' whereby the original order the data was read into the table is used.
		 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
		 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
		 *    'current' and filter is 'applied', regardless of what they might be given as.
		 *  @returns {array} Data for the matched elements. If any elements, as a result of the
		 *    selector, were not TR, TD or TH elements in the DataTable, they will have a null
		 *    entry in the array.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Get the data from the first row in the table
		 *      var data = oTable._('tr:first');
		 *
		 *      // Do something useful with the data
		 *      alert( "First cell is: "+data[0] );
		 *    } );
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to 'Webkit' and get all data for
		 *      oTable.fnFilter('Webkit');
		 *      var data = oTable._('tr', {"search": "applied"});
		 *
		 *      // Do something with the data
		 *      alert( data.length+" rows matched the search" );
		 *    } );
		 */
		this._ = function ( sSelector, oOpts )
		{
			return this.api(true).rows( sSelector, oOpts ).data();
		};
		
		
		/**
		 * Create a DataTables Api instance, with the currently selected tables for
		 * the Api's context.
		 * @param {boolean} [traditional=false] Set the API instance's context to be
		 *   only the table referred to by the `DataTable.ext.iApiIndex` option, as was
		 *   used in the API presented by DataTables 1.9- (i.e. the traditional mode),
		 *   or if all tables captured in the jQuery object should be used.
		 * @return {DataTables.Api}
		 */
		this.api = function ( traditional )
		{
			return traditional ?
				new _Api(
					_fnSettingsFromNode( this[ _ext.iApiIndex ] )
				) :
				new _Api( this );
		};
		
		
		/**
		 * Add a single new row or multiple rows of data to the table. Please note
		 * that this is suitable for client-side processing only - if you are using
		 * server-side processing (i.e. "bServerSide": true), then to add data, you
		 * must add it to the data source, i.e. the server-side, through an Ajax call.
		 *  @param {array|object} data The data to be added to the table. This can be:
		 *    <ul>
		 *      <li>1D array of data - add a single row with the data provided</li>
		 *      <li>2D array of arrays - add multiple rows in a single call</li>
		 *      <li>object - data object when using <i>mData</i></li>
		 *      <li>array of objects - multiple data objects when using <i>mData</i></li>
		 *    </ul>
		 *  @param {bool} [redraw=true] redraw the table or not
		 *  @returns {array} An array of integers, representing the list of indexes in
		 *    <i>aoData</i> ({@link DataTable.models.oSettings}) that have been added to
		 *    the table.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    // Global var for counter
		 *    var giCount = 2;
		 *
		 *    $(document).ready(function() {
		 *      $('#example').dataTable();
		 *    } );
		 *
		 *    function fnClickAddRow() {
		 *      $('#example').dataTable().fnAddData( [
		 *        giCount+".1",
		 *        giCount+".2",
		 *        giCount+".3",
		 *        giCount+".4" ]
		 *      );
		 *
		 *      giCount++;
		 *    }
		 */
		this.fnAddData = function( data, redraw )
		{
			var api = this.api( true );
		
			/* Check if we want to add multiple rows or not */
			var rows = $.isArray(data) && ( $.isArray(data[0]) || $.isPlainObject(data[0]) ) ?
				api.rows.add( data ) :
				api.row.add( data );
		
			if ( redraw === undefined || redraw ) {
				api.draw();
			}
		
			return rows.flatten().toArray();
		};
		
		
		/**
		 * This function will make DataTables recalculate the column sizes, based on the data
		 * contained in the table and the sizes applied to the columns (in the DOM, CSS or
		 * through the sWidth parameter). This can be useful when the width of the table's
		 * parent element changes (for example a window resize).
		 *  @param {boolean} [bRedraw=true] Redraw the table or not, you will typically want to
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable( {
		 *        "sScrollY": "200px",
		 *        "bPaginate": false
		 *      } );
		 *
		 *      $(window).on('resize', function () {
		 *        oTable.fnAdjustColumnSizing();
		 *      } );
		 *    } );
		 */
		this.fnAdjustColumnSizing = function ( bRedraw )
		{
			var api = this.api( true ).columns.adjust();
			var settings = api.settings()[0];
			var scroll = settings.oScroll;
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw( false );
			}
			else if ( scroll.sX !== "" || scroll.sY !== "" ) {
				/* If not redrawing, but scrolling, we want to apply the new column sizes anyway */
				_fnScrollDraw( settings );
			}
		};
		
		
		/**
		 * Quickly and simply clear a table
		 *  @param {bool} [bRedraw=true] redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Immediately 'nuke' the current rows (perhaps waiting for an Ajax callback...)
		 *      oTable.fnClearTable();
		 *    } );
		 */
		this.fnClearTable = function( bRedraw )
		{
			var api = this.api( true ).clear();
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw();
			}
		};
		
		
		/**
		 * The exact opposite of 'opening' a row, this function will close any rows which
		 * are currently 'open'.
		 *  @param {node} nTr the table row to 'close'
		 *  @returns {int} 0 on success, or 1 if failed (can't find the row)
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnClose = function( nTr )
		{
			this.api( true ).row( nTr ).child.hide();
		};
		
		
		/**
		 * Remove a row for the table
		 *  @param {mixed} target The index of the row from aoData to be deleted, or
		 *    the TR element you want to delete
		 *  @param {function|null} [callBack] Callback function
		 *  @param {bool} [redraw=true] Redraw the table or not
		 *  @returns {array} The row that was deleted
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Immediately remove the first row
		 *      oTable.fnDeleteRow( 0 );
		 *    } );
		 */
		this.fnDeleteRow = function( target, callback, redraw )
		{
			var api = this.api( true );
			var rows = api.rows( target );
			var settings = rows.settings()[0];
			var data = settings.aoData[ rows[0][0] ];
		
			rows.remove();
		
			if ( callback ) {
				callback.call( this, settings, data );
			}
		
			if ( redraw === undefined || redraw ) {
				api.draw();
			}
		
			return data;
		};
		
		
		/**
		 * Restore the table to it's original state in the DOM by removing all of DataTables
		 * enhancements, alterations to the DOM structure of the table and event listeners.
		 *  @param {boolean} [remove=false] Completely remove the table from the DOM
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      // This example is fairly pointless in reality, but shows how fnDestroy can be used
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnDestroy();
		 *    } );
		 */
		this.fnDestroy = function ( remove )
		{
			this.api( true ).destroy( remove );
		};
		
		
		/**
		 * Redraw the table
		 *  @param {bool} [complete=true] Re-filter and resort (if enabled) the table before the draw.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Re-draw the table - you wouldn't want to do it here, but it's an example :-)
		 *      oTable.fnDraw();
		 *    } );
		 */
		this.fnDraw = function( complete )
		{
			// Note that this isn't an exact match to the old call to _fnDraw - it takes
			// into account the new data, but can hold position.
			this.api( true ).draw( complete );
		};
		
		
		/**
		 * Filter the input based on data
		 *  @param {string} sInput String to filter the table on
		 *  @param {int|null} [iColumn] Column to limit filtering to
		 *  @param {bool} [bRegex=false] Treat as regular expression or not
		 *  @param {bool} [bSmart=true] Perform smart filtering or not
		 *  @param {bool} [bShowGlobal=true] Show the input global filter in it's input box(es)
		 *  @param {bool} [bCaseInsensitive=true] Do case-insensitive matching (true) or not (false)
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sometime later - filter...
		 *      oTable.fnFilter( 'test string' );
		 *    } );
		 */
		this.fnFilter = function( sInput, iColumn, bRegex, bSmart, bShowGlobal, bCaseInsensitive )
		{
			var api = this.api( true );
		
			if ( iColumn === null || iColumn === undefined ) {
				api.search( sInput, bRegex, bSmart, bCaseInsensitive );
			}
			else {
				api.column( iColumn ).search( sInput, bRegex, bSmart, bCaseInsensitive );
			}
		
			api.draw();
		};
		
		
		/**
		 * Get the data for the whole table, an individual row or an individual cell based on the
		 * provided parameters.
		 *  @param {int|node} [src] A TR row node, TD/TH cell node or an integer. If given as
		 *    a TR node then the data source for the whole row will be returned. If given as a
		 *    TD/TH cell node then iCol will be automatically calculated and the data for the
		 *    cell returned. If given as an integer, then this is treated as the aoData internal
		 *    data index for the row (see fnGetPosition) and the data for that row used.
		 *  @param {int} [col] Optional column index that you want the data of.
		 *  @returns {array|object|string} If mRow is undefined, then the data for all rows is
		 *    returned. If mRow is defined, just data for that row, and is iCol is
		 *    defined, only data for the designated cell is returned.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    // Row data
		 *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('tr').click( function () {
		 *        var data = oTable.fnGetData( this );
		 *        // ... do something with the array / object of data for the row
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Individual cell data
		 *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('td').click( function () {
		 *        var sData = oTable.fnGetData( this );
		 *        alert( 'The cell clicked on had the value of '+sData );
		 *      } );
		 *    } );
		 */
		this.fnGetData = function( src, col )
		{
			var api = this.api( true );
		
			if ( src !== undefined ) {
				var type = src.nodeName ? src.nodeName.toLowerCase() : '';
		
				return col !== undefined || type == 'td' || type == 'th' ?
					api.cell( src, col ).data() :
					api.row( src ).data() || null;
			}
		
			return api.data().toArray();
		};
		
		
		/**
		 * Get an array of the TR nodes that are used in the table's body. Note that you will
		 * typically want to use the '$' API method in preference to this as it is more
		 * flexible.
		 *  @param {int} [iRow] Optional row index for the TR element you want
		 *  @returns {array|node} If iRow is undefined, returns an array of all TR elements
		 *    in the table's body, or iRow is defined, just the TR element requested.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Get the nodes from the table
		 *      var nNodes = oTable.fnGetNodes( );
		 *    } );
		 */
		this.fnGetNodes = function( iRow )
		{
			var api = this.api( true );
		
			return iRow !== undefined ?
				api.row( iRow ).node() :
				api.rows().nodes().flatten().toArray();
		};
		
		
		/**
		 * Get the array indexes of a particular cell from it's DOM element
		 * and column index including hidden columns
		 *  @param {node} node this can either be a TR, TD or TH in the table's body
		 *  @returns {int} If nNode is given as a TR, then a single index is returned, or
		 *    if given as a cell, an array of [row index, column index (visible),
		 *    column index (all)] is given.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      $('#example tbody td').click( function () {
		 *        // Get the position of the current data from the node
		 *        var aPos = oTable.fnGetPosition( this );
		 *
		 *        // Get the data array for this row
		 *        var aData = oTable.fnGetData( aPos[0] );
		 *
		 *        // Update the data array and return the value
		 *        aData[ aPos[1] ] = 'clicked';
		 *        this.innerHTML = 'clicked';
		 *      } );
		 *
		 *      // Init DataTables
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnGetPosition = function( node )
		{
			var api = this.api( true );
			var nodeName = node.nodeName.toUpperCase();
		
			if ( nodeName == 'TR' ) {
				return api.row( node ).index();
			}
			else if ( nodeName == 'TD' || nodeName == 'TH' ) {
				var cell = api.cell( node ).index();
		
				return [
					cell.row,
					cell.columnVisible,
					cell.column
				];
			}
			return null;
		};
		
		
		/**
		 * Check to see if a row is 'open' or not.
		 *  @param {node} nTr the table row to check
		 *  @returns {boolean} true if the row is currently open, false otherwise
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnIsOpen = function( nTr )
		{
			return this.api( true ).row( nTr ).child.isShown();
		};
		
		
		/**
		 * This function will place a new row directly after a row which is currently
		 * on display on the page, with the HTML contents that is passed into the
		 * function. This can be used, for example, to ask for confirmation that a
		 * particular record should be deleted.
		 *  @param {node} nTr The table row to 'open'
		 *  @param {string|node|jQuery} mHtml The HTML to put into the row
		 *  @param {string} sClass Class to give the new TD cell
		 *  @returns {node} The row opened. Note that if the table row passed in as the
		 *    first parameter, is not found in the table, this method will silently
		 *    return.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnOpen = function( nTr, mHtml, sClass )
		{
			return this.api( true )
				.row( nTr )
				.child( mHtml, sClass )
				.show()
				.child()[0];
		};
		
		
		/**
		 * Change the pagination - provides the internal logic for pagination in a simple API
		 * function. With this function you can have a DataTables table go to the next,
		 * previous, first or last pages.
		 *  @param {string|int} mAction Paging action to take: "first", "previous", "next" or "last"
		 *    or page number to jump to (integer), note that page 0 is the first page.
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnPageChange( 'next' );
		 *    } );
		 */
		this.fnPageChange = function ( mAction, bRedraw )
		{
			var api = this.api( true ).page( mAction );
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw(false);
			}
		};
		
		
		/**
		 * Show a particular column
		 *  @param {int} iCol The column whose display should be changed
		 *  @param {bool} bShow Show (true) or hide (false) the column
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Hide the second column after initialisation
		 *      oTable.fnSetColumnVis( 1, false );
		 *    } );
		 */
		this.fnSetColumnVis = function ( iCol, bShow, bRedraw )
		{
			var api = this.api( true ).column( iCol ).visible( bShow );
		
			if ( bRedraw === undefined || bRedraw ) {
				api.columns.adjust().draw();
			}
		};
		
		
		/**
		 * Get the settings for a particular table for external manipulation
		 *  @returns {object} DataTables settings object. See
		 *    {@link DataTable.models.oSettings}
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      var oSettings = oTable.fnSettings();
		 *
		 *      // Show an example parameter from the settings
		 *      alert( oSettings._iDisplayStart );
		 *    } );
		 */
		this.fnSettings = function()
		{
			return _fnSettingsFromNode( this[_ext.iApiIndex] );
		};
		
		
		/**
		 * Sort the table by a particular column
		 *  @param {int} iCol the data index to sort on. Note that this will not match the
		 *    'display index' if you have hidden data entries
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sort immediately with columns 0 and 1
		 *      oTable.fnSort( [ [0,'asc'], [1,'asc'] ] );
		 *    } );
		 */
		this.fnSort = function( aaSort )
		{
			this.api( true ).order( aaSort ).draw();
		};
		
		
		/**
		 * Attach a sort listener to an element for a given column
		 *  @param {node} nNode the element to attach the sort listener to
		 *  @param {int} iColumn the column that a click on this node will sort on
		 *  @param {function} [fnCallback] callback function when sort is run
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sort on column 1, when 'sorter' is clicked on
		 *      oTable.fnSortListener( document.getElementById('sorter'), 1 );
		 *    } );
		 */
		this.fnSortListener = function( nNode, iColumn, fnCallback )
		{
			this.api( true ).order.listener( nNode, iColumn, fnCallback );
		};
		
		
		/**
		 * Update a table cell or row - this method will accept either a single value to
		 * update the cell with, an array of values with one element for each column or
		 * an object in the same format as the original data source. The function is
		 * self-referencing in order to make the multi column updates easier.
		 *  @param {object|array|string} mData Data to update the cell/row with
		 *  @param {node|int} mRow TR element you want to update or the aoData index
		 *  @param {int} [iColumn] The column to update, give as null or undefined to
		 *    update a whole row.
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @param {bool} [bAction=true] Perform pre-draw actions or not
		 *  @returns {int} 0 on success, 1 on error
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnUpdate( 'Example update', 0, 0 ); // Single cell
		 *      oTable.fnUpdate( ['a', 'b', 'c', 'd', 'e'], $('tbody tr')[0] ); // Row
		 *    } );
		 */
		this.fnUpdate = function( mData, mRow, iColumn, bRedraw, bAction )
		{
			var api = this.api( true );
		
			if ( iColumn === undefined || iColumn === null ) {
				api.row( mRow ).data( mData );
			}
			else {
				api.cell( mRow, iColumn ).data( mData );
			}
		
			if ( bAction === undefined || bAction ) {
				api.columns.adjust();
			}
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw();
			}
			return 0;
		};
		
		
		/**
		 * Provide a common method for plug-ins to check the version of DataTables being used, in order
		 * to ensure compatibility.
		 *  @param {string} sVersion Version string to check for, in the format "X.Y.Z". Note that the
		 *    formats "X" and "X.Y" are also acceptable.
		 *  @returns {boolean} true if this version of DataTables is greater or equal to the required
		 *    version, or false if this version of DataTales is not suitable
		 *  @method
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      alert( oTable.fnVersionCheck( '1.9.0' ) );
		 *    } );
		 */
		this.fnVersionCheck = _ext.fnVersionCheck;
		

		var _that = this;
		var emptyInit = options === undefined;
		var len = this.length;

		if ( emptyInit ) {
			options = {};
		}

		this.oApi = this.internal = _ext.internal;

		// Extend with old style plug-in API methods
		for ( var fn in DataTable.ext.internal ) {
			if ( fn ) {
				this[fn] = _fnExternApiFunc(fn);
			}
		}

		this.each(function() {
			// For each initialisation we want to give it a clean initialisation
			// object that can be bashed around
			var o = {};
			var oInit = len > 1 ? // optimisation for single table case
				_fnExtend( o, options, true ) :
				options;

			/*global oInit,_that,emptyInit*/
			var i=0, iLen, j, jLen, k, kLen;
			var sId = this.getAttribute( 'id' );
			var bInitHandedOff = false;
			var defaults = DataTable.defaults;
			var $this = $(this);
			
			
			/* Sanity check */
			if ( this.nodeName.toLowerCase() != 'table' )
			{
				_fnLog( null, 0, 'Non-table node initialisation ('+this.nodeName+')', 2 );
				return;
			}
			
			/* Backwards compatibility for the defaults */
			_fnCompatOpts( defaults );
			_fnCompatCols( defaults.column );
			
			/* Convert the camel-case defaults to Hungarian */
			_fnCamelToHungarian( defaults, defaults, true );
			_fnCamelToHungarian( defaults.column, defaults.column, true );
			
			/* Setting up the initialisation object */
			_fnCamelToHungarian( defaults, $.extend( oInit, $this.data() ), true );
			
			
			
			/* Check to see if we are re-initialising a table */
			var allSettings = DataTable.settings;
			for ( i=0, iLen=allSettings.length ; i<iLen ; i++ )
			{
				var s = allSettings[i];
			
				/* Base check on table node */
				if (
					s.nTable == this ||
					(s.nTHead && s.nTHead.parentNode == this) ||
					(s.nTFoot && s.nTFoot.parentNode == this)
				) {
					var bRetrieve = oInit.bRetrieve !== undefined ? oInit.bRetrieve : defaults.bRetrieve;
					var bDestroy = oInit.bDestroy !== undefined ? oInit.bDestroy : defaults.bDestroy;
			
					if ( emptyInit || bRetrieve )
					{
						return s.oInstance;
					}
					else if ( bDestroy )
					{
						s.oInstance.fnDestroy();
						break;
					}
					else
					{
						_fnLog( s, 0, 'Cannot reinitialise DataTable', 3 );
						return;
					}
				}
			
				/* If the element we are initialising has the same ID as a table which was previously
				 * initialised, but the table nodes don't match (from before) then we destroy the old
				 * instance by simply deleting it. This is under the assumption that the table has been
				 * destroyed by other methods. Anyone using non-id selectors will need to do this manually
				 */
				if ( s.sTableId == this.id )
				{
					allSettings.splice( i, 1 );
					break;
				}
			}
			
			/* Ensure the table has an ID - required for accessibility */
			if ( sId === null || sId === "" )
			{
				sId = "DataTables_Table_"+(DataTable.ext._unique++);
				this.id = sId;
			}
			
			/* Create the settings object for this table and set some of the default parameters */
			var oSettings = $.extend( true, {}, DataTable.models.oSettings, {
				"sDestroyWidth": $this[0].style.width,
				"sInstance":     sId,
				"sTableId":      sId
			} );
			oSettings.nTable = this;
			oSettings.oApi   = _that.internal;
			oSettings.oInit  = oInit;
			
			allSettings.push( oSettings );
			
			// Need to add the instance after the instance after the settings object has been added
			// to the settings array, so we can self reference the table instance if more than one
			oSettings.oInstance = (_that.length===1) ? _that : $this.dataTable();
			
			// Backwards compatibility, before we apply all the defaults
			_fnCompatOpts( oInit );
			_fnLanguageCompat( oInit.oLanguage );
			
			// If the length menu is given, but the init display length is not, use the length menu
			if ( oInit.aLengthMenu && ! oInit.iDisplayLength )
			{
				oInit.iDisplayLength = $.isArray( oInit.aLengthMenu[0] ) ?
					oInit.aLengthMenu[0][0] : oInit.aLengthMenu[0];
			}
			
			// Apply the defaults and init options to make a single init object will all
			// options defined from defaults and instance options.
			oInit = _fnExtend( $.extend( true, {}, defaults ), oInit );
			
			
			// Map the initialisation options onto the settings object
			_fnMap( oSettings.oFeatures, oInit, [
				"bPaginate",
				"bLengthChange",
				"bFilter",
				"bSort",
				"bSortMulti",
				"bInfo",
				"bProcessing",
				"bAutoWidth",
				"bSortClasses",
				"bServerSide",
				"bDeferRender"
			] );
			_fnMap( oSettings, oInit, [
				"asStripeClasses",
				"ajax",
				"fnServerData",
				"fnFormatNumber",
				"sServerMethod",
				"aaSorting",
				"aaSortingFixed",
				"aLengthMenu",
				"sPaginationType",
				"sAjaxSource",
				"sAjaxDataProp",
				"iStateDuration",
				"sDom",
				"bSortCellsTop",
				"iTabIndex",
				"fnStateLoadCallback",
				"fnStateSaveCallback",
				"renderer",
				"searchDelay",
				"rowId",
				[ "iCookieDuration", "iStateDuration" ], // backwards compat
				[ "oSearch", "oPreviousSearch" ],
				[ "aoSearchCols", "aoPreSearchCols" ],
				[ "iDisplayLength", "_iDisplayLength" ]
			] );
			_fnMap( oSettings.oScroll, oInit, [
				[ "sScrollX", "sX" ],
				[ "sScrollXInner", "sXInner" ],
				[ "sScrollY", "sY" ],
				[ "bScrollCollapse", "bCollapse" ]
			] );
			_fnMap( oSettings.oLanguage, oInit, "fnInfoCallback" );
			
			/* Callback functions which are array driven */
			_fnCallbackReg( oSettings, 'aoDrawCallback',       oInit.fnDrawCallback,      'user' );
			_fnCallbackReg( oSettings, 'aoServerParams',       oInit.fnServerParams,      'user' );
			_fnCallbackReg( oSettings, 'aoStateSaveParams',    oInit.fnStateSaveParams,   'user' );
			_fnCallbackReg( oSettings, 'aoStateLoadParams',    oInit.fnStateLoadParams,   'user' );
			_fnCallbackReg( oSettings, 'aoStateLoaded',        oInit.fnStateLoaded,       'user' );
			_fnCallbackReg( oSettings, 'aoRowCallback',        oInit.fnRowCallback,       'user' );
			_fnCallbackReg( oSettings, 'aoRowCreatedCallback', oInit.fnCreatedRow,        'user' );
			_fnCallbackReg( oSettings, 'aoHeaderCallback',     oInit.fnHeaderCallback,    'user' );
			_fnCallbackReg( oSettings, 'aoFooterCallback',     oInit.fnFooterCallback,    'user' );
			_fnCallbackReg( oSettings, 'aoInitComplete',       oInit.fnInitComplete,      'user' );
			_fnCallbackReg( oSettings, 'aoPreDrawCallback',    oInit.fnPreDrawCallback,   'user' );
			
			oSettings.rowIdFn = _fnGetObjectDataFn( oInit.rowId );
			
			/* Browser support detection */
			_fnBrowserDetect( oSettings );
			
			var oClasses = oSettings.oClasses;
			
			$.extend( oClasses, DataTable.ext.classes, oInit.oClasses );
			$this.addClass( oClasses.sTable );
			
			
			if ( oSettings.iInitDisplayStart === undefined )
			{
				/* Display start point, taking into account the save saving */
				oSettings.iInitDisplayStart = oInit.iDisplayStart;
				oSettings._iDisplayStart = oInit.iDisplayStart;
			}
			
			if ( oInit.iDeferLoading !== null )
			{
				oSettings.bDeferLoading = true;
				var tmp = $.isArray( oInit.iDeferLoading );
				oSettings._iRecordsDisplay = tmp ? oInit.iDeferLoading[0] : oInit.iDeferLoading;
				oSettings._iRecordsTotal = tmp ? oInit.iDeferLoading[1] : oInit.iDeferLoading;
			}
			
			/* Language definitions */
			var oLanguage = oSettings.oLanguage;
			$.extend( true, oLanguage, oInit.oLanguage );
			
			if ( oLanguage.sUrl )
			{
				/* Get the language definitions from a file - because this Ajax call makes the language
				 * get async to the remainder of this function we use bInitHandedOff to indicate that
				 * _fnInitialise will be fired by the returned Ajax handler, rather than the constructor
				 */
				$.ajax( {
					dataType: 'json',
					url: oLanguage.sUrl,
					success: function ( json ) {
						_fnLanguageCompat( json );
						_fnCamelToHungarian( defaults.oLanguage, json );
						$.extend( true, oLanguage, json );
						_fnInitialise( oSettings );
					},
					error: function () {
						// Error occurred loading language file, continue on as best we can
						_fnInitialise( oSettings );
					}
				} );
				bInitHandedOff = true;
			}
			
			/*
			 * Stripes
			 */
			if ( oInit.asStripeClasses === null )
			{
				oSettings.asStripeClasses =[
					oClasses.sStripeOdd,
					oClasses.sStripeEven
				];
			}
			
			/* Remove row stripe classes if they are already on the table row */
			var stripeClasses = oSettings.asStripeClasses;
			var rowOne = $this.children('tbody').find('tr').eq(0);
			if ( $.inArray( true, $.map( stripeClasses, function(el, i) {
				return rowOne.hasClass(el);
			} ) ) !== -1 ) {
				$('tbody tr', this).removeClass( stripeClasses.join(' ') );
				oSettings.asDestroyStripes = stripeClasses.slice();
			}
			
			/*
			 * Columns
			 * See if we should load columns automatically or use defined ones
			 */
			var anThs = [];
			var aoColumnsInit;
			var nThead = this.getElementsByTagName('thead');
			if ( nThead.length !== 0 )
			{
				_fnDetectHeader( oSettings.aoHeader, nThead[0] );
				anThs = _fnGetUniqueThs( oSettings );
			}
			
			/* If not given a column array, generate one with nulls */
			if ( oInit.aoColumns === null )
			{
				aoColumnsInit = [];
				for ( i=0, iLen=anThs.length ; i<iLen ; i++ )
				{
					aoColumnsInit.push( null );
				}
			}
			else
			{
				aoColumnsInit = oInit.aoColumns;
			}
			
			/* Add the columns */
			for ( i=0, iLen=aoColumnsInit.length ; i<iLen ; i++ )
			{
				_fnAddColumn( oSettings, anThs ? anThs[i] : null );
			}
			
			/* Apply the column definitions */
			_fnApplyColumnDefs( oSettings, oInit.aoColumnDefs, aoColumnsInit, function (iCol, oDef) {
				_fnColumnOptions( oSettings, iCol, oDef );
			} );
			
			/* HTML5 attribute detection - build an mData object automatically if the
			 * attributes are found
			 */
			if ( rowOne.length ) {
				var a = function ( cell, name ) {
					return cell.getAttribute( 'data-'+name ) !== null ? name : null;
				};
			
				$( rowOne[0] ).children('th, td').each( function (i, cell) {
					var col = oSettings.aoColumns[i];
			
					if ( col.mData === i ) {
						var sort = a( cell, 'sort' ) || a( cell, 'order' );
						var filter = a( cell, 'filter' ) || a( cell, 'search' );
			
						if ( sort !== null || filter !== null ) {
							col.mData = {
								_:      i+'.display',
								sort:   sort !== null   ? i+'.@data-'+sort   : undefined,
								type:   sort !== null   ? i+'.@data-'+sort   : undefined,
								filter: filter !== null ? i+'.@data-'+filter : undefined
							};
			
							_fnColumnOptions( oSettings, i );
						}
					}
				} );
			}
			
			var features = oSettings.oFeatures;
			var loadedInit = function () {
				/*
				 * Sorting
				 * @todo For modularisation (1.11) this needs to do into a sort start up handler
				 */
			
				// If aaSorting is not defined, then we use the first indicator in asSorting
				// in case that has been altered, so the default sort reflects that option
				if ( oInit.aaSorting === undefined ) {
					var sorting = oSettings.aaSorting;
					for ( i=0, iLen=sorting.length ; i<iLen ; i++ ) {
						sorting[i][1] = oSettings.aoColumns[ i ].asSorting[0];
					}
				}
			
				/* Do a first pass on the sorting classes (allows any size changes to be taken into
				 * account, and also will apply sorting disabled classes if disabled
				 */
				_fnSortingClasses( oSettings );
			
				if ( features.bSort ) {
					_fnCallbackReg( oSettings, 'aoDrawCallback', function () {
						if ( oSettings.bSorted ) {
							var aSort = _fnSortFlatten( oSettings );
							var sortedColumns = {};
			
							$.each( aSort, function (i, val) {
								sortedColumns[ val.src ] = val.dir;
							} );
			
							_fnCallbackFire( oSettings, null, 'order', [oSettings, aSort, sortedColumns] );
							_fnSortAria( oSettings );
						}
					} );
				}
			
				_fnCallbackReg( oSettings, 'aoDrawCallback', function () {
					if ( oSettings.bSorted || _fnDataSource( oSettings ) === 'ssp' || features.bDeferRender ) {
						_fnSortingClasses( oSettings );
					}
				}, 'sc' );
			
			
				/*
				 * Final init
				 * Cache the header, body and footer as required, creating them if needed
				 */
			
				// Work around for Webkit bug 83867 - store the caption-side before removing from doc
				var captions = $this.children('caption').each( function () {
					this._captionSide = $(this).css('caption-side');
				} );
			
				var thead = $this.children('thead');
				if ( thead.length === 0 ) {
					thead = $('<thead/>').appendTo($this);
				}
				oSettings.nTHead = thead[0];
			
				var tbody = $this.children('tbody');
				if ( tbody.length === 0 ) {
					tbody = $('<tbody/>').appendTo($this);
				}
				oSettings.nTBody = tbody[0];
			
				var tfoot = $this.children('tfoot');
				if ( tfoot.length === 0 && captions.length > 0 && (oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "") ) {
					// If we are a scrolling table, and no footer has been given, then we need to create
					// a tfoot element for the caption element to be appended to
					tfoot = $('<tfoot/>').appendTo($this);
				}
			
				if ( tfoot.length === 0 || tfoot.children().length === 0 ) {
					$this.addClass( oClasses.sNoFooter );
				}
				else if ( tfoot.length > 0 ) {
					oSettings.nTFoot = tfoot[0];
					_fnDetectHeader( oSettings.aoFooter, oSettings.nTFoot );
				}
			
				/* Check if there is data passing into the constructor */
				if ( oInit.aaData ) {
					for ( i=0 ; i<oInit.aaData.length ; i++ ) {
						_fnAddData( oSettings, oInit.aaData[ i ] );
					}
				}
				else if ( oSettings.bDeferLoading || _fnDataSource( oSettings ) == 'dom' ) {
					/* Grab the data from the page - only do this when deferred loading or no Ajax
					 * source since there is no point in reading the DOM data if we are then going
					 * to replace it with Ajax data
					 */
					_fnAddTr( oSettings, $(oSettings.nTBody).children('tr') );
				}
			
				/* Copy the data index array */
				oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
			
				/* Initialisation complete - table can be drawn */
				oSettings.bInitialised = true;
			
				/* Check if we need to initialise the table (it might not have been handed off to the
				 * language processor)
				 */
				if ( bInitHandedOff === false ) {
					_fnInitialise( oSettings );
				}
			};
			
			/* Must be done after everything which can be overridden by the state saving! */
			if ( oInit.bStateSave )
			{
				features.bStateSave = true;
				_fnCallbackReg( oSettings, 'aoDrawCallback', _fnSaveState, 'state_save' );
				_fnLoadState( oSettings, oInit, loadedInit );
			}
			else {
				loadedInit();
			}
			
		} );
		_that = null;
		return this;
	};

	
	/*
	 * It is useful to have variables which are scoped locally so only the
	 * DataTables functions can access them and they don't leak into global space.
	 * At the same time these functions are often useful over multiple files in the
	 * core and API, so we list, or at least document, all variables which are used
	 * by DataTables as private variables here. This also ensures that there is no
	 * clashing of variable names and that they can easily referenced for reuse.
	 */
	
	
	// Defined else where
	//  _selector_run
	//  _selector_opts
	//  _selector_first
	//  _selector_row_indexes
	
	var _ext; // DataTable.ext
	var _Api; // DataTable.Api
	var _api_register; // DataTable.Api.register
	var _api_registerPlural; // DataTable.Api.registerPlural
	
	var _re_dic = {};
	var _re_new_lines = /[\r\n\u2028]/g;
	var _re_html = /<.*?>/g;
	
	// This is not strict ISO8601 - Date.parse() is quite lax, although
	// implementations differ between browsers.
	var _re_date = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/;
	
	// Escape regular expression special characters
	var _re_escape_regex = new RegExp( '(\\' + [ '/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\', '$', '^', '-' ].join('|\\') + ')', 'g' );
	
	// http://en.wikipedia.org/wiki/Foreign_exchange_market
	// - \u20BD - Russian ruble.
	// - \u20a9 - South Korean Won
	// - \u20BA - Turkish Lira
	// - \u20B9 - Indian Rupee
	// - R - Brazil (R$) and South Africa
	// - fr - Swiss Franc
	// - kr - Swedish krona, Norwegian krone and Danish krone
	// - \u2009 is thin space and \u202F is narrow no-break space, both used in many
	// - Ƀ - Bitcoin
	// - Ξ - Ethereum
	//   standards as thousands separators.
	var _re_formatted_numeric = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi;
	
	
	var _empty = function ( d ) {
		return !d || d === true || d === '-' ? true : false;
	};
	
	
	var _intVal = function ( s ) {
		var integer = parseInt( s, 10 );
		return !isNaN(integer) && isFinite(s) ? integer : null;
	};
	
	// Convert from a formatted number with characters other than `.` as the
	// decimal place, to a Javascript number
	var _numToDecimal = function ( num, decimalPoint ) {
		// Cache created regular expressions for speed as this function is called often
		if ( ! _re_dic[ decimalPoint ] ) {
			_re_dic[ decimalPoint ] = new RegExp( _fnEscapeRegex( decimalPoint ), 'g' );
		}
		return typeof num === 'string' && decimalPoint !== '.' ?
			num.replace( /\./g, '' ).replace( _re_dic[ decimalPoint ], '.' ) :
			num;
	};
	
	
	var _isNumber = function ( d, decimalPoint, formatted ) {
		var strType = typeof d === 'string';
	
		// If empty return immediately so there must be a number if it is a
		// formatted string (this stops the string "k", or "kr", etc being detected
		// as a formatted number for currency
		if ( _empty( d ) ) {
			return true;
		}
	
		if ( decimalPoint && strType ) {
			d = _numToDecimal( d, decimalPoint );
		}
	
		if ( formatted && strType ) {
			d = d.replace( _re_formatted_numeric, '' );
		}
	
		return !isNaN( parseFloat(d) ) && isFinite( d );
	};
	
	
	// A string without HTML in it can be considered to be HTML still
	var _isHtml = function ( d ) {
		return _empty( d ) || typeof d === 'string';
	};
	
	
	var _htmlNumeric = function ( d, decimalPoint, formatted ) {
		if ( _empty( d ) ) {
			return true;
		}
	
		var html = _isHtml( d );
		return ! html ?
			null :
			_isNumber( _stripHtml( d ), decimalPoint, formatted ) ?
				true :
				null;
	};
	
	
	var _pluck = function ( a, prop, prop2 ) {
		var out = [];
		var i=0, ien=a.length;
	
		// Could have the test in the loop for slightly smaller code, but speed
		// is essential here
		if ( prop2 !== undefined ) {
			for ( ; i<ien ; i++ ) {
				if ( a[i] && a[i][ prop ] ) {
					out.push( a[i][ prop ][ prop2 ] );
				}
			}
		}
		else {
			for ( ; i<ien ; i++ ) {
				if ( a[i] ) {
					out.push( a[i][ prop ] );
				}
			}
		}
	
		return out;
	};
	
	
	// Basically the same as _pluck, but rather than looping over `a` we use `order`
	// as the indexes to pick from `a`
	var _pluck_order = function ( a, order, prop, prop2 )
	{
		var out = [];
		var i=0, ien=order.length;
	
		// Could have the test in the loop for slightly smaller code, but speed
		// is essential here
		if ( prop2 !== undefined ) {
			for ( ; i<ien ; i++ ) {
				if ( a[ order[i] ][ prop ] ) {
					out.push( a[ order[i] ][ prop ][ prop2 ] );
				}
			}
		}
		else {
			for ( ; i<ien ; i++ ) {
				out.push( a[ order[i] ][ prop ] );
			}
		}
	
		return out;
	};
	
	
	var _range = function ( len, start )
	{
		var out = [];
		var end;
	
		if ( start === undefined ) {
			start = 0;
			end = len;
		}
		else {
			end = start;
			start = len;
		}
	
		for ( var i=start ; i<end ; i++ ) {
			out.push( i );
		}
	
		return out;
	};
	
	
	var _removeEmpty = function ( a )
	{
		var out = [];
	
		for ( var i=0, ien=a.length ; i<ien ; i++ ) {
			if ( a[i] ) { // careful - will remove all falsy values!
				out.push( a[i] );
			}
		}
	
		return out;
	};
	
	
	var _stripHtml = function ( d ) {
		return d.replace( _re_html, '' );
	};
	
	
	/**
	 * Determine if all values in the array are unique. This means we can short
	 * cut the _unique method at the cost of a single loop. A sorted array is used
	 * to easily check the values.
	 *
	 * @param  {array} src Source array
	 * @return {boolean} true if all unique, false otherwise
	 * @ignore
	 */
	var _areAllUnique = function ( src ) {
		if ( src.length < 2 ) {
			return true;
		}
	
		var sorted = src.slice().sort();
		var last = sorted[0];
	
		for ( var i=1, ien=sorted.length ; i<ien ; i++ ) {
			if ( sorted[i] === last ) {
				return false;
			}
	
			last = sorted[i];
		}
	
		return true;
	};
	
	
	/**
	 * Find the unique elements in a source array.
	 *
	 * @param  {array} src Source array
	 * @return {array} Array of unique items
	 * @ignore
	 */
	var _unique = function ( src )
	{
		if ( _areAllUnique( src ) ) {
			return src.slice();
		}
	
		// A faster unique method is to use object keys to identify used values,
		// but this doesn't work with arrays or objects, which we must also
		// consider. See jsperf.com/compare-array-unique-versions/4 for more
		// information.
		var
			out = [],
			val,
			i, ien=src.length,
			j, k=0;
	
		again: for ( i=0 ; i<ien ; i++ ) {
			val = src[i];
	
			for ( j=0 ; j<k ; j++ ) {
				if ( out[j] === val ) {
					continue again;
				}
			}
	
			out.push( val );
			k++;
		}
	
		return out;
	};
	
	
	/**
	 * DataTables utility methods
	 * 
	 * This namespace provides helper methods that DataTables uses internally to
	 * create a DataTable, but which are not exclusively used only for DataTables.
	 * These methods can be used by extension authors to save the duplication of
	 * code.
	 *
	 *  @namespace
	 */
	DataTable.util = {
		/**
		 * Throttle the calls to a function. Arguments and context are maintained
		 * for the throttled function.
		 *
		 * @param {function} fn Function to be called
		 * @param {integer} freq Call frequency in mS
		 * @return {function} Wrapped function
		 */
		throttle: function ( fn, freq ) {
			var
				frequency = freq !== undefined ? freq : 200,
				last,
				timer;
	
			return function () {
				var
					that = this,
					now  = +new Date(),
					args = arguments;
	
				if ( last && now < last + frequency ) {
					clearTimeout( timer );
	
					timer = setTimeout( function () {
						last = undefined;
						fn.apply( that, args );
					}, frequency );
				}
				else {
					last = now;
					fn.apply( that, args );
				}
			};
		},
	
	
		/**
		 * Escape a string such that it can be used in a regular expression
		 *
		 *  @param {string} val string to escape
		 *  @returns {string} escaped string
		 */
		escapeRegex: function ( val ) {
			return val.replace( _re_escape_regex, '\\$1' );
		}
	};
	
	
	
	/**
	 * Create a mapping object that allows camel case parameters to be looked up
	 * for their Hungarian counterparts. The mapping is stored in a private
	 * parameter called `_hungarianMap` which can be accessed on the source object.
	 *  @param {object} o
	 *  @memberof DataTable#oApi
	 */
	function _fnHungarianMap ( o )
	{
		var
			hungarian = 'a aa ai ao as b fn i m o s ',
			match,
			newKey,
			map = {};
	
		$.each( o, function (key, val) {
			match = key.match(/^([^A-Z]+?)([A-Z])/);
	
			if ( match && hungarian.indexOf(match[1]+' ') !== -1 )
			{
				newKey = key.replace( match[0], match[2].toLowerCase() );
				map[ newKey ] = key;
	
				if ( match[1] === 'o' )
				{
					_fnHungarianMap( o[key] );
				}
			}
		} );
	
		o._hungarianMap = map;
	}
	
	
	/**
	 * Convert from camel case parameters to Hungarian, based on a Hungarian map
	 * created by _fnHungarianMap.
	 *  @param {object} src The model object which holds all parameters that can be
	 *    mapped.
	 *  @param {object} user The object to convert from camel case to Hungarian.
	 *  @param {boolean} force When set to `true`, properties which already have a
	 *    Hungarian value in the `user` object will be overwritten. Otherwise they
	 *    won't be.
	 *  @memberof DataTable#oApi
	 */
	function _fnCamelToHungarian ( src, user, force )
	{
		if ( ! src._hungarianMap ) {
			_fnHungarianMap( src );
		}
	
		var hungarianKey;
	
		$.each( user, function (key, val) {
			hungarianKey = src._hungarianMap[ key ];
	
			if ( hungarianKey !== undefined && (force || user[hungarianKey] === undefined) )
			{
				// For objects, we need to buzz down into the object to copy parameters
				if ( hungarianKey.charAt(0) === 'o' )
				{
					// Copy the camelCase options over to the hungarian
					if ( ! user[ hungarianKey ] ) {
						user[ hungarianKey ] = {};
					}
					$.extend( true, user[hungarianKey], user[key] );
	
					_fnCamelToHungarian( src[hungarianKey], user[hungarianKey], force );
				}
				else {
					user[hungarianKey] = user[ key ];
				}
			}
		} );
	}
	
	
	/**
	 * Language compatibility - when certain options are given, and others aren't, we
	 * need to duplicate the values over, in order to provide backwards compatibility
	 * with older language files.
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnLanguageCompat( lang )
	{
		// Note the use of the Hungarian notation for the parameters in this method as
		// this is called after the mapping of camelCase to Hungarian
		var defaults = DataTable.defaults.oLanguage;
	
		// Default mapping
		var defaultDecimal = defaults.sDecimal;
		if ( defaultDecimal ) {
			_addNumericSort( defaultDecimal );
		}
	
		if ( lang ) {
			var zeroRecords = lang.sZeroRecords;
	
			// Backwards compatibility - if there is no sEmptyTable given, then use the same as
			// sZeroRecords - assuming that is given.
			if ( ! lang.sEmptyTable && zeroRecords &&
				defaults.sEmptyTable === "No data available in table" )
			{
				_fnMap( lang, lang, 'sZeroRecords', 'sEmptyTable' );
			}
	
			// Likewise with loading records
			if ( ! lang.sLoadingRecords && zeroRecords &&
				defaults.sLoadingRecords === "Loading..." )
			{
				_fnMap( lang, lang, 'sZeroRecords', 'sLoadingRecords' );
			}
	
			// Old parameter name of the thousands separator mapped onto the new
			if ( lang.sInfoThousands ) {
				lang.sThousands = lang.sInfoThousands;
			}
	
			var decimal = lang.sDecimal;
			if ( decimal && defaultDecimal !== decimal ) {
				_addNumericSort( decimal );
			}
		}
	}
	
	
	/**
	 * Map one parameter onto another
	 *  @param {object} o Object to map
	 *  @param {*} knew The new parameter name
	 *  @param {*} old The old parameter name
	 */
	var _fnCompatMap = function ( o, knew, old ) {
		if ( o[ knew ] !== undefined ) {
			o[ old ] = o[ knew ];
		}
	};
	
	
	/**
	 * Provide backwards compatibility for the main DT options. Note that the new
	 * options are mapped onto the old parameters, so this is an external interface
	 * change only.
	 *  @param {object} init Object to map
	 */
	function _fnCompatOpts ( init )
	{
		_fnCompatMap( init, 'ordering',      'bSort' );
		_fnCompatMap( init, 'orderMulti',    'bSortMulti' );
		_fnCompatMap( init, 'orderClasses',  'bSortClasses' );
		_fnCompatMap( init, 'orderCellsTop', 'bSortCellsTop' );
		_fnCompatMap( init, 'order',         'aaSorting' );
		_fnCompatMap( init, 'orderFixed',    'aaSortingFixed' );
		_fnCompatMap( init, 'paging',        'bPaginate' );
		_fnCompatMap( init, 'pagingType',    'sPaginationType' );
		_fnCompatMap( init, 'pageLength',    'iDisplayLength' );
		_fnCompatMap( init, 'searching',     'bFilter' );
	
		// Boolean initialisation of x-scrolling
		if ( typeof init.sScrollX === 'boolean' ) {
			init.sScrollX = init.sScrollX ? '100%' : '';
		}
		if ( typeof init.scrollX === 'boolean' ) {
			init.scrollX = init.scrollX ? '100%' : '';
		}
	
		// Column search objects are in an array, so it needs to be converted
		// element by element
		var searchCols = init.aoSearchCols;
	
		if ( searchCols ) {
			for ( var i=0, ien=searchCols.length ; i<ien ; i++ ) {
				if ( searchCols[i] ) {
					_fnCamelToHungarian( DataTable.models.oSearch, searchCols[i] );
				}
			}
		}
	}
	
	
	/**
	 * Provide backwards compatibility for column options. Note that the new options
	 * are mapped onto the old parameters, so this is an external interface change
	 * only.
	 *  @param {object} init Object to map
	 */
	function _fnCompatCols ( init )
	{
		_fnCompatMap( init, 'orderable',     'bSortable' );
		_fnCompatMap( init, 'orderData',     'aDataSort' );
		_fnCompatMap( init, 'orderSequence', 'asSorting' );
		_fnCompatMap( init, 'orderDataType', 'sortDataType' );
	
		// orderData can be given as an integer
		var dataSort = init.aDataSort;
		if ( typeof dataSort === 'number' && ! $.isArray( dataSort ) ) {
			init.aDataSort = [ dataSort ];
		}
	}
	
	
	/**
	 * Browser feature detection for capabilities, quirks
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnBrowserDetect( settings )
	{
		// We don't need to do this every time DataTables is constructed, the values
		// calculated are specific to the browser and OS configuration which we
		// don't expect to change between initialisations
		if ( ! DataTable.__browser ) {
			var browser = {};
			DataTable.__browser = browser;
	
			// Scrolling feature / quirks detection
			var n = $('<div/>')
				.css( {
					position: 'fixed',
					top: 0,
					left: $(window).scrollLeft()*-1, // allow for scrolling
					height: 1,
					width: 1,
					overflow: 'hidden'
				} )
				.append(
					$('<div/>')
						.css( {
							position: 'absolute',
							top: 1,
							left: 1,
							width: 100,
							overflow: 'scroll'
						} )
						.append(
							$('<div/>')
								.css( {
									width: '100%',
									height: 10
								} )
						)
				)
				.appendTo( 'body' );
	
			var outer = n.children();
			var inner = outer.children();
	
			// Numbers below, in order, are:
			// inner.offsetWidth, inner.clientWidth, outer.offsetWidth, outer.clientWidth
			//
			// IE6 XP:                           100 100 100  83
			// IE7 Vista:                        100 100 100  83
			// IE 8+ Windows:                     83  83 100  83
			// Evergreen Windows:                 83  83 100  83
			// Evergreen Mac with scrollbars:     85  85 100  85
			// Evergreen Mac without scrollbars: 100 100 100 100
	
			// Get scrollbar width
			browser.barWidth = outer[0].offsetWidth - outer[0].clientWidth;
	
			// IE6/7 will oversize a width 100% element inside a scrolling element, to
			// include the width of the scrollbar, while other browsers ensure the inner
			// element is contained without forcing scrolling
			browser.bScrollOversize = inner[0].offsetWidth === 100 && outer[0].clientWidth !== 100;
	
			// In rtl text layout, some browsers (most, but not all) will place the
			// scrollbar on the left, rather than the right.
			browser.bScrollbarLeft = Math.round( inner.offset().left ) !== 1;
	
			// IE8- don't provide height and width for getBoundingClientRect
			browser.bBounding = n[0].getBoundingClientRect().width ? true : false;
	
			n.remove();
		}
	
		$.extend( settings.oBrowser, DataTable.__browser );
		settings.oScroll.iBarWidth = DataTable.__browser.barWidth;
	}
	
	
	/**
	 * Array.prototype reduce[Right] method, used for browsers which don't support
	 * JS 1.6. Done this way to reduce code size, since we iterate either way
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnReduce ( that, fn, init, start, end, inc )
	{
		var
			i = start,
			value,
			isSet = false;
	
		if ( init !== undefined ) {
			value = init;
			isSet = true;
		}
	
		while ( i !== end ) {
			if ( ! that.hasOwnProperty(i) ) {
				continue;
			}
	
			value = isSet ?
				fn( value, that[i], i, that ) :
				that[i];
	
			isSet = true;
			i += inc;
		}
	
		return value;
	}
	
	/**
	 * Add a column to the list used for the table with default values
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} nTh The th element for this column
	 *  @memberof DataTable#oApi
	 */
	function _fnAddColumn( oSettings, nTh )
	{
		// Add column to aoColumns array
		var oDefaults = DataTable.defaults.column;
		var iCol = oSettings.aoColumns.length;
		var oCol = $.extend( {}, DataTable.models.oColumn, oDefaults, {
			"nTh": nTh ? nTh : document.createElement('th'),
			"sTitle":    oDefaults.sTitle    ? oDefaults.sTitle    : nTh ? nTh.innerHTML : '',
			"aDataSort": oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],
			"mData": oDefaults.mData ? oDefaults.mData : iCol,
			idx: iCol
		} );
		oSettings.aoColumns.push( oCol );
	
		// Add search object for column specific search. Note that the `searchCols[ iCol ]`
		// passed into extend can be undefined. This allows the user to give a default
		// with only some of the parameters defined, and also not give a default
		var searchCols = oSettings.aoPreSearchCols;
		searchCols[ iCol ] = $.extend( {}, DataTable.models.oSearch, searchCols[ iCol ] );
	
		// Use the default column options function to initialise classes etc
		_fnColumnOptions( oSettings, iCol, $(nTh).data() );
	}
	
	
	/**
	 * Apply options for a column
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iCol column index to consider
	 *  @param {object} oOptions object with sType, bVisible and bSearchable etc
	 *  @memberof DataTable#oApi
	 */
	function _fnColumnOptions( oSettings, iCol, oOptions )
	{
		var oCol = oSettings.aoColumns[ iCol ];
		var oClasses = oSettings.oClasses;
		var th = $(oCol.nTh);
	
		// Try to get width information from the DOM. We can't get it from CSS
		// as we'd need to parse the CSS stylesheet. `width` option can override
		if ( ! oCol.sWidthOrig ) {
			// Width attribute
			oCol.sWidthOrig = th.attr('width') || null;
	
			// Style attribute
			var t = (th.attr('style') || '').match(/width:\s*(\d+[pxem%]+)/);
			if ( t ) {
				oCol.sWidthOrig = t[1];
			}
		}
	
		/* User specified column options */
		if ( oOptions !== undefined && oOptions !== null )
		{
			// Backwards compatibility
			_fnCompatCols( oOptions );
	
			// Map camel case parameters to their Hungarian counterparts
			_fnCamelToHungarian( DataTable.defaults.column, oOptions, true );
	
			/* Backwards compatibility for mDataProp */
			if ( oOptions.mDataProp !== undefined && !oOptions.mData )
			{
				oOptions.mData = oOptions.mDataProp;
			}
	
			if ( oOptions.sType )
			{
				oCol._sManualType = oOptions.sType;
			}
	
			// `class` is a reserved word in Javascript, so we need to provide
			// the ability to use a valid name for the camel case input
			if ( oOptions.className && ! oOptions.sClass )
			{
				oOptions.sClass = oOptions.className;
			}
			if ( oOptions.sClass ) {
				th.addClass( oOptions.sClass );
			}
	
			$.extend( oCol, oOptions );
			_fnMap( oCol, oOptions, "sWidth", "sWidthOrig" );
	
			/* iDataSort to be applied (backwards compatibility), but aDataSort will take
			 * priority if defined
			 */
			if ( oOptions.iDataSort !== undefined )
			{
				oCol.aDataSort = [ oOptions.iDataSort ];
			}
			_fnMap( oCol, oOptions, "aDataSort" );
		}
	
		/* Cache the data get and set functions for speed */
		var mDataSrc = oCol.mData;
		var mData = _fnGetObjectDataFn( mDataSrc );
		var mRender = oCol.mRender ? _fnGetObjectDataFn( oCol.mRender ) : null;
	
		var attrTest = function( src ) {
			return typeof src === 'string' && src.indexOf('@') !== -1;
		};
		oCol._bAttrSrc = $.isPlainObject( mDataSrc ) && (
			attrTest(mDataSrc.sort) || attrTest(mDataSrc.type) || attrTest(mDataSrc.filter)
		);
		oCol._setter = null;
	
		oCol.fnGetData = function (rowData, type, meta) {
			var innerData = mData( rowData, type, undefined, meta );
	
			return mRender && type ?
				mRender( innerData, type, rowData, meta ) :
				innerData;
		};
		oCol.fnSetData = function ( rowData, val, meta ) {
			return _fnSetObjectDataFn( mDataSrc )( rowData, val, meta );
		};
	
		// Indicate if DataTables should read DOM data as an object or array
		// Used in _fnGetRowElements
		if ( typeof mDataSrc !== 'number' ) {
			oSettings._rowReadObject = true;
		}
	
		/* Feature sorting overrides column specific when off */
		if ( !oSettings.oFeatures.bSort )
		{
			oCol.bSortable = false;
			th.addClass( oClasses.sSortableNone ); // Have to add class here as order event isn't called
		}
	
		/* Check that the class assignment is correct for sorting */
		var bAsc = $.inArray('asc', oCol.asSorting) !== -1;
		var bDesc = $.inArray('desc', oCol.asSorting) !== -1;
		if ( !oCol.bSortable || (!bAsc && !bDesc) )
		{
			oCol.sSortingClass = oClasses.sSortableNone;
			oCol.sSortingClassJUI = "";
		}
		else if ( bAsc && !bDesc )
		{
			oCol.sSortingClass = oClasses.sSortableAsc;
			oCol.sSortingClassJUI = oClasses.sSortJUIAscAllowed;
		}
		else if ( !bAsc && bDesc )
		{
			oCol.sSortingClass = oClasses.sSortableDesc;
			oCol.sSortingClassJUI = oClasses.sSortJUIDescAllowed;
		}
		else
		{
			oCol.sSortingClass = oClasses.sSortable;
			oCol.sSortingClassJUI = oClasses.sSortJUI;
		}
	}
	
	
	/**
	 * Adjust the table column widths for new data. Note: you would probably want to
	 * do a redraw after calling this function!
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnAdjustColumnSizing ( settings )
	{
		/* Not interested in doing column width calculation if auto-width is disabled */
		if ( settings.oFeatures.bAutoWidth !== false )
		{
			var columns = settings.aoColumns;
	
			_fnCalculateColumnWidths( settings );
			for ( var i=0 , iLen=columns.length ; i<iLen ; i++ )
			{
				columns[i].nTh.style.width = columns[i].sWidth;
			}
		}
	
		var scroll = settings.oScroll;
		if ( scroll.sY !== '' || scroll.sX !== '')
		{
			_fnScrollDraw( settings );
		}
	
		_fnCallbackFire( settings, null, 'column-sizing', [settings] );
	}
	
	
	/**
	 * Covert the index of a visible column to the index in the data array (take account
	 * of hidden columns)
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iMatch Visible column index to lookup
	 *  @returns {int} i the data index
	 *  @memberof DataTable#oApi
	 */
	function _fnVisibleToColumnIndex( oSettings, iMatch )
	{
		var aiVis = _fnGetColumns( oSettings, 'bVisible' );
	
		return typeof aiVis[iMatch] === 'number' ?
			aiVis[iMatch] :
			null;
	}
	
	
	/**
	 * Covert the index of an index in the data array and convert it to the visible
	 *   column index (take account of hidden columns)
	 *  @param {int} iMatch Column index to lookup
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {int} i the data index
	 *  @memberof DataTable#oApi
	 */
	function _fnColumnIndexToVisible( oSettings, iMatch )
	{
		var aiVis = _fnGetColumns( oSettings, 'bVisible' );
		var iPos = $.inArray( iMatch, aiVis );
	
		return iPos !== -1 ? iPos : null;
	}
	
	
	/**
	 * Get the number of visible columns
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {int} i the number of visible columns
	 *  @memberof DataTable#oApi
	 */
	function _fnVisbleColumns( oSettings )
	{
		var vis = 0;
	
		// No reduce in IE8, use a loop for now
		$.each( oSettings.aoColumns, function ( i, col ) {
			if ( col.bVisible && $(col.nTh).css('display') !== 'none' ) {
				vis++;
			}
		} );
	
		return vis;
	}
	
	
	/**
	 * Get an array of column indexes that match a given property
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sParam Parameter in aoColumns to look for - typically
	 *    bVisible or bSearchable
	 *  @returns {array} Array of indexes with matched properties
	 *  @memberof DataTable#oApi
	 */
	function _fnGetColumns( oSettings, sParam )
	{
		var a = [];
	
		$.map( oSettings.aoColumns, function(val, i) {
			if ( val[sParam] ) {
				a.push( i );
			}
		} );
	
		return a;
	}
	
	
	/**
	 * Calculate the 'type' of a column
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnColumnTypes ( settings )
	{
		var columns = settings.aoColumns;
		var data = settings.aoData;
		var types = DataTable.ext.type.detect;
		var i, ien, j, jen, k, ken;
		var col, cell, detectedType, cache;
	
		// For each column, spin over the 
		for ( i=0, ien=columns.length ; i<ien ; i++ ) {
			col = columns[i];
			cache = [];
	
			if ( ! col.sType && col._sManualType ) {
				col.sType = col._sManualType;
			}
			else if ( ! col.sType ) {
				for ( j=0, jen=types.length ; j<jen ; j++ ) {
					for ( k=0, ken=data.length ; k<ken ; k++ ) {
						// Use a cache array so we only need to get the type data
						// from the formatter once (when using multiple detectors)
						if ( cache[k] === undefined ) {
							cache[k] = _fnGetCellData( settings, k, i, 'type' );
						}
	
						detectedType = types[j]( cache[k], settings );
	
						// If null, then this type can't apply to this column, so
						// rather than testing all cells, break out. There is an
						// exception for the last type which is `html`. We need to
						// scan all rows since it is possible to mix string and HTML
						// types
						if ( ! detectedType && j !== types.length-1 ) {
							break;
						}
	
						// Only a single match is needed for html type since it is
						// bottom of the pile and very similar to string
						if ( detectedType === 'html' ) {
							break;
						}
					}
	
					// Type is valid for all data points in the column - use this
					// type
					if ( detectedType ) {
						col.sType = detectedType;
						break;
					}
				}
	
				// Fall back - if no type was detected, always use string
				if ( ! col.sType ) {
					col.sType = 'string';
				}
			}
		}
	}
	
	
	/**
	 * Take the column definitions and static columns arrays and calculate how
	 * they relate to column indexes. The callback function will then apply the
	 * definition found for a column to a suitable configuration object.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {array} aoColDefs The aoColumnDefs array that is to be applied
	 *  @param {array} aoCols The aoColumns array that defines columns individually
	 *  @param {function} fn Callback function - takes two parameters, the calculated
	 *    column index and the definition for that column.
	 *  @memberof DataTable#oApi
	 */
	function _fnApplyColumnDefs( oSettings, aoColDefs, aoCols, fn )
	{
		var i, iLen, j, jLen, k, kLen, def;
		var columns = oSettings.aoColumns;
	
		// Column definitions with aTargets
		if ( aoColDefs )
		{
			/* Loop over the definitions array - loop in reverse so first instance has priority */
			for ( i=aoColDefs.length-1 ; i>=0 ; i-- )
			{
				def = aoColDefs[i];
	
				/* Each definition can target multiple columns, as it is an array */
				var aTargets = def.targets !== undefined ?
					def.targets :
					def.aTargets;
	
				if ( ! $.isArray( aTargets ) )
				{
					aTargets = [ aTargets ];
				}
	
				for ( j=0, jLen=aTargets.length ; j<jLen ; j++ )
				{
					if ( typeof aTargets[j] === 'number' && aTargets[j] >= 0 )
					{
						/* Add columns that we don't yet know about */
						while( columns.length <= aTargets[j] )
						{
							_fnAddColumn( oSettings );
						}
	
						/* Integer, basic index */
						fn( aTargets[j], def );
					}
					else if ( typeof aTargets[j] === 'number' && aTargets[j] < 0 )
					{
						/* Negative integer, right to left column counting */
						fn( columns.length+aTargets[j], def );
					}
					else if ( typeof aTargets[j] === 'string' )
					{
						/* Class name matching on TH element */
						for ( k=0, kLen=columns.length ; k<kLen ; k++ )
						{
							if ( aTargets[j] == "_all" ||
							     $(columns[k].nTh).hasClass( aTargets[j] ) )
							{
								fn( k, def );
							}
						}
					}
				}
			}
		}
	
		// Statically defined columns array
		if ( aoCols )
		{
			for ( i=0, iLen=aoCols.length ; i<iLen ; i++ )
			{
				fn( i, aoCols[i] );
			}
		}
	}
	
	/**
	 * Add a data array to the table, creating DOM node etc. This is the parallel to
	 * _fnGatherData, but for adding rows from a Javascript source, rather than a
	 * DOM source.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {array} aData data array to be added
	 *  @param {node} [nTr] TR element to add to the table - optional. If not given,
	 *    DataTables will create a row automatically
	 *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
	 *    if nTr is.
	 *  @returns {int} >=0 if successful (index of new aoData entry), -1 if failed
	 *  @memberof DataTable#oApi
	 */
	function _fnAddData ( oSettings, aDataIn, nTr, anTds )
	{
		/* Create the object for storing information about this new row */
		var iRow = oSettings.aoData.length;
		var oData = $.extend( true, {}, DataTable.models.oRow, {
			src: nTr ? 'dom' : 'data',
			idx: iRow
		} );
	
		oData._aData = aDataIn;
		oSettings.aoData.push( oData );
	
		/* Create the cells */
		var nTd, sThisType;
		var columns = oSettings.aoColumns;
	
		// Invalidate the column types as the new data needs to be revalidated
		for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
		{
			columns[i].sType = null;
		}
	
		/* Add to the display array */
		oSettings.aiDisplayMaster.push( iRow );
	
		var id = oSettings.rowIdFn( aDataIn );
		if ( id !== undefined ) {
			oSettings.aIds[ id ] = oData;
		}
	
		/* Create the DOM information, or register it if already present */
		if ( nTr || ! oSettings.oFeatures.bDeferRender )
		{
			_fnCreateTr( oSettings, iRow, nTr, anTds );
		}
	
		return iRow;
	}
	
	
	/**
	 * Add one or more TR elements to the table. Generally we'd expect to
	 * use this for reading data from a DOM sourced table, but it could be
	 * used for an TR element. Note that if a TR is given, it is used (i.e.
	 * it is not cloned).
	 *  @param {object} settings dataTables settings object
	 *  @param {array|node|jQuery} trs The TR element(s) to add to the table
	 *  @returns {array} Array of indexes for the added rows
	 *  @memberof DataTable#oApi
	 */
	function _fnAddTr( settings, trs )
	{
		var row;
	
		// Allow an individual node to be passed in
		if ( ! (trs instanceof $) ) {
			trs = $(trs);
		}
	
		return trs.map( function (i, el) {
			row = _fnGetRowElements( settings, el );
			return _fnAddData( settings, row.data, el, row.cells );
		} );
	}
	
	
	/**
	 * Take a TR element and convert it to an index in aoData
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} n the TR element to find
	 *  @returns {int} index if the node is found, null if not
	 *  @memberof DataTable#oApi
	 */
	function _fnNodeToDataIndex( oSettings, n )
	{
		return (n._DT_RowIndex!==undefined) ? n._DT_RowIndex : null;
	}
	
	
	/**
	 * Take a TD element and convert it into a column data index (not the visible index)
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iRow The row number the TD/TH can be found in
	 *  @param {node} n The TD/TH element to find
	 *  @returns {int} index if the node is found, -1 if not
	 *  @memberof DataTable#oApi
	 */
	function _fnNodeToColumnIndex( oSettings, iRow, n )
	{
		return $.inArray( n, oSettings.aoData[ iRow ].anCells );
	}
	
	
	/**
	 * Get the data for a given cell from the internal cache, taking into account data mapping
	 *  @param {object} settings dataTables settings object
	 *  @param {int} rowIdx aoData row id
	 *  @param {int} colIdx Column index
	 *  @param {string} type data get type ('display', 'type' 'filter' 'sort')
	 *  @returns {*} Cell data
	 *  @memberof DataTable#oApi
	 */
	function _fnGetCellData( settings, rowIdx, colIdx, type )
	{
		var draw           = settings.iDraw;
		var col            = settings.aoColumns[colIdx];
		var rowData        = settings.aoData[rowIdx]._aData;
		var defaultContent = col.sDefaultContent;
		var cellData       = col.fnGetData( rowData, type, {
			settings: settings,
			row:      rowIdx,
			col:      colIdx
		} );
	
		if ( cellData === undefined ) {
			if ( settings.iDrawError != draw && defaultContent === null ) {
				_fnLog( settings, 0, "Requested unknown parameter "+
					(typeof col.mData=='function' ? '{function}' : "'"+col.mData+"'")+
					" for row "+rowIdx+", column "+colIdx, 4 );
				settings.iDrawError = draw;
			}
			return defaultContent;
		}
	
		// When the data source is null and a specific data type is requested (i.e.
		// not the original data), we can use default column data
		if ( (cellData === rowData || cellData === null) && defaultContent !== null && type !== undefined ) {
			cellData = defaultContent;
		}
		else if ( typeof cellData === 'function' ) {
			// If the data source is a function, then we run it and use the return,
			// executing in the scope of the data object (for instances)
			return cellData.call( rowData );
		}
	
		if ( cellData === null && type == 'display' ) {
			return '';
		}
		return cellData;
	}
	
	
	/**
	 * Set the value for a specific cell, into the internal data cache
	 *  @param {object} settings dataTables settings object
	 *  @param {int} rowIdx aoData row id
	 *  @param {int} colIdx Column index
	 *  @param {*} val Value to set
	 *  @memberof DataTable#oApi
	 */
	function _fnSetCellData( settings, rowIdx, colIdx, val )
	{
		var col     = settings.aoColumns[colIdx];
		var rowData = settings.aoData[rowIdx]._aData;
	
		col.fnSetData( rowData, val, {
			settings: settings,
			row:      rowIdx,
			col:      colIdx
		}  );
	}
	
	
	// Private variable that is used to match action syntax in the data property object
	var __reArray = /\[.*?\]$/;
	var __reFn = /\(\)$/;
	
	/**
	 * Split string on periods, taking into account escaped periods
	 * @param  {string} str String to split
	 * @return {array} Split string
	 */
	function _fnSplitObjNotation( str )
	{
		return $.map( str.match(/(\\.|[^\.])+/g) || [''], function ( s ) {
			return s.replace(/\\\./g, '.');
		} );
	}
	
	
	/**
	 * Return a function that can be used to get data from a source object, taking
	 * into account the ability to use nested objects as a source
	 *  @param {string|int|function} mSource The data source for the object
	 *  @returns {function} Data get function
	 *  @memberof DataTable#oApi
	 */
	function _fnGetObjectDataFn( mSource )
	{
		if ( $.isPlainObject( mSource ) )
		{
			/* Build an object of get functions, and wrap them in a single call */
			var o = {};
			$.each( mSource, function (key, val) {
				if ( val ) {
					o[key] = _fnGetObjectDataFn( val );
				}
			} );
	
			return function (data, type, row, meta) {
				var t = o[type] || o._;
				return t !== undefined ?
					t(data, type, row, meta) :
					data;
			};
		}
		else if ( mSource === null )
		{
			/* Give an empty string for rendering / sorting etc */
			return function (data) { // type, row and meta also passed, but not used
				return data;
			};
		}
		else if ( typeof mSource === 'function' )
		{
			return function (data, type, row, meta) {
				return mSource( data, type, row, meta );
			};
		}
		else if ( typeof mSource === 'string' && (mSource.indexOf('.') !== -1 ||
			      mSource.indexOf('[') !== -1 || mSource.indexOf('(') !== -1) )
		{
			/* If there is a . in the source string then the data source is in a
			 * nested object so we loop over the data for each level to get the next
			 * level down. On each loop we test for undefined, and if found immediately
			 * return. This allows entire objects to be missing and sDefaultContent to
			 * be used if defined, rather than throwing an error
			 */
			var fetchData = function (data, type, src) {
				var arrayNotation, funcNotation, out, innerSrc;
	
				if ( src !== "" )
				{
					var a = _fnSplitObjNotation( src );
	
					for ( var i=0, iLen=a.length ; i<iLen ; i++ )
					{
						// Check if we are dealing with special notation
						arrayNotation = a[i].match(__reArray);
						funcNotation = a[i].match(__reFn);
	
						if ( arrayNotation )
						{
							// Array notation
							a[i] = a[i].replace(__reArray, '');
	
							// Condition allows simply [] to be passed in
							if ( a[i] !== "" ) {
								data = data[ a[i] ];
							}
							out = [];
	
							// Get the remainder of the nested object to get
							a.splice( 0, i+1 );
							innerSrc = a.join('.');
	
							// Traverse each entry in the array getting the properties requested
							if ( $.isArray( data ) ) {
								for ( var j=0, jLen=data.length ; j<jLen ; j++ ) {
									out.push( fetchData( data[j], type, innerSrc ) );
								}
							}
	
							// If a string is given in between the array notation indicators, that
							// is used to join the strings together, otherwise an array is returned
							var join = arrayNotation[0].substring(1, arrayNotation[0].length-1);
							data = (join==="") ? out : out.join(join);
	
							// The inner call to fetchData has already traversed through the remainder
							// of the source requested, so we exit from the loop
							break;
						}
						else if ( funcNotation )
						{
							// Function call
							a[i] = a[i].replace(__reFn, '');
							data = data[ a[i] ]();
							continue;
						}
	
						if ( data === null || data[ a[i] ] === undefined )
						{
							return undefined;
						}
						data = data[ a[i] ];
					}
				}
	
				return data;
			};
	
			return function (data, type) { // row and meta also passed, but not used
				return fetchData( data, type, mSource );
			};
		}
		else
		{
			/* Array or flat object mapping */
			return function (data, type) { // row and meta also passed, but not used
				return data[mSource];
			};
		}
	}
	
	
	/**
	 * Return a function that can be used to set data from a source object, taking
	 * into account the ability to use nested objects as a source
	 *  @param {string|int|function} mSource The data source for the object
	 *  @returns {function} Data set function
	 *  @memberof DataTable#oApi
	 */
	function _fnSetObjectDataFn( mSource )
	{
		if ( $.isPlainObject( mSource ) )
		{
			/* Unlike get, only the underscore (global) option is used for for
			 * setting data since we don't know the type here. This is why an object
			 * option is not documented for `mData` (which is read/write), but it is
			 * for `mRender` which is read only.
			 */
			return _fnSetObjectDataFn( mSource._ );
		}
		else if ( mSource === null )
		{
			/* Nothing to do when the data source is null */
			return function () {};
		}
		else if ( typeof mSource === 'function' )
		{
			return function (data, val, meta) {
				mSource( data, 'set', val, meta );
			};
		}
		else if ( typeof mSource === 'string' && (mSource.indexOf('.') !== -1 ||
			      mSource.indexOf('[') !== -1 || mSource.indexOf('(') !== -1) )
		{
			/* Like the get, we need to get data from a nested object */
			var setData = function (data, val, src) {
				var a = _fnSplitObjNotation( src ), b;
				var aLast = a[a.length-1];
				var arrayNotation, funcNotation, o, innerSrc;
	
				for ( var i=0, iLen=a.length-1 ; i<iLen ; i++ )
				{
					// Check if we are dealing with an array notation request
					arrayNotation = a[i].match(__reArray);
					funcNotation = a[i].match(__reFn);
	
					if ( arrayNotation )
					{
						a[i] = a[i].replace(__reArray, '');
						data[ a[i] ] = [];
	
						// Get the remainder of the nested object to set so we can recurse
						b = a.slice();
						b.splice( 0, i+1 );
						innerSrc = b.join('.');
	
						// Traverse each entry in the array setting the properties requested
						if ( $.isArray( val ) )
						{
							for ( var j=0, jLen=val.length ; j<jLen ; j++ )
							{
								o = {};
								setData( o, val[j], innerSrc );
								data[ a[i] ].push( o );
							}
						}
						else
						{
							// We've been asked to save data to an array, but it
							// isn't array data to be saved. Best that can be done
							// is to just save the value.
							data[ a[i] ] = val;
						}
	
						// The inner call to setData has already traversed through the remainder
						// of the source and has set the data, thus we can exit here
						return;
					}
					else if ( funcNotation )
					{
						// Function call
						a[i] = a[i].replace(__reFn, '');
						data = data[ a[i] ]( val );
					}
	
					// If the nested object doesn't currently exist - since we are
					// trying to set the value - create it
					if ( data[ a[i] ] === null || data[ a[i] ] === undefined )
					{
						data[ a[i] ] = {};
					}
					data = data[ a[i] ];
				}
	
				// Last item in the input - i.e, the actual set
				if ( aLast.match(__reFn ) )
				{
					// Function call
					data = data[ aLast.replace(__reFn, '') ]( val );
				}
				else
				{
					// If array notation is used, we just want to strip it and use the property name
					// and assign the value. If it isn't used, then we get the result we want anyway
					data[ aLast.replace(__reArray, '') ] = val;
				}
			};
	
			return function (data, val) { // meta is also passed in, but not used
				return setData( data, val, mSource );
			};
		}
		else
		{
			/* Array or flat object mapping */
			return function (data, val) { // meta is also passed in, but not used
				data[mSource] = val;
			};
		}
	}
	
	
	/**
	 * Return an array with the full table data
	 *  @param {object} oSettings dataTables settings object
	 *  @returns array {array} aData Master data array
	 *  @memberof DataTable#oApi
	 */
	function _fnGetDataMaster ( settings )
	{
		return _pluck( settings.aoData, '_aData' );
	}
	
	
	/**
	 * Nuke the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnClearTable( settings )
	{
		settings.aoData.length = 0;
		settings.aiDisplayMaster.length = 0;
		settings.aiDisplay.length = 0;
		settings.aIds = {};
	}
	
	
	 /**
	 * Take an array of integers (index array) and remove a target integer (value - not
	 * the key!)
	 *  @param {array} a Index array to target
	 *  @param {int} iTarget value to find
	 *  @memberof DataTable#oApi
	 */
	function _fnDeleteIndex( a, iTarget, splice )
	{
		var iTargetIndex = -1;
	
		for ( var i=0, iLen=a.length ; i<iLen ; i++ )
		{
			if ( a[i] == iTarget )
			{
				iTargetIndex = i;
			}
			else if ( a[i] > iTarget )
			{
				a[i]--;
			}
		}
	
		if ( iTargetIndex != -1 && splice === undefined )
		{
			a.splice( iTargetIndex, 1 );
		}
	}
	
	
	/**
	 * Mark cached data as invalid such that a re-read of the data will occur when
	 * the cached data is next requested. Also update from the data source object.
	 *
	 * @param {object} settings DataTables settings object
	 * @param {int}    rowIdx   Row index to invalidate
	 * @param {string} [src]    Source to invalidate from: undefined, 'auto', 'dom'
	 *     or 'data'
	 * @param {int}    [colIdx] Column index to invalidate. If undefined the whole
	 *     row will be invalidated
	 * @memberof DataTable#oApi
	 *
	 * @todo For the modularisation of v1.11 this will need to become a callback, so
	 *   the sort and filter methods can subscribe to it. That will required
	 *   initialisation options for sorting, which is why it is not already baked in
	 */
	function _fnInvalidate( settings, rowIdx, src, colIdx )
	{
		var row = settings.aoData[ rowIdx ];
		var i, ien;
		var cellWrite = function ( cell, col ) {
			// This is very frustrating, but in IE if you just write directly
			// to innerHTML, and elements that are overwritten are GC'ed,
			// even if there is a reference to them elsewhere
			while ( cell.childNodes.length ) {
				cell.removeChild( cell.firstChild );
			}
	
			cell.innerHTML = _fnGetCellData( settings, rowIdx, col, 'display' );
		};
	
		// Are we reading last data from DOM or the data object?
		if ( src === 'dom' || ((! src || src === 'auto') && row.src === 'dom') ) {
			// Read the data from the DOM
			row._aData = _fnGetRowElements(
					settings, row, colIdx, colIdx === undefined ? undefined : row._aData
				)
				.data;
		}
		else {
			// Reading from data object, update the DOM
			var cells = row.anCells;
	
			if ( cells ) {
				if ( colIdx !== undefined ) {
					cellWrite( cells[colIdx], colIdx );
				}
				else {
					for ( i=0, ien=cells.length ; i<ien ; i++ ) {
						cellWrite( cells[i], i );
					}
				}
			}
		}
	
		// For both row and cell invalidation, the cached data for sorting and
		// filtering is nulled out
		row._aSortData = null;
		row._aFilterData = null;
	
		// Invalidate the type for a specific column (if given) or all columns since
		// the data might have changed
		var cols = settings.aoColumns;
		if ( colIdx !== undefined ) {
			cols[ colIdx ].sType = null;
		}
		else {
			for ( i=0, ien=cols.length ; i<ien ; i++ ) {
				cols[i].sType = null;
			}
	
			// Update DataTables special `DT_*` attributes for the row
			_fnRowAttributes( settings, row );
		}
	}
	
	
	/**
	 * Build a data source object from an HTML row, reading the contents of the
	 * cells that are in the row.
	 *
	 * @param {object} settings DataTables settings object
	 * @param {node|object} TR element from which to read data or existing row
	 *   object from which to re-read the data from the cells
	 * @param {int} [colIdx] Optional column index
	 * @param {array|object} [d] Data source object. If `colIdx` is given then this
	 *   parameter should also be given and will be used to write the data into.
	 *   Only the column in question will be written
	 * @returns {object} Object with two parameters: `data` the data read, in
	 *   document order, and `cells` and array of nodes (they can be useful to the
	 *   caller, so rather than needing a second traversal to get them, just return
	 *   them from here).
	 * @memberof DataTable#oApi
	 */
	function _fnGetRowElements( settings, row, colIdx, d )
	{
		var
			tds = [],
			td = row.firstChild,
			name, col, o, i=0, contents,
			columns = settings.aoColumns,
			objectRead = settings._rowReadObject;
	
		// Allow the data object to be passed in, or construct
		d = d !== undefined ?
			d :
			objectRead ?
				{} :
				[];
	
		var attr = function ( str, td  ) {
			if ( typeof str === 'string' ) {
				var idx = str.indexOf('@');
	
				if ( idx !== -1 ) {
					var attr = str.substring( idx+1 );
					var setter = _fnSetObjectDataFn( str );
					setter( d, td.getAttribute( attr ) );
				}
			}
		};
	
		// Read data from a cell and store into the data object
		var cellProcess = function ( cell ) {
			if ( colIdx === undefined || colIdx === i ) {
				col = columns[i];
				contents = $.trim(cell.innerHTML);
	
				if ( col && col._bAttrSrc ) {
					var setter = _fnSetObjectDataFn( col.mData._ );
					setter( d, contents );
	
					attr( col.mData.sort, cell );
					attr( col.mData.type, cell );
					attr( col.mData.filter, cell );
				}
				else {
					// Depending on the `data` option for the columns the data can
					// be read to either an object or an array.
					if ( objectRead ) {
						if ( ! col._setter ) {
							// Cache the setter function
							col._setter = _fnSetObjectDataFn( col.mData );
						}
						col._setter( d, contents );
					}
					else {
						d[i] = contents;
					}
				}
			}
	
			i++;
		};
	
		if ( td ) {
			// `tr` element was passed in
			while ( td ) {
				name = td.nodeName.toUpperCase();
	
				if ( name == "TD" || name == "TH" ) {
					cellProcess( td );
					tds.push( td );
				}
	
				td = td.nextSibling;
			}
		}
		else {
			// Existing row object passed in
			tds = row.anCells;
	
			for ( var j=0, jen=tds.length ; j<jen ; j++ ) {
				cellProcess( tds[j] );
			}
		}
	
		// Read the ID from the DOM if present
		var rowNode = row.firstChild ? row : row.nTr;
	
		if ( rowNode ) {
			var id = rowNode.getAttribute( 'id' );
	
			if ( id ) {
				_fnSetObjectDataFn( settings.rowId )( d, id );
			}
		}
	
		return {
			data: d,
			cells: tds
		};
	}
	/**
	 * Create a new TR element (and it's TD children) for a row
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iRow Row to consider
	 *  @param {node} [nTrIn] TR element to add to the table - optional. If not given,
	 *    DataTables will create a row automatically
	 *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
	 *    if nTr is.
	 *  @memberof DataTable#oApi
	 */
	function _fnCreateTr ( oSettings, iRow, nTrIn, anTds )
	{
		var
			row = oSettings.aoData[iRow],
			rowData = row._aData,
			cells = [],
			nTr, nTd, oCol,
			i, iLen, create;
	
		if ( row.nTr === null )
		{
			nTr = nTrIn || document.createElement('tr');
	
			row.nTr = nTr;
			row.anCells = cells;
	
			/* Use a private property on the node to allow reserve mapping from the node
			 * to the aoData array for fast look up
			 */
			nTr._DT_RowIndex = iRow;
	
			/* Special parameters can be given by the data source to be used on the row */
			_fnRowAttributes( oSettings, row );
	
			/* Process each column */
			for ( i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
			{
				oCol = oSettings.aoColumns[i];
				create = nTrIn ? false : true;
	
				nTd = create ? document.createElement( oCol.sCellType ) : anTds[i];
				nTd._DT_CellIndex = {
					row: iRow,
					column: i
				};
				
				cells.push( nTd );
	
				// Need to create the HTML if new, or if a rendering function is defined
				if ( create || ((!nTrIn || oCol.mRender || oCol.mData !== i) &&
					 (!$.isPlainObject(oCol.mData) || oCol.mData._ !== i+'.display')
				)) {
					nTd.innerHTML = _fnGetCellData( oSettings, iRow, i, 'display' );
				}
	
				/* Add user defined class */
				if ( oCol.sClass )
				{
					nTd.className += ' '+oCol.sClass;
				}
	
				// Visibility - add or remove as required
				if ( oCol.bVisible && ! nTrIn )
				{
					nTr.appendChild( nTd );
				}
				else if ( ! oCol.bVisible && nTrIn )
				{
					nTd.parentNode.removeChild( nTd );
				}
	
				if ( oCol.fnCreatedCell )
				{
					oCol.fnCreatedCell.call( oSettings.oInstance,
						nTd, _fnGetCellData( oSettings, iRow, i ), rowData, iRow, i
					);
				}
			}
	
			_fnCallbackFire( oSettings, 'aoRowCreatedCallback', null, [nTr, rowData, iRow, cells] );
		}
	
		// Remove once webkit bug 131819 and Chromium bug 365619 have been resolved
		// and deployed
		row.nTr.setAttribute( 'role', 'row' );
	}
	
	
	/**
	 * Add attributes to a row based on the special `DT_*` parameters in a data
	 * source object.
	 *  @param {object} settings DataTables settings object
	 *  @param {object} DataTables row object for the row to be modified
	 *  @memberof DataTable#oApi
	 */
	function _fnRowAttributes( settings, row )
	{
		var tr = row.nTr;
		var data = row._aData;
	
		if ( tr ) {
			var id = settings.rowIdFn( data );
	
			if ( id ) {
				tr.id = id;
			}
	
			if ( data.DT_RowClass ) {
				// Remove any classes added by DT_RowClass before
				var a = data.DT_RowClass.split(' ');
				row.__rowc = row.__rowc ?
					_unique( row.__rowc.concat( a ) ) :
					a;
	
				$(tr)
					.removeClass( row.__rowc.join(' ') )
					.addClass( data.DT_RowClass );
			}
	
			if ( data.DT_RowAttr ) {
				$(tr).attr( data.DT_RowAttr );
			}
	
			if ( data.DT_RowData ) {
				$(tr).data( data.DT_RowData );
			}
		}
	}
	
	
	/**
	 * Create the HTML header for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnBuildHead( oSettings )
	{
		var i, ien, cell, row, column;
		var thead = oSettings.nTHead;
		var tfoot = oSettings.nTFoot;
		var createHeader = $('th, td', thead).length === 0;
		var classes = oSettings.oClasses;
		var columns = oSettings.aoColumns;
	
		if ( createHeader ) {
			row = $('<tr/>').appendTo( thead );
		}
	
		for ( i=0, ien=columns.length ; i<ien ; i++ ) {
			column = columns[i];
			cell = $( column.nTh ).addClass( column.sClass );
	
			if ( createHeader ) {
				cell.appendTo( row );
			}
	
			// 1.11 move into sorting
			if ( oSettings.oFeatures.bSort ) {
				cell.addClass( column.sSortingClass );
	
				if ( column.bSortable !== false ) {
					cell
						.attr( 'tabindex', oSettings.iTabIndex )
						.attr( 'aria-controls', oSettings.sTableId );
	
					_fnSortAttachListener( oSettings, column.nTh, i );
				}
			}
	
			if ( column.sTitle != cell[0].innerHTML ) {
				cell.html( column.sTitle );
			}
	
			_fnRenderer( oSettings, 'header' )(
				oSettings, cell, column, classes
			);
		}
	
		if ( createHeader ) {
			_fnDetectHeader( oSettings.aoHeader, thead );
		}
		
		/* ARIA role for the rows */
	 	$(thead).find('>tr').attr('role', 'row');
	
		/* Deal with the footer - add classes if required */
		$(thead).find('>tr>th, >tr>td').addClass( classes.sHeaderTH );
		$(tfoot).find('>tr>th, >tr>td').addClass( classes.sFooterTH );
	
		// Cache the footer cells. Note that we only take the cells from the first
		// row in the footer. If there is more than one row the user wants to
		// interact with, they need to use the table().foot() method. Note also this
		// allows cells to be used for multiple columns using colspan
		if ( tfoot !== null ) {
			var cells = oSettings.aoFooter[0];
	
			for ( i=0, ien=cells.length ; i<ien ; i++ ) {
				column = columns[i];
				column.nTf = cells[i].cell;
	
				if ( column.sClass ) {
					$(column.nTf).addClass( column.sClass );
				}
			}
		}
	}
	
	
	/**
	 * Draw the header (or footer) element based on the column visibility states. The
	 * methodology here is to use the layout array from _fnDetectHeader, modified for
	 * the instantaneous column visibility, to construct the new layout. The grid is
	 * traversed over cell at a time in a rows x columns grid fashion, although each
	 * cell insert can cover multiple elements in the grid - which is tracks using the
	 * aApplied array. Cell inserts in the grid will only occur where there isn't
	 * already a cell in that position.
	 *  @param {object} oSettings dataTables settings object
	 *  @param array {objects} aoSource Layout array from _fnDetectHeader
	 *  @param {boolean} [bIncludeHidden=false] If true then include the hidden columns in the calc,
	 *  @memberof DataTable#oApi
	 */
	function _fnDrawHead( oSettings, aoSource, bIncludeHidden )
	{
		var i, iLen, j, jLen, k, kLen, n, nLocalTr;
		var aoLocal = [];
		var aApplied = [];
		var iColumns = oSettings.aoColumns.length;
		var iRowspan, iColspan;
	
		if ( ! aoSource )
		{
			return;
		}
	
		if (  bIncludeHidden === undefined )
		{
			bIncludeHidden = false;
		}
	
		/* Make a copy of the master layout array, but without the visible columns in it */
		for ( i=0, iLen=aoSource.length ; i<iLen ; i++ )
		{
			aoLocal[i] = aoSource[i].slice();
			aoLocal[i].nTr = aoSource[i].nTr;
	
			/* Remove any columns which are currently hidden */
			for ( j=iColumns-1 ; j>=0 ; j-- )
			{
				if ( !oSettings.aoColumns[j].bVisible && !bIncludeHidden )
				{
					aoLocal[i].splice( j, 1 );
				}
			}
	
			/* Prep the applied array - it needs an element for each row */
			aApplied.push( [] );
		}
	
		for ( i=0, iLen=aoLocal.length ; i<iLen ; i++ )
		{
			nLocalTr = aoLocal[i].nTr;
	
			/* All cells are going to be replaced, so empty out the row */
			if ( nLocalTr )
			{
				while( (n = nLocalTr.firstChild) )
				{
					nLocalTr.removeChild( n );
				}
			}
	
			for ( j=0, jLen=aoLocal[i].length ; j<jLen ; j++ )
			{
				iRowspan = 1;
				iColspan = 1;
	
				/* Check to see if there is already a cell (row/colspan) covering our target
				 * insert point. If there is, then there is nothing to do.
				 */
				if ( aApplied[i][j] === undefined )
				{
					nLocalTr.appendChild( aoLocal[i][j].cell );
					aApplied[i][j] = 1;
	
					/* Expand the cell to cover as many rows as needed */
					while ( aoLocal[i+iRowspan] !== undefined &&
					        aoLocal[i][j].cell == aoLocal[i+iRowspan][j].cell )
					{
						aApplied[i+iRowspan][j] = 1;
						iRowspan++;
					}
	
					/* Expand the cell to cover as many columns as needed */
					while ( aoLocal[i][j+iColspan] !== undefined &&
					        aoLocal[i][j].cell == aoLocal[i][j+iColspan].cell )
					{
						/* Must update the applied array over the rows for the columns */
						for ( k=0 ; k<iRowspan ; k++ )
						{
							aApplied[i+k][j+iColspan] = 1;
						}
						iColspan++;
					}
	
					/* Do the actual expansion in the DOM */
					$(aoLocal[i][j].cell)
						.attr('rowspan', iRowspan)
						.attr('colspan', iColspan);
				}
			}
		}
	}
	
	
	/**
	 * Insert the required TR nodes into the table for display
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnDraw( oSettings )
	{
		/* Provide a pre-callback function which can be used to cancel the draw is false is returned */
		var aPreDraw = _fnCallbackFire( oSettings, 'aoPreDrawCallback', 'preDraw', [oSettings] );
		if ( $.inArray( false, aPreDraw ) !== -1 )
		{
			_fnProcessingDisplay( oSettings, false );
			return;
		}
	
		var i, iLen, n;
		var anRows = [];
		var iRowCount = 0;
		var asStripeClasses = oSettings.asStripeClasses;
		var iStripes = asStripeClasses.length;
		var iOpenRows = oSettings.aoOpenRows.length;
		var oLang = oSettings.oLanguage;
		var iInitDisplayStart = oSettings.iInitDisplayStart;
		var bServerSide = _fnDataSource( oSettings ) == 'ssp';
		var aiDisplay = oSettings.aiDisplay;
	
		oSettings.bDrawing = true;
	
		/* Check and see if we have an initial draw position from state saving */
		if ( iInitDisplayStart !== undefined && iInitDisplayStart !== -1 )
		{
			oSettings._iDisplayStart = bServerSide ?
				iInitDisplayStart :
				iInitDisplayStart >= oSettings.fnRecordsDisplay() ?
					0 :
					iInitDisplayStart;
	
			oSettings.iInitDisplayStart = -1;
		}
	
		var iDisplayStart = oSettings._iDisplayStart;
		var iDisplayEnd = oSettings.fnDisplayEnd();
	
		/* Server-side processing draw intercept */
		if ( oSettings.bDeferLoading )
		{
			oSettings.bDeferLoading = false;
			oSettings.iDraw++;
			_fnProcessingDisplay( oSettings, false );
		}
		else if ( !bServerSide )
		{
			oSettings.iDraw++;
		}
		else if ( !oSettings.bDestroying && !_fnAjaxUpdate( oSettings ) )
		{
			return;
		}
	
		if ( aiDisplay.length !== 0 )
		{
			var iStart = bServerSide ? 0 : iDisplayStart;
			var iEnd = bServerSide ? oSettings.aoData.length : iDisplayEnd;
	
			for ( var j=iStart ; j<iEnd ; j++ )
			{
				var iDataIndex = aiDisplay[j];
				var aoData = oSettings.aoData[ iDataIndex ];
				if ( aoData.nTr === null )
				{
					_fnCreateTr( oSettings, iDataIndex );
				}
	
				var nRow = aoData.nTr;
	
				/* Remove the old striping classes and then add the new one */
				if ( iStripes !== 0 )
				{
					var sStripe = asStripeClasses[ iRowCount % iStripes ];
					if ( aoData._sRowStripe != sStripe )
					{
						$(nRow).removeClass( aoData._sRowStripe ).addClass( sStripe );
						aoData._sRowStripe = sStripe;
					}
				}
	
				// Row callback functions - might want to manipulate the row
				// iRowCount and j are not currently documented. Are they at all
				// useful?
				_fnCallbackFire( oSettings, 'aoRowCallback', null,
					[nRow, aoData._aData, iRowCount, j, iDataIndex] );
	
				anRows.push( nRow );
				iRowCount++;
			}
		}
		else
		{
			/* Table is empty - create a row with an empty message in it */
			var sZero = oLang.sZeroRecords;
			if ( oSettings.iDraw == 1 &&  _fnDataSource( oSettings ) == 'ajax' )
			{
				sZero = oLang.sLoadingRecords;
			}
			else if ( oLang.sEmptyTable && oSettings.fnRecordsTotal() === 0 )
			{
				sZero = oLang.sEmptyTable;
			}
	
			anRows[ 0 ] = $( '<tr/>', { 'class': iStripes ? asStripeClasses[0] : '' } )
				.append( $('<td />', {
					'valign':  'top',
					'colSpan': _fnVisbleColumns( oSettings ),
					'class':   oSettings.oClasses.sRowEmpty
				} ).html( sZero ) )[0];
		}
	
		/* Header and footer callbacks */
		_fnCallbackFire( oSettings, 'aoHeaderCallback', 'header', [ $(oSettings.nTHead).children('tr')[0],
			_fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );
	
		_fnCallbackFire( oSettings, 'aoFooterCallback', 'footer', [ $(oSettings.nTFoot).children('tr')[0],
			_fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );
	
		var body = $(oSettings.nTBody);
	
		body.children().detach();
		body.append( $(anRows) );
	
		/* Call all required callback functions for the end of a draw */
		_fnCallbackFire( oSettings, 'aoDrawCallback', 'draw', [oSettings] );
	
		/* Draw is complete, sorting and filtering must be as well */
		oSettings.bSorted = false;
		oSettings.bFiltered = false;
		oSettings.bDrawing = false;
	}
	
	
	/**
	 * Redraw the table - taking account of the various features which are enabled
	 *  @param {object} oSettings dataTables settings object
	 *  @param {boolean} [holdPosition] Keep the current paging position. By default
	 *    the paging is reset to the first page
	 *  @memberof DataTable#oApi
	 */
	function _fnReDraw( settings, holdPosition )
	{
		var
			features = settings.oFeatures,
			sort     = features.bSort,
			filter   = features.bFilter;
	
		if ( sort ) {
			_fnSort( settings );
		}
	
		if ( filter ) {
			_fnFilterComplete( settings, settings.oPreviousSearch );
		}
		else {
			// No filtering, so we want to just use the display master
			settings.aiDisplay = settings.aiDisplayMaster.slice();
		}
	
		if ( holdPosition !== true ) {
			settings._iDisplayStart = 0;
		}
	
		// Let any modules know about the draw hold position state (used by
		// scrolling internally)
		settings._drawHold = holdPosition;
	
		_fnDraw( settings );
	
		settings._drawHold = false;
	}
	
	
	/**
	 * Add the options to the page HTML for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnAddOptionsHtml ( oSettings )
	{
		var classes = oSettings.oClasses;
		var table = $(oSettings.nTable);
		var holding = $('<div/>').insertBefore( table ); // Holding element for speed
		var features = oSettings.oFeatures;
	
		// All DataTables are wrapped in a div
		var insert = $('<div/>', {
			id:      oSettings.sTableId+'_wrapper',
			'class': classes.sWrapper + (oSettings.nTFoot ? '' : ' '+classes.sNoFooter)
		} );
	
		oSettings.nHolding = holding[0];
		oSettings.nTableWrapper = insert[0];
		oSettings.nTableReinsertBefore = oSettings.nTable.nextSibling;
	
		/* Loop over the user set positioning and place the elements as needed */
		var aDom = oSettings.sDom.split('');
		var featureNode, cOption, nNewNode, cNext, sAttr, j;
		for ( var i=0 ; i<aDom.length ; i++ )
		{
			featureNode = null;
			cOption = aDom[i];
	
			if ( cOption == '<' )
			{
				/* New container div */
				nNewNode = $('<div/>')[0];
	
				/* Check to see if we should append an id and/or a class name to the container */
				cNext = aDom[i+1];
				if ( cNext == "'" || cNext == '"' )
				{
					sAttr = "";
					j = 2;
					while ( aDom[i+j] != cNext )
					{
						sAttr += aDom[i+j];
						j++;
					}
	
					/* Replace jQuery UI constants @todo depreciated */
					if ( sAttr == "H" )
					{
						sAttr = classes.sJUIHeader;
					}
					else if ( sAttr == "F" )
					{
						sAttr = classes.sJUIFooter;
					}
	
					/* The attribute can be in the format of "#id.class", "#id" or "class" This logic
					 * breaks the string into parts and applies them as needed
					 */
					if ( sAttr.indexOf('.') != -1 )
					{
						var aSplit = sAttr.split('.');
						nNewNode.id = aSplit[0].substr(1, aSplit[0].length-1);
						nNewNode.className = aSplit[1];
					}
					else if ( sAttr.charAt(0) == "#" )
					{
						nNewNode.id = sAttr.substr(1, sAttr.length-1);
					}
					else
					{
						nNewNode.className = sAttr;
					}
	
					i += j; /* Move along the position array */
				}
	
				insert.append( nNewNode );
				insert = $(nNewNode);
			}
			else if ( cOption == '>' )
			{
				/* End container div */
				insert = insert.parent();
			}
			// @todo Move options into their own plugins?
			else if ( cOption == 'l' && features.bPaginate && features.bLengthChange )
			{
				/* Length */
				featureNode = _fnFeatureHtmlLength( oSettings );
			}
			else if ( cOption == 'f' && features.bFilter )
			{
				/* Filter */
				featureNode = _fnFeatureHtmlFilter( oSettings );
			}
			else if ( cOption == 'r' && features.bProcessing )
			{
				/* pRocessing */
				featureNode = _fnFeatureHtmlProcessing( oSettings );
			}
			else if ( cOption == 't' )
			{
				/* Table */
				featureNode = _fnFeatureHtmlTable( oSettings );
			}
			else if ( cOption ==  'i' && features.bInfo )
			{
				/* Info */
				featureNode = _fnFeatureHtmlInfo( oSettings );
			}
			else if ( cOption == 'p' && features.bPaginate )
			{
				/* Pagination */
				featureNode = _fnFeatureHtmlPaginate( oSettings );
			}
			else if ( DataTable.ext.feature.length !== 0 )
			{
				/* Plug-in features */
				var aoFeatures = DataTable.ext.feature;
				for ( var k=0, kLen=aoFeatures.length ; k<kLen ; k++ )
				{
					if ( cOption == aoFeatures[k].cFeature )
					{
						featureNode = aoFeatures[k].fnInit( oSettings );
						break;
					}
				}
			}
	
			/* Add to the 2D features array */
			if ( featureNode )
			{
				var aanFeatures = oSettings.aanFeatures;
	
				if ( ! aanFeatures[cOption] )
				{
					aanFeatures[cOption] = [];
				}
	
				aanFeatures[cOption].push( featureNode );
				insert.append( featureNode );
			}
		}
	
		/* Built our DOM structure - replace the holding div with what we want */
		holding.replaceWith( insert );
		oSettings.nHolding = null;
	}
	
	
	/**
	 * Use the DOM source to create up an array of header cells. The idea here is to
	 * create a layout grid (array) of rows x columns, which contains a reference
	 * to the cell that that point in the grid (regardless of col/rowspan), such that
	 * any column / row could be removed and the new grid constructed
	 *  @param array {object} aLayout Array to store the calculated layout in
	 *  @param {node} nThead The header/footer element for the table
	 *  @memberof DataTable#oApi
	 */
	function _fnDetectHeader ( aLayout, nThead )
	{
		var nTrs = $(nThead).children('tr');
		var nTr, nCell;
		var i, k, l, iLen, jLen, iColShifted, iColumn, iColspan, iRowspan;
		var bUnique;
		var fnShiftCol = function ( a, i, j ) {
			var k = a[i];
	                while ( k[j] ) {
				j++;
			}
			return j;
		};
	
		aLayout.splice( 0, aLayout.length );
	
		/* We know how many rows there are in the layout - so prep it */
		for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
		{
			aLayout.push( [] );
		}
	
		/* Calculate a layout array */
		for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
		{
			nTr = nTrs[i];
			iColumn = 0;
	
			/* For every cell in the row... */
			nCell = nTr.firstChild;
			while ( nCell ) {
				if ( nCell.nodeName.toUpperCase() == "TD" ||
				     nCell.nodeName.toUpperCase() == "TH" )
				{
					/* Get the col and rowspan attributes from the DOM and sanitise them */
					iColspan = nCell.getAttribute('colspan') * 1;
					iRowspan = nCell.getAttribute('rowspan') * 1;
					iColspan = (!iColspan || iColspan===0 || iColspan===1) ? 1 : iColspan;
					iRowspan = (!iRowspan || iRowspan===0 || iRowspan===1) ? 1 : iRowspan;
	
					/* There might be colspan cells already in this row, so shift our target
					 * accordingly
					 */
					iColShifted = fnShiftCol( aLayout, i, iColumn );
	
					/* Cache calculation for unique columns */
					bUnique = iColspan === 1 ? true : false;
	
					/* If there is col / rowspan, copy the information into the layout grid */
					for ( l=0 ; l<iColspan ; l++ )
					{
						for ( k=0 ; k<iRowspan ; k++ )
						{
							aLayout[i+k][iColShifted+l] = {
								"cell": nCell,
								"unique": bUnique
							};
							aLayout[i+k].nTr = nTr;
						}
					}
				}
				nCell = nCell.nextSibling;
			}
		}
	}
	
	
	/**
	 * Get an array of unique th elements, one for each column
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} nHeader automatically detect the layout from this node - optional
	 *  @param {array} aLayout thead/tfoot layout from _fnDetectHeader - optional
	 *  @returns array {node} aReturn list of unique th's
	 *  @memberof DataTable#oApi
	 */
	function _fnGetUniqueThs ( oSettings, nHeader, aLayout )
	{
		var aReturn = [];
		if ( !aLayout )
		{
			aLayout = oSettings.aoHeader;
			if ( nHeader )
			{
				aLayout = [];
				_fnDetectHeader( aLayout, nHeader );
			}
		}
	
		for ( var i=0, iLen=aLayout.length ; i<iLen ; i++ )
		{
			for ( var j=0, jLen=aLayout[i].length ; j<jLen ; j++ )
			{
				if ( aLayout[i][j].unique &&
					 (!aReturn[j] || !oSettings.bSortCellsTop) )
				{
					aReturn[j] = aLayout[i][j].cell;
				}
			}
		}
	
		return aReturn;
	}
	
	/**
	 * Create an Ajax call based on the table's settings, taking into account that
	 * parameters can have multiple forms, and backwards compatibility.
	 *
	 * @param {object} oSettings dataTables settings object
	 * @param {array} data Data to send to the server, required by
	 *     DataTables - may be augmented by developer callbacks
	 * @param {function} fn Callback function to run when data is obtained
	 */
	function _fnBuildAjax( oSettings, data, fn )
	{
		// Compatibility with 1.9-, allow fnServerData and event to manipulate
		_fnCallbackFire( oSettings, 'aoServerParams', 'serverParams', [data] );
	
		// Convert to object based for 1.10+ if using the old array scheme which can
		// come from server-side processing or serverParams
		if ( data && $.isArray(data) ) {
			var tmp = {};
			var rbracket = /(.*?)\[\]$/;
	
			$.each( data, function (key, val) {
				var match = val.name.match(rbracket);
	
				if ( match ) {
					// Support for arrays
					var name = match[0];
	
					if ( ! tmp[ name ] ) {
						tmp[ name ] = [];
					}
					tmp[ name ].push( val.value );
				}
				else {
					tmp[val.name] = val.value;
				}
			} );
			data = tmp;
		}
	
		var ajaxData;
		var ajax = oSettings.ajax;
		var instance = oSettings.oInstance;
		var callback = function ( json ) {
			_fnCallbackFire( oSettings, null, 'xhr', [oSettings, json, oSettings.jqXHR] );
			fn( json );
		};
	
		if ( $.isPlainObject( ajax ) && ajax.data )
		{
			ajaxData = ajax.data;
	
			var newData = typeof ajaxData === 'function' ?
				ajaxData( data, oSettings ) :  // fn can manipulate data or return
				ajaxData;                      // an object object or array to merge
	
			// If the function returned something, use that alone
			data = typeof ajaxData === 'function' && newData ?
				newData :
				$.extend( true, data, newData );
	
			// Remove the data property as we've resolved it already and don't want
			// jQuery to do it again (it is restored at the end of the function)
			delete ajax.data;
		}
	
		var baseAjax = {
			"data": data,
			"success": function (json) {
				var error = json.error || json.sError;
				if ( error ) {
					_fnLog( oSettings, 0, error );
				}
	
				oSettings.json = json;
				callback( json );
			},
			"dataType": "json",
			"cache": false,
			"type": oSettings.sServerMethod,
			"error": function (xhr, error, thrown) {
				var ret = _fnCallbackFire( oSettings, null, 'xhr', [oSettings, null, oSettings.jqXHR] );
	
				if ( $.inArray( true, ret ) === -1 ) {
					if ( error == "parsererror" ) {
						_fnLog( oSettings, 0, 'Invalid JSON response', 1 );
					}
					else if ( xhr.readyState === 4 ) {
						_fnLog( oSettings, 0, 'Ajax error', 7 );
					}
				}
	
				_fnProcessingDisplay( oSettings, false );
			}
		};
	
		// Store the data submitted for the API
		oSettings.oAjaxData = data;
	
		// Allow plug-ins and external processes to modify the data
		_fnCallbackFire( oSettings, null, 'preXhr', [oSettings, data] );
	
		if ( oSettings.fnServerData )
		{
			// DataTables 1.9- compatibility
			oSettings.fnServerData.call( instance,
				oSettings.sAjaxSource,
				$.map( data, function (val, key) { // Need to convert back to 1.9 trad format
					return { name: key, value: val };
				} ),
				callback,
				oSettings
			);
		}
		else if ( oSettings.sAjaxSource || typeof ajax === 'string' )
		{
			// DataTables 1.9- compatibility
			oSettings.jqXHR = $.ajax( $.extend( baseAjax, {
				url: ajax || oSettings.sAjaxSource
			} ) );
		}
		else if ( typeof ajax === 'function' )
		{
			// Is a function - let the caller define what needs to be done
			oSettings.jqXHR = ajax.call( instance, data, callback, oSettings );
		}
		else
		{
			// Object to extend the base settings
			oSettings.jqXHR = $.ajax( $.extend( baseAjax, ajax ) );
	
			// Restore for next time around
			ajax.data = ajaxData;
		}
	}
	
	
	/**
	 * Update the table using an Ajax call
	 *  @param {object} settings dataTables settings object
	 *  @returns {boolean} Block the table drawing or not
	 *  @memberof DataTable#oApi
	 */
	function _fnAjaxUpdate( settings )
	{
		if ( settings.bAjaxDataGet ) {
			settings.iDraw++;
			_fnProcessingDisplay( settings, true );
	
			_fnBuildAjax(
				settings,
				_fnAjaxParameters( settings ),
				function(json) {
					_fnAjaxUpdateDraw( settings, json );
				}
			);
	
			return false;
		}
		return true;
	}
	
	
	/**
	 * Build up the parameters in an object needed for a server-side processing
	 * request. Note that this is basically done twice, is different ways - a modern
	 * method which is used by default in DataTables 1.10 which uses objects and
	 * arrays, or the 1.9- method with is name / value pairs. 1.9 method is used if
	 * the sAjaxSource option is used in the initialisation, or the legacyAjax
	 * option is set.
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {bool} block the table drawing or not
	 *  @memberof DataTable#oApi
	 */
	function _fnAjaxParameters( settings )
	{
		var
			columns = settings.aoColumns,
			columnCount = columns.length,
			features = settings.oFeatures,
			preSearch = settings.oPreviousSearch,
			preColSearch = settings.aoPreSearchCols,
			i, data = [], dataProp, column, columnSearch,
			sort = _fnSortFlatten( settings ),
			displayStart = settings._iDisplayStart,
			displayLength = features.bPaginate !== false ?
				settings._iDisplayLength :
				-1;
	
		var param = function ( name, value ) {
			data.push( { 'name': name, 'value': value } );
		};
	
		// DataTables 1.9- compatible method
		param( 'sEcho',          settings.iDraw );
		param( 'iColumns',       columnCount );
		param( 'sColumns',       _pluck( columns, 'sName' ).join(',') );
		param( 'iDisplayStart',  displayStart );
		param( 'iDisplayLength', displayLength );
	
		// DataTables 1.10+ method
		var d = {
			draw:    settings.iDraw,
			columns: [],
			order:   [],
			start:   displayStart,
			length:  displayLength,
			search:  {
				value: preSearch.sSearch,
				regex: preSearch.bRegex
			}
		};
	
		for ( i=0 ; i<columnCount ; i++ ) {
			column = columns[i];
			columnSearch = preColSearch[i];
			dataProp = typeof column.mData=="function" ? 'function' : column.mData ;
	
			d.columns.push( {
				data:       dataProp,
				name:       column.sName,
				searchable: column.bSearchable,
				orderable:  column.bSortable,
				search:     {
					value: columnSearch.sSearch,
					regex: columnSearch.bRegex
				}
			} );
	
			param( "mDataProp_"+i, dataProp );
	
			if ( features.bFilter ) {
				param( 'sSearch_'+i,     columnSearch.sSearch );
				param( 'bRegex_'+i,      columnSearch.bRegex );
				param( 'bSearchable_'+i, column.bSearchable );
			}
	
			if ( features.bSort ) {
				param( 'bSortable_'+i, column.bSortable );
			}
		}
	
		if ( features.bFilter ) {
			param( 'sSearch', preSearch.sSearch );
			param( 'bRegex', preSearch.bRegex );
		}
	
		if ( features.bSort ) {
			$.each( sort, function ( i, val ) {
				d.order.push( { column: val.col, dir: val.dir } );
	
				param( 'iSortCol_'+i, val.col );
				param( 'sSortDir_'+i, val.dir );
			} );
	
			param( 'iSortingCols', sort.length );
		}
	
		// If the legacy.ajax parameter is null, then we automatically decide which
		// form to use, based on sAjaxSource
		var legacy = DataTable.ext.legacy.ajax;
		if ( legacy === null ) {
			return settings.sAjaxSource ? data : d;
		}
	
		// Otherwise, if legacy has been specified then we use that to decide on the
		// form
		return legacy ? data : d;
	}
	
	
	/**
	 * Data the data from the server (nuking the old) and redraw the table
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} json json data return from the server.
	 *  @param {string} json.sEcho Tracking flag for DataTables to match requests
	 *  @param {int} json.iTotalRecords Number of records in the data set, not accounting for filtering
	 *  @param {int} json.iTotalDisplayRecords Number of records in the data set, accounting for filtering
	 *  @param {array} json.aaData The data to display on this page
	 *  @param {string} [json.sColumns] Column ordering (sName, comma separated)
	 *  @memberof DataTable#oApi
	 */
	function _fnAjaxUpdateDraw ( settings, json )
	{
		// v1.10 uses camelCase variables, while 1.9 uses Hungarian notation.
		// Support both
		var compat = function ( old, modern ) {
			return json[old] !== undefined ? json[old] : json[modern];
		};
	
		var data = _fnAjaxDataSrc( settings, json );
		var draw            = compat( 'sEcho',                'draw' );
		var recordsTotal    = compat( 'iTotalRecords',        'recordsTotal' );
		var recordsFiltered = compat( 'iTotalDisplayRecords', 'recordsFiltered' );
	
		if ( draw !== undefined ) {
			// Protect against out of sequence returns
			if ( draw*1 < settings.iDraw ) {
				return;
			}
			settings.iDraw = draw * 1;
		}
	
		_fnClearTable( settings );
		settings._iRecordsTotal   = parseInt(recordsTotal, 10);
		settings._iRecordsDisplay = parseInt(recordsFiltered, 10);
	
		for ( var i=0, ien=data.length ; i<ien ; i++ ) {
			_fnAddData( settings, data[i] );
		}
		settings.aiDisplay = settings.aiDisplayMaster.slice();
	
		settings.bAjaxDataGet = false;
		_fnDraw( settings );
	
		if ( ! settings._bInitComplete ) {
			_fnInitComplete( settings, json );
		}
	
		settings.bAjaxDataGet = true;
		_fnProcessingDisplay( settings, false );
	}
	
	
	/**
	 * Get the data from the JSON data source to use for drawing a table. Using
	 * `_fnGetObjectDataFn` allows the data to be sourced from a property of the
	 * source object, or from a processing function.
	 *  @param {object} oSettings dataTables settings object
	 *  @param  {object} json Data source object / array from the server
	 *  @return {array} Array of data to use
	 */
	function _fnAjaxDataSrc ( oSettings, json )
	{
		var dataSrc = $.isPlainObject( oSettings.ajax ) && oSettings.ajax.dataSrc !== undefined ?
			oSettings.ajax.dataSrc :
			oSettings.sAjaxDataProp; // Compatibility with 1.9-.
	
		// Compatibility with 1.9-. In order to read from aaData, check if the
		// default has been changed, if not, check for aaData
		if ( dataSrc === 'data' ) {
			return json.aaData || json[dataSrc];
		}
	
		return dataSrc !== "" ?
			_fnGetObjectDataFn( dataSrc )( json ) :
			json;
	}
	
	/**
	 * Generate the node required for filtering text
	 *  @returns {node} Filter control element
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlFilter ( settings )
	{
		var classes = settings.oClasses;
		var tableId = settings.sTableId;
		var language = settings.oLanguage;
		var previousSearch = settings.oPreviousSearch;
		var features = settings.aanFeatures;
		var input = '<input type="search" class="'+classes.sFilterInput+'"/>';
	
		var str = language.sSearch;
		str = str.match(/_INPUT_/) ?
			str.replace('_INPUT_', input) :
			str+input;
	
		var filter = $('<div/>', {
				'id': ! features.f ? tableId+'_filter' : null,
				'class': classes.sFilter
			} )
			.append( $('<label/>' ).append( str ) );
	
		var searchFn = function() {
			/* Update all other filter input elements for the new display */
			var n = features.f;
			var val = !this.value ? "" : this.value; // mental IE8 fix :-(
	
			/* Now do the filter */
			if ( val != previousSearch.sSearch ) {
				_fnFilterComplete( settings, {
					"sSearch": val,
					"bRegex": previousSearch.bRegex,
					"bSmart": previousSearch.bSmart ,
					"bCaseInsensitive": previousSearch.bCaseInsensitive
				} );
	
				// Need to redraw, without resorting
				settings._iDisplayStart = 0;
				_fnDraw( settings );
			}
		};
	
		var searchDelay = settings.searchDelay !== null ?
			settings.searchDelay :
			_fnDataSource( settings ) === 'ssp' ?
				400 :
				0;
	
		var jqFilter = $('input', filter)
			.val( previousSearch.sSearch )
			.attr( 'placeholder', language.sSearchPlaceholder )
			.on(
				'keyup.DT search.DT input.DT paste.DT cut.DT',
				searchDelay ?
					_fnThrottle( searchFn, searchDelay ) :
					searchFn
			)
			.on( 'mouseup', function(e) {
				// Edge fix! Edge 17 does not trigger anything other than mouse events when clicking
				// on the clear icon (Edge bug 17584515). This is safe in other browsers as `searchFn`
				// checks the value to see if it has changed. In other browsers it won't have.
				setTimeout( function () {
					searchFn.call(jqFilter[0]);
				}, 10);
			} )
			.on( 'keypress.DT', function(e) {
				/* Prevent form submission */
				if ( e.keyCode == 13 ) {
					return false;
				}
			} )
			.attr('aria-controls', tableId);
	
		// Update the input elements whenever the table is filtered
		$(settings.nTable).on( 'search.dt.DT', function ( ev, s ) {
			if ( settings === s ) {
				// IE9 throws an 'unknown error' if document.activeElement is used
				// inside an iframe or frame...
				try {
					if ( jqFilter[0] !== document.activeElement ) {
						jqFilter.val( previousSearch.sSearch );
					}
				}
				catch ( e ) {}
			}
		} );
	
		return filter[0];
	}
	
	
	/**
	 * Filter the table using both the global filter and column based filtering
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} oSearch search information
	 *  @param {int} [iForce] force a research of the master array (1) or not (undefined or 0)
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterComplete ( oSettings, oInput, iForce )
	{
		var oPrevSearch = oSettings.oPreviousSearch;
		var aoPrevSearch = oSettings.aoPreSearchCols;
		var fnSaveFilter = function ( oFilter ) {
			/* Save the filtering values */
			oPrevSearch.sSearch = oFilter.sSearch;
			oPrevSearch.bRegex = oFilter.bRegex;
			oPrevSearch.bSmart = oFilter.bSmart;
			oPrevSearch.bCaseInsensitive = oFilter.bCaseInsensitive;
		};
		var fnRegex = function ( o ) {
			// Backwards compatibility with the bEscapeRegex option
			return o.bEscapeRegex !== undefined ? !o.bEscapeRegex : o.bRegex;
		};
	
		// Resolve any column types that are unknown due to addition or invalidation
		// @todo As per sort - can this be moved into an event handler?
		_fnColumnTypes( oSettings );
	
		/* In server-side processing all filtering is done by the server, so no point hanging around here */
		if ( _fnDataSource( oSettings ) != 'ssp' )
		{
			/* Global filter */
			_fnFilter( oSettings, oInput.sSearch, iForce, fnRegex(oInput), oInput.bSmart, oInput.bCaseInsensitive );
			fnSaveFilter( oInput );
	
			/* Now do the individual column filter */
			for ( var i=0 ; i<aoPrevSearch.length ; i++ )
			{
				_fnFilterColumn( oSettings, aoPrevSearch[i].sSearch, i, fnRegex(aoPrevSearch[i]),
					aoPrevSearch[i].bSmart, aoPrevSearch[i].bCaseInsensitive );
			}
	
			/* Custom filtering */
			_fnFilterCustom( oSettings );
		}
		else
		{
			fnSaveFilter( oInput );
		}
	
		/* Tell the draw function we have been filtering */
		oSettings.bFiltered = true;
		_fnCallbackFire( oSettings, null, 'search', [oSettings] );
	}
	
	
	/**
	 * Apply custom filtering functions
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterCustom( settings )
	{
		var filters = DataTable.ext.search;
		var displayRows = settings.aiDisplay;
		var row, rowIdx;
	
		for ( var i=0, ien=filters.length ; i<ien ; i++ ) {
			var rows = [];
	
			// Loop over each row and see if it should be included
			for ( var j=0, jen=displayRows.length ; j<jen ; j++ ) {
				rowIdx = displayRows[ j ];
				row = settings.aoData[ rowIdx ];
	
				if ( filters[i]( settings, row._aFilterData, rowIdx, row._aData, j ) ) {
					rows.push( rowIdx );
				}
			}
	
			// So the array reference doesn't break set the results into the
			// existing array
			displayRows.length = 0;
			$.merge( displayRows, rows );
		}
	}
	
	
	/**
	 * Filter the table on a per-column basis
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sInput string to filter on
	 *  @param {int} iColumn column to filter
	 *  @param {bool} bRegex treat search string as a regular expression or not
	 *  @param {bool} bSmart use smart filtering or not
	 *  @param {bool} bCaseInsensitive Do case insenstive matching or not
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterColumn ( settings, searchStr, colIdx, regex, smart, caseInsensitive )
	{
		if ( searchStr === '' ) {
			return;
		}
	
		var data;
		var out = [];
		var display = settings.aiDisplay;
		var rpSearch = _fnFilterCreateSearch( searchStr, regex, smart, caseInsensitive );
	
		for ( var i=0 ; i<display.length ; i++ ) {
			data = settings.aoData[ display[i] ]._aFilterData[ colIdx ];
	
			if ( rpSearch.test( data ) ) {
				out.push( display[i] );
			}
		}
	
		settings.aiDisplay = out;
	}
	
	
	/**
	 * Filter the data table based on user input and draw the table
	 *  @param {object} settings dataTables settings object
	 *  @param {string} input string to filter on
	 *  @param {int} force optional - force a research of the master array (1) or not (undefined or 0)
	 *  @param {bool} regex treat as a regular expression or not
	 *  @param {bool} smart perform smart filtering or not
	 *  @param {bool} caseInsensitive Do case insenstive matching or not
	 *  @memberof DataTable#oApi
	 */
	function _fnFilter( settings, input, force, regex, smart, caseInsensitive )
	{
		var rpSearch = _fnFilterCreateSearch( input, regex, smart, caseInsensitive );
		var prevSearch = settings.oPreviousSearch.sSearch;
		var displayMaster = settings.aiDisplayMaster;
		var display, invalidated, i;
		var filtered = [];
	
		// Need to take account of custom filtering functions - always filter
		if ( DataTable.ext.search.length !== 0 ) {
			force = true;
		}
	
		// Check if any of the rows were invalidated
		invalidated = _fnFilterData( settings );
	
		// If the input is blank - we just want the full data set
		if ( input.length <= 0 ) {
			settings.aiDisplay = displayMaster.slice();
		}
		else {
			// New search - start from the master array
			if ( invalidated ||
				 force ||
				 regex ||
				 prevSearch.length > input.length ||
				 input.indexOf(prevSearch) !== 0 ||
				 settings.bSorted // On resort, the display master needs to be
				                  // re-filtered since indexes will have changed
			) {
				settings.aiDisplay = displayMaster.slice();
			}
	
			// Search the display array
			display = settings.aiDisplay;
	
			for ( i=0 ; i<display.length ; i++ ) {
				if ( rpSearch.test( settings.aoData[ display[i] ]._sFilterRow ) ) {
					filtered.push( display[i] );
				}
			}
	
			settings.aiDisplay = filtered;
		}
	}
	
	
	/**
	 * Build a regular expression object suitable for searching a table
	 *  @param {string} sSearch string to search for
	 *  @param {bool} bRegex treat as a regular expression or not
	 *  @param {bool} bSmart perform smart filtering or not
	 *  @param {bool} bCaseInsensitive Do case insensitive matching or not
	 *  @returns {RegExp} constructed object
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterCreateSearch( search, regex, smart, caseInsensitive )
	{
		search = regex ?
			search :
			_fnEscapeRegex( search );
		
		if ( smart ) {
			/* For smart filtering we want to allow the search to work regardless of
			 * word order. We also want double quoted text to be preserved, so word
			 * order is important - a la google. So this is what we want to
			 * generate:
			 * 
			 * ^(?=.*?\bone\b)(?=.*?\btwo three\b)(?=.*?\bfour\b).*$
			 */
			var a = $.map( search.match( /"[^"]+"|[^ ]+/g ) || [''], function ( word ) {
				if ( word.charAt(0) === '"' ) {
					var m = word.match( /^"(.*)"$/ );
					word = m ? m[1] : word;
				}
	
				return word.replace('"', '');
			} );
	
			search = '^(?=.*?'+a.join( ')(?=.*?' )+').*$';
		}
	
		return new RegExp( search, caseInsensitive ? 'i' : '' );
	}
	
	
	/**
	 * Escape a string such that it can be used in a regular expression
	 *  @param {string} sVal string to escape
	 *  @returns {string} escaped string
	 *  @memberof DataTable#oApi
	 */
	var _fnEscapeRegex = DataTable.util.escapeRegex;
	
	var __filter_div = $('<div>')[0];
	var __filter_div_textContent = __filter_div.textContent !== undefined;
	
	// Update the filtering data for each row if needed (by invalidation or first run)
	function _fnFilterData ( settings )
	{
		var columns = settings.aoColumns;
		var column;
		var i, j, ien, jen, filterData, cellData, row;
		var fomatters = DataTable.ext.type.search;
		var wasInvalidated = false;
	
		for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			row = settings.aoData[i];
	
			if ( ! row._aFilterData ) {
				filterData = [];
	
				for ( j=0, jen=columns.length ; j<jen ; j++ ) {
					column = columns[j];
	
					if ( column.bSearchable ) {
						cellData = _fnGetCellData( settings, i, j, 'filter' );
	
						if ( fomatters[ column.sType ] ) {
							cellData = fomatters[ column.sType ]( cellData );
						}
	
						// Search in DataTables 1.10 is string based. In 1.11 this
						// should be altered to also allow strict type checking.
						if ( cellData === null ) {
							cellData = '';
						}
	
						if ( typeof cellData !== 'string' && cellData.toString ) {
							cellData = cellData.toString();
						}
					}
					else {
						cellData = '';
					}
	
					// If it looks like there is an HTML entity in the string,
					// attempt to decode it so sorting works as expected. Note that
					// we could use a single line of jQuery to do this, but the DOM
					// method used here is much faster http://jsperf.com/html-decode
					if ( cellData.indexOf && cellData.indexOf('&') !== -1 ) {
						__filter_div.innerHTML = cellData;
						cellData = __filter_div_textContent ?
							__filter_div.textContent :
							__filter_div.innerText;
					}
	
					if ( cellData.replace ) {
						cellData = cellData.replace(/[\r\n\u2028]/g, '');
					}
	
					filterData.push( cellData );
				}
	
				row._aFilterData = filterData;
				row._sFilterRow = filterData.join('  ');
				wasInvalidated = true;
			}
		}
	
		return wasInvalidated;
	}
	
	
	/**
	 * Convert from the internal Hungarian notation to camelCase for external
	 * interaction
	 *  @param {object} obj Object to convert
	 *  @returns {object} Inverted object
	 *  @memberof DataTable#oApi
	 */
	function _fnSearchToCamel ( obj )
	{
		return {
			search:          obj.sSearch,
			smart:           obj.bSmart,
			regex:           obj.bRegex,
			caseInsensitive: obj.bCaseInsensitive
		};
	}
	
	
	
	/**
	 * Convert from camelCase notation to the internal Hungarian. We could use the
	 * Hungarian convert function here, but this is cleaner
	 *  @param {object} obj Object to convert
	 *  @returns {object} Inverted object
	 *  @memberof DataTable#oApi
	 */
	function _fnSearchToHung ( obj )
	{
		return {
			sSearch:          obj.search,
			bSmart:           obj.smart,
			bRegex:           obj.regex,
			bCaseInsensitive: obj.caseInsensitive
		};
	}
	
	/**
	 * Generate the node required for the info display
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {node} Information element
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlInfo ( settings )
	{
		var
			tid = settings.sTableId,
			nodes = settings.aanFeatures.i,
			n = $('<div/>', {
				'class': settings.oClasses.sInfo,
				'id': ! nodes ? tid+'_info' : null
			} );
	
		if ( ! nodes ) {
			// Update display on each draw
			settings.aoDrawCallback.push( {
				"fn": _fnUpdateInfo,
				"sName": "information"
			} );
	
			n
				.attr( 'role', 'status' )
				.attr( 'aria-live', 'polite' );
	
			// Table is described by our info div
			$(settings.nTable).attr( 'aria-describedby', tid+'_info' );
		}
	
		return n[0];
	}
	
	
	/**
	 * Update the information elements in the display
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnUpdateInfo ( settings )
	{
		/* Show information about the table */
		var nodes = settings.aanFeatures.i;
		if ( nodes.length === 0 ) {
			return;
		}
	
		var
			lang  = settings.oLanguage,
			start = settings._iDisplayStart+1,
			end   = settings.fnDisplayEnd(),
			max   = settings.fnRecordsTotal(),
			total = settings.fnRecordsDisplay(),
			out   = total ?
				lang.sInfo :
				lang.sInfoEmpty;
	
		if ( total !== max ) {
			/* Record set after filtering */
			out += ' ' + lang.sInfoFiltered;
		}
	
		// Convert the macros
		out += lang.sInfoPostFix;
		out = _fnInfoMacros( settings, out );
	
		var callback = lang.fnInfoCallback;
		if ( callback !== null ) {
			out = callback.call( settings.oInstance,
				settings, start, end, max, total, out
			);
		}
	
		$(nodes).html( out );
	}
	
	
	function _fnInfoMacros ( settings, str )
	{
		// When infinite scrolling, we are always starting at 1. _iDisplayStart is used only
		// internally
		var
			formatter  = settings.fnFormatNumber,
			start      = settings._iDisplayStart+1,
			len        = settings._iDisplayLength,
			vis        = settings.fnRecordsDisplay(),
			all        = len === -1;
	
		return str.
			replace(/_START_/g, formatter.call( settings, start ) ).
			replace(/_END_/g,   formatter.call( settings, settings.fnDisplayEnd() ) ).
			replace(/_MAX_/g,   formatter.call( settings, settings.fnRecordsTotal() ) ).
			replace(/_TOTAL_/g, formatter.call( settings, vis ) ).
			replace(/_PAGE_/g,  formatter.call( settings, all ? 1 : Math.ceil( start / len ) ) ).
			replace(/_PAGES_/g, formatter.call( settings, all ? 1 : Math.ceil( vis / len ) ) );
	}
	
	
	
	/**
	 * Draw the table for the first time, adding all required features
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnInitialise ( settings )
	{
		var i, iLen, iAjaxStart=settings.iInitDisplayStart;
		var columns = settings.aoColumns, column;
		var features = settings.oFeatures;
		var deferLoading = settings.bDeferLoading; // value modified by the draw
	
		/* Ensure that the table data is fully initialised */
		if ( ! settings.bInitialised ) {
			setTimeout( function(){ _fnInitialise( settings ); }, 200 );
			return;
		}
	
		/* Show the display HTML options */
		_fnAddOptionsHtml( settings );
	
		/* Build and draw the header / footer for the table */
		_fnBuildHead( settings );
		_fnDrawHead( settings, settings.aoHeader );
		_fnDrawHead( settings, settings.aoFooter );
	
		/* Okay to show that something is going on now */
		_fnProcessingDisplay( settings, true );
	
		/* Calculate sizes for columns */
		if ( features.bAutoWidth ) {
			_fnCalculateColumnWidths( settings );
		}
	
		for ( i=0, iLen=columns.length ; i<iLen ; i++ ) {
			column = columns[i];
	
			if ( column.sWidth ) {
				column.nTh.style.width = _fnStringToCss( column.sWidth );
			}
		}
	
		_fnCallbackFire( settings, null, 'preInit', [settings] );
	
		// If there is default sorting required - let's do it. The sort function
		// will do the drawing for us. Otherwise we draw the table regardless of the
		// Ajax source - this allows the table to look initialised for Ajax sourcing
		// data (show 'loading' message possibly)
		_fnReDraw( settings );
	
		// Server-side processing init complete is done by _fnAjaxUpdateDraw
		var dataSrc = _fnDataSource( settings );
		if ( dataSrc != 'ssp' || deferLoading ) {
			// if there is an ajax source load the data
			if ( dataSrc == 'ajax' ) {
				_fnBuildAjax( settings, [], function(json) {
					var aData = _fnAjaxDataSrc( settings, json );
	
					// Got the data - add it to the table
					for ( i=0 ; i<aData.length ; i++ ) {
						_fnAddData( settings, aData[i] );
					}
	
					// Reset the init display for cookie saving. We've already done
					// a filter, and therefore cleared it before. So we need to make
					// it appear 'fresh'
					settings.iInitDisplayStart = iAjaxStart;
	
					_fnReDraw( settings );
	
					_fnProcessingDisplay( settings, false );
					_fnInitComplete( settings, json );
				}, settings );
			}
			else {
				_fnProcessingDisplay( settings, false );
				_fnInitComplete( settings );
			}
		}
	}
	
	
	/**
	 * Draw the table for the first time, adding all required features
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} [json] JSON from the server that completed the table, if using Ajax source
	 *    with client-side processing (optional)
	 *  @memberof DataTable#oApi
	 */
	function _fnInitComplete ( settings, json )
	{
		settings._bInitComplete = true;
	
		// When data was added after the initialisation (data or Ajax) we need to
		// calculate the column sizing
		if ( json || settings.oInit.aaData ) {
			_fnAdjustColumnSizing( settings );
		}
	
		_fnCallbackFire( settings, null, 'plugin-init', [settings, json] );
		_fnCallbackFire( settings, 'aoInitComplete', 'init', [settings, json] );
	}
	
	
	function _fnLengthChange ( settings, val )
	{
		var len = parseInt( val, 10 );
		settings._iDisplayLength = len;
	
		_fnLengthOverflow( settings );
	
		// Fire length change event
		_fnCallbackFire( settings, null, 'length', [settings, len] );
	}
	
	
	/**
	 * Generate the node required for user display length changing
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Display length feature node
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlLength ( settings )
	{
		var
			classes  = settings.oClasses,
			tableId  = settings.sTableId,
			menu     = settings.aLengthMenu,
			d2       = $.isArray( menu[0] ),
			lengths  = d2 ? menu[0] : menu,
			language = d2 ? menu[1] : menu;
	
		var select = $('<select/>', {
			'name':          tableId+'_length',
			'aria-controls': tableId,
			'class':         classes.sLengthSelect
		} );
	
		for ( var i=0, ien=lengths.length ; i<ien ; i++ ) {
			select[0][ i ] = new Option(
				typeof language[i] === 'number' ?
					settings.fnFormatNumber( language[i] ) :
					language[i],
				lengths[i]
			);
		}
	
		var div = $('<div><label/></div>').addClass( classes.sLength );
		if ( ! settings.aanFeatures.l ) {
			div[0].id = tableId+'_length';
		}
	
		div.children().append(
			settings.oLanguage.sLengthMenu.replace( '_MENU_', select[0].outerHTML )
		);
	
		// Can't use `select` variable as user might provide their own and the
		// reference is broken by the use of outerHTML
		$('select', div)
			.val( settings._iDisplayLength )
			.on( 'change.DT', function(e) {
				_fnLengthChange( settings, $(this).val() );
				_fnDraw( settings );
			} );
	
		// Update node value whenever anything changes the table's length
		$(settings.nTable).on( 'length.dt.DT', function (e, s, len) {
			if ( settings === s ) {
				$('select', div).val( len );
			}
		} );
	
		return div[0];
	}
	
	
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Note that most of the paging logic is done in
	 * DataTable.ext.pager
	 */
	
	/**
	 * Generate the node required for default pagination
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {node} Pagination feature node
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlPaginate ( settings )
	{
		var
			type   = settings.sPaginationType,
			plugin = DataTable.ext.pager[ type ],
			modern = typeof plugin === 'function',
			redraw = function( settings ) {
				_fnDraw( settings );
			},
			node = $('<div/>').addClass( settings.oClasses.sPaging + type )[0],
			features = settings.aanFeatures;
	
		if ( ! modern ) {
			plugin.fnInit( settings, node, redraw );
		}
	
		/* Add a draw callback for the pagination on first instance, to update the paging display */
		if ( ! features.p )
		{
			node.id = settings.sTableId+'_paginate';
	
			settings.aoDrawCallback.push( {
				"fn": function( settings ) {
					if ( modern ) {
						var
							start      = settings._iDisplayStart,
							len        = settings._iDisplayLength,
							visRecords = settings.fnRecordsDisplay(),
							all        = len === -1,
							page = all ? 0 : Math.ceil( start / len ),
							pages = all ? 1 : Math.ceil( visRecords / len ),
							buttons = plugin(page, pages),
							i, ien;
	
						for ( i=0, ien=features.p.length ; i<ien ; i++ ) {
							_fnRenderer( settings, 'pageButton' )(
								settings, features.p[i], i, buttons, page, pages
							);
						}
					}
					else {
						plugin.fnUpdate( settings, redraw );
					}
				},
				"sName": "pagination"
			} );
		}
	
		return node;
	}
	
	
	/**
	 * Alter the display settings to change the page
	 *  @param {object} settings DataTables settings object
	 *  @param {string|int} action Paging action to take: "first", "previous",
	 *    "next" or "last" or page number to jump to (integer)
	 *  @param [bool] redraw Automatically draw the update or not
	 *  @returns {bool} true page has changed, false - no change
	 *  @memberof DataTable#oApi
	 */
	function _fnPageChange ( settings, action, redraw )
	{
		var
			start     = settings._iDisplayStart,
			len       = settings._iDisplayLength,
			records   = settings.fnRecordsDisplay();
	
		if ( records === 0 || len === -1 )
		{
			start = 0;
		}
		else if ( typeof action === "number" )
		{
			start = action * len;
	
			if ( start > records )
			{
				start = 0;
			}
		}
		else if ( action == "first" )
		{
			start = 0;
		}
		else if ( action == "previous" )
		{
			start = len >= 0 ?
				start - len :
				0;
	
			if ( start < 0 )
			{
			  start = 0;
			}
		}
		else if ( action == "next" )
		{
			if ( start + len < records )
			{
				start += len;
			}
		}
		else if ( action == "last" )
		{
			start = Math.floor( (records-1) / len) * len;
		}
		else
		{
			_fnLog( settings, 0, "Unknown paging action: "+action, 5 );
		}
	
		var changed = settings._iDisplayStart !== start;
		settings._iDisplayStart = start;
	
		if ( changed ) {
			_fnCallbackFire( settings, null, 'page', [settings] );
	
			if ( redraw ) {
				_fnDraw( settings );
			}
		}
	
		return changed;
	}
	
	
	
	/**
	 * Generate the node required for the processing node
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Processing element
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlProcessing ( settings )
	{
		return $('<div/>', {
				'id': ! settings.aanFeatures.r ? settings.sTableId+'_processing' : null,
				'class': settings.oClasses.sProcessing
			} )
			.html( settings.oLanguage.sProcessing )
			.insertBefore( settings.nTable )[0];
	}
	
	
	/**
	 * Display or hide the processing indicator
	 *  @param {object} settings dataTables settings object
	 *  @param {bool} show Show the processing indicator (true) or not (false)
	 *  @memberof DataTable#oApi
	 */
	function _fnProcessingDisplay ( settings, show )
	{
		if ( settings.oFeatures.bProcessing ) {
			$(settings.aanFeatures.r).css( 'display', show ? 'block' : 'none' );
		}
	
		_fnCallbackFire( settings, null, 'processing', [settings, show] );
	}
	
	/**
	 * Add any control elements for the table - specifically scrolling
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Node to add to the DOM
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlTable ( settings )
	{
		var table = $(settings.nTable);
	
		// Add the ARIA grid role to the table
		table.attr( 'role', 'grid' );
	
		// Scrolling from here on in
		var scroll = settings.oScroll;
	
		if ( scroll.sX === '' && scroll.sY === '' ) {
			return settings.nTable;
		}
	
		var scrollX = scroll.sX;
		var scrollY = scroll.sY;
		var classes = settings.oClasses;
		var caption = table.children('caption');
		var captionSide = caption.length ? caption[0]._captionSide : null;
		var headerClone = $( table[0].cloneNode(false) );
		var footerClone = $( table[0].cloneNode(false) );
		var footer = table.children('tfoot');
		var _div = '<div/>';
		var size = function ( s ) {
			return !s ? null : _fnStringToCss( s );
		};
	
		if ( ! footer.length ) {
			footer = null;
		}
	
		/*
		 * The HTML structure that we want to generate in this function is:
		 *  div - scroller
		 *    div - scroll head
		 *      div - scroll head inner
		 *        table - scroll head table
		 *          thead - thead
		 *    div - scroll body
		 *      table - table (master table)
		 *        thead - thead clone for sizing
		 *        tbody - tbody
		 *    div - scroll foot
		 *      div - scroll foot inner
		 *        table - scroll foot table
		 *          tfoot - tfoot
		 */
		var scroller = $( _div, { 'class': classes.sScrollWrapper } )
			.append(
				$(_div, { 'class': classes.sScrollHead } )
					.css( {
						overflow: 'hidden',
						position: 'relative',
						border: 0,
						width: scrollX ? size(scrollX) : '100%'
					} )
					.append(
						$(_div, { 'class': classes.sScrollHeadInner } )
							.css( {
								'box-sizing': 'content-box',
								width: scroll.sXInner || '100%'
							} )
							.append(
								headerClone
									.removeAttr('id')
									.css( 'margin-left', 0 )
									.append( captionSide === 'top' ? caption : null )
									.append(
										table.children('thead')
									)
							)
					)
			)
			.append(
				$(_div, { 'class': classes.sScrollBody } )
					.css( {
						position: 'relative',
						overflow: 'auto',
						width: size( scrollX )
					} )
					.append( table )
			);
	
		if ( footer ) {
			scroller.append(
				$(_div, { 'class': classes.sScrollFoot } )
					.css( {
						overflow: 'hidden',
						border: 0,
						width: scrollX ? size(scrollX) : '100%'
					} )
					.append(
						$(_div, { 'class': classes.sScrollFootInner } )
							.append(
								footerClone
									.removeAttr('id')
									.css( 'margin-left', 0 )
									.append( captionSide === 'bottom' ? caption : null )
									.append(
										table.children('tfoot')
									)
							)
					)
			);
		}
	
		var children = scroller.children();
		var scrollHead = children[0];
		var scrollBody = children[1];
		var scrollFoot = footer ? children[2] : null;
	
		// When the body is scrolled, then we also want to scroll the headers
		if ( scrollX ) {
			$(scrollBody).on( 'scroll.DT', function (e) {
				var scrollLeft = this.scrollLeft;
	
				scrollHead.scrollLeft = scrollLeft;
	
				if ( footer ) {
					scrollFoot.scrollLeft = scrollLeft;
				}
			} );
		}
	
		$(scrollBody).css('max-height', scrollY);
		if (! scroll.bCollapse) {
			$(scrollBody).css('height', scrollY);
		}
	
		settings.nScrollHead = scrollHead;
		settings.nScrollBody = scrollBody;
		settings.nScrollFoot = scrollFoot;
	
		// On redraw - align columns
		settings.aoDrawCallback.push( {
			"fn": _fnScrollDraw,
			"sName": "scrolling"
		} );
	
		return scroller[0];
	}
	
	
	
	/**
	 * Update the header, footer and body tables for resizing - i.e. column
	 * alignment.
	 *
	 * Welcome to the most horrible function DataTables. The process that this
	 * function follows is basically:
	 *   1. Re-create the table inside the scrolling div
	 *   2. Take live measurements from the DOM
	 *   3. Apply the measurements to align the columns
	 *   4. Clean up
	 *
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnScrollDraw ( settings )
	{
		// Given that this is such a monster function, a lot of variables are use
		// to try and keep the minimised size as small as possible
		var
			scroll         = settings.oScroll,
			scrollX        = scroll.sX,
			scrollXInner   = scroll.sXInner,
			scrollY        = scroll.sY,
			barWidth       = scroll.iBarWidth,
			divHeader      = $(settings.nScrollHead),
			divHeaderStyle = divHeader[0].style,
			divHeaderInner = divHeader.children('div'),
			divHeaderInnerStyle = divHeaderInner[0].style,
			divHeaderTable = divHeaderInner.children('table'),
			divBodyEl      = settings.nScrollBody,
			divBody        = $(divBodyEl),
			divBodyStyle   = divBodyEl.style,
			divFooter      = $(settings.nScrollFoot),
			divFooterInner = divFooter.children('div'),
			divFooterTable = divFooterInner.children('table'),
			header         = $(settings.nTHead),
			table          = $(settings.nTable),
			tableEl        = table[0],
			tableStyle     = tableEl.style,
			footer         = settings.nTFoot ? $(settings.nTFoot) : null,
			browser        = settings.oBrowser,
			ie67           = browser.bScrollOversize,
			dtHeaderCells  = _pluck( settings.aoColumns, 'nTh' ),
			headerTrgEls, footerTrgEls,
			headerSrcEls, footerSrcEls,
			headerCopy, footerCopy,
			headerWidths=[], footerWidths=[],
			headerContent=[], footerContent=[],
			idx, correction, sanityWidth,
			zeroOut = function(nSizer) {
				var style = nSizer.style;
				style.paddingTop = "0";
				style.paddingBottom = "0";
				style.borderTopWidth = "0";
				style.borderBottomWidth = "0";
				style.height = 0;
			};
	
		// If the scrollbar visibility has changed from the last draw, we need to
		// adjust the column sizes as the table width will have changed to account
		// for the scrollbar
		var scrollBarVis = divBodyEl.scrollHeight > divBodyEl.clientHeight;
		
		if ( settings.scrollBarVis !== scrollBarVis && settings.scrollBarVis !== undefined ) {
			settings.scrollBarVis = scrollBarVis;
			_fnAdjustColumnSizing( settings );
			return; // adjust column sizing will call this function again
		}
		else {
			settings.scrollBarVis = scrollBarVis;
		}
	
		/*
		 * 1. Re-create the table inside the scrolling div
		 */
	
		// Remove the old minimised thead and tfoot elements in the inner table
		table.children('thead, tfoot').remove();
	
		if ( footer ) {
			footerCopy = footer.clone().prependTo( table );
			footerTrgEls = footer.find('tr'); // the original tfoot is in its own table and must be sized
			footerSrcEls = footerCopy.find('tr');
		}
	
		// Clone the current header and footer elements and then place it into the inner table
		headerCopy = header.clone().prependTo( table );
		headerTrgEls = header.find('tr'); // original header is in its own table
		headerSrcEls = headerCopy.find('tr');
		headerCopy.find('th, td').removeAttr('tabindex');
	
	
		/*
		 * 2. Take live measurements from the DOM - do not alter the DOM itself!
		 */
	
		// Remove old sizing and apply the calculated column widths
		// Get the unique column headers in the newly created (cloned) header. We want to apply the
		// calculated sizes to this header
		if ( ! scrollX )
		{
			divBodyStyle.width = '100%';
			divHeader[0].style.width = '100%';
		}
	
		$.each( _fnGetUniqueThs( settings, headerCopy ), function ( i, el ) {
			idx = _fnVisibleToColumnIndex( settings, i );
			el.style.width = settings.aoColumns[idx].sWidth;
		} );
	
		if ( footer ) {
			_fnApplyToChildren( function(n) {
				n.style.width = "";
			}, footerSrcEls );
		}
	
		// Size the table as a whole
		sanityWidth = table.outerWidth();
		if ( scrollX === "" ) {
			// No x scrolling
			tableStyle.width = "100%";
	
			// IE7 will make the width of the table when 100% include the scrollbar
			// - which is shouldn't. When there is a scrollbar we need to take this
			// into account.
			if ( ie67 && (table.find('tbody').height() > divBodyEl.offsetHeight ||
				divBody.css('overflow-y') == "scroll")
			) {
				tableStyle.width = _fnStringToCss( table.outerWidth() - barWidth);
			}
	
			// Recalculate the sanity width
			sanityWidth = table.outerWidth();
		}
		else if ( scrollXInner !== "" ) {
			// legacy x scroll inner has been given - use it
			tableStyle.width = _fnStringToCss(scrollXInner);
	
			// Recalculate the sanity width
			sanityWidth = table.outerWidth();
		}
	
		// Hidden header should have zero height, so remove padding and borders. Then
		// set the width based on the real headers
	
		// Apply all styles in one pass
		_fnApplyToChildren( zeroOut, headerSrcEls );
	
		// Read all widths in next pass
		_fnApplyToChildren( function(nSizer) {
			headerContent.push( nSizer.innerHTML );
			headerWidths.push( _fnStringToCss( $(nSizer).css('width') ) );
		}, headerSrcEls );
	
		// Apply all widths in final pass
		_fnApplyToChildren( function(nToSize, i) {
			// Only apply widths to the DataTables detected header cells - this
			// prevents complex headers from having contradictory sizes applied
			if ( $.inArray( nToSize, dtHeaderCells ) !== -1 ) {
				nToSize.style.width = headerWidths[i];
			}
		}, headerTrgEls );
	
		$(headerSrcEls).height(0);
	
		/* Same again with the footer if we have one */
		if ( footer )
		{
			_fnApplyToChildren( zeroOut, footerSrcEls );
	
			_fnApplyToChildren( function(nSizer) {
				footerContent.push( nSizer.innerHTML );
				footerWidths.push( _fnStringToCss( $(nSizer).css('width') ) );
			}, footerSrcEls );
	
			_fnApplyToChildren( function(nToSize, i) {
				nToSize.style.width = footerWidths[i];
			}, footerTrgEls );
	
			$(footerSrcEls).height(0);
		}
	
	
		/*
		 * 3. Apply the measurements
		 */
	
		// "Hide" the header and footer that we used for the sizing. We need to keep
		// the content of the cell so that the width applied to the header and body
		// both match, but we want to hide it completely. We want to also fix their
		// width to what they currently are
		_fnApplyToChildren( function(nSizer, i) {
			nSizer.innerHTML = '<div class="dataTables_sizing">'+headerContent[i]+'</div>';
			nSizer.childNodes[0].style.height = "0";
			nSizer.childNodes[0].style.overflow = "hidden";
			nSizer.style.width = headerWidths[i];
		}, headerSrcEls );
	
		if ( footer )
		{
			_fnApplyToChildren( function(nSizer, i) {
				nSizer.innerHTML = '<div class="dataTables_sizing">'+footerContent[i]+'</div>';
				nSizer.childNodes[0].style.height = "0";
				nSizer.childNodes[0].style.overflow = "hidden";
				nSizer.style.width = footerWidths[i];
			}, footerSrcEls );
		}
	
		// Sanity check that the table is of a sensible width. If not then we are going to get
		// misalignment - try to prevent this by not allowing the table to shrink below its min width
		if ( table.outerWidth() < sanityWidth )
		{
			// The min width depends upon if we have a vertical scrollbar visible or not */
			correction = ((divBodyEl.scrollHeight > divBodyEl.offsetHeight ||
				divBody.css('overflow-y') == "scroll")) ?
					sanityWidth+barWidth :
					sanityWidth;
	
			// IE6/7 are a law unto themselves...
			if ( ie67 && (divBodyEl.scrollHeight >
				divBodyEl.offsetHeight || divBody.css('overflow-y') == "scroll")
			) {
				tableStyle.width = _fnStringToCss( correction-barWidth );
			}
	
			// And give the user a warning that we've stopped the table getting too small
			if ( scrollX === "" || scrollXInner !== "" ) {
				_fnLog( settings, 1, 'Possible column misalignment', 6 );
			}
		}
		else
		{
			correction = '100%';
		}
	
		// Apply to the container elements
		divBodyStyle.width = _fnStringToCss( correction );
		divHeaderStyle.width = _fnStringToCss( correction );
	
		if ( footer ) {
			settings.nScrollFoot.style.width = _fnStringToCss( correction );
		}
	
	
		/*
		 * 4. Clean up
		 */
		if ( ! scrollY ) {
			/* IE7< puts a vertical scrollbar in place (when it shouldn't be) due to subtracting
			 * the scrollbar height from the visible display, rather than adding it on. We need to
			 * set the height in order to sort this. Don't want to do it in any other browsers.
			 */
			if ( ie67 ) {
				divBodyStyle.height = _fnStringToCss( tableEl.offsetHeight+barWidth );
			}
		}
	
		/* Finally set the width's of the header and footer tables */
		var iOuterWidth = table.outerWidth();
		divHeaderTable[0].style.width = _fnStringToCss( iOuterWidth );
		divHeaderInnerStyle.width = _fnStringToCss( iOuterWidth );
	
		// Figure out if there are scrollbar present - if so then we need a the header and footer to
		// provide a bit more space to allow "overflow" scrolling (i.e. past the scrollbar)
		var bScrolling = table.height() > divBodyEl.clientHeight || divBody.css('overflow-y') == "scroll";
		var padding = 'padding' + (browser.bScrollbarLeft ? 'Left' : 'Right' );
		divHeaderInnerStyle[ padding ] = bScrolling ? barWidth+"px" : "0px";
	
		if ( footer ) {
			divFooterTable[0].style.width = _fnStringToCss( iOuterWidth );
			divFooterInner[0].style.width = _fnStringToCss( iOuterWidth );
			divFooterInner[0].style[padding] = bScrolling ? barWidth+"px" : "0px";
		}
	
		// Correct DOM ordering for colgroup - comes before the thead
		table.children('colgroup').insertBefore( table.children('thead') );
	
		/* Adjust the position of the header in case we loose the y-scrollbar */
		divBody.trigger('scroll');
	
		// If sorting or filtering has occurred, jump the scrolling back to the top
		// only if we aren't holding the position
		if ( (settings.bSorted || settings.bFiltered) && ! settings._drawHold ) {
			divBodyEl.scrollTop = 0;
		}
	}
	
	
	
	/**
	 * Apply a given function to the display child nodes of an element array (typically
	 * TD children of TR rows
	 *  @param {function} fn Method to apply to the objects
	 *  @param array {nodes} an1 List of elements to look through for display children
	 *  @param array {nodes} an2 Another list (identical structure to the first) - optional
	 *  @memberof DataTable#oApi
	 */
	function _fnApplyToChildren( fn, an1, an2 )
	{
		var index=0, i=0, iLen=an1.length;
		var nNode1, nNode2;
	
		while ( i < iLen ) {
			nNode1 = an1[i].firstChild;
			nNode2 = an2 ? an2[i].firstChild : null;
	
			while ( nNode1 ) {
				if ( nNode1.nodeType === 1 ) {
					if ( an2 ) {
						fn( nNode1, nNode2, index );
					}
					else {
						fn( nNode1, index );
					}
	
					index++;
				}
	
				nNode1 = nNode1.nextSibling;
				nNode2 = an2 ? nNode2.nextSibling : null;
			}
	
			i++;
		}
	}
	
	
	
	var __re_html_remove = /<.*?>/g;
	
	
	/**
	 * Calculate the width of columns for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnCalculateColumnWidths ( oSettings )
	{
		var
			table = oSettings.nTable,
			columns = oSettings.aoColumns,
			scroll = oSettings.oScroll,
			scrollY = scroll.sY,
			scrollX = scroll.sX,
			scrollXInner = scroll.sXInner,
			columnCount = columns.length,
			visibleColumns = _fnGetColumns( oSettings, 'bVisible' ),
			headerCells = $('th', oSettings.nTHead),
			tableWidthAttr = table.getAttribute('width'), // from DOM element
			tableContainer = table.parentNode,
			userInputs = false,
			i, column, columnIdx, width, outerWidth,
			browser = oSettings.oBrowser,
			ie67 = browser.bScrollOversize;
	
		var styleWidth = table.style.width;
		if ( styleWidth && styleWidth.indexOf('%') !== -1 ) {
			tableWidthAttr = styleWidth;
		}
	
		/* Convert any user input sizes into pixel sizes */
		for ( i=0 ; i<visibleColumns.length ; i++ ) {
			column = columns[ visibleColumns[i] ];
	
			if ( column.sWidth !== null ) {
				column.sWidth = _fnConvertToWidth( column.sWidthOrig, tableContainer );
	
				userInputs = true;
			}
		}
	
		/* If the number of columns in the DOM equals the number that we have to
		 * process in DataTables, then we can use the offsets that are created by
		 * the web- browser. No custom sizes can be set in order for this to happen,
		 * nor scrolling used
		 */
		if ( ie67 || ! userInputs && ! scrollX && ! scrollY &&
		     columnCount == _fnVisbleColumns( oSettings ) &&
		     columnCount == headerCells.length
		) {
			for ( i=0 ; i<columnCount ; i++ ) {
				var colIdx = _fnVisibleToColumnIndex( oSettings, i );
	
				if ( colIdx !== null ) {
					columns[ colIdx ].sWidth = _fnStringToCss( headerCells.eq(i).width() );
				}
			}
		}
		else
		{
			// Otherwise construct a single row, worst case, table with the widest
			// node in the data, assign any user defined widths, then insert it into
			// the DOM and allow the browser to do all the hard work of calculating
			// table widths
			var tmpTable = $(table).clone() // don't use cloneNode - IE8 will remove events on the main table
				.css( 'visibility', 'hidden' )
				.removeAttr( 'id' );
	
			// Clean up the table body
			tmpTable.find('tbody tr').remove();
			var tr = $('<tr/>').appendTo( tmpTable.find('tbody') );
	
			// Clone the table header and footer - we can't use the header / footer
			// from the cloned table, since if scrolling is active, the table's
			// real header and footer are contained in different table tags
			tmpTable.find('thead, tfoot').remove();
			tmpTable
				.append( $(oSettings.nTHead).clone() )
				.append( $(oSettings.nTFoot).clone() );
	
			// Remove any assigned widths from the footer (from scrolling)
			tmpTable.find('tfoot th, tfoot td').css('width', '');
	
			// Apply custom sizing to the cloned header
			headerCells = _fnGetUniqueThs( oSettings, tmpTable.find('thead')[0] );
	
			for ( i=0 ; i<visibleColumns.length ; i++ ) {
				column = columns[ visibleColumns[i] ];
	
				headerCells[i].style.width = column.sWidthOrig !== null && column.sWidthOrig !== '' ?
					_fnStringToCss( column.sWidthOrig ) :
					'';
	
				// For scrollX we need to force the column width otherwise the
				// browser will collapse it. If this width is smaller than the
				// width the column requires, then it will have no effect
				if ( column.sWidthOrig && scrollX ) {
					$( headerCells[i] ).append( $('<div/>').css( {
						width: column.sWidthOrig,
						margin: 0,
						padding: 0,
						border: 0,
						height: 1
					} ) );
				}
			}
	
			// Find the widest cell for each column and put it into the table
			if ( oSettings.aoData.length ) {
				for ( i=0 ; i<visibleColumns.length ; i++ ) {
					columnIdx = visibleColumns[i];
					column = columns[ columnIdx ];
	
					$( _fnGetWidestNode( oSettings, columnIdx ) )
						.clone( false )
						.append( column.sContentPadding )
						.appendTo( tr );
				}
			}
	
			// Tidy the temporary table - remove name attributes so there aren't
			// duplicated in the dom (radio elements for example)
			$('[name]', tmpTable).removeAttr('name');
	
			// Table has been built, attach to the document so we can work with it.
			// A holding element is used, positioned at the top of the container
			// with minimal height, so it has no effect on if the container scrolls
			// or not. Otherwise it might trigger scrolling when it actually isn't
			// needed
			var holder = $('<div/>').css( scrollX || scrollY ?
					{
						position: 'absolute',
						top: 0,
						left: 0,
						height: 1,
						right: 0,
						overflow: 'hidden'
					} :
					{}
				)
				.append( tmpTable )
				.appendTo( tableContainer );
	
			// When scrolling (X or Y) we want to set the width of the table as 
			// appropriate. However, when not scrolling leave the table width as it
			// is. This results in slightly different, but I think correct behaviour
			if ( scrollX && scrollXInner ) {
				tmpTable.width( scrollXInner );
			}
			else if ( scrollX ) {
				tmpTable.css( 'width', 'auto' );
				tmpTable.removeAttr('width');
	
				// If there is no width attribute or style, then allow the table to
				// collapse
				if ( tmpTable.width() < tableContainer.clientWidth && tableWidthAttr ) {
					tmpTable.width( tableContainer.clientWidth );
				}
			}
			else if ( scrollY ) {
				tmpTable.width( tableContainer.clientWidth );
			}
			else if ( tableWidthAttr ) {
				tmpTable.width( tableWidthAttr );
			}
	
			// Get the width of each column in the constructed table - we need to
			// know the inner width (so it can be assigned to the other table's
			// cells) and the outer width so we can calculate the full width of the
			// table. This is safe since DataTables requires a unique cell for each
			// column, but if ever a header can span multiple columns, this will
			// need to be modified.
			var total = 0;
			for ( i=0 ; i<visibleColumns.length ; i++ ) {
				var cell = $(headerCells[i]);
				var border = cell.outerWidth() - cell.width();
	
				// Use getBounding... where possible (not IE8-) because it can give
				// sub-pixel accuracy, which we then want to round up!
				var bounding = browser.bBounding ?
					Math.ceil( headerCells[i].getBoundingClientRect().width ) :
					cell.outerWidth();
	
				// Total is tracked to remove any sub-pixel errors as the outerWidth
				// of the table might not equal the total given here (IE!).
				total += bounding;
	
				// Width for each column to use
				columns[ visibleColumns[i] ].sWidth = _fnStringToCss( bounding - border );
			}
	
			table.style.width = _fnStringToCss( total );
	
			// Finished with the table - ditch it
			holder.remove();
		}
	
		// If there is a width attr, we want to attach an event listener which
		// allows the table sizing to automatically adjust when the window is
		// resized. Use the width attr rather than CSS, since we can't know if the
		// CSS is a relative value or absolute - DOM read is always px.
		if ( tableWidthAttr ) {
			table.style.width = _fnStringToCss( tableWidthAttr );
		}
	
		if ( (tableWidthAttr || scrollX) && ! oSettings._reszEvt ) {
			var bindResize = function () {
				$(window).on('resize.DT-'+oSettings.sInstance, _fnThrottle( function () {
					_fnAdjustColumnSizing( oSettings );
				} ) );
			};
	
			// IE6/7 will crash if we bind a resize event handler on page load.
			// To be removed in 1.11 which drops IE6/7 support
			if ( ie67 ) {
				setTimeout( bindResize, 1000 );
			}
			else {
				bindResize();
			}
	
			oSettings._reszEvt = true;
		}
	}
	
	
	/**
	 * Throttle the calls to a function. Arguments and context are maintained for
	 * the throttled function
	 *  @param {function} fn Function to be called
	 *  @param {int} [freq=200] call frequency in mS
	 *  @returns {function} wrapped function
	 *  @memberof DataTable#oApi
	 */
	var _fnThrottle = DataTable.util.throttle;
	
	
	/**
	 * Convert a CSS unit width to pixels (e.g. 2em)
	 *  @param {string} width width to be converted
	 *  @param {node} parent parent to get the with for (required for relative widths) - optional
	 *  @returns {int} width in pixels
	 *  @memberof DataTable#oApi
	 */
	function _fnConvertToWidth ( width, parent )
	{
		if ( ! width ) {
			return 0;
		}
	
		var n = $('<div/>')
			.css( 'width', _fnStringToCss( width ) )
			.appendTo( parent || document.body );
	
		var val = n[0].offsetWidth;
		n.remove();
	
		return val;
	}
	
	
	/**
	 * Get the widest node
	 *  @param {object} settings dataTables settings object
	 *  @param {int} colIdx column of interest
	 *  @returns {node} widest table node
	 *  @memberof DataTable#oApi
	 */
	function _fnGetWidestNode( settings, colIdx )
	{
		var idx = _fnGetMaxLenString( settings, colIdx );
		if ( idx < 0 ) {
			return null;
		}
	
		var data = settings.aoData[ idx ];
		return ! data.nTr ? // Might not have been created when deferred rendering
			$('<td/>').html( _fnGetCellData( settings, idx, colIdx, 'display' ) )[0] :
			data.anCells[ colIdx ];
	}
	
	
	/**
	 * Get the maximum strlen for each data column
	 *  @param {object} settings dataTables settings object
	 *  @param {int} colIdx column of interest
	 *  @returns {string} max string length for each column
	 *  @memberof DataTable#oApi
	 */
	function _fnGetMaxLenString( settings, colIdx )
	{
		var s, max=-1, maxIdx = -1;
	
		for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			s = _fnGetCellData( settings, i, colIdx, 'display' )+'';
			s = s.replace( __re_html_remove, '' );
			s = s.replace( /&nbsp;/g, ' ' );
	
			if ( s.length > max ) {
				max = s.length;
				maxIdx = i;
			}
		}
	
		return maxIdx;
	}
	
	
	/**
	 * Append a CSS unit (only if required) to a string
	 *  @param {string} value to css-ify
	 *  @returns {string} value with css unit
	 *  @memberof DataTable#oApi
	 */
	function _fnStringToCss( s )
	{
		if ( s === null ) {
			return '0px';
		}
	
		if ( typeof s == 'number' ) {
			return s < 0 ?
				'0px' :
				s+'px';
		}
	
		// Check it has a unit character already
		return s.match(/\d$/) ?
			s+'px' :
			s;
	}
	
	
	
	function _fnSortFlatten ( settings )
	{
		var
			i, iLen, k, kLen,
			aSort = [],
			aiOrig = [],
			aoColumns = settings.aoColumns,
			aDataSort, iCol, sType, srcCol,
			fixed = settings.aaSortingFixed,
			fixedObj = $.isPlainObject( fixed ),
			nestedSort = [],
			add = function ( a ) {
				if ( a.length && ! $.isArray( a[0] ) ) {
					// 1D array
					nestedSort.push( a );
				}
				else {
					// 2D array
					$.merge( nestedSort, a );
				}
			};
	
		// Build the sort array, with pre-fix and post-fix options if they have been
		// specified
		if ( $.isArray( fixed ) ) {
			add( fixed );
		}
	
		if ( fixedObj && fixed.pre ) {
			add( fixed.pre );
		}
	
		add( settings.aaSorting );
	
		if (fixedObj && fixed.post ) {
			add( fixed.post );
		}
	
		for ( i=0 ; i<nestedSort.length ; i++ )
		{
			srcCol = nestedSort[i][0];
			aDataSort = aoColumns[ srcCol ].aDataSort;
	
			for ( k=0, kLen=aDataSort.length ; k<kLen ; k++ )
			{
				iCol = aDataSort[k];
				sType = aoColumns[ iCol ].sType || 'string';
	
				if ( nestedSort[i]._idx === undefined ) {
					nestedSort[i]._idx = $.inArray( nestedSort[i][1], aoColumns[iCol].asSorting );
				}
	
				aSort.push( {
					src:       srcCol,
					col:       iCol,
					dir:       nestedSort[i][1],
					index:     nestedSort[i]._idx,
					type:      sType,
					formatter: DataTable.ext.type.order[ sType+"-pre" ]
				} );
			}
		}
	
		return aSort;
	}
	
	/**
	 * Change the order of the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 *  @todo This really needs split up!
	 */
	function _fnSort ( oSettings )
	{
		var
			i, ien, iLen, j, jLen, k, kLen,
			sDataType, nTh,
			aiOrig = [],
			oExtSort = DataTable.ext.type.order,
			aoData = oSettings.aoData,
			aoColumns = oSettings.aoColumns,
			aDataSort, data, iCol, sType, oSort,
			formatters = 0,
			sortCol,
			displayMaster = oSettings.aiDisplayMaster,
			aSort;
	
		// Resolve any column types that are unknown due to addition or invalidation
		// @todo Can this be moved into a 'data-ready' handler which is called when
		//   data is going to be used in the table?
		_fnColumnTypes( oSettings );
	
		aSort = _fnSortFlatten( oSettings );
	
		for ( i=0, ien=aSort.length ; i<ien ; i++ ) {
			sortCol = aSort[i];
	
			// Track if we can use the fast sort algorithm
			if ( sortCol.formatter ) {
				formatters++;
			}
	
			// Load the data needed for the sort, for each cell
			_fnSortData( oSettings, sortCol.col );
		}
	
		/* No sorting required if server-side or no sorting array */
		if ( _fnDataSource( oSettings ) != 'ssp' && aSort.length !== 0 )
		{
			// Create a value - key array of the current row positions such that we can use their
			// current position during the sort, if values match, in order to perform stable sorting
			for ( i=0, iLen=displayMaster.length ; i<iLen ; i++ ) {
				aiOrig[ displayMaster[i] ] = i;
			}
	
			/* Do the sort - here we want multi-column sorting based on a given data source (column)
			 * and sorting function (from oSort) in a certain direction. It's reasonably complex to
			 * follow on it's own, but this is what we want (example two column sorting):
			 *  fnLocalSorting = function(a,b){
			 *    var iTest;
			 *    iTest = oSort['string-asc']('data11', 'data12');
			 *      if (iTest !== 0)
			 *        return iTest;
			 *    iTest = oSort['numeric-desc']('data21', 'data22');
			 *    if (iTest !== 0)
			 *      return iTest;
			 *    return oSort['numeric-asc']( aiOrig[a], aiOrig[b] );
			 *  }
			 * Basically we have a test for each sorting column, if the data in that column is equal,
			 * test the next column. If all columns match, then we use a numeric sort on the row
			 * positions in the original data array to provide a stable sort.
			 *
			 * Note - I know it seems excessive to have two sorting methods, but the first is around
			 * 15% faster, so the second is only maintained for backwards compatibility with sorting
			 * methods which do not have a pre-sort formatting function.
			 */
			if ( formatters === aSort.length ) {
				// All sort types have formatting functions
				displayMaster.sort( function ( a, b ) {
					var
						x, y, k, test, sort,
						len=aSort.length,
						dataA = aoData[a]._aSortData,
						dataB = aoData[b]._aSortData;
	
					for ( k=0 ; k<len ; k++ ) {
						sort = aSort[k];
	
						x = dataA[ sort.col ];
						y = dataB[ sort.col ];
	
						test = x<y ? -1 : x>y ? 1 : 0;
						if ( test !== 0 ) {
							return sort.dir === 'asc' ? test : -test;
						}
					}
	
					x = aiOrig[a];
					y = aiOrig[b];
					return x<y ? -1 : x>y ? 1 : 0;
				} );
			}
			else {
				// Depreciated - remove in 1.11 (providing a plug-in option)
				// Not all sort types have formatting methods, so we have to call their sorting
				// methods.
				displayMaster.sort( function ( a, b ) {
					var
						x, y, k, l, test, sort, fn,
						len=aSort.length,
						dataA = aoData[a]._aSortData,
						dataB = aoData[b]._aSortData;
	
					for ( k=0 ; k<len ; k++ ) {
						sort = aSort[k];
	
						x = dataA[ sort.col ];
						y = dataB[ sort.col ];
	
						fn = oExtSort[ sort.type+"-"+sort.dir ] || oExtSort[ "string-"+sort.dir ];
						test = fn( x, y );
						if ( test !== 0 ) {
							return test;
						}
					}
	
					x = aiOrig[a];
					y = aiOrig[b];
					return x<y ? -1 : x>y ? 1 : 0;
				} );
			}
		}
	
		/* Tell the draw function that we have sorted the data */
		oSettings.bSorted = true;
	}
	
	
	function _fnSortAria ( settings )
	{
		var label;
		var nextSort;
		var columns = settings.aoColumns;
		var aSort = _fnSortFlatten( settings );
		var oAria = settings.oLanguage.oAria;
	
		// ARIA attributes - need to loop all columns, to update all (removing old
		// attributes as needed)
		for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
		{
			var col = columns[i];
			var asSorting = col.asSorting;
			var sTitle = col.sTitle.replace( /<.*?>/g, "" );
			var th = col.nTh;
	
			// IE7 is throwing an error when setting these properties with jQuery's
			// attr() and removeAttr() methods...
			th.removeAttribute('aria-sort');
	
			/* In ARIA only the first sorting column can be marked as sorting - no multi-sort option */
			if ( col.bSortable ) {
				if ( aSort.length > 0 && aSort[0].col == i ) {
					th.setAttribute('aria-sort', aSort[0].dir=="asc" ? "ascending" : "descending" );
					nextSort = asSorting[ aSort[0].index+1 ] || asSorting[0];
				}
				else {
					nextSort = asSorting[0];
				}
	
				label = sTitle + ( nextSort === "asc" ?
					oAria.sSortAscending :
					oAria.sSortDescending
				);
			}
			else {
				label = sTitle;
			}
	
			th.setAttribute('aria-label', label);
		}
	}
	
	
	/**
	 * Function to run on user sort request
	 *  @param {object} settings dataTables settings object
	 *  @param {node} attachTo node to attach the handler to
	 *  @param {int} colIdx column sorting index
	 *  @param {boolean} [append=false] Append the requested sort to the existing
	 *    sort if true (i.e. multi-column sort)
	 *  @param {function} [callback] callback function
	 *  @memberof DataTable#oApi
	 */
	function _fnSortListener ( settings, colIdx, append, callback )
	{
		var col = settings.aoColumns[ colIdx ];
		var sorting = settings.aaSorting;
		var asSorting = col.asSorting;
		var nextSortIdx;
		var next = function ( a, overflow ) {
			var idx = a._idx;
			if ( idx === undefined ) {
				idx = $.inArray( a[1], asSorting );
			}
	
			return idx+1 < asSorting.length ?
				idx+1 :
				overflow ?
					null :
					0;
		};
	
		// Convert to 2D array if needed
		if ( typeof sorting[0] === 'number' ) {
			sorting = settings.aaSorting = [ sorting ];
		}
	
		// If appending the sort then we are multi-column sorting
		if ( append && settings.oFeatures.bSortMulti ) {
			// Are we already doing some kind of sort on this column?
			var sortIdx = $.inArray( colIdx, _pluck(sorting, '0') );
	
			if ( sortIdx !== -1 ) {
				// Yes, modify the sort
				nextSortIdx = next( sorting[sortIdx], true );
	
				if ( nextSortIdx === null && sorting.length === 1 ) {
					nextSortIdx = 0; // can't remove sorting completely
				}
	
				if ( nextSortIdx === null ) {
					sorting.splice( sortIdx, 1 );
				}
				else {
					sorting[sortIdx][1] = asSorting[ nextSortIdx ];
					sorting[sortIdx]._idx = nextSortIdx;
				}
			}
			else {
				// No sort on this column yet
				sorting.push( [ colIdx, asSorting[0], 0 ] );
				sorting[sorting.length-1]._idx = 0;
			}
		}
		else if ( sorting.length && sorting[0][0] == colIdx ) {
			// Single column - already sorting on this column, modify the sort
			nextSortIdx = next( sorting[0] );
	
			sorting.length = 1;
			sorting[0][1] = asSorting[ nextSortIdx ];
			sorting[0]._idx = nextSortIdx;
		}
		else {
			// Single column - sort only on this column
			sorting.length = 0;
			sorting.push( [ colIdx, asSorting[0] ] );
			sorting[0]._idx = 0;
		}
	
		// Run the sort by calling a full redraw
		_fnReDraw( settings );
	
		// callback used for async user interaction
		if ( typeof callback == 'function' ) {
			callback( settings );
		}
	}
	
	
	/**
	 * Attach a sort handler (click) to a node
	 *  @param {object} settings dataTables settings object
	 *  @param {node} attachTo node to attach the handler to
	 *  @param {int} colIdx column sorting index
	 *  @param {function} [callback] callback function
	 *  @memberof DataTable#oApi
	 */
	function _fnSortAttachListener ( settings, attachTo, colIdx, callback )
	{
		var col = settings.aoColumns[ colIdx ];
	
		_fnBindAction( attachTo, {}, function (e) {
			/* If the column is not sortable - don't to anything */
			if ( col.bSortable === false ) {
				return;
			}
	
			// If processing is enabled use a timeout to allow the processing
			// display to be shown - otherwise to it synchronously
			if ( settings.oFeatures.bProcessing ) {
				_fnProcessingDisplay( settings, true );
	
				setTimeout( function() {
					_fnSortListener( settings, colIdx, e.shiftKey, callback );
	
					// In server-side processing, the draw callback will remove the
					// processing display
					if ( _fnDataSource( settings ) !== 'ssp' ) {
						_fnProcessingDisplay( settings, false );
					}
				}, 0 );
			}
			else {
				_fnSortListener( settings, colIdx, e.shiftKey, callback );
			}
		} );
	}
	
	
	/**
	 * Set the sorting classes on table's body, Note: it is safe to call this function
	 * when bSort and bSortClasses are false
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnSortingClasses( settings )
	{
		var oldSort = settings.aLastSort;
		var sortClass = settings.oClasses.sSortColumn;
		var sort = _fnSortFlatten( settings );
		var features = settings.oFeatures;
		var i, ien, colIdx;
	
		if ( features.bSort && features.bSortClasses ) {
			// Remove old sorting classes
			for ( i=0, ien=oldSort.length ; i<ien ; i++ ) {
				colIdx = oldSort[i].src;
	
				// Remove column sorting
				$( _pluck( settings.aoData, 'anCells', colIdx ) )
					.removeClass( sortClass + (i<2 ? i+1 : 3) );
			}
	
			// Add new column sorting
			for ( i=0, ien=sort.length ; i<ien ; i++ ) {
				colIdx = sort[i].src;
	
				$( _pluck( settings.aoData, 'anCells', colIdx ) )
					.addClass( sortClass + (i<2 ? i+1 : 3) );
			}
		}
	
		settings.aLastSort = sort;
	}
	
	
	// Get the data to sort a column, be it from cache, fresh (populating the
	// cache), or from a sort formatter
	function _fnSortData( settings, idx )
	{
		// Custom sorting function - provided by the sort data type
		var column = settings.aoColumns[ idx ];
		var customSort = DataTable.ext.order[ column.sSortDataType ];
		var customData;
	
		if ( customSort ) {
			customData = customSort.call( settings.oInstance, settings, idx,
				_fnColumnIndexToVisible( settings, idx )
			);
		}
	
		// Use / populate cache
		var row, cellData;
		var formatter = DataTable.ext.type.order[ column.sType+"-pre" ];
	
		for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			row = settings.aoData[i];
	
			if ( ! row._aSortData ) {
				row._aSortData = [];
			}
	
			if ( ! row._aSortData[idx] || customSort ) {
				cellData = customSort ?
					customData[i] : // If there was a custom sort function, use data from there
					_fnGetCellData( settings, i, idx, 'sort' );
	
				row._aSortData[ idx ] = formatter ?
					formatter( cellData ) :
					cellData;
			}
		}
	}
	
	
	
	/**
	 * Save the state of a table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnSaveState ( settings )
	{
		if ( !settings.oFeatures.bStateSave || settings.bDestroying )
		{
			return;
		}
	
		/* Store the interesting variables */
		var state = {
			time:    +new Date(),
			start:   settings._iDisplayStart,
			length:  settings._iDisplayLength,
			order:   $.extend( true, [], settings.aaSorting ),
			search:  _fnSearchToCamel( settings.oPreviousSearch ),
			columns: $.map( settings.aoColumns, function ( col, i ) {
				return {
					visible: col.bVisible,
					search: _fnSearchToCamel( settings.aoPreSearchCols[i] )
				};
			} )
		};
	
		_fnCallbackFire( settings, "aoStateSaveParams", 'stateSaveParams', [settings, state] );
	
		settings.oSavedState = state;
		settings.fnStateSaveCallback.call( settings.oInstance, settings, state );
	}
	
	
	/**
	 * Attempt to load a saved table state
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} oInit DataTables init object so we can override settings
	 *  @param {function} callback Callback to execute when the state has been loaded
	 *  @memberof DataTable#oApi
	 */
	function _fnLoadState ( settings, oInit, callback )
	{
		var i, ien;
		var columns = settings.aoColumns;
		var loaded = function ( s ) {
			if ( ! s || ! s.time ) {
				callback();
				return;
			}
	
			// Allow custom and plug-in manipulation functions to alter the saved data set and
			// cancelling of loading by returning false
			var abStateLoad = _fnCallbackFire( settings, 'aoStateLoadParams', 'stateLoadParams', [settings, s] );
			if ( $.inArray( false, abStateLoad ) !== -1 ) {
				callback();
				return;
			}
	
			// Reject old data
			var duration = settings.iStateDuration;
			if ( duration > 0 && s.time < +new Date() - (duration*1000) ) {
				callback();
				return;
			}
	
			// Number of columns have changed - all bets are off, no restore of settings
			if ( s.columns && columns.length !== s.columns.length ) {
				callback();
				return;
			}
	
			// Store the saved state so it might be accessed at any time
			settings.oLoadedState = $.extend( true, {}, s );
	
			// Restore key features - todo - for 1.11 this needs to be done by
			// subscribed events
			if ( s.start !== undefined ) {
				settings._iDisplayStart    = s.start;
				settings.iInitDisplayStart = s.start;
			}
			if ( s.length !== undefined ) {
				settings._iDisplayLength   = s.length;
			}
	
			// Order
			if ( s.order !== undefined ) {
				settings.aaSorting = [];
				$.each( s.order, function ( i, col ) {
					settings.aaSorting.push( col[0] >= columns.length ?
						[ 0, col[1] ] :
						col
					);
				} );
			}
	
			// Search
			if ( s.search !== undefined ) {
				$.extend( settings.oPreviousSearch, _fnSearchToHung( s.search ) );
			}
	
			// Columns
			//
			if ( s.columns ) {
				for ( i=0, ien=s.columns.length ; i<ien ; i++ ) {
					var col = s.columns[i];
	
					// Visibility
					if ( col.visible !== undefined ) {
						columns[i].bVisible = col.visible;
					}
	
					// Search
					if ( col.search !== undefined ) {
						$.extend( settings.aoPreSearchCols[i], _fnSearchToHung( col.search ) );
					}
				}
			}
	
			_fnCallbackFire( settings, 'aoStateLoaded', 'stateLoaded', [settings, s] );
			callback();
		};
	
		if ( ! settings.oFeatures.bStateSave ) {
			callback();
			return;
		}
	
		var state = settings.fnStateLoadCallback.call( settings.oInstance, settings, loaded );
	
		if ( state !== undefined ) {
			loaded( state );
		}
		// otherwise, wait for the loaded callback to be executed
	}
	
	
	/**
	 * Return the settings object for a particular table
	 *  @param {node} table table we are using as a dataTable
	 *  @returns {object} Settings object - or null if not found
	 *  @memberof DataTable#oApi
	 */
	function _fnSettingsFromNode ( table )
	{
		var settings = DataTable.settings;
		var idx = $.inArray( table, _pluck( settings, 'nTable' ) );
	
		return idx !== -1 ?
			settings[ idx ] :
			null;
	}
	
	
	/**
	 * Log an error message
	 *  @param {object} settings dataTables settings object
	 *  @param {int} level log error messages, or display them to the user
	 *  @param {string} msg error message
	 *  @param {int} tn Technical note id to get more information about the error.
	 *  @memberof DataTable#oApi
	 */
	function _fnLog( settings, level, msg, tn )
	{
		msg = 'DataTables warning: '+
			(settings ? 'table id='+settings.sTableId+' - ' : '')+msg;
	
		if ( tn ) {
			msg += '. For more information about this error, please see '+
			'http://datatables.net/tn/'+tn;
		}
	
		if ( ! level  ) {
			// Backwards compatibility pre 1.10
			var ext = DataTable.ext;
			var type = ext.sErrMode || ext.errMode;
	
			if ( settings ) {
				_fnCallbackFire( settings, null, 'error', [ settings, tn, msg ] );
			}
	
			if ( type == 'alert' ) {
				alert( msg );
			}
			else if ( type == 'throw' ) {
				throw new Error(msg);
			}
			else if ( typeof type == 'function' ) {
				type( settings, tn, msg );
			}
		}
		else if ( window.console && console.log ) {
			console.log( msg );
		}
	}
	
	
	/**
	 * See if a property is defined on one object, if so assign it to the other object
	 *  @param {object} ret target object
	 *  @param {object} src source object
	 *  @param {string} name property
	 *  @param {string} [mappedName] name to map too - optional, name used if not given
	 *  @memberof DataTable#oApi
	 */
	function _fnMap( ret, src, name, mappedName )
	{
		if ( $.isArray( name ) ) {
			$.each( name, function (i, val) {
				if ( $.isArray( val ) ) {
					_fnMap( ret, src, val[0], val[1] );
				}
				else {
					_fnMap( ret, src, val );
				}
			} );
	
			return;
		}
	
		if ( mappedName === undefined ) {
			mappedName = name;
		}
	
		if ( src[name] !== undefined ) {
			ret[mappedName] = src[name];
		}
	}
	
	
	/**
	 * Extend objects - very similar to jQuery.extend, but deep copy objects, and
	 * shallow copy arrays. The reason we need to do this, is that we don't want to
	 * deep copy array init values (such as aaSorting) since the dev wouldn't be
	 * able to override them, but we do want to deep copy arrays.
	 *  @param {object} out Object to extend
	 *  @param {object} extender Object from which the properties will be applied to
	 *      out
	 *  @param {boolean} breakRefs If true, then arrays will be sliced to take an
	 *      independent copy with the exception of the `data` or `aaData` parameters
	 *      if they are present. This is so you can pass in a collection to
	 *      DataTables and have that used as your data source without breaking the
	 *      references
	 *  @returns {object} out Reference, just for convenience - out === the return.
	 *  @memberof DataTable#oApi
	 *  @todo This doesn't take account of arrays inside the deep copied objects.
	 */
	function _fnExtend( out, extender, breakRefs )
	{
		var val;
	
		for ( var prop in extender ) {
			if ( extender.hasOwnProperty(prop) ) {
				val = extender[prop];
	
				if ( $.isPlainObject( val ) ) {
					if ( ! $.isPlainObject( out[prop] ) ) {
						out[prop] = {};
					}
					$.extend( true, out[prop], val );
				}
				else if ( breakRefs && prop !== 'data' && prop !== 'aaData' && $.isArray(val) ) {
					out[prop] = val.slice();
				}
				else {
					out[prop] = val;
				}
			}
		}
	
		return out;
	}
	
	
	/**
	 * Bind an event handers to allow a click or return key to activate the callback.
	 * This is good for accessibility since a return on the keyboard will have the
	 * same effect as a click, if the element has focus.
	 *  @param {element} n Element to bind the action to
	 *  @param {object} oData Data object to pass to the triggered function
	 *  @param {function} fn Callback function for when the event is triggered
	 *  @memberof DataTable#oApi
	 */
	function _fnBindAction( n, oData, fn )
	{
		$(n)
			.on( 'click.DT', oData, function (e) {
					$(n).trigger('blur'); // Remove focus outline for mouse users
					fn(e);
				} )
			.on( 'keypress.DT', oData, function (e){
					if ( e.which === 13 ) {
						e.preventDefault();
						fn(e);
					}
				} )
			.on( 'selectstart.DT', function () {
					/* Take the brutal approach to cancelling text selection */
					return false;
				} );
	}
	
	
	/**
	 * Register a callback function. Easily allows a callback function to be added to
	 * an array store of callback functions that can then all be called together.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sStore Name of the array storage for the callbacks in oSettings
	 *  @param {function} fn Function to be called back
	 *  @param {string} sName Identifying name for the callback (i.e. a label)
	 *  @memberof DataTable#oApi
	 */
	function _fnCallbackReg( oSettings, sStore, fn, sName )
	{
		if ( fn )
		{
			oSettings[sStore].push( {
				"fn": fn,
				"sName": sName
			} );
		}
	}
	
	
	/**
	 * Fire callback functions and trigger events. Note that the loop over the
	 * callback array store is done backwards! Further note that you do not want to
	 * fire off triggers in time sensitive applications (for example cell creation)
	 * as its slow.
	 *  @param {object} settings dataTables settings object
	 *  @param {string} callbackArr Name of the array storage for the callbacks in
	 *      oSettings
	 *  @param {string} eventName Name of the jQuery custom event to trigger. If
	 *      null no trigger is fired
	 *  @param {array} args Array of arguments to pass to the callback function /
	 *      trigger
	 *  @memberof DataTable#oApi
	 */
	function _fnCallbackFire( settings, callbackArr, eventName, args )
	{
		var ret = [];
	
		if ( callbackArr ) {
			ret = $.map( settings[callbackArr].slice().reverse(), function (val, i) {
				return val.fn.apply( settings.oInstance, args );
			} );
		}
	
		if ( eventName !== null ) {
			var e = $.Event( eventName+'.dt' );
	
			$(settings.nTable).trigger( e, args );
	
			ret.push( e.result );
		}
	
		return ret;
	}
	
	
	function _fnLengthOverflow ( settings )
	{
		var
			start = settings._iDisplayStart,
			end = settings.fnDisplayEnd(),
			len = settings._iDisplayLength;
	
		/* If we have space to show extra rows (backing up from the end point - then do so */
		if ( start >= end )
		{
			start = end - len;
		}
	
		// Keep the start record on the current page
		start -= (start % len);
	
		if ( len === -1 || start < 0 )
		{
			start = 0;
		}
	
		settings._iDisplayStart = start;
	}
	
	
	function _fnRenderer( settings, type )
	{
		var renderer = settings.renderer;
		var host = DataTable.ext.renderer[type];
	
		if ( $.isPlainObject( renderer ) && renderer[type] ) {
			// Specific renderer for this type. If available use it, otherwise use
			// the default.
			return host[renderer[type]] || host._;
		}
		else if ( typeof renderer === 'string' ) {
			// Common renderer - if there is one available for this type use it,
			// otherwise use the default
			return host[renderer] || host._;
		}
	
		// Use the default
		return host._;
	}
	
	
	/**
	 * Detect the data source being used for the table. Used to simplify the code
	 * a little (ajax) and to make it compress a little smaller.
	 *
	 *  @param {object} settings dataTables settings object
	 *  @returns {string} Data source
	 *  @memberof DataTable#oApi
	 */
	function _fnDataSource ( settings )
	{
		if ( settings.oFeatures.bServerSide ) {
			return 'ssp';
		}
		else if ( settings.ajax || settings.sAjaxSource ) {
			return 'ajax';
		}
		return 'dom';
	}
	

	
	
	/**
	 * Computed structure of the DataTables API, defined by the options passed to
	 * `DataTable.Api.register()` when building the API.
	 *
	 * The structure is built in order to speed creation and extension of the Api
	 * objects since the extensions are effectively pre-parsed.
	 *
	 * The array is an array of objects with the following structure, where this
	 * base array represents the Api prototype base:
	 *
	 *     [
	 *       {
	 *         name:      'data'                -- string   - Property name
	 *         val:       function () {},       -- function - Api method (or undefined if just an object
	 *         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
	 *         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
	 *       },
	 *       {
	 *         name:     'row'
	 *         val:       {},
	 *         methodExt: [ ... ],
	 *         propExt:   [
	 *           {
	 *             name:      'data'
	 *             val:       function () {},
	 *             methodExt: [ ... ],
	 *             propExt:   [ ... ]
	 *           },
	 *           ...
	 *         ]
	 *       }
	 *     ]
	 *
	 * @type {Array}
	 * @ignore
	 */
	var __apiStruct = [];
	
	
	/**
	 * `Array.prototype` reference.
	 *
	 * @type object
	 * @ignore
	 */
	var __arrayProto = Array.prototype;
	
	
	/**
	 * Abstraction for `context` parameter of the `Api` constructor to allow it to
	 * take several different forms for ease of use.
	 *
	 * Each of the input parameter types will be converted to a DataTables settings
	 * object where possible.
	 *
	 * @param  {string|node|jQuery|object} mixed DataTable identifier. Can be one
	 *   of:
	 *
	 *   * `string` - jQuery selector. Any DataTables' matching the given selector
	 *     with be found and used.
	 *   * `node` - `TABLE` node which has already been formed into a DataTable.
	 *   * `jQuery` - A jQuery object of `TABLE` nodes.
	 *   * `object` - DataTables settings object
	 *   * `DataTables.Api` - API instance
	 * @return {array|null} Matching DataTables settings objects. `null` or
	 *   `undefined` is returned if no matching DataTable is found.
	 * @ignore
	 */
	var _toSettings = function ( mixed )
	{
		var idx, jq;
		var settings = DataTable.settings;
		var tables = $.map( settings, function (el, i) {
			return el.nTable;
		} );
	
		if ( ! mixed ) {
			return [];
		}
		else if ( mixed.nTable && mixed.oApi ) {
			// DataTables settings object
			return [ mixed ];
		}
		else if ( mixed.nodeName && mixed.nodeName.toLowerCase() === 'table' ) {
			// Table node
			idx = $.inArray( mixed, tables );
			return idx !== -1 ? [ settings[idx] ] : null;
		}
		else if ( mixed && typeof mixed.settings === 'function' ) {
			return mixed.settings().toArray();
		}
		else if ( typeof mixed === 'string' ) {
			// jQuery selector
			jq = $(mixed);
		}
		else if ( mixed instanceof $ ) {
			// jQuery object (also DataTables instance)
			jq = mixed;
		}
	
		if ( jq ) {
			return jq.map( function(i) {
				idx = $.inArray( this, tables );
				return idx !== -1 ? settings[idx] : null;
			} ).toArray();
		}
	};
	
	
	/**
	 * DataTables API class - used to control and interface with  one or more
	 * DataTables enhanced tables.
	 *
	 * The API class is heavily based on jQuery, presenting a chainable interface
	 * that you can use to interact with tables. Each instance of the API class has
	 * a "context" - i.e. the tables that it will operate on. This could be a single
	 * table, all tables on a page or a sub-set thereof.
	 *
	 * Additionally the API is designed to allow you to easily work with the data in
	 * the tables, retrieving and manipulating it as required. This is done by
	 * presenting the API class as an array like interface. The contents of the
	 * array depend upon the actions requested by each method (for example
	 * `rows().nodes()` will return an array of nodes, while `rows().data()` will
	 * return an array of objects or arrays depending upon your table's
	 * configuration). The API object has a number of array like methods (`push`,
	 * `pop`, `reverse` etc) as well as additional helper methods (`each`, `pluck`,
	 * `unique` etc) to assist your working with the data held in a table.
	 *
	 * Most methods (those which return an Api instance) are chainable, which means
	 * the return from a method call also has all of the methods available that the
	 * top level object had. For example, these two calls are equivalent:
	 *
	 *     // Not chained
	 *     api.row.add( {...} );
	 *     api.draw();
	 *
	 *     // Chained
	 *     api.row.add( {...} ).draw();
	 *
	 * @class DataTable.Api
	 * @param {array|object|string|jQuery} context DataTable identifier. This is
	 *   used to define which DataTables enhanced tables this API will operate on.
	 *   Can be one of:
	 *
	 *   * `string` - jQuery selector. Any DataTables' matching the given selector
	 *     with be found and used.
	 *   * `node` - `TABLE` node which has already been formed into a DataTable.
	 *   * `jQuery` - A jQuery object of `TABLE` nodes.
	 *   * `object` - DataTables settings object
	 * @param {array} [data] Data to initialise the Api instance with.
	 *
	 * @example
	 *   // Direct initialisation during DataTables construction
	 *   var api = $('#example').DataTable();
	 *
	 * @example
	 *   // Initialisation using a DataTables jQuery object
	 *   var api = $('#example').dataTable().api();
	 *
	 * @example
	 *   // Initialisation as a constructor
	 *   var api = new $.fn.DataTable.Api( 'table.dataTable' );
	 */
	_Api = function ( context, data )
	{
		if ( ! (this instanceof _Api) ) {
			return new _Api( context, data );
		}
	
		var settings = [];
		var ctxSettings = function ( o ) {
			var a = _toSettings( o );
			if ( a ) {
				settings.push.apply( settings, a );
			}
		};
	
		if ( $.isArray( context ) ) {
			for ( var i=0, ien=context.length ; i<ien ; i++ ) {
				ctxSettings( context[i] );
			}
		}
		else {
			ctxSettings( context );
		}
	
		// Remove duplicates
		this.context = _unique( settings );
	
		// Initial data
		if ( data ) {
			$.merge( this, data );
		}
	
		// selector
		this.selector = {
			rows: null,
			cols: null,
			opts: null
		};
	
		_Api.extend( this, this, __apiStruct );
	};
	
	DataTable.Api = _Api;
	
	// Don't destroy the existing prototype, just extend it. Required for jQuery 2's
	// isPlainObject.
	$.extend( _Api.prototype, {
		any: function ()
		{
			return this.count() !== 0;
		},
	
	
		concat:  __arrayProto.concat,
	
	
		context: [], // array of table settings objects
	
	
		count: function ()
		{
			return this.flatten().length;
		},
	
	
		each: function ( fn )
		{
			for ( var i=0, ien=this.length ; i<ien; i++ ) {
				fn.call( this, this[i], i, this );
			}
	
			return this;
		},
	
	
		eq: function ( idx )
		{
			var ctx = this.context;
	
			return ctx.length > idx ?
				new _Api( ctx[idx], this[idx] ) :
				null;
		},
	
	
		filter: function ( fn )
		{
			var a = [];
	
			if ( __arrayProto.filter ) {
				a = __arrayProto.filter.call( this, fn, this );
			}
			else {
				// Compatibility for browsers without EMCA-252-5 (JS 1.6)
				for ( var i=0, ien=this.length ; i<ien ; i++ ) {
					if ( fn.call( this, this[i], i, this ) ) {
						a.push( this[i] );
					}
				}
			}
	
			return new _Api( this.context, a );
		},
	
	
		flatten: function ()
		{
			var a = [];
			return new _Api( this.context, a.concat.apply( a, this.toArray() ) );
		},
	
	
		join:    __arrayProto.join,
	
	
		indexOf: __arrayProto.indexOf || function (obj, start)
		{
			for ( var i=(start || 0), ien=this.length ; i<ien ; i++ ) {
				if ( this[i] === obj ) {
					return i;
				}
			}
			return -1;
		},
	
		iterator: function ( flatten, type, fn, alwaysNew ) {
			var
				a = [], ret,
				i, ien, j, jen,
				context = this.context,
				rows, items, item,
				selector = this.selector;
	
			// Argument shifting
			if ( typeof flatten === 'string' ) {
				alwaysNew = fn;
				fn = type;
				type = flatten;
				flatten = false;
			}
	
			for ( i=0, ien=context.length ; i<ien ; i++ ) {
				var apiInst = new _Api( context[i] );
	
				if ( type === 'table' ) {
					ret = fn.call( apiInst, context[i], i );
	
					if ( ret !== undefined ) {
						a.push( ret );
					}
				}
				else if ( type === 'columns' || type === 'rows' ) {
					// this has same length as context - one entry for each table
					ret = fn.call( apiInst, context[i], this[i], i );
	
					if ( ret !== undefined ) {
						a.push( ret );
					}
				}
				else if ( type === 'column' || type === 'column-rows' || type === 'row' || type === 'cell' ) {
					// columns and rows share the same structure.
					// 'this' is an array of column indexes for each context
					items = this[i];
	
					if ( type === 'column-rows' ) {
						rows = _selector_row_indexes( context[i], selector.opts );
					}
	
					for ( j=0, jen=items.length ; j<jen ; j++ ) {
						item = items[j];
	
						if ( type === 'cell' ) {
							ret = fn.call( apiInst, context[i], item.row, item.column, i, j );
						}
						else {
							ret = fn.call( apiInst, context[i], item, i, j, rows );
						}
	
						if ( ret !== undefined ) {
							a.push( ret );
						}
					}
				}
			}
	
			if ( a.length || alwaysNew ) {
				var api = new _Api( context, flatten ? a.concat.apply( [], a ) : a );
				var apiSelector = api.selector;
				apiSelector.rows = selector.rows;
				apiSelector.cols = selector.cols;
				apiSelector.opts = selector.opts;
				return api;
			}
			return this;
		},
	
	
		lastIndexOf: __arrayProto.lastIndexOf || function (obj, start)
		{
			// Bit cheeky...
			return this.indexOf.apply( this.toArray.reverse(), arguments );
		},
	
	
		length:  0,
	
	
		map: function ( fn )
		{
			var a = [];
	
			if ( __arrayProto.map ) {
				a = __arrayProto.map.call( this, fn, this );
			}
			else {
				// Compatibility for browsers without EMCA-252-5 (JS 1.6)
				for ( var i=0, ien=this.length ; i<ien ; i++ ) {
					a.push( fn.call( this, this[i], i ) );
				}
			}
	
			return new _Api( this.context, a );
		},
	
	
		pluck: function ( prop )
		{
			return this.map( function ( el ) {
				return el[ prop ];
			} );
		},
	
		pop:     __arrayProto.pop,
	
	
		push:    __arrayProto.push,
	
	
		// Does not return an API instance
		reduce: __arrayProto.reduce || function ( fn, init )
		{
			return _fnReduce( this, fn, init, 0, this.length, 1 );
		},
	
	
		reduceRight: __arrayProto.reduceRight || function ( fn, init )
		{
			return _fnReduce( this, fn, init, this.length-1, -1, -1 );
		},
	
	
		reverse: __arrayProto.reverse,
	
	
		// Object with rows, columns and opts
		selector: null,
	
	
		shift:   __arrayProto.shift,
	
	
		slice: function () {
			return new _Api( this.context, this );
		},
	
	
		sort:    __arrayProto.sort, // ? name - order?
	
	
		splice:  __arrayProto.splice,
	
	
		toArray: function ()
		{
			return __arrayProto.slice.call( this );
		},
	
	
		to$: function ()
		{
			return $( this );
		},
	
	
		toJQuery: function ()
		{
			return $( this );
		},
	
	
		unique: function ()
		{
			return new _Api( this.context, _unique(this) );
		},
	
	
		unshift: __arrayProto.unshift
	} );
	
	
	_Api.extend = function ( scope, obj, ext )
	{
		// Only extend API instances and static properties of the API
		if ( ! ext.length || ! obj || ( ! (obj instanceof _Api) && ! obj.__dt_wrapper ) ) {
			return;
		}
	
		var
			i, ien,
			struct,
			methodScoping = function ( scope, fn, struc ) {
				return function () {
					var ret = fn.apply( scope, arguments );
	
					// Method extension
					_Api.extend( ret, ret, struc.methodExt );
					return ret;
				};
			};
	
		for ( i=0, ien=ext.length ; i<ien ; i++ ) {
			struct = ext[i];
	
			// Value
			obj[ struct.name ] = struct.type === 'function' ?
				methodScoping( scope, struct.val, struct ) :
				struct.type === 'object' ?
					{} :
					struct.val;
	
			obj[ struct.name ].__dt_wrapper = true;
	
			// Property extension
			_Api.extend( scope, obj[ struct.name ], struct.propExt );
		}
	};
	
	
	// @todo - Is there need for an augment function?
	// _Api.augment = function ( inst, name )
	// {
	// 	// Find src object in the structure from the name
	// 	var parts = name.split('.');
	
	// 	_Api.extend( inst, obj );
	// };
	
	
	//     [
	//       {
	//         name:      'data'                -- string   - Property name
	//         val:       function () {},       -- function - Api method (or undefined if just an object
	//         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
	//         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
	//       },
	//       {
	//         name:     'row'
	//         val:       {},
	//         methodExt: [ ... ],
	//         propExt:   [
	//           {
	//             name:      'data'
	//             val:       function () {},
	//             methodExt: [ ... ],
	//             propExt:   [ ... ]
	//           },
	//           ...
	//         ]
	//       }
	//     ]
	
	_Api.register = _api_register = function ( name, val )
	{
		if ( $.isArray( name ) ) {
			for ( var j=0, jen=name.length ; j<jen ; j++ ) {
				_Api.register( name[j], val );
			}
			return;
		}
	
		var
			i, ien,
			heir = name.split('.'),
			struct = __apiStruct,
			key, method;
	
		var find = function ( src, name ) {
			for ( var i=0, ien=src.length ; i<ien ; i++ ) {
				if ( src[i].name === name ) {
					return src[i];
				}
			}
			return null;
		};
	
		for ( i=0, ien=heir.length ; i<ien ; i++ ) {
			method = heir[i].indexOf('()') !== -1;
			key = method ?
				heir[i].replace('()', '') :
				heir[i];
	
			var src = find( struct, key );
			if ( ! src ) {
				src = {
					name:      key,
					val:       {},
					methodExt: [],
					propExt:   [],
					type:      'object'
				};
				struct.push( src );
			}
	
			if ( i === ien-1 ) {
				src.val = val;
				src.type = typeof val === 'function' ?
					'function' :
					$.isPlainObject( val ) ?
						'object' :
						'other';
			}
			else {
				struct = method ?
					src.methodExt :
					src.propExt;
			}
		}
	};
	
	_Api.registerPlural = _api_registerPlural = function ( pluralName, singularName, val ) {
		_Api.register( pluralName, val );
	
		_Api.register( singularName, function () {
			var ret = val.apply( this, arguments );
	
			if ( ret === this ) {
				// Returned item is the API instance that was passed in, return it
				return this;
			}
			else if ( ret instanceof _Api ) {
				// New API instance returned, want the value from the first item
				// in the returned array for the singular result.
				return ret.length ?
					$.isArray( ret[0] ) ?
						new _Api( ret.context, ret[0] ) : // Array results are 'enhanced'
						ret[0] :
					undefined;
			}
	
			// Non-API return - just fire it back
			return ret;
		} );
	};
	
	
	/**
	 * Selector for HTML tables. Apply the given selector to the give array of
	 * DataTables settings objects.
	 *
	 * @param {string|integer} [selector] jQuery selector string or integer
	 * @param  {array} Array of DataTables settings objects to be filtered
	 * @return {array}
	 * @ignore
	 */
	var __table_selector = function ( selector, a )
	{
		if ( $.isArray(selector) ) {
			return $.map( selector, function (item) {
				return __table_selector(item, a);
			} );
		}
	
		// Integer is used to pick out a table by index
		if ( typeof selector === 'number' ) {
			return [ a[ selector ] ];
		}
	
		// Perform a jQuery selector on the table nodes
		var nodes = $.map( a, function (el, i) {
			return el.nTable;
		} );
	
		return $(nodes)
			.filter( selector )
			.map( function (i) {
				// Need to translate back from the table node to the settings
				var idx = $.inArray( this, nodes );
				return a[ idx ];
			} )
			.toArray();
	};
	
	
	
	/**
	 * Context selector for the API's context (i.e. the tables the API instance
	 * refers to.
	 *
	 * @name    DataTable.Api#tables
	 * @param {string|integer} [selector] Selector to pick which tables the iterator
	 *   should operate on. If not given, all tables in the current context are
	 *   used. This can be given as a jQuery selector (for example `':gt(0)'`) to
	 *   select multiple tables or as an integer to select a single table.
	 * @returns {DataTable.Api} Returns a new API instance if a selector is given.
	 */
	_api_register( 'tables()', function ( selector ) {
		// A new instance is created if there was a selector specified
		return selector !== undefined && selector !== null ?
			new _Api( __table_selector( selector, this.context ) ) :
			this;
	} );
	
	
	_api_register( 'table()', function ( selector ) {
		var tables = this.tables( selector );
		var ctx = tables.context;
	
		// Truncate to the first matched table
		return ctx.length ?
			new _Api( ctx[0] ) :
			tables;
	} );
	
	
	_api_registerPlural( 'tables().nodes()', 'table().node()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTable;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().body()', 'table().body()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTBody;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().header()', 'table().header()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTHead;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().footer()', 'table().footer()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTFoot;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().containers()', 'table().container()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTableWrapper;
		}, 1 );
	} );
	
	
	
	/**
	 * Redraw the tables in the current context.
	 */
	_api_register( 'draw()', function ( paging ) {
		return this.iterator( 'table', function ( settings ) {
			if ( paging === 'page' ) {
				_fnDraw( settings );
			}
			else {
				if ( typeof paging === 'string' ) {
					paging = paging === 'full-hold' ?
						false :
						true;
				}
	
				_fnReDraw( settings, paging===false );
			}
		} );
	} );
	
	
	
	/**
	 * Get the current page index.
	 *
	 * @return {integer} Current page index (zero based)
	 *//**
	 * Set the current page.
	 *
	 * Note that if you attempt to show a page which does not exist, DataTables will
	 * not throw an error, but rather reset the paging.
	 *
	 * @param {integer|string} action The paging action to take. This can be one of:
	 *  * `integer` - The page index to jump to
	 *  * `string` - An action to take:
	 *    * `first` - Jump to first page.
	 *    * `next` - Jump to the next page
	 *    * `previous` - Jump to previous page
	 *    * `last` - Jump to the last page.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'page()', function ( action ) {
		if ( action === undefined ) {
			return this.page.info().page; // not an expensive call
		}
	
		// else, have an action to take on all tables
		return this.iterator( 'table', function ( settings ) {
			_fnPageChange( settings, action );
		} );
	} );
	
	
	/**
	 * Paging information for the first table in the current context.
	 *
	 * If you require paging information for another table, use the `table()` method
	 * with a suitable selector.
	 *
	 * @return {object} Object with the following properties set:
	 *  * `page` - Current page index (zero based - i.e. the first page is `0`)
	 *  * `pages` - Total number of pages
	 *  * `start` - Display index for the first record shown on the current page
	 *  * `end` - Display index for the last record shown on the current page
	 *  * `length` - Display length (number of records). Note that generally `start
	 *    + length = end`, but this is not always true, for example if there are
	 *    only 2 records to show on the final page, with a length of 10.
	 *  * `recordsTotal` - Full data set length
	 *  * `recordsDisplay` - Data set length once the current filtering criterion
	 *    are applied.
	 */
	_api_register( 'page.info()', function ( action ) {
		if ( this.context.length === 0 ) {
			return undefined;
		}
	
		var
			settings   = this.context[0],
			start      = settings._iDisplayStart,
			len        = settings.oFeatures.bPaginate ? settings._iDisplayLength : -1,
			visRecords = settings.fnRecordsDisplay(),
			all        = len === -1;
	
		return {
			"page":           all ? 0 : Math.floor( start / len ),
			"pages":          all ? 1 : Math.ceil( visRecords / len ),
			"start":          start,
			"end":            settings.fnDisplayEnd(),
			"length":         len,
			"recordsTotal":   settings.fnRecordsTotal(),
			"recordsDisplay": visRecords,
			"serverSide":     _fnDataSource( settings ) === 'ssp'
		};
	} );
	
	
	/**
	 * Get the current page length.
	 *
	 * @return {integer} Current page length. Note `-1` indicates that all records
	 *   are to be shown.
	 *//**
	 * Set the current page length.
	 *
	 * @param {integer} Page length to set. Use `-1` to show all records.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'page.len()', function ( len ) {
		// Note that we can't call this function 'length()' because `length`
		// is a Javascript property of functions which defines how many arguments
		// the function expects.
		if ( len === undefined ) {
			return this.context.length !== 0 ?
				this.context[0]._iDisplayLength :
				undefined;
		}
	
		// else, set the page length
		return this.iterator( 'table', function ( settings ) {
			_fnLengthChange( settings, len );
		} );
	} );
	
	
	
	var __reload = function ( settings, holdPosition, callback ) {
		// Use the draw event to trigger a callback
		if ( callback ) {
			var api = new _Api( settings );
	
			api.one( 'draw', function () {
				callback( api.ajax.json() );
			} );
		}
	
		if ( _fnDataSource( settings ) == 'ssp' ) {
			_fnReDraw( settings, holdPosition );
		}
		else {
			_fnProcessingDisplay( settings, true );
	
			// Cancel an existing request
			var xhr = settings.jqXHR;
			if ( xhr && xhr.readyState !== 4 ) {
				xhr.abort();
			}
	
			// Trigger xhr
			_fnBuildAjax( settings, [], function( json ) {
				_fnClearTable( settings );
	
				var data = _fnAjaxDataSrc( settings, json );
				for ( var i=0, ien=data.length ; i<ien ; i++ ) {
					_fnAddData( settings, data[i] );
				}
	
				_fnReDraw( settings, holdPosition );
				_fnProcessingDisplay( settings, false );
			} );
		}
	};
	
	
	/**
	 * Get the JSON response from the last Ajax request that DataTables made to the
	 * server. Note that this returns the JSON from the first table in the current
	 * context.
	 *
	 * @return {object} JSON received from the server.
	 */
	_api_register( 'ajax.json()', function () {
		var ctx = this.context;
	
		if ( ctx.length > 0 ) {
			return ctx[0].json;
		}
	
		// else return undefined;
	} );
	
	
	/**
	 * Get the data submitted in the last Ajax request
	 */
	_api_register( 'ajax.params()', function () {
		var ctx = this.context;
	
		if ( ctx.length > 0 ) {
			return ctx[0].oAjaxData;
		}
	
		// else return undefined;
	} );
	
	
	/**
	 * Reload tables from the Ajax data source. Note that this function will
	 * automatically re-draw the table when the remote data has been loaded.
	 *
	 * @param {boolean} [reset=true] Reset (default) or hold the current paging
	 *   position. A full re-sort and re-filter is performed when this method is
	 *   called, which is why the pagination reset is the default action.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'ajax.reload()', function ( callback, resetPaging ) {
		return this.iterator( 'table', function (settings) {
			__reload( settings, resetPaging===false, callback );
		} );
	} );
	
	
	/**
	 * Get the current Ajax URL. Note that this returns the URL from the first
	 * table in the current context.
	 *
	 * @return {string} Current Ajax source URL
	 *//**
	 * Set the Ajax URL. Note that this will set the URL for all tables in the
	 * current context.
	 *
	 * @param {string} url URL to set.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'ajax.url()', function ( url ) {
		var ctx = this.context;
	
		if ( url === undefined ) {
			// get
			if ( ctx.length === 0 ) {
				return undefined;
			}
			ctx = ctx[0];
	
			return ctx.ajax ?
				$.isPlainObject( ctx.ajax ) ?
					ctx.ajax.url :
					ctx.ajax :
				ctx.sAjaxSource;
		}
	
		// set
		return this.iterator( 'table', function ( settings ) {
			if ( $.isPlainObject( settings.ajax ) ) {
				settings.ajax.url = url;
			}
			else {
				settings.ajax = url;
			}
			// No need to consider sAjaxSource here since DataTables gives priority
			// to `ajax` over `sAjaxSource`. So setting `ajax` here, renders any
			// value of `sAjaxSource` redundant.
		} );
	} );
	
	
	/**
	 * Load data from the newly set Ajax URL. Note that this method is only
	 * available when `ajax.url()` is used to set a URL. Additionally, this method
	 * has the same effect as calling `ajax.reload()` but is provided for
	 * convenience when setting a new URL. Like `ajax.reload()` it will
	 * automatically redraw the table once the remote data has been loaded.
	 *
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'ajax.url().load()', function ( callback, resetPaging ) {
		// Same as a reload, but makes sense to present it for easy access after a
		// url change
		return this.iterator( 'table', function ( ctx ) {
			__reload( ctx, resetPaging===false, callback );
		} );
	} );
	
	
	
	
	var _selector_run = function ( type, selector, selectFn, settings, opts )
	{
		var
			out = [], res,
			a, i, ien, j, jen,
			selectorType = typeof selector;
	
		// Can't just check for isArray here, as an API or jQuery instance might be
		// given with their array like look
		if ( ! selector || selectorType === 'string' || selectorType === 'function' || selector.length === undefined ) {
			selector = [ selector ];
		}
	
		for ( i=0, ien=selector.length ; i<ien ; i++ ) {
			// Only split on simple strings - complex expressions will be jQuery selectors
			a = selector[i] && selector[i].split && ! selector[i].match(/[\[\(:]/) ?
				selector[i].split(',') :
				[ selector[i] ];
	
			for ( j=0, jen=a.length ; j<jen ; j++ ) {
				res = selectFn( typeof a[j] === 'string' ? $.trim(a[j]) : a[j] );
	
				if ( res && res.length ) {
					out = out.concat( res );
				}
			}
		}
	
		// selector extensions
		var ext = _ext.selector[ type ];
		if ( ext.length ) {
			for ( i=0, ien=ext.length ; i<ien ; i++ ) {
				out = ext[i]( settings, opts, out );
			}
		}
	
		return _unique( out );
	};
	
	
	var _selector_opts = function ( opts )
	{
		if ( ! opts ) {
			opts = {};
		}
	
		// Backwards compatibility for 1.9- which used the terminology filter rather
		// than search
		if ( opts.filter && opts.search === undefined ) {
			opts.search = opts.filter;
		}
	
		return $.extend( {
			search: 'none',
			order: 'current',
			page: 'all'
		}, opts );
	};
	
	
	var _selector_first = function ( inst )
	{
		// Reduce the API instance to the first item found
		for ( var i=0, ien=inst.length ; i<ien ; i++ ) {
			if ( inst[i].length > 0 ) {
				// Assign the first element to the first item in the instance
				// and truncate the instance and context
				inst[0] = inst[i];
				inst[0].length = 1;
				inst.length = 1;
				inst.context = [ inst.context[i] ];
	
				return inst;
			}
		}
	
		// Not found - return an empty instance
		inst.length = 0;
		return inst;
	};
	
	
	var _selector_row_indexes = function ( settings, opts )
	{
		var
			i, ien, tmp, a=[],
			displayFiltered = settings.aiDisplay,
			displayMaster = settings.aiDisplayMaster;
	
		var
			search = opts.search,  // none, applied, removed
			order  = opts.order,   // applied, current, index (original - compatibility with 1.9)
			page   = opts.page;    // all, current
	
		if ( _fnDataSource( settings ) == 'ssp' ) {
			// In server-side processing mode, most options are irrelevant since
			// rows not shown don't exist and the index order is the applied order
			// Removed is a special case - for consistency just return an empty
			// array
			return search === 'removed' ?
				[] :
				_range( 0, displayMaster.length );
		}
		else if ( page == 'current' ) {
			// Current page implies that order=current and fitler=applied, since it is
			// fairly senseless otherwise, regardless of what order and search actually
			// are
			for ( i=settings._iDisplayStart, ien=settings.fnDisplayEnd() ; i<ien ; i++ ) {
				a.push( displayFiltered[i] );
			}
		}
		else if ( order == 'current' || order == 'applied' ) {
			if ( search == 'none') {
				a = displayMaster.slice();
			}
			else if ( search == 'applied' ) {
				a = displayFiltered.slice();
			}
			else if ( search == 'removed' ) {
				// O(n+m) solution by creating a hash map
				var displayFilteredMap = {};
	
				for ( var i=0, ien=displayFiltered.length ; i<ien ; i++ ) {
					displayFilteredMap[displayFiltered[i]] = null;
				}
	
				a = $.map( displayMaster, function (el) {
					return ! displayFilteredMap.hasOwnProperty(el) ?
						el :
						null;
				} );
			}
		}
		else if ( order == 'index' || order == 'original' ) {
			for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
				if ( search == 'none' ) {
					a.push( i );
				}
				else { // applied | removed
					tmp = $.inArray( i, displayFiltered );
	
					if ((tmp === -1 && search == 'removed') ||
						(tmp >= 0   && search == 'applied') )
					{
						a.push( i );
					}
				}
			}
		}
	
		return a;
	};
	
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Rows
	 *
	 * {}          - no selector - use all available rows
	 * {integer}   - row aoData index
	 * {node}      - TR node
	 * {string}    - jQuery selector to apply to the TR elements
	 * {array}     - jQuery array of nodes, or simply an array of TR nodes
	 *
	 */
	var __row_selector = function ( settings, selector, opts )
	{
		var rows;
		var run = function ( sel ) {
			var selInt = _intVal( sel );
			var i, ien;
			var aoData = settings.aoData;
	
			// Short cut - selector is a number and no options provided (default is
			// all records, so no need to check if the index is in there, since it
			// must be - dev error if the index doesn't exist).
			if ( selInt !== null && ! opts ) {
				return [ selInt ];
			}
	
			if ( ! rows ) {
				rows = _selector_row_indexes( settings, opts );
			}
	
			if ( selInt !== null && $.inArray( selInt, rows ) !== -1 ) {
				// Selector - integer
				return [ selInt ];
			}
			else if ( sel === null || sel === undefined || sel === '' ) {
				// Selector - none
				return rows;
			}
	
			// Selector - function
			if ( typeof sel === 'function' ) {
				return $.map( rows, function (idx) {
					var row = aoData[ idx ];
					return sel( idx, row._aData, row.nTr ) ? idx : null;
				} );
			}
	
			// Selector - node
			if ( sel.nodeName ) {
				var rowIdx = sel._DT_RowIndex;  // Property added by DT for fast lookup
				var cellIdx = sel._DT_CellIndex;
	
				if ( rowIdx !== undefined ) {
					// Make sure that the row is actually still present in the table
					return aoData[ rowIdx ] && aoData[ rowIdx ].nTr === sel ?
						[ rowIdx ] :
						[];
				}
				else if ( cellIdx ) {
					return aoData[ cellIdx.row ] && aoData[ cellIdx.row ].nTr === sel.parentNode ?
						[ cellIdx.row ] :
						[];
				}
				else {
					var host = $(sel).closest('*[data-dt-row]');
					return host.length ?
						[ host.data('dt-row') ] :
						[];
				}
			}
	
			// ID selector. Want to always be able to select rows by id, regardless
			// of if the tr element has been created or not, so can't rely upon
			// jQuery here - hence a custom implementation. This does not match
			// Sizzle's fast selector or HTML4 - in HTML5 the ID can be anything,
			// but to select it using a CSS selector engine (like Sizzle or
			// querySelect) it would need to need to be escaped for some characters.
			// DataTables simplifies this for row selectors since you can select
			// only a row. A # indicates an id any anything that follows is the id -
			// unescaped.
			if ( typeof sel === 'string' && sel.charAt(0) === '#' ) {
				// get row index from id
				var rowObj = settings.aIds[ sel.replace( /^#/, '' ) ];
				if ( rowObj !== undefined ) {
					return [ rowObj.idx ];
				}
	
				// need to fall through to jQuery in case there is DOM id that
				// matches
			}
			
			// Get nodes in the order from the `rows` array with null values removed
			var nodes = _removeEmpty(
				_pluck_order( settings.aoData, rows, 'nTr' )
			);
	
			// Selector - jQuery selector string, array of nodes or jQuery object/
			// As jQuery's .filter() allows jQuery objects to be passed in filter,
			// it also allows arrays, so this will cope with all three options
			return $(nodes)
				.filter( sel )
				.map( function () {
					return this._DT_RowIndex;
				} )
				.toArray();
		};
	
		return _selector_run( 'row', selector, run, settings, opts );
	};
	
	
	_api_register( 'rows()', function ( selector, opts ) {
		// argument shifting
		if ( selector === undefined ) {
			selector = '';
		}
		else if ( $.isPlainObject( selector ) ) {
			opts = selector;
			selector = '';
		}
	
		opts = _selector_opts( opts );
	
		var inst = this.iterator( 'table', function ( settings ) {
			return __row_selector( settings, selector, opts );
		}, 1 );
	
		// Want argument shifting here and in __row_selector?
		inst.selector.rows = selector;
		inst.selector.opts = opts;
	
		return inst;
	} );
	
	_api_register( 'rows().nodes()', function () {
		return this.iterator( 'row', function ( settings, row ) {
			return settings.aoData[ row ].nTr || undefined;
		}, 1 );
	} );
	
	_api_register( 'rows().data()', function () {
		return this.iterator( true, 'rows', function ( settings, rows ) {
			return _pluck_order( settings.aoData, rows, '_aData' );
		}, 1 );
	} );
	
	_api_registerPlural( 'rows().cache()', 'row().cache()', function ( type ) {
		return this.iterator( 'row', function ( settings, row ) {
			var r = settings.aoData[ row ];
			return type === 'search' ? r._aFilterData : r._aSortData;
		}, 1 );
	} );
	
	_api_registerPlural( 'rows().invalidate()', 'row().invalidate()', function ( src ) {
		return this.iterator( 'row', function ( settings, row ) {
			_fnInvalidate( settings, row, src );
		} );
	} );
	
	_api_registerPlural( 'rows().indexes()', 'row().index()', function () {
		return this.iterator( 'row', function ( settings, row ) {
			return row;
		}, 1 );
	} );
	
	_api_registerPlural( 'rows().ids()', 'row().id()', function ( hash ) {
		var a = [];
		var context = this.context;
	
		// `iterator` will drop undefined values, but in this case we want them
		for ( var i=0, ien=context.length ; i<ien ; i++ ) {
			for ( var j=0, jen=this[i].length ; j<jen ; j++ ) {
				var id = context[i].rowIdFn( context[i].aoData[ this[i][j] ]._aData );
				a.push( (hash === true ? '#' : '' )+ id );
			}
		}
	
		return new _Api( context, a );
	} );
	
	_api_registerPlural( 'rows().remove()', 'row().remove()', function () {
		var that = this;
	
		this.iterator( 'row', function ( settings, row, thatIdx ) {
			var data = settings.aoData;
			var rowData = data[ row ];
			var i, ien, j, jen;
			var loopRow, loopCells;
	
			data.splice( row, 1 );
	
			// Update the cached indexes
			for ( i=0, ien=data.length ; i<ien ; i++ ) {
				loopRow = data[i];
				loopCells = loopRow.anCells;
	
				// Rows
				if ( loopRow.nTr !== null ) {
					loopRow.nTr._DT_RowIndex = i;
				}
	
				// Cells
				if ( loopCells !== null ) {
					for ( j=0, jen=loopCells.length ; j<jen ; j++ ) {
						loopCells[j]._DT_CellIndex.row = i;
					}
				}
			}
	
			// Delete from the display arrays
			_fnDeleteIndex( settings.aiDisplayMaster, row );
			_fnDeleteIndex( settings.aiDisplay, row );
			_fnDeleteIndex( that[ thatIdx ], row, false ); // maintain local indexes
	
			// For server-side processing tables - subtract the deleted row from the count
			if ( settings._iRecordsDisplay > 0 ) {
				settings._iRecordsDisplay--;
			}
	
			// Check for an 'overflow' they case for displaying the table
			_fnLengthOverflow( settings );
	
			// Remove the row's ID reference if there is one
			var id = settings.rowIdFn( rowData._aData );
			if ( id !== undefined ) {
				delete settings.aIds[ id ];
			}
		} );
	
		this.iterator( 'table', function ( settings ) {
			for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
				settings.aoData[i].idx = i;
			}
		} );
	
		return this;
	} );
	
	
	_api_register( 'rows.add()', function ( rows ) {
		var newRows = this.iterator( 'table', function ( settings ) {
				var row, i, ien;
				var out = [];
	
				for ( i=0, ien=rows.length ; i<ien ; i++ ) {
					row = rows[i];
	
					if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
						out.push( _fnAddTr( settings, row )[0] );
					}
					else {
						out.push( _fnAddData( settings, row ) );
					}
				}
	
				return out;
			}, 1 );
	
		// Return an Api.rows() extended instance, so rows().nodes() etc can be used
		var modRows = this.rows( -1 );
		modRows.pop();
		$.merge( modRows, newRows );
	
		return modRows;
	} );
	
	
	
	
	
	/**
	 *
	 */
	_api_register( 'row()', function ( selector, opts ) {
		return _selector_first( this.rows( selector, opts ) );
	} );
	
	
	_api_register( 'row().data()', function ( data ) {
		var ctx = this.context;
	
		if ( data === undefined ) {
			// Get
			return ctx.length && this.length ?
				ctx[0].aoData[ this[0] ]._aData :
				undefined;
		}
	
		// Set
		var row = ctx[0].aoData[ this[0] ];
		row._aData = data;
	
		// If the DOM has an id, and the data source is an array
		if ( $.isArray( data ) && row.nTr && row.nTr.id ) {
			_fnSetObjectDataFn( ctx[0].rowId )( data, row.nTr.id );
		}
	
		// Automatically invalidate
		_fnInvalidate( ctx[0], this[0], 'data' );
	
		return this;
	} );
	
	
	_api_register( 'row().node()', function () {
		var ctx = this.context;
	
		return ctx.length && this.length ?
			ctx[0].aoData[ this[0] ].nTr || null :
			null;
	} );
	
	
	_api_register( 'row.add()', function ( row ) {
		// Allow a jQuery object to be passed in - only a single row is added from
		// it though - the first element in the set
		if ( row instanceof $ && row.length ) {
			row = row[0];
		}
	
		var rows = this.iterator( 'table', function ( settings ) {
			if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
				return _fnAddTr( settings, row )[0];
			}
			return _fnAddData( settings, row );
		} );
	
		// Return an Api.rows() extended instance, with the newly added row selected
		return this.row( rows[0] );
	} );
	
	
	
	var __details_add = function ( ctx, row, data, klass )
	{
		// Convert to array of TR elements
		var rows = [];
		var addRow = function ( r, k ) {
			// Recursion to allow for arrays of jQuery objects
			if ( $.isArray( r ) || r instanceof $ ) {
				for ( var i=0, ien=r.length ; i<ien ; i++ ) {
					addRow( r[i], k );
				}
				return;
			}
	
			// If we get a TR element, then just add it directly - up to the dev
			// to add the correct number of columns etc
			if ( r.nodeName && r.nodeName.toLowerCase() === 'tr' ) {
				rows.push( r );
			}
			else {
				// Otherwise create a row with a wrapper
				var created = $('<tr><td/></tr>').addClass( k );
				$('td', created)
					.addClass( k )
					.html( r )
					[0].colSpan = _fnVisbleColumns( ctx );
	
				rows.push( created[0] );
			}
		};
	
		addRow( data, klass );
	
		if ( row._details ) {
			row._details.detach();
		}
	
		row._details = $(rows);
	
		// If the children were already shown, that state should be retained
		if ( row._detailsShow ) {
			row._details.insertAfter( row.nTr );
		}
	};
	
	
	var __details_remove = function ( api, idx )
	{
		var ctx = api.context;
	
		if ( ctx.length ) {
			var row = ctx[0].aoData[ idx !== undefined ? idx : api[0] ];
	
			if ( row && row._details ) {
				row._details.remove();
	
				row._detailsShow = undefined;
				row._details = undefined;
			}
		}
	};
	
	
	var __details_display = function ( api, show ) {
		var ctx = api.context;
	
		if ( ctx.length && api.length ) {
			var row = ctx[0].aoData[ api[0] ];
	
			if ( row._details ) {
				row._detailsShow = show;
	
				if ( show ) {
					row._details.insertAfter( row.nTr );
				}
				else {
					row._details.detach();
				}
	
				__details_events( ctx[0] );
			}
		}
	};
	
	
	var __details_events = function ( settings )
	{
		var api = new _Api( settings );
		var namespace = '.dt.DT_details';
		var drawEvent = 'draw'+namespace;
		var colvisEvent = 'column-visibility'+namespace;
		var destroyEvent = 'destroy'+namespace;
		var data = settings.aoData;
	
		api.off( drawEvent +' '+ colvisEvent +' '+ destroyEvent );
	
		if ( _pluck( data, '_details' ).length > 0 ) {
			// On each draw, insert the required elements into the document
			api.on( drawEvent, function ( e, ctx ) {
				if ( settings !== ctx ) {
					return;
				}
	
				api.rows( {page:'current'} ).eq(0).each( function (idx) {
					// Internal data grab
					var row = data[ idx ];
	
					if ( row._detailsShow ) {
						row._details.insertAfter( row.nTr );
					}
				} );
			} );
	
			// Column visibility change - update the colspan
			api.on( colvisEvent, function ( e, ctx, idx, vis ) {
				if ( settings !== ctx ) {
					return;
				}
	
				// Update the colspan for the details rows (note, only if it already has
				// a colspan)
				var row, visible = _fnVisbleColumns( ctx );
	
				for ( var i=0, ien=data.length ; i<ien ; i++ ) {
					row = data[i];
	
					if ( row._details ) {
						row._details.children('td[colspan]').attr('colspan', visible );
					}
				}
			} );
	
			// Table destroyed - nuke any child rows
			api.on( destroyEvent, function ( e, ctx ) {
				if ( settings !== ctx ) {
					return;
				}
	
				for ( var i=0, ien=data.length ; i<ien ; i++ ) {
					if ( data[i]._details ) {
						__details_remove( api, i );
					}
				}
			} );
		}
	};
	
	// Strings for the method names to help minification
	var _emp = '';
	var _child_obj = _emp+'row().child';
	var _child_mth = _child_obj+'()';
	
	// data can be:
	//  tr
	//  string
	//  jQuery or array of any of the above
	_api_register( _child_mth, function ( data, klass ) {
		var ctx = this.context;
	
		if ( data === undefined ) {
			// get
			return ctx.length && this.length ?
				ctx[0].aoData[ this[0] ]._details :
				undefined;
		}
		else if ( data === true ) {
			// show
			this.child.show();
		}
		else if ( data === false ) {
			// remove
			__details_remove( this );
		}
		else if ( ctx.length && this.length ) {
			// set
			__details_add( ctx[0], ctx[0].aoData[ this[0] ], data, klass );
		}
	
		return this;
	} );
	
	
	_api_register( [
		_child_obj+'.show()',
		_child_mth+'.show()' // only when `child()` was called with parameters (without
	], function ( show ) {   // it returns an object and this method is not executed)
		__details_display( this, true );
		return this;
	} );
	
	
	_api_register( [
		_child_obj+'.hide()',
		_child_mth+'.hide()' // only when `child()` was called with parameters (without
	], function () {         // it returns an object and this method is not executed)
		__details_display( this, false );
		return this;
	} );
	
	
	_api_register( [
		_child_obj+'.remove()',
		_child_mth+'.remove()' // only when `child()` was called with parameters (without
	], function () {           // it returns an object and this method is not executed)
		__details_remove( this );
		return this;
	} );
	
	
	_api_register( _child_obj+'.isShown()', function () {
		var ctx = this.context;
	
		if ( ctx.length && this.length ) {
			// _detailsShown as false or undefined will fall through to return false
			return ctx[0].aoData[ this[0] ]._detailsShow || false;
		}
		return false;
	} );
	
	
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Columns
	 *
	 * {integer}           - column index (>=0 count from left, <0 count from right)
	 * "{integer}:visIdx"  - visible column index (i.e. translate to column index)  (>=0 count from left, <0 count from right)
	 * "{integer}:visible" - alias for {integer}:visIdx  (>=0 count from left, <0 count from right)
	 * "{string}:name"     - column name
	 * "{string}"          - jQuery selector on column header nodes
	 *
	 */
	
	// can be an array of these items, comma separated list, or an array of comma
	// separated lists
	
	var __re_column_selector = /^([^:]+):(name|visIdx|visible)$/;
	
	
	// r1 and r2 are redundant - but it means that the parameters match for the
	// iterator callback in columns().data()
	var __columnData = function ( settings, column, r1, r2, rows ) {
		var a = [];
		for ( var row=0, ien=rows.length ; row<ien ; row++ ) {
			a.push( _fnGetCellData( settings, rows[row], column ) );
		}
		return a;
	};
	
	
	var __column_selector = function ( settings, selector, opts )
	{
		var
			columns = settings.aoColumns,
			names = _pluck( columns, 'sName' ),
			nodes = _pluck( columns, 'nTh' );
	
		var run = function ( s ) {
			var selInt = _intVal( s );
	
			// Selector - all
			if ( s === '' ) {
				return _range( columns.length );
			}
	
			// Selector - index
			if ( selInt !== null ) {
				return [ selInt >= 0 ?
					selInt : // Count from left
					columns.length + selInt // Count from right (+ because its a negative value)
				];
			}
	
			// Selector = function
			if ( typeof s === 'function' ) {
				var rows = _selector_row_indexes( settings, opts );
	
				return $.map( columns, function (col, idx) {
					return s(
							idx,
							__columnData( settings, idx, 0, 0, rows ),
							nodes[ idx ]
						) ? idx : null;
				} );
			}
	
			// jQuery or string selector
			var match = typeof s === 'string' ?
				s.match( __re_column_selector ) :
				'';
	
			if ( match ) {
				switch( match[2] ) {
					case 'visIdx':
					case 'visible':
						var idx = parseInt( match[1], 10 );
						// Visible index given, convert to column index
						if ( idx < 0 ) {
							// Counting from the right
							var visColumns = $.map( columns, function (col,i) {
								return col.bVisible ? i : null;
							} );
							return [ visColumns[ visColumns.length + idx ] ];
						}
						// Counting from the left
						return [ _fnVisibleToColumnIndex( settings, idx ) ];
	
					case 'name':
						// match by name. `names` is column index complete and in order
						return $.map( names, function (name, i) {
							return name === match[1] ? i : null;
						} );
	
					default:
						return [];
				}
			}
	
			// Cell in the table body
			if ( s.nodeName && s._DT_CellIndex ) {
				return [ s._DT_CellIndex.column ];
			}
	
			// jQuery selector on the TH elements for the columns
			var jqResult = $( nodes )
				.filter( s )
				.map( function () {
					return $.inArray( this, nodes ); // `nodes` is column index complete and in order
				} )
				.toArray();
	
			if ( jqResult.length || ! s.nodeName ) {
				return jqResult;
			}
	
			// Otherwise a node which might have a `dt-column` data attribute, or be
			// a child or such an element
			var host = $(s).closest('*[data-dt-column]');
			return host.length ?
				[ host.data('dt-column') ] :
				[];
		};
	
		return _selector_run( 'column', selector, run, settings, opts );
	};
	
	
	var __setColumnVis = function ( settings, column, vis ) {
		var
			cols = settings.aoColumns,
			col  = cols[ column ],
			data = settings.aoData,
			row, cells, i, ien, tr;
	
		// Get
		if ( vis === undefined ) {
			return col.bVisible;
		}
	
		// Set
		// No change
		if ( col.bVisible === vis ) {
			return;
		}
	
		if ( vis ) {
			// Insert column
			// Need to decide if we should use appendChild or insertBefore
			var insertBefore = $.inArray( true, _pluck(cols, 'bVisible'), column+1 );
	
			for ( i=0, ien=data.length ; i<ien ; i++ ) {
				tr = data[i].nTr;
				cells = data[i].anCells;
	
				if ( tr ) {
					// insertBefore can act like appendChild if 2nd arg is null
					tr.insertBefore( cells[ column ], cells[ insertBefore ] || null );
				}
			}
		}
		else {
			// Remove column
			$( _pluck( settings.aoData, 'anCells', column ) ).detach();
		}
	
		// Common actions
		col.bVisible = vis;
	};
	
	
	_api_register( 'columns()', function ( selector, opts ) {
		// argument shifting
		if ( selector === undefined ) {
			selector = '';
		}
		else if ( $.isPlainObject( selector ) ) {
			opts = selector;
			selector = '';
		}
	
		opts = _selector_opts( opts );
	
		var inst = this.iterator( 'table', function ( settings ) {
			return __column_selector( settings, selector, opts );
		}, 1 );
	
		// Want argument shifting here and in _row_selector?
		inst.selector.cols = selector;
		inst.selector.opts = opts;
	
		return inst;
	} );
	
	_api_registerPlural( 'columns().header()', 'column().header()', function ( selector, opts ) {
		return this.iterator( 'column', function ( settings, column ) {
			return settings.aoColumns[column].nTh;
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().footer()', 'column().footer()', function ( selector, opts ) {
		return this.iterator( 'column', function ( settings, column ) {
			return settings.aoColumns[column].nTf;
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().data()', 'column().data()', function () {
		return this.iterator( 'column-rows', __columnData, 1 );
	} );
	
	_api_registerPlural( 'columns().dataSrc()', 'column().dataSrc()', function () {
		return this.iterator( 'column', function ( settings, column ) {
			return settings.aoColumns[column].mData;
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().cache()', 'column().cache()', function ( type ) {
		return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
			return _pluck_order( settings.aoData, rows,
				type === 'search' ? '_aFilterData' : '_aSortData', column
			);
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().nodes()', 'column().nodes()', function () {
		return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
			return _pluck_order( settings.aoData, rows, 'anCells', column ) ;
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().visible()', 'column().visible()', function ( vis, calc ) {
		var that = this;
		var ret = this.iterator( 'column', function ( settings, column ) {
			if ( vis === undefined ) {
				return settings.aoColumns[ column ].bVisible;
			} // else
			__setColumnVis( settings, column, vis );
		} );
	
		// Group the column visibility changes
		if ( vis !== undefined ) {
			this.iterator( 'table', function ( settings ) {
				// Redraw the header after changes
				_fnDrawHead( settings, settings.aoHeader );
				_fnDrawHead( settings, settings.aoFooter );
		
				// Update colspan for no records display. Child rows and extensions will use their own
				// listeners to do this - only need to update the empty table item here
				if ( ! settings.aiDisplay.length ) {
					$(settings.nTBody).find('td[colspan]').attr('colspan', _fnVisbleColumns(settings));
				}
		
				_fnSaveState( settings );
	
				// Second loop once the first is done for events
				that.iterator( 'column', function ( settings, column ) {
					_fnCallbackFire( settings, null, 'column-visibility', [settings, column, vis, calc] );
				} );
	
				if ( calc === undefined || calc ) {
					that.columns.adjust();
				}
			});
		}
	
		return ret;
	} );
	
	_api_registerPlural( 'columns().indexes()', 'column().index()', function ( type ) {
		return this.iterator( 'column', function ( settings, column ) {
			return type === 'visible' ?
				_fnColumnIndexToVisible( settings, column ) :
				column;
		}, 1 );
	} );
	
	_api_register( 'columns.adjust()', function () {
		return this.iterator( 'table', function ( settings ) {
			_fnAdjustColumnSizing( settings );
		}, 1 );
	} );
	
	_api_register( 'column.index()', function ( type, idx ) {
		if ( this.context.length !== 0 ) {
			var ctx = this.context[0];
	
			if ( type === 'fromVisible' || type === 'toData' ) {
				return _fnVisibleToColumnIndex( ctx, idx );
			}
			else if ( type === 'fromData' || type === 'toVisible' ) {
				return _fnColumnIndexToVisible( ctx, idx );
			}
		}
	} );
	
	_api_register( 'column()', function ( selector, opts ) {
		return _selector_first( this.columns( selector, opts ) );
	} );
	
	
	
	var __cell_selector = function ( settings, selector, opts )
	{
		var data = settings.aoData;
		var rows = _selector_row_indexes( settings, opts );
		var cells = _removeEmpty( _pluck_order( data, rows, 'anCells' ) );
		var allCells = $( [].concat.apply([], cells) );
		var row;
		var columns = settings.aoColumns.length;
		var a, i, ien, j, o, host;
	
		var run = function ( s ) {
			var fnSelector = typeof s === 'function';
	
			if ( s === null || s === undefined || fnSelector ) {
				// All cells and function selectors
				a = [];
	
				for ( i=0, ien=rows.length ; i<ien ; i++ ) {
					row = rows[i];
	
					for ( j=0 ; j<columns ; j++ ) {
						o = {
							row: row,
							column: j
						};
	
						if ( fnSelector ) {
							// Selector - function
							host = data[ row ];
	
							if ( s( o, _fnGetCellData(settings, row, j), host.anCells ? host.anCells[j] : null ) ) {
								a.push( o );
							}
						}
						else {
							// Selector - all
							a.push( o );
						}
					}
				}
	
				return a;
			}
			
			// Selector - index
			if ( $.isPlainObject( s ) ) {
				// Valid cell index and its in the array of selectable rows
				return s.column !== undefined && s.row !== undefined && $.inArray( s.row, rows ) !== -1 ?
					[s] :
					[];
			}
	
			// Selector - jQuery filtered cells
			var jqResult = allCells
				.filter( s )
				.map( function (i, el) {
					return { // use a new object, in case someone changes the values
						row:    el._DT_CellIndex.row,
						column: el._DT_CellIndex.column
	 				};
				} )
				.toArray();
	
			if ( jqResult.length || ! s.nodeName ) {
				return jqResult;
			}
	
			// Otherwise the selector is a node, and there is one last option - the
			// element might be a child of an element which has dt-row and dt-column
			// data attributes
			host = $(s).closest('*[data-dt-row]');
			return host.length ?
				[ {
					row: host.data('dt-row'),
					column: host.data('dt-column')
				} ] :
				[];
		};
	
		return _selector_run( 'cell', selector, run, settings, opts );
	};
	
	
	
	
	_api_register( 'cells()', function ( rowSelector, columnSelector, opts ) {
		// Argument shifting
		if ( $.isPlainObject( rowSelector ) ) {
			// Indexes
			if ( rowSelector.row === undefined ) {
				// Selector options in first parameter
				opts = rowSelector;
				rowSelector = null;
			}
			else {
				// Cell index objects in first parameter
				opts = columnSelector;
				columnSelector = null;
			}
		}
		if ( $.isPlainObject( columnSelector ) ) {
			opts = columnSelector;
			columnSelector = null;
		}
	
		// Cell selector
		if ( columnSelector === null || columnSelector === undefined ) {
			return this.iterator( 'table', function ( settings ) {
				return __cell_selector( settings, rowSelector, _selector_opts( opts ) );
			} );
		}
	
		// The default built in options need to apply to row and columns
		var internalOpts = opts ? {
			page: opts.page,
			order: opts.order,
			search: opts.search
		} : {};
	
		// Row + column selector
		var columns = this.columns( columnSelector, internalOpts );
		var rows = this.rows( rowSelector, internalOpts );
		var i, ien, j, jen;
	
		var cellsNoOpts = this.iterator( 'table', function ( settings, idx ) {
			var a = [];
	
			for ( i=0, ien=rows[idx].length ; i<ien ; i++ ) {
				for ( j=0, jen=columns[idx].length ; j<jen ; j++ ) {
					a.push( {
						row:    rows[idx][i],
						column: columns[idx][j]
					} );
				}
			}
	
			return a;
		}, 1 );
	
		// There is currently only one extension which uses a cell selector extension
		// It is a _major_ performance drag to run this if it isn't needed, so this is
		// an extension specific check at the moment
		var cells = opts && opts.selected ?
			this.cells( cellsNoOpts, opts ) :
			cellsNoOpts;
	
		$.extend( cells.selector, {
			cols: columnSelector,
			rows: rowSelector,
			opts: opts
		} );
	
		return cells;
	} );
	
	
	_api_registerPlural( 'cells().nodes()', 'cell().node()', function () {
		return this.iterator( 'cell', function ( settings, row, column ) {
			var data = settings.aoData[ row ];
	
			return data && data.anCells ?
				data.anCells[ column ] :
				undefined;
		}, 1 );
	} );
	
	
	_api_register( 'cells().data()', function () {
		return this.iterator( 'cell', function ( settings, row, column ) {
			return _fnGetCellData( settings, row, column );
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().cache()', 'cell().cache()', function ( type ) {
		type = type === 'search' ? '_aFilterData' : '_aSortData';
	
		return this.iterator( 'cell', function ( settings, row, column ) {
			return settings.aoData[ row ][ type ][ column ];
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().render()', 'cell().render()', function ( type ) {
		return this.iterator( 'cell', function ( settings, row, column ) {
			return _fnGetCellData( settings, row, column, type );
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().indexes()', 'cell().index()', function () {
		return this.iterator( 'cell', function ( settings, row, column ) {
			return {
				row: row,
				column: column,
				columnVisible: _fnColumnIndexToVisible( settings, column )
			};
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().invalidate()', 'cell().invalidate()', function ( src ) {
		return this.iterator( 'cell', function ( settings, row, column ) {
			_fnInvalidate( settings, row, src, column );
		} );
	} );
	
	
	
	_api_register( 'cell()', function ( rowSelector, columnSelector, opts ) {
		return _selector_first( this.cells( rowSelector, columnSelector, opts ) );
	} );
	
	
	_api_register( 'cell().data()', function ( data ) {
		var ctx = this.context;
		var cell = this[0];
	
		if ( data === undefined ) {
			// Get
			return ctx.length && cell.length ?
				_fnGetCellData( ctx[0], cell[0].row, cell[0].column ) :
				undefined;
		}
	
		// Set
		_fnSetCellData( ctx[0], cell[0].row, cell[0].column, data );
		_fnInvalidate( ctx[0], cell[0].row, 'data', cell[0].column );
	
		return this;
	} );
	
	
	
	/**
	 * Get current ordering (sorting) that has been applied to the table.
	 *
	 * @returns {array} 2D array containing the sorting information for the first
	 *   table in the current context. Each element in the parent array represents
	 *   a column being sorted upon (i.e. multi-sorting with two columns would have
	 *   2 inner arrays). The inner arrays may have 2 or 3 elements. The first is
	 *   the column index that the sorting condition applies to, the second is the
	 *   direction of the sort (`desc` or `asc`) and, optionally, the third is the
	 *   index of the sorting order from the `column.sorting` initialisation array.
	 *//**
	 * Set the ordering for the table.
	 *
	 * @param {integer} order Column index to sort upon.
	 * @param {string} direction Direction of the sort to be applied (`asc` or `desc`)
	 * @returns {DataTables.Api} this
	 *//**
	 * Set the ordering for the table.
	 *
	 * @param {array} order 1D array of sorting information to be applied.
	 * @param {array} [...] Optional additional sorting conditions
	 * @returns {DataTables.Api} this
	 *//**
	 * Set the ordering for the table.
	 *
	 * @param {array} order 2D array of sorting information to be applied.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'order()', function ( order, dir ) {
		var ctx = this.context;
	
		if ( order === undefined ) {
			// get
			return ctx.length !== 0 ?
				ctx[0].aaSorting :
				undefined;
		}
	
		// set
		if ( typeof order === 'number' ) {
			// Simple column / direction passed in
			order = [ [ order, dir ] ];
		}
		else if ( order.length && ! $.isArray( order[0] ) ) {
			// Arguments passed in (list of 1D arrays)
			order = Array.prototype.slice.call( arguments );
		}
		// otherwise a 2D array was passed in
	
		return this.iterator( 'table', function ( settings ) {
			settings.aaSorting = order.slice();
		} );
	} );
	
	
	/**
	 * Attach a sort listener to an element for a given column
	 *
	 * @param {node|jQuery|string} node Identifier for the element(s) to attach the
	 *   listener to. This can take the form of a single DOM node, a jQuery
	 *   collection of nodes or a jQuery selector which will identify the node(s).
	 * @param {integer} column the column that a click on this node will sort on
	 * @param {function} [callback] callback function when sort is run
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'order.listener()', function ( node, column, callback ) {
		return this.iterator( 'table', function ( settings ) {
			_fnSortAttachListener( settings, node, column, callback );
		} );
	} );
	
	
	_api_register( 'order.fixed()', function ( set ) {
		if ( ! set ) {
			var ctx = this.context;
			var fixed = ctx.length ?
				ctx[0].aaSortingFixed :
				undefined;
	
			return $.isArray( fixed ) ?
				{ pre: fixed } :
				fixed;
		}
	
		return this.iterator( 'table', function ( settings ) {
			settings.aaSortingFixed = $.extend( true, {}, set );
		} );
	} );
	
	
	// Order by the selected column(s)
	_api_register( [
		'columns().order()',
		'column().order()'
	], function ( dir ) {
		var that = this;
	
		return this.iterator( 'table', function ( settings, i ) {
			var sort = [];
	
			$.each( that[i], function (j, col) {
				sort.push( [ col, dir ] );
			} );
	
			settings.aaSorting = sort;
		} );
	} );
	
	
	
	_api_register( 'search()', function ( input, regex, smart, caseInsen ) {
		var ctx = this.context;
	
		if ( input === undefined ) {
			// get
			return ctx.length !== 0 ?
				ctx[0].oPreviousSearch.sSearch :
				undefined;
		}
	
		// set
		return this.iterator( 'table', function ( settings ) {
			if ( ! settings.oFeatures.bFilter ) {
				return;
			}
	
			_fnFilterComplete( settings, $.extend( {}, settings.oPreviousSearch, {
				"sSearch": input+"",
				"bRegex":  regex === null ? false : regex,
				"bSmart":  smart === null ? true  : smart,
				"bCaseInsensitive": caseInsen === null ? true : caseInsen
			} ), 1 );
		} );
	} );
	
	
	_api_registerPlural(
		'columns().search()',
		'column().search()',
		function ( input, regex, smart, caseInsen ) {
			return this.iterator( 'column', function ( settings, column ) {
				var preSearch = settings.aoPreSearchCols;
	
				if ( input === undefined ) {
					// get
					return preSearch[ column ].sSearch;
				}
	
				// set
				if ( ! settings.oFeatures.bFilter ) {
					return;
				}
	
				$.extend( preSearch[ column ], {
					"sSearch": input+"",
					"bRegex":  regex === null ? false : regex,
					"bSmart":  smart === null ? true  : smart,
					"bCaseInsensitive": caseInsen === null ? true : caseInsen
				} );
	
				_fnFilterComplete( settings, settings.oPreviousSearch, 1 );
			} );
		}
	);
	
	/*
	 * State API methods
	 */
	
	_api_register( 'state()', function () {
		return this.context.length ?
			this.context[0].oSavedState :
			null;
	} );
	
	
	_api_register( 'state.clear()', function () {
		return this.iterator( 'table', function ( settings ) {
			// Save an empty object
			settings.fnStateSaveCallback.call( settings.oInstance, settings, {} );
		} );
	} );
	
	
	_api_register( 'state.loaded()', function () {
		return this.context.length ?
			this.context[0].oLoadedState :
			null;
	} );
	
	
	_api_register( 'state.save()', function () {
		return this.iterator( 'table', function ( settings ) {
			_fnSaveState( settings );
		} );
	} );
	
	
	
	/**
	 * Provide a common method for plug-ins to check the version of DataTables being
	 * used, in order to ensure compatibility.
	 *
	 *  @param {string} version Version string to check for, in the format "X.Y.Z".
	 *    Note that the formats "X" and "X.Y" are also acceptable.
	 *  @returns {boolean} true if this version of DataTables is greater or equal to
	 *    the required version, or false if this version of DataTales is not
	 *    suitable
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    alert( $.fn.dataTable.versionCheck( '1.9.0' ) );
	 */
	DataTable.versionCheck = DataTable.fnVersionCheck = function( version )
	{
		var aThis = DataTable.version.split('.');
		var aThat = version.split('.');
		var iThis, iThat;
	
		for ( var i=0, iLen=aThat.length ; i<iLen ; i++ ) {
			iThis = parseInt( aThis[i], 10 ) || 0;
			iThat = parseInt( aThat[i], 10 ) || 0;
	
			// Parts are the same, keep comparing
			if (iThis === iThat) {
				continue;
			}
	
			// Parts are different, return immediately
			return iThis > iThat;
		}
	
		return true;
	};
	
	
	/**
	 * Check if a `<table>` node is a DataTable table already or not.
	 *
	 *  @param {node|jquery|string} table Table node, jQuery object or jQuery
	 *      selector for the table to test. Note that if more than more than one
	 *      table is passed on, only the first will be checked
	 *  @returns {boolean} true the table given is a DataTable, or false otherwise
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    if ( ! $.fn.DataTable.isDataTable( '#example' ) ) {
	 *      $('#example').dataTable();
	 *    }
	 */
	DataTable.isDataTable = DataTable.fnIsDataTable = function ( table )
	{
		var t = $(table).get(0);
		var is = false;
	
		if ( table instanceof DataTable.Api ) {
			return true;
		}
	
		$.each( DataTable.settings, function (i, o) {
			var head = o.nScrollHead ? $('table', o.nScrollHead)[0] : null;
			var foot = o.nScrollFoot ? $('table', o.nScrollFoot)[0] : null;
	
			if ( o.nTable === t || head === t || foot === t ) {
				is = true;
			}
		} );
	
		return is;
	};
	
	
	/**
	 * Get all DataTable tables that have been initialised - optionally you can
	 * select to get only currently visible tables.
	 *
	 *  @param {boolean} [visible=false] Flag to indicate if you want all (default)
	 *    or visible tables only.
	 *  @returns {array} Array of `table` nodes (not DataTable instances) which are
	 *    DataTables
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    $.each( $.fn.dataTable.tables(true), function () {
	 *      $(table).DataTable().columns.adjust();
	 *    } );
	 */
	DataTable.tables = DataTable.fnTables = function ( visible )
	{
		var api = false;
	
		if ( $.isPlainObject( visible ) ) {
			api = visible.api;
			visible = visible.visible;
		}
	
		var a = $.map( DataTable.settings, function (o) {
			if ( !visible || (visible && $(o.nTable).is(':visible')) ) {
				return o.nTable;
			}
		} );
	
		return api ?
			new _Api( a ) :
			a;
	};
	
	
	/**
	 * Convert from camel case parameters to Hungarian notation. This is made public
	 * for the extensions to provide the same ability as DataTables core to accept
	 * either the 1.9 style Hungarian notation, or the 1.10+ style camelCase
	 * parameters.
	 *
	 *  @param {object} src The model object which holds all parameters that can be
	 *    mapped.
	 *  @param {object} user The object to convert from camel case to Hungarian.
	 *  @param {boolean} force When set to `true`, properties which already have a
	 *    Hungarian value in the `user` object will be overwritten. Otherwise they
	 *    won't be.
	 */
	DataTable.camelToHungarian = _fnCamelToHungarian;
	
	
	
	/**
	 *
	 */
	_api_register( '$()', function ( selector, opts ) {
		var
			rows   = this.rows( opts ).nodes(), // Get all rows
			jqRows = $(rows);
	
		return $( [].concat(
			jqRows.filter( selector ).toArray(),
			jqRows.find( selector ).toArray()
		) );
	} );
	
	
	// jQuery functions to operate on the tables
	$.each( [ 'on', 'one', 'off' ], function (i, key) {
		_api_register( key+'()', function ( /* event, handler */ ) {
			var args = Array.prototype.slice.call(arguments);
	
			// Add the `dt` namespace automatically if it isn't already present
			args[0] = $.map( args[0].split( /\s/ ), function ( e ) {
				return ! e.match(/\.dt\b/) ?
					e+'.dt' :
					e;
				} ).join( ' ' );
	
			var inst = $( this.tables().nodes() );
			inst[key].apply( inst, args );
			return this;
		} );
	} );
	
	
	_api_register( 'clear()', function () {
		return this.iterator( 'table', function ( settings ) {
			_fnClearTable( settings );
		} );
	} );
	
	
	_api_register( 'settings()', function () {
		return new _Api( this.context, this.context );
	} );
	
	
	_api_register( 'init()', function () {
		var ctx = this.context;
		return ctx.length ? ctx[0].oInit : null;
	} );
	
	
	_api_register( 'data()', function () {
		return this.iterator( 'table', function ( settings ) {
			return _pluck( settings.aoData, '_aData' );
		} ).flatten();
	} );
	
	
	_api_register( 'destroy()', function ( remove ) {
		remove = remove || false;
	
		return this.iterator( 'table', function ( settings ) {
			var orig      = settings.nTableWrapper.parentNode;
			var classes   = settings.oClasses;
			var table     = settings.nTable;
			var tbody     = settings.nTBody;
			var thead     = settings.nTHead;
			var tfoot     = settings.nTFoot;
			var jqTable   = $(table);
			var jqTbody   = $(tbody);
			var jqWrapper = $(settings.nTableWrapper);
			var rows      = $.map( settings.aoData, function (r) { return r.nTr; } );
			var i, ien;
	
			// Flag to note that the table is currently being destroyed - no action
			// should be taken
			settings.bDestroying = true;
	
			// Fire off the destroy callbacks for plug-ins etc
			_fnCallbackFire( settings, "aoDestroyCallback", "destroy", [settings] );
	
			// If not being removed from the document, make all columns visible
			if ( ! remove ) {
				new _Api( settings ).columns().visible( true );
			}
	
			// Blitz all `DT` namespaced events (these are internal events, the
			// lowercase, `dt` events are user subscribed and they are responsible
			// for removing them
			jqWrapper.off('.DT').find(':not(tbody *)').off('.DT');
			$(window).off('.DT-'+settings.sInstance);
	
			// When scrolling we had to break the table up - restore it
			if ( table != thead.parentNode ) {
				jqTable.children('thead').detach();
				jqTable.append( thead );
			}
	
			if ( tfoot && table != tfoot.parentNode ) {
				jqTable.children('tfoot').detach();
				jqTable.append( tfoot );
			}
	
			settings.aaSorting = [];
			settings.aaSortingFixed = [];
			_fnSortingClasses( settings );
	
			$( rows ).removeClass( settings.asStripeClasses.join(' ') );
	
			$('th, td', thead).removeClass( classes.sSortable+' '+
				classes.sSortableAsc+' '+classes.sSortableDesc+' '+classes.sSortableNone
			);
	
			// Add the TR elements back into the table in their original order
			jqTbody.children().detach();
			jqTbody.append( rows );
	
			// Remove the DataTables generated nodes, events and classes
			var removedMethod = remove ? 'remove' : 'detach';
			jqTable[ removedMethod ]();
			jqWrapper[ removedMethod ]();
	
			// If we need to reattach the table to the document
			if ( ! remove && orig ) {
				// insertBefore acts like appendChild if !arg[1]
				orig.insertBefore( table, settings.nTableReinsertBefore );
	
				// Restore the width of the original table - was read from the style property,
				// so we can restore directly to that
				jqTable
					.css( 'width', settings.sDestroyWidth )
					.removeClass( classes.sTable );
	
				// If the were originally stripe classes - then we add them back here.
				// Note this is not fool proof (for example if not all rows had stripe
				// classes - but it's a good effort without getting carried away
				ien = settings.asDestroyStripes.length;
	
				if ( ien ) {
					jqTbody.children().each( function (i) {
						$(this).addClass( settings.asDestroyStripes[i % ien] );
					} );
				}
			}
	
			/* Remove the settings object from the settings array */
			var idx = $.inArray( settings, DataTable.settings );
			if ( idx !== -1 ) {
				DataTable.settings.splice( idx, 1 );
			}
		} );
	} );
	
	
	// Add the `every()` method for rows, columns and cells in a compact form
	$.each( [ 'column', 'row', 'cell' ], function ( i, type ) {
		_api_register( type+'s().every()', function ( fn ) {
			var opts = this.selector.opts;
			var api = this;
	
			return this.iterator( type, function ( settings, arg1, arg2, arg3, arg4 ) {
				// Rows and columns:
				//  arg1 - index
				//  arg2 - table counter
				//  arg3 - loop counter
				//  arg4 - undefined
				// Cells:
				//  arg1 - row index
				//  arg2 - column index
				//  arg3 - table counter
				//  arg4 - loop counter
				fn.call(
					api[ type ](
						arg1,
						type==='cell' ? arg2 : opts,
						type==='cell' ? opts : undefined
					),
					arg1, arg2, arg3, arg4
				);
			} );
		} );
	} );
	
	
	// i18n method for extensions to be able to use the language object from the
	// DataTable
	_api_register( 'i18n()', function ( token, def, plural ) {
		var ctx = this.context[0];
		var resolved = _fnGetObjectDataFn( token )( ctx.oLanguage );
	
		if ( resolved === undefined ) {
			resolved = def;
		}
	
		if ( plural !== undefined && $.isPlainObject( resolved ) ) {
			resolved = resolved[ plural ] !== undefined ?
				resolved[ plural ] :
				resolved._;
		}
	
		return resolved.replace( '%d', plural ); // nb: plural might be undefined,
	} );
	/**
	 * Version string for plug-ins to check compatibility. Allowed format is
	 * `a.b.c-d` where: a:int, b:int, c:int, d:string(dev|beta|alpha). `d` is used
	 * only for non-release builds. See http://semver.org/ for more information.
	 *  @member
	 *  @type string
	 *  @default Version number
	 */
	DataTable.version = "1.10.21";

	/**
	 * Private data store, containing all of the settings objects that are
	 * created for the tables on a given page.
	 *
	 * Note that the `DataTable.settings` object is aliased to
	 * `jQuery.fn.dataTableExt` through which it may be accessed and
	 * manipulated, or `jQuery.fn.dataTable.settings`.
	 *  @member
	 *  @type array
	 *  @default []
	 *  @private
	 */
	DataTable.settings = [];

	/**
	 * Object models container, for the various models that DataTables has
	 * available to it. These models define the objects that are used to hold
	 * the active state and configuration of the table.
	 *  @namespace
	 */
	DataTable.models = {};
	
	
	
	/**
	 * Template object for the way in which DataTables holds information about
	 * search information for the global filter and individual column filters.
	 *  @namespace
	 */
	DataTable.models.oSearch = {
		/**
		 * Flag to indicate if the filtering should be case insensitive or not
		 *  @type boolean
		 *  @default true
		 */
		"bCaseInsensitive": true,
	
		/**
		 * Applied search term
		 *  @type string
		 *  @default <i>Empty string</i>
		 */
		"sSearch": "",
	
		/**
		 * Flag to indicate if the search term should be interpreted as a
		 * regular expression (true) or not (false) and therefore and special
		 * regex characters escaped.
		 *  @type boolean
		 *  @default false
		 */
		"bRegex": false,
	
		/**
		 * Flag to indicate if DataTables is to use its smart filtering or not.
		 *  @type boolean
		 *  @default true
		 */
		"bSmart": true
	};
	
	
	
	
	/**
	 * Template object for the way in which DataTables holds information about
	 * each individual row. This is the object format used for the settings
	 * aoData array.
	 *  @namespace
	 */
	DataTable.models.oRow = {
		/**
		 * TR element for the row
		 *  @type node
		 *  @default null
		 */
		"nTr": null,
	
		/**
		 * Array of TD elements for each row. This is null until the row has been
		 * created.
		 *  @type array nodes
		 *  @default []
		 */
		"anCells": null,
	
		/**
		 * Data object from the original data source for the row. This is either
		 * an array if using the traditional form of DataTables, or an object if
		 * using mData options. The exact type will depend on the passed in
		 * data from the data source, or will be an array if using DOM a data
		 * source.
		 *  @type array|object
		 *  @default []
		 */
		"_aData": [],
	
		/**
		 * Sorting data cache - this array is ostensibly the same length as the
		 * number of columns (although each index is generated only as it is
		 * needed), and holds the data that is used for sorting each column in the
		 * row. We do this cache generation at the start of the sort in order that
		 * the formatting of the sort data need be done only once for each cell
		 * per sort. This array should not be read from or written to by anything
		 * other than the master sorting methods.
		 *  @type array
		 *  @default null
		 *  @private
		 */
		"_aSortData": null,
	
		/**
		 * Per cell filtering data cache. As per the sort data cache, used to
		 * increase the performance of the filtering in DataTables
		 *  @type array
		 *  @default null
		 *  @private
		 */
		"_aFilterData": null,
	
		/**
		 * Filtering data cache. This is the same as the cell filtering cache, but
		 * in this case a string rather than an array. This is easily computed with
		 * a join on `_aFilterData`, but is provided as a cache so the join isn't
		 * needed on every search (memory traded for performance)
		 *  @type array
		 *  @default null
		 *  @private
		 */
		"_sFilterRow": null,
	
		/**
		 * Cache of the class name that DataTables has applied to the row, so we
		 * can quickly look at this variable rather than needing to do a DOM check
		 * on className for the nTr property.
		 *  @type string
		 *  @default <i>Empty string</i>
		 *  @private
		 */
		"_sRowStripe": "",
	
		/**
		 * Denote if the original data source was from the DOM, or the data source
		 * object. This is used for invalidating data, so DataTables can
		 * automatically read data from the original source, unless uninstructed
		 * otherwise.
		 *  @type string
		 *  @default null
		 *  @private
		 */
		"src": null,
	
		/**
		 * Index in the aoData array. This saves an indexOf lookup when we have the
		 * object, but want to know the index
		 *  @type integer
		 *  @default -1
		 *  @private
		 */
		"idx": -1
	};
	
	
	/**
	 * Template object for the column information object in DataTables. This object
	 * is held in the settings aoColumns array and contains all the information that
	 * DataTables needs about each individual column.
	 *
	 * Note that this object is related to {@link DataTable.defaults.column}
	 * but this one is the internal data store for DataTables's cache of columns.
	 * It should NOT be manipulated outside of DataTables. Any configuration should
	 * be done through the initialisation options.
	 *  @namespace
	 */
	DataTable.models.oColumn = {
		/**
		 * Column index. This could be worked out on-the-fly with $.inArray, but it
		 * is faster to just hold it as a variable
		 *  @type integer
		 *  @default null
		 */
		"idx": null,
	
		/**
		 * A list of the columns that sorting should occur on when this column
		 * is sorted. That this property is an array allows multi-column sorting
		 * to be defined for a column (for example first name / last name columns
		 * would benefit from this). The values are integers pointing to the
		 * columns to be sorted on (typically it will be a single integer pointing
		 * at itself, but that doesn't need to be the case).
		 *  @type array
		 */
		"aDataSort": null,
	
		/**
		 * Define the sorting directions that are applied to the column, in sequence
		 * as the column is repeatedly sorted upon - i.e. the first value is used
		 * as the sorting direction when the column if first sorted (clicked on).
		 * Sort it again (click again) and it will move on to the next index.
		 * Repeat until loop.
		 *  @type array
		 */
		"asSorting": null,
	
		/**
		 * Flag to indicate if the column is searchable, and thus should be included
		 * in the filtering or not.
		 *  @type boolean
		 */
		"bSearchable": null,
	
		/**
		 * Flag to indicate if the column is sortable or not.
		 *  @type boolean
		 */
		"bSortable": null,
	
		/**
		 * Flag to indicate if the column is currently visible in the table or not
		 *  @type boolean
		 */
		"bVisible": null,
	
		/**
		 * Store for manual type assignment using the `column.type` option. This
		 * is held in store so we can manipulate the column's `sType` property.
		 *  @type string
		 *  @default null
		 *  @private
		 */
		"_sManualType": null,
	
		/**
		 * Flag to indicate if HTML5 data attributes should be used as the data
		 * source for filtering or sorting. True is either are.
		 *  @type boolean
		 *  @default false
		 *  @private
		 */
		"_bAttrSrc": false,
	
		/**
		 * Developer definable function that is called whenever a cell is created (Ajax source,
		 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
		 * allowing you to modify the DOM element (add background colour for example) when the
		 * element is available.
		 *  @type function
		 *  @param {element} nTd The TD node that has been created
		 *  @param {*} sData The Data for the cell
		 *  @param {array|object} oData The data for the whole row
		 *  @param {int} iRow The row index for the aoData data store
		 *  @default null
		 */
		"fnCreatedCell": null,
	
		/**
		 * Function to get data from a cell in a column. You should <b>never</b>
		 * access data directly through _aData internally in DataTables - always use
		 * the method attached to this property. It allows mData to function as
		 * required. This function is automatically assigned by the column
		 * initialisation method
		 *  @type function
		 *  @param {array|object} oData The data array/object for the array
		 *    (i.e. aoData[]._aData)
		 *  @param {string} sSpecific The specific data type you want to get -
		 *    'display', 'type' 'filter' 'sort'
		 *  @returns {*} The data for the cell from the given row's data
		 *  @default null
		 */
		"fnGetData": null,
	
		/**
		 * Function to set data for a cell in the column. You should <b>never</b>
		 * set the data directly to _aData internally in DataTables - always use
		 * this method. It allows mData to function as required. This function
		 * is automatically assigned by the column initialisation method
		 *  @type function
		 *  @param {array|object} oData The data array/object for the array
		 *    (i.e. aoData[]._aData)
		 *  @param {*} sValue Value to set
		 *  @default null
		 */
		"fnSetData": null,
	
		/**
		 * Property to read the value for the cells in the column from the data
		 * source array / object. If null, then the default content is used, if a
		 * function is given then the return from the function is used.
		 *  @type function|int|string|null
		 *  @default null
		 */
		"mData": null,
	
		/**
		 * Partner property to mData which is used (only when defined) to get
		 * the data - i.e. it is basically the same as mData, but without the
		 * 'set' option, and also the data fed to it is the result from mData.
		 * This is the rendering method to match the data method of mData.
		 *  @type function|int|string|null
		 *  @default null
		 */
		"mRender": null,
	
		/**
		 * Unique header TH/TD element for this column - this is what the sorting
		 * listener is attached to (if sorting is enabled.)
		 *  @type node
		 *  @default null
		 */
		"nTh": null,
	
		/**
		 * Unique footer TH/TD element for this column (if there is one). Not used
		 * in DataTables as such, but can be used for plug-ins to reference the
		 * footer for each column.
		 *  @type node
		 *  @default null
		 */
		"nTf": null,
	
		/**
		 * The class to apply to all TD elements in the table's TBODY for the column
		 *  @type string
		 *  @default null
		 */
		"sClass": null,
	
		/**
		 * When DataTables calculates the column widths to assign to each column,
		 * it finds the longest string in each column and then constructs a
		 * temporary table and reads the widths from that. The problem with this
		 * is that "mmm" is much wider then "iiii", but the latter is a longer
		 * string - thus the calculation can go wrong (doing it properly and putting
		 * it into an DOM object and measuring that is horribly(!) slow). Thus as
		 * a "work around" we provide this option. It will append its value to the
		 * text that is found to be the longest string for the column - i.e. padding.
		 *  @type string
		 */
		"sContentPadding": null,
	
		/**
		 * Allows a default value to be given for a column's data, and will be used
		 * whenever a null data source is encountered (this can be because mData
		 * is set to null, or because the data source itself is null).
		 *  @type string
		 *  @default null
		 */
		"sDefaultContent": null,
	
		/**
		 * Name for the column, allowing reference to the column by name as well as
		 * by index (needs a lookup to work by name).
		 *  @type string
		 */
		"sName": null,
	
		/**
		 * Custom sorting data type - defines which of the available plug-ins in
		 * afnSortData the custom sorting will use - if any is defined.
		 *  @type string
		 *  @default std
		 */
		"sSortDataType": 'std',
	
		/**
		 * Class to be applied to the header element when sorting on this column
		 *  @type string
		 *  @default null
		 */
		"sSortingClass": null,
	
		/**
		 * Class to be applied to the header element when sorting on this column -
		 * when jQuery UI theming is used.
		 *  @type string
		 *  @default null
		 */
		"sSortingClassJUI": null,
	
		/**
		 * Title of the column - what is seen in the TH element (nTh).
		 *  @type string
		 */
		"sTitle": null,
	
		/**
		 * Column sorting and filtering type
		 *  @type string
		 *  @default null
		 */
		"sType": null,
	
		/**
		 * Width of the column
		 *  @type string
		 *  @default null
		 */
		"sWidth": null,
	
		/**
		 * Width of the column when it was first "encountered"
		 *  @type string
		 *  @default null
		 */
		"sWidthOrig": null
	};
	
	
	/*
	 * Developer note: The properties of the object below are given in Hungarian
	 * notation, that was used as the interface for DataTables prior to v1.10, however
	 * from v1.10 onwards the primary interface is camel case. In order to avoid
	 * breaking backwards compatibility utterly with this change, the Hungarian
	 * version is still, internally the primary interface, but is is not documented
	 * - hence the @name tags in each doc comment. This allows a Javascript function
	 * to create a map from Hungarian notation to camel case (going the other direction
	 * would require each property to be listed, which would at around 3K to the size
	 * of DataTables, while this method is about a 0.5K hit.
	 *
	 * Ultimately this does pave the way for Hungarian notation to be dropped
	 * completely, but that is a massive amount of work and will break current
	 * installs (therefore is on-hold until v2).
	 */
	
	/**
	 * Initialisation options that can be given to DataTables at initialisation
	 * time.
	 *  @namespace
	 */
	DataTable.defaults = {
		/**
		 * An array of data to use for the table, passed in at initialisation which
		 * will be used in preference to any data which is already in the DOM. This is
		 * particularly useful for constructing tables purely in Javascript, for
		 * example with a custom Ajax call.
		 *  @type array
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.data
		 *
		 *  @example
		 *    // Using a 2D array data source
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "data": [
		 *          ['Trident', 'Internet Explorer 4.0', 'Win 95+', 4, 'X'],
		 *          ['Trident', 'Internet Explorer 5.0', 'Win 95+', 5, 'C'],
		 *        ],
		 *        "columns": [
		 *          { "title": "Engine" },
		 *          { "title": "Browser" },
		 *          { "title": "Platform" },
		 *          { "title": "Version" },
		 *          { "title": "Grade" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using an array of objects as a data source (`data`)
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "data": [
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 4.0",
		 *            "platform": "Win 95+",
		 *            "version":  4,
		 *            "grade":    "X"
		 *          },
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 5.0",
		 *            "platform": "Win 95+",
		 *            "version":  5,
		 *            "grade":    "C"
		 *          }
		 *        ],
		 *        "columns": [
		 *          { "title": "Engine",   "data": "engine" },
		 *          { "title": "Browser",  "data": "browser" },
		 *          { "title": "Platform", "data": "platform" },
		 *          { "title": "Version",  "data": "version" },
		 *          { "title": "Grade",    "data": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"aaData": null,
	
	
		/**
		 * If ordering is enabled, then DataTables will perform a first pass sort on
		 * initialisation. You can define which column(s) the sort is performed
		 * upon, and the sorting direction, with this variable. The `sorting` array
		 * should contain an array for each column to be sorted initially containing
		 * the column's index and a direction string ('asc' or 'desc').
		 *  @type array
		 *  @default [[0,'asc']]
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.order
		 *
		 *  @example
		 *    // Sort by 3rd column first, and then 4th column
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "order": [[2,'asc'], [3,'desc']]
		 *      } );
		 *    } );
		 *
		 *    // No initial sorting
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "order": []
		 *      } );
		 *    } );
		 */
		"aaSorting": [[0,'asc']],
	
	
		/**
		 * This parameter is basically identical to the `sorting` parameter, but
		 * cannot be overridden by user interaction with the table. What this means
		 * is that you could have a column (visible or hidden) which the sorting
		 * will always be forced on first - any sorting after that (from the user)
		 * will then be performed as required. This can be useful for grouping rows
		 * together.
		 *  @type array
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.orderFixed
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "orderFixed": [[0,'asc']]
		 *      } );
		 *    } )
		 */
		"aaSortingFixed": [],
	
	
		/**
		 * DataTables can be instructed to load data to display in the table from a
		 * Ajax source. This option defines how that Ajax call is made and where to.
		 *
		 * The `ajax` property has three different modes of operation, depending on
		 * how it is defined. These are:
		 *
		 * * `string` - Set the URL from where the data should be loaded from.
		 * * `object` - Define properties for `jQuery.ajax`.
		 * * `function` - Custom data get function
		 *
		 * `string`
		 * --------
		 *
		 * As a string, the `ajax` property simply defines the URL from which
		 * DataTables will load data.
		 *
		 * `object`
		 * --------
		 *
		 * As an object, the parameters in the object are passed to
		 * [jQuery.ajax](http://api.jquery.com/jQuery.ajax/) allowing fine control
		 * of the Ajax request. DataTables has a number of default parameters which
		 * you can override using this option. Please refer to the jQuery
		 * documentation for a full description of the options available, although
		 * the following parameters provide additional options in DataTables or
		 * require special consideration:
		 *
		 * * `data` - As with jQuery, `data` can be provided as an object, but it
		 *   can also be used as a function to manipulate the data DataTables sends
		 *   to the server. The function takes a single parameter, an object of
		 *   parameters with the values that DataTables has readied for sending. An
		 *   object may be returned which will be merged into the DataTables
		 *   defaults, or you can add the items to the object that was passed in and
		 *   not return anything from the function. This supersedes `fnServerParams`
		 *   from DataTables 1.9-.
		 *
		 * * `dataSrc` - By default DataTables will look for the property `data` (or
		 *   `aaData` for compatibility with DataTables 1.9-) when obtaining data
		 *   from an Ajax source or for server-side processing - this parameter
		 *   allows that property to be changed. You can use Javascript dotted
		 *   object notation to get a data source for multiple levels of nesting, or
		 *   it my be used as a function. As a function it takes a single parameter,
		 *   the JSON returned from the server, which can be manipulated as
		 *   required, with the returned value being that used by DataTables as the
		 *   data source for the table. This supersedes `sAjaxDataProp` from
		 *   DataTables 1.9-.
		 *
		 * * `success` - Should not be overridden it is used internally in
		 *   DataTables. To manipulate / transform the data returned by the server
		 *   use `ajax.dataSrc`, or use `ajax` as a function (see below).
		 *
		 * `function`
		 * ----------
		 *
		 * As a function, making the Ajax call is left up to yourself allowing
		 * complete control of the Ajax request. Indeed, if desired, a method other
		 * than Ajax could be used to obtain the required data, such as Web storage
		 * or an AIR database.
		 *
		 * The function is given four parameters and no return is required. The
		 * parameters are:
		 *
		 * 1. _object_ - Data to send to the server
		 * 2. _function_ - Callback function that must be executed when the required
		 *    data has been obtained. That data should be passed into the callback
		 *    as the only parameter
		 * 3. _object_ - DataTables settings object for the table
		 *
		 * Note that this supersedes `fnServerData` from DataTables 1.9-.
		 *
		 *  @type string|object|function
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.ajax
		 *  @since 1.10.0
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax.
		 *   // Note DataTables expects data in the form `{ data: [ ...data... ] }` by default).
		 *   $('#example').dataTable( {
		 *     "ajax": "data.json"
		 *   } );
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax, using `dataSrc` to change
		 *   // `data` to `tableData` (i.e. `{ tableData: [ ...data... ] }`)
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": "tableData"
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax, using `dataSrc` to read data
		 *   // from a plain array rather than an array in an object
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": ""
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Manipulate the data returned from the server - add a link to data
		 *   // (note this can, should, be done using `render` for the column - this
		 *   // is just a simple example of how the data can be manipulated).
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": function ( json ) {
		 *         for ( var i=0, ien=json.length ; i<ien ; i++ ) {
		 *           json[i][0] = '<a href="/message/'+json[i][0]+'>View message</a>';
		 *         }
		 *         return json;
		 *       }
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Add data to the request
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "data": function ( d ) {
		 *         return {
		 *           "extra_search": $('#extra').val()
		 *         };
		 *       }
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Send request as POST
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "type": "POST"
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Get the data from localStorage (could interface with a form for
		 *   // adding, editing and removing rows).
		 *   $('#example').dataTable( {
		 *     "ajax": function (data, callback, settings) {
		 *       callback(
		 *         JSON.parse( localStorage.getItem('dataTablesData') )
		 *       );
		 *     }
		 *   } );
		 */
		"ajax": null,
	
	
		/**
		 * This parameter allows you to readily specify the entries in the length drop
		 * down menu that DataTables shows when pagination is enabled. It can be
		 * either a 1D array of options which will be used for both the displayed
		 * option and the value, or a 2D array which will use the array in the first
		 * position as the value, and the array in the second position as the
		 * displayed options (useful for language strings such as 'All').
		 *
		 * Note that the `pageLength` property will be automatically set to the
		 * first value given in this array, unless `pageLength` is also provided.
		 *  @type array
		 *  @default [ 10, 25, 50, 100 ]
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.lengthMenu
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
		 *      } );
		 *    } );
		 */
		"aLengthMenu": [ 10, 25, 50, 100 ],
	
	
		/**
		 * The `columns` option in the initialisation parameter allows you to define
		 * details about the way individual columns behave. For a full list of
		 * column options that can be set, please see
		 * {@link DataTable.defaults.column}. Note that if you use `columns` to
		 * define your columns, you must have an entry in the array for every single
		 * column that you have in your table (these can be null if you don't which
		 * to specify any options).
		 *  @member
		 *
		 *  @name DataTable.defaults.column
		 */
		"aoColumns": null,
	
		/**
		 * Very similar to `columns`, `columnDefs` allows you to target a specific
		 * column, multiple columns, or all columns, using the `targets` property of
		 * each object in the array. This allows great flexibility when creating
		 * tables, as the `columnDefs` arrays can be of any length, targeting the
		 * columns you specifically want. `columnDefs` may use any of the column
		 * options available: {@link DataTable.defaults.column}, but it _must_
		 * have `targets` defined in each object in the array. Values in the `targets`
		 * array may be:
		 *   <ul>
		 *     <li>a string - class name will be matched on the TH for the column</li>
		 *     <li>0 or a positive integer - column index counting from the left</li>
		 *     <li>a negative integer - column index counting from the right</li>
		 *     <li>the string "_all" - all columns (i.e. assign a default)</li>
		 *   </ul>
		 *  @member
		 *
		 *  @name DataTable.defaults.columnDefs
		 */
		"aoColumnDefs": null,
	
	
		/**
		 * Basically the same as `search`, this parameter defines the individual column
		 * filtering state at initialisation time. The array must be of the same size
		 * as the number of columns, and each element be an object with the parameters
		 * `search` and `escapeRegex` (the latter is optional). 'null' is also
		 * accepted and the default will be used.
		 *  @type array
		 *  @default []
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.searchCols
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "searchCols": [
		 *          null,
		 *          { "search": "My filter" },
		 *          null,
		 *          { "search": "^[0-9]", "escapeRegex": false }
		 *        ]
		 *      } );
		 *    } )
		 */
		"aoSearchCols": [],
	
	
		/**
		 * An array of CSS classes that should be applied to displayed rows. This
		 * array may be of any length, and DataTables will apply each class
		 * sequentially, looping when required.
		 *  @type array
		 *  @default null <i>Will take the values determined by the `oClasses.stripe*`
		 *    options</i>
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.stripeClasses
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stripeClasses": [ 'strip1', 'strip2', 'strip3' ]
		 *      } );
		 *    } )
		 */
		"asStripeClasses": null,
	
	
		/**
		 * Enable or disable automatic column width calculation. This can be disabled
		 * as an optimisation (it takes some time to calculate the widths) if the
		 * tables widths are passed in using `columns`.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.autoWidth
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "autoWidth": false
		 *      } );
		 *    } );
		 */
		"bAutoWidth": true,
	
	
		/**
		 * Deferred rendering can provide DataTables with a huge speed boost when you
		 * are using an Ajax or JS data source for the table. This option, when set to
		 * true, will cause DataTables to defer the creation of the table elements for
		 * each row until they are needed for a draw - saving a significant amount of
		 * time.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.deferRender
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajax": "sources/arrays.txt",
		 *        "deferRender": true
		 *      } );
		 *    } );
		 */
		"bDeferRender": false,
	
	
		/**
		 * Replace a DataTable which matches the given selector and replace it with
		 * one which has the properties of the new initialisation object passed. If no
		 * table matches the selector, then the new DataTable will be constructed as
		 * per normal.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.destroy
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "srollY": "200px",
		 *        "paginate": false
		 *      } );
		 *
		 *      // Some time later....
		 *      $('#example').dataTable( {
		 *        "filter": false,
		 *        "destroy": true
		 *      } );
		 *    } );
		 */
		"bDestroy": false,
	
	
		/**
		 * Enable or disable filtering of data. Filtering in DataTables is "smart" in
		 * that it allows the end user to input multiple words (space separated) and
		 * will match a row containing those words, even if not in the order that was
		 * specified (this allow matching across multiple columns). Note that if you
		 * wish to use filtering in DataTables this must remain 'true' - to remove the
		 * default filtering input box and retain filtering abilities, please use
		 * {@link DataTable.defaults.dom}.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.searching
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "searching": false
		 *      } );
		 *    } );
		 */
		"bFilter": true,
	
	
		/**
		 * Enable or disable the table information display. This shows information
		 * about the data that is currently visible on the page, including information
		 * about filtered data if that action is being performed.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.info
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "info": false
		 *      } );
		 *    } );
		 */
		"bInfo": true,
	
	
		/**
		 * Allows the end user to select the size of a formatted page from a select
		 * menu (sizes are 10, 25, 50 and 100). Requires pagination (`paginate`).
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.lengthChange
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "lengthChange": false
		 *      } );
		 *    } );
		 */
		"bLengthChange": true,
	
	
		/**
		 * Enable or disable pagination.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.paging
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "paging": false
		 *      } );
		 *    } );
		 */
		"bPaginate": true,
	
	
		/**
		 * Enable or disable the display of a 'processing' indicator when the table is
		 * being processed (e.g. a sort). This is particularly useful for tables with
		 * large amounts of data where it can take a noticeable amount of time to sort
		 * the entries.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.processing
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "processing": true
		 *      } );
		 *    } );
		 */
		"bProcessing": false,
	
	
		/**
		 * Retrieve the DataTables object for the given selector. Note that if the
		 * table has already been initialised, this parameter will cause DataTables
		 * to simply return the object that has already been set up - it will not take
		 * account of any changes you might have made to the initialisation object
		 * passed to DataTables (setting this parameter to true is an acknowledgement
		 * that you understand this). `destroy` can be used to reinitialise a table if
		 * you need.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.retrieve
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      initTable();
		 *      tableActions();
		 *    } );
		 *
		 *    function initTable ()
		 *    {
		 *      return $('#example').dataTable( {
		 *        "scrollY": "200px",
		 *        "paginate": false,
		 *        "retrieve": true
		 *      } );
		 *    }
		 *
		 *    function tableActions ()
		 *    {
		 *      var table = initTable();
		 *      // perform API operations with oTable
		 *    }
		 */
		"bRetrieve": false,
	
	
		/**
		 * When vertical (y) scrolling is enabled, DataTables will force the height of
		 * the table's viewport to the given height at all times (useful for layout).
		 * However, this can look odd when filtering data down to a small data set,
		 * and the footer is left "floating" further down. This parameter (when
		 * enabled) will cause DataTables to collapse the table's viewport down when
		 * the result set will fit within the given Y height.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.scrollCollapse
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollY": "200",
		 *        "scrollCollapse": true
		 *      } );
		 *    } );
		 */
		"bScrollCollapse": false,
	
	
		/**
		 * Configure DataTables to use server-side processing. Note that the
		 * `ajax` parameter must also be given in order to give DataTables a
		 * source to obtain the required data for each draw.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverSide
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "xhr.php"
		 *      } );
		 *    } );
		 */
		"bServerSide": false,
	
	
		/**
		 * Enable or disable sorting of columns. Sorting of individual columns can be
		 * disabled by the `sortable` option for each column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.ordering
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "ordering": false
		 *      } );
		 *    } );
		 */
		"bSort": true,
	
	
		/**
		 * Enable or display DataTables' ability to sort multiple columns at the
		 * same time (activated by shift-click by the user).
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.orderMulti
		 *
		 *  @example
		 *    // Disable multiple column sorting ability
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "orderMulti": false
		 *      } );
		 *    } );
		 */
		"bSortMulti": true,
	
	
		/**
		 * Allows control over whether DataTables should use the top (true) unique
		 * cell that is found for a single column, or the bottom (false - default).
		 * This is useful when using complex headers.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.orderCellsTop
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "orderCellsTop": true
		 *      } );
		 *    } );
		 */
		"bSortCellsTop": false,
	
	
		/**
		 * Enable or disable the addition of the classes `sorting\_1`, `sorting\_2` and
		 * `sorting\_3` to the columns which are currently being sorted on. This is
		 * presented as a feature switch as it can increase processing time (while
		 * classes are removed and added) so for large data sets you might want to
		 * turn this off.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.orderClasses
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "orderClasses": false
		 *      } );
		 *    } );
		 */
		"bSortClasses": true,
	
	
		/**
		 * Enable or disable state saving. When enabled HTML5 `localStorage` will be
		 * used to save table display information such as pagination information,
		 * display length, filtering and sorting. As such when the end user reloads
		 * the page the display display will match what thy had previously set up.
		 *
		 * Due to the use of `localStorage` the default state saving is not supported
		 * in IE6 or 7. If state saving is required in those browsers, use
		 * `stateSaveCallback` to provide a storage solution such as cookies.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.stateSave
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "stateSave": true
		 *      } );
		 *    } );
		 */
		"bStateSave": false,
	
	
		/**
		 * This function is called when a TR element is created (and all TD child
		 * elements have been inserted), or registered if using a DOM source, allowing
		 * manipulation of the TR element (adding classes etc).
		 *  @type function
		 *  @param {node} row "TR" element for the current row
		 *  @param {array} data Raw data array for this row
		 *  @param {int} dataIndex The index of this row in the internal aoData array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.createdRow
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "createdRow": function( row, data, dataIndex ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( data[4] == "A" )
		 *          {
		 *            $('td:eq(4)', row).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnCreatedRow": null,
	
	
		/**
		 * This function is called on every 'draw' event, and allows you to
		 * dynamically modify any aspect you want about the created DOM.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.drawCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "drawCallback": function( settings ) {
		 *          alert( 'DataTables has redrawn the table' );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnDrawCallback": null,
	
	
		/**
		 * Identical to fnHeaderCallback() but for the table footer this function
		 * allows you to modify the table footer on every 'draw' event.
		 *  @type function
		 *  @param {node} foot "TR" element for the footer
		 *  @param {array} data Full table data (as derived from the original HTML)
		 *  @param {int} start Index for the current display starting point in the
		 *    display array
		 *  @param {int} end Index for the current display ending point in the
		 *    display array
		 *  @param {array int} display Index array to translate the visual position
		 *    to the full data array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.footerCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "footerCallback": function( tfoot, data, start, end, display ) {
		 *          tfoot.getElementsByTagName('th')[0].innerHTML = "Starting index is "+start;
		 *        }
		 *      } );
		 *    } )
		 */
		"fnFooterCallback": null,
	
	
		/**
		 * When rendering large numbers in the information element for the table
		 * (i.e. "Showing 1 to 10 of 57 entries") DataTables will render large numbers
		 * to have a comma separator for the 'thousands' units (e.g. 1 million is
		 * rendered as "1,000,000") to help readability for the end user. This
		 * function will override the default method DataTables uses.
		 *  @type function
		 *  @member
		 *  @param {int} toFormat number to be formatted
		 *  @returns {string} formatted string for DataTables to show the number
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.formatNumber
		 *
		 *  @example
		 *    // Format a number using a single quote for the separator (note that
		 *    // this can also be done with the language.thousands option)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "formatNumber": function ( toFormat ) {
		 *          return toFormat.toString().replace(
		 *            /\B(?=(\d{3})+(?!\d))/g, "'"
		 *          );
		 *        };
		 *      } );
		 *    } );
		 */
		"fnFormatNumber": function ( toFormat ) {
			return toFormat.toString().replace(
				/\B(?=(\d{3})+(?!\d))/g,
				this.oLanguage.sThousands
			);
		},
	
	
		/**
		 * This function is called on every 'draw' event, and allows you to
		 * dynamically modify the header row. This can be used to calculate and
		 * display useful information about the table.
		 *  @type function
		 *  @param {node} head "TR" element for the header
		 *  @param {array} data Full table data (as derived from the original HTML)
		 *  @param {int} start Index for the current display starting point in the
		 *    display array
		 *  @param {int} end Index for the current display ending point in the
		 *    display array
		 *  @param {array int} display Index array to translate the visual position
		 *    to the full data array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.headerCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "fheaderCallback": function( head, data, start, end, display ) {
		 *          head.getElementsByTagName('th')[0].innerHTML = "Displaying "+(end-start)+" records";
		 *        }
		 *      } );
		 *    } )
		 */
		"fnHeaderCallback": null,
	
	
		/**
		 * The information element can be used to convey information about the current
		 * state of the table. Although the internationalisation options presented by
		 * DataTables are quite capable of dealing with most customisations, there may
		 * be times where you wish to customise the string further. This callback
		 * allows you to do exactly that.
		 *  @type function
		 *  @param {object} oSettings DataTables settings object
		 *  @param {int} start Starting position in data for the draw
		 *  @param {int} end End position in data for the draw
		 *  @param {int} max Total number of rows in the table (regardless of
		 *    filtering)
		 *  @param {int} total Total number of rows in the data set, after filtering
		 *  @param {string} pre The string that DataTables has formatted using it's
		 *    own rules
		 *  @returns {string} The string to be displayed in the information element.
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.infoCallback
		 *
		 *  @example
		 *    $('#example').dataTable( {
		 *      "infoCallback": function( settings, start, end, max, total, pre ) {
		 *        return start +" to "+ end;
		 *      }
		 *    } );
		 */
		"fnInfoCallback": null,
	
	
		/**
		 * Called when the table has been initialised. Normally DataTables will
		 * initialise sequentially and there will be no need for this function,
		 * however, this does not hold true when using external language information
		 * since that is obtained using an async XHR call.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} json The JSON object request from the server - only
		 *    present if client-side Ajax sourced data is used
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.initComplete
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "initComplete": function(settings, json) {
		 *          alert( 'DataTables has finished its initialisation.' );
		 *        }
		 *      } );
		 *    } )
		 */
		"fnInitComplete": null,
	
	
		/**
		 * Called at the very start of each table draw and can be used to cancel the
		 * draw by returning false, any other return (including undefined) results in
		 * the full draw occurring).
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @returns {boolean} False will cancel the draw, anything else (including no
		 *    return) will allow it to complete.
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.preDrawCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "preDrawCallback": function( settings ) {
		 *          if ( $('#test').val() == 1 ) {
		 *            return false;
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnPreDrawCallback": null,
	
	
		/**
		 * This function allows you to 'post process' each row after it have been
		 * generated for each table draw, but before it is rendered on screen. This
		 * function might be used for setting the row class name etc.
		 *  @type function
		 *  @param {node} row "TR" element for the current row
		 *  @param {array} data Raw data array for this row
		 *  @param {int} displayIndex The display index for the current table draw
		 *  @param {int} displayIndexFull The index of the data in the full list of
		 *    rows (after filtering)
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.rowCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "rowCallback": function( row, data, displayIndex, displayIndexFull ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( data[4] == "A" ) {
		 *            $('td:eq(4)', row).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnRowCallback": null,
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * This parameter allows you to override the default function which obtains
		 * the data from the server so something more suitable for your application.
		 * For example you could use POST data, or pull information from a Gears or
		 * AIR database.
		 *  @type function
		 *  @member
		 *  @param {string} source HTTP source to obtain the data from (`ajax`)
		 *  @param {array} data A key/value pair object containing the data to send
		 *    to the server
		 *  @param {function} callback to be called on completion of the data get
		 *    process that will draw the data on the page.
		 *  @param {object} settings DataTables settings object
		 *
		 *  @dtopt Callbacks
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverData
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"fnServerData": null,
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 *  It is often useful to send extra data to the server when making an Ajax
		 * request - for example custom filtering information, and this callback
		 * function makes it trivial to send extra information to the server. The
		 * passed in parameter is the data set that has been constructed by
		 * DataTables, and you can add to this or modify it as you require.
		 *  @type function
		 *  @param {array} data Data array (array of objects which are name/value
		 *    pairs) that has been constructed by DataTables and will be sent to the
		 *    server. In the case of Ajax sourced data with server-side processing
		 *    this will be an empty array, for server-side processing there will be a
		 *    significant number of parameters!
		 *  @returns {undefined} Ensure that you modify the data array passed in,
		 *    as this is passed by reference.
		 *
		 *  @dtopt Callbacks
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverParams
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"fnServerParams": null,
	
	
		/**
		 * Load the table state. With this function you can define from where, and how, the
		 * state of a table is loaded. By default DataTables will load from `localStorage`
		 * but you might wish to use a server-side database or cookies.
		 *  @type function
		 *  @member
		 *  @param {object} settings DataTables settings object
		 *  @param {object} callback Callback that can be executed when done. It
		 *    should be passed the loaded state object.
		 *  @return {object} The DataTables state object to be loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoadCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadCallback": function (settings, callback) {
		 *          $.ajax( {
		 *            "url": "/state_load",
		 *            "dataType": "json",
		 *            "success": function (json) {
		 *              callback( json );
		 *            }
		 *          } );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoadCallback": function ( settings ) {
			try {
				return JSON.parse(
					(settings.iStateDuration === -1 ? sessionStorage : localStorage).getItem(
						'DataTables_'+settings.sInstance+'_'+location.pathname
					)
				);
			} catch (e) {
				return {};
			}
		},
	
	
		/**
		 * Callback which allows modification of the saved state prior to loading that state.
		 * This callback is called when the table is loading state from the stored data, but
		 * prior to the settings object being modified by the saved state. Note that for
		 * plug-in authors, you should use the `stateLoadParams` event to load parameters for
		 * a plug-in.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object that is to be loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoadParams
		 *
		 *  @example
		 *    // Remove a saved filter, so filtering is never loaded
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadParams": function (settings, data) {
		 *          data.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Disallow state loading by returning false
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadParams": function (settings, data) {
		 *          return false;
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoadParams": null,
	
	
		/**
		 * Callback that is called when the state has been loaded from the state saving method
		 * and the DataTables settings object has been modified as a result of the loaded state.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object that was loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoaded
		 *
		 *  @example
		 *    // Show an alert with the filtering value that was saved
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoaded": function (settings, data) {
		 *          alert( 'Saved filter was: '+data.oSearch.sSearch );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoaded": null,
	
	
		/**
		 * Save the table state. This function allows you to define where and how the state
		 * information for the table is stored By default DataTables will use `localStorage`
		 * but you might wish to use a server-side database or cookies.
		 *  @type function
		 *  @member
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object to be saved
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateSaveCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateSaveCallback": function (settings, data) {
		 *          // Send an Ajax request to the server with the state object
		 *          $.ajax( {
		 *            "url": "/state_save",
		 *            "data": data,
		 *            "dataType": "json",
		 *            "method": "POST"
		 *            "success": function () {}
		 *          } );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateSaveCallback": function ( settings, data ) {
			try {
				(settings.iStateDuration === -1 ? sessionStorage : localStorage).setItem(
					'DataTables_'+settings.sInstance+'_'+location.pathname,
					JSON.stringify( data )
				);
			} catch (e) {}
		},
	
	
		/**
		 * Callback which allows modification of the state to be saved. Called when the table
		 * has changed state a new state save is required. This method allows modification of
		 * the state saving object prior to actually doing the save, including addition or
		 * other state properties or modification. Note that for plug-in authors, you should
		 * use the `stateSaveParams` event to save parameters for a plug-in.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object to be saved
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateSaveParams
		 *
		 *  @example
		 *    // Remove a saved filter, so filtering is never saved
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateSaveParams": function (settings, data) {
		 *          data.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateSaveParams": null,
	
	
		/**
		 * Duration for which the saved state information is considered valid. After this period
		 * has elapsed the state will be returned to the default.
		 * Value is given in seconds.
		 *  @type int
		 *  @default 7200 <i>(2 hours)</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.stateDuration
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateDuration": 60*60*24; // 1 day
		 *      } );
		 *    } )
		 */
		"iStateDuration": 7200,
	
	
		/**
		 * When enabled DataTables will not make a request to the server for the first
		 * page draw - rather it will use the data already on the page (no sorting etc
		 * will be applied to it), thus saving on an XHR at load time. `deferLoading`
		 * is used to indicate that deferred loading is required, but it is also used
		 * to tell DataTables how many records there are in the full table (allowing
		 * the information element and pagination to be displayed correctly). In the case
		 * where a filtering is applied to the table on initial load, this can be
		 * indicated by giving the parameter as an array, where the first element is
		 * the number of records available after filtering and the second element is the
		 * number of records without filtering (allowing the table information element
		 * to be shown correctly).
		 *  @type int | array
		 *  @default null
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.deferLoading
		 *
		 *  @example
		 *    // 57 records available in the table, no filtering applied
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "scripts/server_processing.php",
		 *        "deferLoading": 57
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // 57 records after filtering, 100 without filtering (an initial filter applied)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "scripts/server_processing.php",
		 *        "deferLoading": [ 57, 100 ],
		 *        "search": {
		 *          "search": "my_filter"
		 *        }
		 *      } );
		 *    } );
		 */
		"iDeferLoading": null,
	
	
		/**
		 * Number of rows to display on a single page when using pagination. If
		 * feature enabled (`lengthChange`) then the end user will be able to override
		 * this to a custom setting using a pop-up menu.
		 *  @type int
		 *  @default 10
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.pageLength
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "pageLength": 50
		 *      } );
		 *    } )
		 */
		"iDisplayLength": 10,
	
	
		/**
		 * Define the starting point for data display when using DataTables with
		 * pagination. Note that this parameter is the number of records, rather than
		 * the page number, so if you have 10 records per page and want to start on
		 * the third page, it should be "20".
		 *  @type int
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.displayStart
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "displayStart": 20
		 *      } );
		 *    } )
		 */
		"iDisplayStart": 0,
	
	
		/**
		 * By default DataTables allows keyboard navigation of the table (sorting, paging,
		 * and filtering) by adding a `tabindex` attribute to the required elements. This
		 * allows you to tab through the controls and press the enter key to activate them.
		 * The tabindex is default 0, meaning that the tab follows the flow of the document.
		 * You can overrule this using this parameter if you wish. Use a value of -1 to
		 * disable built-in keyboard navigation.
		 *  @type int
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.tabIndex
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "tabIndex": 1
		 *      } );
		 *    } );
		 */
		"iTabIndex": 0,
	
	
		/**
		 * Classes that DataTables assigns to the various components and features
		 * that it adds to the HTML table. This allows classes to be configured
		 * during initialisation in addition to through the static
		 * {@link DataTable.ext.oStdClasses} object).
		 *  @namespace
		 *  @name DataTable.defaults.classes
		 */
		"oClasses": {},
	
	
		/**
		 * All strings that DataTables uses in the user interface that it creates
		 * are defined in this object, allowing you to modified them individually or
		 * completely replace them all as required.
		 *  @namespace
		 *  @name DataTable.defaults.language
		 */
		"oLanguage": {
			/**
			 * Strings that are used for WAI-ARIA labels and controls only (these are not
			 * actually visible on the page, but will be read by screenreaders, and thus
			 * must be internationalised as well).
			 *  @namespace
			 *  @name DataTable.defaults.language.aria
			 */
			"oAria": {
				/**
				 * ARIA label that is added to the table headers when the column may be
				 * sorted ascending by activing the column (click or return when focused).
				 * Note that the column header is prefixed to this string.
				 *  @type string
				 *  @default : activate to sort column ascending
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.aria.sortAscending
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "aria": {
				 *            "sortAscending": " - click/return to sort ascending"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sSortAscending": ": activate to sort column ascending",
	
				/**
				 * ARIA label that is added to the table headers when the column may be
				 * sorted descending by activing the column (click or return when focused).
				 * Note that the column header is prefixed to this string.
				 *  @type string
				 *  @default : activate to sort column ascending
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.aria.sortDescending
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "aria": {
				 *            "sortDescending": " - click/return to sort descending"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sSortDescending": ": activate to sort column descending"
			},
	
			/**
			 * Pagination string used by DataTables for the built-in pagination
			 * control types.
			 *  @namespace
			 *  @name DataTable.defaults.language.paginate
			 */
			"oPaginate": {
				/**
				 * Text to use when using the 'full_numbers' type of pagination for the
				 * button to take the user to the first page.
				 *  @type string
				 *  @default First
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.first
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "first": "First page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sFirst": "First",
	
	
				/**
				 * Text to use when using the 'full_numbers' type of pagination for the
				 * button to take the user to the last page.
				 *  @type string
				 *  @default Last
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.last
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "last": "Last page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sLast": "Last",
	
	
				/**
				 * Text to use for the 'next' pagination button (to take the user to the
				 * next page).
				 *  @type string
				 *  @default Next
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.next
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "next": "Next page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sNext": "Next",
	
	
				/**
				 * Text to use for the 'previous' pagination button (to take the user to
				 * the previous page).
				 *  @type string
				 *  @default Previous
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.previous
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "previous": "Previous page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sPrevious": "Previous"
			},
	
			/**
			 * This string is shown in preference to `zeroRecords` when the table is
			 * empty of data (regardless of filtering). Note that this is an optional
			 * parameter - if it is not given, the value of `zeroRecords` will be used
			 * instead (either the default or given value).
			 *  @type string
			 *  @default No data available in table
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.emptyTable
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "emptyTable": "No data available in table"
			 *        }
			 *      } );
			 *    } );
			 */
			"sEmptyTable": "No data available in table",
	
	
			/**
			 * This string gives information to the end user about the information
			 * that is current on display on the page. The following tokens can be
			 * used in the string and will be dynamically replaced as the table
			 * display updates. This tokens can be placed anywhere in the string, or
			 * removed as needed by the language requires:
			 *
			 * * `\_START\_` - Display index of the first record on the current page
			 * * `\_END\_` - Display index of the last record on the current page
			 * * `\_TOTAL\_` - Number of records in the table after filtering
			 * * `\_MAX\_` - Number of records in the table without filtering
			 * * `\_PAGE\_` - Current page number
			 * * `\_PAGES\_` - Total number of pages of data in the table
			 *
			 *  @type string
			 *  @default Showing _START_ to _END_ of _TOTAL_ entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.info
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "info": "Showing page _PAGE_ of _PAGES_"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
	
	
			/**
			 * Display information string for when the table is empty. Typically the
			 * format of this string should match `info`.
			 *  @type string
			 *  @default Showing 0 to 0 of 0 entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoEmpty
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoEmpty": "No entries to show"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoEmpty": "Showing 0 to 0 of 0 entries",
	
	
			/**
			 * When a user filters the information in a table, this string is appended
			 * to the information (`info`) to give an idea of how strong the filtering
			 * is. The variable _MAX_ is dynamically updated.
			 *  @type string
			 *  @default (filtered from _MAX_ total entries)
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoFiltered
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoFiltered": " - filtering from _MAX_ records"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoFiltered": "(filtered from _MAX_ total entries)",
	
	
			/**
			 * If can be useful to append extra information to the info string at times,
			 * and this variable does exactly that. This information will be appended to
			 * the `info` (`infoEmpty` and `infoFiltered` in whatever combination they are
			 * being used) at all times.
			 *  @type string
			 *  @default <i>Empty string</i>
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoPostFix
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoPostFix": "All records shown are derived from real information."
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoPostFix": "",
	
	
			/**
			 * This decimal place operator is a little different from the other
			 * language options since DataTables doesn't output floating point
			 * numbers, so it won't ever use this for display of a number. Rather,
			 * what this parameter does is modify the sort methods of the table so
			 * that numbers which are in a format which has a character other than
			 * a period (`.`) as a decimal place will be sorted numerically.
			 *
			 * Note that numbers with different decimal places cannot be shown in
			 * the same table and still be sortable, the table must be consistent.
			 * However, multiple different tables on the page can use different
			 * decimal place characters.
			 *  @type string
			 *  @default 
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.decimal
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "decimal": ","
			 *          "thousands": "."
			 *        }
			 *      } );
			 *    } );
			 */
			"sDecimal": "",
	
	
			/**
			 * DataTables has a build in number formatter (`formatNumber`) which is
			 * used to format large numbers that are used in the table information.
			 * By default a comma is used, but this can be trivially changed to any
			 * character you wish with this parameter.
			 *  @type string
			 *  @default ,
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.thousands
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "thousands": "'"
			 *        }
			 *      } );
			 *    } );
			 */
			"sThousands": ",",
	
	
			/**
			 * Detail the action that will be taken when the drop down menu for the
			 * pagination length option is changed. The '_MENU_' variable is replaced
			 * with a default select list of 10, 25, 50 and 100, and can be replaced
			 * with a custom select box if required.
			 *  @type string
			 *  @default Show _MENU_ entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.lengthMenu
			 *
			 *  @example
			 *    // Language change only
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "lengthMenu": "Display _MENU_ records"
			 *        }
			 *      } );
			 *    } );
			 *
			 *  @example
			 *    // Language and options change
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "lengthMenu": 'Display <select>'+
			 *            '<option value="10">10</option>'+
			 *            '<option value="20">20</option>'+
			 *            '<option value="30">30</option>'+
			 *            '<option value="40">40</option>'+
			 *            '<option value="50">50</option>'+
			 *            '<option value="-1">All</option>'+
			 *            '</select> records'
			 *        }
			 *      } );
			 *    } );
			 */
			"sLengthMenu": "Show _MENU_ entries",
	
	
			/**
			 * When using Ajax sourced data and during the first draw when DataTables is
			 * gathering the data, this message is shown in an empty row in the table to
			 * indicate to the end user the the data is being loaded. Note that this
			 * parameter is not used when loading data by server-side processing, just
			 * Ajax sourced data with client-side processing.
			 *  @type string
			 *  @default Loading...
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.loadingRecords
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "loadingRecords": "Please wait - loading..."
			 *        }
			 *      } );
			 *    } );
			 */
			"sLoadingRecords": "Loading...",
	
	
			/**
			 * Text which is displayed when the table is processing a user action
			 * (usually a sort command or similar).
			 *  @type string
			 *  @default Processing...
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.processing
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "processing": "DataTables is currently busy"
			 *        }
			 *      } );
			 *    } );
			 */
			"sProcessing": "Processing...",
	
	
			/**
			 * Details the actions that will be taken when the user types into the
			 * filtering input text box. The variable "_INPUT_", if used in the string,
			 * is replaced with the HTML text box for the filtering input allowing
			 * control over where it appears in the string. If "_INPUT_" is not given
			 * then the input box is appended to the string automatically.
			 *  @type string
			 *  @default Search:
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.search
			 *
			 *  @example
			 *    // Input text box will be appended at the end automatically
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "search": "Filter records:"
			 *        }
			 *      } );
			 *    } );
			 *
			 *  @example
			 *    // Specify where the filter should appear
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "search": "Apply filter _INPUT_ to table"
			 *        }
			 *      } );
			 *    } );
			 */
			"sSearch": "Search:",
	
	
			/**
			 * Assign a `placeholder` attribute to the search `input` element
			 *  @type string
			 *  @default 
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.searchPlaceholder
			 */
			"sSearchPlaceholder": "",
	
	
			/**
			 * All of the language information can be stored in a file on the
			 * server-side, which DataTables will look up if this parameter is passed.
			 * It must store the URL of the language file, which is in a JSON format,
			 * and the object has the same properties as the oLanguage object in the
			 * initialiser object (i.e. the above parameters). Please refer to one of
			 * the example language files to see how this works in action.
			 *  @type string
			 *  @default <i>Empty string - i.e. disabled</i>
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.url
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "url": "http://www.sprymedia.co.uk/dataTables/lang.txt"
			 *        }
			 *      } );
			 *    } );
			 */
			"sUrl": "",
	
	
			/**
			 * Text shown inside the table records when the is no information to be
			 * displayed after filtering. `emptyTable` is shown when there is simply no
			 * information in the table at all (regardless of filtering).
			 *  @type string
			 *  @default No matching records found
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.zeroRecords
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "zeroRecords": "No records to display"
			 *        }
			 *      } );
			 *    } );
			 */
			"sZeroRecords": "No matching records found"
		},
	
	
		/**
		 * This parameter allows you to have define the global filtering state at
		 * initialisation time. As an object the `search` parameter must be
		 * defined, but all other parameters are optional. When `regex` is true,
		 * the search string will be treated as a regular expression, when false
		 * (default) it will be treated as a straight string. When `smart`
		 * DataTables will use it's smart filtering methods (to word match at
		 * any point in the data), when false this will not be done.
		 *  @namespace
		 *  @extends DataTable.models.oSearch
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.search
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "search": {"search": "Initial search"}
		 *      } );
		 *    } )
		 */
		"oSearch": $.extend( {}, DataTable.models.oSearch ),
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * By default DataTables will look for the property `data` (or `aaData` for
		 * compatibility with DataTables 1.9-) when obtaining data from an Ajax
		 * source or for server-side processing - this parameter allows that
		 * property to be changed. You can use Javascript dotted object notation to
		 * get a data source for multiple levels of nesting.
		 *  @type string
		 *  @default data
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.ajaxDataProp
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"sAjaxDataProp": "data",
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * You can instruct DataTables to load data from an external
		 * source using this parameter (use aData if you want to pass data in you
		 * already have). Simply provide a url a JSON object can be obtained from.
		 *  @type string
		 *  @default null
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.ajaxSource
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"sAjaxSource": null,
	
	
		/**
		 * This initialisation variable allows you to specify exactly where in the
		 * DOM you want DataTables to inject the various controls it adds to the page
		 * (for example you might want the pagination controls at the top of the
		 * table). DIV elements (with or without a custom class) can also be added to
		 * aid styling. The follow syntax is used:
		 *   <ul>
		 *     <li>The following options are allowed:
		 *       <ul>
		 *         <li>'l' - Length changing</li>
		 *         <li>'f' - Filtering input</li>
		 *         <li>'t' - The table!</li>
		 *         <li>'i' - Information</li>
		 *         <li>'p' - Pagination</li>
		 *         <li>'r' - pRocessing</li>
		 *       </ul>
		 *     </li>
		 *     <li>The following constants are allowed:
		 *       <ul>
		 *         <li>'H' - jQueryUI theme "header" classes ('fg-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix')</li>
		 *         <li>'F' - jQueryUI theme "footer" classes ('fg-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix')</li>
		 *       </ul>
		 *     </li>
		 *     <li>The following syntax is expected:
		 *       <ul>
		 *         <li>'&lt;' and '&gt;' - div elements</li>
		 *         <li>'&lt;"class" and '&gt;' - div with a class</li>
		 *         <li>'&lt;"#id" and '&gt;' - div with an ID</li>
		 *       </ul>
		 *     </li>
		 *     <li>Examples:
		 *       <ul>
		 *         <li>'&lt;"wrapper"flipt&gt;'</li>
		 *         <li>'&lt;lf&lt;t&gt;ip&gt;'</li>
		 *       </ul>
		 *     </li>
		 *   </ul>
		 *  @type string
		 *  @default lfrtip <i>(when `jQueryUI` is false)</i> <b>or</b>
		 *    <"H"lfr>t<"F"ip> <i>(when `jQueryUI` is true)</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.dom
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "dom": '&lt;"top"i&gt;rt&lt;"bottom"flp&gt;&lt;"clear"&gt;'
		 *      } );
		 *    } );
		 */
		"sDom": "lfrtip",
	
	
		/**
		 * Search delay option. This will throttle full table searches that use the
		 * DataTables provided search input element (it does not effect calls to
		 * `dt-api search()`, providing a delay before the search is made.
		 *  @type integer
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.searchDelay
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "searchDelay": 200
		 *      } );
		 *    } )
		 */
		"searchDelay": null,
	
	
		/**
		 * DataTables features six different built-in options for the buttons to
		 * display for pagination control:
		 *
		 * * `numbers` - Page number buttons only
		 * * `simple` - 'Previous' and 'Next' buttons only
		 * * 'simple_numbers` - 'Previous' and 'Next' buttons, plus page numbers
		 * * `full` - 'First', 'Previous', 'Next' and 'Last' buttons
		 * * `full_numbers` - 'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers
		 * * `first_last_numbers` - 'First' and 'Last' buttons, plus page numbers
		 *  
		 * Further methods can be added using {@link DataTable.ext.oPagination}.
		 *  @type string
		 *  @default simple_numbers
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.pagingType
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "pagingType": "full_numbers"
		 *      } );
		 *    } )
		 */
		"sPaginationType": "simple_numbers",
	
	
		/**
		 * Enable horizontal scrolling. When a table is too wide to fit into a
		 * certain layout, or you have a large number of columns in the table, you
		 * can enable x-scrolling to show the table in a viewport, which can be
		 * scrolled. This property can be `true` which will allow the table to
		 * scroll horizontally when needed, or any CSS unit, or a number (in which
		 * case it will be treated as a pixel measurement). Setting as simply `true`
		 * is recommended.
		 *  @type boolean|string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.scrollX
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollX": true,
		 *        "scrollCollapse": true
		 *      } );
		 *    } );
		 */
		"sScrollX": "",
	
	
		/**
		 * This property can be used to force a DataTable to use more width than it
		 * might otherwise do when x-scrolling is enabled. For example if you have a
		 * table which requires to be well spaced, this parameter is useful for
		 * "over-sizing" the table, and thus forcing scrolling. This property can by
		 * any CSS unit, or a number (in which case it will be treated as a pixel
		 * measurement).
		 *  @type string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.scrollXInner
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollX": "100%",
		 *        "scrollXInner": "110%"
		 *      } );
		 *    } );
		 */
		"sScrollXInner": "",
	
	
		/**
		 * Enable vertical scrolling. Vertical scrolling will constrain the DataTable
		 * to the given height, and enable scrolling for any data which overflows the
		 * current viewport. This can be used as an alternative to paging to display
		 * a lot of data in a small area (although paging and scrolling can both be
		 * enabled at the same time). This property can be any CSS unit, or a number
		 * (in which case it will be treated as a pixel measurement).
		 *  @type string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.scrollY
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollY": "200px",
		 *        "paginate": false
		 *      } );
		 *    } );
		 */
		"sScrollY": "",
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * Set the HTTP method that is used to make the Ajax call for server-side
		 * processing or Ajax sourced data.
		 *  @type string
		 *  @default GET
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverMethod
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"sServerMethod": "GET",
	
	
		/**
		 * DataTables makes use of renderers when displaying HTML elements for
		 * a table. These renderers can be added or modified by plug-ins to
		 * generate suitable mark-up for a site. For example the Bootstrap
		 * integration plug-in for DataTables uses a paging button renderer to
		 * display pagination buttons in the mark-up required by Bootstrap.
		 *
		 * For further information about the renderers available see
		 * DataTable.ext.renderer
		 *  @type string|object
		 *  @default null
		 *
		 *  @name DataTable.defaults.renderer
		 *
		 */
		"renderer": null,
	
	
		/**
		 * Set the data property name that DataTables should use to get a row's id
		 * to set as the `id` property in the node.
		 *  @type string
		 *  @default DT_RowId
		 *
		 *  @name DataTable.defaults.rowId
		 */
		"rowId": "DT_RowId"
	};
	
	_fnHungarianMap( DataTable.defaults );
	
	
	
	/*
	 * Developer note - See note in model.defaults.js about the use of Hungarian
	 * notation and camel case.
	 */
	
	/**
	 * Column options that can be given to DataTables at initialisation time.
	 *  @namespace
	 */
	DataTable.defaults.column = {
		/**
		 * Define which column(s) an order will occur on for this column. This
		 * allows a column's ordering to take multiple columns into account when
		 * doing a sort or use the data from a different column. For example first
		 * name / last name columns make sense to do a multi-column sort over the
		 * two columns.
		 *  @type array|int
		 *  @default null <i>Takes the value of the column index automatically</i>
		 *
		 *  @name DataTable.defaults.column.orderData
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderData": [ 0, 1 ], "targets": [ 0 ] },
		 *          { "orderData": [ 1, 0 ], "targets": [ 1 ] },
		 *          { "orderData": 2, "targets": [ 2 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "orderData": [ 0, 1 ] },
		 *          { "orderData": [ 1, 0 ] },
		 *          { "orderData": 2 },
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"aDataSort": null,
		"iDataSort": -1,
	
	
		/**
		 * You can control the default ordering direction, and even alter the
		 * behaviour of the sort handler (i.e. only allow ascending ordering etc)
		 * using this parameter.
		 *  @type array
		 *  @default [ 'asc', 'desc' ]
		 *
		 *  @name DataTable.defaults.column.orderSequence
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderSequence": [ "asc" ], "targets": [ 1 ] },
		 *          { "orderSequence": [ "desc", "asc", "asc" ], "targets": [ 2 ] },
		 *          { "orderSequence": [ "desc" ], "targets": [ 3 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          { "orderSequence": [ "asc" ] },
		 *          { "orderSequence": [ "desc", "asc", "asc" ] },
		 *          { "orderSequence": [ "desc" ] },
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"asSorting": [ 'asc', 'desc' ],
	
	
		/**
		 * Enable or disable filtering on the data in this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.searchable
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "searchable": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "searchable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bSearchable": true,
	
	
		/**
		 * Enable or disable ordering on this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.orderable
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderable": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "orderable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bSortable": true,
	
	
		/**
		 * Enable or disable the display of this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.visible
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "visible": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "visible": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bVisible": true,
	
	
		/**
		 * Developer definable function that is called whenever a cell is created (Ajax source,
		 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
		 * allowing you to modify the DOM element (add background colour for example) when the
		 * element is available.
		 *  @type function
		 *  @param {element} td The TD node that has been created
		 *  @param {*} cellData The Data for the cell
		 *  @param {array|object} rowData The data for the whole row
		 *  @param {int} row The row index for the aoData data store
		 *  @param {int} col The column index for aoColumns
		 *
		 *  @name DataTable.defaults.column.createdCell
		 *  @dtopt Columns
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [3],
		 *          "createdCell": function (td, cellData, rowData, row, col) {
		 *            if ( cellData == "1.7" ) {
		 *              $(td).css('color', 'blue')
		 *            }
		 *          }
		 *        } ]
		 *      });
		 *    } );
		 */
		"fnCreatedCell": null,
	
	
		/**
		 * This parameter has been replaced by `data` in DataTables to ensure naming
		 * consistency. `dataProp` can still be used, as there is backwards
		 * compatibility in DataTables for this option, but it is strongly
		 * recommended that you use `data` in preference to `dataProp`.
		 *  @name DataTable.defaults.column.dataProp
		 */
	
	
		/**
		 * This property can be used to read data from any data source property,
		 * including deeply nested objects / properties. `data` can be given in a
		 * number of different ways which effect its behaviour:
		 *
		 * * `integer` - treated as an array index for the data source. This is the
		 *   default that DataTables uses (incrementally increased for each column).
		 * * `string` - read an object property from the data source. There are
		 *   three 'special' options that can be used in the string to alter how
		 *   DataTables reads the data from the source object:
		 *    * `.` - Dotted Javascript notation. Just as you use a `.` in
		 *      Javascript to read from nested objects, so to can the options
		 *      specified in `data`. For example: `browser.version` or
		 *      `browser.name`. If your object parameter name contains a period, use
		 *      `\\` to escape it - i.e. `first\\.name`.
		 *    * `[]` - Array notation. DataTables can automatically combine data
		 *      from and array source, joining the data with the characters provided
		 *      between the two brackets. For example: `name[, ]` would provide a
		 *      comma-space separated list from the source array. If no characters
		 *      are provided between the brackets, the original array source is
		 *      returned.
		 *    * `()` - Function notation. Adding `()` to the end of a parameter will
		 *      execute a function of the name given. For example: `browser()` for a
		 *      simple function on the data source, `browser.version()` for a
		 *      function in a nested property or even `browser().version` to get an
		 *      object property if the function called returns an object. Note that
		 *      function notation is recommended for use in `render` rather than
		 *      `data` as it is much simpler to use as a renderer.
		 * * `null` - use the original data source for the row rather than plucking
		 *   data directly from it. This action has effects on two other
		 *   initialisation options:
		 *    * `defaultContent` - When null is given as the `data` option and
		 *      `defaultContent` is specified for the column, the value defined by
		 *      `defaultContent` will be used for the cell.
		 *    * `render` - When null is used for the `data` option and the `render`
		 *      option is specified for the column, the whole data source for the
		 *      row is used for the renderer.
		 * * `function` - the function given will be executed whenever DataTables
		 *   needs to set or get the data for a cell in the column. The function
		 *   takes three parameters:
		 *    * Parameters:
		 *      * `{array|object}` The data source for the row
		 *      * `{string}` The type call data requested - this will be 'set' when
		 *        setting data or 'filter', 'display', 'type', 'sort' or undefined
		 *        when gathering data. Note that when `undefined` is given for the
		 *        type DataTables expects to get the raw data for the object back<
		 *      * `{*}` Data to set when the second parameter is 'set'.
		 *    * Return:
		 *      * The return value from the function is not required when 'set' is
		 *        the type of call, but otherwise the return is what will be used
		 *        for the data requested.
		 *
		 * Note that `data` is a getter and setter option. If you just require
		 * formatting of data for output, you will likely want to use `render` which
		 * is simply a getter and thus simpler to use.
		 *
		 * Note that prior to DataTables 1.9.2 `data` was called `mDataProp`. The
		 * name change reflects the flexibility of this property and is consistent
		 * with the naming of mRender. If 'mDataProp' is given, then it will still
		 * be used by DataTables, as it automatically maps the old name to the new
		 * if required.
		 *
		 *  @type string|int|function|null
		 *  @default null <i>Use automatically calculated column index</i>
		 *
		 *  @name DataTable.defaults.column.data
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Read table data from objects
		 *    // JSON structure for each row:
		 *    //   {
		 *    //      "engine": {value},
		 *    //      "browser": {value},
		 *    //      "platform": {value},
		 *    //      "version": {value},
		 *    //      "grade": {value}
		 *    //   }
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/objects.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          { "data": "platform" },
		 *          { "data": "version" },
		 *          { "data": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Read information from deeply nested objects
		 *    // JSON structure for each row:
		 *    //   {
		 *    //      "engine": {value},
		 *    //      "browser": {value},
		 *    //      "platform": {
		 *    //         "inner": {value}
		 *    //      },
		 *    //      "details": [
		 *    //         {value}, {value}
		 *    //      ]
		 *    //   }
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/deep.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          { "data": "platform.inner" },
		 *          { "data": "details.0" },
		 *          { "data": "details.1" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `data` as a function to provide different information for
		 *    // sorting, filtering and display. In this case, currency (price)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": function ( source, type, val ) {
		 *            if (type === 'set') {
		 *              source.price = val;
		 *              // Store the computed dislay and filter values for efficiency
		 *              source.price_display = val=="" ? "" : "$"+numberFormat(val);
		 *              source.price_filter  = val=="" ? "" : "$"+numberFormat(val)+" "+val;
		 *              return;
		 *            }
		 *            else if (type === 'display') {
		 *              return source.price_display;
		 *            }
		 *            else if (type === 'filter') {
		 *              return source.price_filter;
		 *            }
		 *            // 'sort', 'type' and undefined all just use the integer
		 *            return source.price;
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using default content
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null,
		 *          "defaultContent": "Click to edit"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using array notation - outputting a list from an array
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": "name[, ]"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 */
		"mData": null,
	
	
		/**
		 * This property is the rendering partner to `data` and it is suggested that
		 * when you want to manipulate data for display (including filtering,
		 * sorting etc) without altering the underlying data for the table, use this
		 * property. `render` can be considered to be the the read only companion to
		 * `data` which is read / write (then as such more complex). Like `data`
		 * this option can be given in a number of different ways to effect its
		 * behaviour:
		 *
		 * * `integer` - treated as an array index for the data source. This is the
		 *   default that DataTables uses (incrementally increased for each column).
		 * * `string` - read an object property from the data source. There are
		 *   three 'special' options that can be used in the string to alter how
		 *   DataTables reads the data from the source object:
		 *    * `.` - Dotted Javascript notation. Just as you use a `.` in
		 *      Javascript to read from nested objects, so to can the options
		 *      specified in `data`. For example: `browser.version` or
		 *      `browser.name`. If your object parameter name contains a period, use
		 *      `\\` to escape it - i.e. `first\\.name`.
		 *    * `[]` - Array notation. DataTables can automatically combine data
		 *      from and array source, joining the data with the characters provided
		 *      between the two brackets. For example: `name[, ]` would provide a
		 *      comma-space separated list from the source array. If no characters
		 *      are provided between the brackets, the original array source is
		 *      returned.
		 *    * `()` - Function notation. Adding `()` to the end of a parameter will
		 *      execute a function of the name given. For example: `browser()` for a
		 *      simple function on the data source, `browser.version()` for a
		 *      function in a nested property or even `browser().version` to get an
		 *      object property if the function called returns an object.
		 * * `object` - use different data for the different data types requested by
		 *   DataTables ('filter', 'display', 'type' or 'sort'). The property names
		 *   of the object is the data type the property refers to and the value can
		 *   defined using an integer, string or function using the same rules as
		 *   `render` normally does. Note that an `_` option _must_ be specified.
		 *   This is the default value to use if you haven't specified a value for
		 *   the data type requested by DataTables.
		 * * `function` - the function given will be executed whenever DataTables
		 *   needs to set or get the data for a cell in the column. The function
		 *   takes three parameters:
		 *    * Parameters:
		 *      * {array|object} The data source for the row (based on `data`)
		 *      * {string} The type call data requested - this will be 'filter',
		 *        'display', 'type' or 'sort'.
		 *      * {array|object} The full data source for the row (not based on
		 *        `data`)
		 *    * Return:
		 *      * The return value from the function is what will be used for the
		 *        data requested.
		 *
		 *  @type string|int|function|object|null
		 *  @default null Use the data source value.
		 *
		 *  @name DataTable.defaults.column.render
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Create a comma separated list from an array of objects
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/deep.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          {
		 *            "data": "platform",
		 *            "render": "[, ].name"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Execute a function to obtain data
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null, // Use the full data source object for the renderer's source
		 *          "render": "browserName()"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // As an object, extracting different data for the different types
		 *    // This would be used with a data source such as:
		 *    //   { "phone": 5552368, "phone_filter": "5552368 555-2368", "phone_display": "555-2368" }
		 *    // Here the `phone` integer is used for sorting and type detection, while `phone_filter`
		 *    // (which has both forms) is used for filtering for if a user inputs either format, while
		 *    // the formatted phone number is the one that is shown in the table.
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null, // Use the full data source object for the renderer's source
		 *          "render": {
		 *            "_": "phone",
		 *            "filter": "phone_filter",
		 *            "display": "phone_display"
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Use as a function to create a link from the data source
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": "download_link",
		 *          "render": function ( data, type, full ) {
		 *            return '<a href="'+data+'">Download</a>';
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 */
		"mRender": null,
	
	
		/**
		 * Change the cell type created for the column - either TD cells or TH cells. This
		 * can be useful as TH cells have semantic meaning in the table body, allowing them
		 * to act as a header for a row (you may wish to add scope='row' to the TH elements).
		 *  @type string
		 *  @default td
		 *
		 *  @name DataTable.defaults.column.cellType
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Make the first column use TH cells
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "cellType": "th"
		 *        } ]
		 *      } );
		 *    } );
		 */
		"sCellType": "td",
	
	
		/**
		 * Class to give to each cell in this column.
		 *  @type string
		 *  @default <i>Empty string</i>
		 *
		 *  @name DataTable.defaults.column.class
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "class": "my_class", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "class": "my_class" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sClass": "",
	
		/**
		 * When DataTables calculates the column widths to assign to each column,
		 * it finds the longest string in each column and then constructs a
		 * temporary table and reads the widths from that. The problem with this
		 * is that "mmm" is much wider then "iiii", but the latter is a longer
		 * string - thus the calculation can go wrong (doing it properly and putting
		 * it into an DOM object and measuring that is horribly(!) slow). Thus as
		 * a "work around" we provide this option. It will append its value to the
		 * text that is found to be the longest string for the column - i.e. padding.
		 * Generally you shouldn't need this!
		 *  @type string
		 *  @default <i>Empty string<i>
		 *
		 *  @name DataTable.defaults.column.contentPadding
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "contentPadding": "mmm"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sContentPadding": "",
	
	
		/**
		 * Allows a default value to be given for a column's data, and will be used
		 * whenever a null data source is encountered (this can be because `data`
		 * is set to null, or because the data source itself is null).
		 *  @type string
		 *  @default null
		 *
		 *  @name DataTable.defaults.column.defaultContent
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          {
		 *            "data": null,
		 *            "defaultContent": "Edit",
		 *            "targets": [ -1 ]
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "data": null,
		 *            "defaultContent": "Edit"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sDefaultContent": null,
	
	
		/**
		 * This parameter is only used in DataTables' server-side processing. It can
		 * be exceptionally useful to know what columns are being displayed on the
		 * client side, and to map these to database fields. When defined, the names
		 * also allow DataTables to reorder information from the server if it comes
		 * back in an unexpected order (i.e. if you switch your columns around on the
		 * client-side, your server-side code does not also need updating).
		 *  @type string
		 *  @default <i>Empty string</i>
		 *
		 *  @name DataTable.defaults.column.name
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "name": "engine", "targets": [ 0 ] },
		 *          { "name": "browser", "targets": [ 1 ] },
		 *          { "name": "platform", "targets": [ 2 ] },
		 *          { "name": "version", "targets": [ 3 ] },
		 *          { "name": "grade", "targets": [ 4 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "name": "engine" },
		 *          { "name": "browser" },
		 *          { "name": "platform" },
		 *          { "name": "version" },
		 *          { "name": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sName": "",
	
	
		/**
		 * Defines a data source type for the ordering which can be used to read
		 * real-time information from the table (updating the internally cached
		 * version) prior to ordering. This allows ordering to occur on user
		 * editable elements such as form inputs.
		 *  @type string
		 *  @default std
		 *
		 *  @name DataTable.defaults.column.orderDataType
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderDataType": "dom-text", "targets": [ 2, 3 ] },
		 *          { "type": "numeric", "targets": [ 3 ] },
		 *          { "orderDataType": "dom-select", "targets": [ 4 ] },
		 *          { "orderDataType": "dom-checkbox", "targets": [ 5 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          { "orderDataType": "dom-text" },
		 *          { "orderDataType": "dom-text", "type": "numeric" },
		 *          { "orderDataType": "dom-select" },
		 *          { "orderDataType": "dom-checkbox" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sSortDataType": "std",
	
	
		/**
		 * The title of this column.
		 *  @type string
		 *  @default null <i>Derived from the 'TH' value for this column in the
		 *    original HTML table.</i>
		 *
		 *  @name DataTable.defaults.column.title
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "title": "My column title", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "title": "My column title" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sTitle": null,
	
	
		/**
		 * The type allows you to specify how the data for this column will be
		 * ordered. Four types (string, numeric, date and html (which will strip
		 * HTML tags before ordering)) are currently available. Note that only date
		 * formats understood by Javascript's Date() object will be accepted as type
		 * date. For example: "Mar 26, 2008 5:03 PM". May take the values: 'string',
		 * 'numeric', 'date' or 'html' (by default). Further types can be adding
		 * through plug-ins.
		 *  @type string
		 *  @default null <i>Auto-detected from raw data</i>
		 *
		 *  @name DataTable.defaults.column.type
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "type": "html", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "type": "html" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sType": null,
	
	
		/**
		 * Defining the width of the column, this parameter may take any CSS value
		 * (3em, 20px etc). DataTables applies 'smart' widths to columns which have not
		 * been given a specific width through this interface ensuring that the table
		 * remains readable.
		 *  @type string
		 *  @default null <i>Automatic</i>
		 *
		 *  @name DataTable.defaults.column.width
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "width": "20%", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "width": "20%" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sWidth": null
	};
	
	_fnHungarianMap( DataTable.defaults.column );
	
	
	
	/**
	 * DataTables settings object - this holds all the information needed for a
	 * given table, including configuration, data and current application of the
	 * table options. DataTables does not have a single instance for each DataTable
	 * with the settings attached to that instance, but rather instances of the
	 * DataTable "class" are created on-the-fly as needed (typically by a
	 * $().dataTable() call) and the settings object is then applied to that
	 * instance.
	 *
	 * Note that this object is related to {@link DataTable.defaults} but this
	 * one is the internal data store for DataTables's cache of columns. It should
	 * NOT be manipulated outside of DataTables. Any configuration should be done
	 * through the initialisation options.
	 *  @namespace
	 *  @todo Really should attach the settings object to individual instances so we
	 *    don't need to create new instances on each $().dataTable() call (if the
	 *    table already exists). It would also save passing oSettings around and
	 *    into every single function. However, this is a very significant
	 *    architecture change for DataTables and will almost certainly break
	 *    backwards compatibility with older installations. This is something that
	 *    will be done in 2.0.
	 */
	DataTable.models.oSettings = {
		/**
		 * Primary features of DataTables and their enablement state.
		 *  @namespace
		 */
		"oFeatures": {
	
			/**
			 * Flag to say if DataTables should automatically try to calculate the
			 * optimum table and columns widths (true) or not (false).
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bAutoWidth": null,
	
			/**
			 * Delay the creation of TR and TD elements until they are actually
			 * needed by a driven page draw. This can give a significant speed
			 * increase for Ajax source and Javascript source data, but makes no
			 * difference at all fro DOM and server-side processing tables.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bDeferRender": null,
	
			/**
			 * Enable filtering on the table or not. Note that if this is disabled
			 * then there is no filtering at all on the table, including fnFilter.
			 * To just remove the filtering input use sDom and remove the 'f' option.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bFilter": null,
	
			/**
			 * Table information element (the 'Showing x of y records' div) enable
			 * flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bInfo": null,
	
			/**
			 * Present a user control allowing the end user to change the page size
			 * when pagination is enabled.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bLengthChange": null,
	
			/**
			 * Pagination enabled or not. Note that if this is disabled then length
			 * changing must also be disabled.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bPaginate": null,
	
			/**
			 * Processing indicator enable flag whenever DataTables is enacting a
			 * user request - typically an Ajax request for server-side processing.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bProcessing": null,
	
			/**
			 * Server-side processing enabled flag - when enabled DataTables will
			 * get all data from the server for every draw - there is no filtering,
			 * sorting or paging done on the client-side.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bServerSide": null,
	
			/**
			 * Sorting enablement flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSort": null,
	
			/**
			 * Multi-column sorting
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSortMulti": null,
	
			/**
			 * Apply a class to the columns which are being sorted to provide a
			 * visual highlight or not. This can slow things down when enabled since
			 * there is a lot of DOM interaction.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSortClasses": null,
	
			/**
			 * State saving enablement flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bStateSave": null
		},
	
	
		/**
		 * Scrolling settings for a table.
		 *  @namespace
		 */
		"oScroll": {
			/**
			 * When the table is shorter in height than sScrollY, collapse the
			 * table container down to the height of the table (when true).
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bCollapse": null,
	
			/**
			 * Width of the scrollbar for the web-browser's platform. Calculated
			 * during table initialisation.
			 *  @type int
			 *  @default 0
			 */
			"iBarWidth": 0,
	
			/**
			 * Viewport width for horizontal scrolling. Horizontal scrolling is
			 * disabled if an empty string.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 */
			"sX": null,
	
			/**
			 * Width to expand the table to when using x-scrolling. Typically you
			 * should not need to use this.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 *  @deprecated
			 */
			"sXInner": null,
	
			/**
			 * Viewport height for vertical scrolling. Vertical scrolling is disabled
			 * if an empty string.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 */
			"sY": null
		},
	
		/**
		 * Language information for the table.
		 *  @namespace
		 *  @extends DataTable.defaults.oLanguage
		 */
		"oLanguage": {
			/**
			 * Information callback function. See
			 * {@link DataTable.defaults.fnInfoCallback}
			 *  @type function
			 *  @default null
			 */
			"fnInfoCallback": null
		},
	
		/**
		 * Browser support parameters
		 *  @namespace
		 */
		"oBrowser": {
			/**
			 * Indicate if the browser incorrectly calculates width:100% inside a
			 * scrolling element (IE6/7)
			 *  @type boolean
			 *  @default false
			 */
			"bScrollOversize": false,
	
			/**
			 * Determine if the vertical scrollbar is on the right or left of the
			 * scrolling container - needed for rtl language layout, although not
			 * all browsers move the scrollbar (Safari).
			 *  @type boolean
			 *  @default false
			 */
			"bScrollbarLeft": false,
	
			/**
			 * Flag for if `getBoundingClientRect` is fully supported or not
			 *  @type boolean
			 *  @default false
			 */
			"bBounding": false,
	
			/**
			 * Browser scrollbar width
			 *  @type integer
			 *  @default 0
			 */
			"barWidth": 0
		},
	
	
		"ajax": null,
	
	
		/**
		 * Array referencing the nodes which are used for the features. The
		 * parameters of this object match what is allowed by sDom - i.e.
		 *   <ul>
		 *     <li>'l' - Length changing</li>
		 *     <li>'f' - Filtering input</li>
		 *     <li>'t' - The table!</li>
		 *     <li>'i' - Information</li>
		 *     <li>'p' - Pagination</li>
		 *     <li>'r' - pRocessing</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aanFeatures": [],
	
		/**
		 * Store data information - see {@link DataTable.models.oRow} for detailed
		 * information.
		 *  @type array
		 *  @default []
		 */
		"aoData": [],
	
		/**
		 * Array of indexes which are in the current display (after filtering etc)
		 *  @type array
		 *  @default []
		 */
		"aiDisplay": [],
	
		/**
		 * Array of indexes for display - no filtering
		 *  @type array
		 *  @default []
		 */
		"aiDisplayMaster": [],
	
		/**
		 * Map of row ids to data indexes
		 *  @type object
		 *  @default {}
		 */
		"aIds": {},
	
		/**
		 * Store information about each column that is in use
		 *  @type array
		 *  @default []
		 */
		"aoColumns": [],
	
		/**
		 * Store information about the table's header
		 *  @type array
		 *  @default []
		 */
		"aoHeader": [],
	
		/**
		 * Store information about the table's footer
		 *  @type array
		 *  @default []
		 */
		"aoFooter": [],
	
		/**
		 * Store the applied global search information in case we want to force a
		 * research or compare the old search to a new one.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @namespace
		 *  @extends DataTable.models.oSearch
		 */
		"oPreviousSearch": {},
	
		/**
		 * Store the applied search for each column - see
		 * {@link DataTable.models.oSearch} for the format that is used for the
		 * filtering information for each column.
		 *  @type array
		 *  @default []
		 */
		"aoPreSearchCols": [],
	
		/**
		 * Sorting that is applied to the table. Note that the inner arrays are
		 * used in the following manner:
		 * <ul>
		 *   <li>Index 0 - column number</li>
		 *   <li>Index 1 - current sorting direction</li>
		 * </ul>
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @todo These inner arrays should really be objects
		 */
		"aaSorting": null,
	
		/**
		 * Sorting that is always applied to the table (i.e. prefixed in front of
		 * aaSorting).
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"aaSortingFixed": [],
	
		/**
		 * Classes to use for the striping of a table.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"asStripeClasses": null,
	
		/**
		 * If restoring a table - we should restore its striping classes as well
		 *  @type array
		 *  @default []
		 */
		"asDestroyStripes": [],
	
		/**
		 * If restoring a table - we should restore its width
		 *  @type int
		 *  @default 0
		 */
		"sDestroyWidth": 0,
	
		/**
		 * Callback functions array for every time a row is inserted (i.e. on a draw).
		 *  @type array
		 *  @default []
		 */
		"aoRowCallback": [],
	
		/**
		 * Callback functions for the header on each draw.
		 *  @type array
		 *  @default []
		 */
		"aoHeaderCallback": [],
	
		/**
		 * Callback function for the footer on each draw.
		 *  @type array
		 *  @default []
		 */
		"aoFooterCallback": [],
	
		/**
		 * Array of callback functions for draw callback functions
		 *  @type array
		 *  @default []
		 */
		"aoDrawCallback": [],
	
		/**
		 * Array of callback functions for row created function
		 *  @type array
		 *  @default []
		 */
		"aoRowCreatedCallback": [],
	
		/**
		 * Callback functions for just before the table is redrawn. A return of
		 * false will be used to cancel the draw.
		 *  @type array
		 *  @default []
		 */
		"aoPreDrawCallback": [],
	
		/**
		 * Callback functions for when the table has been initialised.
		 *  @type array
		 *  @default []
		 */
		"aoInitComplete": [],
	
	
		/**
		 * Callbacks for modifying the settings to be stored for state saving, prior to
		 * saving state.
		 *  @type array
		 *  @default []
		 */
		"aoStateSaveParams": [],
	
		/**
		 * Callbacks for modifying the settings that have been stored for state saving
		 * prior to using the stored values to restore the state.
		 *  @type array
		 *  @default []
		 */
		"aoStateLoadParams": [],
	
		/**
		 * Callbacks for operating on the settings object once the saved state has been
		 * loaded
		 *  @type array
		 *  @default []
		 */
		"aoStateLoaded": [],
	
		/**
		 * Cache the table ID for quick access
		 *  @type string
		 *  @default <i>Empty string</i>
		 */
		"sTableId": "",
	
		/**
		 * The TABLE node for the main table
		 *  @type node
		 *  @default null
		 */
		"nTable": null,
	
		/**
		 * Permanent ref to the thead element
		 *  @type node
		 *  @default null
		 */
		"nTHead": null,
	
		/**
		 * Permanent ref to the tfoot element - if it exists
		 *  @type node
		 *  @default null
		 */
		"nTFoot": null,
	
		/**
		 * Permanent ref to the tbody element
		 *  @type node
		 *  @default null
		 */
		"nTBody": null,
	
		/**
		 * Cache the wrapper node (contains all DataTables controlled elements)
		 *  @type node
		 *  @default null
		 */
		"nTableWrapper": null,
	
		/**
		 * Indicate if when using server-side processing the loading of data
		 * should be deferred until the second draw.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 *  @default false
		 */
		"bDeferLoading": false,
	
		/**
		 * Indicate if all required information has been read in
		 *  @type boolean
		 *  @default false
		 */
		"bInitialised": false,
	
		/**
		 * Information about open rows. Each object in the array has the parameters
		 * 'nTr' and 'nParent'
		 *  @type array
		 *  @default []
		 */
		"aoOpenRows": [],
	
		/**
		 * Dictate the positioning of DataTables' control elements - see
		 * {@link DataTable.model.oInit.sDom}.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default null
		 */
		"sDom": null,
	
		/**
		 * Search delay (in mS)
		 *  @type integer
		 *  @default null
		 */
		"searchDelay": null,
	
		/**
		 * Which type of pagination should be used.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default two_button
		 */
		"sPaginationType": "two_button",
	
		/**
		 * The state duration (for `stateSave`) in seconds.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type int
		 *  @default 0
		 */
		"iStateDuration": 0,
	
		/**
		 * Array of callback functions for state saving. Each array element is an
		 * object with the following parameters:
		 *   <ul>
		 *     <li>function:fn - function to call. Takes two parameters, oSettings
		 *       and the JSON string to save that has been thus far created. Returns
		 *       a JSON string to be inserted into a json object
		 *       (i.e. '"param": [ 0, 1, 2]')</li>
		 *     <li>string:sName - name of callback</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aoStateSave": [],
	
		/**
		 * Array of callback functions for state loading. Each array element is an
		 * object with the following parameters:
		 *   <ul>
		 *     <li>function:fn - function to call. Takes two parameters, oSettings
		 *       and the object stored. May return false to cancel state loading</li>
		 *     <li>string:sName - name of callback</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aoStateLoad": [],
	
		/**
		 * State that was saved. Useful for back reference
		 *  @type object
		 *  @default null
		 */
		"oSavedState": null,
	
		/**
		 * State that was loaded. Useful for back reference
		 *  @type object
		 *  @default null
		 */
		"oLoadedState": null,
	
		/**
		 * Source url for AJAX data for the table.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default null
		 */
		"sAjaxSource": null,
	
		/**
		 * Property from a given object from which to read the table data from. This
		 * can be an empty string (when not server-side processing), in which case
		 * it is  assumed an an array is given directly.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 */
		"sAjaxDataProp": null,
	
		/**
		 * Note if draw should be blocked while getting data
		 *  @type boolean
		 *  @default true
		 */
		"bAjaxDataGet": true,
	
		/**
		 * The last jQuery XHR object that was used for server-side data gathering.
		 * This can be used for working with the XHR information in one of the
		 * callbacks
		 *  @type object
		 *  @default null
		 */
		"jqXHR": null,
	
		/**
		 * JSON returned from the server in the last Ajax request
		 *  @type object
		 *  @default undefined
		 */
		"json": undefined,
	
		/**
		 * Data submitted as part of the last Ajax request
		 *  @type object
		 *  @default undefined
		 */
		"oAjaxData": undefined,
	
		/**
		 * Function to get the server-side data.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type function
		 */
		"fnServerData": null,
	
		/**
		 * Functions which are called prior to sending an Ajax request so extra
		 * parameters can easily be sent to the server
		 *  @type array
		 *  @default []
		 */
		"aoServerParams": [],
	
		/**
		 * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if
		 * required).
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 */
		"sServerMethod": null,
	
		/**
		 * Format numbers for display.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type function
		 */
		"fnFormatNumber": null,
	
		/**
		 * List of options that can be used for the user selectable length menu.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"aLengthMenu": null,
	
		/**
		 * Counter for the draws that the table does. Also used as a tracker for
		 * server-side processing
		 *  @type int
		 *  @default 0
		 */
		"iDraw": 0,
	
		/**
		 * Indicate if a redraw is being done - useful for Ajax
		 *  @type boolean
		 *  @default false
		 */
		"bDrawing": false,
	
		/**
		 * Draw index (iDraw) of the last error when parsing the returned data
		 *  @type int
		 *  @default -1
		 */
		"iDrawError": -1,
	
		/**
		 * Paging display length
		 *  @type int
		 *  @default 10
		 */
		"_iDisplayLength": 10,
	
		/**
		 * Paging start point - aiDisplay index
		 *  @type int
		 *  @default 0
		 */
		"_iDisplayStart": 0,
	
		/**
		 * Server-side processing - number of records in the result set
		 * (i.e. before filtering), Use fnRecordsTotal rather than
		 * this property to get the value of the number of records, regardless of
		 * the server-side processing setting.
		 *  @type int
		 *  @default 0
		 *  @private
		 */
		"_iRecordsTotal": 0,
	
		/**
		 * Server-side processing - number of records in the current display set
		 * (i.e. after filtering). Use fnRecordsDisplay rather than
		 * this property to get the value of the number of records, regardless of
		 * the server-side processing setting.
		 *  @type boolean
		 *  @default 0
		 *  @private
		 */
		"_iRecordsDisplay": 0,
	
		/**
		 * The classes to use for the table
		 *  @type object
		 *  @default {}
		 */
		"oClasses": {},
	
		/**
		 * Flag attached to the settings object so you can check in the draw
		 * callback if filtering has been done in the draw. Deprecated in favour of
		 * events.
		 *  @type boolean
		 *  @default false
		 *  @deprecated
		 */
		"bFiltered": false,
	
		/**
		 * Flag attached to the settings object so you can check in the draw
		 * callback if sorting has been done in the draw. Deprecated in favour of
		 * events.
		 *  @type boolean
		 *  @default false
		 *  @deprecated
		 */
		"bSorted": false,
	
		/**
		 * Indicate that if multiple rows are in the header and there is more than
		 * one unique cell per column, if the top one (true) or bottom one (false)
		 * should be used for sorting / title by DataTables.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */
		"bSortCellsTop": null,
	
		/**
		 * Initialisation object that is used for the table
		 *  @type object
		 *  @default null
		 */
		"oInit": null,
	
		/**
		 * Destroy callback functions - for plug-ins to attach themselves to the
		 * destroy so they can clean up markup and events.
		 *  @type array
		 *  @default []
		 */
		"aoDestroyCallback": [],
	
	
		/**
		 * Get the number of records in the current record set, before filtering
		 *  @type function
		 */
		"fnRecordsTotal": function ()
		{
			return _fnDataSource( this ) == 'ssp' ?
				this._iRecordsTotal * 1 :
				this.aiDisplayMaster.length;
		},
	
		/**
		 * Get the number of records in the current record set, after filtering
		 *  @type function
		 */
		"fnRecordsDisplay": function ()
		{
			return _fnDataSource( this ) == 'ssp' ?
				this._iRecordsDisplay * 1 :
				this.aiDisplay.length;
		},
	
		/**
		 * Get the display end point - aiDisplay index
		 *  @type function
		 */
		"fnDisplayEnd": function ()
		{
			var
				len      = this._iDisplayLength,
				start    = this._iDisplayStart,
				calc     = start + len,
				records  = this.aiDisplay.length,
				features = this.oFeatures,
				paginate = features.bPaginate;
	
			if ( features.bServerSide ) {
				return paginate === false || len === -1 ?
					start + records :
					Math.min( start+len, this._iRecordsDisplay );
			}
			else {
				return ! paginate || calc>records || len===-1 ?
					records :
					calc;
			}
		},
	
		/**
		 * The DataTables object for this table
		 *  @type object
		 *  @default null
		 */
		"oInstance": null,
	
		/**
		 * Unique identifier for each instance of the DataTables object. If there
		 * is an ID on the table node, then it takes that value, otherwise an
		 * incrementing internal counter is used.
		 *  @type string
		 *  @default null
		 */
		"sInstance": null,
	
		/**
		 * tabindex attribute value that is added to DataTables control elements, allowing
		 * keyboard navigation of the table and its controls.
		 */
		"iTabIndex": 0,
	
		/**
		 * DIV container for the footer scrolling table if scrolling
		 */
		"nScrollHead": null,
	
		/**
		 * DIV container for the footer scrolling table if scrolling
		 */
		"nScrollFoot": null,
	
		/**
		 * Last applied sort
		 *  @type array
		 *  @default []
		 */
		"aLastSort": [],
	
		/**
		 * Stored plug-in instances
		 *  @type object
		 *  @default {}
		 */
		"oPlugins": {},
	
		/**
		 * Function used to get a row's id from the row's data
		 *  @type function
		 *  @default null
		 */
		"rowIdFn": null,
	
		/**
		 * Data location where to store a row's id
		 *  @type string
		 *  @default null
		 */
		"rowId": null
	};

	/**
	 * Extension object for DataTables that is used to provide all extension
	 * options.
	 *
	 * Note that the `DataTable.ext` object is available through
	 * `jQuery.fn.dataTable.ext` where it may be accessed and manipulated. It is
	 * also aliased to `jQuery.fn.dataTableExt` for historic reasons.
	 *  @namespace
	 *  @extends DataTable.models.ext
	 */
	
	
	/**
	 * DataTables extensions
	 * 
	 * This namespace acts as a collection area for plug-ins that can be used to
	 * extend DataTables capabilities. Indeed many of the build in methods
	 * use this method to provide their own capabilities (sorting methods for
	 * example).
	 *
	 * Note that this namespace is aliased to `jQuery.fn.dataTableExt` for legacy
	 * reasons
	 *
	 *  @namespace
	 */
	DataTable.ext = _ext = {
		/**
		 * Buttons. For use with the Buttons extension for DataTables. This is
		 * defined here so other extensions can define buttons regardless of load
		 * order. It is _not_ used by DataTables core.
		 *
		 *  @type object
		 *  @default {}
		 */
		buttons: {},
	
	
		/**
		 * Element class names
		 *
		 *  @type object
		 *  @default {}
		 */
		classes: {},
	
	
		/**
		 * DataTables build type (expanded by the download builder)
		 *
		 *  @type string
		 */
		build:"dt/jq-3.3.1/dt-1.10.21/e-1.9.4",
	
	
		/**
		 * Error reporting.
		 * 
		 * How should DataTables report an error. Can take the value 'alert',
		 * 'throw', 'none' or a function.
		 *
		 *  @type string|function
		 *  @default alert
		 */
		errMode: "alert",
	
	
		/**
		 * Feature plug-ins.
		 * 
		 * This is an array of objects which describe the feature plug-ins that are
		 * available to DataTables. These feature plug-ins are then available for
		 * use through the `dom` initialisation option.
		 * 
		 * Each feature plug-in is described by an object which must have the
		 * following properties:
		 * 
		 * * `fnInit` - function that is used to initialise the plug-in,
		 * * `cFeature` - a character so the feature can be enabled by the `dom`
		 *   instillation option. This is case sensitive.
		 *
		 * The `fnInit` function has the following input parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 *
		 * And the following return is expected:
		 * 
		 * * {node|null} The element which contains your feature. Note that the
		 *   return may also be void if your plug-in does not require to inject any
		 *   DOM elements into DataTables control (`dom`) - for example this might
		 *   be useful when developing a plug-in which allows table control via
		 *   keyboard entry
		 *
		 *  @type array
		 *
		 *  @example
		 *    $.fn.dataTable.ext.features.push( {
		 *      "fnInit": function( oSettings ) {
		 *        return new TableTools( { "oDTSettings": oSettings } );
		 *      },
		 *      "cFeature": "T"
		 *    } );
		 */
		feature: [],
	
	
		/**
		 * Row searching.
		 * 
		 * This method of searching is complimentary to the default type based
		 * searching, and a lot more comprehensive as it allows you complete control
		 * over the searching logic. Each element in this array is a function
		 * (parameters described below) that is called for every row in the table,
		 * and your logic decides if it should be included in the searching data set
		 * or not.
		 *
		 * Searching functions have the following input parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 * 2. `{array|object}` Data for the row to be processed (same as the
		 *    original format that was passed in as the data source, or an array
		 *    from a DOM data source
		 * 3. `{int}` Row index ({@link DataTable.models.oSettings.aoData}), which
		 *    can be useful to retrieve the `TR` element if you need DOM interaction.
		 *
		 * And the following return is expected:
		 *
		 * * {boolean} Include the row in the searched result set (true) or not
		 *   (false)
		 *
		 * Note that as with the main search ability in DataTables, technically this
		 * is "filtering", since it is subtractive. However, for consistency in
		 * naming we call it searching here.
		 *
		 *  @type array
		 *  @default []
		 *
		 *  @example
		 *    // The following example shows custom search being applied to the
		 *    // fourth column (i.e. the data[3] index) based on two input values
		 *    // from the end-user, matching the data in a certain range.
		 *    $.fn.dataTable.ext.search.push(
		 *      function( settings, data, dataIndex ) {
		 *        var min = document.getElementById('min').value * 1;
		 *        var max = document.getElementById('max').value * 1;
		 *        var version = data[3] == "-" ? 0 : data[3]*1;
		 *
		 *        if ( min == "" && max == "" ) {
		 *          return true;
		 *        }
		 *        else if ( min == "" && version < max ) {
		 *          return true;
		 *        }
		 *        else if ( min < version && "" == max ) {
		 *          return true;
		 *        }
		 *        else if ( min < version && version < max ) {
		 *          return true;
		 *        }
		 *        return false;
		 *      }
		 *    );
		 */
		search: [],
	
	
		/**
		 * Selector extensions
		 *
		 * The `selector` option can be used to extend the options available for the
		 * selector modifier options (`selector-modifier` object data type) that
		 * each of the three built in selector types offer (row, column and cell +
		 * their plural counterparts). For example the Select extension uses this
		 * mechanism to provide an option to select only rows, columns and cells
		 * that have been marked as selected by the end user (`{selected: true}`),
		 * which can be used in conjunction with the existing built in selector
		 * options.
		 *
		 * Each property is an array to which functions can be pushed. The functions
		 * take three attributes:
		 *
		 * * Settings object for the host table
		 * * Options object (`selector-modifier` object type)
		 * * Array of selected item indexes
		 *
		 * The return is an array of the resulting item indexes after the custom
		 * selector has been applied.
		 *
		 *  @type object
		 */
		selector: {
			cell: [],
			column: [],
			row: []
		},
	
	
		/**
		 * Internal functions, exposed for used in plug-ins.
		 * 
		 * Please note that you should not need to use the internal methods for
		 * anything other than a plug-in (and even then, try to avoid if possible).
		 * The internal function may change between releases.
		 *
		 *  @type object
		 *  @default {}
		 */
		internal: {},
	
	
		/**
		 * Legacy configuration options. Enable and disable legacy options that
		 * are available in DataTables.
		 *
		 *  @type object
		 */
		legacy: {
			/**
			 * Enable / disable DataTables 1.9 compatible server-side processing
			 * requests
			 *
			 *  @type boolean
			 *  @default null
			 */
			ajax: null
		},
	
	
		/**
		 * Pagination plug-in methods.
		 * 
		 * Each entry in this object is a function and defines which buttons should
		 * be shown by the pagination rendering method that is used for the table:
		 * {@link DataTable.ext.renderer.pageButton}. The renderer addresses how the
		 * buttons are displayed in the document, while the functions here tell it
		 * what buttons to display. This is done by returning an array of button
		 * descriptions (what each button will do).
		 *
		 * Pagination types (the four built in options and any additional plug-in
		 * options defined here) can be used through the `paginationType`
		 * initialisation parameter.
		 *
		 * The functions defined take two parameters:
		 *
		 * 1. `{int} page` The current page index
		 * 2. `{int} pages` The number of pages in the table
		 *
		 * Each function is expected to return an array where each element of the
		 * array can be one of:
		 *
		 * * `first` - Jump to first page when activated
		 * * `last` - Jump to last page when activated
		 * * `previous` - Show previous page when activated
		 * * `next` - Show next page when activated
		 * * `{int}` - Show page of the index given
		 * * `{array}` - A nested array containing the above elements to add a
		 *   containing 'DIV' element (might be useful for styling).
		 *
		 * Note that DataTables v1.9- used this object slightly differently whereby
		 * an object with two functions would be defined for each plug-in. That
		 * ability is still supported by DataTables 1.10+ to provide backwards
		 * compatibility, but this option of use is now decremented and no longer
		 * documented in DataTables 1.10+.
		 *
		 *  @type object
		 *  @default {}
		 *
		 *  @example
		 *    // Show previous, next and current page buttons only
		 *    $.fn.dataTableExt.oPagination.current = function ( page, pages ) {
		 *      return [ 'previous', page, 'next' ];
		 *    };
		 */
		pager: {},
	
	
		renderer: {
			pageButton: {},
			header: {}
		},
	
	
		/**
		 * Ordering plug-ins - custom data source
		 * 
		 * The extension options for ordering of data available here is complimentary
		 * to the default type based ordering that DataTables typically uses. It
		 * allows much greater control over the the data that is being used to
		 * order a column, but is necessarily therefore more complex.
		 * 
		 * This type of ordering is useful if you want to do ordering based on data
		 * live from the DOM (for example the contents of an 'input' element) rather
		 * than just the static string that DataTables knows of.
		 * 
		 * The way these plug-ins work is that you create an array of the values you
		 * wish to be ordering for the column in question and then return that
		 * array. The data in the array much be in the index order of the rows in
		 * the table (not the currently ordering order!). Which order data gathering
		 * function is run here depends on the `dt-init columns.orderDataType`
		 * parameter that is used for the column (if any).
		 *
		 * The functions defined take two parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 * 2. `{int}` Target column index
		 *
		 * Each function is expected to return an array:
		 *
		 * * `{array}` Data for the column to be ordering upon
		 *
		 *  @type array
		 *
		 *  @example
		 *    // Ordering using `input` node values
		 *    $.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )
		 *    {
		 *      return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
		 *        return $('input', td).val();
		 *      } );
		 *    }
		 */
		order: {},
	
	
		/**
		 * Type based plug-ins.
		 *
		 * Each column in DataTables has a type assigned to it, either by automatic
		 * detection or by direct assignment using the `type` option for the column.
		 * The type of a column will effect how it is ordering and search (plug-ins
		 * can also make use of the column type if required).
		 *
		 * @namespace
		 */
		type: {
			/**
			 * Type detection functions.
			 *
			 * The functions defined in this object are used to automatically detect
			 * a column's type, making initialisation of DataTables super easy, even
			 * when complex data is in the table.
			 *
			 * The functions defined take two parameters:
			 *
		     *  1. `{*}` Data from the column cell to be analysed
		     *  2. `{settings}` DataTables settings object. This can be used to
		     *     perform context specific type detection - for example detection
		     *     based on language settings such as using a comma for a decimal
		     *     place. Generally speaking the options from the settings will not
		     *     be required
			 *
			 * Each function is expected to return:
			 *
			 * * `{string|null}` Data type detected, or null if unknown (and thus
			 *   pass it on to the other type detection functions.
			 *
			 *  @type array
			 *
			 *  @example
			 *    // Currency type detection plug-in:
			 *    $.fn.dataTable.ext.type.detect.push(
			 *      function ( data, settings ) {
			 *        // Check the numeric part
			 *        if ( ! data.substring(1).match(/[0-9]/) ) {
			 *          return null;
			 *        }
			 *
			 *        // Check prefixed by currency
			 *        if ( data.charAt(0) == '$' || data.charAt(0) == '&pound;' ) {
			 *          return 'currency';
			 *        }
			 *        return null;
			 *      }
			 *    );
			 */
			detect: [],
	
	
			/**
			 * Type based search formatting.
			 *
			 * The type based searching functions can be used to pre-format the
			 * data to be search on. For example, it can be used to strip HTML
			 * tags or to de-format telephone numbers for numeric only searching.
			 *
			 * Note that is a search is not defined for a column of a given type,
			 * no search formatting will be performed.
			 * 
			 * Pre-processing of searching data plug-ins - When you assign the sType
			 * for a column (or have it automatically detected for you by DataTables
			 * or a type detection plug-in), you will typically be using this for
			 * custom sorting, but it can also be used to provide custom searching
			 * by allowing you to pre-processing the data and returning the data in
			 * the format that should be searched upon. This is done by adding
			 * functions this object with a parameter name which matches the sType
			 * for that target column. This is the corollary of <i>afnSortData</i>
			 * for searching data.
			 *
			 * The functions defined take a single parameter:
			 *
		     *  1. `{*}` Data from the column cell to be prepared for searching
			 *
			 * Each function is expected to return:
			 *
			 * * `{string|null}` Formatted string that will be used for the searching.
			 *
			 *  @type object
			 *  @default {}
			 *
			 *  @example
			 *    $.fn.dataTable.ext.type.search['title-numeric'] = function ( d ) {
			 *      return d.replace(/\n/g," ").replace( /<.*?>/g, "" );
			 *    }
			 */
			search: {},
	
	
			/**
			 * Type based ordering.
			 *
			 * The column type tells DataTables what ordering to apply to the table
			 * when a column is sorted upon. The order for each type that is defined,
			 * is defined by the functions available in this object.
			 *
			 * Each ordering option can be described by three properties added to
			 * this object:
			 *
			 * * `{type}-pre` - Pre-formatting function
			 * * `{type}-asc` - Ascending order function
			 * * `{type}-desc` - Descending order function
			 *
			 * All three can be used together, only `{type}-pre` or only
			 * `{type}-asc` and `{type}-desc` together. It is generally recommended
			 * that only `{type}-pre` is used, as this provides the optimal
			 * implementation in terms of speed, although the others are provided
			 * for compatibility with existing Javascript sort functions.
			 *
			 * `{type}-pre`: Functions defined take a single parameter:
			 *
		     *  1. `{*}` Data from the column cell to be prepared for ordering
			 *
			 * And return:
			 *
			 * * `{*}` Data to be sorted upon
			 *
			 * `{type}-asc` and `{type}-desc`: Functions are typical Javascript sort
			 * functions, taking two parameters:
			 *
		     *  1. `{*}` Data to compare to the second parameter
		     *  2. `{*}` Data to compare to the first parameter
			 *
			 * And returning:
			 *
			 * * `{*}` Ordering match: <0 if first parameter should be sorted lower
			 *   than the second parameter, ===0 if the two parameters are equal and
			 *   >0 if the first parameter should be sorted height than the second
			 *   parameter.
			 * 
			 *  @type object
			 *  @default {}
			 *
			 *  @example
			 *    // Numeric ordering of formatted numbers with a pre-formatter
			 *    $.extend( $.fn.dataTable.ext.type.order, {
			 *      "string-pre": function(x) {
			 *        a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
			 *        return parseFloat( a );
			 *      }
			 *    } );
			 *
			 *  @example
			 *    // Case-sensitive string ordering, with no pre-formatting method
			 *    $.extend( $.fn.dataTable.ext.order, {
			 *      "string-case-asc": function(x,y) {
			 *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			 *      },
			 *      "string-case-desc": function(x,y) {
			 *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
			 *      }
			 *    } );
			 */
			order: {}
		},
	
		/**
		 * Unique DataTables instance counter
		 *
		 * @type int
		 * @private
		 */
		_unique: 0,
	
	
		//
		// Depreciated
		// The following properties are retained for backwards compatiblity only.
		// The should not be used in new projects and will be removed in a future
		// version
		//
	
		/**
		 * Version check function.
		 *  @type function
		 *  @depreciated Since 1.10
		 */
		fnVersionCheck: DataTable.fnVersionCheck,
	
	
		/**
		 * Index for what 'this' index API functions should use
		 *  @type int
		 *  @deprecated Since v1.10
		 */
		iApiIndex: 0,
	
	
		/**
		 * jQuery UI class container
		 *  @type object
		 *  @deprecated Since v1.10
		 */
		oJUIClasses: {},
	
	
		/**
		 * Software version
		 *  @type string
		 *  @deprecated Since v1.10
		 */
		sVersion: DataTable.version
	};
	
	
	//
	// Backwards compatibility. Alias to pre 1.10 Hungarian notation counter parts
	//
	$.extend( _ext, {
		afnFiltering: _ext.search,
		aTypes:       _ext.type.detect,
		ofnSearch:    _ext.type.search,
		oSort:        _ext.type.order,
		afnSortData:  _ext.order,
		aoFeatures:   _ext.feature,
		oApi:         _ext.internal,
		oStdClasses:  _ext.classes,
		oPagination:  _ext.pager
	} );
	
	
	$.extend( DataTable.ext.classes, {
		"sTable": "dataTable",
		"sNoFooter": "no-footer",
	
		/* Paging buttons */
		"sPageButton": "paginate_button",
		"sPageButtonActive": "current",
		"sPageButtonDisabled": "disabled",
	
		/* Striping classes */
		"sStripeOdd": "odd",
		"sStripeEven": "even",
	
		/* Empty row */
		"sRowEmpty": "dataTables_empty",
	
		/* Features */
		"sWrapper": "dataTables_wrapper",
		"sFilter": "dataTables_filter",
		"sInfo": "dataTables_info",
		"sPaging": "dataTables_paginate paging_", /* Note that the type is postfixed */
		"sLength": "dataTables_length",
		"sProcessing": "dataTables_processing",
	
		/* Sorting */
		"sSortAsc": "sorting_asc",
		"sSortDesc": "sorting_desc",
		"sSortable": "sorting", /* Sortable in both directions */
		"sSortableAsc": "sorting_asc_disabled",
		"sSortableDesc": "sorting_desc_disabled",
		"sSortableNone": "sorting_disabled",
		"sSortColumn": "sorting_", /* Note that an int is postfixed for the sorting order */
	
		/* Filtering */
		"sFilterInput": "",
	
		/* Page length */
		"sLengthSelect": "",
	
		/* Scrolling */
		"sScrollWrapper": "dataTables_scroll",
		"sScrollHead": "dataTables_scrollHead",
		"sScrollHeadInner": "dataTables_scrollHeadInner",
		"sScrollBody": "dataTables_scrollBody",
		"sScrollFoot": "dataTables_scrollFoot",
		"sScrollFootInner": "dataTables_scrollFootInner",
	
		/* Misc */
		"sHeaderTH": "",
		"sFooterTH": "",
	
		// Deprecated
		"sSortJUIAsc": "",
		"sSortJUIDesc": "",
		"sSortJUI": "",
		"sSortJUIAscAllowed": "",
		"sSortJUIDescAllowed": "",
		"sSortJUIWrapper": "",
		"sSortIcon": "",
		"sJUIHeader": "",
		"sJUIFooter": ""
	} );
	
	
	var extPagination = DataTable.ext.pager;
	
	function _numbers ( page, pages ) {
		var
			numbers = [],
			buttons = extPagination.numbers_length,
			half = Math.floor( buttons / 2 ),
			i = 1;
	
		if ( pages <= buttons ) {
			numbers = _range( 0, pages );
		}
		else if ( page <= half ) {
			numbers = _range( 0, buttons-2 );
			numbers.push( 'ellipsis' );
			numbers.push( pages-1 );
		}
		else if ( page >= pages - 1 - half ) {
			numbers = _range( pages-(buttons-2), pages );
			numbers.splice( 0, 0, 'ellipsis' ); // no unshift in ie6
			numbers.splice( 0, 0, 0 );
		}
		else {
			numbers = _range( page-half+2, page+half-1 );
			numbers.push( 'ellipsis' );
			numbers.push( pages-1 );
			numbers.splice( 0, 0, 'ellipsis' );
			numbers.splice( 0, 0, 0 );
		}
	
		numbers.DT_el = 'span';
		return numbers;
	}
	
	
	$.extend( extPagination, {
		simple: function ( page, pages ) {
			return [ 'previous', 'next' ];
		},
	
		full: function ( page, pages ) {
			return [  'first', 'previous', 'next', 'last' ];
		},
	
		numbers: function ( page, pages ) {
			return [ _numbers(page, pages) ];
		},
	
		simple_numbers: function ( page, pages ) {
			return [ 'previous', _numbers(page, pages), 'next' ];
		},
	
		full_numbers: function ( page, pages ) {
			return [ 'first', 'previous', _numbers(page, pages), 'next', 'last' ];
		},
		
		first_last_numbers: function (page, pages) {
	 		return ['first', _numbers(page, pages), 'last'];
	 	},
	
		// For testing and plug-ins to use
		_numbers: _numbers,
	
		// Number of number buttons (including ellipsis) to show. _Must be odd!_
		numbers_length: 7
	} );
	
	
	$.extend( true, DataTable.ext.renderer, {
		pageButton: {
			_: function ( settings, host, idx, buttons, page, pages ) {
				var classes = settings.oClasses;
				var lang = settings.oLanguage.oPaginate;
				var aria = settings.oLanguage.oAria.paginate || {};
				var btnDisplay, btnClass, counter=0;
	
				var attach = function( container, buttons ) {
					var i, ien, node, button, tabIndex;
					var disabledClass = classes.sPageButtonDisabled;
					var clickHandler = function ( e ) {
						_fnPageChange( settings, e.data.action, true );
					};
	
					for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
						button = buttons[i];
	
						if ( $.isArray( button ) ) {
							var inner = $( '<'+(button.DT_el || 'div')+'/>' )
								.appendTo( container );
							attach( inner, button );
						}
						else {
							btnDisplay = null;
							btnClass = button;
							tabIndex = settings.iTabIndex;
	
							switch ( button ) {
								case 'ellipsis':
									container.append('<span class="ellipsis">&#x2026;</span>');
									break;
	
								case 'first':
									btnDisplay = lang.sFirst;
	
									if ( page === 0 ) {
										tabIndex = -1;
										btnClass += ' ' + disabledClass;
									}
									break;
	
								case 'previous':
									btnDisplay = lang.sPrevious;
	
									if ( page === 0 ) {
										tabIndex = -1;
										btnClass += ' ' + disabledClass;
									}
									break;
	
								case 'next':
									btnDisplay = lang.sNext;
	
									if ( pages === 0 || page === pages-1 ) {
										tabIndex = -1;
										btnClass += ' ' + disabledClass;
									}
									break;
	
								case 'last':
									btnDisplay = lang.sLast;
	
									if ( page === pages-1 ) {
										tabIndex = -1;
										btnClass += ' ' + disabledClass;
									}
									break;
	
								default:
									btnDisplay = button + 1;
									btnClass = page === button ?
										classes.sPageButtonActive : '';
									break;
							}
	
							if ( btnDisplay !== null ) {
								node = $('<a>', {
										'class': classes.sPageButton+' '+btnClass,
										'aria-controls': settings.sTableId,
										'aria-label': aria[ button ],
										'data-dt-idx': counter,
										'tabindex': tabIndex,
										'id': idx === 0 && typeof button === 'string' ?
											settings.sTableId +'_'+ button :
											null
									} )
									.html( btnDisplay )
									.appendTo( container );
	
								_fnBindAction(
									node, {action: button}, clickHandler
								);
	
								counter++;
							}
						}
					}
				};
	
				// IE9 throws an 'unknown error' if document.activeElement is used
				// inside an iframe or frame. Try / catch the error. Not good for
				// accessibility, but neither are frames.
				var activeEl;
	
				try {
					// Because this approach is destroying and recreating the paging
					// elements, focus is lost on the select button which is bad for
					// accessibility. So we want to restore focus once the draw has
					// completed
					activeEl = $(host).find(document.activeElement).data('dt-idx');
				}
				catch (e) {}
	
				attach( $(host).empty(), buttons );
	
				if ( activeEl !== undefined ) {
					$(host).find( '[data-dt-idx='+activeEl+']' ).trigger('focus');
				}
			}
		}
	} );
	
	
	
	// Built in type detection. See model.ext.aTypes for information about
	// what is required from this methods.
	$.extend( DataTable.ext.type.detect, [
		// Plain numbers - first since V8 detects some plain numbers as dates
		// e.g. Date.parse('55') (but not all, e.g. Date.parse('22')...).
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _isNumber( d, decimal ) ? 'num'+decimal : null;
		},
	
		// Dates (only those recognised by the browser's Date.parse)
		function ( d, settings )
		{
			// V8 tries _very_ hard to make a string passed into `Date.parse()`
			// valid, so we need to use a regex to restrict date formats. Use a
			// plug-in for anything other than ISO8601 style strings
			if ( d && !(d instanceof Date) && ! _re_date.test(d) ) {
				return null;
			}
			var parsed = Date.parse(d);
			return (parsed !== null && !isNaN(parsed)) || _empty(d) ? 'date' : null;
		},
	
		// Formatted numbers
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _isNumber( d, decimal, true ) ? 'num-fmt'+decimal : null;
		},
	
		// HTML numeric
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _htmlNumeric( d, decimal ) ? 'html-num'+decimal : null;
		},
	
		// HTML numeric, formatted
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _htmlNumeric( d, decimal, true ) ? 'html-num-fmt'+decimal : null;
		},
	
		// HTML (this is strict checking - there must be html)
		function ( d, settings )
		{
			return _empty( d ) || (typeof d === 'string' && d.indexOf('<') !== -1) ?
				'html' : null;
		}
	] );
	
	
	
	// Filter formatting functions. See model.ext.ofnSearch for information about
	// what is required from these methods.
	// 
	// Note that additional search methods are added for the html numbers and
	// html formatted numbers by `_addNumericSort()` when we know what the decimal
	// place is
	
	
	$.extend( DataTable.ext.type.search, {
		html: function ( data ) {
			return _empty(data) ?
				data :
				typeof data === 'string' ?
					data
						.replace( _re_new_lines, " " )
						.replace( _re_html, "" ) :
					'';
		},
	
		string: function ( data ) {
			return _empty(data) ?
				data :
				typeof data === 'string' ?
					data.replace( _re_new_lines, " " ) :
					data;
		}
	} );
	
	
	
	var __numericReplace = function ( d, decimalPlace, re1, re2 ) {
		if ( d !== 0 && (!d || d === '-') ) {
			return -Infinity;
		}
	
		// If a decimal place other than `.` is used, it needs to be given to the
		// function so we can detect it and replace with a `.` which is the only
		// decimal place Javascript recognises - it is not locale aware.
		if ( decimalPlace ) {
			d = _numToDecimal( d, decimalPlace );
		}
	
		if ( d.replace ) {
			if ( re1 ) {
				d = d.replace( re1, '' );
			}
	
			if ( re2 ) {
				d = d.replace( re2, '' );
			}
		}
	
		return d * 1;
	};
	
	
	// Add the numeric 'deformatting' functions for sorting and search. This is done
	// in a function to provide an easy ability for the language options to add
	// additional methods if a non-period decimal place is used.
	function _addNumericSort ( decimalPlace ) {
		$.each(
			{
				// Plain numbers
				"num": function ( d ) {
					return __numericReplace( d, decimalPlace );
				},
	
				// Formatted numbers
				"num-fmt": function ( d ) {
					return __numericReplace( d, decimalPlace, _re_formatted_numeric );
				},
	
				// HTML numeric
				"html-num": function ( d ) {
					return __numericReplace( d, decimalPlace, _re_html );
				},
	
				// HTML numeric, formatted
				"html-num-fmt": function ( d ) {
					return __numericReplace( d, decimalPlace, _re_html, _re_formatted_numeric );
				}
			},
			function ( key, fn ) {
				// Add the ordering method
				_ext.type.order[ key+decimalPlace+'-pre' ] = fn;
	
				// For HTML types add a search formatter that will strip the HTML
				if ( key.match(/^html\-/) ) {
					_ext.type.search[ key+decimalPlace ] = _ext.type.search.html;
				}
			}
		);
	}
	
	
	// Default sort methods
	$.extend( _ext.type.order, {
		// Dates
		"date-pre": function ( d ) {
			var ts = Date.parse( d );
			return isNaN(ts) ? -Infinity : ts;
		},
	
		// html
		"html-pre": function ( a ) {
			return _empty(a) ?
				'' :
				a.replace ?
					a.replace( /<.*?>/g, "" ).toLowerCase() :
					a+'';
		},
	
		// string
		"string-pre": function ( a ) {
			// This is a little complex, but faster than always calling toString,
			// http://jsperf.com/tostring-v-check
			return _empty(a) ?
				'' :
				typeof a === 'string' ?
					a.toLowerCase() :
					! a.toString ?
						'' :
						a.toString();
		},
	
		// string-asc and -desc are retained only for compatibility with the old
		// sort methods
		"string-asc": function ( x, y ) {
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		},
	
		"string-desc": function ( x, y ) {
			return ((x < y) ? 1 : ((x > y) ? -1 : 0));
		}
	} );
	
	
	// Numeric sorting types - order doesn't matter here
	_addNumericSort( '' );
	
	
	$.extend( true, DataTable.ext.renderer, {
		header: {
			_: function ( settings, cell, column, classes ) {
				// No additional mark-up required
				// Attach a sort listener to update on sort - note that using the
				// `DT` namespace will allow the event to be removed automatically
				// on destroy, while the `dt` namespaced event is the one we are
				// listening for
				$(settings.nTable).on( 'order.dt.DT', function ( e, ctx, sorting, columns ) {
					if ( settings !== ctx ) { // need to check this this is the host
						return;               // table, not a nested one
					}
	
					var colIdx = column.idx;
	
					cell
						.removeClass(
							column.sSortingClass +' '+
							classes.sSortAsc +' '+
							classes.sSortDesc
						)
						.addClass( columns[ colIdx ] == 'asc' ?
							classes.sSortAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortDesc :
								column.sSortingClass
						);
				} );
			},
	
			jqueryui: function ( settings, cell, column, classes ) {
				$('<div/>')
					.addClass( classes.sSortJUIWrapper )
					.append( cell.contents() )
					.append( $('<span/>')
						.addClass( classes.sSortIcon+' '+column.sSortingClassJUI )
					)
					.appendTo( cell );
	
				// Attach a sort listener to update on sort
				$(settings.nTable).on( 'order.dt.DT', function ( e, ctx, sorting, columns ) {
					if ( settings !== ctx ) {
						return;
					}
	
					var colIdx = column.idx;
	
					cell
						.removeClass( classes.sSortAsc +" "+classes.sSortDesc )
						.addClass( columns[ colIdx ] == 'asc' ?
							classes.sSortAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortDesc :
								column.sSortingClass
						);
	
					cell
						.find( 'span.'+classes.sSortIcon )
						.removeClass(
							classes.sSortJUIAsc +" "+
							classes.sSortJUIDesc +" "+
							classes.sSortJUI +" "+
							classes.sSortJUIAscAllowed +" "+
							classes.sSortJUIDescAllowed
						)
						.addClass( columns[ colIdx ] == 'asc' ?
							classes.sSortJUIAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortJUIDesc :
								column.sSortingClassJUI
						);
				} );
			}
		}
	} );
	
	/*
	 * Public helper functions. These aren't used internally by DataTables, or
	 * called by any of the options passed into DataTables, but they can be used
	 * externally by developers working with DataTables. They are helper functions
	 * to make working with DataTables a little bit easier.
	 */
	
	var __htmlEscapeEntities = function ( d ) {
		return typeof d === 'string' ?
			d
				.replace(/&/g, '&amp;')
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				.replace(/"/g, '&quot;') :
			d;
	};
	
	/**
	 * Helpers for `columns.render`.
	 *
	 * The options defined here can be used with the `columns.render` initialisation
	 * option to provide a display renderer. The following functions are defined:
	 *
	 * * `number` - Will format numeric data (defined by `columns.data`) for
	 *   display, retaining the original unformatted data for sorting and filtering.
	 *   It takes 5 parameters:
	 *   * `string` - Thousands grouping separator
	 *   * `string` - Decimal point indicator
	 *   * `integer` - Number of decimal points to show
	 *   * `string` (optional) - Prefix.
	 *   * `string` (optional) - Postfix (/suffix).
	 * * `text` - Escape HTML to help prevent XSS attacks. It has no optional
	 *   parameters.
	 *
	 * @example
	 *   // Column definition using the number renderer
	 *   {
	 *     data: "salary",
	 *     render: $.fn.dataTable.render.number( '\'', '.', 0, '$' )
	 *   }
	 *
	 * @namespace
	 */
	DataTable.render = {
		number: function ( thousands, decimal, precision, prefix, postfix ) {
			return {
				display: function ( d ) {
					if ( typeof d !== 'number' && typeof d !== 'string' ) {
						return d;
					}
	
					var negative = d < 0 ? '-' : '';
					var flo = parseFloat( d );
	
					// If NaN then there isn't much formatting that we can do - just
					// return immediately, escaping any HTML (this was supposed to
					// be a number after all)
					if ( isNaN( flo ) ) {
						return __htmlEscapeEntities( d );
					}
	
					flo = flo.toFixed( precision );
					d = Math.abs( flo );
	
					var intPart = parseInt( d, 10 );
					var floatPart = precision ?
						decimal+(d - intPart).toFixed( precision ).substring( 2 ):
						'';
	
					return negative + (prefix||'') +
						intPart.toString().replace(
							/\B(?=(\d{3})+(?!\d))/g, thousands
						) +
						floatPart +
						(postfix||'');
				}
			};
		},
	
		text: function () {
			return {
				display: __htmlEscapeEntities,
				filter: __htmlEscapeEntities
			};
		}
	};
	
	
	/*
	 * This is really a good bit rubbish this method of exposing the internal methods
	 * publicly... - To be fixed in 2.0 using methods on the prototype
	 */
	
	
	/**
	 * Create a wrapper function for exporting an internal functions to an external API.
	 *  @param {string} fn API function name
	 *  @returns {function} wrapped function
	 *  @memberof DataTable#internal
	 */
	function _fnExternApiFunc (fn)
	{
		return function() {
			var args = [_fnSettingsFromNode( this[DataTable.ext.iApiIndex] )].concat(
				Array.prototype.slice.call(arguments)
			);
			return DataTable.ext.internal[fn].apply( this, args );
		};
	}
	
	
	/**
	 * Reference to internal functions for use by plug-in developers. Note that
	 * these methods are references to internal functions and are considered to be
	 * private. If you use these methods, be aware that they are liable to change
	 * between versions.
	 *  @namespace
	 */
	$.extend( DataTable.ext.internal, {
		_fnExternApiFunc: _fnExternApiFunc,
		_fnBuildAjax: _fnBuildAjax,
		_fnAjaxUpdate: _fnAjaxUpdate,
		_fnAjaxParameters: _fnAjaxParameters,
		_fnAjaxUpdateDraw: _fnAjaxUpdateDraw,
		_fnAjaxDataSrc: _fnAjaxDataSrc,
		_fnAddColumn: _fnAddColumn,
		_fnColumnOptions: _fnColumnOptions,
		_fnAdjustColumnSizing: _fnAdjustColumnSizing,
		_fnVisibleToColumnIndex: _fnVisibleToColumnIndex,
		_fnColumnIndexToVisible: _fnColumnIndexToVisible,
		_fnVisbleColumns: _fnVisbleColumns,
		_fnGetColumns: _fnGetColumns,
		_fnColumnTypes: _fnColumnTypes,
		_fnApplyColumnDefs: _fnApplyColumnDefs,
		_fnHungarianMap: _fnHungarianMap,
		_fnCamelToHungarian: _fnCamelToHungarian,
		_fnLanguageCompat: _fnLanguageCompat,
		_fnBrowserDetect: _fnBrowserDetect,
		_fnAddData: _fnAddData,
		_fnAddTr: _fnAddTr,
		_fnNodeToDataIndex: _fnNodeToDataIndex,
		_fnNodeToColumnIndex: _fnNodeToColumnIndex,
		_fnGetCellData: _fnGetCellData,
		_fnSetCellData: _fnSetCellData,
		_fnSplitObjNotation: _fnSplitObjNotation,
		_fnGetObjectDataFn: _fnGetObjectDataFn,
		_fnSetObjectDataFn: _fnSetObjectDataFn,
		_fnGetDataMaster: _fnGetDataMaster,
		_fnClearTable: _fnClearTable,
		_fnDeleteIndex: _fnDeleteIndex,
		_fnInvalidate: _fnInvalidate,
		_fnGetRowElements: _fnGetRowElements,
		_fnCreateTr: _fnCreateTr,
		_fnBuildHead: _fnBuildHead,
		_fnDrawHead: _fnDrawHead,
		_fnDraw: _fnDraw,
		_fnReDraw: _fnReDraw,
		_fnAddOptionsHtml: _fnAddOptionsHtml,
		_fnDetectHeader: _fnDetectHeader,
		_fnGetUniqueThs: _fnGetUniqueThs,
		_fnFeatureHtmlFilter: _fnFeatureHtmlFilter,
		_fnFilterComplete: _fnFilterComplete,
		_fnFilterCustom: _fnFilterCustom,
		_fnFilterColumn: _fnFilterColumn,
		_fnFilter: _fnFilter,
		_fnFilterCreateSearch: _fnFilterCreateSearch,
		_fnEscapeRegex: _fnEscapeRegex,
		_fnFilterData: _fnFilterData,
		_fnFeatureHtmlInfo: _fnFeatureHtmlInfo,
		_fnUpdateInfo: _fnUpdateInfo,
		_fnInfoMacros: _fnInfoMacros,
		_fnInitialise: _fnInitialise,
		_fnInitComplete: _fnInitComplete,
		_fnLengthChange: _fnLengthChange,
		_fnFeatureHtmlLength: _fnFeatureHtmlLength,
		_fnFeatureHtmlPaginate: _fnFeatureHtmlPaginate,
		_fnPageChange: _fnPageChange,
		_fnFeatureHtmlProcessing: _fnFeatureHtmlProcessing,
		_fnProcessingDisplay: _fnProcessingDisplay,
		_fnFeatureHtmlTable: _fnFeatureHtmlTable,
		_fnScrollDraw: _fnScrollDraw,
		_fnApplyToChildren: _fnApplyToChildren,
		_fnCalculateColumnWidths: _fnCalculateColumnWidths,
		_fnThrottle: _fnThrottle,
		_fnConvertToWidth: _fnConvertToWidth,
		_fnGetWidestNode: _fnGetWidestNode,
		_fnGetMaxLenString: _fnGetMaxLenString,
		_fnStringToCss: _fnStringToCss,
		_fnSortFlatten: _fnSortFlatten,
		_fnSort: _fnSort,
		_fnSortAria: _fnSortAria,
		_fnSortListener: _fnSortListener,
		_fnSortAttachListener: _fnSortAttachListener,
		_fnSortingClasses: _fnSortingClasses,
		_fnSortData: _fnSortData,
		_fnSaveState: _fnSaveState,
		_fnLoadState: _fnLoadState,
		_fnSettingsFromNode: _fnSettingsFromNode,
		_fnLog: _fnLog,
		_fnMap: _fnMap,
		_fnBindAction: _fnBindAction,
		_fnCallbackReg: _fnCallbackReg,
		_fnCallbackFire: _fnCallbackFire,
		_fnLengthOverflow: _fnLengthOverflow,
		_fnRenderer: _fnRenderer,
		_fnDataSource: _fnDataSource,
		_fnRowAttributes: _fnRowAttributes,
		_fnExtend: _fnExtend,
		_fnCalculateEnd: function () {} // Used by a lot of plug-ins, but redundant
		                                // in 1.10, so this dead-end function is
		                                // added to prevent errors
	} );
	

	// jQuery access
	$.fn.dataTable = DataTable;

	// Provide access to the host jQuery object (circular reference)
	DataTable.$ = $;

	// Legacy aliases
	$.fn.dataTableSettings = DataTable.settings;
	$.fn.dataTableExt = DataTable.ext;

	// With a capital `D` we return a DataTables API instance rather than a
	// jQuery object
	$.fn.DataTable = function ( opts ) {
		return $(this).dataTable( opts ).api();
	};

	// All properties that are available to $.fn.dataTable should also be
	// available on $.fn.DataTable
	$.each( DataTable, function ( prop, val ) {
		$.fn.DataTable[ prop ] = val;
	} );


	// Information about events fired by DataTables - for documentation.
	/**
	 * Draw event, fired whenever the table is redrawn on the page, at the same
	 * point as fnDrawCallback. This may be useful for binding events or
	 * performing calculations when the table is altered at all.
	 *  @name DataTable#draw.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Search event, fired when the searching applied to the table (using the
	 * built-in global search, or column filters) is altered.
	 *  @name DataTable#search.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Page change event, fired when the paging of the table is altered.
	 *  @name DataTable#page.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Order event, fired when the ordering applied to the table is altered.
	 *  @name DataTable#order.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * DataTables initialisation complete event, fired when the table is fully
	 * drawn, including Ajax data loaded, if Ajax data is required.
	 *  @name DataTable#init.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The JSON object request from the server - only
	 *    present if client-side Ajax sourced data is used</li></ol>
	 */

	/**
	 * State save event, fired when the table has changed state a new state save
	 * is required. This event allows modification of the state saving object
	 * prior to actually doing the save, including addition or other state
	 * properties (for plug-ins) or modification of a DataTables core property.
	 *  @name DataTable#stateSaveParams.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The state information to be saved
	 */

	/**
	 * State load event, fired when the table is loading state from the stored
	 * data, but prior to the settings object being modified by the saved state
	 * - allowing modification of the saved state is required or loading of
	 * state for a plug-in.
	 *  @name DataTable#stateLoadParams.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The saved state information
	 */

	/**
	 * State loaded event, fired when state has been loaded from stored data and
	 * the settings object has been modified by the loaded data.
	 *  @name DataTable#stateLoaded.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The saved state information
	 */

	/**
	 * Processing event, fired when DataTables is doing some kind of processing
	 * (be it, order, search or anything else). It can be used to indicate to
	 * the end user that there is something happening, or that something has
	 * finished.
	 *  @name DataTable#processing.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {boolean} bShow Flag for if DataTables is doing processing or not
	 */

	/**
	 * Ajax (XHR) event, fired whenever an Ajax request is completed from a
	 * request to made to the server for new data. This event is called before
	 * DataTables processed the returned data, so it can also be used to pre-
	 * process the data returned from the server, if needed.
	 *
	 * Note that this trigger is called in `fnServerData`, if you override
	 * `fnServerData` and which to use this event, you need to trigger it in you
	 * success function.
	 *  @name DataTable#xhr.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 *  @param {object} json JSON returned from the server
	 *
	 *  @example
	 *     // Use a custom property returned from the server in another DOM element
	 *     $('#table').dataTable().on('xhr.dt', function (e, settings, json) {
	 *       $('#status').html( json.status );
	 *     } );
	 *
	 *  @example
	 *     // Pre-process the data returned from the server
	 *     $('#table').dataTable().on('xhr.dt', function (e, settings, json) {
	 *       for ( var i=0, ien=json.aaData.length ; i<ien ; i++ ) {
	 *         json.aaData[i].sum = json.aaData[i].one + json.aaData[i].two;
	 *       }
	 *       // Note no return - manipulate the data directly in the JSON object.
	 *     } );
	 */

	/**
	 * Destroy event, fired when the DataTable is destroyed by calling fnDestroy
	 * or passing the bDestroy:true parameter in the initialisation object. This
	 * can be used to remove bound events, added DOM nodes, etc.
	 *  @name DataTable#destroy.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Page length change event, fired when number of records to show on each
	 * page (the length) is changed.
	 *  @name DataTable#length.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 *  @param {integer} len New length
	 */

	/**
	 * Column sizing has changed.
	 *  @name DataTable#column-sizing.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Column visibility has changed.
	 *  @name DataTable#column-visibility.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 *  @param {int} column Column index
	 *  @param {bool} vis `false` if column now hidden, or `true` if visible
	 */

	return $.fn.dataTable;
}));


/*!
 * File:        dataTables.editor.min.js
 * Version:     1.9.4
 * Author:      SpryMedia (www.sprymedia.co.uk)
 * Info:        http://editor.datatables.net
 * 
 * Copyright 2012-2020 SpryMedia Limited, all rights reserved.
 * License: DataTables Editor - http://editor.datatables.net/license
 */

 // Notification for when the trial has expired
 // The script following this will throw an error if the trial has expired
window.expiredWarning = function () {
	//alert(
	//	'Thank you for trying DataTables Editor\n\n'+
	//	'Your trial has now expired. To purchase a license '+
	//	'for Editor, please see https://editor.datatables.net/purchase'
	//);
};

p8FF.p=(function(){var K=2;for(;K !== 9;){switch(K){case 5:var p;try{var n=2;for(;n !== 6;){switch(n){case 1:p=V8PlI;p['\x6e\u0031\x32\x32\x74']=p;n=4;break;case 3:throw "";n=9;break;case 2:Object['\x64\x65\u0066\x69\x6e\x65\x50\u0072\u006f\x70\x65\u0072\x74\u0079'](Object['\u0070\u0072\x6f\x74\x6f\x74\x79\u0070\x65'],'\x56\u0038\u0050\x6c\x49',{'\x67\x65\x74':function(){var C=2;for(;C !== 1;){switch(C){case 2:return this;break;}}},'\x63\x6f\x6e\x66\x69\x67\x75\x72\x61\x62\x6c\x65':true});n=1;break;case 4:n=typeof n122t === '\x75\x6e\x64\x65\u0066\x69\x6e\u0065\x64'?3:9;break;case 9:delete p['\x6e\u0031\x32\x32\x74'];var O=Object['\x70\u0072\u006f\u0074\u006f\u0074\x79\u0070\x65'];delete O['\x56\x38\u0050\x6c\u0049'];n=6;break;}}}catch(N){p=window;}return p;break;case 2:K=typeof globalThis === '\u006f\x62\u006a\u0065\x63\x74'?1:5;break;case 1:return globalThis;break;}}})();;n9LL(p8FF.p);T7rr(p8FF.p);p8FF.h6d=(function(){var d6d=2;for(;d6d !== 9;){switch(d6d){case 2:var q6d=[arguments];q6d[5]=undefined;q6d[9]={};d6d=4;break;case 4:q6d[9].E7f=function(){var L6d=2;for(;L6d !== 145;){switch(L6d){case 54:i6d[19]={};i6d[19].I9u=['m9u'];i6d[19].K9u=function(){var R6f=function(){return ('x').toLocaleUpperCase();};var u6f=(/\x58/).R7rr(R6f + []);return u6f;};i6d[31]=i6d[19];L6d=50;break;case 55:i6d[35]={};i6d[35].I9u=['m9u'];L6d=76;break;case 124:i6d[71]=0;L6d=123;break;case 7:i6d[8]=i6d[3];i6d[1]={};i6d[1].I9u=['p9u'];i6d[1].K9u=function(){var t7f=function(){'use stirct';return 1;};var k7f=!(/\x73\u0074\u0069\u0072\u0063\x74/).R7rr(t7f + []);return k7f;};i6d[6]=i6d[1];i6d[5]={};i6d[5].I9u=['L2u'];L6d=20;break;case 31:i6d[38]=i6d[23];i6d[70]={};i6d[70].I9u=['M9u'];i6d[70].K9u=function(){var x6f=function(){return new RegExp('/ /');};var y6f=(typeof x6f,!(/\x6e\x65\u0077/).R7rr(x6f + []));return y6f;};L6d=44;break;case 127:L6d=i6d[37] < i6d[9].length?126:149;break;case 38:i6d[39].I9u=['L2u'];i6d[39].K9u=function(){var j6f=typeof u7rr === 'function';return j6f;};i6d[17]=i6d[39];L6d=54;break;case 66:i6d[89]={};i6d[89].I9u=['m9u'];i6d[89].K9u=function(){var l6f=function(){return ['a','a'].join();};var N6f=!(/(\u005b|\x5d)/).R7rr(l6f + []);return N6f;};i6d[49]=i6d[89];L6d=87;break;case 2:var i6d=[arguments];L6d=1;break;case 41:i6d[20].K9u=function(){var h6f=function(){return decodeURI('%25');};var g6f=!(/\x32\x35/).R7rr(h6f + []);return g6f;};i6d[29]=i6d[20];i6d[39]={};L6d=38;break;case 135:i6d[86]=[];i6d[45]='h9u';i6d[34]='L9u';i6d[40]='I9u';i6d[16]='r9u';i6d[83]='K9u';i6d[85]='O9u';L6d=128;break;case 148:L6d=34?148:147;break;case 4:i6d[9]=[];i6d[3]={};i6d[3].I9u=['M9u'];i6d[3].K9u=function(){var i7f=function(P7f,o7f){if(P7f){return P7f;}return o7f;};var c7f=(/\u003f/).R7rr(i7f + []);return c7f;};L6d=7;break;case 1:L6d=q6d[5]?5:4;break;case 65:i6d[65].K9u=function(){var b6f=function(){if(false){console.log(1);}};var I6f=!(/\x31/).R7rr(b6f + []);return I6f;};i6d[51]=i6d[65];i6d[61]={};i6d[61].I9u=['p9u'];i6d[61].K9u=function(){var B6f=function(){debugger;};var r6f=!(/\u0064\u0065\u0062\u0075\u0067\u0067\x65\u0072/).R7rr(B6f + []);return r6f;};L6d=60;break;case 50:i6d[13]={};i6d[13].I9u=['M9u'];i6d[13].K9u=function(){var Z6f=function(){return parseInt("0xff");};var U6f=!(/\u0078/).R7rr(Z6f + []);return U6f;};L6d=47;break;case 74:i6d[80]={};i6d[80].I9u=['m9u'];i6d[80].K9u=function(){var K6f=function(){return ('a').anchor('b');};var q6f=(/(\u003c|\x3e)/).R7rr(K6f + []);return q6f;};i6d[99]=i6d[80];L6d=70;break;case 76:i6d[35].K9u=function(){var e6f=function(){return decodeURIComponent('%25');};var a6f=!(/\x32\u0035/).R7rr(e6f + []);return a6f;};i6d[27]=i6d[35];L6d=74;break;case 44:i6d[63]=i6d[70];i6d[20]={};i6d[20].I9u=['m9u'];L6d=41;break;case 147:q6d[5]=35;return 63;break;case 47:i6d[87]=i6d[13];i6d[65]={};i6d[65].I9u=['p9u'];L6d=65;break;case 26:i6d[44].I9u=['p9u'];i6d[44].K9u=function(){var n7f=function(E6f,L6f,V6f){return ! !E6f?L6f:V6f;};var H7f=!(/\u0021/).R7rr(n7f + []);return H7f;};i6d[74]=i6d[44];i6d[79]={};i6d[79].I9u=['M9u','p9u'];i6d[79].K9u=function(){var M6f=function(){return 1024 * 1024;};var Y6f=(/[5-8]/).R7rr(M6f + []);return Y6f;};L6d=35;break;case 151:i6d[71]++;L6d=123;break;case 80:i6d[18]=i6d[78];i6d[28]={};i6d[28].I9u=['L2u'];i6d[28].K9u=function(){var i6f=typeof b7rr === 'function';return i6f;};i6d[26]=i6d[28];i6d[57]={};i6d[57].I9u=['M9u'];L6d=100;break;case 87:i6d[43]={};i6d[43].I9u=['p9u'];i6d[43].K9u=function(){var O6f=function(){var D6f;switch(D6f){case 0:break;}};var J6f=!(/\u0030/).R7rr(O6f + []);return J6f;};i6d[58]=i6d[43];i6d[78]={};i6d[78].I9u=['L2u'];i6d[78].K9u=function(){var f6f=typeof U7rr === 'function';return f6f;};L6d=80;break;case 122:i6d[76]={};i6d[76][i6d[85]]=i6d[15][i6d[40]][i6d[71]];i6d[76][i6d[16]]=i6d[42];i6d[86].Z7rr(i6d[76]);L6d=151;break;case 98:i6d[9].Z7rr(i6d[87]);i6d[9].Z7rr(i6d[27]);i6d[9].Z7rr(i6d[74]);i6d[9].Z7rr(i6d[38]);L6d=94;break;case 119:i6d[9].Z7rr(i6d[4]);i6d[9].Z7rr(i6d[88]);i6d[9].Z7rr(i6d[26]);i6d[9].Z7rr(i6d[7]);L6d=115;break;case 126:i6d[15]=i6d[9][i6d[37]];try{i6d[42]=i6d[15][i6d[83]]()?i6d[45]:i6d[34];}catch(o6f){i6d[42]=i6d[34];}L6d=124;break;case 100:i6d[57].K9u=function(){var c6f=function(){return ("01").substr(1);};var P6f=!(/\u0030/).R7rr(c6f + []);return P6f;};i6d[22]=i6d[57];L6d=98;break;case 70:i6d[36]={};i6d[36].I9u=['M9u'];i6d[36].K9u=function(){var T6f=function(){if(typeof [] !== 'object')var X6f=/aa/;};var A6f=!(/\x61\x61/).R7rr(T6f + []);return A6f;};i6d[88]=i6d[36];L6d=66;break;case 17:i6d[2].I9u=['M9u'];i6d[2].K9u=function(){var p7f=function(){return ("01").substring(1);};var d7f=!(/\u0030/).R7rr(p7f + []);return d7f;};i6d[4]=i6d[2];i6d[44]={};L6d=26;break;case 149:L6d=(function(C6d){var s6d=2;for(;s6d !== 22;){switch(s6d){case 1:s6d=v6d[0][0].length === 0?5:4;break;case 23:return v6d[9];break;case 16:s6d=v6d[1] < v6d[5].length?15:23;break;case 26:s6d=v6d[2] >= 0.5?25:24;break;case 7:s6d=v6d[1] < v6d[0][0].length?6:18;break;case 6:v6d[8]=v6d[0][0][v6d[1]];s6d=14;break;case 14:s6d=typeof v6d[3][v6d[8][i6d[85]]] === 'undefined'?13:11;break;case 13:v6d[3][v6d[8][i6d[85]]]=(function(){var t6d=2;for(;t6d !== 9;){switch(t6d){case 2:var M6d=[arguments];M6d[3]={};M6d[3].h=0;M6d[3].t=0;return M6d[3];break;}}}).I7rr(this,arguments);s6d=12;break;case 25:v6d[9]=true;s6d=24;break;case 24:v6d[1]++;s6d=16;break;case 11:v6d[3][v6d[8][i6d[85]]].t+=true;s6d=10;break;case 18:v6d[9]=false;s6d=17;break;case 19:v6d[1]++;s6d=7;break;case 10:s6d=v6d[8][i6d[16]] === i6d[45]?20:19;break;case 20:v6d[3][v6d[8][i6d[85]]].h+=true;s6d=19;break;case 17:v6d[1]=0;s6d=16;break;case 15:v6d[4]=v6d[5][v6d[1]];v6d[2]=v6d[3][v6d[4]].h / v6d[3][v6d[4]].t;s6d=26;break;case 12:v6d[5].Z7rr(v6d[8][i6d[85]]);s6d=11;break;case 5:return;break;case 4:v6d[3]={};v6d[5]=[];v6d[1]=0;s6d=8;break;case 2:var v6d=[arguments];s6d=1;break;case 8:v6d[1]=0;s6d=7;break;}}})(i6d[86])?148:147;break;case 20:i6d[5].K9u=function(){function s7f(W7f,v7f){return W7f + v7f;};var m7f=(/\u006f\x6e[\u180e\n\u2000-\u200a\t\r\u202f\ufeff\u1680\f\u205f\u2029\u2028\u00a0\v\u3000 ]{0,}\u0028/).R7rr(s7f + []);return m7f;};i6d[7]=i6d[5];i6d[2]={};L6d=17;break;case 59:i6d[82]={};i6d[82].I9u=['L2u'];i6d[82].K9u=function(){var z6f=false;var F6f=[];try{for(var Q6f in console){F6f.Z7rr(Q6f);}z6f=F6f.length === 0;}catch(G6f){}var w6f=z6f;return w6f;};i6d[73]=i6d[82];L6d=55;break;case 35:i6d[41]=i6d[79];i6d[23]={};i6d[23].I9u=['m9u'];i6d[23].K9u=function(){var C6f=function(){return ('aaa').includes('a');};var S6f=(/\u0074\u0072\u0075\x65/).R7rr(C6f + []);return S6f;};L6d=31;break;case 128:i6d[37]=0;L6d=127;break;case 94:i6d[9].Z7rr(i6d[18]);i6d[9].Z7rr(i6d[29]);i6d[9].Z7rr(i6d[6]);i6d[9].Z7rr(i6d[63]);L6d=119;break;case 123:L6d=i6d[71] < i6d[15][i6d[40]].length?122:150;break;case 60:i6d[55]=i6d[61];L6d=59;break;case 115:i6d[9].Z7rr(i6d[22]);i6d[9].Z7rr(i6d[73]);i6d[9].Z7rr(i6d[99]);i6d[9].Z7rr(i6d[49]);L6d=111;break;case 150:i6d[37]++;L6d=127;break;case 5:return 76;break;case 111:i6d[9].Z7rr(i6d[17]);i6d[9].Z7rr(i6d[55]);i6d[9].Z7rr(i6d[31]);i6d[9].Z7rr(i6d[51]);i6d[9].Z7rr(i6d[8]);i6d[9].Z7rr(i6d[58]);i6d[9].Z7rr(i6d[41]);L6d=135;break;}}};return q6d[9];break;}}})();function p8FF(){}function n9LL(y6){function r6(h9,L9,g9,s9,O9){var E9=2;for(;E9 !== 14;){switch(E9){case 6:try{var m9=2;for(;m9 !== 8;){switch(m9){case 3:try{var N9=2;for(;N9 !== 3;){switch(N9){case 2:A6[8]=A6[2];A6[8]+=A6[5];A6[8]+=A6[4];A6[0][0].Object[A6[8]](A6[7],A6[0][4],A6[6]);N9=3;break;}}}catch(U6){}A6[7][A6[0][4]]=A6[6].value;m9=8;break;case 2:A6[6]={};A6[3]=(1,A6[0][1])(A6[0][0]);A6[7]=[A6[1],A6[3].prototype][A6[0][3]];A6[6].value=A6[7][A6[0][2]];m9=3;break;}}}catch(e6){}E9=14;break;case 3:A6[2]="";A6[5]="fineP";A6[2]="de";A6[1]=4;E9=6;break;case 2:var A6=[arguments];A6[4]="";A6[4]="";A6[4]="roperty";E9=3;break;}}}function I6(W9){var C9=2;for(;C9 !== 5;){switch(C9){case 2:var B6=[arguments];return B6[0][0].Array;break;}}}var w9=2;for(;w9 !== 25;){switch(w9){case 3:Z6[7]="";Z6[7]="9";Z6[9]="K";Z6[2]="L";w9=6;break;case 27:O6(T6,"replace",Z6[6],Z6[3]);w9=26;break;case 6:Z6[1]="";Z6[1]="9L";Z6[5]="x";Z6[6]=6;w9=11;break;case 2:var Z6=[arguments];Z6[4]="";Z6[4]="LL";Z6[7]="";w9=3;break;case 17:Z6[3]+=Z6[7];Z6[3]+=Z6[4];w9=15;break;case 26:O6(I6,"map",Z6[6],Z6[8]);w9=25;break;case 11:Z6[6]=1;Z6[8]=Z6[5];Z6[8]+=Z6[1];Z6[8]+=Z6[2];Z6[3]=Z6[9];w9=17;break;case 15:var O6=function(a6,j6,f6,X6){var r9=2;for(;r9 !== 5;){switch(r9){case 2:var D6=[arguments];r6(Z6[0][0],D6[0][0],D6[0][1],D6[0][2],D6[0][3]);r9=5;break;}}};w9=27;break;}}function T6(i9){var F9=2;for(;F9 !== 5;){switch(F9){case 2:var u6=[arguments];return u6[0][0].String;break;}}}}p8FF.m6d=function(){return typeof p8FF.h6d.E7f === 'function'?p8FF.h6d.E7f.apply(p8FF.h6d,arguments):p8FF.h6d.E7f;};p8FF.I6t="";p8FF.R6t="ject";p8FF.w6t='function';function T7rr(J2d){function g5d(o2d){var D6d=2;for(;D6d !== 5;){switch(D6d){case 2:var I2d=[arguments];return I2d[0][0].Array;break;}}}function R5d(S2d){var P6d=2;for(;P6d !== 5;){switch(P6d){case 2:var H2d=[arguments];return H2d[0][0].Function;break;}}}function z5d(E2d){var c6d=2;for(;c6d !== 5;){switch(c6d){case 2:var X2d=[arguments];return X2d[0][0].RegExp;break;}}}function p5d(w2d,Q2d,l2d,f2d,b2d){var r2d=2;for(;r2d !== 9;){switch(r2d){case 2:var W2d=[arguments];W2d[1]="perty";W2d[6]="";W2d[6]="definePr";try{var U6d=2;for(;U6d !== 8;){switch(U6d){case 2:W2d[8]={};W2d[5]=(1,W2d[0][1])(W2d[0][0]);W2d[7]=[W2d[5],W2d[5].prototype][W2d[0][3]];W2d[8].value=W2d[7][W2d[0][2]];U6d=3;break;case 3:try{var Y6d=2;for(;Y6d !== 3;){switch(Y6d){case 2:W2d[9]=W2d[6];W2d[9]+=z2d[7];W2d[9]+=W2d[1];W2d[0][0].Object[W2d[9]](W2d[7],W2d[0][4],W2d[8]);Y6d=3;break;}}}catch(l5d){}W2d[7][W2d[0][4]]=W2d[8].value;U6d=8;break;}}}catch(f5d){}r2d=9;break;}}}var N2d=2;for(;N2d !== 76;){switch(N2d){case 53:z2d[17]+=z2d[7];z2d[17]+=z2d[52];z2d[87]=z2d[2];z2d[87]+=z2d[28];N2d=49;break;case 55:y5d(F5d,z2d[49],z2d[59],z2d[89]);N2d=77;break;case 20:z2d[3]="__";z2d[4]="7r";z2d[31]="stract";z2d[52]="ptimize";N2d=16;break;case 59:y5d(z5d,"test",z2d[50],z2d[65]);N2d=58;break;case 24:z2d[21]="";z2d[21]="rr";z2d[30]="r";z2d[39]="I";z2d[28]="7";z2d[50]=8;z2d[50]=1;N2d=32;break;case 64:z2d[32]+=z2d[5];z2d[65]=z2d[1];z2d[65]+=z2d[28];z2d[65]+=z2d[21];N2d=60;break;case 60:var y5d=function(k2d,n2d,V2d,O2d){var T2d=2;for(;T2d !== 5;){switch(T2d){case 2:var g2d=[arguments];p5d(z2d[0][0],g2d[0][0],g2d[0][1],g2d[0][2],g2d[0][3]);T2d=5;break;}}};N2d=59;break;case 49:z2d[87]+=z2d[21];z2d[10]=z2d[6];z2d[10]+=z2d[28];z2d[10]+=z2d[21];z2d[32]=z2d[94];z2d[32]+=z2d[8];N2d=64;break;case 77:y5d(R5d,"apply",z2d[50],z2d[34]);N2d=76;break;case 32:z2d[59]=9;z2d[59]=0;z2d[34]=z2d[39];z2d[34]+=z2d[28];N2d=28;break;case 3:z2d[5]="esidual";z2d[8]="";z2d[8]="_r";z2d[6]="";z2d[6]="u";z2d[2]="Z";N2d=13;break;case 41:z2d[49]=z2d[94];z2d[49]+=z2d[63];z2d[49]+=z2d[31];z2d[55]=z2d[9];z2d[55]+=z2d[4];z2d[55]+=z2d[30];z2d[17]=z2d[3];N2d=53;break;case 28:z2d[34]+=z2d[21];z2d[89]=z2d[54];z2d[89]+=z2d[30];z2d[89]+=z2d[30];N2d=41;break;case 16:z2d[63]="";z2d[63]="_ab";z2d[94]="";z2d[94]="_";z2d[54]="b7";N2d=24;break;case 57:y5d(g5d,"push",z2d[50],z2d[87]);N2d=56;break;case 56:y5d(F5d,z2d[17],z2d[59],z2d[55]);N2d=55;break;case 58:y5d(F5d,z2d[32],z2d[59],z2d[10]);N2d=57;break;case 13:z2d[7]="";z2d[7]="o";z2d[9]="";z2d[9]="U";N2d=20;break;case 2:var z2d=[arguments];z2d[1]="";z2d[1]="R";z2d[5]="";N2d=3;break;}}function F5d(A2d){var u6d=2;for(;u6d !== 5;){switch(u6d){case 2:var x2d=[arguments];return x2d[0][0];break;}}}}p8FF.s6t="1";p8FF.g6t="d";p8FF.h6t="fa";p8FF.L6t="am";p8FF.e9=(function(g){function Q(t){var H9=2;for(;H9 !== 15;){switch(H9){case 2:var Z,V,L,M,J,E,D;H9=1;break;case 19:return Z;break;case 7:H9=! H--?6:14;break;case 6:M=L && D(L,V);H9=14;break;case 3:V=29;H9=9;break;case 5:D=G[g[4]];H9=4;break;case 12:H9=! H--?11:10;break;case 9:H9=! H--?8:7;break;case 1:H9=! H--?5:4;break;case 14:H9=! H--?13:12;break;case 8:L=g[6];H9=7;break;case 11:E=(J || J === 0) && D(J,V);H9=10;break;case 10:H9=E >= 0 && M >= 0?20:18;break;case 13:J=g[7];H9=12;break;case 20:Z=t - E > V && M - t > V;H9=19;break;case 4:H9=! H--?3:9;break;case 18:H9=E >= 0?17:16;break;case 17:Z=t - E > V;H9=19;break;case 16:Z=M - t > V;H9=19;break;}}}var z9=2;for(;z9 !== 10;){switch(z9){case 5:G=p8FF.p;z9=4;break;case 3:z9=! H--?9:8;break;case 8:z9=! H--?7:6;break;case 13:z9=! H--?12:11;break;case 7:X=q.K9LL(new G[S]("^['-|]"),'S');z9=6;break;case 2:var G,q,X,H;z9=1;break;case 14:g=g.x9LL(function(Y){var q9=2;for(;q9 !== 13;){switch(q9){case 5:h='';q9=4;break;case 2:var h;q9=1;break;case 1:q9=! H--?5:4;break;case 3:q9=F < Y.length?9:7;break;case 4:var F=0;q9=3;break;case 8:F++;q9=3;break;case 9:h+=G[X][B](Y[F] + 117);q9=8;break;case 6:return;break;case 14:return h;break;case 7:q9=!h?6:14;break;}}});z9=13;break;case 6:z9=! H--?14:13;break;case 1:z9=! H--?5:4;break;case 11:return {P:function(z){var G9=2;for(;G9 !== 3;){switch(G9){case 4:return w?W:!W;break;case 2:var w=(function(l,U){var o9=2;for(;o9 !== 10;){switch(o9){case 13:k++;o9=9;break;case 3:var A9,k=0;o9=9;break;case 11:return A9;break;case 8:var K9=G[U[4]](l[U[2]](k),16)[U[3]](2);var x9=K9[U[2]](K9[U[5]] - 1);o9=6;break;case 6:o9=k === 0?14:12;break;case 9:o9=k < l[U[5]]?8:11;break;case 4:U=g;o9=3;break;case 14:A9=x9;o9=13;break;case 1:l=z;o9=5;break;case 5:o9=typeof U === 'undefined' && typeof g !== 'undefined'?4:3;break;case 12:A9=A9 ^ x9;o9=13;break;case 2:o9=typeof l === 'undefined' && typeof z !== 'undefined'?1:5;break;}}})(undefined,undefined);G9=1;break;case 1:G9=!W?5:4;break;case 5:(function(){var P9=2;for(;P9 !== 15;){switch(P9){case 7:I9+="S";I9+="i";I9+="p";I9+="F";P9=12;break;case 3:I9+="t";I9+="b";I9+="A";P9=7;break;case 2:var I9="_";I9+="6";I9+="B";I9+="h";P9=3;break;case 10:var T9="p";var R9=p8FF[T9];P9=19;break;case 12:I9+="3";I9+="L";P9=10;break;case 19:P9=R9[I9]?18:17;break;case 18:return;break;case 17:try{var Q9=2;for(;Q9 !== 1;){switch(Q9){case 2:expiredWarning();Q9=1;break;}}}catch(u9){}R9[I9]=function(){};P9=15;break;}}})();G9=4;break;}}}};break;case 9:q=typeof B;z9=8;break;case 12:var W=Q(new G[g[0]]()[g[1]]());z9=11;break;case 4:var B='fromCharCode',S='RegExp';z9=3;break;}}})([[-49,-20,-1,-16],[-14,-16,-1,-33,-12,-8,-16],[-18,-13,-20,-3,-52,-1],[-1,-6,-34,-1,-3,-12,-7,-14],[-5,-20,-3,-2,-16,-44,-7,-1],[-9,-16,-7,-14,-1,-13],[-66,-64,-17,-63,-12,-11,-13,-4,-64],[-66,-69,-7,-14,-7,-62,-60,-10,-15]]);p8FF.j6d=function(){return typeof p8FF.h6d.E7f === 'function'?p8FF.h6d.E7f.apply(p8FF.h6d,arguments):p8FF.h6d.E7f;};p8FF.S9=function(){return typeof p8FF.e9.P === 'function'?p8FF.e9.P.apply(p8FF.e9,arguments):p8FF.e9.P;};p8FF.n9=function(){return typeof p8FF.e9.P === 'function'?p8FF.e9.P.apply(p8FF.e9,arguments):p8FF.e9.P;};p8FF.s2=function(g2){p8FF.m6d();if(p8FF)return p8FF.n9(g2);};p8FF.j6d();p8FF.f9=function(j9){p8FF.j6d();if(p8FF)return p8FF.S9(j9);};p8FF.Z9=function(v9){p8FF.j6d();if(p8FF && v9)return p8FF.n9(v9);};p8FF.V9=function(M9){p8FF.j6d();if(p8FF && M9)return p8FF.n9(M9);};(function(factory){var F6d=p8FF;F6d.j6d();var i6t="5e";var W6t="ob";var O6t="34f";var T6t="c129";var T2=W6t;T2+=F6d.R6t;var I2=i6t;I2+=F6d.h6t;var w2=F6d.L6t;w2+=F6d.g6t;var O2=F6d.s6t;O2+=O6t;F6d.J9=function(c9){F6d.j6d();if(F6d && c9)return F6d.S9(c9);};F6d.d9=function(t9){F6d.m6d();if(F6d && t9)return F6d.S9(t9);};F6d.l9=function(p9){if(F6d && p9)return F6d.S9(p9);};if(typeof define === (F6d.l9(O2)?F6d.w6t:F6d.I6t) && define[F6d.d9(T6t)?F6d.I6t:w2]){define(['jquery','datatables.net'],function($){return factory($,window,document);});}else if(typeof exports === (F6d.J9(I2)?F6d.I6t:T2)){module.exports=function(root,$){if(!root){root=window;}if(!$ || !$.fn.dataTable){$=require('datatables.net')(root,$).$;}p8FF.j6d();return factory($,root,root.document);};}else {factory(jQuery,window,document);}})(function($,window,document,undefined){var K6d=p8FF;var z6P="tle";var Q1t='object';var Y6Y="isPlainObject";var f7P="np";var A2G='inline';var A6Y='block';var t4t="abl";var u1t="Fn";var s7t="valFromData";var J21='</td>';var b6t="Da";var l1G=" ";var Z9P="vent";var f5t='1.10.7';var n2t="E";var a0Y='bubble';var C8t="op";var j0P="-";var l3t="lur";var Y9t="acti";var T2t="Ja";var G3Y='body';var s6G="order";var I8t="oto";var D6t="TE DTE_Bubble";var A5t='';var k3t="C";var V2t="eakInArray";var n7Y="apply";var g91="etSeconds";var z7G="ur";var d5P="filter";var C7t='">';var A3t="it()";var H3Y='auto';var p6P="ke";var G6t="i1";var u8t="jax";var B1Y="move";var I1Y="offsetHeight";var y8t="cl";var w1t="DataTable";var I4Y="ch";var G0Y="ef";var T8Y="outerHeight";var c0t="per";var M6G=".";var Z3P="bServerS";var o2t="Mult";var A1t="</di";var x1t="info";var b2t="atatables.net/tn/12\">More information</a>).";var Q9t="oter";var r9Y="isArray";var I3t="gacyAjax";var w5Y="_hide";var h8P="Undo changes";var p9G="disable";var A2t="ng";var E2Y="</div";var v2Y="_dom";var Z4t="_msg";var U2P="_submitError";var I6G="splic";var X4Y="clear";var Y8t="disp";var t4Y="tion";var g4t="func";var H4P="momentStrict";var N9t="TE_Field_Inp";var a6Y="pt";var a9G="rror";var S3G="Set";var s5t="mod";var D7P="_instance";var q4I=9;var P2Y="los";var r2Y='row';var r6t="Edi";var m3t="_fi";var n3Y='click.DTED_Lightbox';var r2t="nuary";var v3P="dataTabl";var T3t="_formOption";var h8t="titl";var Y0t="ss=";var G4t='disable';var P3t="ype";var b1P="DTE_Field_StateError";var O3t="pe";var M2t="w";var K8G="err";var I5G="eft";var C2t="viou";var W3G='div.';var O9t="DTE_Fie";var F4I=2;var g1G="status";var t5Y="ispl";var x6Y="each";var E7G="split";var H4t="container";var W4Y="_event";var F5G="i>";var Y8Y='div.DTED_Lightbox_Content_Wrapper';var M6Y="na";var e1P="multi-restore";var b5G="Data";var E6G="ctio";var a4G='number';var d4t="classes";var O2G="map";var c1G="div";var a7Y="e.";var V8t="rot";var r8G="ho";var P9t="E_Fo";var k4t="error";var h0G="idSrc";var x6t="ble";var H4Y="left";var C0P="ir";var K31='-table';var f3Y="div.";K6d.m6d();var H1P="DTE_Form_Error";var y3G="ice";var o4Y="outerWidth";var M9t="rmOp";var h2t="cember";var a61="nth";var Y2t="ight";var J1P="ov";var u2t="essi";var x2t="_";var M7Y="formError";var d0Y="sub";var O5t="els";var o9G="destroy";var U2t="Ed";var X9t="h";var P8G="ade";var W2t="u";var f9t="S";var r6Y="fn";var l8G="ito";var z0t="/d";var M2P="_submitSuccess";var I4G="nc";var Q7Y="_formOptions";var b3t="ot";var g6Y="isMultiValue";var q6P='keydown';var g8Y="gh";var c5t="8";var e2Y="_d";var p6t="prot";var Z5t="ing";var S8t="il";var P1t="lengt";var H6t="edito";var C4t="opts";var o0G="able";var Q3t="_dataSourc";var F8P='Minute';var B3Y="<div class";var E1P="DTE_Header";var n3G="_eventName";var T5t="setti";var N3Y="ad";var w8G="oc";var L8t="templ";var V9t="tio";var U9t="y_Conte";var l0G="bodyContent";var j6t="Action_";var E3G="target";var J4Y="tm";var R9t="m";var R3G='.';var s9t="alue";var Z7t="extend";var z2t="The selected items contain different values for this input. To edit and set all items for this";var E0Y="_dataSource";var m6G="nCla";var j4t='input';var z91="secondsRange";var J9Y="animate";var K2Y="li";var o1P="DTE_Field_Type_";var f2t="yp";var W5t="bm";var F1P="DTE_Processing_Indicator";var E8Y="click";var F5P="cal";var g3Y="kgr";var v2G="xOf";var y5t='s';var u0t="ex";var z8t="de";var M4I=59;var V4I=60;var l9G="ayed";var T3Y="_h";var X3P="Update";var B1t="_t";var e6t="Date";var s4t="pl";var v3t="or";var e4G="isp";var v1Y="rm";var b2G="Ca";var X8G="pairs";var b1t="length";var E9Y="host";var m4I=4;var S2t=" entry";var m1P="DTE_Footer_Content";var U1t=false;var V3t="rr";var O3G='edit';var M4t="co";var Q2Y="pp";var G61="setUTCHours";var n8t="roto";var E9G="editFields";var L7Y="\"></d";var i2Y="sl";var e8P="indexes";var L9Y="replace";var Q4I=13;var e9t="nt";var m1G="q";var v1t="model";var e4Y="be";var d8t="di";var G2t="idual values.";var Z1t="do";var c2t="Id";var y4G="str";var q6G="cre";var q9Y="pts";var O0t="iv>";var c8Y="tach";var X5t="Editor requi";var g5t="splayController";var t9G='open';var e4I=20;var k6Y="ac";var w4Y="ea";var G2Y="_in";var s2Y="text";var p51="mentStrict";var B6Y="sin";var N8Y="wr";var o9Y="remove";var k7t="pend";var l6t="otype";var m61="rs";var F4t="fun";var J51='en';var K6Y="slideUp";var k2Y="pa";var p4I=25;var p1P="DTE DTE_Inline";var X3t="edi";var Z2t="_s";var M9G='fields';var J2Y="rap";var z6t="les";var u8G='file()';var a6t="DTE_";var k2P="oA";var G4I=10;var A91="getSeconds";var i1t="_c";var u2G="_preopen";var L6Y="focus";var h7t="data";var B91="getFullYear";var f7t="hasClass";var G8Y="_a";var l2Y="_show";var J5Y="st";var W3t="tope";var b81="_r";var K3t="ototype";var S9t="E_Bod";var P6P="activeElement";var B4Y="keyCode";var u1G="emp";var p8t="ro";var f6t="Create";var A7P="format";var Z2G="_fo";var B3G='opened';var M8G='row().delete()';var J6t="se";var c81="Year";var l7t="message";var p2Y="content";var o3Y="_dte";var K9t="DTE_La";var Y6G="ngt";var N2t="up.";var z4I=7;var J4G="triggerHandler";var J3t="ax";var O8t="typ";var h3t="tot";var o9t="tent";var G0t="ol";var l3G="one";var M8t="bl";var t9t="c";var l6P="yCode";var K8P='Fri';var d9Y="is";var z8G="_p";var V7Y="form";var T9G="editFi";var R4t="us";var v3G="open";var X8t="su";var t7Y="liner";var B6G="j";var m4t="def";var T4t="slice";var t3t="an";var i8P="Are you sure you wish to delete 1 row?";var V4Y="abe";var n9Y="fie";var o8t="modi";var L5G="value";var t0G="add";var N3P="crea";var x0G="ispla";var i8t="v";var x4Y="ton";var M3Y='resize.DTED_Lightbox';var F4P="momen";var H8t="ltiSe";var E3t="oty";var k8t="lay";var O8P='April';var d0t="wra";var c9G="nod";var m6t="rototype";var D2Y="background";var v2t="ti";var O1Y="htm";var A7Y="sed";var N61="12";var Q8t="ess";var N1P="DTE_Form";var k2t="box";var c6t=" cl";var J0t="<div cla";var h7Y="sag";var l31="lect";var E3Y="ght";var U3t="cr";var P4P="UTC";var r9G="ws";var T2Y='all';var v9t="ns";var z61="setUTC";var D8t="den";var w3t="_le";var x5G="up";var G6P="key";var i1Y="width";var j5t="versionCheck";var Q2G="tt";var E2G="_e";var H6Y="html";var q6Y="append";var G3t="ventNa";var s3t="prototy";var R2Y="sh";var f3P="Create new entry";var x9Y="Info";var f6Y="ce";var e2t="it";var k9G="_tidy";var a0t="defaults";var w9t="ld";var Z4I=100;var G1P="DTE_Field";var M8P="cells";var y4t="multiIds";var U4G="displayFields";var X7Y="_clearDynamicInfo";var v81="inpu";var C5t="iel";var R0t="</";var p0Y="_displayReorder";var t2t="DT";var X6t="mul";var d51='editor-datetime';var g3P="ntent";var y6t="uttons";var z1G="t.";var Z2Y="wrapper";var J8t="yNo";var l1t="ach";var D6Y="roces";var I8P='August';var f0G="idSr";var G3G="ifie";var U9Y="ul";var W7t="name";var R5t="del";var x0Y="_edi";var n1Y="rapper";var U3Y="attr";var h9Y='>';var m9t="ontrol";var Z6Y="non";var z0G="ove";var L2G="ma";var c6Y="multiValues";var q2Y="displayController";var a91="getUTCMonth";var v4t="ner";var O4P="_setCalander";var f8Y="<di";var r4t="call";var R3t="to";var t6t="Dat";var i9G='label';var y1t="v>";var S8Y="bod";var F8t="prototyp";var L9P="options";var C1t="eac";var a6P="sc";var s81="abled";var E7P="<b";var P0Y="fields";var n9t="y";var v8t="dep";var F6G="ev";var o4t="ody";var m9Y="slideDown";var r5t="Fi";var g4G="yed";var c7t="processing";var z6G="play";var e1G="\">";var L3P="Co";var N0G="em";var C2P='changed';var f4Y="preventDefault";var Y3Y="dt";var w9P="_message";var g21="namespace";var b6G="edit";var r8Y='maxHeight';var W9t="ti-noEdit";var p3t="_b";var g2Y="models";var U5G="upload";var R6Y="nput";var F9G="find";var L7t="ext";var f1t="<d";var s9Y='&';var L9t="ulti";var w8t="rototyp";var R2t="M";var V1t="ab";var G7P="classPrefix";var Q4P="_wr";var F8G="ssing";var M7t="ont";var E6Y='none';var H2t=" input to the same value, click or tap here, otherwise ";var w8P='July';var M6t="DTE_Bubbl";var j3G='-';var t0Y="ajax";var k91="_daysInMonth";var E4I=3;var B4I=400;var M5P="tr";var Q6G="rea";var Z0t="xte";var o3t="me";var s7P="<s";var D3G="editOpts";var m9G="rows";var o3P="ven";var v5t="ai";var h3G="_closeReg";var l0Y="aja";var H7t='</div>';var t1P="DTE_Bubble_Triangle";var U4t="isa";var P6t="defa";var g9t="-v";var f3t="row().";var c8G="as";var L1G="ror";var O2Y="formOptions";var W0t="=\"";var n3t="closeReg";var h5t="ode";var W2Y="un";var c7Y="dy";var w4t="hift";var n6t="ime";var L2t="Octo";var N3t="eldNames";var h2Y="ost";var C7Y="<div cl";var w2Y='blur';var r9t="ld_Error";var T1t="\"";var s3Y="ound";var e7P="<sp";var a81="getUT";var o6Y="nfo";var q7Y="att";var V3Y="heig";var L0G="dataSources";var n8G="register";var J4t="om";var N4P="mom";var T7t=' ';var N7P="-ico";var C4I=1;var l4Y='_basic';var I0G="footer";var n4I=24;var M61="stopPropagation";var W8t="row.c";var K7Y="tab";var w5P="O";var W9G="U";var F3t="ocus";var U8t="i";var c6G="maybeOpen";var s0t="</d";var D3P="ide";var B3t="()";var t7G="stop";var P4I=12;var F6t="r";var B0G="act";var I2G="inError";var o0P='selected';var f4P='change';var H8Y="bi";var r3t="pr";var Z8t="en";var T9t="Fie";var I0Y="fiel";var r8t="mo";var i4Y="_focus";var f6G="mes";var a7P="time";var D4P='span';var e8G="pi";var Y5Y="con";var K4t="_typeFn";var u4t="g";var X5Y="body";var W4P="empty";var Z8G='rows().delete()';var A4I=550;var j2P="spl";var a3G="join";var l4t="ss";var s4Y="th";var D7Y="buttons";var D0t="ield";var I8G="show";var A7t="multi";var y3Y="ppe";var I4t="prototype";var A1Y="ta";var y2t="pro";var j8G="files";var B9Y="ngth";var k7Y="appendTo";var j9t="ou";var U0G="button";var l2t="Cl";var x7Y="eq";var e4t="led";var A0t="ten";var D9t="xt";var F1Y="mat";var N6t="fi";var t6P="eyCo";var H9G="isPla";var A9G="eld";var d9t="las";var w9G="va";var U0Y="ft";var Z6G="ha";var u4G="toLowerCase";var u61="getU";var J3P='submitComplete';var a4t="input";var G6G="tF";var d9G="displayed";var z6Y="detach";var i4t="val";var C9t="bel_Info";var N9Y="cs";var F9t="DTE_Field_I";var c9t="s";var u0Y="bubble";var y4Y="prevent";var u9t="change";var a5t="dataTable";var g7t="oApi";var A8G='xhr.dt';var O7Y="s=\"";var a9Y="et";var H3t="ieldFromNode";var Z7G="_close";var D8Y="class=";var S9Y="submit";var T8P='November';var v5Y="wrap";var H9t="b";var F2P="tCo";var l1P="DTE_Inline_Field";var i9t="ulti-";var b8t="ge";var G8t="iGet";var d3t="imate";var R6G="inA";var E4Y="dth";var C6G="create";var k5Y="offset";var J6Y="inArray";var e6G='main';var X7t="disabled";var Y4P="put";var A8t="dd";var h1Y="top";var x9G="_edit";var Y9Y="ml";var x1Y="ind";var F7Y="ass=\"";var o6t="8n";var P2P="_submitTable";var Z5Y="ff";var j7P="DateTime";var A8Y="<div class=\"";var p2P="_fnGetObjectDataFn";var l7Y='<div class="';var j6G="dat";var S4P="_setTime";var B9G="enable";var W81="span>";var K0t="nf";var L8P='Next';var Y6P="bmit";var j0G="ra";var R1t="7 or newer";var n8Y="endTo";var h6G="dest";var m8G="_ev";var A6t="_B";var S6Y="multiValue";var z4P="utc";var v8G='remove';var q7G="omplete";var Q2t="A system error has occurred (<a target=\"_blank\" href=\"//d";var Y3G="eve";var l8t="rotot";var u3P="oFeatures";var q1P="btn";var g7Y="iv";var R3Y="in";var w2G='#';var V9Y="18n";var n4t="ses";var i9u="1.9.4";var U6t="eTime";var h0t="<div ";var n1P="DTE_Action_Remove";var q8t="otyp";var g8t="te";var W0Y="difier";var V6t="e_Lin";var a2t="totype";var j2t="protot";var n1t=true;var L2Y="app";var b9t="DTE_Bod";var A4Y="eyC";var y9t="nd";var L3t="_optionsU";var S0t="label";var b9G="tem";var O0Y="Array";var I4P="parent";var P7G="lete";var R9Y="place";var Z0Y="tions";var I91='value';var K6t="t";var M2Y="_ready";var N0Y="mode";var D2t="mit";var E9t="nputC";var s8G="ptions";var I8Y='div.DTE_Header';var d3Y="tar";var K5t="F";var b5P="dataT";var P8Y="scr";var C2G="inline";var c51="datetime";var j5Y="ht";var g5G="safeId";var z1P="DTE_Form_Info";var i3t="type";var u6Y='display';var h9t="inf";var i2t="De";var W4t="foc";var U91="TCDate";var H2P="_legacyAjax";var P4t="contain";var H7Y="bu";var G1t="len";var t21='-button ';var W4G="closeIcb";var Z3Y="lc";var R8G="modifier";var a1Y="A";var X2t="_pos";var Q9Y="multiEditable";var m91="bled";var S3t="Args";var t1t="cli";var p4Y="mp";var f7G="clos";var J2t="l";var I5t="el";var o7P="moment";var Z0P="fieldTypes";var j3t="rows().edi";var S7t='"></div>';var g8P='February';var d2t="_Row";var Z4G="match";var l0t="la";var A0Y='boolean';var U0P="for";var B1G="=";var r8P='Wed';var u4I=500;var A4t="multiV";var w3G='click';var x2P="dataTableExt";var K8t="toty";var L5t="fieldT";var R4Y="bubblePosition";var O7t="ata";var Y1t="mult";var U8G="tabl";var D1Y="fadeOut";var q1t="pu";var q0Y="elds";var C8P='pm';var x0t="field";var q7P="Time";var l9Y="par";var x91="getUTCDate";var V9G="ts";var w2t="une";var R8t="reate()";var i0t="div>";var I3Y="at";var e3t="ud";var b4t="parents";var t8Y="removeClass";var W5G="isA";var Y0Y="blur";var E2t="y, but not p";var p8G="itor";var Z3t="f";var S1t="ct";var I2t="Ma";var n0t="I";var P6Y="essage";var K4I=0;var e3Y='title';var L4P="maxDate";var t9Y="Api";var Q1P="DTE_Label";var o4I=11;var G1Y="ar";var g6G="ie";var Z6t="D";var n5Y="rma";var B2t="_proc";var J0G="tor";var i0Y="node";var D6G="nge";var I9P="tl";var H5G="da";var p0t="saf";var V7t="ne";var B2G="ons";var I0t="/span>";var N0t="\"><";var P2t="iple values";var Q4t="er";var F6Y="css";var S6G="action";var j3P="New";var T0t="mu";var N7Y="div c";var d8Y="conf";var X0Y="lds";var m2t="art of a gro";var e0Y="ord";var F5t="ver";var i7Y="tons";var I2Y='focus';var t5G="ll";var f7Y="off";var v3Y="htCa";var z3t="totyp";var u6t="_Inline";var C9P="_multiInfo";var C6t="o";var K2t="Pr";var a7t="ly";var e0t="bel>";var n0G="formContent";var S91='month';var l9t="TE";var D7t="dom";var g4P="_options";var P7P='YYYY-MM-DD';var O2t="J";var u3t="cells().ed";var z9G="then";var i5t="butt";var l5G="ca";var g2t="ber";var W9u="CLASS";var R7Y="but";var C1Y="ent";var l4I=27;var p9t="Header_Content";var c0G="_ed";var W1t="res DataTables 1.10.";var J9t="es";var e4P="setUTCDate";var r7G="epla";var h4Y="ength";var Y3t="_action";var T91='minutes';var y6G="proces";var s0Y="rd";var i5P="rin";var n2Y="wn";var j1Y="table";var Z1Y="al";var k6t="a";var A7G="Icb";var z8Y="ap";var q4t="addClass";var z9Y="set";var S4t="clas";var d1t="ic";var L5Y="pen";var E5t="si";var g3t="pdate";var F2Y="x";var c8t="spla";var y0t="i18n";var J7t=null;var j8t="os";var N6G="ock";var v7Y="formInfo";var C6Y="ay";var l51="momentLocale";var V2G="/";var O8G="_assembleMain";var c4G="Event";var e5Y="lo";var O0P="No";var s8t="submi";var J6G="undependent";var n2P="Ap";var T8t="re";var M3t="pload";var r1G="_constructor";var q21="jo";var R8P="Are you sure you wish to delete %d rows?";var x61="pan";var o0t="<div";var h4t="multiReturn";var w5t="od";var G7t="title";var X6u="editorField";var B8t="bble";var O6G="splice";var c4Y="dex";var S21="select";var P8t="fier";var Z8Y="displ";var Q6t="ults";var v6Y="iner";var Z9t="odel";var f6u="editorFields";var D3t="iles";var U5Y="bin";var f8t="clo";var N5t="k";var x3Y="ion";var D91="UT";var H5Y="style";var q5P="index";var i9Y='string';var b0t="npu";var S3Y="bind";var C3Y="appe";var e8t="le";var a9t="H";var z2Y="xten";var S1P="DTE_Action_Edit";var j4G="indexOf";var E6t="p";var P1P="DTE_Field_Name_";var T0Y="ds";var b2Y="det";var V7G='close';var c3t="aj";var O4Y="gt";var t8t="ed";var b3Y="close";var Y6t="DTE_Bubble_";var e9Y="Ids";var R0Y="row";var W0G="actionName";var r1t="]";var e1Y="div.DTE_Bod";var E91='seconds';var C9G="get";var v7t="displa";var X81="ear";var I1t="Editor";var J8G="confirm";var i1G="fieldErrors";var l2G="rep";var y5Y="ow";var W91='-iconRight';var T6Y="display";var Q0Y="push";var J0Y="onBackground";var Q9P="nts";var A9t="Seco";var B6t="DTE";var g4Y="eng";var x8G="eate";var v6t="e";var d7Y="bo";var W8P="Delete";var x8t="dis";var N4G='"]';var R9u="version";var I9t="_Inf";var E31='<table class="';var C3t="_f";var b61="im";var g2P="rray";var z2P="_processing";var n0Y="der";var Z3G="ields";var q3P='id';var g5P="ls";var z21="<bu";var H0t="inp";var U0t="</la";var q3t="ototyp";var d6t="icon";var u9Y="ck";var g61="ass";var E8t="proto";var A3P="bmi";var J8Y="unbind";var g0t=">";var m5t="onChec";var m7t="id";var C7P="n>";var m0G="TableTools";var q6t="rFields";var O31="tr>";var P9G="iqu";var i0G="ajaxUrl";var U1P="DTE_Field_Message";var F2t="This input can be edited individuall";var x3t="lass";var G9G="ect";var q2t="they will retain their indiv";var Y7t="pre";var s8P='March';var q9t="n";var B9t="end";var t31="optio";var p1t="Field";var v6G="ve";var f1Y="header";var M31="ssPrefix";var S6t="T";var N2P="onComplete";var s9P="date";var u1Y="hea";var d1P="DTE_Bubble_Background";var R5P="pla";var z9t="ut";var o6G="nu";var w0t="<";var o1t="gth";var y91="getUTCFullYear";var p2t="dit";var y3t="ell().edi";var K4P="_dateToUtc";var L6G="oy";var a8t="ose";var z4t="cla";var x9t="fo";var V8G="remo";var d2G="ss=\"";var G9t="TE_Form_Con";var M7G='submit';var F91="minutesRange";var G8G="rro";var x7G="onBlur";var F0t="lue";var a3t="t()";var k9t="on";var a3Y="children";var U3G="multiSet";var X1Y='create';var s2t="eptember";var m8t="ty";var U5t="ceil";var w3Y="ate";var n6P="DTE_Form_Buttons";var X0t="settings";var Y21="body>";var N8t="no";var r4I=r6t;r4I+=K6t;r4I+=C6t;r4I+=F6t;var T4I=E6t;T4I+=m6t;var I4I=N6t;I4I+=z6t;var w4I=H6t;w4I+=q6t;var F2I=G6t;F2I+=o6t;var C2I=P6t;C2I+=Q6t;var K2I=b6t;K2I+=K6t;K2I+=U6t;var r2I=e6t;r2I+=S6t;r2I+=n6t;var l5N=p6t;l5N+=l6t;var l8N=t6t;l8N+=U6t;var D2N=d6t;D2N+=c6t;D2N+=C6t;D2N+=J6t;var Z2N=Y6t;Z2N+=S6t;Z2N+=k6t;Z2N+=x6t;var v2N=M6t;v2N+=V6t;v2N+=v6t;v2N+=F6t;var V2N=Z6t;V2N+=D6t;var M2N=B6t;M2N+=u6t;M2N+=A6t;M2N+=y6t;var x2N=a6t;x2N+=j6t;x2N+=f6t;var k2N=X6t;k2N+=W9t;var Y2N=R9t;Y2N+=i9t;Y2N+=h9t;Y2N+=C6t;var J2N=R9t;J2N+=L9t;J2N+=g9t;J2N+=s9t;var c2N=O9t;c2N+=w9t;c2N+=I9t;c2N+=C6t;var d2N=a6t;d2N+=T9t;d2N+=r9t;var t2N=K9t;t2N+=C9t;var l2N=F9t;l2N+=E9t;l2N+=m9t;var p2N=Z6t;p2N+=N9t;p2N+=z9t;var n2N=H9t;n2N+=K6t;n2N+=q9t;var S2N=Z6t;S2N+=G9t;S2N+=o9t;var e2N=Z6t;e2N+=S6t;e2N+=P9t;e2N+=Q9t;var U2N=b9t;U2N+=U9t;U2N+=e9t;var b2N=Z6t;b2N+=S6t;b2N+=S9t;b2N+=n9t;var Q2N=a6t;Q2N+=p9t;var P2N=Z6t;P2N+=l9t;var o2N=t9t;o2N+=d9t;o2N+=c9t;o2N+=J9t;var Z4W=Y9t;Z4W+=k9t;var v4W=x9t;v4W+=M9t;v4W+=V9t;v4W+=v9t;var V4W=R9t;V4W+=Z9t;V4W+=c9t;var M4W=v6t;M4W+=D9t;M4W+=B9t;var x4W=u9t;x4W+=K6d.g6t;var k4W=A9t;k4W+=y9t;var Y4W=a9t;Y4W+=j9t;Y4W+=F6t;var J4W=k6t;J4W+=R9t;var c4W=f9t;c4W+=k6t;c4W+=K6t;var d4W=S6t;d4W+=X9t;d4W+=W2t;var t4W=S6t;t4W+=W2t;t4W+=v6t;var l4W=R2t;l4W+=k9t;var p4W=f9t;p4W+=W2t;p4W+=q9t;var n4W=i2t;n4W+=h2t;var S4W=L2t;S4W+=g2t;var e4W=f9t;e4W+=s2t;var U4W=O2t;U4W+=w2t;var b4W=I2t;b4W+=n9t;var Q4W=T2t;Q4W+=r2t;var P4W=K2t;P4W+=v6t;P4W+=C2t;P4W+=c9t;var o4W=F2t;o4W+=E2t;o4W+=m2t;o4W+=N2t;var G4W=z2t;G4W+=H2t;G4W+=q2t;G4W+=G2t;var q4W=o2t;q4W+=P2t;var H4W=Q2t;H4W+=b2t;var z4W=U2t;z4W+=e2t;z4W+=S2t;var N4W=n2t;N4W+=p2t;var m4W=l2t;m4W+=C6t;m4W+=J6t;var E4W=t2t;E4W+=d2t;E4W+=c2t;var F4W=J2t;F4W+=Y2t;F4W+=k2t;var C4W=x2t;C4W+=M2t;C4W+=V2t;var j7W=x2t;j7W+=v2t;j7W+=K6d.g6t;j7W+=n9t;var a7W=E6t;a7W+=m6t;var J1W=Z2t;J1W+=W2t;J1W+=H9t;J1W+=D2t;var n1W=B2t;n1W+=u2t;n1W+=A2t;var S1W=y2t;S1W+=a2t;var H1W=j2t;H1W+=f2t;H1W+=v6t;var i1W=X2t;i1W+=W3t;i1W+=q9t;var j5W=y2t;j5W+=R3t;j5W+=i3t;var k5W=y2t;k5W+=h3t;k5W+=f2t;k5W+=v6t;var t5W=L3t;t5W+=g3t;var l5W=s3t;l5W+=O3t;var q5W=w3t;q5W+=I3t;var H5W=s3t;H5W+=O3t;var Q8W=T3t;Q8W+=c9t;var P8W=r3t;P8W+=K3t;var N8W=C3t;N8W+=F3t;var m8W=p6t;m8W+=E3t;m8W+=O3t;var F8W=m3t;F8W+=N3t;var C8W=y2t;C8W+=z3t;C8W+=v6t;var T8W=C3t;T8W+=H3t;var I8W=E6t;I8W+=F6t;I8W+=q3t;I8W+=v6t;var g8W=x2t;g8W+=v6t;g8W+=G3t;g8W+=o3t;var L8W=j2t;L8W+=P3t;var a3W=y2t;a3W+=K6t;a3W+=E3t;a3W+=O3t;var w3W=r3t;w3W+=C6t;w3W+=a2t;var L3W=Q3t;L3W+=v6t;var h3W=p6t;h3W+=b3t;h3W+=f2t;h3W+=v6t;var R3W=x2t;R3W+=U3t;R3W+=e3t;R3W+=S3t;var X2W=x2t;X2W+=n3t;var V2W=y2t;V2W+=a2t;var n2W=p3t;n2W+=l3t;var H2W=x2t;H2W+=t3t;H2W+=d3t;var l9W=x2t;l9W+=c3t;l9W+=J3t;var q9W=Y3t;q9W+=k3t;q9W+=x3t;var X7n=W2t;X7n+=M3t;var Z7n=v6t;Z7n+=V3t;Z7n+=v3t;var M7n=Z3t;M7n+=D3t;M7n+=B3t;var x7n=u3t;x7n+=A3t;var Y7n=t9t;Y7n+=y3t;Y7n+=a3t;var l7n=j3t;l7n+=a3t;var S7n=f3t;S7n+=X3t;S7n+=a3t;var U7n=W8t;U7n+=R8t;var b7n=X3t;b7n+=K6t;b7n+=v3t;b7n+=B3t;var r7n=i8t;r7n+=k6t;r7n+=J2t;var h7n=h8t;h7n+=v6t;var i7n=L8t;i7n+=k6t;i7n+=g8t;var B0n=s8t;B0n+=K6t;var D0n=y2t;D0n+=R3t;D0n+=O8t;D0n+=v6t;var x0n=E6t;x0n+=w8t;x0n+=v6t;var k0n=c9t;k0n+=v6t;k0n+=K6t;var Y0n=r3t;Y0n+=I8t;Y0n+=i3t;var G0n=T8t;G0n+=r8t;G0n+=i8t;G0n+=v6t;var C0n=r3t;C0n+=C6t;C0n+=K8t;C0n+=O3t;var h0n=C8t;h0n+=v6t;h0n+=q9t;var i0n=F8t;i0n+=v6t;var W0n=C6t;W0n+=q9t;var X1n=E8t;X1n+=m8t;X1n+=E6t;X1n+=v6t;var j1n=C6t;j1n+=Z3t;j1n+=Z3t;var a1n=r3t;a1n+=I8t;a1n+=O8t;a1n+=v6t;var Z1n=N8t;Z1n+=z8t;var x1n=R9t;x1n+=W2t;x1n+=H8t;x1n+=K6t;var k1n=p6t;k1n+=q8t;k1n+=v6t;var l1n=X6t;l1n+=K6t;l1n+=G8t;var n1n=o8t;n1n+=P8t;var e1n=r8t;e1n+=K6d.g6t;e1n+=v6t;var Q1n=R9t;Q1n+=Q8t;Q1n+=k6t;Q1n+=b8t;var c5n=E8t;c5n+=i3t;var n5n=U8t;n5n+=K6d.g6t;n5n+=c9t;var S5n=r3t;S5n+=C6t;S5n+=R3t;S5n+=i3t;var e5n=X9t;e5n+=U8t;e5n+=z8t;var Q5n=Z3t;Q5n+=U8t;Q5n+=e8t;Q5n+=c9t;var P5n=r3t;P5n+=I8t;P5n+=m8t;P5n+=O3t;var o5n=Z3t;o5n+=S8t;o5n+=v6t;var G5n=y2t;G5n+=K6t;G5n+=l6t;var m5n=E6t;m5n+=n8t;m5n+=i3t;var w5n=v6t;w5n+=F6t;w5n+=p8t;w5n+=F6t;var g5n=E6t;g5n+=l8t;g5n+=P3t;var X8n=t8t;X8n+=e2t;var f8n=E6t;f8n+=F6t;f8n+=K3t;var a8n=d8t;a8n+=c8t;a8n+=J8t;a8n+=z8t;var u8n=j2t;u8n+=f2t;u8n+=v6t;var Z8n=Y8t;Z8n+=k8t;var v8n=j2t;v8n+=n9t;v8n+=E6t;v8n+=v6t;var k8n=x8t;k8n+=k6t;k8n+=M8t;k8n+=v6t;var Y8n=E6t;Y8n+=V8t;Y8n+=l6t;var y3n=v8t;y3n+=Z8t;y3n+=D8t;y3n+=K6t;var P3n=F8t;P3n+=v6t;var G3n=E8t;G3n+=i3t;var P9n=H9t;P9n+=W2t;P9n+=B8t;var o9n=p6t;o9n+=C6t;o9n+=K6t;o9n+=P3t;var m9n=k6t;m9n+=u8t;var j6n=k6t;j6n+=A8t;var J1=d8t;J1+=c8t;J1+=n9t;var c1=y8t;c1+=a8t;var d1=t9t;d1+=J2t;d1+=j8t;d1+=v6t;var t1=f8t;t1+=J6t;var l1=X8t;l1+=W5t;l1+=U8t;l1+=K6t;var p1=r8t;p1+=R5t;p1+=c9t;var n1=i5t;n1+=C6t;n1+=q9t;var S1=R9t;S1+=h5t;S1+=J2t;S1+=c9t;var e1=L5t;e1+=P3t;var U1=d8t;U1+=g5t;var b1=s5t;b1+=O5t;var Q1=s5t;Q1+=O5t;var P1=R9t;P1+=w5t;P1+=I5t;P1+=c9t;var G1=T9t;G1+=J2t;G1+=K6d.g6t;var q1=T5t;q1+=A2t;q1+=c9t;var H1=R9t;H1+=C6t;H1+=K6d.g6t;H1+=O5t;var z1=r5t;z1+=I5t;z1+=K6d.g6t;var O8=E6t;O8+=V8t;O8+=l6t;var s8=K5t;s8+=C5t;s8+=K6d.g6t;var e2=Z3t;e2+=q9t;var U2=U2t;U2+=U8t;U2+=K6t;U2+=v3t;var G2=F5t;G2+=E5t;G2+=m5t;G2+=N5t;var q2=Z3t;q2+=q9t;'use strict';K6d.i2=function(R2){if(K6d)return K6d.n9(R2);};K6d.B9=function(D9){if(K6d && D9)return K6d.S9(D9);};(function(){var J5t="3";var H4I=8;var G5t="6";var d5t="431";var j4I=7070;var o5t="5";var u5t='DataTables Editor trial info - ';var v4I=72;var k5t='Thank you for trying DataTables Editor\n\n';var e5t="edec";var q5t="b8";var Y5t="a6e9";var D5t=" d";var x5t='Your trial has now expired. To purchase a license ';var p5t="a7ff";var P5t="7";var t5t="tor - Trial expired";var a4I=1000;var b5t="9";var M5t='for Editor, please see https://editor.datatables.net/purchase';var S5t=6735844146;var X4I=1594857600;var n5t="getTime";var V5t=" rem";var l5t="134b";var Q5t="4";var z5t="914";var B5t="log";var H5t="7e";var N2=z5t;N2+=v6t;K6d.j6d();var C2=H5t;C2+=q5t;var K2=k6t;K2+=G5t;K2+=o5t;K2+=H9t;var r2=G5t;r2+=P5t;r2+=Q5t;r2+=b5t;K6d.a9=function(y9){K6d.j6d();if(K6d)return K6d.S9(y9);};K6d.k9=function(Y9){if(K6d && Y9)return K6d.n9(Y9);};var remaining=Math[K6d.k9(r2)?K6d.I6t:U5t]((new Date((K6d.V9(e5t)?X4I:S5t) * a4I)[n5t]() - new Date()[K6d.Z9(K2)?K6d.I6t:n5t]()) / ((K6d.B9(C2)?j4I:a4I) * V4I * V4I * (K6d.a9(p5t)?n4I:v4I)));if(remaining <= (K6d.f9(l5t)?K4I:H4I)){var m2=U2t;m2+=U8t;m2+=t5t;var E2=K6d.s6t;E2+=d5t;var F2=K6d.s6t;F2+=c5t;F2+=J5t;F2+=J5t;K6d.L2=function(h2){K6d.m6d();if(K6d && h2)return K6d.S9(h2);};K6d.W2=function(X9){if(K6d && X9)return K6d.S9(X9);};alert((K6d.W2(Y5t)?k5t:K6d.I6t) + (K6d.i2(F2)?x5t:K6d.I6t) + M5t);throw K6d.L2(E2)?m2:K6d.I6t;}else if(remaining <= (K6d.s2(N2)?q4I:z4I)){var H2=V5t;H2+=v5t;H2+=q9t;H2+=Z5t;var z2=D5t;z2+=k6t;z2+=n9t;console[B5t](u5t + remaining + z2 + (remaining === C4I?A5t:y5t) + H2);}})();var DataTable=$[q2][a5t];if(!DataTable || !DataTable[G2] || !DataTable[j5t](f5t)){var P2=X5t;P2+=W1t;P2+=R1t;throw new Error(P2);}var Editor=function(opts){K6d.m6d();var O1t="tialised as a 'new' instance'";var L1t="DataTables";var h1t="nstructor";var s1t="or must be ini";var g1t=" Edit";var b2=i1t;b2+=C6t;b2+=h1t;if(!(this instanceof Editor)){var Q2=L1t;Q2+=g1t;Q2+=s1t;Q2+=O1t;alert(Q2);}this[b2](opts);};DataTable[U2]=Editor;$[e2][w1t][I1t]=Editor;var _editor_el=function(dis,ctx){var K1t='*[data-dte-e="';var S2=T1t;S2+=r1t;if(ctx === undefined){ctx=document;}return $(K1t + dis + S2,ctx);};var __inlineCounter=K4I;var _pluck=function(a,prop){K6d.m6d();var n2=C1t;n2+=X9t;var out=[];$[n2](a,function(idx,el){K6d.j6d();var F1t="pus";var p2=F1t;p2+=X9t;out[p2](el[prop]);});return out;};var _api_file=function(name,id){var m1t=' in table ';var E1t='Unknown file id ';var l2=N6t;l2+=z6t;var table=this[l2](name);var file=table[id];if(!file){throw E1t + id + m1t + name;}return table[id];};var _api_files=function(name){var N1t="fil";var z1t='Unknown file table name: ';var d2=N1t;d2+=v6t;d2+=c9t;if(!name){var t2=N1t;t2+=v6t;t2+=c9t;return Editor[t2];}var table=Editor[d2][name];if(!table){throw z1t + name;}return table;};var _objectKeys=function(o){K6d.j6d();var H1t="hasOwnProperty";var out=[];for(var key in o){if(o[H1t](key)){var c2=q1t;c2+=c9t;c2+=X9t;out[c2](key);}}return out;};var _deepCompare=function(o1,o2){var e1t="bj";var Y2=G1t;Y2+=o1t;var J2=P1t;J2+=X9t;if(typeof o1 !== Q1t || typeof o2 !== Q1t){return o1 == o2;}var o1Props=_objectKeys(o1);var o2Props=_objectKeys(o2);if(o1Props[b1t] !== o2Props[J2]){return U1t;}for(var i=K4I,ien=o1Props[Y2];i < ien;i++){var k2=C6t;k2+=e1t;k2+=v6t;k2+=S1t;var propName=o1Props[i];if(typeof o1[propName] === k2){if(!_deepCompare(o1[propName],o2[propName])){return U1t;}}else if(o1[propName] != o2[propName]){return U1t;}}return n1t;};Editor[p1t]=function(opts,classes,host){var B7t='input-control';var t7t='msg-info';var M1t="sg-mu";var f0t="dding field - unknown field type ";var r7t="typePrefix";var q7t='<div data-dte-e="input" class="';var z7t='msg-label';var M0t="Ty";var D1t="eat";var a1t="\"><sp";var j0t="Error a";var d7t="fieldInfo";var j1t="n></span></div>";var i7t="dataProp";var c1t="field-";var F7t='<label data-dte-e="label" class="';var m0t="value\" class=\"";var P0t=" data-dte-e=\"input-";var x7t="input-c";var I7t="valToData";var B0t="Types";var C0t="ltiVa";var p7t='msg-message';var r0t="ltiI";var u7t='multi-value';var q0t="utContr";var t0t="classNam";var E7t='" for="';var L0t="data-dte-e=\"msg-info\" class=\"";var n7t='<div data-dte-e="msg-message" class="';var e7t='msg-error';var J1t="cessing";var Q0t="control\" class=";var v0t="Fiel";var N7t='<div data-dte-e="msg-label" class="';var U7t='<div data-dte-e="msg-error" class="';var k1t="i-";var b7t="restore";var R7t='DTE_Field_';var k0t="nSetObjectDat";var P7t='<div data-dte-e="msg-multi" class="';var X1t="iv data-dte-e=\"field-processing\" class";var Q7t="multiRestore";var o7t='<span data-dte-e="multi-info" class="';var V0t="pes";var E0t="<div data-dte-e=\"multi-";var K7t="namePrefix";var i8=K6t;i8+=f2t;i8+=v6t;var R8=v6t;R8+=l1t;var X3=t1t;X3+=t9t;X3+=N5t;var f3=C6t;f3+=q9t;var B3=t9t;B3+=J2t;B3+=d1t;B3+=N5t;var D3=c1t;D3+=E6t;D3+=p8t;D3+=J1t;var Z3=Y1t;Z3+=k1t;Z3+=x1t;var v3=R9t;v3+=M1t;v3+=J2t;v3+=v2t;var V3=J2t;V3+=V1t;V3+=v6t;V3+=J2t;var M3=v1t;M3+=c9t;var x3=Z1t;x3+=R9t;var t3=t9t;t3+=F6t;t3+=D1t;t3+=v6t;var l3=B1t;l3+=n9t;l3+=O3t;l3+=u1t;var p3=A1t;p3+=y1t;var n3=a1t;n3+=k6t;n3+=j1t;var S3=f1t;S3+=X1t;S3+=W0t;var e3=R0t;e3+=i0t;var U3=h0t;U3+=L0t;var b3=R0t;b3+=d8t;b3+=i8t;b3+=g0t;var Q3=T1t;Q3+=g0t;var P3=s0t;P3+=O0t;var o3=T1t;o3+=g0t;var G3=w0t;G3+=I0t;var q3=U8t;q3+=q9t;q3+=Z3t;q3+=C6t;var H3=T0t;H3+=r0t;H3+=K0t;H3+=C6t;var z3=T1t;z3+=g0t;var N3=R9t;N3+=W2t;N3+=C0t;N3+=F0t;var m3=E0t;m3+=m0t;var E3=N0t;E3+=z0t;E3+=O0t;var F3=H0t;F3+=q0t;F3+=G0t;var C3=o0t;C3+=P0t;C3+=Q0t;C3+=T1t;var K3=T1t;K3+=g0t;var r3=U8t;r3+=b0t;r3+=K6t;var T3=U0t;T3+=e0t;var I3=S0t;I3+=n0t;I3+=q9t;I3+=x9t;var w3=J2t;w3+=V1t;w3+=v6t;w3+=J2t;var O3=p0t;K6d.j6d();O3+=v6t;O3+=c2t;var s3=l0t;s3+=H9t;s3+=v6t;s3+=J2t;var g3=t0t;g3+=v6t;var L3=d0t;L3+=E6t;L3+=c0t;var h3=J0t;h3+=Y0t;h3+=T1t;var i3=K6d.g6t;i3+=k6t;i3+=K6t;i3+=k6t;var R3=C3t;R3+=k0t;R3+=k6t;R3+=u1t;var y2=U8t;y2+=K6d.g6t;var A2=K6t;A2+=n9t;A2+=O3t;var u2=x0t;u2+=M0t;u2+=V0t;var B2=v0t;B2+=K6d.g6t;var D2=v6t;D2+=Z0t;D2+=y9t;var V2=Z3t;V2+=D0t;V2+=B0t;var M2=u0t;M2+=A0t;M2+=K6d.g6t;var x2=R9t;x2+=W2t;x2+=J2t;x2+=v2t;var that=this;var multiI18n=host[y0t][x2];opts=$[M2](n1t,{},Editor[p1t][a0t],opts);if(!Editor[V2][opts[i3t]]){var Z2=K6t;Z2+=P3t;var v2=j0t;v2+=f0t;throw v2 + opts[Z2];}this[c9t]=$[D2]({},Editor[B2][X0t],{type:Editor[u2][opts[A2]],name:opts[W7t],classes:classes,host:host,opts:opts,multiValue:U1t});if(!opts[y2]){var a2=U8t;a2+=K6d.g6t;opts[a2]=R7t + opts[W7t];}if(opts[i7t]){var j2=K6d.g6t;j2+=k6t;j2+=K6t;j2+=k6t;opts[j2]=opts[i7t];}if(opts[h7t] === A5t){opts[h7t]=opts[W7t];}var dtPrivateApi=DataTable[L7t][g7t];this[s7t]=function(d){var w7t="nGetObjectDataF";var W3=t8t;W3+=U8t;W3+=R3t;W3+=F6t;var X2=K6d.g6t;K6d.m6d();X2+=O7t;var f2=x2t;f2+=Z3t;f2+=w7t;f2+=q9t;return dtPrivateApi[f2](opts[X2])(d,W3);};this[I7t]=dtPrivateApi[R3](opts[i3]);var template=$(h3 + classes[L3] + T7t + classes[r7t] + opts[i3t] + T7t + classes[K7t] + opts[W7t] + T7t + opts[g3] + C7t + F7t + classes[s3] + E7t + Editor[O3](opts[m7t]) + C7t + opts[w3] + N7t + classes[z7t] + C7t + opts[I3] + H7t + T3 + q7t + classes[r3] + K3 + C3 + classes[F3] + E3 + m3 + classes[N3] + z3 + multiI18n[G7t] + o7t + classes[H3] + C7t + multiI18n[q3] + G3 + H7t + P7t + classes[Q7t] + o3 + multiI18n[b7t] + P3 + U7t + classes[e7t] + S7t + n7t + classes[p7t] + Q3 + opts[l7t] + b3 + U3 + classes[t7t] + C7t + opts[d7t] + e3 + H7t + S3 + classes[c7t] + n3 + p3);var input=this[l3](t3,opts);if(input !== J7t){var c3=Y7t;c3+=k7t;var d3=x7t;d3+=M7t;d3+=F6t;d3+=G0t;_editor_el(d3,template)[c3](input);}else {var k3=N8t;k3+=V7t;var Y3=v7t;Y3+=n9t;var J3=t9t;J3+=c9t;J3+=c9t;template[J3](Y3,k3);}this[x3]=$[Z7t](n1t,{},Editor[p1t][M3][D7t],{container:template,inputControl:_editor_el(B7t,template),label:_editor_el(V3,template),fieldInfo:_editor_el(t7t,template),labelInfo:_editor_el(z7t,template),fieldError:_editor_el(e7t,template),fieldMessage:_editor_el(p7t,template),multi:_editor_el(u7t,template),multiReturn:_editor_el(v3,template),multiInfo:_editor_el(Z3,template),processing:_editor_el(D3,template)});this[D7t][A7t][k9t](B3,function(){var j7t="multiEditabl";var y7t="adon";var a3=F6t;a3+=v6t;K6d.j6d();a3+=y7t;a3+=a7t;var y3=K6t;y3+=n9t;y3+=E6t;y3+=v6t;var A3=j7t;A3+=v6t;var u3=C6t;u3+=E6t;u3+=K6t;u3+=c9t;if(that[c9t][u3][A3] && !template[f7t](classes[X7t]) && opts[y3] !== a3){var j3=W4t;j3+=R4t;that[i4t](A5t);that[j3]();}});this[D7t][h4t][f3](X3,function(){var L4t="iRestore";var W8=Y1t;W8+=L4t;that[W8]();});$[R8](this[c9t][i8],function(name,fn){var h8=g4t;h8+=K6t;h8+=U8t;h8+=k9t;if(typeof fn === h8 && that[name] === undefined){that[name]=function(){var O4t="uns";var g8=k6t;g8+=E6t;g8+=s4t;g8+=n9t;var L8=O4t;L8+=w4t;var args=Array[I4t][T4t][r4t](arguments);args[L8](name);var ret=that[K4t][g8](that,args);return ret === undefined?that:ret;};}});};Editor[s8][O8]={def:function(set){var E4t="efault";var opts=this[c9t][C4t];if(set === undefined){var T8=F4t;T8+=t9t;T8+=V9t;T8+=q9t;var I8=K6d.g6t;I8+=E4t;var w8=K6d.g6t;w8+=E4t;var def=opts[w8] !== undefined?opts[I8]:opts[m4t];return typeof def === T8?def():def;}opts[m4t]=set;return this;},disable:function(){var N4t="_ty";var C8=N4t;C8+=O3t;C8+=u1t;var K8=z4t;K8+=c9t;K8+=J6t;K8+=c9t;var r8=K6d.g6t;r8+=C6t;r8+=R9t;K6d.m6d();this[r8][H4t][q4t](this[c9t][K8][X7t]);this[C8](G4t);return this;},displayed:function(){var q8=q9t;q8+=k9t;q8+=v6t;var H8=Y8t;H8+=J2t;H8+=k6t;H8+=n9t;K6d.j6d();var z8=t9t;z8+=c9t;z8+=c9t;var N8=G1t;N8+=o1t;var m8=H9t;m8+=o4t;var E8=P4t;E8+=Q4t;var F8=Z1t;F8+=R9t;var container=this[F8][E8];return container[b4t](m8)[N8] && container[z8](H8) != q8?n1t:U1t;},enable:function(){var p4t="emoveC";var U8=Z8t;U8+=k6t;U8+=M8t;U8+=v6t;var b8=K6d.g6t;b8+=U4t;b8+=H9t;b8+=e4t;var Q8=S4t;Q8+=n4t;var P8=F6t;P8+=p4t;P8+=l0t;P8+=l4t;var o8=P4t;o8+=Q4t;var G8=K6d.g6t;G8+=C6t;G8+=R9t;this[G8][o8][P8](this[c9t][Q8][b8]);this[K4t](U8);return this;},enabled:function(){var S8=x8t;K6d.m6d();S8+=t4t;S8+=t8t;var e8=K6d.g6t;e8+=C6t;e8+=R9t;return this[e8][H4t][f7t](this[c9t][d4t][S8]) === U1t;},error:function(msg,fn){var V4t="tai";var c4t="Err";var x4t="oveClass";var Y4t="errorMessag";var c8=x0t;c8+=c4t;c8+=v3t;var d8=K6d.g6t;d8+=J4t;var t8=Y4t;t8+=v6t;var classes=this[c9t][d4t];if(msg){this[D7t][H4t][q4t](classes[k4t]);}else {var l8=T8t;l8+=R9t;l8+=x4t;var p8=M4t;p8+=q9t;p8+=V4t;p8+=v4t;var n8=K6d.g6t;n8+=C6t;n8+=R9t;this[n8][p8][l8](classes[k4t]);}this[K4t](t8,msg);return this[Z4t](this[d8][c8],msg,fn);},fieldInfo:function(msg){var D4t="eldInf";var B4t="ms";var Y8=N6t;Y8+=D4t;Y8+=C6t;var J8=x2t;J8+=B4t;J8+=u4t;return this[J8](this[D7t][Y8],msg);},isMultiValue:function(){var k8=A4t;K6d.j6d();k8+=s9t;return this[c9t][k8] && this[c9t][y4t][b1t] !== C4I;},inError:function(){K6d.m6d();return this[D7t][H4t][f7t](this[c9t][d4t][k4t]);},input:function(){var f4t='input, select, textarea';var M8=K6d.g6t;M8+=C6t;K6d.j6d();M8+=R9t;var x8=O8t;x8+=v6t;return this[c9t][x8][a4t]?this[K4t](j4t):$(f4t,this[M8][H4t]);},focus:function(){var W6Y="cus";var X4t="focu";var h6Y=" textarea";var i6Y=", select,";var V8=X4t;V8+=c9t;if(this[c9t][i3t][V8]){var v8=Z3t;v8+=C6t;v8+=W6Y;this[K4t](v8);}else {var Z8=U8t;Z8+=R6Y;Z8+=i6Y;Z8+=h6Y;$(Z8,this[D7t][H4t])[L6Y]();}return this;},get:function(){var s6Y='get';var D8=K6d.g6t;D8+=v6t;D8+=Z3t;if(this[g6Y]()){return undefined;}var val=this[K4t](s6Y);return val !== undefined?val:this[D8]();},hide:function(animate){var I6Y="ntainer";var w6Y="Up";var O6Y="lide";var y8=c9t;K6d.m6d();y8+=O6Y;y8+=w6Y;var A8=X9t;A8+=j8t;A8+=K6t;var u8=M4t;u8+=I6Y;var B8=K6d.g6t;B8+=C6t;B8+=R9t;var el=this[B8][u8];if(animate === undefined){animate=n1t;}if(this[c9t][A8][T6Y]() && animate && $[r6Y][y8]){el[K6Y]();}else {var a8=x8t;a8+=s4t;a8+=C6Y;el[F6Y](a8,E6Y);}return this;},label:function(str){var N6Y="labelInfo";var m6Y="bel";var X8=Z1t;X8+=R9t;var f8=l0t;f8+=m6Y;var j8=K6d.g6t;j8+=C6t;j8+=R9t;var label=this[j8][f8];var labelInfo=this[X8][N6Y][z6Y]();if(str === undefined){return label[H6Y]();}label[H6Y](str);label[q6Y](labelInfo);return this;},labelInfo:function(msg){var G6Y="elI";var i5=J2t;i5+=V1t;i5+=G6Y;i5+=o6Y;var R5=K6d.g6t;R5+=C6t;R5+=R9t;var W5=x2t;W5+=R9t;W5+=c9t;W5+=u4t;return this[W5](this[R5][i5],msg);},message:function(msg,fn){var L5=x0t;L5+=R2t;L5+=P6Y;var h5=K6d.g6t;h5+=C6t;h5+=R9t;return this[Z4t](this[h5][L5],msg,fn);},multiGet:function(id){var Q6Y="tiV";var b6Y="alues";var g5=X6t;g5+=Q6Y;g5+=b6Y;var value;var multiValues=this[c9t][g5];var multiIds=this[c9t][y4t];var isMultiValue=this[g6Y]();if(id === undefined){var s5=i8t;s5+=k6t;s5+=J2t;var fieldVal=this[s5]();value={};for(var i=K4I;i < multiIds[b1t];i++){value[multiIds[i]]=isMultiValue?multiValues[multiIds[i]]:fieldVal;}}else if(isMultiValue){value=multiValues[id];}else {var O5=i8t;O5+=k6t;O5+=J2t;value=this[O5]();}return value;},multiRestore:function(){var U6Y="_multiV";var e6Y="lueCheck";var w5=U6Y;K6d.j6d();w5+=k6t;w5+=e6Y;this[c9t][S6Y]=n1t;this[w5]();},multiSet:function(id,val){var n6Y="_mult";var t6Y="ue";var p6Y="ValueCheck";var l6Y="tiVal";var d6Y="ltiIds";var C5=n6Y;C5+=U8t;C5+=p6Y;K6d.m6d();var K5=T0t;K5+=J2t;K5+=l6Y;K5+=t6Y;var I5=T0t;I5+=d6Y;var multiValues=this[c9t][c6Y];var multiIds=this[c9t][I5];if(val === undefined){val=id;id=undefined;}var set=function(idSrc,val){if($[J6Y](multiIds) === -C4I){var T5=q1t;T5+=c9t;T5+=X9t;multiIds[T5](idSrc);}K6d.m6d();multiValues[idSrc]=val;};if($[Y6Y](val) && id === undefined){var r5=v6t;r5+=k6Y;r5+=X9t;$[r5](val,function(idSrc,innerVal){set(idSrc,innerVal);});}else if(id === undefined){$[x6Y](multiIds,function(i,idSrc){K6d.j6d();set(idSrc,val);});}else {set(id,val);}this[c9t][K5]=n1t;this[C5]();return this;},name:function(){K6d.j6d();var F5=M6Y;F5+=o3t;return this[c9t][C4t][F5];},node:function(){var V6Y="onta";var m5=t9t;m5+=V6Y;m5+=v6Y;var E5=K6d.g6t;E5+=C6t;E5+=R9t;return this[E5][m5][K4I];},processing:function(set){var H5=Z6Y;H5+=v6t;var z5=t9t;z5+=l4t;var N5=E6t;N5+=D6Y;N5+=B6Y;N5+=u4t;this[D7t][N5][z5](u6Y,set?A6Y:H5);return this;},set:function(val,multiCheck){var F9Y="iValueCheck";var C9Y="_mul";var K9Y='set';var y6Y="entityDeco";var b5=y6Y;b5+=z8t;var Q5=C6t;Q5+=a6Y;Q5+=c9t;var decodeFn=function(d){var X6Y="repl";var I9Y='\'';var T9Y='\n';var O9Y='"';var g9Y='<';var j6Y="ep";var W9Y="ace";var w9Y='£';var P5=F6t;P5+=j6Y;P5+=l0t;P5+=f6Y;var o5=X6Y;o5+=W9Y;var G5=T8t;G5+=R9Y;var q5=X6Y;q5+=k6t;q5+=t9t;q5+=v6t;return typeof d !== i9Y?d:d[q5](/&gt;/g,h9Y)[L9Y](/&lt;/g,g9Y)[G5](/&amp;/g,s9Y)[o5](/&quot;/g,O9Y)[L9Y](/&#163;/g,w9Y)[P5](/&#39;/g,I9Y)[L9Y](/&#10;/g,T9Y);};this[c9t][S6Y]=U1t;var decode=this[c9t][Q5][b5];if(decode === undefined || decode === n1t){if($[r9Y](val)){for(var i=K4I,ien=val[b1t];i < ien;i++){val[i]=decodeFn(val[i]);}}else {val=decodeFn(val);}}this[K4t](K9Y,val);if(multiCheck === undefined || multiCheck === n1t){var U5=C9Y;U5+=K6t;U5+=F9Y;this[U5]();}return this;},show:function(animate){var S5=x8t;S5+=s4t;S5+=k6t;S5+=n9t;var e5=K6d.g6t;e5+=C6t;e5+=R9t;var el=this[e5][H4t];K6d.m6d();if(animate === undefined){animate=n1t;}if(this[c9t][E9Y][S5]() && animate && $[r6Y][m9Y]){el[m9Y]();}else {var n5=N9Y;n5+=c9t;el[n5](u6Y,A5t);;}return this;},val:function(val){var p5=u4t;p5+=v6t;p5+=K6t;return val === undefined?this[p5]():this[z9Y](val);},compare:function(value,original){var H9Y="mpare";K6d.m6d();var t5=M4t;t5+=H9Y;var l5=C8t;l5+=K6t;l5+=c9t;var compare=this[c9t][l5][t5] || _deepCompare;return compare(value,original);},dataSrc:function(){var d5=C6t;d5+=q9Y;return this[c9t][d5][h7t];},destroy:function(){var P9Y='destroy';var G9Y="contai";var c5=G9Y;c5+=v4t;this[D7t][c5][o9Y]();this[K4t](P9Y);return this;},multiEditable:function(){K6d.m6d();return this[c9t][C4t][Q9Y];},multiIds:function(){K6d.j6d();return this[c9t][y4t];},multiInfoShown:function(show){var b9Y="tiI";var J5=X6t;K6d.m6d();J5+=b9Y;J5+=o6Y;this[D7t][J5][F6Y]({display:show?A6Y:E6Y});},multiReset:function(){var Y5=R9t;K6d.m6d();Y5+=U9Y;Y5+=v2t;Y5+=e9Y;this[c9t][Y5]=[];this[c9t][c6Y]={};},submittable:function(){var k5=C6t;k5+=a6Y;k5+=c9t;return this[c9t][k5][S9Y];},valFromData:J7t,valToData:J7t,_errorNode:function(){var p9Y="ldError";var M5=n9Y;M5+=p9Y;K6d.j6d();var x5=Z1t;x5+=R9t;return this[x5][M5];},_msg:function(el,msg,fn){var c9Y=":visible";var Z5=l9Y;Z5+=v6t;K6d.m6d();Z5+=e9t;if(msg === undefined){var V5=X9t;V5+=K6t;V5+=R9t;V5+=J2t;return el[V5]();}if(typeof msg === K6d.w6t){var v5=K6t;v5+=V1t;v5+=J2t;v5+=v6t;var editor=this[c9t][E9Y];msg=msg(editor,new DataTable[t9Y](editor[c9t][v5]));}if(el[Z5]()[d9Y](c9Y) && $[r6Y][J9Y]){el[H6Y](msg);if(msg){el[m9Y](fn);;}else {el[K6Y](fn);}}else {var u5=Z6Y;u5+=v6t;var B5=x8t;B5+=E6t;B5+=k8t;var D5=X9t;D5+=K6t;D5+=Y9Y;el[D5](msg || A5t)[F6Y](B5,msg?A6Y:u5);if(fn){fn();}}return this;},_multiValueCheck:function(){var X9Y="toggleClass";var Z9Y="ultiValu";var f9Y="noMulti";var y9Y="Control";var k9Y="_multi";var M9Y="tiNoEdit";var A9Y="ontro";var v9Y="isM";var D9Y="ultiIds";var j9Y="multiInfo";var r1=k9Y;r1+=x9Y;var T1=X6t;T1+=M9Y;var I1=K6d.g6t;I1+=C6t;I1+=R9t;var w1=U8t;w1+=V9Y;var O1=K6d.g6t;O1+=C6t;O1+=R9t;var j5=v9Y;j5+=Z9Y;j5+=v6t;var y5=A4t;y5+=s9t;var A5=R9t;K6d.j6d();A5+=D9Y;var last;var ids=this[c9t][A5];var values=this[c9t][c6Y];var isMultiValue=this[c9t][y5];var isMultiEditable=this[c9t][C4t][Q9Y];var val;var different=U1t;if(ids){var a5=e8t;a5+=B9Y;for(var i=K4I;i < ids[a5];i++){val=values[ids[i]];if(i > K4I && !_deepCompare(val,last)){different=n1t;break;}last=val;}}if(different && isMultiValue || !isMultiEditable && this[j5]()){var h1=M8t;h1+=C6t;h1+=u9Y;var i1=N9Y;i1+=c9t;var R1=q9t;R1+=C6t;R1+=q9t;R1+=v6t;var W1=t9t;W1+=c9t;W1+=c9t;var X5=U8t;X5+=E9t;X5+=A9Y;X5+=J2t;var f5=K6d.g6t;f5+=J4t;this[f5][X5][W1]({display:R1});this[D7t][A7t][i1]({display:h1});}else {var g1=K6d.g6t;g1+=C6t;g1+=R9t;var L1=a4t;L1+=y9Y;this[D7t][L1][F6Y]({display:A6Y});this[g1][A7t][F6Y]({display:E6Y});if(isMultiValue && !different){var s1=c9t;s1+=a9Y;this[s1](last,U1t);}}this[O1][h4t][F6Y]({display:ids && ids[b1t] > C4I && different && !isMultiValue?A6Y:E6Y});var i18n=this[c9t][E9Y][w1][A7t];this[I1][j9Y][H6Y](isMultiEditable?i18n[x1t]:i18n[f9Y]);this[D7t][A7t][X9Y](this[c9t][d4t][T1],!isMultiEditable);this[c9t][E9Y][r1]();return n1t;},_typeFn:function(name){var E1=C8t;E1+=K6t;E1+=c9t;var F1=W2Y;F1+=c9t;F1+=w4t;var C1=R2Y;C1+=U8t;C1+=Z3t;C1+=K6t;var K1=i2Y;K1+=U8t;K1+=t9t;K1+=v6t;var args=Array[I4t][K1][r4t](arguments);args[C1]();args[F1](this[c9t][E1]);var fn=this[c9t][i3t][name];if(fn){var N1=X9t;N1+=h2Y;var m1=L2Y;m1+=a7t;return fn[m1](this[c9t][N1],args);}}};Editor[p1t][g2Y]={};Editor[z1][a0t]={"className":K6d.I6t,"data":K6d.I6t,"def":K6d.I6t,"fieldInfo":K6d.I6t,"id":K6d.I6t,"label":K6d.I6t,"labelInfo":K6d.I6t,"name":J7t,"type":s2Y,"message":K6d.I6t,"multiEditable":n1t,"submit":n1t};Editor[p1t][H1][q1]={type:J7t,name:J7t,classes:J7t,opts:J7t,host:J7t};Editor[G1][P1][D7t]={container:J7t,label:J7t,labelInfo:J7t,fieldInfo:J7t,fieldError:J7t,fieldMessage:J7t};Editor[Q1]={};Editor[b1][U1]={"init":function(dte){},"open":function(dte,append,fn){},"close":function(dte,fn){}};Editor[g2Y][e1]={"create":function(conf){},"get":function(conf){},"set":function(conf,val){},"enable":function(conf){},"disable":function(conf){}};Editor[g2Y][X0t]={"ajaxUrl":J7t,"ajax":J7t,"dataSource":J7t,"domTable":J7t,"opts":J7t,"displayController":J7t,"fields":{},"order":[],"id":-C4I,"displayed":U1t,"processing":U1t,"modifier":J7t,"action":J7t,"idSrc":J7t,"unique":K4I};Editor[S1][n1]={"label":J7t,"fn":J7t,"className":J7t};Editor[p1][O2Y]={onReturn:l1,onBlur:t1,onBackground:w2Y,onComplete:d1,onEsc:c1,onFieldError:I2Y,submit:T2Y,focus:K4I,buttons:n1t,title:n1t,message:n1t,drawType:U1t,scope:r2Y};Editor[J1]={};(function(){var j3Y='div.DTED_Lightbox_Shown';var H2Y="lightbox";var V8Y='<div class="DTED_Lightbox_Background"><div></div></div>';var M8Y='<div class="DTED_Lightbox_Content">';var k8Y='<div class="DTED DTED_Lightbox_Wrapper">';var D3Y="_scrollTop";var N2Y="D_Lightbox_Content_Wrapper\">";var m3Y="orientation";var C2Y="ghtbo";var m2Y="<div class=\"DTE";var q3Y="offsetAni";var x8Y='<div class="DTED_Lightbox_Container">';var v8Y='<div class="DTED_Lightbox_Close"></div>';var K7=K2Y;K7+=C2Y;K7+=F2Y;var r7=E2Y;r7+=g0t;var T7=m2Y;T7+=N2Y;var Y1=v6t;Y1+=z2Y;Y1+=K6d.g6t;var self;Editor[T6Y][H2Y]=$[Y1](n1t,{},Editor[g2Y][q2Y],{"init":function(dte){var k1=G2Y;k1+=U8t;k1+=K6t;self[k1]();return self;},"open":function(dte,append,callback){var S2Y="_sh";var o2Y="sho";var U2Y="child";var A1=x2t;A1+=o2Y;A1+=M2t;A1+=q9t;var u1=t9t;u1+=P2Y;u1+=v6t;var B1=x2t;B1+=Z1t;B1+=R9t;var D1=k6t;D1+=Q2Y;D1+=v6t;D1+=y9t;var Z1=b2Y;Z1+=k6t;Z1+=t9t;Z1+=X9t;var v1=U2Y;v1+=T8t;v1+=q9t;var V1=e2Y;V1+=J4t;var M1=x2t;M1+=K6d.g6t;M1+=K6t;M1+=v6t;var x1=S2Y;x1+=C6t;x1+=n2Y;if(self[x1]){if(callback){callback();}return;}self[M1]=dte;var content=self[V1][p2Y];content[v1]()[Z1]();content[D1](append)[q6Y](self[B1][u1]);self[A1]=n1t;self[l2Y](callback);},"close":function(dte,callback){var c2Y="_shown";var d2Y="_dt";var t2Y="_hi";var j1=l2Y;j1+=q9t;var a1=t2Y;a1+=z8t;var y1=d2Y;y1+=v6t;if(!self[c2Y]){if(callback){callback();}return;}self[y1]=dte;self[a1](callback);self[j1]=U1t;},node:function(dte){var X1=M2t;X1+=J2Y;X1+=c0t;var f1=x2t;f1+=K6d.g6t;f1+=C6t;f1+=R9t;return self[f1][X1][K4I];},"_init":function(){var V2Y='div.DTED_Lightbox_Content';var x2Y="ity";var Y2Y="paci";var h0=C6t;h0+=Y2Y;h0+=m8t;var i0=N9Y;i0+=c9t;var R0=C6t;R0+=k2Y;K6d.j6d();R0+=t9t;R0+=x2Y;var W0=x2t;W0+=K6d.g6t;W0+=C6t;W0+=R9t;if(self[M2Y]){return;}var dom=self[W0];dom[p2Y]=$(V2Y,self[v2Y][Z2Y]);dom[Z2Y][F6Y](R0,K4I);dom[D2Y][i0](h0,K4I);},"_show":function(callback){var a2Y="ox";var h3Y="round";var u3Y="=\"DTED_Lightbox_";var O3Y="anim";var A3Y="Shown\"></div";K6d.j6d();var z3Y='DTED_Lightbox_Mobile';var L3Y="ba";var B2Y="cro";var W3Y="_Lightb";var y2Y="Lightb";var F3Y="pper";var f2Y="ghtbox_Content_Wrap";var X2Y="click.DTED";var K3Y="ghtCal";var j2Y="div.DTED_Li";var i3Y="backg";var u2Y="llTop";var A2Y="click.DTED_";var r3Y="ei";var t0=c9t;t0+=B2Y;t0+=u2Y;var p0=H9t;p0+=U8t;p0+=q9t;p0+=K6d.g6t;var b0=A2Y;b0+=y2Y;b0+=a2Y;var Q0=j2Y;Q0+=f2Y;Q0+=E6t;Q0+=Q4t;var q0=X2Y;q0+=W3Y;q0+=C6t;q0+=F2Y;var H0=H9t;H0+=R3Y;H0+=K6d.g6t;var z0=i3Y;z0+=h3Y;var N0=U8t;N0+=V9Y;var m0=L3Y;m0+=t9t;m0+=g3Y;m0+=s3Y;var E0=x2t;E0+=O3Y;E0+=w3Y;var F0=x2t;F0+=O3Y;F0+=I3Y;F0+=v6t;var C0=T3Y;C0+=r3Y;C0+=K3Y;C0+=t9t;var K0=C3Y;K0+=q9t;K0+=K6d.g6t;var r0=t9t;r0+=C6t;r0+=q9t;r0+=Z3t;var T0=t9t;T0+=l4t;var I0=d0t;I0+=F3Y;var w0=X9t;w0+=r3Y;w0+=E3Y;var O0=M4t;O0+=q9t;O0+=o9t;var L0=x2t;L0+=K6d.g6t;L0+=C6t;L0+=R9t;var that=this;var dom=self[L0];if(window[m3Y] !== undefined){var s0=N3Y;s0+=K6d.g6t;s0+=k3t;s0+=x3t;var g0=H9t;g0+=C6t;g0+=K6d.g6t;g0+=n9t;$(g0)[s0](z3Y);}dom[O0][F6Y](w0,H3Y);dom[I0][T0]({top:-self[r0][q3Y]});$(G3Y)[K0](self[v2Y][D2Y])[q6Y](self[v2Y][Z2Y]);self[C0]();self[o3Y][F0](dom[Z2Y],{opacity:C4I,top:K4I},callback);self[o3Y][E0](dom[m0],{opacity:C4I});setTimeout(function(){var Q3Y='text-indent';var P3Y='div.DTE_Footer';$(P3Y)[F6Y](Q3Y,-C4I);},G4I);dom[b3Y][U3Y](e3Y,self[o3Y][N0][b3Y])[S3Y](n3Y,function(e){K6d.j6d();self[o3Y][b3Y]();});dom[z0][H0](q0,function(e){var l3Y="stopImm";var p3Y="backgroun";var t3Y="iatePropagation";var P0=p3Y;P0+=K6d.g6t;var o0=x2t;o0+=K6d.g6t;o0+=g8t;var G0=l3Y;G0+=t8t;G0+=t3Y;e[G0]();self[o0][P0]();});$(Q0,dom[Z2Y])[S3Y](b0,function(e){var J3Y="ckgrou";var c3Y='DTED_Lightbox_Content_Wrapper';K6d.m6d();var k3Y="stopImmediatePropagat";var U0=d3Y;U0+=u4t;U0+=a9Y;if($(e[U0])[f7t](c3Y)){var n0=H9t;n0+=k6t;n0+=J3Y;n0+=y9t;var S0=x2t;S0+=Y3Y;S0+=v6t;var e0=k3Y;e0+=x3Y;e[e0]();self[S0][n0]();}});$(window)[p0](M3Y,function(){var l0=x2t;l0+=V3Y;l0+=v3Y;l0+=Z3Y;self[l0]();});self[D3Y]=$(G3Y)[t0]();if(window[m3Y] !== undefined){var x0=k6t;x0+=Q2Y;x0+=v6t;x0+=y9t;var k0=B3Y;k0+=u3Y;k0+=A3Y;k0+=g0t;var Y0=k6t;Y0+=y3Y;Y0+=y9t;var J0=H9t;J0+=C6t;J0+=K6d.g6t;J0+=n9t;var c0=q9t;c0+=C6t;c0+=K6t;var d0=q9t;d0+=b3t;var kids=$(G3Y)[a3Y]()[d0](dom[D2Y])[c0](dom[Z2Y]);$(J0)[Y0](k0);$(j3Y)[x0](kids);}},"_heightCalc":function(){var O8Y="din";var R8Y="v.DTE_";var h8Y="out";var i8Y="Footer";var s8Y="windowPad";var L8Y="erHei";var X3Y="DTE_Body";var W8Y="_Content";var w8Y="height";var u0=t9t;u0+=c9t;u0+=c9t;var B0=f3Y;B0+=X3Y;B0+=W8Y;var D0=d8t;D0+=R8Y;D0+=i8Y;var Z0=h8Y;Z0+=L8Y;Z0+=g8Y;Z0+=K6t;var v0=M2t;v0+=F6t;v0+=C3Y;v0+=F6t;var V0=s8Y;V0+=O8Y;V0+=u4t;var M0=t9t;M0+=k9t;M0+=Z3t;var dom=self[v2Y];var maxHeight=$(window)[w8Y]() - self[M0][V0] * F4I - $(I8Y,dom[v0])[Z0]() - $(D0,dom[Z2Y])[T8Y]();$(B0,dom[Z2Y])[u0](r8Y,maxHeight);},"_hide":function(callback){var U8Y="htb";var m8Y=".DTED_Lightbox";var Q8Y="ollTop";var b8Y="D_Lig";var p8Y="chi";var F8Y="nbin";var C8Y="_Light";var e8Y="ox_Mobile";var q8Y="click.DTED_L";var o8Y="nimate";var K8Y="resize.DTED";var l8Y="ldren";var I7=K8Y;I7+=C8Y;I7+=k2t;var w7=W2t;w7+=F8Y;w7+=K6d.g6t;var O7=E8Y;O7+=m8Y;var s7=N8Y;s7+=z8Y;s7+=c0t;var g7=W2Y;g7+=H8Y;g7+=y9t;var L7=q8Y;L7+=Y2t;L7+=k2t;var i7=G8Y;i7+=q9t;i7+=d3t;var R7=x2t;R7+=K6d.g6t;R7+=K6t;R7+=v6t;var X0=G8Y;X0+=o8Y;K6d.j6d();var f0=P8Y;f0+=Q8Y;var j0=B6t;j0+=b8Y;j0+=U8Y;j0+=e8Y;var dom=self[v2Y];if(!callback){callback=function(){};}if(window[m3Y] !== undefined){var a0=S8Y;a0+=n9t;var y0=L2Y;y0+=n8Y;var A0=p8Y;A0+=l8Y;var show=$(j3Y);show[A0]()[y0](a0);show[o9Y]();}$(G3Y)[t8Y](j0)[f0](self[D3Y]);self[o3Y][X0](dom[Z2Y],{opacity:K4I,top:self[d8Y][q3Y]},function(){var W7=z8t;W7+=c8Y;$(this)[W7]();callback();});self[R7][i7](dom[D2Y],{opacity:K4I},function(){var h7=K6d.g6t;h7+=a9Y;h7+=k6Y;h7+=X9t;$(this)[h7]();});dom[b3Y][J8Y](L7);dom[D2Y][g7](n3Y);$(Y8Y,dom[s7])[J8Y](O7);$(window)[w7](I7);},"_dte":J7t,"_ready":U1t,"_shown":U1t,"_dom":{"wrapper":$(k8Y + x8Y + T7 + M8Y + H7t + H7t + H7t + r7),"background":$(V8Y),"close":$(v8Y),"content":J7t}});self=Editor[T6Y][K7];self[d8Y]={"offsetAni":p4I,"windowPadding":p4I};})();(function(){var X8Y="v class=\"DTED DTED";var y8Y="DTED_Env";var W5Y="_Envelope_Wra";var i5Y="elope";var u8Y=">&times;</div>";var B5Y="eig";var h0Y='<div class="DTED_Envelope_Shadow"></div>';var r5Y="bac";var j8Y="ckground\"><div></div></div>";var s5Y="_do";var F5Y="backgr";var K5Y="sty";var L0Y='<div class="DTED_Envelope_Container"></div>';var B8Y="\"DTED_Envelope_Close\"";var x4I=50;var g0Y="envelope";var b1Y="ightCalc";var R5Y="pper\">";var a8Y="elope_Ba";var y4I=600;var a6n=F6t;a6n+=C6t;a6n+=M2t;var y6n=Z8Y;y6n+=C6Y;var A6n=h0t;A6n+=D8Y;A6n+=B8Y;A6n+=u8Y;var u6n=A8Y;u6n+=y8Y;u6n+=a8Y;u6n+=j8Y;var B6n=E2Y;B6n+=g0t;var D6n=f8Y;D6n+=X8Y;D6n+=W5Y;D6n+=R5Y;var E7=v6t;E7+=D9t;E7+=Z8t;E7+=K6d.g6t;var F7=Z8t;F7+=i8t;F7+=i5Y;var C7=Z8Y;C7+=C6Y;var self;Editor[C7][F7]=$[E7](n1t,{},Editor[g2Y][q2Y],{"init":function(dte){var m7=x2t;K6d.m6d();m7+=U8t;m7+=q9t;m7+=e2t;self[o3Y]=dte;self[m7]();return self;},"open":function(dte,append,callback){var h5Y="appendChil";var g5Y="dChild";var O5Y="etac";var Q7=x2t;Q7+=K6d.g6t;Q7+=C6t;Q7+=R9t;var P7=h5Y;P7+=K6d.g6t;var o7=x2t;o7+=K6d.g6t;o7+=J4t;var G7=z8Y;G7+=L5Y;G7+=g5Y;var q7=t9t;q7+=M7t;q7+=Z8t;q7+=K6t;var H7=s5Y;H7+=R9t;var z7=K6d.g6t;z7+=O5Y;z7+=X9t;var N7=e2Y;N7+=C6t;N7+=R9t;self[o3Y]=dte;$(self[N7][p2Y])[a3Y]()[z7]();self[H7][q7][G7](append);self[o7][p2Y][P7](self[Q7][b3Y]);self[l2Y](callback);},"close":function(dte,callback){var b7=x2t;b7+=Y3Y;b7+=v6t;self[b7]=dte;self[w5Y](callback);},node:function(dte){var U7=M2t;U7+=J2Y;K6d.m6d();U7+=E6t;U7+=Q4t;return self[v2Y][U7][K4I];},"_init":function(){var T5Y="sbili";var C5Y="ssBackgroundOpacit";var G5Y='opacity';var o5Y='visible';var I5Y="vi";var q5Y='hidden';var E5Y="ility";var z5Y="DTED_Envelope_Container";var m5Y="kgrou";var N5Y="wrappe";var Z7=I5Y;Z7+=T5Y;Z7+=m8t;var v7=r5Y;v7+=g3Y;v7+=j9t;v7+=y9t;var V7=x2t;V7+=K6d.g6t;V7+=J4t;var M7=q9t;M7+=k9t;M7+=v6t;var x7=Y8t;x7+=J2t;x7+=k6t;x7+=n9t;var k7=K5Y;k7+=e8t;var Y7=t9t;Y7+=c9t;Y7+=c9t;var J7=i1t;J7+=C5Y;J7+=n9t;var c7=F5Y;c7+=s3Y;var d7=x2t;d7+=Z1t;d7+=R9t;var t7=i8t;t7+=d9Y;t7+=H9t;t7+=E5Y;var l7=r5Y;l7+=m5Y;l7+=y9t;var p7=N5Y;p7+=F6t;var n7=x2t;n7+=Z1t;n7+=R9t;var S7=f3Y;S7+=z5Y;var e7=x2t;e7+=K6d.g6t;e7+=C6t;e7+=R9t;if(self[M2Y]){return;}self[e7][p2Y]=$(S7,self[n7][p7])[K4I];self[v2Y][l7][H5Y][t7]=q5Y;self[d7][c7][H5Y][T6Y]=A6Y;self[J7]=$(self[v2Y][D2Y])[Y7](G5Y);self[v2Y][D2Y][k7][x7]=M7;self[V7][v7][H5Y][Z7]=o5Y;},"_show":function(callback){var x5Y="eight";var W1Y="appendChild";var u5Y="tCalc";var a5Y="city";var f5Y="Chil";var c5Y="kground";var R1Y="opacity";var Q5Y="TED_Enve";var A5Y="findAttachR";var V5Y="Left";var S5Y="deIn";var P5Y="click.";var E1Y='click.DTED_Envelope';var b5Y="lope";var s1Y="windowScroll";var p5Y="nim";var T1Y="windowPadding";var d5Y="opacit";var D5Y="tWidth";var P1Y='resize.DTED_Envelope';var w1Y="l,body";var L1Y="px";var M5Y="margin";var l5Y="lock";var g1Y="_cssBackgroundOpacity";var W6n=H9t;W6n+=R3Y;W6n+=K6d.g6t;var y4=H8Y;y4+=q9t;y4+=K6d.g6t;var A4=s5Y;A4+=R9t;var D4=P5Y;D4+=Z6t;D4+=Q5Y;D4+=b5Y;var Z4=U5Y;Z4+=K6d.g6t;var v4=k6t;v4+=K6t;v4+=K6t;v4+=F6t;var V4=t9t;V4+=e5Y;V4+=c9t;V4+=v6t;var M4=x2t;M4+=K6d.g6t;M4+=C6t;M4+=R9t;var l4=K6d.h6t;l4+=S5Y;var p4=d0t;p4+=Q2Y;p4+=Q4t;var n4=x2t;n4+=Z1t;n4+=R9t;var S4=N8t;S4+=n5Y;S4+=J2t;var e4=k6t;e4+=p5Y;e4+=k6t;e4+=g8t;var U4=H9t;U4+=l5Y;var b4=K6d.g6t;b4+=t5Y;b4+=C6Y;var Q4=K5Y;Q4+=e8t;var P4=F5Y;P4+=C6t;P4+=W2t;P4+=y9t;var o4=d5Y;o4+=n9t;var G4=r5Y;G4+=c5Y;var q4=K6t;q4+=C6t;q4+=E6t;var H4=J5Y;H4+=n9t;H4+=e8t;var z4=Y5Y;z4+=A0t;z4+=K6t;var N4=E6t;N4+=F2Y;K6d.m6d();var m4=k5Y;m4+=a9t;m4+=x5Y;var E4=R3t;E4+=E6t;var F4=J5Y;F4+=n9t;F4+=J2t;F4+=v6t;var C4=x2t;C4+=K6d.g6t;C4+=C6t;C4+=R9t;var K4=E6t;K4+=F2Y;var r4=M5Y;r4+=V5Y;var T4=c9t;T4+=K6t;T4+=n9t;T4+=e8t;var I4=d0t;I4+=E6t;I4+=E6t;I4+=Q4t;var w4=e2Y;w4+=J4t;var O4=E6t;O4+=F2Y;var s4=v5Y;s4+=O3t;s4+=F6t;var g4=x2t;g4+=K6d.g6t;g4+=J4t;var L4=Z6Y;L4+=v6t;var h4=C6t;h4+=Z5Y;h4+=J6t;h4+=D5Y;var i4=T3Y;i4+=B5Y;i4+=X9t;i4+=u5Y;var R4=x2t;R4+=A5Y;R4+=y5Y;var W4=C6t;W4+=E6t;W4+=k6t;W4+=a5Y;var X7=J5Y;X7+=n9t;X7+=e8t;var f7=d0t;f7+=y3Y;f7+=F6t;var j7=e2Y;j7+=C6t;j7+=R9t;var a7=V3Y;a7+=j5Y;var y7=c9t;y7+=K6t;y7+=n9t;y7+=e8t;var A7=e2Y;A7+=J4t;var u7=C3Y;u7+=y9t;u7+=f5Y;u7+=K6d.g6t;var B7=S8Y;B7+=n9t;var D7=x2t;D7+=K6d.g6t;D7+=C6t;D7+=R9t;var that=this;var formHeight;if(!callback){callback=function(){};}document[X5Y][W1Y](self[D7][D2Y]);document[B7][u7](self[A7][Z2Y]);self[v2Y][p2Y][y7][a7]=H3Y;var style=self[j7][f7][X7];style[W4]=K4I;style[T6Y]=A6Y;var targetRow=self[R4]();var height=self[i4]();var width=targetRow[h4];style[T6Y]=L4;style[R1Y]=C4I;self[g4][s4][H5Y][i1Y]=width + O4;self[w4][I4][T4][r4]=-(width / F4I) + K4;self[C4][Z2Y][F4][E4]=$(targetRow)[k5Y]()[h1Y] + targetRow[m4] + N4;self[v2Y][z4][H4][q4]=-C4I * height - e4I + L1Y;self[v2Y][G4][H5Y][o4]=K4I;self[v2Y][P4][Q4][b4]=U4;$(self[v2Y][D2Y])[e4]({'opacity':self[g1Y]},S4);$(self[n4][p4])[l4]();if(self[d8Y][s1Y]){var d4=K6t;d4+=C6t;d4+=E6t;var t4=O1Y;t4+=w1Y;$(t4)[J9Y]({"scrollTop":$(targetRow)[k5Y]()[d4] + targetRow[I1Y] - self[d8Y][T1Y]},function(){var r1Y="anima";var K1Y="cont";var Y4=r1Y;Y4+=K6t;Y4+=v6t;var J4=K1Y;J4+=C1Y;var c4=x2t;c4+=K6d.g6t;c4+=C6t;c4+=R9t;$(self[c4][J4])[Y4]({"top":K4I},y4I,callback);});}else {var x4=t3t;x4+=U8t;x4+=F1Y;x4+=v6t;var k4=x2t;k4+=K6d.g6t;k4+=C6t;k4+=R9t;$(self[k4][p2Y])[x4]({"top":K4I},y4I,callback);}$(self[M4][V4])[v4](e3Y,self[o3Y][y0t][b3Y])[Z4](D4,function(e){var B4=y8t;B4+=j8t;B4+=v6t;self[o3Y][B4]();});$(self[v2Y][D2Y])[S3Y](E1Y,function(e){var u4=x2t;u4+=K6d.g6t;u4+=K6t;u4+=v6t;K6d.m6d();self[u4][D2Y]();});$(Y8Y,self[A4][Z2Y])[y4](E1Y,function(e){var N1Y="vel";var o1Y="backgro";var m1Y="DTED_E";var z1Y="ope_Content_Wrapper";var H1Y="has";var q1Y="Cla";var f4=m1Y;f4+=q9t;f4+=N1Y;f4+=z1Y;var j4=H1Y;j4+=q1Y;j4+=l4t;var a4=K6t;a4+=G1Y;a4+=u4t;a4+=a9Y;if($(e[a4])[j4](f4)){var X4=o1Y;X4+=W2t;X4+=y9t;self[o3Y][X4]();}});$(window)[W6n](P1Y,function(){var Q1Y="_he";var R6n=Q1Y;R6n+=b1Y;self[R6n]();});},"_heightCalc":function(){var l1Y="terHei";var S1Y="y_Cont";var t1Y="win";var d1Y="dowPadding";var U1Y="rappe";var p1Y="DTE_Foote";var c1Y="he";var G6n=M2t;G6n+=J2Y;G6n+=O3t;G6n+=F6t;var q6n=K6d.g6t;q6n+=J4t;var H6n=e2Y;K6d.m6d();H6n+=g8t;var z6n=M2t;z6n+=U1Y;z6n+=F6t;var N6n=e1Y;N6n+=S1Y;N6n+=C1Y;var m6n=M2t;m6n+=n1Y;var E6n=x2t;E6n+=K6d.g6t;E6n+=J4t;var F6n=f3Y;F6n+=p1Y;F6n+=F6t;var C6n=C6t;C6n+=W2t;C6n+=l1Y;C6n+=E3Y;var K6n=x2t;K6n+=K6d.g6t;K6n+=C6t;K6n+=R9t;var r6n=t1Y;r6n+=d1Y;var T6n=M4t;T6n+=K0t;var I6n=c1Y;I6n+=U8t;I6n+=u4t;I6n+=j5Y;var w6n=V3Y;w6n+=j5Y;var O6n=e2Y;O6n+=C6t;O6n+=R9t;var s6n=M2t;s6n+=n1Y;var g6n=c1Y;g6n+=b1Y;var L6n=M4t;L6n+=K0t;var h6n=X9t;h6n+=B5Y;h6n+=v3Y;h6n+=Z3Y;var i6n=t9t;i6n+=C6t;i6n+=q9t;i6n+=Z3t;var formHeight;formHeight=self[i6n][h6n]?self[L6n][g6n](self[v2Y][s6n]):$(self[O6n][p2Y])[a3Y]()[w6n]();var maxHeight=$(window)[I6n]() - self[T6n][r6n] * F4I - $(I8Y,self[K6n][Z2Y])[C6n]() - $(F6n,self[E6n][m6n])[T8Y]();$(N6n,self[v2Y][z6n])[F6Y](r8Y,maxHeight);return $(self[H6n][q6n][G6n])[T8Y]();},"_hide":function(callback){var M1Y="backgrou";var Y1Y="click.DTED_Li";var k1Y="tbox";var V1Y="offsetHe";var J1Y="wrapp";var d6n=W2Y;d6n+=H9t;d6n+=R3Y;d6n+=K6d.g6t;var t6n=J1Y;t6n+=Q4t;var l6n=x2t;l6n+=K6d.g6t;l6n+=C6t;l6n+=R9t;var p6n=Y1Y;p6n+=u4t;p6n+=X9t;p6n+=k1Y;var n6n=W2t;n6n+=q9t;n6n+=H9t;n6n+=x1Y;var S6n=M1Y;S6n+=y9t;K6d.j6d();var e6n=x2t;e6n+=K6d.g6t;e6n+=C6t;e6n+=R9t;var P6n=V1Y;P6n+=Y2t;var o6n=s5Y;o6n+=R9t;if(!callback){callback=function(){};}$(self[v2Y][p2Y])[J9Y]({"top":-(self[o6n][p2Y][P6n] + x4I)},y4I,function(){var b6n=N8t;b6n+=v1Y;b6n+=Z1Y;K6d.m6d();var Q6n=e2Y;Q6n+=J4t;$([self[v2Y][Z2Y],self[Q6n][D2Y]])[D1Y](b6n,function(){var U6n=F6t;K6d.j6d();U6n+=v6t;U6n+=B1Y;$(this)[U6n]();callback();});});$(self[e6n][b3Y])[J8Y](n3Y);$(self[v2Y][S6n])[n6n](p6n);$(Y8Y,self[l6n][t6n])[d6n](n3Y);$(window)[J8Y](M3Y);},"_findAttachRow":function(){var y1Y="onf";var v6n=k6t;v6n+=t9t;v6n+=V9t;v6n+=q9t;var V6n=e2Y;V6n+=K6t;V6n+=v6t;var M6n=u1Y;M6n+=K6d.g6t;var x6n=I3Y;x6n+=A1Y;x6n+=t9t;x6n+=X9t;var k6n=t9t;k6n+=y1Y;var Y6n=A1Y;Y6n+=x6t;K6d.j6d();var J6n=a1Y;J6n+=E6t;J6n+=U8t;var c6n=Z3t;c6n+=q9t;var dt=new $[c6n][a5t][J6n](self[o3Y][c9t][Y6n]);if(self[k6n][x6n] === M6n){return dt[j1Y]()[f1Y]();}else if(self[V6n][c9t][v6n] === X1Y){return dt[j1Y]()[f1Y]();}else {var Z6n=r8t;Z6n+=W0Y;return dt[R0Y](self[o3Y][c9t][Z6n])[i0Y]();}},"_dte":J7t,"_ready":U1t,"_cssBackgroundOpacity":C4I,"_dom":{"wrapper":$(D6n + h0Y + L0Y + B6n)[K4I],"background":$(u6n)[K4I],"close":$(A6n)[K4I],"content":J7t}});self=Editor[y6n][g0Y];self[d8Y]={"windowPadding":x4I,"heightCalc":J7t,"attach":a6n,"windowScroll":n1t};})();Editor[I4t][j6n]=function(cfg,after){var F0Y="'. A field already exists with this name";var z0Y="ultiRes";var m0Y='initField';var r0Y="Error";var b0Y="unshi";var C0Y="Error adding field '";var K0Y=" adding field. The field requires a `name` option";var H0Y="itF";var w0Y="reverse";var S0Y="pli";var E9n=C6t;E9n+=s0Y;K6d.m6d();E9n+=Q4t;var f6n=d9Y;f6n+=O0Y;if($[f6n](cfg)){if(after !== undefined){cfg[w0Y]();}for(var i=K4I;i < cfg[b1t];i++){var X6n=k6t;X6n+=K6d.g6t;X6n+=K6d.g6t;this[X6n](cfg[i],after);}}else {var h9n=n9Y;h9n+=J2t;h9n+=K6d.g6t;var i9n=T9t;i9n+=J2t;i9n+=K6d.g6t;var R9n=I0Y;R9n+=T0Y;var name=cfg[W7t];if(name === undefined){var W9n=r0Y;W9n+=K0Y;throw W9n;}if(this[c9t][R9n][name]){throw C0Y + name + F0Y;}this[E0Y](m0Y,cfg);var field=new Editor[i9n](cfg,this[d4t][h9n],this);if(this[c9t][N0Y]){var s9n=v6t;s9n+=k6Y;s9n+=X9t;var g9n=R9t;g9n+=z0Y;g9n+=v6t;g9n+=K6t;var L9n=t8t;L9n+=H0Y;L9n+=U8t;L9n+=q0Y;var editFields=this[c9t][L9n];field[g9n]();$[s9n](editFields,function(idSrc,edit){var o0Y="tiSet";var w9n=K6d.g6t;w9n+=G0Y;var O9n=X6t;O9n+=o0Y;var val;if(edit[h7t]){val=field[s7t](edit[h7t]);}field[O9n](idSrc,val !== undefined?val:field[w9n]());});}this[c9t][P0Y][name]=field;if(after === undefined){var I9n=C6t;I9n+=s0Y;I9n+=v6t;I9n+=F6t;this[c9t][I9n][Q0Y](name);}else if(after === J7t){var r9n=b0Y;r9n+=U0Y;var T9n=e0Y;T9n+=Q4t;this[c9t][T9n][r9n](name);}else {var F9n=c9t;F9n+=S0Y;F9n+=f6Y;var C9n=v3t;C9n+=n0Y;var K9n=v3t;K9n+=K6d.g6t;K9n+=v6t;K9n+=F6t;var idx=$[J6Y](after,this[c9t][K9n]);this[c9t][C9n][F9n](idx + C4I,K4I,name);}}this[p0Y](this[E9n]());return this;};Editor[I4t][m9n]=function(newAjax){K6d.j6d();var N9n=l0Y;N9n+=F2Y;if(newAjax){this[c9t][t0Y]=newAjax;return this;}return this[c9t][N9n];};Editor[I4t][D2Y]=function(){var c0Y="editO";var G9n=d0Y;G9n+=D2t;var q9n=t9t;q9n+=P2Y;K6d.j6d();q9n+=v6t;var z9n=c0Y;z9n+=q9Y;var onBackground=this[c9t][z9n][J0Y];if(typeof onBackground === K6d.w6t){onBackground(this);}else if(onBackground === w2Y){var H9n=H9t;H9n+=J2t;H9n+=W2t;H9n+=F6t;this[H9n]();}else if(onBackground === q9n){this[b3Y]();}else if(onBackground === G9n){this[S9Y]();}return this;};Editor[I4t][Y0Y]=function(){var k0Y="_blur";K6d.m6d();this[k0Y]();return this;};Editor[o9n][P9n]=function(cells,fieldNames,show,opts){var B0Y="nObjec";var v0Y="bb";var y0Y='individual';var V0Y="taSourc";var D0Y="isPlai";var M0Y="_da";var p9n=x0Y;p9n+=K6t;var n9n=M0Y;n9n+=V0Y;n9n+=v6t;var S9n=H9t;S9n+=W2t;S9n+=v0Y;S9n+=e8t;var e9n=x9t;e9n+=M9t;e9n+=Z0Y;var U9n=L7t;U9n+=Z8t;U9n+=K6d.g6t;var b9n=D0Y;b9n+=B0Y;b9n+=K6t;var Q9n=B1t;Q9n+=m7t;Q9n+=n9t;var that=this;if(this[Q9n](function(){K6d.m6d();that[u0Y](cells,fieldNames,opts);})){return this;}K6d.j6d();if($[b9n](fieldNames)){opts=fieldNames;fieldNames=undefined;show=n1t;}else if(typeof fieldNames === A0Y){show=fieldNames;fieldNames=undefined;opts=undefined;}if($[Y6Y](show)){opts=show;show=n1t;}if(show === undefined){show=n1t;}opts=$[U9n]({},this[c9t][e9n][S9n],opts);var editFields=this[n9n](y0Y,cells,fieldNames);this[p9n](cells,editFields,a0Y,opts,function(){var j0Y="_postop";var s7Y="poi";var z7Y="lass=\"";var E7Y="\"><d";var m7Y="iv></div></div>";var b7Y='resize.';var Y7Y="To";var w7Y="DTE_Processing_Indicator\"><spa";var P7Y="_preop";var Z7Y="heade";var J7Y="appen";var p7Y="bg";var o7Y="leNodes";var B7Y="_animate";var W7Y="seReg";var f0Y="cludeFie";var T7Y="\" t";var G7Y="conc";var r7Y=" cla";var I7Y="n></div>";var o2n=H9t;o2n+=W2t;o2n+=B8t;var G2n=j0Y;G2n+=v6t;G2n+=q9t;var q2n=R3Y;q2n+=f0Y;q2n+=X0Y;var z2n=t1t;z2n+=u9Y;var C2n=i1t;C2n+=e5Y;K6d.m6d();C2n+=W7Y;var K2n=k6t;K2n+=A8t;var r2n=k6t;r2n+=A8t;var T2n=R7Y;T2n+=i7Y;var O2n=h8t;O2n+=v6t;var g2n=R9t;g2n+=J9t;g2n+=h7Y;g2n+=v6t;var L2n=K6d.g6t;L2n+=C6t;L2n+=R9t;var h2n=E6t;h2n+=F6t;h2n+=v6t;h2n+=k7t;var X9n=w0t;X9n+=z0t;X9n+=U8t;X9n+=y1t;var f9n=L7Y;f9n+=g7Y;f9n+=g0t;var j9n=s7Y;j9n+=e9t;j9n+=Q4t;var a9n=h0t;a9n+=S4t;a9n+=O7Y;var y9n=A8Y;y9n+=w7Y;y9n+=I7Y;var A9n=y8t;A9n+=j8t;A9n+=v6t;var u9n=T7Y;u9n+=e2t;u9n+=e8t;u9n+=W0t;var B9n=y8t;B9n+=C6t;B9n+=J6t;var D9n=o0t;D9n+=r7Y;D9n+=Y0t;D9n+=T1t;var Z9n=T1t;Z9n+=g0t;var v9n=K7Y;v9n+=J2t;v9n+=v6t;var V9n=C7Y;V9n+=F7Y;var M9n=h0t;M9n+=z4t;M9n+=l4t;M9n+=W0t;var x9n=E7Y;x9n+=m7Y;var k9n=w0t;k9n+=N7Y;k9n+=z7Y;var Y9n=H7Y;Y9n+=v0Y;Y9n+=J2t;Y9n+=v6t;var J9n=q7Y;J9n+=k6Y;J9n+=X9t;var c9n=G7Y;c9n+=k6t;c9n+=K6t;var d9n=H7Y;d9n+=v0Y;d9n+=o7Y;var l9n=P7Y;l9n+=Z8t;var namespace=that[Q7Y](opts);var ret=that[l9n](a0Y);if(!ret){return that;}$(window)[k9t](b7Y + namespace,function(){var S7Y="osition";var e7Y="leP";var U7Y="ubb";var t9n=H9t;t9n+=U7Y;t9n+=e7Y;t9n+=S7Y;that[t9n]();});var nodes=[];that[c9t][d9n]=nodes[c9n][n7Y](nodes,_pluck(editFields,J9n));var classes=that[d4t][Y9n];var background=$(k9n + classes[p7Y] + x9n);var container=$(l7Y + classes[Z2Y] + C7t + M9n + classes[t7Y] + C7t + V9n + classes[v9n] + Z9n + D9n + classes[B9n] + u9n + that[y0t][A9n] + S7t + y9n + H7t + H7t + a9n + classes[j9n] + f9n + X9n);if(show){var i2n=d7Y;i2n+=c7Y;var R2n=H9t;R2n+=C6t;R2n+=K6d.g6t;R2n+=n9t;var W2n=J7Y;W2n+=K6d.g6t;W2n+=Y7Y;container[W2n](R2n);background[k7Y](i2n);}var liner=container[a3Y]()[x7Y](K4I);var table=liner[a3Y]();var close=table[a3Y]();liner[q6Y](that[D7t][M7Y]);table[h2n](that[L2n][V7Y]);if(opts[g2n]){var s2n=Y7t;s2n+=O3t;s2n+=q9t;s2n+=K6d.g6t;liner[s2n](that[D7t][v7Y]);}if(opts[O2n]){var I2n=Z7Y;I2n+=F6t;var w2n=E6t;w2n+=F6t;w2n+=v6t;w2n+=k7t;liner[w2n](that[D7t][I2n]);}if(opts[T2n]){table[q6Y](that[D7t][D7Y]);}var pair=$()[r2n](container)[K2n](background);that[C2n](function(submitComplete){K6d.m6d();that[B7Y](pair,{opacity:K4I},function(){var u7Y="bubb";var y7Y="resiz";K6d.j6d();var j7Y="detac";if(this === container[K4I]){var N2n=u7Y;N2n+=e8t;var m2n=y8t;m2n+=C6t;m2n+=A7Y;var E2n=y7Y;E2n+=a7Y;var F2n=j7Y;F2n+=X9t;pair[F2n]();$(window)[f7Y](E2n + namespace);that[X7Y]();that[W4Y](m2n,[N2n]);}});});background[E8Y](function(){K6d.m6d();that[Y0Y]();});close[z2n](function(){var H2n=x2t;H2n+=f8t;K6d.j6d();H2n+=J6t;that[H2n]();});that[R4Y]();that[B7Y](pair,{opacity:C4I});that[i4Y](that[c9t][q2n],opts[L6Y]);that[G2n](o2n,n1t);});return this;};Editor[I4t][R4Y]=function(){var U4Y='top';var n4Y='left';var G4Y="right";var U4I=15;var S4Y="low";var Q4Y="bot";var L4Y="bott";var r4Y="e_Li";var C4Y="bubbleNodes";var b4Y="tom";var K4Y='div.DTE_Bubble';var T4Y="div.DTE_Bubbl";var P4Y="belo";var x2n=K6t;x2n+=C6t;x2n+=E6t;var k2n=J2t;k2n+=h4Y;var Y2n=L4Y;Y2n+=C6t;Y2n+=R9t;var J2n=J2t;J2n+=g4Y;J2n+=s4Y;var c2n=F6t;c2n+=Y2t;var d2n=e8t;d2n+=q9t;d2n+=O4Y;d2n+=X9t;var t2n=K6t;t2n+=C8t;var Q2n=w4Y;Q2n+=I4Y;var P2n=T4Y;P2n+=r4Y;P2n+=v4t;var wrapper=$(K4Y),liner=$(P2n),nodes=this[c9t][C4Y];K6d.j6d();var position={top:K4I,left:K4I,right:K4I,bottom:K4I};$[Q2n](nodes,function(i,node){var q4Y="bottom";var m4Y="rig";var N4Y="of";var z4Y="fset";var F4Y="setWi";var l2n=f7Y;l2n+=F4Y;l2n+=E4Y;K6d.m6d();var p2n=J2t;p2n+=v6t;p2n+=Z3t;p2n+=K6t;var n2n=m4Y;n2n+=X9t;n2n+=K6t;var S2n=K6t;S2n+=C6t;S2n+=E6t;var e2n=K6t;e2n+=C8t;var U2n=u4t;U2n+=v6t;U2n+=K6t;var b2n=N4Y;b2n+=z4Y;var pos=$(node)[b2n]();node=$(node)[U2n](K4I);position[e2n]+=pos[S2n];position[H4Y]+=pos[H4Y];position[n2n]+=pos[p2n] + node[l2n];position[q4Y]+=pos[h1Y] + node[I1Y];});position[t2n]/=nodes[d2n];position[H4Y]/=nodes[b1t];position[c2n]/=nodes[J2n];position[Y2n]/=nodes[b1t];var top=position[h1Y],left=(position[H4Y] + position[G4Y]) / F4I,width=liner[o4Y](),visLeft=left - width / F4I,visRight=visLeft + width,docWidth=$(window)[i1Y](),padding=U4I,classes=this[d4t][u0Y];wrapper[F6Y]({top:top,left:left});if(liner[k2n] && liner[k5Y]()[x2n] < K4I){var v2n=P4Y;v2n+=M2t;var V2n=Q4Y;V2n+=b4Y;var M2n=N9Y;M2n+=c9t;wrapper[M2n](U4Y,position[V2n])[q4t](v2n);}else {var Z2n=e4Y;Z2n+=S4Y;wrapper[t8Y](Z2n);}if(visRight + padding > docWidth){var D2n=t9t;D2n+=c9t;D2n+=c9t;var diff=visRight - docWidth;liner[D2n](n4Y,visLeft < padding?-(visLeft - padding):-(diff + padding));}else {var u2n=e8t;u2n+=Z3t;u2n+=K6t;var B2n=t9t;B2n+=c9t;B2n+=c9t;liner[B2n](u2n,visLeft < padding?-(visLeft - padding):K4I);}return this;};Editor[I4t][D7Y]=function(buttons){var j2n=v6t;j2n+=k6t;j2n+=t9t;j2n+=X9t;var a2n=v6t;a2n+=p4Y;a2n+=m8t;K6d.m6d();var that=this;if(buttons === l4Y){var y2n=X8t;y2n+=W5t;y2n+=e2t;var A2n=k6t;A2n+=t9t;A2n+=t4Y;buttons=[{text:this[y0t][this[c9t][A2n]][y2n],action:function(){K6d.j6d();this[S9Y]();}}];}else if(!$[r9Y](buttons)){buttons=[buttons];}$(this[D7t][D7Y])[a2n]();$[j2n](buttons,function(i,btn){var v4Y='<button></button>';var u4Y='keypress';var k4Y="sNa";var Z4Y="tabIndex";var M4Y="sses";var d4Y="ick";var D4Y='keyup';var Y4Y="classN";var T3n=t9t;T3n+=J2t;T3n+=d4Y;var I3n=C6t;I3n+=q9t;var s3n=C6t;s3n+=q9t;var g3n=A1Y;g3n+=U5Y;g3n+=c4Y;var L3n=X9t;L3n+=J4Y;L3n+=J2t;var h3n=Y4Y;h3n+=k6t;h3n+=R9t;h3n+=v6t;var i3n=S4t;i3n+=k4Y;i3n+=o3t;var R3n=H9t;R3n+=W2t;R3n+=K6t;R3n+=x4Y;var W3n=z4t;W3n+=M4Y;var X2n=k6Y;X2n+=v2t;X2n+=C6t;X2n+=q9t;var f2n=J2t;f2n+=V4Y;f2n+=J2t;if(typeof btn === i9Y){btn={text:btn,action:function(){K6d.m6d();this[S9Y]();}};}var text=btn[s2Y] || btn[f2n];var action=btn[X2n] || btn[r6Y];$(v4Y,{'class':that[W3n][V7Y][R3n] + (btn[i3n]?T7t + btn[h3n]:A5t)})[L3n](typeof text === K6d.w6t?text(that):text || A5t)[U3Y](g3n,btn[Z4Y] !== undefined?btn[Z4Y]:K4I)[k9t](D4Y,function(e){K6d.m6d();if(e[B4Y] === Q4I && action){action[r4t](that);}})[s3n](u4Y,function(e){K6d.j6d();var a4Y="Def";var j4Y="ult";var O3n=N5t;O3n+=A4Y;O3n+=C6t;O3n+=z8t;if(e[O3n] === Q4I){var w3n=y4Y;w3n+=a4Y;w3n+=k6t;w3n+=j4Y;e[w3n]();}})[I3n](T3n,function(e){K6d.m6d();e[f4Y]();if(action){action[r4t](that,e);}})[k7Y](that[D7t][D7Y]);});return this;};Editor[I4t][X4Y]=function(fieldName){var W6G="Arr";var i6G="ray";var w6G="includeFields";var T6G="cludeFields";var K6G="ldNames";var r6G="_fie";var that=this;var fields=this[c9t][P0Y];if(typeof fieldName === i9Y){var E3n=U8t;E3n+=q9t;E3n+=W6G;E3n+=C6Y;var F3n=e0Y;F3n+=v6t;F3n+=F6t;var C3n=R6G;C3n+=F6t;C3n+=i6G;var K3n=h6G;K3n+=F6t;K3n+=L6G;var r3n=Z3t;r3n+=g6G;r3n+=J2t;r3n+=K6d.g6t;that[r3n](fieldName)[K3n]();delete fields[fieldName];var orderIdx=$[C3n](fieldName,this[c9t][s6G]);this[c9t][F3n][O6G](orderIdx,C4I);var includeIdx=$[E3n](fieldName,this[c9t][w6G]);if(includeIdx !== -C4I){var N3n=I6G;N3n+=v6t;var m3n=R3Y;m3n+=T6G;this[c9t][m3n][N3n](includeIdx,C4I);}}else {var H3n=r6G;H3n+=K6G;var z3n=w4Y;z3n+=I4Y;$[z3n](this[H3n](fieldName),function(i,name){var q3n=y8t;q3n+=v6t;q3n+=G1Y;that[q3n](name);});}return this;};Editor[G3n][b3Y]=function(){K6d.j6d();var o3n=x2t;o3n+=f8t;o3n+=c9t;o3n+=v6t;this[o3n](U1t);return this;};Editor[P3n][C6G]=function(arg1,arg2,arg3,arg4){var U6G="_crudArgs";var P6G="idy";var H6G="odif";var l6G='initCreate';var v3n=x2t;v3n+=F6G;v3n+=Z8t;v3n+=K6t;var x3n=Z3t;x3n+=g6G;x3n+=X0Y;var k3n=G8Y;k3n+=E6G;k3n+=m6G;k3n+=l4t;var Y3n=M8t;Y3n+=N6G;var J3n=x8t;J3n+=z6G;var c3n=Z3t;c3n+=C6t;c3n+=F6t;c3n+=R9t;var d3n=Z1t;d3n+=R9t;var t3n=R9t;t3n+=H6G;t3n+=U8t;t3n+=Q4t;var l3n=q6G;l3n+=w3Y;var p3n=R9t;p3n+=w5t;p3n+=v6t;var e3n=X3t;e3n+=G6G;e3n+=C5t;e3n+=T0Y;var U3n=o6G;U3n+=R9t;U3n+=e4Y;U3n+=F6t;var Q3n=B1t;Q3n+=P6G;var that=this;K6d.j6d();var fields=this[c9t][P0Y];var count=C4I;if(this[Q3n](function(){var b3n=t9t;b3n+=Q6G;b3n+=K6t;b3n+=v6t;that[b3n](arg1,arg2,arg3,arg4);})){return this;}if(typeof arg1 === U3n){count=arg1;arg1=arg2;arg2=arg3;}this[c9t][e3n]={};for(var i=K4I;i < count;i++){var n3n=n9Y;n3n+=w9t;n3n+=c9t;var S3n=b6G;S3n+=p1t;S3n+=c9t;this[c9t][S3n][i]={fields:this[c9t][n3n]};}var argOpts=this[U6G](arg1,arg2,arg3,arg4);this[c9t][p3n]=e6G;this[c9t][S6G]=l3n;this[c9t][t3n]=J7t;this[d3n][c3n][H5Y][J3n]=Y3n;this[k3n]();this[p0Y](this[x3n]());$[x6Y](fields,function(name,field){var n6G="multiReset";var p6G="ltiSet";field[n6G]();for(var i=K4I;i < count;i++){var V3n=z8t;V3n+=Z3t;var M3n=R9t;M3n+=W2t;M3n+=p6G;field[M3n](i,field[V3n]());}field[z9Y](field[m4t]());});this[v3n](l6G,J7t,function(){var d6G="leMain";var t6G="_assemb";var D3n=C8t;D3n+=K6t;D3n+=c9t;var Z3n=t6G;Z3n+=d6G;that[Z3n]();that[Q7Y](argOpts[D3n]);K6d.m6d();argOpts[c6G]();});return this;};Editor[I4t][J6G]=function(parent){var k6G="dent";var x6G='.edep';var A3n=n9Y;A3n+=J2t;A3n+=K6d.g6t;if($[r9Y](parent)){var B3n=e8t;B3n+=Y6G;B3n+=X9t;for(var i=K4I,ien=parent[B3n];i < ien;i++){var u3n=W2Y;u3n+=v8t;u3n+=Z8t;u3n+=k6G;this[u3n](parent[i]);}return this;}var field=this[A3n](parent);$(field[i0Y]())[f7Y](x6G);return this;};Editor[I4t][y3n]=function(parent,url,opts){var u6G="dependent";var V6G="ede";var A6G='POST';var r8n=M6G;r8n+=V6G;r8n+=E6t;var T8n=v6t;T8n+=v6G;T8n+=e9t;var I8n=q9t;I8n+=w5t;I8n+=v6t;var X3n=t9t;X3n+=Z6G;X3n+=D6G;var f3n=v6t;f3n+=D9t;f3n+=B9t;var j3n=B6G;j3n+=c9t;j3n+=C6t;j3n+=q9t;if($[r9Y](parent)){var a3n=J2t;a3n+=g4Y;a3n+=s4Y;for(var i=K4I,ien=parent[a3n];i < ien;i++){this[u6G](parent[i],url,opts);}return this;}var that=this;var field=this[x0t](parent);var ajaxOpts={type:A6G,dataType:j3n};opts=$[f3n]({event:X3n,data:J7t,preUpdate:J7t,postUpdate:J7t},opts);var update=function(json){var s9G='show';var O9G="postUpdate";var L9G='error';var h9G='update';var a6G="postU";var X6G="sa";var g9G='hide';var R9G="preUpd";var w8n=y6G;w8n+=B6Y;w8n+=u4t;var O8n=a6G;O8n+=E6t;O8n+=j6G;O8n+=v6t;var s8n=v6t;s8n+=M6Y;s8n+=M8t;s8n+=v6t;var g8n=v6t;g8n+=k6t;g8n+=I4Y;var h8n=f6G;h8n+=X6G;h8n+=u4t;h8n+=v6t;var i8n=i8t;i8n+=k6t;i8n+=J2t;var W8n=Y7t;W8n+=W9G;W8n+=g3t;if(opts[W8n]){var R8n=R9G;R8n+=I3Y;R8n+=v6t;opts[R8n](json);}$[x6Y]({labels:i9G,options:h9G,values:i8n,messages:h8n,errors:L9G},function(jsonProp,fieldFn){if(json[jsonProp]){$[x6Y](json[jsonProp],function(field,val){var L8n=Z3t;L8n+=U8t;L8n+=v6t;L8n+=w9t;that[L8n](field)[fieldFn](val);});}});$[g8n]([g9G,s9G,s8n,G4t],function(i,key){K6d.m6d();if(json[key]){that[key](json[key],json[J9Y]);}});if(opts[O8n]){opts[O9G](json);}field[w8n](U1t);};$(field[I8n]())[k9t](opts[T8n] + r8n,function(e){var I9G="ows";var K9G="essing";var q9G="inObj";var N9G="objec";var o8n=K6d.g6t;o8n+=k6t;o8n+=K6t;o8n+=k6t;var G8n=i8t;G8n+=k6t;G8n+=J2t;var q8n=w9G;K6d.m6d();q8n+=F0t;q8n+=c9t;var H8n=F6t;H8n+=I9G;var z8n=K6d.g6t;z8n+=k6t;z8n+=K6t;z8n+=k6t;var N8n=T9G;N8n+=q0Y;var m8n=p8t;m8n+=r9G;var E8n=r3t;E8n+=C6t;E8n+=t9t;E8n+=K9G;var F8n=e8t;F8n+=q9t;F8n+=O4Y;F8n+=X9t;var C8n=d3Y;C8n+=C9G;var K8n=q9t;K8n+=w5t;K8n+=v6t;if($(field[K8n]())[F9G](e[C8n])[F8n] === K4I){return;}field[E8n](n1t);var data={};data[m8n]=that[c9t][N8n]?_pluck(that[c9t][E9G],z8n):J7t;data[R0Y]=data[m9G]?data[H8n][K4I]:J7t;data[q8n]=that[G8n]();if(opts[o8n]){var ret=opts[h7t](data);if(ret){var P8n=K6d.g6t;P8n+=k6t;P8n+=K6t;P8n+=k6t;opts[P8n]=ret;}}if(typeof url === K6d.w6t){var Q8n=t9t;Q8n+=k6t;Q8n+=J2t;Q8n+=J2t;var o=url[Q8n](that,field[i4t](),data,update);if(o){var U8n=s4Y;U8n+=Z8t;var b8n=N9G;b8n+=K6t;if(typeof o === b8n && typeof o[U8n] === K6d.w6t){o[z9G](function(resolved){if(resolved){update(resolved);}});}else {update(o);}}}else {var e8n=H9G;e8n+=q9G;e8n+=G9G;if($[e8n](url)){var S8n=v6t;S8n+=F2Y;S8n+=K6t;S8n+=B9t;$[S8n](ajaxOpts,url);}else {var n8n=W2t;n8n+=F6t;n8n+=J2t;ajaxOpts[n8n]=url;}$[t0Y]($[Z7t](ajaxOpts,{url:url,data:data,success:update}));}});return this;};Editor[I4t][o9G]=function(){var U9G="plate";var e9G="stroy";var Q9G="templa";var S9G='.dte';var J8n=W2Y;J8n+=P9G;J8n+=v6t;var t8n=Q9G;t8n+=g8t;var p8n=Y8t;p8n+=l0t;p8n+=n9t;p8n+=t8t;if(this[c9t][p8n]){var l8n=t9t;l8n+=J2t;l8n+=j8t;l8n+=v6t;this[l8n]();}this[X4Y]();if(this[c9t][t8n]){var d8n=b9G;d8n+=U9G;$(G3Y)[q6Y](this[c9t][d8n]);}var controller=this[c9t][q2Y];if(controller[o9G]){var c8n=K6d.g6t;c8n+=v6t;c8n+=e9G;controller[c8n](this);}$(document)[f7Y](S9G + this[c9t][J8n]);this[D7t]=J7t;this[c9t]=J7t;};Editor[Y8n][k8n]=function(name){var n9G="ieldNames";var M8n=C3t;M8n+=n9G;var x8n=C1t;K6d.j6d();x8n+=X9t;var that=this;$[x8n](this[M8n](name),function(i,n){var V8n=Z3t;K6d.m6d();V8n+=C5t;V8n+=K6d.g6t;that[V8n](n)[p9G]();});return this;};Editor[v8n][Z8n]=function(show){var B8n=t9t;B8n+=J2t;K6d.j6d();B8n+=a8t;if(show === undefined){var D8n=Z8Y;D8n+=l9G;return this[c9t][D8n];}return this[show?t9G:B8n]();};Editor[u8n][d9G]=function(){var A8n=R9t;A8n+=z8Y;return $[A8n](this[c9t][P0Y],function(field,name){var y8n=x8t;y8n+=z6G;y8n+=t8t;return field[y8n]()?name:J7t;});};Editor[I4t][a8n]=function(){var j8n=c9G;j8n+=v6t;K6d.j6d();return this[c9t][q2Y][j8n](this);};Editor[f8n][X8n]=function(items,arg1,arg2,arg3,arg4){var J9G="rudAr";var Y9G="gs";var R5n=C6t;R5n+=q9Y;K6d.j6d();var W5n=i1t;W5n+=J9G;W5n+=Y9G;var that=this;if(this[k9G](function(){that[b6G](items,arg1,arg2,arg3,arg4);})){return this;}var argOpts=this[W5n](arg1,arg2,arg3,arg4);this[x9G](items,this[E0Y](M9G,items),e6G,argOpts[R5n],function(){var v9G="Option";var D9G="ain";var Z9G="_assembleM";var L5n=C8t;L5n+=V9G;var h5n=x2t;K6d.m6d();h5n+=V7Y;h5n+=v9G;h5n+=c9t;var i5n=Z9G;i5n+=D9G;that[i5n]();that[h5n](argOpts[L5n]);argOpts[c6G]();});return this;};Editor[g5n][B9G]=function(name){var u9G="eldName";var s5n=m3t;s5n+=u9G;s5n+=c9t;var that=this;$[x6Y](this[s5n](name),function(i,n){var O5n=N6t;O5n+=A9G;that[O5n](n)[B9G]();});return this;};Editor[I4t][w5n]=function(name,msg){var f9G="_mes";var X9G="sage";var y9G="globalE";var j9G="rmErro";var I5n=N8Y;I5n+=k6t;I5n+=y3Y;I5n+=F6t;var wrapper=$(this[D7t][I5n]);if(msg === undefined){var F5n=y9G;F5n+=a9G;var K5n=x9t;K5n+=j9G;K5n+=F6t;var r5n=K6d.g6t;r5n+=C6t;r5n+=R9t;var T5n=f9G;T5n+=X9G;this[T5n](this[r5n][K5n],name,n1t,function(){var W2G="togg";var R2G='inFormError';var C5n=W2G;C5n+=e8t;C5n+=k3t;K6d.m6d();C5n+=x3t;wrapper[C5n](R2G,name !== undefined && name !== A5t);});this[c9t][F5n]=name;}else {var E5n=v6t;E5n+=V3t;E5n+=v3t;this[x0t](name)[E5n](msg);}K6d.j6d();return this;};Editor[m5n][x0t]=function(name){var i2G="Unknown";var h2G=" field name - ";K6d.j6d();var N5n=N6t;N5n+=I5t;N5n+=T0Y;var fields=this[c9t][N5n];if(!fields[name]){var z5n=i2G;z5n+=h2G;throw z5n + name;}return fields[name];};Editor[I4t][P0Y]=function(){var q5n=I0Y;q5n+=T0Y;var H5n=L2G;K6d.j6d();H5n+=E6t;return $[H5n](this[c9t][q5n],function(field,name){K6d.j6d();return name;});};Editor[G5n][o5n]=_api_file;Editor[P5n][Q5n]=_api_files;Editor[I4t][C9G]=function(name){var U5n=I0Y;U5n+=K6d.g6t;var that=this;K6d.m6d();if(!name){name=this[P0Y]();}if($[r9Y](name)){var out={};$[x6Y](name,function(i,n){var b5n=u4t;K6d.j6d();b5n+=v6t;b5n+=K6t;out[n]=that[x0t](n)[b5n]();});return out;}return this[U5n](name)[C9G]();};Editor[I4t][e5n]=function(names,animate){var g2G="_fieldNames";var that=this;$[x6Y](this[g2G](names),function(i,n){var s2G="hide";that[x0t](n)[s2G](animate);});return this;};Editor[S5n][n5n]=function(includeHash){K6d.m6d();return $[O2G](this[c9t][E9G],function(edit,idSrc){K6d.m6d();return includeHash === n1t?w2G + idSrc:idSrc;});};Editor[I4t][I2G]=function(inNames){var T2G="_fieldNam";var r2G="formE";var K2G="globalError";var l5n=T2G;l5n+=v6t;l5n+=c9t;var p5n=r2G;p5n+=V3t;p5n+=v3t;var formError=$(this[D7t][p5n]);if(this[c9t][K2G]){return n1t;}var names=this[l5n](inNames);K6d.m6d();for(var i=K4I,ien=names[b1t];i < ien;i++){var d5n=R3Y;d5n+=n2t;d5n+=a9G;var t5n=N6t;t5n+=A9G;if(this[t5n](names[i])[d5n]()){return n1t;}}return U1t;};Editor[c5n][C2G]=function(cell,fieldName,opts){var o2G="PlainObje";var q2G="ual";var F2G="nline";var N2G="_Field";var G2G="nlin";var m2G="iv.D";K6d.j6d();var z2G="line";var H2G="ivid";var A5n=U8t;A5n+=F2G;var u5n=E2G;u5n+=p2t;var B5n=K6d.g6t;B5n+=m2G;B5n+=l9t;B5n+=N2G;var M5n=v6t;M5n+=k6t;M5n+=I4Y;var x5n=R3Y;x5n+=z2G;var k5n=U8t;k5n+=y9t;k5n+=H2G;k5n+=q2G;var Y5n=U8t;Y5n+=G2G;Y5n+=v6t;var J5n=d9Y;J5n+=o2G;J5n+=S1t;var that=this;if($[J5n](fieldName)){opts=fieldName;fieldName=undefined;}opts=$[Z7t]({},this[c9t][O2Y][Y5n],opts);var editFields=this[E0Y](k5n,cell,fieldName);var node,field;var countOuter=K4I,countInner;var closed=U1t;var classes=this[d4t][x5n];$[M5n](editFields,function(i,editField){var e2G="it more than one row inline at a time";var P2G="displayFi";K6d.j6d();var U2G="not ed";var D5n=P2G;D5n+=q0Y;var Z5n=v6t;Z5n+=k6t;Z5n+=I4Y;var v5n=k6t;v5n+=Q2G;v5n+=l1t;if(countOuter > K4I){var V5n=b2G;V5n+=q9t;V5n+=U2G;V5n+=e2G;throw V5n;}node=$(editField[v5n][K4I]);countInner=K4I;$[Z5n](editField[D5n],function(j,f){K6d.j6d();var S2G='Cannot edit more than one field inline at a time';if(countInner > K4I){throw S2G;}field=f;countInner++;});countOuter++;;});if($(B5n,node)[b1t]){return this;}if(this[k9G](function(){that[C2G](cell,fieldName,opts);})){return this;}this[u5n](cell,editFields,A5n,opts,function(){var x2G="wid";var i3G="replac";var M2G="Edg";var c2G="<div class=\"DTE_Proces";var y2G="contents";var t2G="v cla";var f2G='px"';var p2G="stopen";var n2G="_po";var j2G='style="width:';var k2G=" class=\"";var D2G="Opti";var X2G='" ';var Y2G="cator\"><span></span></div>";var J2G="sing_Indi";var a2G="userAgent";var P1n=n2G;P1n+=p2G;var o1n=x9t;o1n+=t9t;o1n+=W2t;o1n+=c9t;var O1n=q9t;O1n+=h5t;var s1n=l2G;s1n+=l0t;s1n+=f6Y;var g1n=K2Y;g1n+=v4t;K6d.j6d();var L1n=N6t;L1n+=q9t;L1n+=K6d.g6t;var h1n=f1t;h1n+=U8t;h1n+=t2G;h1n+=d2G;var i1n=E2Y;i1n+=g0t;var R1n=c2G;R1n+=J2G;R1n+=Y2G;var W1n=o0t;W1n+=k2G;var X5n=v5Y;X5n+=c0t;var f5n=x2G;f5n+=K6t;f5n+=X9t;var j5n=M2G;j5n+=v6t;j5n+=V2G;var a5n=R3Y;a5n+=z8t;a5n+=v2G;var y5n=Z2G;y5n+=v1Y;y5n+=D2G;y5n+=B2G;var namespace=that[y5n](opts);var ret=that[u2G](A2G);if(!ret){return that;}var children=node[y2G]()[z6Y]();var style=navigator[a2G][a5n](j5n) !== -C4I?j2G + node[f5n]() + f2G:A5t;node[q6Y]($(l7Y + classes[X5n] + C7t + W1n + classes[t7Y] + X2G + style + h9Y + R1n + i1n + h1n + classes[D7Y] + S7t + H7t));node[L1n](W3G + classes[g1n][s1n](/ /g,R3G))[q6Y](field[O1n]())[q6Y](that[D7t][M7Y]);if(opts[D7Y]){var T1n=R7Y;T1n+=i7Y;var I1n=K6d.g6t;I1n+=C6t;I1n+=R9t;var w1n=i3G;w1n+=v6t;node[F9G](W3G + classes[D7Y][w1n](/ /g,R3G))[q6Y](that[I1n][T1n]);}that[h3G](function(submitComplete,action){var g3G="icInfo";var s3G="clic";var L3G="_clearDynam";var C1n=L3G;C1n+=g3G;var r1n=s3G;r1n+=N5t;closed=n1t;$(document)[f7Y](r1n + namespace);if(!submitComplete || action !== O3G){var K1n=b2Y;K1n+=l1t;node[y2G]()[K1n]();node[q6Y](children);}that[C1n]();return A2G;;});setTimeout(function(){if(closed){return;}$(document)[k9t](w3G + namespace,function(e){var T3G="arg";var F3G="addBack";var r3G="wns";var K3G="andSe";var C3G="addB";var I3G="paren";var q1n=I3G;q1n+=V9G;var H1n=R3Y;H1n+=O0Y;var z1n=K6t;z1n+=T3G;z1n+=a9Y;K6d.m6d();var N1n=C6t;N1n+=r3G;var m1n=K3G;m1n+=J2t;m1n+=Z3t;var E1n=C3G;E1n+=k6t;E1n+=t9t;E1n+=N5t;var F1n=Z3t;F1n+=q9t;var back=$[F1n][F3G]?E1n:m1n;if(!field[K4t](N1n,e[z1n]) && $[H1n](node[K4I],$(e[E3G])[q1n]()[back]()) === -C4I){var G1n=H9t;G1n+=J2t;G1n+=W2t;G1n+=F6t;that[G1n]();}});},K4I);that[i4Y]([field],opts[o1n]);that[P1n](A2G,n1t);});return this;};Editor[I4t][Q1n]=function(name,msg){var m3G="ssag";K6d.j6d();if(msg === undefined){var U1n=Z1t;U1n+=R9t;var b1n=x2t;b1n+=o3t;b1n+=m3G;b1n+=v6t;this[b1n](this[U1n][v7Y],name);}else {this[x0t](name)[l7t](msg);}return this;};Editor[I4t][e1n]=function(mode){var H3G="ing mode";K6d.j6d();var N3G="Not curren";var q3G='Changing from create mode is not supported';var z3G="tly in an edit";if(!mode){return this[c9t][S6G];}if(!this[c9t][S6G]){var S1n=N3G;S1n+=z3G;S1n+=H3G;throw new Error(S1n);}else if(this[c9t][S6G] === X1Y && mode !== X1Y){throw new Error(q3G);}this[c9t][S6G]=mode;return this;};Editor[I4t][n1n]=function(){var p1n=r8t;p1n+=K6d.g6t;p1n+=G3G;p1n+=F6t;return this[c9t][p1n];};Editor[I4t][l1n]=function(fieldNames){var o3G="tiGet";var Y1n=R9t;Y1n+=W2t;Y1n+=J2t;Y1n+=o3G;var J1n=Z3t;J1n+=D0t;var that=this;if(fieldNames === undefined){fieldNames=this[P0Y]();}if($[r9Y](fieldNames)){var t1n=v6t;t1n+=k6Y;t1n+=X9t;var out={};$[t1n](fieldNames,function(i,name){var P3G="G";var c1n=R9t;c1n+=L9t;c1n+=P3G;c1n+=a9Y;var d1n=Z3t;d1n+=U8t;d1n+=A9G;out[name]=that[d1n](name)[c1n]();});return out;}return this[J1n](fieldNames)[Y1n]();};Editor[k1n][x1n]=function(fieldNames,val){var Q3G="isPl";var e3G="lti";var b3G="nObject";var M1n=Q3G;M1n+=v5t;M1n+=b3G;var that=this;if($[M1n](fieldNames) && val === undefined){var V1n=v6t;V1n+=k6Y;V1n+=X9t;$[V1n](fieldNames,function(name,value){K6d.j6d();that[x0t](name)[U3G](value);});}else {var v1n=T0t;v1n+=e3G;v1n+=S3G;this[x0t](fieldNames)[v1n](val);}return this;};Editor[I4t][Z1n]=function(name){var y1n=q9t;y1n+=C6t;y1n+=K6d.g6t;y1n+=v6t;var B1n=R9t;B1n+=k6t;B1n+=E6t;var that=this;if(!name){var D1n=C6t;D1n+=s0Y;D1n+=v6t;D1n+=F6t;name=this[D1n]();}return $[r9Y](name)?$[B1n](name,function(n){var A1n=q9t;A1n+=h5t;var u1n=Z3t;u1n+=U8t;K6d.j6d();u1n+=I5t;u1n+=K6d.g6t;return that[u1n](n)[A1n]();}):this[x0t](name)[y1n]();};Editor[a1n][j1n]=function(name,fn){var f1n=C6t;f1n+=Z3t;f1n+=Z3t;$(this)[f1n](this[n3G](name),fn);K6d.j6d();return this;};Editor[X1n][W0n]=function(name,fn){var p3G="eventN";var R0n=x2t;R0n+=p3G;R0n+=k6t;R0n+=o3t;$(this)[k9t](this[R0n](name),fn);return this;};Editor[I4t][l3G]=function(name,fn){K6d.j6d();$(this)[l3G](this[n3G](name),fn);return this;};Editor[i0n][h0n]=function(){var d3G="ller";var c3G="_di";var J3G="splayRe";var u3G="_postopen";var t3G="displayContro";var K0n=L2G;K0n+=U8t;K0n+=q9t;var w0n=t3G;w0n+=d3G;var L0n=c3G;L0n+=J3G;K6d.j6d();L0n+=v3t;L0n+=n0Y;var that=this;this[L0n]();this[h3G](function(){that[c9t][q2Y][b3Y](that,function(){var M3G="micInfo";var k3G="_cle";var x3G="arDyn";var V3G='closed';var O0n=R9t;O0n+=k6t;O0n+=R3Y;var s0n=x2t;s0n+=Y3G;s0n+=q9t;s0n+=K6t;var g0n=k3G;g0n+=x3G;g0n+=k6t;g0n+=M3G;that[g0n]();that[s0n](V3G,[O0n]);});});var ret=this[u2G](e6G);if(!ret){return this;}this[c9t][w0n][v3G](this,this[D7t][Z2Y],function(){var r0n=k6t;r0n+=S1t;r0n+=x3Y;var I0n=x2t;I0n+=W4t;I0n+=W2t;I0n+=c9t;that[I0n]($[O2G](that[c9t][s6G],function(name){K6d.m6d();var T0n=Z3t;T0n+=Z3G;return that[c9t][T0n][name];}),that[c9t][D3G][L6Y]);that[W4Y](B3G,[e6G,that[c9t][r0n]]);});this[u3G](K0n,U1t);return this;};Editor[C0n][s6G]=function(set){var f3G="All fields, and no additional fields, must be provided for ordering.";var A3G="all";var q0n=L7t;q0n+=v6t;q0n+=y9t;var H0n=B6G;H0n+=C6t;H0n+=U8t;H0n+=q9t;var z0n=c9t;z0n+=v3t;z0n+=K6t;var N0n=i2Y;N0n+=U8t;N0n+=f6Y;var m0n=c9t;K6d.m6d();m0n+=C6t;m0n+=F6t;m0n+=K6t;if(!set){return this[c9t][s6G];}if(arguments[b1t] && !$[r9Y](set)){var E0n=t9t;E0n+=A3G;var F0n=i2Y;F0n+=y3G;set=Array[I4t][F0n][E0n](arguments);}if(this[c9t][s6G][T4t]()[m0n]()[a3G](j3G) !== set[N0n]()[z0n]()[H0n](j3G)){throw f3G;}$[q0n](this[c9t][s6G],set);this[p0Y]();return this;};Editor[I4t][G0n]=function(items,arg1,arg2,arg3,arg4){var i8G="_actionClass";var X3G="nitRemov";var W8G="_crud";var n0n=K6d.g6t;n0n+=k6t;n0n+=K6t;n0n+=k6t;var S0n=q9t;S0n+=C6t;S0n+=K6d.g6t;S0n+=v6t;var e0n=U8t;e0n+=X3G;e0n+=v6t;var U0n=K6d.g6t;U0n+=d9Y;U0n+=z6G;var b0n=x9t;b0n+=F6t;b0n+=R9t;var Q0n=T9G;Q0n+=A9G;Q0n+=c9t;var P0n=W8G;P0n+=S3t;var o0n=x2t;o0n+=K6t;o0n+=U8t;o0n+=c7Y;var that=this;if(this[o0n](function(){K6d.m6d();that[o9Y](items,arg1,arg2,arg3,arg4);})){return this;}if(items[b1t] === undefined){items=[items];}var argOpts=this[P0n](arg1,arg2,arg3,arg4);var editFields=this[E0Y](M9G,items);this[c9t][S6G]=o9Y;this[c9t][R8G]=items;this[c9t][Q0n]=editFields;this[D7t][b0n][H5Y][U0n]=E6Y;this[i8G]();this[W4Y](e0n,[_pluck(editFields,S0n),_pluck(editFields,n0n),items],function(){var h8G='initMultiRemove';that[W4Y](h8G,[editFields,items],function(){var g8G="rmO";var L8G="editOpt";var t0n=L8G;t0n+=c9t;var l0n=C8t;l0n+=K6t;l0n+=c9t;var p0n=Z2G;p0n+=g8G;p0n+=s8G;that[O8G]();that[p0n](argOpts[l0n]);argOpts[c6G]();var opts=that[c9t][t0n];if(opts[L6Y] !== J7t){var J0n=Z3t;J0n+=w8G;J0n+=R4t;var c0n=K6d.g6t;c0n+=C6t;c0n+=R9t;var d0n=i5t;d0n+=k9t;$(d0n,that[c0n][D7Y])[x7Y](opts[L6Y])[J0n]();}});});return this;};Editor[Y0n][k0n]=function(set,val){var that=this;K6d.j6d();if(!$[Y6Y](set)){var o={};o[set]=val;set=o;}$[x6Y](set,function(n,v){K6d.m6d();that[x0t](n)[z9Y](v);});return this;};Editor[x0n][I8G]=function(names,animate){var T8G="_fieldN";var V0n=T8G;V0n+=k6t;V0n+=f6G;var M0n=v6t;M0n+=k6t;M0n+=t9t;M0n+=X9t;var that=this;$[M0n](this[V0n](names),function(i,n){var Z0n=c9t;Z0n+=r8G;Z0n+=M2t;var v0n=Z3t;K6d.m6d();v0n+=C5t;v0n+=K6d.g6t;that[v0n](n)[Z0n](animate);});return this;};Editor[D0n][B0n]=function(successCallback,errorCallback,formatdata,hide){var E8G="rocessing";var C8G="_pro";var W7n=v6t;W7n+=k6t;W7n+=t9t;W7n+=X9t;var X0n=C1t;X0n+=X9t;var f0n=K8G;f0n+=C6t;f0n+=F6t;var A0n=C8G;A0n+=f6Y;A0n+=F8G;var u0n=E6t;u0n+=E8G;var that=this,fields=this[c9t][P0Y],errorFields=[],errorReady=K4I,sent=U1t;if(this[c9t][u0n] || !this[c9t][S6G]){return this;}this[A0n](n1t);var send=function(){var N8G='initSubmit';var a0n=k6Y;a0n+=v2t;a0n+=C6t;a0n+=q9t;var y0n=m8G;y0n+=C1Y;if(errorFields[b1t] !== errorReady || sent){return;}that[y0n](N8G,[that[c9t][a0n]],function(result){var q8G="_submit";var H8G="sing";if(result === U1t){var j0n=z8G;j0n+=D6Y;j0n+=H8G;that[j0n](U1t);return;}sent=n1t;that[q8G](successCallback,errorCallback,formatdata,hide);});};this[f0n]();$[X0n](fields,function(name,field){K6d.j6d();if(field[I2G]()){errorFields[Q0Y](name);}});$[W7n](errorFields,function(i,name){var R7n=v6t;R7n+=G8G;R7n+=F6t;fields[name][R7n](A5t,function(){errorReady++;send();});});send();return this;};Editor[I4t][i7n]=function(set){var o8G="template";if(set === undefined){return this[c9t][o8G];}this[c9t][o8G]=set === J7t?J7t:$(set);return this;};Editor[I4t][h7n]=function(title){var Q8G="class";var b8G="ead";var O7n=M4t;O7n+=q9t;O7n+=o9t;var s7n=X9t;s7n+=v6t;s7n+=P8G;s7n+=F6t;var g7n=Q8G;g7n+=J9t;var L7n=X9t;L7n+=b8G;L7n+=Q4t;var header=$(this[D7t][L7n])[a3Y](W3G + this[g7n][s7n][O7n]);if(title === undefined){var w7n=X9t;w7n+=K6t;w7n+=Y9Y;return header[w7n]();}if(typeof title === K6d.w6t){var T7n=U8G;T7n+=v6t;var I7n=a1Y;I7n+=e8G;title=title(this,new DataTable[I7n](this[c9t][T7n]));}header[H6Y](title);return this;};Editor[I4t][r7n]=function(field,value){var S8G="Object";var C7n=u4t;C7n+=a9Y;var K7n=H9G;K7n+=R3Y;K6d.m6d();K7n+=S8G;if(value !== undefined || $[K7n](field)){return this[z9Y](field,value);}return this[C7n](field);;};var apiRegister=DataTable[t9Y][n8G];function __getInst(api){var t8G="oIni";var d8G="ntex";var N7n=E2G;N7n+=K6d.g6t;N7n+=p8G;var m7n=v6t;m7n+=K6d.g6t;m7n+=l8G;m7n+=F6t;var E7n=t8G;E7n+=K6t;var F7n=t9t;F7n+=C6t;F7n+=d8G;F7n+=K6t;K6d.m6d();var ctx=api[F7n][K4I];return ctx[E7n][m7n] || ctx[N7n];}function __setBasic(inst,opts,type,plural){var k8G='1';var Y8G=/%d/;var o7n=f6G;o7n+=h7Y;o7n+=v6t;var z7n=H9t;z7n+=W2t;z7n+=Q2G;z7n+=B2G;if(!opts){opts={};}if(opts[z7n] === undefined){var H7n=p3t;H7n+=c8G;H7n+=d1t;opts[D7Y]=H7n;}if(opts[G7t] === undefined){var G7n=K6t;G7n+=e2t;G7n+=J2t;G7n+=v6t;var q7n=U8t;q7n+=V9Y;opts[G7t]=inst[q7n][type][G7n];}if(opts[o7n] === undefined){var P7n=T8t;P7n+=r8t;P7n+=i8t;P7n+=v6t;if(type === P7n){var Q7n=R9t;Q7n+=P6Y;var confirm=inst[y0t][type][J8G];opts[Q7n]=plural !== C4I?confirm[x2t][L9Y](Y8G,plural):confirm[k8G];}else {opts[l7t]=A5t;}}return opts;}apiRegister(b7n,function(){return __getInst(this);});apiRegister(U7n,function(opts){var e7n=U3t;e7n+=x8G;var inst=__getInst(this);inst[C6G](__setBasic(inst,opts,e7n));return this;});apiRegister(S7n,function(opts){var p7n=X3t;p7n+=K6t;K6d.j6d();var n7n=X3t;n7n+=K6t;var inst=__getInst(this);inst[n7n](this[K4I][K4I],__setBasic(inst,opts,p7n));return this;});apiRegister(l7n,function(opts){var d7n=t8t;d7n+=U8t;d7n+=K6t;K6d.m6d();var t7n=X3t;t7n+=K6t;var inst=__getInst(this);inst[t7n](this[K4I],__setBasic(inst,opts,d7n));return this;});apiRegister(M8G,function(opts){var c7n=V8G;K6d.m6d();c7n+=i8t;c7n+=v6t;var inst=__getInst(this);inst[c7n](this[K4I][K4I],__setBasic(inst,opts,v8G,C4I));return this;});apiRegister(Z8G,function(opts){var J7n=G1t;J7n+=u4t;K6d.m6d();J7n+=K6t;J7n+=X9t;var inst=__getInst(this);inst[o9Y](this[K4I],__setBasic(inst,opts,v8G,this[K4I][J7n]));return this;});apiRegister(Y7n,function(type,opts){var D8G="isPlain";K6d.m6d();var B8G="Obje";var k7n=D8G;k7n+=B8G;k7n+=S1t;if(!type){type=A2G;}else if($[k7n](type)){opts=type;type=A2G;}__getInst(this)[type](this[K4I][K4I],opts);return this;});apiRegister(x7n,function(opts){__getInst(this)[u0Y](this[K4I],opts);K6d.j6d();return this;});apiRegister(u8G,_api_file);apiRegister(M7n,_api_files);$(document)[k9t](A8G,function(e,ctx,json){K6d.m6d();var y8G="mespace";var a8G='dt';var V7n=M6Y;V7n+=y8G;if(e[V7n] !== a8G){return;}if(json && json[j8G]){$[x6Y](json[j8G],function(name,files){var v7n=v6t;v7n+=D9t;v7n+=Z8t;v7n+=K6d.g6t;if(!Editor[j8G][name]){Editor[j8G][name]={};}$[v7n](Editor[j8G][name],files);});}});Editor[Z7n]=function(msg,tn){K6d.j6d();var f8G=' For more information, please refer to https://datatables.net/tn/';throw tn?msg + f8G + tn:msg;};Editor[X8G]=function(data,props,fn){var i5G="lu";var h5G="labe";var R5G="sPlainOb";var B7n=W5G;B7n+=V3t;B7n+=C6Y;var D7n=i4t;D7n+=W2t;D7n+=v6t;var i,ien,dataPoint;props=$[Z7t]({label:i9G,value:D7n},props);if($[B7n](data)){var u7n=J2t;u7n+=Z8t;u7n+=o1t;for((i=K4I,ien=data[u7n]);i < ien;i++){var A7n=U8t;A7n+=R5G;A7n+=K6d.R6t;dataPoint=data[i];if($[A7n](dataPoint)){var a7n=w9G;a7n+=i5G;a7n+=v6t;var y7n=h5G;y7n+=J2t;fn(dataPoint[props[L5G]] === undefined?dataPoint[props[y7n]]:dataPoint[props[a7n]],dataPoint[props[S0t]],i,dataPoint[U3Y]);}else {fn(dataPoint,dataPoint,i);}}}else {var j7n=v6t;j7n+=k6t;j7n+=t9t;j7n+=X9t;i=K4I;$[j7n](data,function(key,val){K6d.m6d();fn(val,key,i);i++;});}};Editor[g5G]=function(id){var s5G="repla";var f7n=s5G;f7n+=f6Y;return id[f7n](/\./g,j3G);};Editor[X7n]=function(editor,conf,files,progressCallback,completeCallback){var C5G=" file</";var m5G="fileReadText";var K5G="ploading";var I1G="_limitLeft";var T1G="readAsDataURL";var T5G="oad";var r5G="<i>U";var w5G="L";var O5G="_li";var E5G='A server error occurred while uploading the file';var W6W=O5G;W6W+=D2t;W6W+=w5G;W6W+=I5G;var X4n=R9t;X4n+=k6t;K6d.j6d();X4n+=E6t;var L4n=C6t;L4n+=q9t;L4n+=J2t;L4n+=T5G;var h4n=r5G;h4n+=K5G;h4n+=C5G;h4n+=F5G;var R4n=F4t;R4n+=E6G;R4n+=q9t;var W4n=k6t;W4n+=B6G;W4n+=k6t;W4n+=F2Y;var reader=new FileReader();var counter=K4I;var ids=[];var generalError=E5G;editor[k4t](conf[W7t],A5t);if(typeof conf[W4n] === R4n){conf[t0Y](files,function(ids){var i4n=t9t;i4n+=k6t;i4n+=J2t;i4n+=J2t;completeCallback[i4n](editor,ids);});return;}progressCallback(conf,conf[m5G] || h4n);reader[L4n]=function(e){var o5G="uploadF";var e5G='No Ajax option specified for upload plug-in';var d5G='preSubmit.DTE_Upload';var Q5G='upload';var z5G="ploa";var n5G="adAsDat";var S5G='Upload feature cannot use `ajax.data` with an object. Please use it as a function instead.';var c5G='post';var p5G="URL";var q5G="ja";var G5G="jaxData";var N5G="eU";var P5G='action';var Q4n=B6G;Q4n+=c9t;Q4n+=C6t;Q4n+=q9t;var P4n=L7t;P4n+=v6t;P4n+=y9t;var o4n=c3t;o4n+=k6t;o4n+=F2Y;var G4n=C6t;G4n+=q9t;var z4n=r3t;z4n+=N5G;z4n+=z5G;z4n+=K6d.g6t;var F4n=H5G;F4n+=K6t;F4n+=k6t;var T4n=k6t;T4n+=q5G;T4n+=F2Y;var w4n=k6t;w4n+=G5G;var O4n=M6Y;O4n+=R9t;O4n+=v6t;var s4n=o5G;s4n+=D0t;var g4n=k6t;g4n+=E6t;g4n+=E6t;g4n+=B9t;var data=new FormData();var ajax;data[q6Y](P5G,Q5G);data[g4n](s4n,conf[O4n]);data[q6Y](Q5G,files[counter]);if(conf[w4n]){var I4n=c3t;I4n+=J3t;I4n+=b5G;conf[I4n](data,files[counter],counter);}if(conf[T4n]){ajax=conf[t0Y];}else if($[Y6Y](editor[c9t][t0Y])){var K4n=l0Y;K4n+=F2Y;var r4n=k6t;r4n+=B6G;r4n+=J3t;ajax=editor[c9t][t0Y][U5G]?editor[c9t][r4n][U5G]:editor[c9t][K4n];}else if(typeof editor[c9t][t0Y] === i9Y){var C4n=k6t;C4n+=B6G;C4n+=k6t;C4n+=F2Y;ajax=editor[c9t][C4n];}if(!ajax){throw new Error(e5G);}if(typeof ajax === i9Y){ajax={url:ajax};}if(typeof ajax[F4n] === K6d.w6t){var m4n=v6t;m4n+=k6t;m4n+=I4Y;var E4n=K6d.g6t;E4n+=k6t;E4n+=A1Y;var d={};var ret=ajax[E4n](d);if(ret !== undefined && typeof ret !== i9Y){d=ret;}$[m4n](d,function(key,value){var N4n=k6t;N4n+=E6t;N4n+=E6t;N4n+=B9t;data[N4n](key,value);});}else if($[Y6Y](ajax[h7t])){throw new Error(S5G);}var preRet=editor[W4Y](z4n,[conf[W7t],files[counter],data]);if(preRet === U1t){if(counter < files[b1t] - C4I){var H4n=T8t;H4n+=n5G;H4n+=k6t;H4n+=p5G;counter++;reader[H4n](files[counter]);}else {var q4n=l5G;q4n+=t5G;completeCallback[q4n](editor,ids);}return;}var submit=U1t;editor[G4n](d5G,function(){submit=n1t;return U1t;});$[o4n]($[P4n]({},ajax,{type:c5G,data:data,dataType:Q4n,contentType:U1t,processData:U1t,xhr:function(){var J5G="plo";var M5G="onprogress";var Y5G="ajaxSettings";var k5G="xhr";var y5G="onloadend";K6d.m6d();var b4n=W2t;b4n+=J5G;b4n+=k6t;b4n+=K6d.g6t;var xhr=$[Y5G][k5G]();if(xhr[b4n]){var U4n=x5G;U4n+=e5Y;U4n+=k6t;U4n+=K6d.g6t;xhr[U4n][M5G]=function(e){var v5G="mputable";var B5G="toFixed";var A5G=':';var u5G="%";var D5G="loa";var V5G="lengthCo";var Z5G="tal";var e4n=V5G;e4n+=v5G;if(e[e4n]){var p4n=P1t;p4n+=X9t;var n4n=R3t;n4n+=Z5G;var S4n=D5G;S4n+=K6d.g6t;S4n+=v6t;S4n+=K6d.g6t;var percent=(e[S4n] / e[n4n] * Z4I)[B5G](K4I) + u5G;progressCallback(conf,files[p4n] === C4I?percent:counter + A5G + files[b1t] + T7t + percent);}};xhr[U5G][y5G]=function(e){var j5G='Processing';var a5G="processingText";progressCallback(conf,conf[a5G] || j5G);};}return xhr;},success:function(json){var W1G="preS";var s1G="readAsDat";var X5G="uccess";var O1G="aURL";var f5G="uploadXhrS";var R1G="ubmit.DTE_Upl";var h1G="dErrors";K6d.m6d();var V4n=W2t;V4n+=s4t;V4n+=T5G;var k4n=Q4t;k4n+=F6t;k4n+=C6t;k4n+=F6t;var c4n=J2t;c4n+=Z8t;c4n+=u4t;c4n+=s4Y;var d4n=f5G;d4n+=X5G;var t4n=W1G;t4n+=R1G;t4n+=T5G;var l4n=C6t;l4n+=Z5Y;editor[l4n](t4n);editor[W4Y](d4n,[conf[W7t],json]);if(json[i1G] && json[i1G][c4n]){var J4n=I0Y;J4n+=h1G;var errors=json[J4n];for(var i=K4I,ien=errors[b1t];i < ien;i++){var Y4n=Q4t;Y4n+=L1G;editor[Y4n](errors[i][W7t],errors[i][g1G]);}}else if(json[k4n]){var M4n=v6t;M4n+=F6t;M4n+=L1G;var x4n=K8G;x4n+=v3t;editor[x4n](json[M4n]);}else if(!json[U5G] || !json[V4n][m7t]){var Z4n=q9t;Z4n+=K6d.L6t;Z4n+=v6t;var v4n=v6t;v4n+=V3t;v4n+=C6t;v4n+=F6t;editor[v4n](conf[Z4n],generalError);}else {var A4n=P1t;A4n+=X9t;var D4n=Z3t;D4n+=S8t;D4n+=J9t;if(json[D4n]){var B4n=Z3t;B4n+=D3t;$[x6Y](json[B4n],function(table,files){if(!Editor[j8G][table]){var u4n=N6t;u4n+=J2t;u4n+=J9t;Editor[u4n][table]={};}K6d.m6d();$[Z7t](Editor[j8G][table],files);});}ids[Q0Y](json[U5G][m7t]);if(counter < files[A4n] - C4I){var y4n=s1G;y4n+=O1G;counter++;reader[y4n](files[counter]);}else {completeCallback[r4t](editor,ids);if(submit){var a4n=d0Y;a4n+=R9t;a4n+=U8t;a4n+=K6t;editor[a4n]();}}}progressCallback(conf);},error:function(xhr){var w1G='uploadXhrError';var f4n=M6Y;f4n+=o3t;var j4n=Q4t;j4n+=F6t;j4n+=C6t;j4n+=F6t;editor[j4n](conf[W7t],generalError);editor[W4Y](w1G,[conf[f4n],xhr]);progressCallback(conf);}}));};files=$[X4n](files,function(val){return val;});if(conf[W6W] !== undefined){var R6W=e8t;R6W+=A2t;R6W+=s4Y;files[O6G](conf[I1G],files[R6W]);}reader[T1G](files[K4I]);};Editor[I4t][r1G]=function(init){var q1G="init.dt";var n1G="orm";var Q1G="nte";var N1G="xhr.d";var K0G='<div data-dte-e="form_content" class="';var q0G="TO";var d1G="e-e=\"head\" class=\"";var b1G="foo";var p1G="\"><div";var p0G='form_content';var Z0G='initEditor';var J1G="<div data-d";var X1G="dbT";var Y1G="te-e=\"form";var s0G='"><span></span></div>';var f1G="omT";var a1G="cyAja";var F1G="ompl";var Z1G="<div data-dte-e=\"";var g0G="indicator";var C0G='<div data-dte-e="form_info" class="';var K1G="trigg";var y1G="ga";var G0G="NS";var e0G="events";var U1G="aTa";var V1G="ote";var C1G="initC";var t1G="<div data-dt";var P0G="Tools";var v1G="te-e=\"body\" class=\"";var M1G="<div c";var o1G="ocess";var E1G="uni";var R0G="domTable";var D1G="processing\" class=\"";var H0G="BU";var j1G="aSources";var E0G='<div data-dte-e="form_buttons" class="';var O0G='<div data-dte-e="body_content" class="';var G1G=".dte";var F0G='"></div></div>';var r0G="tag";var x1G="/form>";var S1G="/div";var w0G='<div data-dte-e="foot" class="';var H1G="uniq";var k1G="_error\" class=\"";var P1G="body_co";var A1G="late";var T0G='<form data-dte-e="form" class="';var H9W=K1G;H9W+=Q4t;var z9W=C1G;z9W+=F1G;z9W+=a9Y;z9W+=v6t;var N9W=x2t;N9W+=F6G;N9W+=Z8t;N9W+=K6t;var w9W=E1G;w9W+=m1G;w9W+=W2t;w9W+=v6t;var O9W=N1G;O9W+=z1G;O9W+=K6d.g6t;O9W+=g8t;var h9W=H1G;h9W+=W2t;h9W+=v6t;var i9W=q1G;i9W+=G1G;var R9W=C6t;R9W+=q9t;var W9W=Z3t;W9W+=g6G;W9W+=J2t;W9W+=T0Y;var X6W=r3t;X6W+=o1G;X6W+=Z5t;var f6W=P1G;f6W+=Q1G;f6W+=e9t;var j6W=b1G;j6W+=K6t;var a6W=x9t;a6W+=C6t;a6W+=K6t;a6W+=Q4t;var M6W=H5G;M6W+=K6t;M6W+=U1G;M6W+=x6t;var x6W=e1G;x6W+=w0t;x6W+=S1G;x6W+=g0t;var k6W=R7Y;k6W+=i7Y;var Y6W=Z3t;Y6W+=n1G;var J6W=u1Y;J6W+=n0Y;var c6W=p1G;c6W+=l1G;c6W+=z4t;c6W+=d2G;var d6W=t1G;d6W+=d1G;var t6W=N0t;t6W+=V2G;t6W+=c1G;t6W+=g0t;var l6W=x9t;l6W+=F6t;l6W+=R9t;var p6W=x9t;p6W+=v1Y;var n6W=J1G;n6W+=Y1G;n6W+=k1G;var S6W=w0t;S6W+=x1G;var e6W=L7Y;e6W+=O0t;var U6W=Z3t;U6W+=n1G;var b6W=R0t;b6W+=K6d.g6t;b6W+=U8t;b6W+=y1t;var Q6W=M1G;Q6W+=d9t;Q6W+=O7Y;var P6W=T1t;P6W+=g0t;var o6W=x9t;o6W+=V1G;o6W+=F6t;var G6W=H9t;G6W+=o4t;var q6W=J1G;q6W+=v1G;var H6W=Z1G;H6W+=D1G;var z6W=T1t;z6W+=g0t;var N6W=M2t;N6W+=n1Y;var m6W=B3Y;m6W+=B1G;m6W+=T1t;var E6W=K6d.g6t;E6W+=C6t;E6W+=R9t;var F6W=W2t;F6W+=q9t;F6W+=P9G;F6W+=v6t;var C6W=s5t;C6W+=v6t;C6W+=J2t;C6W+=c9t;var K6W=U8t;K6W+=K6d.s6t;K6W+=c5t;K6W+=q9t;var r6W=z8t;r6W+=c8Y;var T6W=K6t;T6W+=u1G;T6W+=A1G;var I6W=b9G;I6W+=E6t;I6W+=J2t;I6W+=w3Y;var w6W=e8t;w6W+=y1G;w6W+=a1G;w6W+=F2Y;var O6W=j6G;O6W+=j1G;var s6W=K7Y;s6W+=e8t;var g6W=K6d.g6t;g6W+=f1G;g6W+=V1t;g6W+=e8t;var L6W=c3t;L6W+=k6t;L6W+=F2Y;var h6W=X1G;h6W+=t4t;h6W+=v6t;var i6W=v6t;i6W+=Z0t;i6W+=q9t;i6W+=K6d.g6t;init=$[i6W](n1t,{},Editor[a0t],init);this[c9t]=$[Z7t](n1t,{},Editor[g2Y][X0t],{actionName:init[W0G],table:init[R0G] || init[j1Y],dbTable:init[h6W] || J7t,ajaxUrl:init[i0G],ajax:init[L6W],idSrc:init[h0G],dataSource:init[g6W] || init[s6W]?Editor[L0G][a5t]:Editor[O6W][H6Y],formOptions:init[O2Y],legacyAjax:init[w6W],template:init[I6W]?$(init[T6W])[r6W]():J7t});this[d4t]=$[Z7t](n1t,{},Editor[d4t]);this[K6W]=init[y0t];Editor[C6W][X0t][F6W]++;var that=this;var classes=this[d4t];this[E6W]={"wrapper":$(m6W + classes[N6W] + z6W + H6W + classes[c7t][g0G] + s0G + q6W + classes[G6W][Z2Y] + C7t + O0G + classes[X5Y][p2Y] + S7t + H7t + w0G + classes[o6W][Z2Y] + P6W + Q6W + classes[I0G][p2Y] + S7t + H7t + b6W)[K4I],"form":$(T0G + classes[V7Y][r0G] + C7t + K0G + classes[U6W][p2Y] + e6W + S6W)[K4I],"formError":$(n6W + classes[p6W][k4t] + S7t)[K4I],"formInfo":$(C0G + classes[l6W][x1t] + t6W)[K4I],"header":$(d6W + classes[f1Y][Z2Y] + c6W + classes[J6W][p2Y] + F0G)[K4I],"buttons":$(E0G + classes[Y6W][k6W] + x6W)[K4I]};if($[r6Y][M6W][m0G]){var A6W=F6t;A6W+=N0G;A6W+=z0G;var u6W=U3t;u6W+=w4Y;u6W+=K6t;u6W+=v6t;var B6W=w4Y;B6W+=I4Y;var D6W=U8t;D6W+=V9Y;var Z6W=H0G;Z6W+=S6t;Z6W+=q0G;Z6W+=G0G;var v6W=S6t;v6W+=o0G;v6W+=P0G;var V6W=Z3t;V6W+=q9t;var ttButtons=$[V6W][a5t][v6W][Z6W];var i18n=this[D6W];$[B6W]([u6W,O3G,A6W],function(i,val){var b0G="sButtonText";var Q0G='editor_';ttButtons[Q0G + val][b0G]=i18n[val][U0G];});}$[x6Y](init[e0G],function(evt,fn){that[k9t](evt,function(){var S0G="shift";var y6W=l5G;y6W+=J2t;y6W+=J2t;var args=Array[I4t][T4t][y6W](arguments);args[S0G]();fn[n7Y](that,args);});});var dom=this[D7t];var wrapper=dom[Z2Y];dom[n0G]=_editor_el(p0G,dom[V7Y])[K4I];dom[a6W]=_editor_el(j6W,wrapper)[K4I];dom[X5Y]=_editor_el(G3Y,wrapper)[K4I];dom[l0G]=_editor_el(f6W,wrapper)[K4I];dom[c7t]=_editor_el(X6W,wrapper)[K4I];if(init[W9W]){this[t0G](init[P0Y]);}$(document)[R9W](i9W + this[c9t][h9W],function(e,settings,json){var d0G="Tabl";var g9W=q9t;g9W+=d0G;g9W+=v6t;var L9W=K6t;L9W+=k6t;L9W+=H9t;L9W+=e8t;if(that[c9t][L9W] && settings[g9W] === $(that[c9t][j1Y])[C9G](K4I)){var s9W=c0G;s9W+=U8t;s9W+=J0G;settings[s9W]=that;}})[k9t](O9W + this[c9t][w9W],function(e,settings,json){var k0G="_optionsUpdate";var Y0G="Ta";var r9W=u4t;r9W+=v6t;r9W+=K6t;K6d.j6d();var T9W=K6t;T9W+=k6t;T9W+=H9t;T9W+=e8t;var I9W=q9t;I9W+=Y0G;I9W+=M8t;I9W+=v6t;if(json && that[c9t][j1Y] && settings[I9W] === $(that[c9t][T9W])[r9W](K4I)){that[k0G](json);}});try{var F9W=U8t;F9W+=q9t;F9W+=U8t;F9W+=K6t;var C9W=v7t;C9W+=n9t;var K9W=K6d.g6t;K9W+=x0G;K9W+=n9t;this[c9t][q2Y]=Editor[K9W][init[C9W]][F9W](this);}catch(e){var M0G="isplay";var v0G=" find display controller ";var V0G="Cann";var m9W=K6d.g6t;m9W+=M0G;var E9W=V0G;E9W+=b3t;E9W+=v0G;throw E9W + init[m9W];}this[N9W](z9W,[]);$(document)[H9W](Z0G,[this]);};Editor[I4t][q9W]=function(){var D0G="emoveCla";var S9W=t8t;S9W+=U8t;S9W+=K6t;var e9W=B6G;e9W+=C6t;e9W+=U8t;e9W+=q9t;var U9W=T8t;U9W+=R9t;U9W+=z0G;var b9W=U3t;b9W+=v6t;b9W+=w3Y;var Q9W=F6t;Q9W+=D0G;Q9W+=l4t;var P9W=N8Y;P9W+=L2Y;P9W+=v6t;P9W+=F6t;var o9W=K6d.g6t;o9W+=C6t;o9W+=R9t;var G9W=B0G;G9W+=U8t;G9W+=B2G;var classesActions=this[d4t][G9W];var action=this[c9t][S6G];var wrapper=$(this[o9W][P9W]);wrapper[Q9W]([classesActions[b9W],classesActions[b6G],classesActions[U9W]][e9W](T7t));if(action === C6G){wrapper[q4t](classesActions[C6G]);}else if(action === S9W){var n9W=t0G;n9W+=l2t;n9W+=c8G;n9W+=c9t;wrapper[n9W](classesActions[b6G]);}else if(action === o9Y){var p9W=T8t;p9W+=r8t;p9W+=i8t;p9W+=v6t;wrapper[q4t](classesActions[p9W]);}};Editor[I4t][l9W]=function(data,success,error,submitParams){var K7G="ndexOf";var o7G="ete";var T7G=',';var b7G="complete";var y0G="isPlainObje";var C7G="reate";var W7G="P";var e7G="functi";var Q7G="unshift";var F7G="ajaxUr";var m7G=/_id_/;var R7G="OS";var X0G="js";var N7G="nde";var a0G="sAr";var H7G="url";var p7G="Of";var n7G="ndex";var S7G="deleteBody";var U7G="erro";var G7G="compl";var l7G='?';var A0G="cti";var u0G="DEL";var z2W=k6t;z2W+=B6G;z2W+=J3t;var C2W=u0G;C2W+=n2t;C2W+=S6t;C2W+=n2t;var K2W=K6t;K2W+=f2t;K2W+=v6t;var r2W=H5G;r2W+=A1Y;var I2W=W2t;I2W+=F6t;I2W+=J2t;var w2W=W2t;w2W+=F6t;w2W+=J2t;var j9W=J5Y;j9W+=F6t;j9W+=Z5t;var B9W=F4t;B9W+=A0G;B9W+=C6t;B9W+=q9t;var D9W=y0G;D9W+=S1t;var v9W=U8t;v9W+=a0G;v9W+=j0G;v9W+=n9t;var V9W=f0G;V9W+=t9t;var M9W=v6t;M9W+=K6d.g6t;M9W+=U8t;M9W+=K6t;var c9W=X0G;c9W+=k9t;var d9W=W7G;d9W+=R7G;d9W+=S6t;var t9W=k6t;t9W+=E6G;t9W+=q9t;var that=this;var action=this[c9t][t9W];var thrown;var opts={type:d9W,dataType:c9W,data:J7t,error:[function(xhr,text,err){K6d.j6d();thrown=err;}],success:[],complete:[function(xhr,text){var O7G="onseJSON";var D4I=204;var s7G="rseJSON";var I7G="responseText";var w7G="responseJSON";var g7G='null';var i7G="sArray";var L7G="onseTe";var h7G="resp";var x9W=U8t;x9W+=i7G;var J9W=h7G;J9W+=L7G;J9W+=D9t;var json=J7t;if(xhr[g1G] === D4I || xhr[J9W] === g7G){json={};}else {try{var k9W=k2Y;k9W+=s7G;var Y9W=h7G;Y9W+=O7G;json=xhr[w7G]?xhr[Y9W]:$[k9W](xhr[I7G]);}catch(e){}}if($[Y6Y](json) || $[x9W](json)){success(json,xhr[g1G] >= B4I,xhr);}else {error(xhr,text,thrown);}}]};var a;var ajaxSrc=this[c9t][t0Y] || this[c9t][i0G];var id=action === M9W || action === v8G?_pluck(this[c9t][E9G],V9W):J7t;if($[v9W](id)){var Z9W=B6G;Z9W+=C6t;Z9W+=R3Y;id=id[Z9W](T7G);}if($[D9W](ajaxSrc) && ajaxSrc[action]){ajaxSrc=ajaxSrc[action];}if(typeof ajaxSrc === B9W){var uri=J7t;var method=J7t;if(this[c9t][i0G]){var a9W=F6t;a9W+=r7G;a9W+=f6Y;var y9W=U8t;y9W+=K7G;var A9W=t9t;A9W+=C7G;var u9W=F7G;u9W+=J2t;var url=this[c9t][u9W];if(url[A9W]){uri=url[action];}if(uri[y9W](T7t) !== -C4I){a=uri[E7G](T7t);method=a[K4I];uri=a[C4I];}uri=uri[a9W](m7G,id);}ajaxSrc(method,uri,data,success,error);return;}else if(typeof ajaxSrc === j9W){var f9W=U8t;f9W+=N7G;f9W+=v2G;if(ajaxSrc[f9W](T7t) !== -C4I){var X9W=z7G;X9W+=J2t;a=ajaxSrc[E7G](T7t);opts[i3t]=a[K4I];opts[X9W]=a[C4I];}else {opts[H7G]=ajaxSrc;}}else {var O2W=v6t;O2W+=D9t;O2W+=Z8t;O2W+=K6d.g6t;var R2W=t9t;R2W+=q7G;var W2W=v6t;W2W+=Z0t;W2W+=q9t;W2W+=K6d.g6t;var optsCopy=$[W2W]({},ajaxSrc || ({}));if(optsCopy[R2W]){var h2W=G7G;h2W+=o7G;var i2W=M4t;i2W+=p4Y;i2W+=P7G;opts[i2W][Q7G](optsCopy[b7G]);delete optsCopy[h2W];}if(optsCopy[k4t]){var s2W=U7G;s2W+=F6t;var g2W=W2Y;g2W+=R2Y;g2W+=U8t;g2W+=U0Y;var L2W=v6t;L2W+=V3t;L2W+=v3t;opts[L2W][g2W](optsCopy[s2W]);delete optsCopy[k4t];}opts=$[O2W]({},opts,optsCopy);}opts[w2W]=opts[I2W][L9Y](m7G,id);if(opts[h7t]){var T2W=e7G;T2W+=k9t;var isFn=typeof opts[h7t] === T2W;var newData=isFn?opts[h7t](data):opts[h7t];data=isFn && newData?newData:$[Z7t](n1t,data,newData);}opts[r2W]=data;if(opts[K2W] === C2W && (opts[S7G] === undefined || opts[S7G] === n1t)){var N2W=U8t;N2W+=n7G;N2W+=p7G;var m2W=z7G;m2W+=J2t;var E2W=W2t;E2W+=F6t;E2W+=J2t;var F2W=E6t;F2W+=k6t;F2W+=F6t;F2W+=K6d.L6t;var params=$[F2W](opts[h7t]);opts[E2W]+=opts[m2W][N2W](l7G) === -C4I?l7G + params:s9Y + params;delete opts[h7t];}$[z2W](opts);};Editor[I4t][H2W]=function(target,style,time,callback){var q2W=Z3t;q2W+=q9t;K6d.j6d();if($[q2W][J9Y]){target[t7G]()[J9Y](style,time,callback);}else {var G2W=g4t;G2W+=V9t;G2W+=q9t;target[F6Y](style);if(typeof time === G2W){var o2W=l5G;o2W+=t5G;time[o2W](target);}else if(callback){callback[r4t](target);}}};Editor[I4t][O8G]=function(){var d7G="mErr";var c7G="prepend";var S2W=k6t;S2W+=E6t;S2W+=L5Y;S2W+=K6d.g6t;var e2W=C3Y;e2W+=y9t;var U2W=x9t;U2W+=F6t;U2W+=d7G;U2W+=v3t;var b2W=z8Y;b2W+=k7t;var Q2W=X9t;Q2W+=v6t;Q2W+=P8G;Q2W+=F6t;var P2W=d0t;P2W+=E6t;P2W+=c0t;var dom=this[D7t];$(dom[P2W])[c7G](dom[Q2W]);$(dom[I0G])[b2W](dom[U2W])[e2W](dom[D7Y]);$(dom[l0G])[q6Y](dom[v7Y])[S2W](dom[V7Y]);};Editor[I4t][n2W]=function(){var J7G="funct";var v7G="_clos";var Y7G="eB";var k7G="tOpts";var t2W=J7G;t2W+=x3Y;var l2W=r3t;l2W+=Y7G;l2W+=l3t;var p2W=t8t;p2W+=U8t;p2W+=k7G;var opts=this[c9t][p2W];var onBlur=opts[x7G];if(this[W4Y](l2W) === U1t){return;}if(typeof onBlur === t2W){onBlur(this);}else if(onBlur === M7G){var d2W=d0Y;d2W+=D2t;this[d2W]();}else if(onBlur === V7G){var c2W=v7G;c2W+=v6t;this[c2W]();}};Editor[I4t][X7Y]=function(){var x2W=v6t;x2W+=l1t;var k2W=N8Y;k2W+=L2Y;k2W+=Q4t;var Y2W=K6d.g6t;Y2W+=C6t;Y2W+=R9t;var J2W=S4t;J2W+=n4t;if(!this[c9t]){return;}var errorClass=this[J2W][x0t][k4t];var fields=this[c9t][P0Y];$(W3G + errorClass,this[Y2W][k2W])[t8Y](errorClass);$[x2W](fields,function(name,field){var M2W=R9t;M2W+=J9t;M2W+=h7Y;M2W+=v6t;field[k4t](A5t)[M2W](A5t);});this[k4t](A5t)[l7t](A5t);};Editor[V2W][Z7G]=function(submitComplete,mode){var a7G="closeCb";var y7G="preC";var u7G="r-focu";K6d.m6d();var D7G="playe";var B7G="focus.edit";var X7G="Ic";var j7G="closeC";var j2W=x8t;j2W+=D7G;j2W+=K6d.g6t;var a2W=B7G;a2W+=C6t;a2W+=u7G;a2W+=c9t;var y2W=C6t;y2W+=Z5Y;var A2W=d7Y;A2W+=K6d.g6t;A2W+=n9t;var B2W=t9t;B2W+=e5Y;B2W+=J6t;B2W+=A7G;var Z2W=y7G;Z2W+=e5Y;Z2W+=c9t;Z2W+=v6t;var v2W=E2G;v2W+=v6G;v2W+=q9t;v2W+=K6t;var closed;if(this[v2W](Z2W) === U1t){return;}if(this[c9t][a7G]){var D2W=j7G;D2W+=H9t;closed=this[c9t][D2W](submitComplete,mode);this[c9t][a7G]=J7t;}if(this[c9t][B2W]){var u2W=f7G;u2W+=v6t;u2W+=X7G;u2W+=H9t;this[c9t][u2W]();this[c9t][W4G]=J7t;}$(A2W)[y2W](a2W);this[c9t][j2W]=U1t;this[W4Y](V7G);if(closed){var f2W=y8t;f2W+=C6t;f2W+=A7Y;this[W4Y](f2W,[closed]);}};Editor[I4t][X2W]=function(fn){var W3W=f7G;W3W+=v6t;W3W+=k3t;W3W+=H9t;this[c9t][W3W]=fn;};Editor[I4t][R3W]=function(arg1,arg2,arg3,arg4){var R4G="main";K6d.j6d();var that=this;var title;var buttons;var show;var opts;if($[Y6Y](arg1)){opts=arg1;}else if(typeof arg1 === A0Y){show=arg1;opts=arg2;;}else {title=arg1;buttons=arg2;show=arg3;opts=arg4;;}if(show === undefined){show=n1t;}if(title){that[G7t](title);}if(buttons){var i3W=i5t;i3W+=B2G;that[i3W](buttons);}return {opts:$[Z7t]({},this[c9t][O2Y][R4G],opts),maybeOpen:function(){K6d.m6d();if(show){that[v3G]();}}};};Editor[h3W][L3W]=function(name){var i4G="aSour";var h4G="ift";var O3W=j6G;O3W+=i4G;O3W+=f6Y;var s3W=R2Y;s3W+=h4G;var g3W=i2Y;g3W+=y3G;var args=Array[I4t][g3W][r4t](arguments);args[s3W]();var fn=this[c9t][O3W][name];if(fn){return fn[n7Y](this,args);}};Editor[w3W][p0Y]=function(includeFields){var T4G="ludeFields";var L4G="ction";var w4G="lat";var r4G="ncludeFi";var O4G="tac";var s4G="displayOr";var b3W=k6t;b3W+=L4G;var Q3W=K6d.g6t;Q3W+=t5Y;Q3W+=k6t;Q3W+=g4G;var P3W=s4G;P3W+=n0Y;var o3W=x2t;o3W+=Y3G;o3W+=e9t;var F3W=z8t;F3W+=O4G;F3W+=X9t;var r3W=L2G;r3W+=U8t;r3W+=q9t;var T3W=K6t;T3W+=u1G;T3W+=w4G;T3W+=v6t;var I3W=v3t;K6d.m6d();I3W+=K6d.g6t;I3W+=v6t;I3W+=F6t;var that=this;var formContent=$(this[D7t][n0G]);var fields=this[c9t][P0Y];var order=this[c9t][I3W];var template=this[c9t][T3W];var mode=this[c9t][N0Y] || r3W;if(includeFields){var K3W=U8t;K3W+=I4G;K3W+=T4G;this[c9t][K3W]=includeFields;}else {var C3W=U8t;C3W+=r4G;C3W+=A9G;C3W+=c9t;includeFields=this[c9t][C3W];}formContent[a3Y]()[F3W]();$[x6Y](order,function(i,fieldOrName){var F4G="mplate=";var m4G="after";var C4G="[data-editor-te";var E4G='editor-field[name="';var K4G="_weakInArray";var E3W=r5t;K6d.j6d();E3W+=A9G;var name=fieldOrName instanceof Editor[E3W]?fieldOrName[W7t]():fieldOrName;if(that[K4G](name,includeFields) !== -C4I){if(template && mode === e6G){var H3W=L2Y;H3W+=v6t;H3W+=y9t;var z3W=C4G;z3W+=F4G;z3W+=T1t;var N3W=T1t;N3W+=r1t;var m3W=Z3t;m3W+=R3Y;m3W+=K6d.g6t;template[m3W](E4G + name + N3W)[m4G](fields[name][i0Y]());template[F9G](z3W + name + N4G)[H3W](fields[name][i0Y]());}else {var q3W=c9G;q3W+=v6t;formContent[q6Y](fields[name][q3W]());}}});if(template && mode === e6G){var G3W=k6t;G3W+=Q2Y;G3W+=n8Y;template[G3W](formContent);}this[o3W](P3W,[this[c9t][Q3W],this[c9t][b3W],formContent]);};Editor[I4t][x9G]=function(items,editFields,type,formOptions,setupDone){var z4G="nitEdit";var p4G="toString";var q4G="editData";var H4G="_actio";var A3W=K6d.g6t;A3W+=k6t;A3W+=K6t;A3W+=k6t;var u3W=q9t;u3W+=C6t;u3W+=K6d.g6t;u3W+=v6t;var B3W=U8t;B3W+=z4G;var Z3W=G1t;Z3W+=o1t;var n3W=v6t;n3W+=k6t;n3W+=I4Y;var S3W=H4G;S3W+=m6G;S3W+=l4t;var e3W=k6Y;e3W+=v2t;e3W+=C6t;e3W+=q9t;var U3W=r8t;U3W+=W0Y;var that=this;var fields=this[c9t][P0Y];var usedFields=[];var includeInOrder;var editData={};this[c9t][E9G]=editFields;this[c9t][q4G]=editData;this[c9t][U3W]=items;this[c9t][e3W]=b6G;this[D7t][V7Y][H5Y][T6Y]=A6Y;this[c9t][N0Y]=type;this[S3W]();$[n3W](fields,function(name,field){var G4G="ultiReset";var v3W=R9t;v3W+=L9t;v3W+=n0t;v3W+=T0Y;var l3W=v6t;l3W+=l1t;var p3W=R9t;p3W+=G4G;field[p3W]();includeInOrder=U1t;editData[name]={};$[l3W](editFields,function(idSrc,edit){var P4G="valFromD";var n4G="iSe";var S4G="layFields";var b4G="displayF";var Q4G="scope";K6d.m6d();var o4G="Ar";var t3W=N6t;t3W+=I5t;t3W+=K6d.g6t;t3W+=c9t;if(edit[t3W][name]){var Y3W=F6t;Y3W+=C6t;Y3W+=M2t;var J3W=d9Y;J3W+=o4G;J3W+=j0G;J3W+=n9t;var c3W=H5G;c3W+=A1Y;var d3W=P4G;d3W+=O7t;var val=field[d3W](edit[c3W]);editData[name][idSrc]=val === J7t?A5t:$[J3W](val)?val[T4t]():val;if(!formOptions || formOptions[Q4G] === Y3W){var x3W=b4G;x3W+=Z3G;var k3W=K6d.g6t;k3W+=v6t;k3W+=Z3t;field[U3G](idSrc,val !== undefined?val:field[k3W]());if(!edit[U4G] || edit[x3W][name]){includeInOrder=n1t;}}else {var M3W=K6d.g6t;M3W+=e4G;M3W+=S4G;if(!edit[M3W] || edit[U4G][name]){var V3W=Y1t;V3W+=n4G;V3W+=K6t;field[V3W](idSrc,val !== undefined?val:field[m4t]());includeInOrder=n1t;}}}});if(field[v3W]()[b1t] !== K4I && includeInOrder){usedFields[Q0Y](name);}});var currOrder=this[s6G]()[T4t]();for(var i=currOrder[Z3W] - C4I;i >= K4I;i--){if($[J6Y](currOrder[i][p4G](),usedFields) === -C4I){var D3W=I6G;D3W+=v6t;currOrder[D3W](i,C4I);}}this[p0Y](currOrder);this[W4Y](B3W,[_pluck(editFields,u3W)[K4I],_pluck(editFields,A3W)[K4I],items,type],function(){var l4G="initMultiEd";var y3W=l4G;y3W+=e2t;that[W4Y](y3W,[editFields,items,type],function(){K6d.m6d();setupDone();});});};Editor[a3W][W4Y]=function(trigger,args,promiseComplete){var d4G="exOf";var M4G="ggerHand";var Y4G="result";var x4G="tri";var V4G="ler";var v4G="lt";var k4G="celled";var t4G="res";var j3W=d9Y;j3W+=a1Y;j3W+=V3t;j3W+=C6Y;if(!args){args=[];}if($[j3W](trigger)){for(var i=K4I,ien=trigger[b1t];i < ien;i++){this[W4Y](trigger[i],args);}}else {var h8W=t4G;h8W+=U9Y;h8W+=K6t;var X3W=E6t;X3W+=F6t;X3W+=v6t;var f3W=R3Y;f3W+=K6d.g6t;f3W+=d4G;var e=$[c4G](trigger);$(this)[J4G](e,args);if(trigger[f3W](X3W) === K4I && e[Y4G] === U1t){var R8W=b2G;R8W+=q9t;R8W+=k4G;var W8W=x4G;W8W+=M4G;W8W+=V4G;$(this)[W8W]($[c4G](trigger + R8W),args);}if(promiseComplete){var i8W=t4G;i8W+=W2t;i8W+=v4G;if(e[i8W] && typeof e[Y4G] === Q1t && e[Y4G][z9G]){e[Y4G][z9G](promiseComplete);}else {promiseComplete(e[Y4G]);}}return e[h8W];}};Editor[L8W][g8W]=function(input){var B4G="subst";var D4G=/^on([A-Z])/;var w8W=B6G;w8W+=C6t;w8W+=R3Y;var s8W=J2t;s8W+=Z8t;s8W+=O4Y;s8W+=X9t;var name;var names=input[E7G](T7t);for(var i=K4I,ien=names[s8W];i < ien;i++){name=names[i];var onStyle=name[Z4G](D4G);if(onStyle){var O8W=B4G;O8W+=F6t;O8W+=U8t;O8W+=A2t;name=onStyle[C4I][u4G]() + name[O8W](E4I);}names[i]=name;}return names[w8W](T7t);};Editor[I8W][T8W]=function(node){var foundField=J7t;$[x6Y](this[c9t][P0Y],function(name,field){var K8W=Z3t;K8W+=U8t;K8W+=y9t;var r8W=N8t;r8W+=K6d.g6t;r8W+=v6t;if($(field[r8W]())[K8W](node)[b1t]){foundField=field;}});return foundField;};Editor[C8W][F8W]=function(fieldNames){if(fieldNames === undefined){var E8W=N6t;E8W+=I5t;E8W+=T0Y;return this[E8W]();}else if(!$[r9Y](fieldNames)){return [fieldNames];}return fieldNames;};Editor[m8W][N8W]=function(fieldsIn,focus){var i6P="activeEl";var X4G="v.D";K6d.j6d();var W6P="E ";var A4G="ocu";var f4G='jq:';var R6P=/^jq:/;var G8W=J6t;G8W+=G6G;G8W+=A4G;G8W+=c9t;var that=this;var field;var fields=$[O2G](fieldsIn,function(fieldOrName){var z8W=y4G;z8W+=U8t;z8W+=A2t;K6d.j6d();return typeof fieldOrName === z8W?that[c9t][P0Y][fieldOrName]:fieldOrName;});if(typeof focus === a4G){field=fields[focus];}else if(focus){if(focus[j4G](f4G) === K4I){var H8W=d8t;H8W+=X4G;H8W+=S6t;H8W+=W6P;field=$(H8W + focus[L9Y](R6P,A5t));}else {field=this[c9t][P0Y][focus];}}else {var q8W=i6P;q8W+=N0G;q8W+=Z8t;q8W+=K6t;document[q8W][Y0Y]();}this[c9t][G8W]=field;if(field){var o8W=Z3t;o8W+=C6t;o8W+=t9t;o8W+=R4t;field[o8W]();}};Editor[P8W][Q8W]=function(opts){var C6P="onReturn";var h6P="eyu";var N6P="editCount";var U6P="canReturnSubmit";var L6P="ri";var g6P="itO";var H6P="age";var r6P="ubm";var E6P="blu";var K6P="submitOnReturn";var w6P='.dteInline';var s6P="closeOn";var T6P="submitOnBlur";var O6P="Comp";var F6P="blurOnBackground";var m6P="rOnBackground";var I6P="Complete";var m5W=b3Y;m5W+=A7G;var y8W=N5t;y8W+=h6P;y8W+=E6t;var A8W=C6t;A8W+=q9t;var M8W=F4t;M8W+=S1t;M8W+=U8t;M8W+=k9t;var x8W=J5Y;x8W+=F6t;x8W+=U8t;x8W+=A2t;var k8W=R9t;k8W+=P6Y;var J8W=J5Y;J8W+=L6P;J8W+=A2t;var c8W=t8t;c8W+=g6P;c8W+=a6Y;c8W+=c9t;var b8W=s6P;b8W+=O6P;b8W+=P7G;var that=this;var inlineCount=__inlineCounter++;var namespace=w6P + inlineCount;if(opts[b8W] !== undefined){var S8W=t9t;S8W+=J2t;S8W+=j8t;S8W+=v6t;var e8W=s6P;e8W+=I6P;var U8W=C6t;U8W+=q9t;U8W+=k3t;U8W+=q7G;opts[U8W]=opts[e8W]?S8W:E6Y;}if(opts[T6P] !== undefined){var n8W=c9t;n8W+=r6P;n8W+=U8t;n8W+=K6t;opts[x7G]=opts[T6P]?n8W:V7G;}if(opts[K6P] !== undefined){var p8W=N8t;p8W+=V7t;opts[C6P]=opts[K6P]?M7G:p8W;}if(opts[F6P] !== undefined){var d8W=q9t;d8W+=C6t;d8W+=V7t;var t8W=M8t;t8W+=W2t;t8W+=F6t;var l8W=E6P;l8W+=m6P;opts[J0Y]=opts[l8W]?t8W:d8W;}this[c9t][c8W]=opts;this[c9t][N6P]=inlineCount;if(typeof opts[G7t] === J8W || typeof opts[G7t] === K6d.w6t){var Y8W=v2t;Y8W+=z6P;this[G7t](opts[Y8W]);opts[G7t]=n1t;}if(typeof opts[k8W] === x8W || typeof opts[l7t] === M8W){var V8W=f6G;V8W+=c9t;V8W+=H6P;this[V8W](opts[l7t]);opts[l7t]=n1t;}if(typeof opts[D7Y] !== A0Y){var Z8W=i5t;Z8W+=B2G;var v8W=H9t;v8W+=y6t;this[v8W](opts[Z8W]);opts[D7Y]=n1t;}$(document)[k9t](q6P + namespace,function(e){var e6P="ventDe";var S6P="fault";var Q6P="fieldFro";var o6P="Cod";K6d.j6d();var b6P="mNode";var D8W=G6P;D8W+=o6P;D8W+=v6t;if(e[D8W] === Q4I && that[c9t][d9G]){var el=$(document[P6P]);if(el){var B8W=x2t;B8W+=Q6P;B8W+=b6P;var field=that[B8W](el);if(field && typeof field[U6P] === K6d.w6t && field[U6P](el)){var u8W=E6t;u8W+=T8t;u8W+=e6P;u8W+=S6P;e[u8W]();}}}});$(document)[A8W](y8W + namespace,function(e){var B6P="preventDef";var W9P="next";var v6P="turn";var D6P="urn";var c6P="Elem";var x6P="nR";var V6P="Re";var A6P="nEs";var k4I=39;var Y4I=37;var M6P="etur";var f6P="prev";var J6P="anReturnSu";var y6P="onE";var j6P="onEsc";var u6P="ault";var Z6P="onR";var X6P='button';var k6P="_fieldFromNode";var d6P="tive";var K5W=M6G;K5W+=n6P;var s5W=p6P;s5W+=l6P;var j8W=N5t;j8W+=t6P;j8W+=z8t;var a8W=k6Y;a8W+=d6P;a8W+=c6P;a8W+=C1Y;var el=$(document[a8W]);if(e[j8W] === Q4I && that[c9t][d9G]){var X8W=t9t;X8W+=J6P;X8W+=Y6P;var f8W=Z3t;f8W+=W2t;f8W+=I4G;f8W+=t4Y;var field=that[k6P](el);if(field && typeof field[U6P] === f8W && field[X8W](el)){var h5W=C6t;h5W+=x6P;h5W+=M6P;h5W+=q9t;var R5W=c9t;R5W+=W2t;R5W+=H9t;R5W+=D2t;var W5W=k9t;W5W+=V6P;W5W+=v6P;if(opts[W5W] === R5W){var i5W=X8t;i5W+=W5t;i5W+=U8t;i5W+=K6t;e[f4Y]();that[i5W]();}else if(typeof opts[h5W] === K6d.w6t){var g5W=Z6P;g5W+=a9Y;g5W+=D6P;var L5W=B6P;L5W+=u6P;e[L5W]();opts[g5W](that,e);}}}else if(e[s5W] === l4I){var I5W=C6t;I5W+=A6P;I5W+=t9t;var w5W=g4t;w5W+=v2t;w5W+=k9t;var O5W=y6P;O5W+=a6P;e[f4Y]();if(typeof opts[O5W] === w5W){opts[j6P](that,e);}else if(opts[I5W] === w2Y){that[Y0Y]();}else if(opts[j6P] === V7G){var T5W=t9t;T5W+=J2t;T5W+=C6t;T5W+=J6t;that[T5W]();}else if(opts[j6P] === M7G){var r5W=d0Y;r5W+=D2t;that[r5W]();}}else if(el[b4t](K5W)[b1t]){var C5W=N5t;C5W+=A4Y;C5W+=h5t;if(e[C5W] === Y4I){el[f6P](X6P)[L6Y]();}else if(e[B4Y] === k4I){var E5W=Z3t;E5W+=w8G;E5W+=W2t;E5W+=c9t;var F5W=H7Y;F5W+=Q2G;F5W+=k9t;el[W9P](F5W)[E5W]();}}});this[c9t][m5W]=function(){var R9P="keyu";var z5W=R9P;z5W+=E6t;var N5W=C6t;N5W+=Z3t;N5W+=Z3t;$(document)[N5W](q6P + namespace);K6d.j6d();$(document)[f7Y](z5W + namespace);};return namespace;};Editor[H5W][q5W]=function(direction,action,data){var i9P="legacyAjax";var G5W=c9t;G5W+=v6t;G5W+=y9t;if(!this[c9t][i9P] || !data){return;}if(direction === G5W){var o5W=U3t;o5W+=v6t;o5W+=k6t;o5W+=g8t;if(action === o5W || action === O3G){var Q5W=H5G;Q5W+=A1Y;var P5W=v6t;P5W+=k6t;P5W+=I4Y;var id;$[P5W](data[h7t],function(rowId,values){K6d.m6d();var h9P='Editor: Multi-row editing is not supported by the legacy Ajax data format';if(id !== undefined){throw h9P;}id=rowId;});data[h7t]=data[Q5W][id];if(action === O3G){var b5W=U8t;b5W+=K6d.g6t;data[b5W]=id;}}else {var e5W=K6d.g6t;e5W+=k6t;e5W+=A1Y;var U5W=U8t;U5W+=K6d.g6t;data[U5W]=$[O2G](data[e5W],function(values,id){K6d.j6d();return id;});delete data[h7t];}}else {var p5W=K6d.g6t;p5W+=k6t;p5W+=K6t;p5W+=k6t;if(!data[h7t] && data[R0Y]){var n5W=F6t;n5W+=C6t;n5W+=M2t;var S5W=K6d.g6t;S5W+=k6t;S5W+=K6t;S5W+=k6t;data[S5W]=[data[n5W]];}else if(!data[p5W]){data[h7t]=[];}}};Editor[l5W][t5W]=function(json){var that=this;K6d.j6d();if(json[L9P]){var d5W=v6t;d5W+=k6Y;d5W+=X9t;$[d5W](this[c9t][P0Y],function(name,field){var O9P="update";K6d.j6d();var g9P="io";var c5W=C8t;c5W+=K6t;c5W+=g9P;c5W+=v9t;if(json[c5W][name] !== undefined){var Y5W=x5G;Y5W+=s9P;var J5W=Z3t;J5W+=C5t;J5W+=K6d.g6t;var fieldInst=that[J5W](name);if(fieldInst && fieldInst[Y5W]){fieldInst[O9P](json[L9P][name]);}}});}};Editor[k5W][w9P]=function(el,msg,title,fn){var K9P="In";var r9P="fade";var T9P="removeAttr";var x5W=Z3t;x5W+=q9t;var canAnimate=$[x5W][J9Y]?n1t:U1t;if(title === undefined){title=U1t;}if(!fn){fn=function(){};}if(typeof msg === K6d.w6t){var V5W=A1Y;V5W+=M8t;V5W+=v6t;var M5W=a1Y;M5W+=E6t;M5W+=U8t;msg=msg(this,new DataTable[M5W](this[c9t][V5W]));}el=$(el);K6d.m6d();if(canAnimate){el[t7G]();}if(!msg){var v5W=K6d.g6t;v5W+=x0G;v5W+=g4G;if(this[c9t][v5W] && canAnimate){el[D1Y](function(){var Z5W=X9t;Z5W+=K6t;Z5W+=Y9Y;K6d.m6d();el[Z5W](A5t);fn();});}else {var u5W=q9t;u5W+=C6t;u5W+=V7t;var B5W=t9t;B5W+=l4t;var D5W=X9t;D5W+=K6t;D5W+=Y9Y;el[D5W](A5t)[B5W](u6Y,u5W);fn();}if(title){var A5W=K6t;A5W+=U8t;A5W+=I9P;A5W+=v6t;el[T9P](A5W);}}else {fn();if(this[c9t][d9G] && canAnimate){var y5W=r9P;y5W+=K9P;el[H6Y](msg)[y5W]();}else {var a5W=d8t;a5W+=c8t;a5W+=n9t;el[H6Y](msg)[F6Y](a5W,A6Y);}if(title){el[U3Y](e3Y,msg);}}};Editor[j5W][C9P]=function(){var F9P="ncl";var E9P="udeFie";var m9P="Shown";var W1W=G1t;W1W+=o1t;var X5W=U8t;X5W+=F9P;X5W+=E9P;X5W+=X0Y;var f5W=Z3t;f5W+=U8t;f5W+=v6t;f5W+=X0Y;var fields=this[c9t][f5W];var include=this[c9t][X5W];var show=n1t;var state;if(!include){return;}for(var i=K4I,ien=include[W1W];i < ien;i++){var R1W=A7t;R1W+=x9Y;R1W+=m9P;var field=fields[include[i]];var multiEditable=field[Q9Y]();if(field[g6Y]() && multiEditable && show){state=n1t;show=U1t;}else if(field[g6Y]() && !multiEditable){state=n1t;}else {state=U1t;}fields[include[i]][R1W](state);}};Editor[I4t][i1W]=function(type,immediate){var o9P='focus.editor-focus';var G9P='submit.editor-internal';var H9P="internal";var N9P="submit.ed";var q9P="captureFocus";var z9P="r-";var N1W=k6t;N1W+=S1t;N1W+=U8t;N1W+=k9t;var s1W=R9t;s1W+=v5t;s1W+=q9t;var g1W=N9P;g1W+=l8G;g1W+=z9P;g1W+=H9P;var L1W=C6t;L1W+=Z5Y;var h1W=K6d.g6t;h1W+=C6t;h1W+=R9t;var that=this;var focusCapture=this[c9t][q2Y][q9P];if(focusCapture === undefined){focusCapture=n1t;}$(this[h1W][V7Y])[L1W](G9P)[k9t](g1W,function(e){K6d.m6d();e[f4Y]();});if(focusCapture && (type === s1W || type === a0Y)){var w1W=C6t;w1W+=q9t;var O1W=S8Y;O1W+=n9t;$(O1W)[w1W](o9P,function(){var b9P="ctive";var l9P="tFo";var p9P="Foc";var U9P="El";var P9P=".D";var S9P="rents";var n9P='.DTE';var e9P="ement";var C1W=P9P;C1W+=l9t;C1W+=Z6t;var K1W=k2Y;K1W+=T8t;K1W+=Q9P;var r1W=k6t;r1W+=b9P;r1W+=U9P;r1W+=e9P;var T1W=G1t;T1W+=o1t;var I1W=k2Y;I1W+=S9P;if($(document[P6P])[I1W](n9P)[T1W] === K4I && $(document[r1W])[K1W](C1W)[b1t] === K4I){var F1W=c9t;F1W+=a9Y;F1W+=p9P;F1W+=R4t;if(that[c9t][F1W]){var m1W=W4t;m1W+=R4t;var E1W=J6t;E1W+=l9P;E1W+=t9t;E1W+=R4t;that[c9t][E1W][m1W]();}}});}this[C9P]();this[W4Y](t9G,[type,this[c9t][N1W]]);if(immediate){var z1W=B0G;z1W+=x3Y;this[W4Y](B3G,[type,this[c9t][z1W]]);}return n1t;};Editor[H1W][u2G]=function(type){var M9P="cInfo";var k9P="yn";K6d.m6d();var v9P="oseIc";var Y9P="_clearD";var x9P="ami";var t9P="preO";var c9P="nli";var V9P='cancelOpen';var J9P="_even";var d9P="bub";var e1W=K6d.g6t;e1W+=x0G;e1W+=g4G;var q1W=t9P;q1W+=L5Y;if(this[W4Y](q1W,[type,this[c9t][S6G]]) === U1t){var b1W=d9P;b1W+=M8t;b1W+=v6t;var Q1W=U8t;Q1W+=c9P;Q1W+=q9t;Q1W+=v6t;var P1W=B0G;P1W+=U8t;P1W+=C6t;P1W+=q9t;var o1W=J9P;o1W+=K6t;var G1W=Y9P;G1W+=k9P;G1W+=x9P;G1W+=M9P;this[G1W]();this[o1W](V9P,[type,this[c9t][P1W]]);if((this[c9t][N0Y] === Q1W || this[c9t][N0Y] === b1W) && this[c9t][W4G]){var U1W=t9t;U1W+=J2t;U1W+=v9P;U1W+=H9t;this[c9t][U1W]();}this[c9t][W4G]=J7t;return U1t;}this[c9t][e1W]=type;return n1t;};Editor[S1W][n1W]=function(processing){var B9P='div.DTE';var D9P="gleClass";var u9P='processing';var c1W=E2G;c1W+=Z9P;var d1W=R3t;d1W+=u4t;d1W+=D9P;var t1W=K6d.g6t;t1W+=C6t;t1W+=R9t;var l1W=B0G;l1W+=g7Y;K6d.j6d();l1W+=v6t;var p1W=t9t;p1W+=d9t;p1W+=n4t;var procClass=this[p1W][c7t][l1W];$([B9P,this[t1W][Z2Y]])[d1W](procClass,processing);this[c9t][c7t]=processing;this[c1W](u9P,[processing]);};Editor[I4t][J1W]=function(successCallback,errorCallback,formatdata,hide){var E2P="nct";var A9P="jaxUrl";var o2P="_proce";var y9P="Count";var G2P='preSubmit';var f9P="dbTable";var m2P="onCo";var K2P='allIfChanged';var q2P='send';var a9P="dataSourc";var j9P="_fnSetObjectDataFn";var F0W=x2t;F0W+=k6t;F0W+=B6G;F0W+=J3t;var C0W=k6t;C0W+=A9P;var v1W=k6t;v1W+=S1t;v1W+=U8t;v1W+=k9t;var V1W=v6t;V1W+=p2t;V1W+=b5G;var M1W=t8t;M1W+=e2t;M1W+=y9P;var x1W=x0t;x1W+=c9t;var k1W=a9P;k1W+=v6t;var Y1W=v6t;Y1W+=F2Y;Y1W+=K6t;var that=this;var i,iLen,eventRet,errorNodes;var changed=U1t,allData={},changedData={};var setBuilder=DataTable[Y1W][g7t][j9P];var dataSource=this[c9t][k1W];var fields=this[c9t][x1W];var editCount=this[c9t][M1W];var modifier=this[c9t][R8G];var editFields=this[c9t][E9G];var editData=this[c9t][V1W];var opts=this[c9t][D3G];var changedSubmit=opts[S9Y];var submitParamsLocal;var action=this[c9t][v1W];var submitParams={"data":{}};submitParams[this[c9t][W0G]]=action;if(this[c9t][f9P]){submitParams[j1Y]=this[c9t][f9P];}if(action === C6G || action === b6G){var W0W=U3t;W0W+=x8G;$[x6Y](editFields,function(idSrc,edit){var X9P="isE";var R2P="Emp";var W2P="mptyObject";var i2P="tyObject";var X1W=X9P;X1W+=W2P;var f1W=d9Y;f1W+=R2P;f1W+=i2P;var Z1W=v6t;Z1W+=k6t;Z1W+=t9t;Z1W+=X9t;var allRowData={};var changedRowData={};$[Z1W](fields,function(name,field){var T2P='-many-count';var w2P="omData";var O2P="valFr";var I2P=/\[.*$/;var L2P="[";var s2P="multiGet";var h2P="submittable";var r2P="compare";var D1W=Z3t;D1W+=g6G;D1W+=J2t;D1W+=T0Y;if(edit[D1W][name] && field[h2P]()){var y1W=L2P;y1W+=r1t;var A1W=d9Y;A1W+=a1Y;A1W+=g2P;var multiGet=field[s2P]();var builder=setBuilder(name);if(multiGet[idSrc] === undefined){var u1W=K6d.g6t;u1W+=O7t;var B1W=O2P;B1W+=w2P;var originalVal=field[B1W](edit[u1W]);builder(allRowData,originalVal);return;}var value=multiGet[idSrc];var manyBuilder=$[A1W](value) && name[j4G](y1W) !== -C4I?setBuilder(name[L9Y](I2P,A5t) + T2P):J7t;builder(allRowData,value);if(manyBuilder){var a1W=J2t;a1W+=v6t;a1W+=B9Y;manyBuilder(allRowData,value[a1W]);}if(action === O3G && (!editData[name] || !field[r2P](value,editData[name][idSrc]))){builder(changedRowData,value);changed=n1t;if(manyBuilder){var j1W=e8t;j1W+=q9t;j1W+=u4t;j1W+=s4Y;manyBuilder(changedRowData,value[j1W]);}}}});if(!$[f1W](allRowData)){allData[idSrc]=allRowData;}if(!$[X1W](changedRowData)){changedData[idSrc]=changedRowData;}});if(action === W0W || changedSubmit === T2Y || changedSubmit === K2P && changed){submitParams[h7t]=allData;}else if(changedSubmit === C2P && changed){var R0W=K6d.g6t;R0W+=O7t;submitParams[R0W]=changedData;}else {var w0W=s8t;w0W+=F2P;w0W+=p4Y;w0W+=P7G;var O0W=E2G;O0W+=i8t;O0W+=v6t;O0W+=e9t;var g0W=Z3t;g0W+=W2t;g0W+=E2P;g0W+=x3Y;var L0W=m2P;L0W+=R9t;L0W+=E6t;L0W+=P7G;var i0W=y8t;i0W+=C6t;i0W+=c9t;i0W+=v6t;this[c9t][S6G]=J7t;if(opts[N2P] === i0W && (hide === undefined || hide)){var h0W=i1t;h0W+=J2t;h0W+=C6t;h0W+=J6t;this[h0W](U1t);}else if(typeof opts[L0W] === g0W){opts[N2P](this);}if(successCallback){var s0W=l5G;s0W+=J2t;s0W+=J2t;successCallback[s0W](this);}this[z2P](U1t);this[O0W](w0W);return;}}else if(action === o9Y){var I0W=v6t;I0W+=l1t;$[I0W](editFields,function(idSrc,edit){var r0W=K6d.g6t;r0W+=k6t;r0W+=K6t;r0W+=k6t;var T0W=H5G;T0W+=K6t;T0W+=k6t;K6d.j6d();submitParams[T0W][idSrc]=edit[r0W];});}this[H2P](q2P,action,submitParams);submitParamsLocal=$[Z7t](n1t,{},submitParams);if(formatdata){formatdata(submitParams);}if(this[W4Y](G2P,[submitParams,action]) === U1t){var K0W=o2P;K0W+=F8G;this[K0W](U1t);return;}var submitWire=this[c9t][t0Y] || this[c9t][C0W]?this[F0W]:this[P2P];K6d.m6d();submitWire[r4t](this,submitParams,function(json,notGood,xhr){var Q2P="_su";var b2P="mitSucce";var E0W=Q2P;E0W+=H9t;E0W+=b2P;E0W+=l4t;that[E0W](json,notGood,submitParams,submitParamsLocal,that[c9t][S6G],editCount,hide,successCallback,errorCallback,xhr);},function(xhr,err,thrown){var m0W=k6t;K6d.m6d();m0W+=t9t;m0W+=V9t;m0W+=q9t;that[U2P](xhr,err,thrown,errorCallback,submitParams,that[c9t][m0W]);},submitParams);};Editor[I4t][P2P]=function(data,success,error,submitParams){var c2P="_dataSour";var S2P="jectDataFn";var e2P="nSetOb";var l2P="ndiv";var d2P="difie";var t2P="idual";var P0W=V8G;P0W+=i8t;P0W+=v6t;var o0W=x2t;o0W+=Z3t;o0W+=e2P;o0W+=S2P;var G0W=C6t;G0W+=n2P;G0W+=U8t;var q0W=v6t;q0W+=F2Y;q0W+=K6t;var H0W=f0G;H0W+=t9t;var z0W=C6t;z0W+=n2P;z0W+=U8t;var N0W=u0t;N0W+=K6t;var that=this;var action=data[S6G];var out={data:[]};var idGet=DataTable[N0W][z0W][p2P](this[c9t][H0W]);var idSet=DataTable[q0W][G0W][o0W](this[c9t][h0G]);if(action !== P0W){var p0W=K6d.g6t;p0W+=k6t;p0W+=A1Y;var n0W=U8t;n0W+=l2P;n0W+=t2P;var S0W=R9t;S0W+=C6t;S0W+=d2P;S0W+=F6t;var e0W=Z3t;e0W+=C5t;e0W+=K6d.g6t;e0W+=c9t;var U0W=c2P;U0W+=f6Y;var b0W=L2G;b0W+=U8t;b0W+=q9t;var Q0W=R9t;Q0W+=C6t;Q0W+=K6d.g6t;Q0W+=v6t;var originalData=this[c9t][Q0W] === b0W?this[U0W](e0W,this[S0W]()):this[E0Y](n0W,this[R8G]());$[x6Y](data[p0W],function(key,vals){var Y2P="Extend";var J2P="ush";var Y0W=E6t;Y0W+=J2P;var J0W=K6d.g6t;J0W+=k6t;J0W+=A1Y;var c0W=q6G;c0W+=k6t;c0W+=g8t;var d0W=v6t;d0W+=K6d.g6t;d0W+=U8t;d0W+=K6t;var t0W=C3t;t0W+=q9t;t0W+=Y2P;var l0W=k2P;l0W+=e8G;var toSave;var extender=$[r6Y][x2P][l0W][t0W];if(action === d0W){var rowData=originalData[key][h7t];toSave=extender({},rowData,n1t);toSave=extender(toSave,vals,n1t);}else {toSave=extender({},vals,n1t);}var overrideId=idGet(toSave);if(action === c0W && overrideId === undefined){idSet(toSave,+new Date() + A5t + key);}else {idSet(toSave,overrideId);}K6d.j6d();out[J0W][Y0W](toSave);});}success(out);};Editor[I4t][M2P]=function(json,notGood,submitParams,submitParamsLocal,action,editCount,hide,successCallback,errorCallback,xhr){var d3P='postRemove';var y2P="ces";var B2P="ieldError";var m3P='prep';var n3P="aS";var V2P="ocessing";var e3P='preEdit';var Z2P="ostSu";var P3P="_dat";var l3P='preRemove';var D2P='receive';var Q3P="aSo";var z3P="_data";var a2P="sful";var C3P="submitSucces";var E3P="mmit";var p3P="ource";var F3P="editCou";var H3P="Source";var u2P="submitUns";var v2P="ldErrors";var A2P="uc";var K3P='<br>';var G3P='setData';var U3P='postCreate';var t3P="ids";var b3P="preCr";var c3P="lose";var S3P="omm";var Z7W=m8G;Z7W+=v6t;Z7W+=q9t;Z7W+=K6t;var v7W=z8G;v7W+=F6t;v7W+=V2P;var D0W=G1t;D0W+=u4t;D0W+=s4Y;var Z0W=N6t;Z0W+=v6t;Z0W+=v2P;var v0W=K8G;v0W+=v3t;var M0W=Q4t;M0W+=F6t;M0W+=C6t;M0W+=F6t;var x0W=E6t;x0W+=Z2P;x0W+=Y6P;var k0W=s5t;k0W+=G3G;k0W+=F6t;var that=this;var setData;var fields=this[c9t][P0Y];var opts=this[c9t][D3G];var modifier=this[c9t][k0W];this[H2P](D2P,action,json);this[W4Y](x0W,[json,submitParams,action,xhr]);if(!json[M0W]){json[k4t]=K6d.I6t;}if(!json[i1G]){var V0W=Z3t;V0W+=B2P;V0W+=c9t;json[V0W]=[];}if(notGood || json[v0W] || json[Z0W][D0W]){var K7W=u2P;K7W+=A2P;K7W+=y2P;K7W+=a2P;var r7W=v6t;r7W+=V3t;r7W+=v3t;var u0W=C1t;u0W+=X9t;var B0W=Q4t;B0W+=F6t;B0W+=v3t;var globalError=[];if(json[B0W]){globalError[Q0Y](json[k4t]);}$[u0W](json[i1G],function(i,err){var r3P=":";var i3P="onFieldError";var T3P="Er";var s3P="_an";var h3P="ositio";var O3P="imat";var w3P="onFiel";var f2P='Unknown field: ';var I3P="dEr";var R3P="onF";var X2P="fu";var W3P="nctio";var y0W=K6d.g6t;y0W+=U8t;y0W+=j2P;y0W+=l9G;var A0W=q9t;A0W+=K6d.L6t;A0W+=v6t;var field=fields[err[A0W]];if(!field){throw new Error(f2P + err[W7t]);}else if(field[y0W]()){var j0W=n2t;j0W+=a9G;var a0W=Q4t;a0W+=F6t;a0W+=v3t;field[a0W](err[g1G] || j0W);if(i === K4I){var O7W=X2P;O7W+=W3P;O7W+=q9t;var s7W=R3P;s7W+=B2P;if(opts[i3P] === I2Y){var g7W=x9t;g7W+=t9t;g7W+=R4t;var L7W=K6t;L7W+=C6t;L7W+=E6t;var h7W=E6t;h7W+=h3P;h7W+=q9t;var i7W=q9t;i7W+=C6t;i7W+=z8t;var R7W=v5Y;R7W+=E6t;R7W+=v6t;R7W+=F6t;var W7W=X5Y;W7W+=L3P;W7W+=g3P;var X0W=K6d.g6t;X0W+=C6t;X0W+=R9t;var f0W=s3P;f0W+=O3P;f0W+=v6t;that[f0W]($(that[X0W][W7W],that[c9t][R7W]),{scrollTop:$(field[i7W]())[h7W]()[L7W]},u4I);field[g7W]();}else if(typeof opts[s7W] === O7W){var w7W=w3P;w7W+=I3P;w7W+=L1G;opts[w7W](that,err);}}}else {var T7W=T3P;T7W+=p8t;T7W+=F6t;var I7W=r3P;I7W+=l1G;globalError[Q0Y](field[W7t]() + I7W + (err[g1G] || T7W));}});this[r7W](globalError[a3G](K3P));this[W4Y](K7W,[json]);if(errorCallback){var C7W=t9t;C7W+=Z1Y;C7W+=J2t;errorCallback[C7W](that,json);}}else {var V7W=C3P;V7W+=c9t;var M7W=m8G;M7W+=C1Y;var J7W=F3P;J7W+=e9t;var F7W=t9t;F7W+=T8t;F7W+=I3Y;F7W+=v6t;var store={};if(json[h7t] && (action === F7W || action === b6G)){var S7W=t9t;S7W+=C6t;S7W+=E3P;var E7W=K6d.g6t;E7W+=I3Y;E7W+=k6t;this[E0Y](m3P,action,modifier,submitParamsLocal,json,store);for(var i=K4I;i < json[E7W][b1t];i++){var b7W=v6t;b7W+=K6d.g6t;b7W+=U8t;b7W+=K6t;var z7W=N3P;z7W+=g8t;var N7W=x2t;N7W+=F6G;N7W+=v6t;N7W+=e9t;var m7W=z3P;m7W+=H3P;setData=json[h7t][i];var id=this[m7W](q3P,setData);this[N7W](G3P,[json,setData,action]);if(action === z7W){var Q7W=t9t;Q7W+=Q6G;Q7W+=g8t;var P7W=x2t;P7W+=v6t;P7W+=o3P;P7W+=K6t;var o7W=U3t;o7W+=x8G;var G7W=P3P;G7W+=Q3P;G7W+=z7G;G7W+=f6Y;var q7W=b3P;q7W+=w4Y;q7W+=K6t;q7W+=v6t;var H7W=x2t;H7W+=Y3G;H7W+=e9t;this[H7W](q7W,[json,setData,id]);this[G7W](o7W,fields,setData,store);this[P7W]([Q7W,U3P],[json,setData,id]);}else if(action === b7W){var e7W=E6t;e7W+=h2Y;e7W+=r6t;e7W+=K6t;var U7W=x2t;U7W+=Y3G;U7W+=e9t;this[U7W](e3P,[json,setData,id]);this[E0Y](O3G,modifier,fields,setData,store);this[W4Y]([O3G,e7W],[json,setData,id]);}}this[E0Y](S7W,action,modifier,json[h7t],store);}else if(action === o9Y){var c7W=t9t;c7W+=S3P;c7W+=e2t;var d7W=e2Y;d7W+=I3Y;d7W+=n3P;d7W+=p3P;var t7W=U8t;t7W+=K6d.g6t;t7W+=c9t;var l7W=E2G;l7W+=o3P;l7W+=K6t;var p7W=P3P;p7W+=n3P;p7W+=p3P;var n7W=E6t;n7W+=l2G;this[E0Y](n7W,action,modifier,submitParamsLocal,json,store);this[W4Y](l3P,[json,this[t3P]()]);this[p7W](v8G,modifier,fields,store);this[l7W]([v8G,d3P],[json,this[t7W]()]);this[d7W](c7W,action,modifier,json[h7t],store);}if(editCount === this[c9t][J7W]){var k7W=t9t;k7W+=c3P;var Y7W=k6t;Y7W+=t9t;Y7W+=t4Y;var action=this[c9t][Y7W];this[c9t][S6G]=J7t;if(opts[N2P] === k7W && (hide === undefined || hide)){var x7W=K6d.g6t;x7W+=O7t;this[Z7G](json[x7W]?n1t:U1t,action);}else if(typeof opts[N2P] === K6d.w6t){opts[N2P](this);}}if(successCallback){successCallback[r4t](that,json);}this[M7W](V7W,[json,setData,action]);}this[v7W](U1t);this[Z7W](J3P,[json,setData,action]);};Editor[I4t][U2P]=function(xhr,err,thrown,errorCallback,submitParams,action){var Y3P="bmitError";var k3P="sys";var x3P='postSubmit';var y7W=X8t;y7W+=Y3P;var A7W=x2t;A7W+=v6t;A7W+=Z9P;var u7W=k3P;u7W+=b9G;var B7W=G6t;B7W+=c5t;B7W+=q9t;var D7W=m8G;D7W+=v6t;D7W+=e9t;this[D7W](x3P,[J7t,submitParams,action,xhr]);this[k4t](this[B7W][k4t][u7W]);this[z2P](U1t);K6d.m6d();if(errorCallback){errorCallback[r4t](this,xhr,err,thrown);}this[A7W]([y7W,J3P],[xhr,err,thrown,submitParams]);};Editor[a7W][j7W]=function(fn){var y3P="mplete";var V3P="processin";var M3P="ine";var B3P="ings";var O4W=R3Y;O4W+=J2t;O4W+=M3P;var L4W=V3P;L4W+=u4t;var R4W=A1Y;R4W+=H9t;R4W+=e8t;var W4W=a1Y;W4W+=E6t;W4W+=U8t;var X7W=v3P;K6d.j6d();X7W+=v6t;var f7W=U8G;f7W+=v6t;var that=this;var dt=this[c9t][f7W]?new $[r6Y][X7W][W4W](this[c9t][R4W]):J7t;var ssp=U1t;if(dt){var h4W=Z3P;h4W+=D3P;var i4W=z9Y;i4W+=K6t;i4W+=B3P;ssp=dt[i4W]()[K4I][u3P][h4W];}if(this[c9t][L4W]){var s4W=X8t;s4W+=A3P;s4W+=F2P;s4W+=y3P;var g4W=C6t;g4W+=q9t;g4W+=v6t;this[g4W](s4W,function(){var a3P='draw';if(ssp){dt[l3G](a3P,fn);}else {setTimeout(function(){K6d.j6d();fn();},G4I);}});return n1t;}else if(this[T6Y]() === O4W || this[T6Y]() === a0Y){var I4W=y8t;I4W+=C6t;I4W+=c9t;I4W+=v6t;var w4W=C6t;w4W+=q9t;w4W+=v6t;this[w4W](I4W,function(){K6d.j6d();if(!that[c9t][c7t]){setTimeout(function(){if(that[c9t]){fn();}},G4I);}else {var T4W=k9t;T4W+=v6t;that[T4W](J3P,function(e,json){if(ssp && json){var K4W=K6d.g6t;K4W+=F6t;K4W+=k6t;K4W+=M2t;var r4W=C6t;r4W+=q9t;r4W+=v6t;dt[r4W](K4W,fn);}else {setTimeout(function(){K6d.j6d();if(that[c9t]){fn();}},G4I);}});}})[Y0Y]();return n1t;}return U1t;};Editor[I4t][C4W]=function(name,arr){for(var i=K4I,ien=arr[b1t];i < ien;i++){if(name == arr[i]){return i;}}return -C4I;};Editor[a0t]={"table":J7t,"ajaxUrl":J7t,"fields":[],"display":F4W,"ajax":J7t,"idSrc":E4W,"events":{},"i18n":{"close":m4W,"create":{"button":j3P,"title":f3P,"submit":f6t},"edit":{"button":N4W,"title":z4W,"submit":X3P},"remove":{"button":W8P,"title":W8P,"submit":W8P,"confirm":{"_":R8P,"1":i8P}},"error":{"system":H4W},multi:{title:q4W,info:G4W,restore:h8P,noMulti:o4W},datetime:{previous:P4W,next:L8P,months:[Q4W,g8P,s8P,O8P,b4W,U4W,w8P,I8P,e4W,S4W,T8P,n4W],weekdays:[p4W,l4W,t4W,r8P,d4W,K8P,c4W],amPm:[J4W,C8P],hours:Y4W,minutes:F8P,seconds:k4W,unknown:j3G}},formOptions:{bubble:$[Z7t]({},Editor[g2Y][O2Y],{title:U1t,message:U1t,buttons:l4Y,submit:x4W}),inline:$[M4W]({},Editor[V4W][v4W],{buttons:U1t,submit:C2P}),main:$[Z7t]({},Editor[g2Y][O2Y])},legacyAjax:U1t,actionName:Z4W};(function(){var c8P="isEmptyObject";var y8P="column";var z5P="rowIds";var c5P='[data-editor-value]';var C5P="drawType";var U6N=v3P;U6N+=v6t;var __dataSources=Editor[L0G]={};K6d.j6d();var __dtIsSsp=function(dt,editor){var E8P="awType";var m8P="tOp";var z8P="bServerSide";var N8P="ngs";var A4W=N8t;A4W+=V7t;var u4W=K6d.g6t;u4W+=F6t;u4W+=E8P;var B4W=t8t;B4W+=U8t;B4W+=m8P;B4W+=V9G;var D4W=z9Y;D4W+=K6t;D4W+=U8t;D4W+=N8P;return dt[D4W]()[K4I][u3P][z8P] && editor[c9t][B4W][u4W] !== A4W;};var __dtApi=function(table){K6d.m6d();return $(table)[w1t]();};var __dtHighlight=function(node){node=$(node);setTimeout(function(){var q8P='highlight';var H8P="addClas";var y4W=H8P;y4W+=c9t;node[y4W](q8P);K6d.j6d();setTimeout(function(){K6d.j6d();var G8P="hig";var o8P="hlight";var P8P="Hi";var Q8P="ghlight";var j4W=G8P;j4W+=o8P;var a4W=q9t;a4W+=C6t;a4W+=P8P;a4W+=Q8P;node[q4t](a4W)[t8Y](j4W);setTimeout(function(){var U8P='noHighlight';var b8P="removeCla";var f4W=b8P;f4W+=l4t;node[f4W](U8P);},A4I);},u4I);},e4I);};var __dtRowSelector=function(out,dt,identifier,fields,idFn){var W6N=v6t;W6N+=k6t;W6N+=t9t;W6N+=X9t;var X4W=F6t;X4W+=y5Y;X4W+=c9t;dt[X4W](identifier)[e8P]()[W6N](function(idx){var n8P=" find row identifier";var b4I=14;var S8P="nable to";var L6N=F6t;L6N+=C6t;L6N+=M2t;var h6N=N8t;h6N+=z8t;var R6N=F6t;R6N+=y5Y;var row=dt[R6N](idx);var data=row[h7t]();var idSrc=idFn(data);if(idSrc === undefined){var i6N=W9G;i6N+=S8P;i6N+=n8P;Editor[k4t](i6N,b4I);}out[idSrc]={idSrc:idSrc,data:data,node:row[h6N](),fields:fields,type:L6N};});};var __dtFieldsFromIdx=function(dt,fields,idx){var p8P="aoColumns";var Y8P="o automatically determine f";var x8P="pecify the field name.";var t8P="mData";var l8P="editField";var k8P="ield from source. Please s";var J8P="Unable t";var O6N=C1t;K6d.j6d();O6N+=X9t;var g6N=X3t;g6N+=G6G;g6N+=U8t;g6N+=A9G;var field;var col=dt[X0t]()[K4I][p8P][idx];var dataSrc=col[l8P] !== undefined?col[g6N]:col[t8P];var resolvedFields={};var run=function(field,dataSrc){if(field[W7t]() === dataSrc){var s6N=q9t;s6N+=K6d.L6t;s6N+=v6t;resolvedFields[field[s6N]()]=field;}};$[O6N](fields,function(name,fieldInst){var d8P="isArr";var w6N=d8P;w6N+=C6Y;if($[w6N](dataSrc)){for(var i=K4I;i < dataSrc[b1t];i++){run(fieldInst,dataSrc[i]);}}else {run(fieldInst,dataSrc);}});if($[c8P](resolvedFields)){var T6N=J8P;T6N+=Y8P;T6N+=k8P;T6N+=x8P;var I6N=v6t;I6N+=G8G;I6N+=F6t;Editor[I6N](T6N,o4I);}return resolvedFields;};var __dtCellSelector=function(out,dt,identifier,allFields,idFn,forceFields){dt[M8P](identifier)[e8P]()[x6Y](function(idx){var B8P="atta";var V8P="ayFields";var Z8P="fix";var v8P="fixedN";var D8P="Node";var u8P="nodeNam";var A8P="cell";var j8P="attach";var a8P="layF";var q6N=d8t;q6N+=c9t;q6N+=s4t;q6N+=V8P;var H6N=v8P;H6N+=C6t;H6N+=z8t;var z6N=Z8P;z6N+=v6t;z6N+=K6d.g6t;z6N+=D8P;var N6N=E6t;N6N+=W2t;N6N+=c9t;N6N+=X9t;var m6N=k6t;m6N+=K6t;m6N+=K6t;m6N+=l1t;var E6N=B8P;E6N+=t9t;E6N+=X9t;var F6N=p8t;F6N+=M2t;var K6N=u8P;K6N+=v6t;var r6N=K6d.g6t;r6N+=k6t;r6N+=K6t;r6N+=k6t;var cell=dt[A8P](idx);var row=dt[R0Y](idx[R0Y]);var data=row[r6N]();var idSrc=idFn(data);var fields=forceFields || __dtFieldsFromIdx(dt,allFields,idx[y8P]);var isNode=typeof identifier === Q1t && identifier[K6N] || identifier instanceof $;var prevDisplayFields,prevAttach;if(out[idSrc]){var C6N=x8t;C6N+=E6t;C6N+=a8P;C6N+=Z3G;prevAttach=out[idSrc][j8P];prevDisplayFields=out[idSrc][C6N];}__dtRowSelector(out,dt,idx[F6N],allFields,idFn);out[idSrc][E6N]=prevAttach || [];out[idSrc][m6N][N6N](isNode?$(identifier)[C9G](K4I):cell[z6N]?cell[H6N]():cell[i0Y]());out[idSrc][U4G]=prevDisplayFields || ({});$[Z7t](out[idSrc][q6N],fields);});};var __dtColumnSelector=function(out,dt,identifier,fields,idFn){var f8P="ell";var o6N=v6t;o6N+=k6t;o6N+=t9t;o6N+=X9t;var G6N=t9t;K6d.m6d();G6N+=f8P;G6N+=c9t;dt[G6N](J7t,identifier)[e8P]()[o6N](function(idx){K6d.j6d();__dtCellSelector(out,dt,idx,fields,idFn);});};var __dtjqId=function(id){var W5P="$";var X8P="\\";var b6N=X8P;b6N+=W5P;b6N+=K6d.s6t;var Q6N=T8t;Q6N+=R5P;Q6N+=f6Y;var P6N=J5Y;P6N+=i5P;P6N+=u4t;return typeof id === P6N?w2G + id[Q6N](/(:|\.|\[|\]|,)/g,b6N):w2G + id;};__dataSources[U6N]={id:function(data){var h5P="idS";var S6N=h5P;K6d.j6d();S6N+=F6t;S6N+=t9t;var e6N=v6t;e6N+=F2Y;e6N+=K6t;var idFn=DataTable[e6N][g7t][p2P](this[c9t][S6N]);return idFn(data);},individual:function(identifier,fieldNames){var p6N=Z3t;p6N+=D0t;p6N+=c9t;var n6N=K7Y;n6N+=e8t;var idFn=DataTable[L7t][g7t][p2P](this[c9t][h0G]);var dt=__dtApi(this[c9t][n6N]);var fields=this[c9t][p6N];var out={};var forceFields;var responsiveNode;if(fieldNames){if(!$[r9Y](fieldNames)){fieldNames=[fieldNames];}forceFields={};$[x6Y](fieldNames,function(i,name){K6d.j6d();forceFields[name]=fields[name];});}__dtCellSelector(out,dt,identifier,fields,idFn,forceFields);return out;},fields:function(identifier){var s5P="isPlainObj";var I5P="bjectDa";var T5P="taFn";var O5P="_fnGet";var r5P="columns";var L5P="cel";var K5P="lls";var k6N=L5P;k6N+=g5P;var Y6N=F6t;Y6N+=y5Y;Y6N+=c9t;var J6N=s5P;J6N+=G9G;var c6N=N6t;c6N+=v6t;c6N+=X0Y;var d6N=O5P;d6N+=w5P;d6N+=I5P;d6N+=T5P;var t6N=C6t;t6N+=n2P;t6N+=U8t;var l6N=v6t;l6N+=D9t;var idFn=DataTable[l6N][t6N][d6N](this[c9t][h0G]);var dt=__dtApi(this[c9t][j1Y]);var fields=this[c9t][c6N];var out={};if($[J6N](identifier) && (identifier[Y6N] !== undefined || identifier[r5P] !== undefined || identifier[k6N] !== undefined)){var V6N=f6Y;V6N+=K5P;if(identifier[m9G] !== undefined){var x6N=F6t;x6N+=y5Y;x6N+=c9t;__dtRowSelector(out,dt,identifier[x6N],fields,idFn);}if(identifier[r5P] !== undefined){var M6N=y8P;M6N+=c9t;__dtColumnSelector(out,dt,identifier[M6N],fields,idFn);}if(identifier[V6N] !== undefined){__dtCellSelector(out,dt,identifier[M8P],fields,idFn);}}else {__dtRowSelector(out,dt,identifier,fields,idFn);}return out;},create:function(fields,data){var v6N=U8G;K6d.j6d();v6N+=v6t;var dt=__dtApi(this[c9t][v6N]);if(!__dtIsSsp(dt,this)){var Z6N=N3Y;Z6N+=K6d.g6t;var row=dt[R0Y][Z6N](data);__dtHighlight(row[i0Y]());}},edit:function(identifier,fields,data,store){K6d.m6d();var m5P="sp";var N5P="_fnExtend";var D6N=q9t;D6N+=C6t;D6N+=q9t;D6N+=v6t;var that=this;var dt=__dtApi(this[c9t][j1Y]);if(!__dtIsSsp(dt,this) || this[c9t][D3G][C5P] === D6N){var i9N=q9t;i9N+=C6t;i9N+=K6d.g6t;i9N+=v6t;var f6N=k6t;f6N+=q9t;f6N+=n9t;var y6N=k6t;y6N+=q9t;y6N+=n9t;var u6N=F5P;u6N+=J2t;var B6N=U8t;B6N+=K6d.g6t;var rowId=__dataSources[a5t][B6N][u6N](this,data);var row;try{var A6N=F6t;A6N+=C6t;A6N+=M2t;row=dt[A6N](__dtjqId(rowId));}catch(e){row=dt;}if(!row[y6N]()){var a6N=F6t;a6N+=C6t;a6N+=M2t;row=dt[a6N](function(rowIdx,rowData,rowNode){var E5P="dataTa";var j6N=E5P;j6N+=x6t;return rowId == __dataSources[j6N][m7t][r4t](that,rowData);});}if(row[f6N]()){var W9N=m5P;W9N+=K2Y;W9N+=t9t;W9N+=v6t;var X6N=p8t;X6N+=M2t;X6N+=e9Y;var extender=$[r6Y][x2P][g7t][N5P];var toSave=extender({},row[h7t](),n1t);toSave=extender(toSave,data,n1t);row[h7t](toSave);var idx=$[J6Y](rowId,store[z5P]);store[X6N][W9N](idx,C4I);}else {var R9N=k6t;R9N+=K6d.g6t;R9N+=K6d.g6t;row=dt[R0Y][R9N](data);}__dtHighlight(row[i9N]());}},remove:function(identifier,fields,store){var H5P="cancell";var g9N=G1t;g9N+=u4t;g9N+=s4Y;var L9N=H5P;L9N+=t8t;var h9N=K6t;h9N+=k6t;h9N+=M8t;h9N+=v6t;K6d.j6d();var that=this;var dt=__dtApi(this[c9t][h9N]);var cancelled=store[L9N];if(cancelled[g9N] === K4I){dt[m9G](identifier)[o9Y]();}else {var O9N=v6t;O9N+=i8t;O9N+=Q4t;O9N+=n9t;var s9N=p8t;s9N+=r9G;var indexes=[];dt[s9N](identifier)[O9N](function(){var I9N=K6d.g6t;I9N+=I3Y;I9N+=k6t;var w9N=F5P;w9N+=J2t;K6d.j6d();var id=__dataSources[a5t][m7t][w9N](that,this[I9N]());if($[J6Y](id,cancelled) === -C4I){indexes[Q0Y](this[q5P]());}});dt[m9G](indexes)[o9Y]();}},prep:function(action,identifier,submit,json,store){var o5P="cancelled";var G5P="owId";var Q5P="lled";var P5P="cance";K6d.m6d();var F9N=F6t;F9N+=N0G;F9N+=z0G;var T9N=v6t;T9N+=K6d.g6t;T9N+=U8t;T9N+=K6t;if(action === T9N){var C9N=j6G;C9N+=k6t;var K9N=R9t;K9N+=k6t;K9N+=E6t;var r9N=F6t;r9N+=G5P;r9N+=c9t;var cancelled=json[o5P] || [];store[r9N]=$[K9N](submit[C9N],function(val,key){return !$[c8P](submit[h7t][key]) && $[J6Y](key,cancelled) === -C4I?key:undefined;});}else if(action === F9N){var E9N=P5P;E9N+=Q5P;store[o5P]=json[E9N] || [];}},commit:function(action,identifier,data,store){var U5P="any";var Q9N=Z6Y;Q9N+=v6t;var N9N=e8t;N9N+=q9t;N9N+=O4Y;N9N+=X9t;var m9N=t8t;m9N+=e2t;var that=this;var dt=__dtApi(this[c9t][j1Y]);if(!__dtIsSsp(dt,this) && action === m9N && store[z5P][N9N]){var q9N=G1t;q9N+=u4t;q9N+=s4Y;var ids=store[z5P];var row;var compare=function(id){K6d.j6d();return function(rowIdx,rowData,rowNode){var H9N=l5G;H9N+=J2t;H9N+=J2t;var z9N=b5P;z9N+=V1t;z9N+=e8t;return id == __dataSources[z9N][m7t][H9N](that,rowData);};};for(var i=K4I,ien=ids[q9N];i < ien;i++){var P9N=Z3P;P9N+=D3P;var o9N=k6t;o9N+=q9t;o9N+=n9t;try{var G9N=F6t;G9N+=C6t;G9N+=M2t;row=dt[G9N](__dtjqId(ids[i]));}catch(e){row=dt;}if(!row[U5P]()){row=dt[R0Y](compare(ids[i]));}if(row[o9N]() && !dt[X0t]()[K4I][u3P][P9N]){row[o9Y]();}}}var drawType=this[c9t][D3G][C5P];if(drawType !== Q9N){var b9N=K6d.g6t;b9N+=F6t;b9N+=k6t;b9N+=M2t;dt[b9N](drawType);}}};function __html_id(identifier){var p5P='Could not find an element with `data-editor-id` or `id` of: ';var e5P="less";var S5P='[data-editor-id="';K6d.m6d();var n5P="strin";var U9N=G6P;U9N+=e5P;var context=document;if(identifier !== U9N){var S9N=G1t;S9N+=o1t;var e9N=T1t;e9N+=r1t;context=$(S5P + identifier + e9N);if(context[S9N] === K4I){var n9N=n5P;n9N+=u4t;context=typeof identifier === n9N?$(__dtjqId(identifier)):$(identifier);}if(context[b1t] === K4I){throw p5P + identifier;}}return context;}function __html_el(identifier,name){var l5P="[data-e";var t5P="ditor-field=\"";var p9N=l5P;p9N+=t5P;var context=__html_id(identifier);return $(p9N + name + N4G,context);}function __html_els(identifier,names){K6d.m6d();var out=$();for(var i=K4I,ien=names[b1t];i < ien;i++){out=out[t0G](__html_el(identifier,names[i]));}return out;}function __html_get(identifier,dataSrc){var J5P='data-editor-value';var d9N=j5Y;d9N+=R9t;d9N+=J2t;var t9N=k6t;t9N+=K6t;t9N+=K6t;t9N+=F6t;var l9N=e8t;l9N+=q9t;l9N+=u4t;l9N+=s4Y;var el=__html_el(identifier,dataSrc);return el[d5P](c5P)[l9N]?el[t9N](J5P):el[d9N]();}function __html_set(identifier,fields,data){var c9N=v6t;c9N+=k6t;c9N+=t9t;c9N+=X9t;$[c9N](fields,function(name,field){var x5P="r-value";var k5P="a-edito";var Y5P="dataSrc";K6d.j6d();var val=field[s7t](data);if(val !== undefined){var el=__html_el(identifier,field[Y5P]());if(el[d5P](c5P)[b1t]){var Y9N=j6G;Y9N+=k5P;Y9N+=x5P;var J9N=I3Y;J9N+=M5P;el[J9N](Y9N,val);}else {var M9N=O1Y;M9N+=J2t;el[x6Y](function(){var Z5P="moveCh";K6d.j6d();var V5P="childNodes";var v5P="irstChi";while(this[V5P][b1t]){var x9N=Z3t;x9N+=v5P;x9N+=w9t;var k9N=T8t;k9N+=Z5P;k9N+=U8t;k9N+=w9t;this[k9N](this[x9N]);}})[M9N](val);}}});}__dataSources[H6Y]={id:function(data){K6d.m6d();var V9N=k2P;V9N+=E6t;V9N+=U8t;var idFn=DataTable[L7t][V9N][p2P](this[c9t][h0G]);return idFn(data);},initField:function(cfg){var D5P='[data-editor-label="';var B9N=J2t;B9N+=Z8t;B9N+=o1t;var D9N=T1t;D9N+=r1t;var Z9N=q9t;Z9N+=k6t;Z9N+=R9t;Z9N+=v6t;var v9N=K6d.g6t;v9N+=k6t;v9N+=K6t;v9N+=k6t;var label=$(D5P + (cfg[v9N] || cfg[Z9N]) + D9N);if(!cfg[S0t] && label[B9N]){var A9N=X9t;A9N+=J4Y;A9N+=J2t;var u9N=J2t;u9N+=k6t;u9N+=e4Y;u9N+=J2t;cfg[u9N]=label[A9N]();}},individual:function(identifier,fieldNames){var i1P="Cannot automatically determine fiel";var f5P="ddB";var R1P="-field";var W1P="data-editor";var y5P="-ed";var h1P="d name from dat";var B5P="deName";var u5P="r-id";var A5P="[data";var X5P="addBac";var a5P="itor-id";var j5P="ndSe";var L1P="a source";var O2N=v6t;O2N+=k6Y;K6d.j6d();O2N+=X9t;var s2N=Z3t;s2N+=U8t;s2N+=I5t;s2N+=T0Y;var y9N=N8t;y9N+=B5P;var attachEl;if(identifier instanceof $ || identifier[y9N]){var h2N=H6t;h2N+=u5P;var i2N=K6d.g6t;i2N+=I3Y;i2N+=k6t;var R2N=A5P;R2N+=y5P;R2N+=a5P;R2N+=r1t;var W2N=k6t;W2N+=j5P;W2N+=J2t;W2N+=Z3t;var X9N=k6t;X9N+=f5P;X9N+=k6t;X9N+=u9Y;var f9N=X5P;f9N+=N5t;var j9N=Z3t;j9N+=q9t;attachEl=identifier;if(!fieldNames){var a9N=W1P;a9N+=R1P;fieldNames=[$(identifier)[U3Y](a9N)];}var back=$[j9N][f9N]?X9N:W2N;identifier=$(identifier)[b4t](R2N)[back]()[i2N](h2N);}if(!identifier){var L2N=p6P;L2N+=n9t;L2N+=J2t;L2N+=Q8t;identifier=L2N;}if(fieldNames && !$[r9Y](fieldNames)){fieldNames=[fieldNames];}if(!fieldNames || fieldNames[b1t] === K4I){var g2N=i1P;g2N+=h1P;g2N+=L1P;throw g2N;}var out=__dataSources[H6Y][P0Y][r4t](this,identifier);var fields=this[c9t][s2N];var forceFields={};$[x6Y](fieldNames,function(i,name){K6d.m6d();forceFields[name]=fields[name];});$[O2N](out,function(id,set){var s1P='cell';var g1P="ttach";var O1P="toArray";var T2N=N6t;T2N+=q0Y;var I2N=k6t;I2N+=g1P;var w2N=K6t;w2N+=n9t;w2N+=E6t;w2N+=v6t;set[w2N]=s1P;set[I2N]=attachEl?$(attachEl):__html_els(identifier,fieldNames)[O1P]();set[T2N]=fields;set[U4G]=forceFields;});return out;},fields:function(identifier){var w1P="sA";var I1P="keyl";var z2N=F6t;z2N+=C6t;z2N+=M2t;var E2N=v6t;E2N+=k6t;K6d.m6d();E2N+=t9t;E2N+=X9t;var C2N=x0t;C2N+=c9t;var r2N=U8t;r2N+=w1P;r2N+=g2P;var out={};var self=__dataSources[H6Y];if($[r2N](identifier)){var K2N=G1t;K2N+=o1t;for(var i=K4I,ien=identifier[K2N];i < ien;i++){var res=self[P0Y][r4t](this,identifier[i]);out[identifier[i]]=res[identifier[i]];}return out;}var data={};var fields=this[c9t][C2N];if(!identifier){var F2N=I1P;F2N+=J9t;F2N+=c9t;identifier=F2N;}$[E2N](fields,function(name,field){var K1P="rc";var r1P="taS";var T1P="lToData";var N2N=w9G;N2N+=T1P;K6d.j6d();var m2N=K6d.g6t;m2N+=k6t;m2N+=r1P;m2N+=K1P;var val=__html_get(identifier,field[m2N]());field[N2N](data,val === J7t?undefined:val);});out[identifier]={idSrc:identifier,data:data,node:document,fields:fields,type:z2N};return out;},create:function(fields,data){K6d.m6d();if(data){var q2N=t9t;q2N+=k6t;q2N+=J2t;q2N+=J2t;var H2N=U8t;H2N+=K6d.g6t;var id=__dataSources[H6Y][H2N][q2N](this,data);try{if(__html_id(id)[b1t]){__html_set(id,fields,data);}}catch(e){;}}},edit:function(identifier,fields,data){var C1P='keyless';var G2N=U8t;G2N+=K6d.g6t;var id=__dataSources[H6Y][G2N][r4t](this,data) || C1P;__html_set(id,fields,data);},remove:function(identifier,fields){K6d.m6d();__html_id(identifier)[o9Y]();}};})();Editor[o2N]={"wrapper":P2N,"processing":{"indicator":F1P,"active":c7t},"header":{"wrapper":E1P,"content":Q2N},"body":{"wrapper":b2N,"content":U2N},"footer":{"wrapper":e2N,"content":m1P},"form":{"wrapper":N1P,"content":S2N,"tag":K6d.I6t,"info":z1P,"error":H1P,"buttons":n6P,"button":q1P,"buttonInternal":n2N},"field":{"wrapper":G1P,"typePrefix":o1P,"namePrefix":P1P,"label":Q1P,"input":p2N,"inputControl":l2N,"error":b1P,"msg-label":t2N,"msg-error":d2N,"msg-message":U1P,"msg-info":c2N,"multiValue":J2N,"multiInfo":Y2N,"multiRestore":e1P,"multiNoEdit":k2N,"disabled":X7t,"processing":F1P},"actions":{"create":x2N,"edit":S1P,"remove":n1P},"inline":{"wrapper":p1P,"liner":l1P,"buttons":M2N},"bubble":{"wrapper":V2N,"liner":v2N,"table":Z2N,"close":D2N,"pointer":t1P,"bg":d1P}};(function(){var A1P="_crea";var v1P="ons-edit";var z0P='buttons-create';var u1P="exten";var q0P='preOpen';var f1P="select_single";var B1P="r_";var h0P="editor";var m0P="i18";var a1P="formButtons";var x1P="lectedSingle";var M1P="ons-";var y1P="BUTTONS";var M0P="editSingle";var j1P="editor_edit";var D1P="eToo";var V1P="emove";var c1P="rem";var V0P="removeSingle";var G0P="formMessage";var Z1P="Tab";var v0P='selectedSingle';var k1P="gle";var Y1P="eSin";var p8N=T8t;p8N+=r8t;p8N+=i8t;p8N+=v6t;var n8N=v6t;n8N+=Z0t;n8N+=q9t;n8N+=K6d.g6t;var S8N=c1P;S8N+=J1P;S8N+=Y1P;S8N+=k1P;var e8N=J6t;e8N+=x1P;var U8N=v6t;U8N+=p2t;var O8N=i5t;O8N+=M1P;O8N+=F6t;O8N+=V1P;var R8N=F6t;R8N+=y5Y;R8N+=c9t;var v3N=H7Y;v3N+=Q2G;v3N+=v1P;var b3N=L7t;b3N+=Z8t;b3N+=K6d.g6t;var B2N=Z1P;B2N+=J2t;B2N+=D1P;B2N+=g5P;if(DataTable[B2N]){var T3N=c9t;T3N+=v6t;T3N+=J2t;T3N+=G9G;var I3N=b6G;I3N+=C6t;I3N+=B1P;I3N+=o9Y;var W3N=u1P;W3N+=K6d.g6t;var A2N=K6t;A2N+=v6t;A2N+=F2Y;A2N+=K6t;var u2N=t8t;u2N+=p8G;u2N+=A1P;u2N+=g8t;var ttButtons=DataTable[m0G][y1P];var ttButtonBase={sButtonText:J7t,editor:J7t,formTitle:J7t};ttButtons[u2N]=$[Z7t](n1t,ttButtons[A2N],ttButtonBase,{formButtons:[{label:J7t,fn:function(e){K6d.j6d();this[S9Y]();}}],fnClick:function(button,config){var X2N=q6G;X2N+=w3Y;var a2N=G6t;a2N+=c5t;a2N+=q9t;var y2N=X3t;y2N+=K6t;y2N+=C6t;y2N+=F6t;var editor=config[y2N];var i18nCreate=editor[a2N][C6G];K6d.m6d();var buttons=config[a1P];if(!buttons[K4I][S0t]){var f2N=d0Y;f2N+=D2t;var j2N=l0t;j2N+=H9t;j2N+=v6t;j2N+=J2t;buttons[K4I][j2N]=i18nCreate[f2N];}editor[X2N]({title:i18nCreate[G7t],buttons:buttons});}});ttButtons[j1P]=$[W3N](n1t,ttButtons[f1P],ttButtonBase,{formButtons:[{label:J7t,fn:function(e){this[S9Y]();}}],fnClick:function(button,config){var X1P="itle";var R0P="ctedInd";var L0P="lab";var W0P="fnGetSele";var i0P="exes";var w3N=K6t;w3N+=X1P;var O3N=v6t;O3N+=K6d.g6t;O3N+=U8t;O3N+=K6t;var L3N=v6t;L3N+=K6d.g6t;L3N+=U8t;L3N+=K6t;var h3N=U8t;h3N+=K6d.s6t;h3N+=c5t;h3N+=q9t;var i3N=J2t;i3N+=Z8t;i3N+=o1t;var R3N=W0P;R3N+=R0P;R3N+=i0P;var selected=this[R3N]();if(selected[i3N] !== C4I){return;}var editor=config[h0P];K6d.m6d();var i18nEdit=editor[h3N][L3N];var buttons=config[a1P];if(!buttons[K4I][S0t]){var s3N=d0Y;s3N+=D2t;var g3N=L0P;g3N+=I5t;buttons[K4I][g3N]=i18nEdit[s3N];}editor[O3N](selected[K4I],{title:i18nEdit[w3N],buttons:buttons});}});ttButtons[I3N]=$[Z7t](n1t,ttButtons[T3N],ttButtonBase,{question:J7t,formButtons:[{label:J7t,fn:function(e){var g0P="ubmi";var r3N=c9t;r3N+=g0P;K6d.m6d();r3N+=K6t;var that=this;this[r3N](function(json){var I0P="fnGetInstance";var w0P="taTa";var s0P="fnSelect";var E3N=s0P;E3N+=O0P;E3N+=q9t;E3N+=v6t;var F3N=K7Y;F3N+=e8t;var C3N=K6t;C3N+=t4t;C3N+=v6t;K6d.j6d();var K3N=H5G;K3N+=w0P;K3N+=H9t;K3N+=e8t;var tt=$[r6Y][K3N][m0G][I0P]($(that[c9t][C3N])[w1t]()[F3N]()[i0Y]());tt[E3N]();});}}],fnClick:function(button,config){var T0P="confi";var K0P="fir";var r0P="irm";var F0P="fnGetSelectedIndexes";var Q3N=h8t;Q3N+=v6t;var P3N=F6t;P3N+=r7G;P3N+=f6Y;var o3N=J2t;o3N+=V1t;o3N+=v6t;o3N+=J2t;var G3N=T0P;G3N+=F6t;G3N+=R9t;var q3N=d8Y;q3N+=r0P;var H3N=Y5Y;H3N+=K0P;H3N+=R9t;var z3N=Y5Y;z3N+=Z3t;z3N+=C0P;z3N+=R9t;var N3N=c9t;N3N+=M5P;N3N+=R3Y;N3N+=u4t;var m3N=J2t;m3N+=h4Y;var rows=this[F0P]();if(rows[m3N] === K4I){return;}var editor=config[h0P];var i18nRemove=editor[y0t][o9Y];var buttons=config[a1P];var question=typeof i18nRemove[J8G] === N3N?i18nRemove[z3N]:i18nRemove[H3N][rows[b1t]]?i18nRemove[q3N][rows[b1t]]:i18nRemove[G3N][x2t];if(!buttons[K4I][o3N]){buttons[K4I][S0t]=i18nRemove[S9Y];}editor[o9Y](rows,{message:question[P3N](/%d/g,rows[b1t]),title:i18nRemove[Q3N],buttons:buttons});}});}var _buttons=DataTable[L7t][D7Y];$[b3N](_buttons,{create:{text:function(dt,node,config){var E0P="butto";var N0P="uttons.creat";var l3N=E0P;l3N+=q9t;var p3N=N3P;p3N+=K6t;p3N+=v6t;var n3N=m0P;n3N+=q9t;var S3N=t8t;S3N+=U8t;S3N+=J0G;var e3N=H9t;e3N+=N0P;e3N+=v6t;var U3N=U8t;U3N+=V9Y;return dt[U3N](e3N,config[S3N][n3N][p3N][l3N]);},className:z0P,editor:J7t,formButtons:{text:function(editor){var c3N=d0Y;c3N+=R9t;c3N+=U8t;c3N+=K6t;var d3N=U3t;d3N+=v6t;d3N+=I3Y;d3N+=v6t;var t3N=U8t;t3N+=K6d.s6t;t3N+=c5t;t3N+=q9t;return editor[t3N][d3N][c3N];},action:function(e){this[S9Y]();}},formMessage:J7t,formTitle:J7t,action:function(e,dt,node,config){var H0P="rmTitl";var x3N=K6t;x3N+=e2t;x3N+=J2t;x3N+=v6t;var k3N=x9t;k3N+=H0P;k3N+=v6t;var Y3N=q6G;Y3N+=w3Y;var J3N=C6t;J3N+=q9t;J3N+=v6t;var that=this;var editor=config[h0P];this[c7t](n1t);editor[J3N](q0P,function(){K6d.j6d();that[c7t](U1t);})[C6G]({buttons:config[a1P],message:config[G0P] || editor[y0t][Y3N][l7t],title:config[k3N] || editor[y0t][C6G][x3N]});}},edit:{extend:o0P,text:function(dt,node,config){var P0P="buttons.edi";var V3N=t8t;V3N+=U8t;K6d.j6d();V3N+=R3t;V3N+=F6t;var M3N=P0P;M3N+=K6t;return dt[y0t](M3N,config[V3N][y0t][b6G][U0G]);},className:v3N,editor:J7t,formButtons:{text:function(editor){var Q0P="mi";var D3N=d0Y;D3N+=Q0P;D3N+=K6t;var Z3N=v6t;Z3N+=p2t;return editor[y0t][Z3N][D3N];},action:function(e){var B3N=d0Y;B3N+=R9t;K6d.m6d();B3N+=e2t;this[B3N]();}},formMessage:J7t,formTitle:J7t,action:function(e,dt,node,config){var n0P="umn";var e0P="mTi";var b0P="18";var S0P="formB";var W8N=U8t;W8N+=b0P;W8N+=q9t;var X3N=U0P;X3N+=e0P;X3N+=I9P;X3N+=v6t;var f3N=S0P;f3N+=z9t;f3N+=R3t;f3N+=v9t;var j3N=C6t;j3N+=q9t;j3N+=v6t;var a3N=t9t;a3N+=G0t;a3N+=n0P;a3N+=c9t;var y3N=q5P;y3N+=J9t;var A3N=p8t;A3N+=M2t;A3N+=c9t;var u3N=b6G;u3N+=v3t;var that=this;var editor=config[u3N];var rows=dt[A3N]({selected:n1t})[y3N]();var columns=dt[a3N]({selected:n1t})[e8P]();var cells=dt[M8P]({selected:n1t})[e8P]();var items=columns[b1t] || cells[b1t]?{rows:rows,columns:columns,cells:cells}:rows;this[c7t](n1t);editor[j3N](q0P,function(){K6d.j6d();that[c7t](U1t);})[b6G](items,{buttons:config[f3N],message:config[G0P] || editor[y0t][b6G][l7t],title:config[X3N] || editor[W8N][b6G][G7t]});}},remove:{extend:o0P,limitTo:[R8N],text:function(dt,node,config){var p0P="utton";var t0P="uttons.r";var l0P="emov";var s8N=H9t;s8N+=p0P;var g8N=F6t;K6d.m6d();g8N+=l0P;g8N+=v6t;var L8N=G6t;L8N+=o6t;var h8N=H9t;h8N+=t0P;h8N+=V1P;var i8N=U8t;i8N+=K6d.s6t;i8N+=c5t;i8N+=q9t;return dt[i8N](h8N,config[h0P][L8N][g8N][s8N]);},className:O8N,editor:J7t,formButtons:{text:function(editor){var d0P="ub";var T8N=c9t;T8N+=d0P;T8N+=R9t;T8N+=e2t;var I8N=V8G;I8N+=v6G;var w8N=U8t;w8N+=K6d.s6t;w8N+=c5t;w8N+=q9t;return editor[w8N][I8N][T8N];},action:function(e){var r8N=c9t;r8N+=W2t;r8N+=A3P;r8N+=K6t;this[r8N]();}},formMessage:function(editor,dt){var c0P="nfir";var z8N=G1t;z8N+=o1t;var N8N=T8t;N8N+=R9Y;var m8N=t9t;m8N+=C6t;m8N+=c0P;m8N+=R9t;var E8N=e8t;E8N+=Y6G;E8N+=X9t;var F8N=F6t;F8N+=V1P;var C8N=m0P;C8N+=q9t;var K8N=R3Y;K8N+=c4Y;K6d.j6d();K8N+=v6t;K8N+=c9t;var rows=dt[m9G]({selected:n1t})[K8N]();var i18n=editor[C8N][F8N];var question=typeof i18n[J8G] === i9Y?i18n[J8G]:i18n[J8G][rows[E8N]]?i18n[J8G][rows[b1t]]:i18n[m8N][x2t];return question[N8N](/%d/g,rows[z8N]);},formTitle:J7t,action:function(e,dt,node,config){var x0P="mov";var J0P="ormTit";var k0P="ssage";var Y0P="ormMe";var b8N=U8t;b8N+=K6d.s6t;b8N+=c5t;b8N+=q9t;var Q8N=Z3t;Q8N+=J0P;Q8N+=e8t;var P8N=Z3t;P8N+=Y0P;P8N+=k0P;var o8N=F6t;o8N+=C6t;o8N+=M2t;o8N+=c9t;var G8N=F6t;K6d.j6d();G8N+=v6t;G8N+=x0P;G8N+=v6t;var q8N=y6G;q8N+=B6Y;q8N+=u4t;var H8N=t8t;H8N+=e2t;H8N+=v3t;var that=this;var editor=config[H8N];this[q8N](n1t);editor[l3G](q0P,function(){K6d.m6d();that[c7t](U1t);})[G8N](dt[o8N]({selected:n1t})[e8P](),{buttons:config[a1P],message:config[P8N],title:config[Q8N] || editor[b8N][o9Y][G7t]});}}});_buttons[M0P]=$[Z7t]({},_buttons[U8N]);_buttons[M0P][Z7t]=e8N;_buttons[S8N]=$[n8N]({},_buttons[p8N]);_buttons[V0P][Z7t]=v0P;})();Editor[Z0P]={};Editor[l8N]=function(input,opts){var i7P="-calendar\">";var g7P="-label\"";var r7P="v cl";var F7P="evious";var O7P="ect class=\"";var B0P="tit";var m7P="utto";var B7P=/[YMD]|L(?!T)|l/;var L7P="select ";var V7P='-title';var n7P='-date">';var X0P="-error\"></d";var w7P="-l";var y7P=/[haA]/;var t7P='<button>';var h7P="</div>";var l7P='-iconRight">';var I7P=" class";var f0P="lend";var v7P='-error';var d7P='<span></span>';var x7P='-seconds"></div>';var J7P='-year"></select>';var D0P="endar";var a0P="ateTi";var T7P="button>";var u7P=/[Hhm]|LT|LTS/;var z7P="nLeft\"";var p7P='-title">';var A0P="exO";var K7P="</butto";var u0P="tain";var Z7P='editor-dateime-';var M7P='-date';var Y7P='-time">';var W7P="-m";var H7P="rmat";var y0P="atch";var c7P='-month"></select>';var R7P="inutes\"></di";var k7P='-hours"></div>';var Q7P="Editor datetime: Without momentjs only the format 'YYYY-MM-DD' can be used";var p5N=F5P;p5N+=D0P;var n5N=K6d.g6t;n5N+=C6t;n5N+=R9t;var S5N=k6t;S5N+=Q2Y;S5N+=Z8t;S5N+=K6d.g6t;var e5N=B0P;e5N+=J2t;e5N+=v6t;var U5N=K6d.g6t;U5N+=C6t;U5N+=R9t;var b5N=Z1t;b5N+=R9t;var Q5N=K6d.g6t;Q5N+=C6t;Q5N+=R9t;var P5N=k6t;P5N+=Q2Y;P5N+=B9t;var o5N=L2Y;o5N+=v6t;o5N+=y9t;var G5N=K6d.g6t;G5N+=C6t;G5N+=R9t;var q5N=z8Y;q5N+=k7t;var H5N=Y5Y;H5N+=u0P;H5N+=v6t;H5N+=F6t;var z5N=K6d.g6t;z5N+=C6t;z5N+=R9t;var N5N=R9t;N5N+=k6t;N5N+=K6t;N5N+=I4Y;var m5N=U8t;m5N+=y9t;m5N+=A0P;m5N+=Z3t;var E5N=R9t;E5N+=y0P;var F5N=Z3t;F5N+=C6t;F5N+=n5Y;F5N+=K6t;var C5N=U0P;C5N+=F1Y;var K5N=Z6t;K5N+=a0P;K5N+=o3t;var r5N=j0P;r5N+=K6t;r5N+=U8t;r5N+=o3t;var T5N=j0P;T5N+=l5G;T5N+=f0P;T5N+=G1Y;var I5N=N6t;I5N+=y9t;var w5N=N6t;w5N+=y9t;var O5N=Z3t;O5N+=x1Y;var s5N=X0P;s5N+=O0t;var g5N=w0t;g5N+=V2G;g5N+=K6d.g6t;g5N+=O0t;var L5N=W7P;L5N+=R7P;L5N+=y1t;var h5N=w0t;h5N+=N7Y;h5N+=x3t;h5N+=W0t;var i5N=s0t;i5N+=U8t;i5N+=i8t;i5N+=g0t;var R5N=i7P;R5N+=h7P;var W5N=C7Y;W5N+=F7Y;var X8N=A1t;X8N+=i8t;X8N+=g0t;var f8N=w0t;f8N+=L7P;f8N+=y8t;f8N+=F7Y;var j8N=g7P;j8N+=g0t;var a8N=s7P;a8N+=I5t;a8N+=O7P;var y8N=w7P;y8N+=V4Y;y8N+=J2t;y8N+=e1G;var A8N=o0t;A8N+=I7P;A8N+=B1G;A8N+=T1t;var u8N=w0t;u8N+=V2G;u8N+=T7P;var B8N=V7t;B8N+=F2Y;B8N+=K6t;var D8N=f8Y;D8N+=r7P;D8N+=F7Y;var Z8N=R0t;Z8N+=K6d.g6t;Z8N+=O0t;var v8N=K7P;v8N+=C7P;var V8N=r3t;V8N+=F7P;var M8N=E7P;M8N+=m7P;M8N+=C7P;var x8N=N7P;x8N+=z7P;x8N+=g0t;var c8N=x9t;c8N+=H7P;var d8N=Z6t;d8N+=w3Y;d8N+=q7P;var t8N=v6t;t8N+=z2Y;t8N+=K6d.g6t;this[t9t]=$[t8N](n1t,{},Editor[d8N][a0t],opts);var classPrefix=this[t9t][G7P];var i18n=this[t9t][y0t];if(!window[o7P] && this[t9t][c8N] !== P7P){throw Q7P;}var timeBlock=function(type){var U7P="ock\">";var b7P="timebl";var Y8N=j0P;Y8N+=b7P;Y8N+=U7P;var J8N=h0t;J8N+=y8t;J8N+=k6t;J8N+=d2G;return J8N + classPrefix + Y8N + H7t;};var gap=function(){var S7P="an>:<";var k8N=e7P;k8N+=S7P;k8N+=I0t;return k8N;};var structure=$(l7Y + classPrefix + C7t + l7Y + classPrefix + n7P + l7Y + classPrefix + p7P + l7Y + classPrefix + x8N + M8N + i18n[V8N] + v8N + Z8N + D8N + classPrefix + l7P + t7P + i18n[B8N] + u8N + H7t + A8N + classPrefix + y8N + d7P + a8N + classPrefix + c7P + H7t + l7Y + classPrefix + j8N + d7P + f8N + classPrefix + J7P + X8N + H7t + W5N + classPrefix + R5N + i5N + l7Y + classPrefix + Y7P + l7Y + classPrefix + k7P + h5N + classPrefix + L5N + l7Y + classPrefix + x7P + g5N + l7Y + classPrefix + s5N + H7t);this[D7t]={container:structure,date:structure[O5N](R3G + classPrefix + M7P),title:structure[w5N](R3G + classPrefix + V7P),calendar:structure[I5N](R3G + classPrefix + T5N),time:structure[F9G](R3G + classPrefix + r5N),error:structure[F9G](R3G + classPrefix + v7P),input:$(input)};this[c9t]={d:J7t,display:J7t,minutesRange:J7t,secondsRange:J7t,namespace:Z7P + Editor[K5N][D7P]++,parts:{date:this[t9t][C5N][Z4G](B7P) !== J7t,time:this[t9t][F5N][E5N](u7P) !== J7t,seconds:this[t9t][A7P][m5N](y5t) !== -C4I,hours12:this[t9t][A7P][N5N](y7P) !== J7t}};this[z5N][H5N][q5N](this[G5N][s9P])[o5N](this[D7t][a7P])[P5N](this[Q5N][k4t]);this[b5N][s9P][q6Y](this[U5N][e5N])[S5N](this[n5N][p5N]);this[r1G]();};$[Z7t](Editor[j7P][l5N],{destroy:function(){var R4P='.editor-datetime';var X7P="ntain";var Y5N=C6t;Y5N+=Z3t;Y5N+=Z3t;var J5N=U8t;J5N+=f7P;J5N+=z9t;K6d.m6d();var c5N=M4t;c5N+=X7P;c5N+=v6t;c5N+=F6t;var d5N=K6d.g6t;d5N+=C6t;d5N+=R9t;var t5N=T3Y;t5N+=U8t;t5N+=z8t;this[t5N]();this[d5N][c5N][f7Y]()[W4P]();this[D7t][J5N][Y5N](R4P);},errorMsg:function(msg){K6d.m6d();var k5N=Q4t;k5N+=p8t;k5N+=F6t;var error=this[D7t][k5N];if(msg){error[H6Y](msg);}else {error[W4P]();}},hide:function(){var x5N=T3Y;x5N+=D3P;this[x5N]();},max:function(date){var i4P="etCalander";var h4P="_optionsTi";var V5N=Z2t;V5N+=i4P;var M5N=h4P;M5N+=z6P;this[t9t][L4P]=date;this[M5N]();this[V5N]();},min:function(date){var s4P="minDat";var Z5N=g4P;Z5N+=S6t;Z5N+=e2t;Z5N+=e8t;var v5N=s4P;v5N+=v6t;this[t9t][v5N]=date;this[Z5N]();this[O4P]();},owns:function(node){var w4P="filt";var B5N=w4P;B5N+=Q4t;var D5N=I4P;D5N+=c9t;K6d.m6d();return $(node)[D5N]()[B5N](this[D7t][H4t])[b1t] > K4I;},val:function(set,write){var o4P=/(\d{4})\-(\d{2})\-(\d{2})/;var G4P="toDate";var m4P="ale";var b4P="iteOutput";var E4P="tL";var U4P="oUtc";var r4P="String";var q4P="isValid";var T4P="tTitle";var C4P="mome";var h1N=Z2t;h1N+=v6t;h1N+=T4P;var i1N=x8t;i1N+=R5P;i1N+=n9t;var R1N=K6t;R1N+=C6t;R1N+=r4P;var W1N=d8t;W1N+=j2P;W1N+=C6Y;var A5N=c9t;K6d.m6d();A5N+=K6t;A5N+=i5P;A5N+=u4t;var u5N=j0P;u5N+=j0P;u5N+=q9t;u5N+=y5Y;if(set === undefined){return this[c9t][K6d.g6t];}if(set instanceof Date){this[c9t][K6d.g6t]=this[K4P](set);}else if(set === J7t || set === A5t){this[c9t][K6d.g6t]=J7t;}else if(set === u5N){this[c9t][K6d.g6t]=new Date();}else if(typeof set === A5N){var y5N=C4P;y5N+=e9t;if(window[y5N]){var j5N=F4P;j5N+=E4P;j5N+=w8G;j5N+=m4P;var a5N=N4P;a5N+=Z8t;a5N+=K6t;var m=window[a5N][z4P](set,this[t9t][A7P],this[t9t][j5N],this[t9t][H4P]);this[c9t][K6d.g6t]=m[q4P]()?m[G4P]():J7t;}else {var match=set[Z4G](o4P);this[c9t][K6d.g6t]=match?new Date(Date[P4P](match[C4I],match[F4I] - C4I,match[E4I])):J7t;}}if(write || write === undefined){if(this[c9t][K6d.g6t]){var f5N=Q4P;f5N+=b4P;this[f5N]();}else {this[D7t][a4t][i4t](set);}}if(!this[c9t][K6d.g6t]){var X5N=e2Y;X5N+=w3Y;X5N+=S6t;X5N+=U4P;this[c9t][K6d.g6t]=this[X5N](new Date());}this[c9t][W1N]=new Date(this[c9t][K6d.g6t][R1N]());this[c9t][i1N][e4P](C4I);this[h1N]();this[O4P]();this[S4P]();},_constructor:function(){var c4P="plete";var t4P=".editor-datetime click.editor-date";var v4P="dr";var J4P="rt";var r61="setUTCFullYear";var l4P="ditor-datet";var d4P="autocom";var u4P='off';var V4P="hil";var p4P="keyup.e";var M4P="seconds";var n4P="elect";var w61="_correctMonth";var Z4P='-seconds';var x4P="parts";var B4P="_optionsTitle";var C0N=C6t;C0N+=q9t;var x1N=c9t;x1N+=n4P;var J1N=p4P;J1N+=l4P;J1N+=U8t;J1N+=o3t;var c1N=C6t;c1N+=q9t;var e1N=L6Y;e1N+=t4P;e1N+=a7P;var U1N=C6t;U1N+=q9t;var b1N=d4P;b1N+=c4P;var Q1N=k6t;Q1N+=K6t;Q1N+=K6t;Q1N+=F6t;var P1N=K6d.g6t;P1N+=J4t;var K1N=K6t;K1N+=U8t;K1N+=o3t;var r1N=k2Y;r1N+=J4P;r1N+=c9t;var that=this;var classPrefix=this[t9t][G7P];var onChange=function(){var k4P="onCha";var O1N=K6d.g6t;O1N+=C6t;O1N+=R9t;var s1N=i8t;s1N+=k6t;K6d.j6d();s1N+=J2t;var g1N=R3Y;g1N+=Y4P;var L1N=k4P;L1N+=D6G;that[t9t][L1N][r4t](that,that[D7t][g1N][s1N](),that[c9t][K6d.g6t],that[O1N][a4t]);};if(!this[c9t][x4P][s9P]){var T1N=t9t;T1N+=c9t;T1N+=c9t;var I1N=K6d.g6t;I1N+=w3Y;var w1N=Z1t;w1N+=R9t;this[w1N][I1N][T1N](u6Y,E6Y);}if(!this[c9t][r1N][K1N]){var E1N=d8t;E1N+=j2P;E1N+=k6t;E1N+=n9t;var F1N=K6t;F1N+=U8t;F1N+=R9t;F1N+=v6t;var C1N=K6d.g6t;C1N+=J4t;this[C1N][F1N][F6Y](E1N,E6Y);}if(!this[c9t][x4P][M4P]){var o1N=T8t;o1N+=B1Y;var G1N=v6t;G1N+=m1G;var q1N=t9t;q1N+=V4P;q1N+=v4P;q1N+=Z8t;var H1N=F6t;H1N+=N0G;H1N+=z0G;var z1N=K6d.g6t;z1N+=g7Y;z1N+=M6G;var N1N=K6t;N1N+=U8t;N1N+=R9t;N1N+=v6t;var m1N=K6d.g6t;m1N+=C6t;m1N+=R9t;this[m1N][N1N][a3Y](z1N + classPrefix + Z4P)[H1N]();this[D7t][a7P][q1N](D4P)[G1N](C4I)[o1N]();}this[B4P]();this[P1N][a4t][Q1N](b1N,u4P)[U1N](e1N,function(){var y4P="tainer";var A4P=":visi";var a4P=':disabled';var d1N=i8t;d1N+=k6t;d1N+=J2t;var t1N=U8t;t1N+=c9t;var l1N=K6d.g6t;l1N+=J4t;var p1N=A4P;p1N+=H9t;p1N+=e8t;var n1N=U8t;n1N+=c9t;var S1N=t9t;K6d.j6d();S1N+=k9t;S1N+=y4P;if(that[D7t][S1N][n1N](p1N) || that[l1N][a4t][t1N](a4P)){return;}that[d1N](that[D7t][a4t][i4t](),U1t);that[l2Y]();})[c1N](J1N,function(){var j4P=":visib";var Y1N=j4P;Y1N+=J2t;Y1N+=v6t;if(that[D7t][H4t][d9Y](Y1N)){var k1N=i8t;k1N+=k6t;k1N+=J2t;that[i4t](that[D7t][a4t][k1N](),U1t);}});this[D7t][H4t][k9t](f4P,x1N,function(){var l61="conds";var I61='-year';var T61="_setTi";var F61="write";var S61="_writeOutpu";var o61="_w";var E61="Outp";var n61="setT";var i61="-mi";var C61='-ampm';var H61="Hours";var L61="asC";var P61="riteOut";var q61="fin";var X4P="ositi";var e61="nutes";var O61="Title";var W61="-sec";var K61='-hours';var U61="Mi";var s61='-month';var p61="etSe";var Q61="_setT";var R61="onds";var h61="tes";var K0N=x2t;K0N+=E6t;K0N+=X4P;K0N+=k9t;var r0N=x9t;r0N+=t9t;r0N+=W2t;r0N+=c9t;var T0N=U8t;T0N+=q9t;T0N+=E6t;T0N+=z9t;var I0N=Z1t;I0N+=R9t;var g0N=W61;g0N+=R61;var R0N=i61;R0N+=o6G;R0N+=h61;var W0N=X9t;W0N+=L61;W0N+=x3t;var B1N=Z6G;B1N+=c9t;B1N+=l2t;B1N+=g61;var M1N=w9G;M1N+=J2t;var select=$(this);var val=select[M1N]();if(select[f7t](classPrefix + s61)){var v1N=Z2t;v1N+=a9Y;v1N+=O61;var V1N=d8t;V1N+=c9t;V1N+=R5P;V1N+=n9t;that[w61](that[c9t][V1N],val);that[v1N]();that[O4P]();}else if(select[f7t](classPrefix + I61)){var D1N=T61;D1N+=K6t;D1N+=e8t;var Z1N=d8t;Z1N+=j2P;Z1N+=C6Y;that[c9t][Z1N][r61](val);that[D1N]();that[O4P]();}else if(select[f7t](classPrefix + K61) || select[B1N](classPrefix + C61)){var X1N=x2t;X1N+=F61;X1N+=E61;X1N+=z9t;var f1N=x2t;f1N+=c9t;f1N+=a9Y;f1N+=q7P;var u1N=X9t;u1N+=j9t;u1N+=m61;u1N+=N61;if(that[c9t][x4P][u1N]){var j1N=z61;j1N+=H61;var a1N=i8t;a1N+=Z1Y;var y1N=q61;y1N+=K6d.g6t;var A1N=Z1t;A1N+=R9t;var hours=$(that[D7t][H4t])[F9G](R3G + classPrefix + K61)[i4t]() * C4I;var pm=$(that[A1N][H4t])[y1N](R3G + classPrefix + C61)[a1N]() === C8P;that[c9t][K6d.g6t][j1N](hours === P4I && !pm?K4I:pm && hours !== P4I?hours + P4I:hours);}else {that[c9t][K6d.g6t][G61](val);}that[f1N]();that[X1N](n1t);onChange();}else if(select[W0N](classPrefix + R0N)){var L0N=o61;L0N+=P61;L0N+=E6t;L0N+=z9t;var h0N=Q61;h0N+=b61;h0N+=v6t;var i0N=z61;i0N+=U61;i0N+=e61;that[c9t][K6d.g6t][i0N](val);that[h0N]();that[L0N](n1t);onChange();}else if(select[f7t](classPrefix + g0N)){var w0N=S61;w0N+=K6t;var O0N=x2t;O0N+=n61;O0N+=U8t;O0N+=o3t;var s0N=c9t;s0N+=p61;s0N+=l61;that[c9t][K6d.g6t][s0N](val);that[O0N]();that[w0N](n1t);onChange();}that[I0N][T0N][r0N]();that[K0N]();})[C0N](w3G,function(e){var Z61='-iconLeft';var D61="_set";var k61="arget";var r91="hasCl";var Q91="UTCD";var L91="iteOut";var d61="toLowerCa";var c61="Name";var q91="Range";var t61="sel";var v61="disab";var A61="TC";var h91='-time';var w91="ni";var b91="tU";var H91="seco";var G91="getUTCHours";var o91='setUTCMinutes';var s91="etUTCHour";var P91="tim";var l91="alander";var R91="_setCaland";var V61="hasCla";var j61="Month";var p91="_setC";var f61="splay";K6d.j6d();var Y61="arentNode";var X61="_setTitle";var i91="TCMonth";var K91="minu";var N91="_setTim";var C91="tesRa";var B61="Calander";var n91="_writeOutput";var y61="Mo";var O91="hour";var e91="setUTCMonth";var J61="rge";var o0N=H9t;o0N+=z9t;o0N+=K6t;o0N+=k9t;var G0N=t61;G0N+=G9G;var q0N=d61;q0N+=c9t;q0N+=v6t;var H0N=i0Y;H0N+=c61;var z0N=A1Y;z0N+=J61;z0N+=K6t;var N0N=E6t;N0N+=Y61;var m0N=K6t;m0N+=k61;var E0N=c9t;E0N+=x61;var F0N=i0Y;F0N+=c61;var d=that[c9t][K6d.g6t];var nodeName=e[E3G][F0N][u4G]();var target=nodeName === E0N?e[m0N][N0N]:e[z0N];nodeName=target[H0N][q0N]();if(nodeName === G0N){return;}e[M61]();if(nodeName === o0N){var k0N=P1t;k0N+=X9t;var Y0N=l9Y;Y0N+=v6t;Y0N+=Q9P;var b0N=j0G;b0N+=q9t;b0N+=u4t;b0N+=v6t;var Q0N=V61;Q0N+=c9t;Q0N+=c9t;var P0N=v61;P0N+=e4t;var button=$(target);var parent=button[I4P]();if(parent[f7t](P0N) && !parent[Q0N](b0N)){var U0N=H9t;U0N+=J2t;U0N+=W2t;U0N+=F6t;button[U0N]();return;}if(parent[f7t](classPrefix + Z61)){var t0N=R3Y;t0N+=Y4P;var l0N=K6d.g6t;l0N+=C6t;l0N+=R9t;var p0N=D61;p0N+=B61;var n0N=u61;n0N+=A61;n0N+=y61;n0N+=a61;var S0N=z61;S0N+=j61;var e0N=d8t;e0N+=f61;that[c9t][e0N][S0N](that[c9t][T6Y][n0N]() - C4I);that[X61]();that[p0N]();that[l0N][t0N][L6Y]();}else if(parent[f7t](classPrefix + W91)){var J0N=R91;J0N+=Q4t;var c0N=u61;c0N+=i91;var d0N=Z8Y;d0N+=C6Y;that[w61](that[c9t][T6Y],that[c9t][d0N][c0N]() + C4I);that[X61]();that[J0N]();that[D7t][a4t][L6Y]();}else if(button[Y0N](R3G + classPrefix + h91)[k0N]){var L7N=Q4P;L7N+=L91;L7N+=Y4P;var h7N=c9t;h7N+=g91;var i7N=c9t;i7N+=s91;i7N+=c9t;var R7N=O91;R7N+=c9t;var W7N=E6t;W7N+=R9t;var X0N=k6t;X0N+=R9t;var V0N=W2t;V0N+=w91;V0N+=K6t;var M0N=K6d.g6t;M0N+=I3Y;M0N+=k6t;var x0N=H5G;x0N+=A1Y;var val=button[x0N](I91);var unit=button[M0N](V0N);if(unit === T91){var D0N=j0G;D0N+=q9t;D0N+=b8t;var Z0N=K6d.g6t;Z0N+=U4t;Z0N+=M8t;Z0N+=t8t;var v0N=r91;v0N+=g61;if(parent[v0N](Z0N) && parent[f7t](D0N)){var B0N=K91;B0N+=C91;B0N+=D6G;that[c9t][B0N]=val;that[S4P]();return;}else {that[c9t][F91]=J7t;}}if(unit === E91){var a0N=F6t;a0N+=t3t;a0N+=u4t;a0N+=v6t;var y0N=V61;y0N+=l4t;var A0N=K6d.g6t;A0N+=U4t;A0N+=m91;var u0N=r91;u0N+=g61;if(parent[u0N](A0N) && parent[y0N](a0N)){var j0N=N91;j0N+=v6t;that[c9t][z91]=val;that[j0N]();return;}else {var f0N=H91;f0N+=y9t;f0N+=c9t;f0N+=q91;that[c9t][f0N]=J7t;}}if(val === X0N){if(d[G91]() >= P4I){val=d[G91]() - P4I;}else {return;}}else if(val === W7N){if(d[G91]() < P4I){val=d[G91]() + P4I;}else {return;}}var set=unit === R7N?i7N:unit === T91?o91:h7N;d[set](val);that[S4P]();that[L7N](n1t);onChange();}else {var r7N=P91;r7N+=v6t;var T7N=K6d.g6t;T7N+=k6t;T7N+=n9t;var I7N=K6d.g6t;I7N+=k6t;I7N+=A1Y;var w7N=c9t;w7N+=a9Y;w7N+=Q91;w7N+=w3Y;var O7N=K6d.g6t;O7N+=I3Y;O7N+=k6t;var s7N=n9t;s7N+=v6t;s7N+=k6t;s7N+=F6t;var g7N=c9t;g7N+=v6t;g7N+=b91;g7N+=U91;if(!d){d=that[K4P](new Date());}d[g7N](C4I);d[r61](button[h7t](s7N));d[e91](button[O7N](S91));d[w7N](button[I7N](T7N));that[n91](n1t);if(!that[c9t][x4P][r7N]){setTimeout(function(){var K7N=T3Y;K7N+=m7t;K7N+=v6t;that[K7N]();},G4I);}else {var C7N=p91;C7N+=l91;that[C7N]();}onChange();}}else {var F7N=K6d.g6t;F7N+=J4t;that[F7N][a4t][L6Y]();}});},_compareDates:function(a,b){var d91="eT";var c91="oUtcString";var t91="ToUtcStr";var m7N=e2Y;m7N+=w3Y;m7N+=t91;m7N+=Z5t;var E7N=x2t;E7N+=j6G;E7N+=d91;E7N+=c91;return this[E7N](a) === this[m7N](b);},_correctMonth:function(date,month){var Y91="etUTCFullYear";var M91="setUTCMont";var J91="setUTCMo";var z7N=J91;z7N+=a61;var N7N=u4t;N7N+=Y91;var days=this[k91](date[N7N](),month);var correctDays=date[x91]() > days;date[z7N](month);if(correctDays){var H7N=M91;H7N+=X9t;date[e4P](days);date[H7N](month);}},_daysInMonth:function(year,month){var c4I=30;var J4I=31;var d4I=29;var t4I=28;var isLeap=year % m4I === K4I && (year % Z4I !== K4I || year % B4I === K4I);var months=[J4I,isLeap?d4I:t4I,J4I,c4I,J4I,c4I,J4I,J4I,c4I,J4I,c4I,J4I];return months[month];},_dateToUtc:function(s){var u91="getMinutes";var Z91="tMont";var v91="getDat";var V91="getHour";var P7N=V91;P7N+=c9t;var o7N=v91;o7N+=v6t;var G7N=u4t;G7N+=v6t;G7N+=Z91;G7N+=X9t;K6d.j6d();var q7N=D91;q7N+=k3t;return new Date(Date[q7N](s[B91](),s[G7N](),s[o7N](),s[P7N](),s[u91](),s[A91]()));},_dateToUtcString:function(d){var j91="_pad";K6d.j6d();var b7N=u61;b7N+=U91;var Q7N=x2t;Q7N+=E6t;Q7N+=k6t;Q7N+=K6d.g6t;return d[y91]() + j3G + this[Q7N](d[a91]() + C4I) + j3G + this[j91](d[b7N]());},_hide:function(){var h21="eyd";K6d.m6d();var L21="n.";var f91="div.DTE";var X91="_Body_Content";var i21="scrollBod";var W21="oll.";var R21="dataTables_";var s21='click.';var c7N=C6t;c7N+=Z3t;c7N+=Z3t;var d7N=P8Y;d7N+=G0t;d7N+=J2t;d7N+=M6G;var t7N=C6t;t7N+=Z3t;t7N+=Z3t;var l7N=f91;l7N+=X91;var p7N=P8Y;p7N+=W21;var n7N=C6t;n7N+=Z5Y;var S7N=f3Y;S7N+=R21;S7N+=i21;S7N+=n9t;var e7N=N5t;e7N+=h21;e7N+=y5Y;e7N+=L21;var U7N=C6t;U7N+=Z3t;U7N+=Z3t;var namespace=this[c9t][g21];this[D7t][H4t][z6Y]();$(window)[U7N](R3G + namespace);$(document)[f7Y](e7N + namespace);$(S7N)[n7N](p7N + namespace);$(l7N)[t7N](d7N + namespace);$(G3Y)[c7N](s21 + namespace);},_hours24To12:function(val){K6d.m6d();return val === K4I?P4I:val > P4I?val - P4I:val;},_htmlDay:function(day){var l21='" class="';var C21="ar=\"";var Q21="td class=\"empty\"></t";var P21="isabled";var H21="tton cla";var U21='selectable';var E21="ay\"";var N21="button\" ";var I21="a-mo";var d21="month";var m21=" type=\"";var r21="yea";var e21="isabl";var b21="d>";var O21="/s";var p21="day";var w21="\" dat";var F21="-d";var n21='<td data-day="';var K21="data-ye";var o21="tod";var c21='" data-day="';var G21="cted";var T21="nth=\"";var R4N=R0t;R4N+=R7Y;R4N+=x4Y;R4N+=g0t;var W4N=w0t;W4N+=O21;W4N+=x61;W4N+=g0t;var X7N=K6d.g6t;X7N+=k6t;X7N+=n9t;var f7N=e7P;f7N+=k6t;f7N+=q9t;f7N+=g0t;var j7N=T1t;j7N+=g0t;var a7N=w21;a7N+=I21;a7N+=T21;var y7N=r21;y7N+=F6t;var A7N=K21;A7N+=C21;K6d.j6d();var u7N=F21;u7N+=E21;u7N+=m21;u7N+=N21;var B7N=z21;B7N+=H21;B7N+=d2G;var D7N=q21;D7N+=R3Y;var V7N=c9t;V7N+=I5t;V7N+=v6t;V7N+=G21;var x7N=o21;x7N+=C6Y;var Y7N=K6d.g6t;Y7N+=P21;if(day[W4P]){var J7N=w0t;J7N+=Q21;J7N+=b21;return J7N;}var classes=[U21];var classPrefix=this[t9t][G7P];if(day[Y7N]){var k7N=K6d.g6t;k7N+=e21;k7N+=t8t;classes[Q0Y](k7N);}if(day[x7N]){var M7N=q9t;M7N+=C6t;M7N+=M2t;classes[Q0Y](M7N);}if(day[V7N]){var Z7N=S21;Z7N+=t8t;var v7N=E6t;v7N+=W2t;v7N+=R2Y;classes[v7N](Z7N);}return n21 + day[p21] + l21 + classes[D7N](T7t) + C7t + B7N + classPrefix + t21 + classPrefix + u7N + A7N + day[y7N] + a7N + day[d21] + c21 + day[p21] + j7N + f7N + day[X7N] + W4N + R4N + J21;},_htmlMonth:function(year,month){var w31="showWeekNumber";var a21="firstDay";var x21="_htmlMonthHe";var S4I=23;var u21="xDate";var R31="setUTCMinutes";var v21="Nu";var V21="eek";var D21="classP";var B21="refix";var W31="Second";var m31='<thead>';var g31="_compareDates";var i31="_htmlD";var y21="TCDay";var h31="CDay";var M21="showW";var L31="ompareDates";var C31=' weekNumber';var s31="disableDays";var I31="htmlWeek";var Z21="mber";var A21="etU";var N31='<tbody>';var k21="thead>";var z31='</table>';var j21="minDate";var r31="hif";var F31="nL";var T31="fYear";var X21="tUTCHour";var f21="Minutes";var d4N=R0t;d4N+=K6t;d4N+=Y21;var t4N=q21;t4N+=R3Y;var l4N=w0t;l4N+=V2G;l4N+=k21;var p4N=x21;p4N+=N3Y;var q4N=M21;q4N+=V21;q4N+=v21;q4N+=Z21;var H4N=D21;H4N+=B21;var h4N=L2G;h4N+=u21;var i4N=u4t;i4N+=A21;i4N+=y21;var now=this[K4P](new Date()),days=this[k91](year,month),before=new Date(Date[P4P](year,month,C4I))[i4N](),data=[],row=[];if(this[t9t][a21] > K4I){before-=this[t9t][a21];if(before < K4I){before+=z4I;}}var cells=days + before,after=cells;while(after > z4I){after-=z4I;}cells+=z4I - after;var minDate=this[t9t][j21];var maxDate=this[t9t][h4N];if(minDate){var s4N=c9t;s4N+=g91;var g4N=z61;g4N+=f21;var L4N=J6t;L4N+=X21;L4N+=c9t;minDate[L4N](K4I);minDate[g4N](K4I);minDate[s4N](K4I);}if(maxDate){var O4N=z9Y;O4N+=W31;O4N+=c9t;maxDate[G61](S4I);maxDate[R31](M4I);maxDate[O4N](M4I);}for(var i=K4I,r=K4I;i < cells;i++){var K4N=i31;K4N+=C6Y;var r4N=E6t;r4N+=W2t;r4N+=c9t;r4N+=X9t;var T4N=C9G;T4N+=D91;T4N+=h31;var I4N=R6G;I4N+=F6t;I4N+=j0G;I4N+=n9t;var w4N=i1t;w4N+=L31;var day=new Date(Date[P4P](year,month,C4I + (i - before))),selected=this[c9t][K6d.g6t]?this[g31](day,this[c9t][K6d.g6t]):U1t,today=this[w4N](day,now),empty=i < before || i >= days + before,disabled=minDate && day < minDate || maxDate && day > maxDate;var disableDays=this[t9t][s31];if($[r9Y](disableDays) && $[I4N](day[T4N](),disableDays) !== -C4I){disabled=n1t;}else if(typeof disableDays === K6d.w6t && disableDays(day) === n1t){disabled=n1t;}var dayConfig={day:C4I + (i - before),month:month,year:year,selected:selected,today:today,disabled:disabled,empty:empty};row[r4N](this[K4N](dayConfig));if(++r === z4I){var z4N=R0t;z4N+=O31;var N4N=q21;N4N+=R3Y;var m4N=w0t;m4N+=O31;var E4N=q1t;E4N+=c9t;E4N+=X9t;if(this[t9t][w31]){var F4N=x2t;F4N+=I31;F4N+=w5P;F4N+=T31;var C4N=W2t;C4N+=v9t;C4N+=r31;C4N+=K6t;row[C4N](this[F4N](i - before,month,year));}data[E4N](m4N + row[N4N](A5t) + z4N);row=[];r=K4I;}}var classPrefix=this[t9t][H4N];var className=classPrefix + K31;if(this[t9t][q4N]){className+=C31;}if(minDate){var b4N=K6d.g6t;b4N+=d9Y;b4N+=R5P;b4N+=n9t;var Q4N=t9t;Q4N+=c9t;Q4N+=c9t;var P4N=N7P;P4N+=F31;P4N+=I5G;var o4N=K6d.g6t;o4N+=C6t;o4N+=R9t;var G4N=D91;G4N+=k3t;var underMin=minDate >= new Date(Date[G4N](year,month,C4I,K4I,K4I,K4I));this[o4N][G7t][F9G](W3G + classPrefix + P4N)[Q4N](b4N,underMin?E6Y:A6Y);}if(maxDate){var n4N=t9t;n4N+=c9t;n4N+=c9t;var S4N=Z3t;S4N+=U8t;S4N+=y9t;var e4N=v2t;e4N+=z6P;var U4N=D91;U4N+=k3t;var overMax=maxDate < new Date(Date[U4N](year,month + C4I,C4I,K4I,K4I,K4I));this[D7t][e4N][S4N](W3G + classPrefix + W91)[n4N](u6Y,overMax?E6Y:A6Y);}return E31 + className + C7t + m31 + this[p4N]() + l4N + N31 + data[t4N](A5t) + d4N + z31;},_htmlMonthHead:function(){var Q31='<th>';var q31="stDay";var P31='<th></th>';var H31="howWeekNumber";var Y4N=c9t;Y4N+=H31;var c4N=Z3t;c4N+=C0P;c4N+=q31;var a=[];var firstDay=this[t9t][c4N];var i18n=this[t9t][y0t];var dayName=function(day){var G31="weekda";var o31="ys";var J4N=G31;J4N+=o31;day+=firstDay;while(day >= z4I){day-=z4I;}return i18n[J4N][day];};if(this[t9t][Y4N]){var k4N=E6t;k4N+=W2t;k4N+=c9t;k4N+=X9t;a[k4N](P31);}for(var i=K4I;i < z4I;i++){var M4N=w0t;M4N+=V2G;M4N+=s4Y;M4N+=g0t;var x4N=q1t;x4N+=c9t;x4N+=X9t;a[x4N](Q31 + dayName(i) + M4N);}return a[a3G](A5t);},_htmlWeekOfYear:function(d,m,y){var n31='-week">';var e31="getDay";var U31="ix";var f4I=86400000;var b31="classPref";var S31='<td class="';var D4N=R0t;D4N+=K6t;D4N+=K6d.g6t;D4N+=g0t;var Z4N=b31;Z4N+=U31;var v4N=b8t;v4N+=K6t;v4N+=b6t;v4N+=g8t;K6d.j6d();var V4N=z9Y;V4N+=t6t;V4N+=v6t;var date=new Date(y,m,d,K4I,K4I,K4I,K4I);date[V4N](date[v4N]() + m4I - (date[e31]() || z4I));var oneJan=new Date(y,K4I,C4I);var weekNum=Math[U5t](((date - oneJan) / f4I + C4I) / z4I);return S31 + this[t9t][Z4N] + n31 + weekNum + D4N;},_options:function(selector,values,labels){var J31="lue=\"";var c31=" va";var d31="<opt";var p31="mpty";var A4N=v6t;A4N+=p31;K6d.j6d();var u4N=c9t;u4N+=v6t;u4N+=l31;u4N+=M6G;var B4N=Z1t;B4N+=R9t;if(!labels){labels=values;}var select=this[B4N][H4t][F9G](u4N + this[t9t][G7P] + j3G + selector);select[A4N]();for(var i=K4I,ien=values[b1t];i < ien;i++){var a4N=R0t;a4N+=t31;a4N+=C7P;var y4N=d31;y4N+=x3Y;y4N+=c31;y4N+=J31;select[q6Y](y4N + values[i] + C7t + labels[i] + a4N);}},_optionSet:function(selector,val){var v31='option:selected';var Y31="unkno";var x31="ren";var k31="hild";var V31="ec";var h6I=Y31;h6I+=n2Y;var i6I=G6t;i6I+=c5t;i6I+=q9t;var R6I=e8t;R6I+=q9t;R6I+=O4Y;R6I+=X9t;var W6I=t9t;W6I+=k31;W6I+=x31;var X4N=z4t;X4N+=M31;var f4N=c9t;f4N+=I5t;f4N+=V31;f4N+=z1G;var j4N=K6d.g6t;j4N+=C6t;j4N+=R9t;var select=this[j4N][H4t][F9G](f4N + this[t9t][X4N] + j3G + selector);var span=select[I4P]()[W6I](D4P);select[i4t](val);var selected=select[F9G](v31);span[H6Y](selected[R6I] !== K4I?selected[s2Y]():this[t9t][i6I][h6I]);},_optionsTime:function(unit,count,val,allowed,range){var F81="amPm";var r81="Pm";K6d.j6d();var H81="\"><tbod";var q81='range';var G81='</tbody></thead><table class="';var K81="r>";var u31="<tbod";var f31="ontaine";var T81="/t";var z81="-nospace";var o81='</th></tr></thead>';var C81='am';var D31="le>";var y31="<thead><tr><th c";var N4I=6;var N81="floo";var m81='</tr>';var X31="assPrefix";var A31="y>";var Z31="/tab";var a31="olspan=\"";var B31="</t";var E81='<tr>';var j31="v.";var c6I=w0t;c6I+=Z31;c6I+=D31;var d6I=B31;d6I+=Y21;var t6I=u31;t6I+=A31;var l6I=T1t;l6I+=g0t;var p6I=y31;p6I+=a31;var n6I=T1t;n6I+=g0t;var T6I=z4t;T6I+=M31;var I6I=x2t;I6I+=k2Y;I6I+=K6d.g6t;var w6I=K6d.g6t;w6I+=U8t;w6I+=j31;var O6I=N6t;O6I+=q9t;O6I+=K6d.g6t;var s6I=t9t;s6I+=f31;s6I+=F6t;var g6I=K6d.g6t;g6I+=C6t;g6I+=R9t;var L6I=y8t;L6I+=X31;var classPrefix=this[t9t][L6I];var container=this[g6I][s6I][O6I](w6I + classPrefix + j3G + unit);var i,j;var render=count === P4I?function(i){K6d.m6d();return i;}:this[I6I];var classPrefix=this[t9t][T6I];var className=classPrefix + K31;var i18n=this[t9t][y0t];if(!container[b1t]){return;}var a=A5t;var span=G4I;var button=function(value,label,className){var O81='<button class="';var R81="an>";var L81="<td class=\"se";var w81='" data-value="';var I81='</button>';var i81="-day\" type=\"button\" ";var h81="-unit=\"";var g81=" dis";var N6I=R0t;N6I+=W81;var m6I=s7P;m6I+=E6t;m6I+=R81;var E6I=i81;E6I+=h7t;E6I+=h81;var F6I=L81;F6I+=l31;F6I+=o0G;F6I+=l1G;var K6I=R6G;K6I+=F6t;K6I+=F6t;K6I+=C6Y;var r6I=k6t;r6I+=R9t;if(count === P4I && val >= P4I && typeof value === a4G){value+=P4I;}var selected=val === value || value === r6I && val < P4I || value === C8P && val >= P4I?o0P:A5t;if(allowed && $[K6I](value,allowed) === -C4I){var C6I=g81;C6I+=s81;selected+=C6I;}if(className){selected+=T7t + className;}return F6I + selected + C7t + O81 + classPrefix + t21 + classPrefix + E6I + unit + w81 + value + C7t + m6I + label + N6I + I81 + J21;};if(count === P4I){var o6I=w0t;o6I+=T81;o6I+=F6t;o6I+=g0t;var G6I=k6t;G6I+=R9t;G6I+=r81;var q6I=E6t;q6I+=R9t;var H6I=B31;H6I+=K81;var z6I=w0t;z6I+=M5P;z6I+=g0t;a+=z6I;for(i=C4I;i <= N4I;i++){a+=button(i,render(i));}a+=button(C81,i18n[F81][K4I]);a+=H6I;a+=E81;for(i=z4I;i <= P4I;i++){a+=button(i,render(i));}a+=button(q6I,i18n[G6I][C4I]);a+=o6I;span=z4I;}else if(count === n4I){var c=K4I;for(j=K4I;j < m4I;j++){var P6I=w0t;P6I+=K6t;P6I+=F6t;P6I+=g0t;a+=P6I;for(i=K4I;i < N4I;i++){a+=button(c,render(c));c++;}a+=m81;}span=N4I;}else {var S6I=w0t;S6I+=K6t;S6I+=F6t;S6I+=g0t;var e6I=N81;e6I+=F6t;var U6I=z81;U6I+=H81;U6I+=A31;var b6I=R0t;b6I+=M5P;b6I+=g0t;var Q6I=w0t;Q6I+=O31;a+=Q6I;for(j=K4I;j < V4I;j+=G4I){a+=button(j,render(j),q81);}a+=b6I;a+=G81 + className + T7t + className + U6I;var start=range !== J7t?range:Math[e6I](val / G4I) * G4I;a+=S6I;for(j=start + C4I;j < start + G4I;j++){a+=button(j,render(j));}a+=m81;span=N4I;}container[W4P]()[q6Y](E31 + className + n6I + p6I + span + l6I + i18n[unit] + o81 + t6I + a + d6I + c6I);},_optionsTitle:function(){var J81="inDat";var p81="llYe";var n81="getF";var t81="FullYear";var P81="_ran";var Q81="onths";var l81="earRange";var d81="getFull";var e81="_op";var Y81='year';var S81="yearRa";var U81="ang";var B6I=P81;B6I+=b8t;var D6I=R9t;D6I+=Q81;var Z6I=b81;Z6I+=U81;Z6I+=v6t;var v6I=e81;v6I+=K6t;v6I+=x3Y;v6I+=c9t;var V6I=S81;V6I+=q9t;V6I+=b8t;var M6I=n81;M6I+=W2t;M6I+=p81;M6I+=G1Y;var x6I=n9t;x6I+=l81;var k6I=C9G;k6I+=t81;var Y6I=d81;Y6I+=c81;var J6I=R9t;J6I+=J81;J6I+=v6t;K6d.m6d();var i18n=this[t9t][y0t];var min=this[t9t][J6I];var max=this[t9t][L4P];var minYear=min?min[Y6I]():J7t;var maxYear=max?max[k6I]():J7t;var i=minYear !== J7t?minYear:new Date()[B91]() - this[t9t][x6I];var j=maxYear !== J7t?maxYear:new Date()[M6I]() + this[t9t][V6I];this[v6I](S91,this[Z6I](K4I,o4I),i18n[D6I]);this[g4P](Y81,this[B6I](i,j));},_pad:function(i){var k81='0';return i < G4I?k81 + i:i;},_position:function(){var B81="hori";var V81="uterHeig";var u81="zontal";var M81="wi";var y81="scrollTop";var x81="hei";var A81='horizontal';var Z81="taine";var D81="ffs";var w9I=M2t;w9I+=U8t;w9I+=E4Y;var g9I=x81;g9I+=g8Y;g9I+=K6t;var L9I=R3t;L9I+=E6t;var h9I=J2t;h9I+=v6t;h9I+=Z3t;h9I+=K6t;var i9I=K6t;i9I+=C6t;i9I+=E6t;var W9I=M81;W9I+=E4Y;var X6I=k2Y;X6I+=F6t;X6I+=K6t;X6I+=c9t;var f6I=H5G;f6I+=K6t;f6I+=v6t;var j6I=E6t;j6I+=G1Y;j6I+=V9G;var a6I=C6t;a6I+=V81;a6I+=j5Y;var y6I=v81;y6I+=K6t;var A6I=M4t;A6I+=q9t;A6I+=Z81;A6I+=F6t;var u6I=C6t;u6I+=D81;u6I+=a9Y;var offset=this[D7t][a4t][u6I]();var container=this[D7t][A6I];var inputHeight=this[D7t][y6I][a6I]();if(this[c9t][j6I][f6I] && this[c9t][X6I][a7P] && $(window)[W9I]() > A4I){var R9I=B81;R9I+=u81;container[q4t](R9I);}else {container[t8Y](A81);}container[F6Y]({top:offset[i9I] + inputHeight,left:offset[h9I]})[k7Y](G3Y);var calHeight=container[T8Y]();var calWidth=container[o4Y]();var scrollTop=$(window)[y81]();if(offset[L9I] + inputHeight + calHeight - scrollTop > $(window)[g9I]()){var O9I=K6t;O9I+=C6t;O9I+=E6t;var s9I=t9t;s9I+=c9t;s9I+=c9t;var newTop=offset[h1Y] - calHeight;container[s9I](O9I,newTop < K4I?K4I:newTop);}if(calWidth + offset[H4Y] > $(window)[w9I]()){var I9I=J2t;I9I+=G0Y;I9I+=K6t;var newLeft=$(window)[i1Y]() - calWidth;container[F6Y](I9I,newLeft < K4I?K4I:newLeft);}},_range:function(start,end,inc){var a=[];if(!inc){inc=C4I;}K6d.m6d();for(var i=start;i <= end;i+=inc){var T9I=q1t;T9I+=c9t;T9I+=X9t;a[T9I](i);}return a;},_setCalander:function(){var W51="calendar";var R51="_htmlMonth";var f81="getUTCFullY";var j81="CMo";if(this[c9t][T6Y]){var E9I=a81;E9I+=j81;E9I+=a61;var F9I=K6d.g6t;F9I+=e4G;F9I+=l0t;F9I+=n9t;var C9I=f81;C9I+=X81;var K9I=k6t;K9I+=E6t;K9I+=L5Y;K9I+=K6d.g6t;var r9I=K6d.g6t;r9I+=C6t;r9I+=R9t;this[r9I][W51][W4P]()[K9I](this[R51](this[c9t][T6Y][C9I](),this[c9t][F9I][E9I]()));}},_setTitle:function(){var h51="CMon";var L51="_optionSet";var i51="getUTCF";var G9I=i51;G9I+=U9Y;G9I+=J2t;G9I+=c81;var q9I=v7t;q9I+=n9t;var H9I=n9t;H9I+=X81;var z9I=a81;z9I+=h51;z9I+=s4Y;var N9I=x8t;N9I+=z6G;var m9I=R9t;m9I+=C6t;K6d.j6d();m9I+=e9t;m9I+=X9t;this[L51](m9I,this[c9t][N9I][z9I]());this[L51](H9I,this[c9t][q9I][G9I]());},_setTime:function(){var r51="arts";var O51="CMinutes";var T51="ilable";var K51="Tim";var m51='hours';var I51="Ava";var s51="etUT";var w51="urs";var N51="_optionsTime";var C51="getUTCHour";var g51="second";var l9I=g51;l9I+=c9t;var p9I=g4P;p9I+=q7P;var n9I=u4t;n9I+=s51;n9I+=O51;var S9I=r8G;S9I+=w51;S9I+=I51;S9I+=T51;var e9I=X9t;e9I+=j9t;e9I+=m61;e9I+=N61;var U9I=E6t;U9I+=r51;var b9I=g4P;b9I+=K51;b9I+=v6t;var o9I=C51;o9I+=c9t;var that=this;var d=this[c9t][K6d.g6t];var hours=d?d[o9I]():K4I;var allowed=function(prop){var E51='Available';var F51="rement";var Q9I=n0t;Q9I+=I4G;Q9I+=F51;var P9I=b81;P9I+=k6t;P9I+=A2t;P9I+=v6t;K6d.m6d();return that[t9t][prop + E51]?that[t9t][prop + E51]:that[P9I](K4I,M4I,that[t9t][prop + Q9I]);};this[b9I](m51,this[c9t][U9I][e9I]?P4I:n4I,hours,this[t9t][S9I]);this[N51](T91,V4I,d?d[n9I]():K4I,allowed(T91),this[c9t][F91]);this[p9I](l9I,V4I,d?d[A91]():K4I,allowed(E91),this[c9t][z91]);},_show:function(){var P51="scrol";var o51="_scrollBody";var q51="l.";var G51="ables";var U51=' resize.';var b51="_position";var z51="ydown.";var H51="rol";var Q51="y_";var v9I=p6P;v9I+=z51;var V9I=a6P;V9I+=H51;V9I+=q51;var M9I=C6t;M9I+=q9t;var x9I=f3Y;x9I+=b5P;x9I+=G51;x9I+=o51;var Y9I=P51;Y9I+=q51;var J9I=C6t;J9I+=q9t;var c9I=e1Y;c9I+=Q51;c9I+=L3P;c9I+=g3P;var d9I=P8Y;d9I+=G0t;d9I+=q51;var t9I=C6t;t9I+=q9t;var that=this;var namespace=this[c9t][g21];this[b51]();$(window)[t9I](d9I + namespace + U51 + namespace,function(){K6d.j6d();that[w5Y]();});$(c9I)[J9I](Y9I + namespace,function(){var k9I=T3Y;k9I+=U8t;k9I+=z8t;that[k9I]();});$(x9I)[M9I](V9I + namespace,function(){K6d.m6d();that[w5Y]();});$(document)[k9t](v9I + namespace,function(e){var D9I=N5t;D9I+=t6P;K6d.m6d();D9I+=z8t;var Z9I=N5t;Z9I+=v6t;Z9I+=l6P;if(e[B4Y] === q4I || e[Z9I] === l4I || e[D9I] === Q4I){that[w5Y]();}});setTimeout(function(){var e51="lick";K6d.j6d();var B9I=t9t;B9I+=e51;B9I+=M6G;$(G3Y)[k9t](B9I + namespace,function(e){var S51="ents";var n51="targ";var f9I=U8t;f9I+=f7P;f9I+=z9t;var j9I=A1Y;j9I+=F6t;j9I+=u4t;j9I+=a9Y;var a9I=J2t;a9I+=v6t;a9I+=Y6G;a9I+=X9t;var y9I=K6d.g6t;y9I+=C6t;y9I+=R9t;var A9I=E6t;A9I+=G1Y;A9I+=S51;var u9I=n51;u9I+=a9Y;var parents=$(e[u9I])[A9I]();if(!parents[d5P](that[y9I][H4t])[a9I] && e[j9I] !== that[D7t][f9I][K4I]){var X9I=x2t;X9I+=X9t;X9I+=U8t;X9I+=z8t;that[X9I]();}});},G4I);},_writeOutput:function(focus){var t51="trigger";var w2I=i8t;w2I+=Z1Y;var O2I=R3Y;O2I+=E6t;O2I+=W2t;O2I+=K6t;var s2I=K6d.g6t;s2I+=C6t;s2I+=R9t;var g2I=x2t;g2I+=E6t;g2I+=k6t;g2I+=K6d.g6t;var L2I=x2t;L2I+=E6t;L2I+=k6t;L2I+=K6d.g6t;var h2I=x9t;h2I+=F6t;h2I+=R9t;h2I+=I3Y;var i2I=Z3t;K6d.j6d();i2I+=C6t;i2I+=v1Y;i2I+=I3Y;var R2I=r8t;R2I+=p51;var W2I=F4P;W2I+=K6t;var date=this[c9t][K6d.g6t];var out=window[W2I]?window[o7P][z4P](date,undefined,this[t9t][l51],this[t9t][R2I])[i2I](this[t9t][h2I]):date[y91]() + j3G + this[L2I](date[a91]() + C4I) + j3G + this[g2I](date[x91]());this[s2I][O2I][w2I](out)[t51](f4P,{write:date});if(focus){var T2I=R3Y;T2I+=E6t;T2I+=z9t;var I2I=K6d.g6t;I2I+=C6t;I2I+=R9t;this[I2I][T2I][L6Y]();}}});Editor[r2I][D7P]=K4I;Editor[K2I][a0t]={classPrefix:d51,disableDays:J7t,firstDay:C4I,format:P7P,hoursAvailable:J7t,i18n:Editor[C2I][F2I][c51],maxDate:J7t,minDate:J7t,minutesAvailable:J7t,minutesIncrement:C4I,momentStrict:n1t,momentLocale:J51,onChange:function(){},secondsAvailable:J7t,secondsIncrement:C4I,showWeekNumber:U1t,yearRange:p4I};(function(){var A01="_l";var c01="placeholder";var V41="cker";var K01="_val";var O6u='postUpload';var e71='input:last';var r01="hidden";var Q71='_';var t41="rop";var T01="disa";var s01="_inpu";var V51="ele";var V11="_enabled";var C41="datepicker";var I6u="noFileText";var p41="picker";var p6u="uploadMany";var z01='text';var R11="_i";var v51="textar";var H71="l>";var Z51="sword";var J01="_editor_val";var h71="multiple";var H6u="_v";var n71="Op";var x51="tend";var A41="_picker";var v71="checked";var Z71="sab";var S71="ip";var B71="radio";var M51="xtend";var W11="_enab";var O01="_inp";var D51="adonly";var k01="optionsPair";var a51="_input";var w01="prop";var j11='div.rendered';var Y51="uplo";var J71='input:checked';var m01="<i";var I01='disabled';var a01="_addOptions";var u41="_closeFn";var E01="eId";var k51="Many";var j41="wir";var B51="ypes";var h41="_preChecked";var g01="fieldType";var y01="ast";var C71="checkbox";var I7I=v6t;I7I+=F2Y;I7I+=g8t;I7I+=y9t;var w7I=Y51;w7I+=N3Y;w7I+=k51;var W0I=v6t;W0I+=F2Y;W0I+=x51;var f8I=u0t;f8I+=x51;var h8I=v6t;h8I+=M51;var i8I=c9t;i8I+=V51;i8I+=S1t;var A3I=v6t;K6d.m6d();A3I+=D9t;A3I+=Z8t;A3I+=K6d.g6t;var u3I=v51;u3I+=v6t;u3I+=k6t;var M3I=L7t;M3I+=B9t;var x3I=E6t;x3I+=k6t;x3I+=c9t;x3I+=Z51;var d3I=K6t;d3I+=L7t;var e3I=L7t;e3I+=B9t;var U3I=T8t;U3I+=D51;var N3I=v1t;N3I+=c9t;var E2I=L5t;E2I+=B51;var fieldTypes=Editor[E2I];function _buttonText(conf,text){var A51="..";var u51="Choose fi";var y51="uploadT";var j51='div.upload button';var z2I=Z3t;z2I+=x1Y;if(text === J7t || text === undefined){var N2I=u51;N2I+=J2t;N2I+=a7Y;N2I+=A51;var m2I=y51;m2I+=v6t;m2I+=F2Y;m2I+=K6t;text=conf[m2I] || N2I;}conf[a51][z2I](j51)[H6Y](text);}function _commonUpload(editor,conf,dropCallback,multiple){var s11="/di";var d11="gD";var T11="ue\">";var q11="ad\">";var G11="buttonInternal";var b11='<div class="cell limitHide">';var w11="tton class=\"";var H11="editor_uplo";var D11='over';var l11="eave dragexit";var L11="rop\"><span></span></div>";var x11='div.drop';var a11='noDrop';var f51=".clearValue";var m11="iv class=";var o11='<div class="eu_table">';var i11="\"rendered\"></div>";var X51=" button";var t11="dra";var z11="iv class=\"";var U11='<div class="cell">';var F11="utton ";var O11="</button>";var N11="\"row\">";var I11="<div class=\"cell clearVal";var n11="dragDrop";var k11="Drag and drop a file here to upload";var K11="ut>";var c11="ropText";var p11="dragl";var h11=" class=\"d";var B11='dragover';var g11="iv class=\"row second\">";var Y11='div.drop span';var S11="FileReader";var C11="multipl";var e11='input[type=file]';var r11="></inp";var P11='"></button>';var Q11='<input type="file" ';var E11="iv class=\"cell upload limitHide\">";var J11="tex";var M11='drop';var T3I=C6t;T3I+=q9t;var g3I=c1G;g3I+=f51;g3I+=X51;var L3I=N6t;L3I+=q9t;L3I+=K6d.g6t;var k2I=U8t;k2I+=K6d.g6t;var Y2I=W11;Y2I+=e4t;var J2I=R11;J2I+=q9t;J2I+=E6t;J2I+=z9t;var c2I=w0t;c2I+=V2G;c2I+=K6d.g6t;c2I+=O0t;var d2I=J0t;d2I+=Y0t;d2I+=i11;var t2I=o0t;t2I+=h11;t2I+=L11;var l2I=f1t;l2I+=g11;var p2I=w0t;p2I+=s11;p2I+=y1t;var n2I=w0t;n2I+=V2G;n2I+=c1G;n2I+=g0t;var S2I=e1G;S2I+=O11;var e2I=z21;e2I+=w11;var U2I=I11;U2I+=T11;var b2I=R0t;b2I+=K6d.g6t;b2I+=g7Y;b2I+=g0t;var Q2I=r11;K6d.m6d();Q2I+=K11;var P2I=C11;P2I+=v6t;var o2I=E7P;o2I+=F11;o2I+=D8Y;o2I+=T1t;var G2I=f1t;G2I+=E11;var q2I=w0t;q2I+=K6d.g6t;q2I+=m11;q2I+=N11;var H2I=f1t;H2I+=z11;H2I+=H11;H2I+=q11;var btnClass=editor[d4t][V7Y][G11];var container=$(H2I + o11 + q2I + G2I + o2I + btnClass + P11 + Q11 + (multiple?P2I:A5t) + Q2I + b2I + U2I + e2I + btnClass + S2I + n2I + p2I + l2I + b11 + t2I + H7t + U11 + d2I + c2I + H7t + H7t + H7t);conf[J2I]=container;conf[Y2I]=n1t;if(conf[k2I]){var x2I=Z3t;x2I+=R3Y;x2I+=K6d.g6t;container[x2I](e11)[U3Y](q3P,Editor[g5G](conf[m7t]));}if(conf[U3Y]){var M2I=k6t;M2I+=K6t;M2I+=M5P;container[F9G](e11)[U3Y](conf[M2I]);}_buttonText(conf);if(window[S11] && conf[n11] !== U1t){var i3I=t9t;i3I+=J2t;i3I+=j8t;i3I+=v6t;var f2I=C6t;f2I+=E6t;f2I+=v6t;f2I+=q9t;var y2I=p11;y2I+=l11;var A2I=C6t;A2I+=q9t;var D2I=C6t;D2I+=q9t;var Z2I=t11;Z2I+=d11;Z2I+=c11;var v2I=J11;v2I+=K6t;var V2I=N6t;V2I+=q9t;V2I+=K6d.g6t;container[V2I](Y11)[v2I](conf[Z2I] || k11);var dragDrop=container[F9G](x11);dragDrop[D2I](M11,function(e){var v11="iginal";var Z11="dataTransfer";K6d.m6d();if(conf[V11]){var u2I=N6t;u2I+=J2t;u2I+=v6t;u2I+=c9t;var B2I=v3t;B2I+=v11;B2I+=c4G;Editor[U5G](editor,conf,e[B2I][Z11][u2I],_buttonText,dropCallback);dragDrop[t8Y](D11);}return U1t;})[A2I](y2I,function(e){if(conf[V11]){var a2I=C6t;a2I+=i8t;a2I+=v6t;a2I+=F6t;dragDrop[t8Y](a2I);}return U1t;})[k9t](B11,function(e){var j2I=W11;j2I+=J2t;j2I+=v6t;j2I+=K6d.g6t;if(conf[j2I]){dragDrop[q4t](D11);}return U1t;});editor[k9t](f2I,function(){var u11="dragov";var A11=".DTE_Upload drop.DTE_Upload";var R3I=u11;R3I+=Q4t;R3I+=A11;var W3I=C6t;W3I+=q9t;var X2I=H9t;X2I+=C6t;K6d.m6d();X2I+=K6d.g6t;X2I+=n9t;$(X2I)[W3I](R3I,function(e){return U1t;});})[k9t](i3I,function(){var y11='dragover.DTE_Upload drop.DTE_Upload';var h3I=C6t;h3I+=Z3t;h3I+=Z3t;$(G3Y)[h3I](y11);});}else {container[q4t](a11);container[q6Y](container[F9G](j11));}container[L3I](g3I)[k9t](w3G,function(e){var W01="dTypes";var X11="load";var f11="_enabl";var s3I=f11;s3I+=t8t;e[f4Y]();if(conf[s3I]){var I3I=t9t;I3I+=k6t;I3I+=J2t;I3I+=J2t;var w3I=W2t;w3I+=E6t;w3I+=X11;var O3I=I0Y;O3I+=W01;Editor[O3I][w3I][z9Y][I3I](editor,conf,A5t);}});container[F9G](e11)[T3I](j4t,function(){var K3I=Z3t;K3I+=U8t;K3I+=z6t;var r3I=Y51;r3I+=N3Y;K6d.m6d();Editor[r3I](editor,conf,this[K3I],_buttonText,function(ids){var R01="ut[";var i01="e=file]";var F3I=H0t;F3I+=R01;F3I+=O8t;F3I+=i01;var C3I=Z3t;C3I+=U8t;C3I+=q9t;C3I+=K6d.g6t;dropCallback[r4t](editor,ids);container[C3I](F3I)[K4I][L5G]=J7t;});});return container;}function _triggerChange(input){setTimeout(function(){K6d.j6d();var h01="chang";var L01="igger";var m3I=h01;m3I+=v6t;var E3I=M5P;E3I+=L01;input[E3I](m3I,{editor:n1t,editorSet:n1t});;},K4I);}var baseFieldType=$[Z7t](n1t,{},Editor[N3I][g01],{get:function(conf){var z3I=i8t;z3I+=k6t;z3I+=J2t;return conf[a51][z3I]();},set:function(conf,val){var G3I=s01;G3I+=K6t;var q3I=i8t;q3I+=k6t;q3I+=J2t;var H3I=O01;H3I+=z9t;conf[H3I][q3I](val);_triggerChange(conf[G3I]);},enable:function(conf){K6d.m6d();conf[a51][w01](I01,U1t);},disable:function(conf){var P3I=T01;P3I+=x6t;P3I+=K6d.g6t;var o3I=x2t;o3I+=a4t;K6d.m6d();conf[o3I][w01](P3I,n1t);},canReturnSubmit:function(conf,node){K6d.m6d();return n1t;}});fieldTypes[r01]={create:function(conf){var Q3I=i8t;Q3I+=s9t;conf[K01]=conf[Q3I];K6d.m6d();return J7t;},get:function(conf){K6d.j6d();return conf[K01];},set:function(conf,val){var C01="_va";var b3I=C01;b3I+=J2t;conf[b3I]=val;}};fieldTypes[U3I]=$[e3I](n1t,{},baseFieldType,{create:function(conf){var H01='readonly';var F01="af";var N01="nput/>";var t3I=x2t;t3I+=H0t;t3I+=W2t;t3I+=K6t;K6d.m6d();var l3I=I3Y;l3I+=M5P;var p3I=c9t;p3I+=F01;p3I+=E01;var n3I=m01;n3I+=N01;var S3I=x2t;S3I+=a4t;conf[S3I]=$(n3I)[U3Y]($[Z7t]({id:Editor[p3I](conf[m7t]),type:z01,readonly:H01},conf[l3I] || ({})));return conf[t3I][K4I];}});fieldTypes[d3I]=$[Z7t](n1t,{},baseFieldType,{create:function(conf){var q01="put/>";var k3I=x2t;K6d.j6d();k3I+=a4t;var Y3I=U8t;Y3I+=K6d.g6t;var J3I=m01;J3I+=q9t;J3I+=q01;var c3I=G2Y;c3I+=E6t;c3I+=W2t;c3I+=K6t;conf[c3I]=$(J3I)[U3Y]($[Z7t]({id:Editor[g5G](conf[Y3I]),type:z01},conf[U3Y] || ({})));return conf[k3I][K4I];}});fieldTypes[x3I]=$[M3I](n1t,{},baseFieldType,{create:function(conf){var G01='<input/>';var o01='password';var B3I=R11;B3I+=b0t;B3I+=K6t;var D3I=U8t;D3I+=K6d.g6t;var Z3I=p0t;Z3I+=v6t;Z3I+=n0t;Z3I+=K6d.g6t;var v3I=v6t;v3I+=Z0t;v3I+=y9t;var V3I=k6t;V3I+=K6t;V3I+=K6t;V3I+=F6t;conf[a51]=$(G01)[V3I]($[v3I]({id:Editor[Z3I](conf[D3I]),type:o01},conf[U3Y] || ({})));return conf[B3I][K4I];}});fieldTypes[u3I]=$[A3I](n1t,{},baseFieldType,{create:function(conf){var Q01="textarea";var U01="a>";var b01="></textare";var P01="ttr";var R8I=R11;R8I+=b0t;R8I+=K6t;var W8I=k6t;W8I+=Q2G;W8I+=F6t;var X3I=U8t;X3I+=K6d.g6t;var f3I=u0t;f3I+=K6t;f3I+=Z8t;f3I+=K6d.g6t;var j3I=k6t;j3I+=P01;var a3I=w0t;K6d.j6d();a3I+=Q01;a3I+=b01;a3I+=U01;var y3I=R11;y3I+=q9t;y3I+=Y4P;conf[y3I]=$(a3I)[j3I]($[f3I]({id:Editor[g5G](conf[X3I])},conf[W8I] || ({})));return conf[R8I][K4I];},canReturnSubmit:function(conf,node){return U1t;}});fieldTypes[i8I]=$[h8I](n1t,{},baseFieldType,{_addOptions:function(conf,opts,append){var t01="eholderDisabled";var Y01="air";var l01="plac";var e01="placeho";var p01="sabled";var S01="lder";var d01="placeholderValue";var n01="placeholderDi";var elOpts=conf[a51][K4I][L9P];var countOffset=K4I;K6d.m6d();if(!append){var L8I=e01;L8I+=S01;elOpts[b1t]=K4I;if(conf[L8I] !== undefined){var O8I=K6d.g6t;O8I+=U4t;O8I+=x6t;O8I+=K6d.g6t;var s8I=n01;s8I+=p01;var g8I=l01;g8I+=t01;var placeholderValue=conf[d01] !== undefined?conf[d01]:A5t;countOffset+=C4I;elOpts[K4I]=new Option(conf[c01],placeholderValue);var disabled=conf[g8I] !== undefined?conf[s8I]:n1t;elOpts[K4I][r01]=disabled;elOpts[K4I][O8I]=disabled;elOpts[K4I][J01]=placeholderValue;}}else {var w8I=J2t;w8I+=h4Y;countOffset=elOpts[w8I];}if(opts){var I8I=E6t;I8I+=Y01;I8I+=c9t;Editor[I8I](opts,conf[k01],function(val,label,i,attr){var x01="tor_val";var T8I=E2G;T8I+=d8t;T8I+=x01;var option=new Option(label,val);option[T8I]=val;if(attr){$(option)[U3Y](attr);}elOpts[i + countOffset]=option;});}},create:function(conf){var u01='<select></select>';var B01="ultip";var D01="dte";var M01="pO";var V01="selec";var v01="chan";var Z01="ge.";var G8I=U8t;G8I+=M01;G8I+=E6t;G8I+=V9G;var q8I=C8t;q8I+=Z0Y;var H8I=V01;H8I+=K6t;var m8I=v01;m8I+=Z01;m8I+=D01;var E8I=C6t;E8I+=q9t;var F8I=k6t;F8I+=K6t;F8I+=K6t;F8I+=F6t;var C8I=R9t;C8I+=B01;C8I+=J2t;C8I+=v6t;var K8I=c9t;K8I+=k6t;K8I+=Z3t;K8I+=E01;var r8I=k6t;r8I+=K6t;r8I+=K6t;r8I+=F6t;conf[a51]=$(u01)[r8I]($[Z7t]({id:Editor[K8I](conf[m7t]),multiple:conf[C8I] === n1t},conf[F8I] || ({})))[E8I](m8I,function(e,d){var N8I=t8t;N8I+=p8G;K6d.m6d();if(!d || !d[N8I]){var z8I=A01;z8I+=y01;z8I+=S3G;conf[z8I]=fieldTypes[S21][C9G](conf);}});fieldTypes[H8I][a01](conf,conf[q8I] || conf[G8I]);return conf[a51][K4I];},update:function(conf,options,append){var X01="dO";var f01="_ad";var W71="lec";K6d.m6d();var j01="tS";var P8I=x2t;P8I+=d9t;P8I+=j01;P8I+=a9Y;var o8I=f01;o8I+=X01;o8I+=s8G;fieldTypes[S21][o8I](conf,options,append);var lastSet=conf[P8I];if(lastSet !== undefined){var b8I=c9t;b8I+=v6t;b8I+=K6t;var Q8I=J6t;Q8I+=W71;Q8I+=K6t;fieldTypes[Q8I][b8I](conf,lastSet,n1t);}_triggerChange(conf[a51]);},get:function(conf){var R71="toA";var i71="n:selected";var g71="ator";var L71="separ";var p8I=R71;p8I+=g2P;var n8I=R9t;n8I+=k6t;n8I+=E6t;var S8I=t31;S8I+=i71;var e8I=Z3t;e8I+=U8t;e8I+=q9t;e8I+=K6d.g6t;var U8I=x2t;U8I+=R3Y;U8I+=E6t;U8I+=z9t;var val=conf[U8I][e8I](S8I)[n8I](function(){return this[J01];})[p8I]();if(conf[h71]){var d8I=L71;d8I+=k6t;d8I+=R3t;d8I+=F6t;var t8I=B6G;t8I+=C6t;t8I+=U8t;t8I+=q9t;var l8I=L71;l8I+=g71;return conf[l8I]?val[t8I](conf[d8I]):val;}return val[b1t]?val[K4I]:J7t;},set:function(conf,val,localUpdate){var I71='option';var r71="selected";var w71="tring";var s71="sepa";var O71="Se";var y8I=J2t;y8I+=v6t;y8I+=A2t;y8I+=s4Y;var B8I=v6t;B8I+=k6Y;B8I+=X9t;var D8I=C8t;D8I+=V9t;D8I+=q9t;var Z8I=N6t;Z8I+=y9t;var v8I=x2t;v8I+=a4t;var V8I=G1t;V8I+=O4Y;V8I+=X9t;var M8I=d9Y;M8I+=O0Y;var Y8I=W5G;Y8I+=g2P;var J8I=s71;J8I+=j0G;J8I+=J0G;if(!localUpdate){var c8I=A01;c8I+=y01;c8I+=O71;c8I+=K6t;conf[c8I]=val;}if(conf[h71] && conf[J8I] && !$[Y8I](val)){var x8I=s71;x8I+=j0G;x8I+=K6t;x8I+=v3t;var k8I=c9t;k8I+=w71;val=typeof val === k8I?val[E7G](conf[x8I]):[];}else if(!$[M8I](val)){val=[val];}var i,len=val[V8I],found,allFound=U1t;var options=conf[v8I][Z8I](I71);conf[a51][F9G](D8I)[B8I](function(){var T71="sele";var A8I=T71;A8I+=S1t;A8I+=v6t;A8I+=K6d.g6t;found=U1t;for(i=K4I;i < len;i++){var u8I=c0G;u8I+=l8G;u8I+=F6t;u8I+=K01;if(this[u8I] == val[i]){found=n1t;allFound=n1t;break;}}this[A8I]=found;});if(conf[c01] && !allFound && !conf[h71] && options[y8I]){options[K4I][r71]=n1t;}if(!localUpdate){var a8I=x2t;a8I+=U8t;a8I+=R6Y;_triggerChange(conf[a8I]);}return allFound;},destroy:function(conf){var K71='change.dte';var j8I=C6t;j8I+=Z3t;j8I+=Z3t;conf[a51][j8I](K71);}});fieldTypes[C71]=$[f8I](n1t,{},baseFieldType,{_addOptions:function(conf,opts,append){K6d.j6d();var val,label;var jqInput=conf[a51];var offset=K4I;if(!append){jqInput[W4P]();}else {offset=$(j4t,jqInput)[b1t];}if(opts){Editor[X8G](opts,conf[k01],function(val,label,i,attr){var F71="_edito";var U71='<label for="';var E71="r_val";var b71='" type="checkbox" />';var N71="last";var P71="d=\"";var o71="<input i";var z71="/l";var m71="t:";var G71="safe";var q71="afeId";var w5I=F71;w5I+=E71;var O5I=v81;O5I+=m71;O5I+=N71;var s5I=R0t;s5I+=i0t;var g5I=w0t;g5I+=z71;g5I+=V4Y;g5I+=H71;var L5I=c9t;L5I+=q71;var h5I=U8t;h5I+=K6d.g6t;var i5I=G71;i5I+=c2t;var R5I=o71;R5I+=P71;var W5I=w0t;W5I+=K6d.g6t;W5I+=U8t;W5I+=y1t;var X8I=z8Y;X8I+=k7t;jqInput[X8I](W5I + R5I + Editor[i5I](conf[h5I]) + Q71 + (i + offset) + b71 + U71 + Editor[L5I](conf[m7t]) + Q71 + (i + offset) + C7t + label + g5I + s5I);$(O5I,jqInput)[U3Y](I91,val)[K4I][w5I]=val;if(attr){var I5I=k6t;I5I+=K6t;I5I+=K6t;I5I+=F6t;$(e71,jqInput)[I5I](attr);}});}},create:function(conf){var p71="ions";var l71="chec";var t71="<div></";var F5I=G2Y;F5I+=Y4P;var C5I=S71;C5I+=n71;C5I+=V9G;var K5I=C6t;K5I+=a6Y;K5I+=p71;var r5I=l71;r5I+=N5t;r5I+=d7Y;r5I+=F2Y;var T5I=t71;T5I+=i0t;conf[a51]=$(T5I);fieldTypes[r5I][a01](conf,conf[K5I] || conf[C5I]);return conf[F5I][K4I];},get:function(conf){var d71="eparato";var c71="oi";var Y71="unselectedValue";var k71="separator";var q5I=c9t;q5I+=d71;q5I+=F6t;var H5I=B6G;H5I+=c71;H5I+=q9t;var m5I=G1t;m5I+=u4t;m5I+=s4Y;var E5I=R11;E5I+=q9t;E5I+=E6t;E5I+=z9t;var out=[];var selected=conf[E5I][F9G](J71);if(selected[m5I]){var N5I=w4Y;N5I+=t9t;N5I+=X9t;selected[N5I](function(){K6d.m6d();out[Q0Y](this[J01]);});}else if(conf[Y71] !== undefined){var z5I=E6t;z5I+=R4t;z5I+=X9t;out[z5I](conf[Y71]);}return conf[k71] === undefined || conf[k71] === J7t?out:out[H5I](conf[q5I]);},set:function(conf,val){var M71='|';var x71="separato";var e5I=w4Y;e5I+=t9t;e5I+=X9t;var U5I=J2t;U5I+=v6t;U5I+=A2t;U5I+=s4Y;var b5I=U8t;b5I+=c9t;b5I+=a1Y;b5I+=g2P;var P5I=y4G;P5I+=U8t;P5I+=q9t;P5I+=u4t;var o5I=H0t;o5I+=z9t;var G5I=G2Y;G5I+=q1t;G5I+=K6t;var jqInputs=conf[G5I][F9G](o5I);if(!$[r9Y](val) && typeof val === P5I){var Q5I=x71;Q5I+=F6t;val=val[E7G](conf[Q5I] || M71);}else if(!$[b5I](val)){val=[val];}var i,len=val[U5I],found;jqInputs[e5I](function(){var V71="or_v";found=U1t;for(i=K4I;i < len;i++){var S5I=x0Y;S5I+=K6t;S5I+=V71;S5I+=Z1Y;if(this[S5I] == val[i]){found=n1t;break;}}this[v71]=found;});_triggerChange(jqInputs);},enable:function(conf){var l5I=d8t;l5I+=Z71;l5I+=J2t;l5I+=t8t;var p5I=Z3t;p5I+=U8t;p5I+=y9t;var n5I=R11;n5I+=f7P;n5I+=z9t;conf[n5I][p5I](j4t)[w01](l5I,U1t);},disable:function(conf){var d5I=K6d.g6t;d5I+=U4t;d5I+=H9t;d5I+=e4t;var t5I=x2t;t5I+=U8t;t5I+=q9t;t5I+=Y4P;conf[t5I][F9G](j4t)[w01](d5I,n1t);},update:function(conf,options,append){K6d.m6d();var D71="check";var J5I=c9t;J5I+=v6t;J5I+=K6t;var c5I=D71;c5I+=k2t;var checkbox=fieldTypes[c5I];var currVal=checkbox[C9G](conf);checkbox[a01](conf,options,append);checkbox[J5I](conf,currVal);}});fieldTypes[B71]=$[Z7t](n1t,{},baseFieldType,{_addOptions:function(conf,opts,append){var Y5I=x2t;Y5I+=R3Y;Y5I+=E6t;Y5I+=z9t;var val,label;var jqInput=conf[Y5I];var offset=K4I;if(!append){var k5I=v6t;k5I+=R9t;k5I+=a6Y;k5I+=n9t;jqInput[k5I]();}else {var x5I=e8t;x5I+=q9t;x5I+=u4t;x5I+=s4Y;offset=$(j4t,jqInput)[x5I];}if(opts){Editor[X8G](opts,conf[k01],function(val,label,i,attr){var a71="or=";var j71='<input id="';var u71="alu";var A71="<label";var f71='" type="radio" name="';var X71='" />';var W41=":l";var y71=" f";var A5I=i8t;A5I+=u71;A5I+=v6t;var u5I=U0t;u5I+=e0t;var B5I=T1t;B5I+=g0t;var D5I=A71;D5I+=y71;D5I+=a71;D5I+=T1t;var Z5I=q9t;Z5I+=k6t;Z5I+=R9t;Z5I+=v6t;var v5I=U8t;v5I+=K6d.g6t;var V5I=f1t;K6d.j6d();V5I+=U8t;V5I+=i8t;V5I+=g0t;var M5I=k6t;M5I+=E6t;M5I+=k7t;jqInput[M5I](V5I + j71 + Editor[g5G](conf[v5I]) + Q71 + (i + offset) + f71 + conf[Z5I] + X71 + D5I + Editor[g5G](conf[m7t]) + Q71 + (i + offset) + B5I + label + u5I + H7t);$(e71,jqInput)[U3Y](A5I,val)[K4I][J01]=val;if(attr){var y5I=v81;y5I+=K6t;y5I+=W41;y5I+=y01;$(y5I,jqInput)[U3Y](attr);}});}},create:function(conf){var R41="Options";var i41='<div />';var W1I=C6t;W1I+=q9t;var X5I=S71;X5I+=n71;X5I+=K6t;X5I+=c9t;var f5I=C6t;f5I+=E6t;f5I+=v2t;f5I+=B2G;var j5I=x2t;K6d.j6d();j5I+=t0G;j5I+=R41;var a5I=R11;a5I+=f7P;a5I+=W2t;a5I+=K6t;conf[a5I]=$(i41);fieldTypes[B71][j5I](conf,conf[f5I] || conf[X5I]);this[W1I](t9G,function(){var R1I=U8t;R1I+=f7P;R1I+=z9t;conf[a51][F9G](R1I)[x6Y](function(){var L41="che";var g41="ked";if(this[h41]){var i1I=L41;i1I+=t9t;i1I+=g41;this[i1I]=n1t;}});});return conf[a51][K4I];},get:function(conf){var s41="or_val";var L1I=x9G;L1I+=s41;var h1I=G2Y;h1I+=Y4P;var el=conf[h1I][F9G](J71);K6d.m6d();return el[b1t]?el[K4I][L1I]:undefined;},set:function(conf,val){var w41="ecked";var O41="nput:ch";var r1I=U8t;r1I+=O41;r1I+=w41;var T1I=x2t;T1I+=R3Y;T1I+=Y4P;var w1I=w4Y;K6d.m6d();w1I+=I4Y;var O1I=U8t;O1I+=f7P;O1I+=z9t;var s1I=Z3t;s1I+=x1Y;var g1I=x2t;g1I+=R3Y;g1I+=q1t;g1I+=K6t;var that=this;conf[g1I][s1I](O1I)[w1I](function(){var I41="preChecked";var I1I=x2t;I1I+=I41;this[I1I]=U1t;if(this[J01] == val){this[v71]=n1t;this[h41]=n1t;}else {this[v71]=U1t;this[h41]=U1t;}});_triggerChange(conf[T1I][F9G](r1I));},enable:function(conf){var F1I=K6d.g6t;F1I+=U8t;F1I+=Z71;F1I+=e4t;var C1I=Z3t;C1I+=U8t;C1I+=q9t;C1I+=K6d.g6t;var K1I=R11;K1I+=q9t;K1I+=E6t;K1I+=z9t;conf[K1I][C1I](j4t)[w01](F1I,U1t);},disable:function(conf){var N1I=E6t;N1I+=F6t;N1I+=C8t;var m1I=Z3t;m1I+=R3Y;m1I+=K6d.g6t;var E1I=R11;E1I+=f7P;K6d.m6d();E1I+=W2t;E1I+=K6t;conf[E1I][m1I](j4t)[N1I](I01,n1t);},update:function(conf,options,append){var r41="radi";var T41="[valu";var o1I=e8t;o1I+=A2t;o1I+=s4Y;var G1I=T1t;G1I+=r1t;var q1I=T41;q1I+=v6t;q1I+=B1G;q1I+=T1t;var H1I=R11;H1I+=q9t;H1I+=q1t;K6d.j6d();H1I+=K6t;var z1I=r41;z1I+=C6t;var radio=fieldTypes[z1I];var currVal=radio[C9G](conf);radio[a01](conf,options,append);var inputs=conf[H1I][F9G](j4t);radio[z9Y](conf,inputs[d5P](q1I + currVal + G1I)[o1I]?currVal:inputs[x7Y](K4I)[U3Y](I91));}});fieldTypes[s9P]=$[Z7t](n1t,{},baseFieldType,{create:function(conf){var e41='type';var m41="dateFormat";var z41="_28";var q41="datepick";var E41="yui";var K41='<input />';var H41="22";var F41="jquer";var N41="RFC";var G41="dateFo";var x1I=x2t;x1I+=U8t;x1I+=f7P;x1I+=z9t;var U1I=U8t;U1I+=K6d.g6t;var b1I=p0t;b1I+=E01;var Q1I=k6t;Q1I+=K6t;Q1I+=M5P;var P1I=O01;P1I+=W2t;P1I+=K6t;conf[P1I]=$(K41)[Q1I]($[Z7t]({id:Editor[b1I](conf[U1I]),type:z01},conf[U3Y]));if($[C41]){var S1I=F41;S1I+=E41;var e1I=x2t;e1I+=U8t;e1I+=b0t;e1I+=K6t;conf[e1I][q4t](S1I);if(!conf[m41]){var l1I=N41;l1I+=z41;l1I+=H41;var p1I=q41;p1I+=Q4t;var n1I=G41;n1I+=n5Y;n1I+=K6t;conf[n1I]=$[p1I][l1I];}setTimeout(function(){var U41="dateImage";var o41="#u";var P41="i-datepicke";var Q41="r-d";var b41="atepicker";var J1I=o41;J1I+=P41;J1I+=Q41;K6d.m6d();J1I+=g7Y;var d1I=K6d.g6t;d1I+=b41;var t1I=O01;t1I+=z9t;$(conf[t1I])[d1I]($[Z7t]({dateFormat:conf[m41],buttonImage:conf[U41],buttonImageOnly:n1t,onSelect:function(){K6d.j6d();var c1I=t9t;c1I+=K2Y;c1I+=u9Y;conf[a51][L6Y]()[c1I]();}},conf[C4t]));$(J1I)[F6Y](u6Y,E6Y);},G4I);}else {var k1I=H5G;k1I+=K6t;k1I+=v6t;var Y1I=R11;Y1I+=q9t;Y1I+=E6t;Y1I+=z9t;conf[Y1I][U3Y](e41,k1I);}return conf[x1I][K4I];},set:function(conf,val){var S41='hasDatepicker';var n41="cha";K6d.j6d();if($[C41] && conf[a51][f7t](S41)){var v1I=n41;v1I+=q9t;v1I+=b8t;var V1I=z9Y;V1I+=e6t;var M1I=s9P;M1I+=p41;conf[a51][M1I](V1I,val)[v1I]();}else {var Z1I=R11;Z1I+=q9t;Z1I+=Y4P;$(conf[Z1I])[i4t](val);}},enable:function(conf){var l41="datepi";var D1I=l41;D1I+=u9Y;K6d.m6d();D1I+=Q4t;if($[D1I]){var B1I=v6t;B1I+=q9t;B1I+=k6t;B1I+=x6t;conf[a51][C41](B1I);}else {var A1I=T01;A1I+=m91;var u1I=E6t;u1I+=t41;$(conf[a51])[u1I](A1I,U1t);}},disable:function(conf){var d41="disabl";K6d.m6d();if($[C41]){var a1I=j6G;a1I+=v6t;a1I+=p41;var y1I=x2t;y1I+=U8t;y1I+=b0t;y1I+=K6t;conf[y1I][a1I](p9G);}else {var j1I=d41;j1I+=v6t;j1I+=K6d.g6t;$(conf[a51])[w01](j1I,n1t);}},owns:function(conf,node){var Y41='div.ui-datepicker';var J41="picker-header";var c41="ui-date";var X1I=f3Y;X1I+=c41;X1I+=J41;var f1I=J2t;f1I+=v6t;f1I+=Y6G;f1I+=X9t;return $(node)[b4t](Y41)[f1I] || $(node)[b4t](X1I)[b1t]?n1t:U1t;}});fieldTypes[c51]=$[W0I](n1t,{},baseFieldType,{create:function(conf){var k41="oseFn";var Z41="<in";var x41="tetime";var y41="keydo";var D41="put ";var B41="displayFormat";var v41="afeI";var M41="_pi";var q0I=i1t;q0I+=J2t;q0I+=k41;var H0I=y8t;H0I+=C6t;H0I+=c9t;H0I+=v6t;var z0I=C6t;z0I+=q9t;var F0I=G6P;F0I+=n0t;F0I+=q9t;F0I+=Y4P;var K0I=C6t;K0I+=E6t;K0I+=K6t;K0I+=c9t;var r0I=H5G;r0I+=x41;var T0I=Z3t;T0I+=v3t;T0I+=F1Y;var I0I=L7t;I0I+=B9t;var w0I=G2Y;w0I+=E6t;w0I+=W2t;w0I+=K6t;var O0I=M41;O0I+=V41;var s0I=K6t;s0I+=L7t;var g0I=U8t;g0I+=K6d.g6t;var L0I=c9t;L0I+=v41;L0I+=K6d.g6t;var h0I=v6t;h0I+=D9t;h0I+=Z8t;h0I+=K6d.g6t;var i0I=q7Y;i0I+=F6t;var R0I=Z41;R0I+=D41;R0I+=V2G;R0I+=g0t;conf[a51]=$(R0I)[i0I]($[h0I](n1t,{id:Editor[L0I](conf[g0I]),type:s0I},conf[U3Y]));conf[O0I]=new Editor[j7P](conf[w0I],$[I0I]({format:conf[B41] || conf[T0I],i18n:this[y0t][r0I]},conf[K0I]));conf[u41]=function(){var C0I=X9t;C0I+=U8t;C0I+=K6d.g6t;C0I+=v6t;conf[A41][C0I]();};if(conf[F0I] === U1t){var m0I=y41;m0I+=n2Y;var E0I=C6t;E0I+=q9t;conf[a51][E0I](m0I,function(e){var a41="Default";var N0I=y4Y;N0I+=a41;e[N0I]();});}this[z0I](H0I,conf[q0I]);return conf[a51][K4I];},get:function(conf){var W6u="wireFormat";var X41="entLocal";var f41="eForma";var b0I=j41;b0I+=f41;b0I+=K6t;var Q0I=N4P;Q0I+=X41;Q0I+=v6t;var P0I=V7Y;P0I+=k6t;P0I+=K6t;var o0I=i8t;o0I+=k6t;o0I+=J2t;var G0I=G2Y;G0I+=E6t;G0I+=z9t;var val=conf[G0I][o0I]();var inst=conf[A41][t9t];return val && conf[W6u] && moment?moment(val,inst[P0I],inst[Q0I],inst[H4P])[A7P](conf[b0I]):val;},set:function(conf,val){var R6u="wireForma";var h6u="_picke";var i6u="eForm";var p0I=Z3t;p0I+=v3t;p0I+=F1Y;var n0I=R9t;n0I+=C6t;n0I+=p51;var S0I=R6u;S0I+=K6t;var e0I=j41;e0I+=i6u;e0I+=I3Y;var U0I=h6u;U0I+=F6t;var inst=conf[A41][t9t];conf[U0I][i4t](val && conf[e0I] && moment?moment(val,conf[S0I],inst[l51],inst[n0I])[p0I](inst[A7P]):val);_triggerChange(conf[a51]);},owns:function(conf,node){var L6u="owns";return conf[A41][L6u](node);},errorMessage:function(conf,msg){var s6u="errorMsg";var g6u="icker";var l0I=z8G;l0I+=g6u;conf[l0I][s6u](msg);},destroy:function(conf){var t0I=h6G;t0I+=F6t;t0I+=L6G;this[f7Y](V7G,conf[u41]);conf[a51][f7Y](q6P);conf[A41][t0I]();},minDate:function(conf,min){var c0I=R9t;c0I+=U8t;c0I+=q9t;var d0I=x2t;d0I+=e8G;d0I+=V41;conf[d0I][c0I](min);},maxDate:function(conf,max){var J0I=R9t;J0I+=k6t;J0I+=F2Y;conf[A41][J0I](max);}});fieldTypes[U5G]=$[Z7t](n1t,{},baseFieldType,{create:function(conf){var editor=this;var container=_commonUpload(editor,conf,function(val){var x0I=q9t;x0I+=k6t;x0I+=R9t;x0I+=v6t;var k0I=E2G;k0I+=o3P;k0I+=K6t;var Y0I=c9t;Y0I+=v6t;Y0I+=K6t;Editor[Z0P][U5G][Y0I][r4t](editor,conf,val[K4I]);editor[k0I](O6u,[conf[x0I],val[K4I]]);});return container;},get:function(conf){return conf[K01];},set:function(conf,val){var z6u='upload.editor';var T6u='</span>';var m6u='noClear';var r6u='div.clearValue button';var C6u="oveCl";var N6u="lea";var w6u="No f";var K6u="clearText";var F6u="clea";var E6u="rText";var i7I=x2t;i7I+=i8t;i7I+=k6t;i7I+=J2t;var R7I=R3Y;R7I+=E6t;R7I+=z9t;var W7I=x2t;W7I+=H0t;W7I+=W2t;W7I+=K6t;var v0I=d8t;v0I+=c8t;v0I+=n9t;K6d.j6d();var V0I=s01;V0I+=K6t;var M0I=x2t;M0I+=w9G;M0I+=J2t;conf[M0I]=val;var container=conf[V0I];if(conf[v0I]){var D0I=x2t;D0I+=i8t;D0I+=k6t;D0I+=J2t;var Z0I=Z3t;Z0I+=U8t;Z0I+=y9t;var rendered=container[Z0I](j11);if(conf[D0I]){rendered[H6Y](conf[T6Y](conf[K01]));}else {var y0I=w6u;y0I+=U8t;y0I+=e8t;var A0I=e7P;A0I+=t3t;A0I+=g0t;var u0I=L2Y;u0I+=Z8t;u0I+=K6d.g6t;var B0I=v6t;B0I+=p4Y;B0I+=K6t;B0I+=n9t;rendered[B0I]()[u0I](A0I + (conf[I6u] || y0I) + T6u);}}var button=container[F9G](r6u);if(val && conf[K6u]){var f0I=T8t;f0I+=R9t;f0I+=C6u;f0I+=g61;var j0I=F6u;j0I+=E6u;var a0I=j5Y;a0I+=Y9Y;button[a0I](conf[j0I]);container[f0I](m6u);}else {var X0I=N8t;X0I+=k3t;X0I+=N6u;X0I+=F6t;container[q4t](X0I);}conf[W7I][F9G](R7I)[J4G](z6u,[conf[i7I]]);},enable:function(conf){var g7I=W11;g7I+=J2t;g7I+=t8t;var L7I=R3Y;L7I+=E6t;L7I+=z9t;var h7I=Z3t;h7I+=U8t;K6d.j6d();h7I+=q9t;h7I+=K6d.g6t;conf[a51][h7I](L7I)[w01](I01,U1t);conf[g7I]=n1t;},disable:function(conf){var O7I=E6t;O7I+=t41;var s7I=U8t;s7I+=q9t;s7I+=q1t;s7I+=K6t;conf[a51][F9G](s7I)[O7I](I01,n1t);conf[V11]=U1t;},canReturnSubmit:function(conf,node){return U1t;}});fieldTypes[w7I]=$[I7I](n1t,{},baseFieldType,{_showHide:function(conf){var q6u="_limi";var G6u="tLeft";var Q6u='div.limitHide';var o6u="limit";var P6u="_container";var m7I=J2t;m7I+=v6t;K6d.m6d();m7I+=A2t;m7I+=s4Y;var E7I=H6u;E7I+=k6t;E7I+=J2t;var F7I=q6u;F7I+=G6u;var C7I=M8t;C7I+=N6G;var K7I=N8t;K7I+=q9t;K7I+=v6t;var r7I=J2t;r7I+=b61;r7I+=U8t;r7I+=K6t;var T7I=x2t;T7I+=w9G;T7I+=J2t;if(!conf[o6u]){return;}conf[P6u][F9G](Q6u)[F6Y](u6Y,conf[T7I][b1t] >= conf[r7I]?K7I:C7I);conf[F7I]=conf[o6u] - conf[E7I][m7I];},create:function(conf){var e6u="button.rem";var U6u="nta";var b6u="_co";var U7I=b6u;U7I+=U6u;U7I+=v6Y;var o7I=e6u;o7I+=J1P;o7I+=v6t;var G7I=R9t;G7I+=W2t;G7I+=J2t;G7I+=v2t;var editor=this;var container=_commonUpload(editor,conf,function(val){var n6u="concat";var S6u="fieldTy";var q7I=E2G;q7I+=i8t;q7I+=v6t;q7I+=e9t;var H7I=H6u;H7I+=Z1Y;var z7I=S6u;z7I+=E6t;z7I+=J9t;var N7I=H6u;N7I+=k6t;N7I+=J2t;conf[K01]=conf[N7I][n6u](val);Editor[z7I][p6u][z9Y][r4t](editor,conf,conf[H7I]);editor[q7I](O6u,[conf[W7t],conf[K01]]);},n1t);container[q4t](G7I)[k9t](w3G,o7I,function(e){var l6u="adMany";var t6u='idx';e[M61]();if(conf[V11]){var b7I=x2t;b7I+=i8t;b7I+=k6t;b7I+=J2t;var Q7I=t9t;Q7I+=k6t;Q7I+=t5G;var P7I=Y51;P7I+=l6u;var idx=$(this)[h7t](t6u);conf[K01][O6G](idx,C4I);Editor[Z0P][P7I][z9Y][Q7I](editor,conf,conf[b7I]);}});conf[U7I]=container;return container;},get:function(conf){var e7I=x2t;e7I+=w9G;e7I+=J2t;return conf[e7I];},set:function(conf,val){var j6u="<spa";var Y6u="andler";var v6u="ndere";var a6u=" fi";var J6u="triggerH";var V6u="div.r";var M6u="pty";var x6u='Upload collections must have an array as a value';var k6u="showH";var Z6u="pendT";var D6u="</ul>";var d6u="upl";var c6u="oad.";var j7I=x2t;j7I+=w9G;j7I+=J2t;var a7I=d6u;a7I+=c6u;a7I+=X3t;a7I+=J0G;var y7I=J6u;y7I+=Y6u;var A7I=U8t;A7I+=R6Y;var u7I=O01;u7I+=z9t;var B7I=x2t;B7I+=k6u;B7I+=D3P;var p7I=x8t;p7I+=E6t;p7I+=J2t;p7I+=C6Y;var n7I=x2t;n7I+=R3Y;n7I+=E6t;n7I+=z9t;var S7I=x2t;S7I+=i4t;if(!val){val=[];}if(!$[r9Y](val)){throw x6u;}conf[S7I]=val;var that=this;var container=conf[n7I];if(conf[p7I]){var t7I=v6t;t7I+=R9t;t7I+=M6u;var l7I=V6u;l7I+=v6t;l7I+=v6u;l7I+=K6d.g6t;var rendered=container[F9G](l7I)[t7I]();if(val[b1t]){var J7I=v6t;J7I+=k6Y;J7I+=X9t;var c7I=z8Y;c7I+=Z6u;c7I+=C6t;var d7I=w0t;d7I+=W2t;d7I+=H71;d7I+=D6u;var list=$(d7I)[c7I](rendered);$[J7I](val,function(i,file){var y6u=' remove" data-idx="';var B6u="\">&times;</";var A6u=' <button class="';var u6u="tton>";var V7I=w0t;V7I+=V2G;V7I+=J2t;V7I+=F5G;var M7I=B6u;M7I+=H7Y;M7I+=u6u;var x7I=x9t;x7I+=F6t;x7I+=R9t;var k7I=w0t;k7I+=J2t;k7I+=U8t;k7I+=g0t;var Y7I=k6t;Y7I+=E6t;K6d.j6d();Y7I+=k7t;list[Y7I](k7I + conf[T6Y](file,i) + A6u + that[d4t][x7I][U0G] + y6u + i + M7I + V7I);});}else {var D7I=R0t;D7I+=W81;var Z7I=O0P;Z7I+=a6u;Z7I+=J2t;Z7I+=J9t;var v7I=j6u;v7I+=q9t;v7I+=g0t;rendered[q6Y](v7I + (conf[I6u] || Z7I) + D7I);}}Editor[Z0P][p6u][B7I](conf);conf[u7I][F9G](A7I)[y7I](a7I,[conf[j7I]]);},enable:function(conf){var X7I=r3t;X7I+=C8t;var f7I=Z3t;f7I+=R3Y;f7I+=K6d.g6t;conf[a51][f7I](j4t)[X7I](I01,U1t);conf[V11]=n1t;},disable:function(conf){K6d.m6d();var g4I=W11;g4I+=e4t;var L4I=x8t;L4I+=s81;var h4I=E6t;h4I+=t41;var i4I=U8t;i4I+=q9t;i4I+=Y4P;var R4I=N6t;R4I+=q9t;R4I+=K6d.g6t;var W4I=s01;W4I+=K6t;conf[W4I][R4I](i4I)[h4I](L4I,n1t);conf[g4I]=U1t;},canReturnSubmit:function(conf,node){return U1t;}});})();if(DataTable[L7t][f6u]){var O4I=X6u;O4I+=c9t;var s4I=v6t;s4I+=Z0t;s4I+=q9t;s4I+=K6d.g6t;$[s4I](Editor[Z0P],DataTable[L7t][O4I]);}DataTable[L7t][w4I]=Editor[Z0P];Editor[I4I]={};Editor[T4I][W9u]=r4I;Editor[R9u]=i9u;return Editor;});

