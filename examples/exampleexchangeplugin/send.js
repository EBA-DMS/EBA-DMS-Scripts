
// test connection to sending sever
ExampleExchangePlugin.sendTestConnection = function( protocol, settings )
{
	return false;
}

// main function for sending documents; return true if documents are being received or false if not (settings wrong or missing etc.)
ExampleExchangePlugin.sendDocuments = function( protocol )
{
	logDebug( "ExampleExchangePlugin.sendDocuments: protocol=" + protocol );

	var docs = ExampleExchangePlugin.plugin.outboxDocuments();
	if( docs.length == 0 ) {
		return false;
	}

	var settings = ExampleExchangePlugin.plugin.settings();
	if( isNull( settings ) || isEmpty( settings.host ) ) {
		logWarning( "ExampleExchangePlugin.sendDocuments: settings host not defined!" );
		return false;
	}

	setTimeout( function() {
		ExampleExchangePlugin.sendDocumentsInternal( protocol );
	}, 0 );

	return true;
}

ExampleExchangePlugin.sendDocumentsInternal = function( protocol )
{
	var docs = ExampleExchangePlugin.plugin.outboxDocuments();
	if( docs.length == 0 ) {
		ExampleExchangePlugin.plugin.sendEnd( 0 );
		return;
	}

	var settings = ExampleExchangePlugin.plugin.settings();
	if( isNull( settings ) || isEmpty( settings.host ) ) {
		ExampleExchangePlugin.plugin.sendEnd( 1 );
		return;
	}
	
	var i = 0, n = docs.length;
	var rule = null;
	var rules = ExampleExchangePlugin.plugin.exchangeRules( application.D_Outgoing );
	var it = new ListIterator( docs );
	while( it.hasNext() ) {
		var docid = it.next();

		var doc = application.getDocument( docid );
		
		// get document presentation
		var pdf = ExampleExchangePlugin.plugin.getDocumentPresentation( doc, rule );
		
		// get documents data (data is in the format that is specified in rule)
		var xmlData = ExampleExchangePlugin.plugin.getDocumentData( doc, rule );

		ExampleExchangePlugin.plugin.aboutToSendDocument( doc );
		
		// process document through desired channel
		// ...
		//

		// notify system that document is sent
		ExampleExchangePlugin.plugin.documentSent( doc, isError, erroDescription );

		// notify system of sending progress
		ExampleExchangePlugin.plugin.sendProgress( ++i, n );
	}
	ExampleExchangePlugin.plugin.sendEnd( 0 );
}
