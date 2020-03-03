
// test connection to receiving sever
ExampleExchangePlugin.receiveTestConnection = function( protocol, settings )
{
	return false;
}

// main function for PersistentServer; return boolean
ExampleExchangePlugin.listen = function( protocol )
{
	return false;
}

// main function for receiving documents; return true if documents are being received or false if not (settings wkrong or missing etc.)
ExampleExchangePlugin.receiveDocuments = function( protocol )
{
	setTimeout( function() {
		ExampleExchangePlugin.receiveDocumentsInternal( protocol );
	}, 0 );
	return true;
}
	
ExampleExchangePlugin.receiveDocumentsInternal = function( protocol )
{
	// rules
	var rules = ExampleExchangePlugin.plugin.exchangeRules( application.D_Incoming );

	var totalCount = 0;
	
	var service = new Service( ExampleExchangePlugin.plugin.settings );
	
	var wsdocs = service.GetDocuments( {} );
		
	var it = new ListIterator( wsdocs );
	while( it.hasNext() ) {
		var wsDoc = it.next();
		
		totalCount++;

		// choose rule from rules based on rule settings and received documents' data
		var rule;
		
		// for every received document
		var doc = ExampleExchangePlugin.plugin.createDocument( rule );
	
		doc.subject = "xx";
		doc.protocolAddress = "xx";
	
		// set documents presentation (pdf, image, html)
		try {
			ExampleExchangePlugin.plugin.setDocumentPresentation( doc, rule, filename, data );
			// handle error
		}
		catch( e ) {
		}
		
		// set document data (optional)
		ExampleExchangePlugin.plugin.setDocumentData( doc, rule, data );
	
		// add attachments (optional)
		doc.addAttachment( name, data );
	
		try {
			ExampleExchangePlugin.plugin.newDocument( doc, rule );
		}
		catch( e ) {
			// handle error
		}
	}

	// set visual message to user
	var statusError = false;
	var str = qsTr( "[Example Exchange Plugin] Receiver %Ln messages", "", totalCount );
	UJPExchangePlugin.plugin.setCallStatus( str, statusError );

	// end receiving; 0 for ok; <>0 for error
	ExampleExchangePlugin.plugin.receiveEnd( 0 );
}
