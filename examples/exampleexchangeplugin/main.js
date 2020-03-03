
function getInfo()
{
	if( isEmpty( application.connectionUrl( "exampleexchangeplugin.internal" ) ) ) {
		application.addLocalExternalConnectionUrl( "exampleexchangeplugin.internal", application.databaseUrl() );
	}

	var info =
	{
		"name"    : "exampleexchangeplugin",
		"caption" : "Example Exchange Plugin",

		"protocols" :
		[
			{
				"name"    : "example",
				"caption" : "Example Protocol",

				"capabilities" :
				[
					// only set capabilities that protocol supports
					"ReceiveDocuments",
					"SendDocuments",
					"PersistentServer",
					"ManualSelect", // used only when SendDocuments is upported
					"ManualAddressing", // used only when SendDocuments is upported
					"ManualBody" // used only when SendDocuments is upported
				],

				"settings" :
				{
					// set this when ReceiveDocuments is supported
					"receive" :
					{
						// rule settings fields
						"fields" : 
						[
							[ "field1", qsTr( "Field 1" ), application.LineEdit, { "toolTip" : qsTr( "Exmple field." ), "mandatory" : true } ],
							
							[ "LineEdit"           , qsTr( "LineEdit"            ), application.LineEdit           , { "toolTip" : qsTr( "LineEdit"            ), "mandatory" : false, "readOnly" : false, "placeholderText" : null, "echoMode" : "normal|password", "default" : null } ],
							[ "TextEdit"           , qsTr( "TextEdit"            ), application.TextEdit           , { "toolTip" : qsTr( "TextEdit"            ), "mandatory" : false, "readOnly" : false } ],
//							[ "HtmlEdit"           , qsTr( "HtmlEdit"            ), application.HtmlEdit           , { "toolTip" : qsTr( "HtmlEdit"            ), "mandatory" : false, "readOnly" : false } ],
							[ "IntegerEdit"        , qsTr( "IntegerEdit"         ), application.IntegerEdit        , { "toolTip" : qsTr( "IntegerEdit"         ), "mandatory" : false, "readOnly" : false, "minimum" : null, "maximum" : null, "default" : null } ],
							[ "DecimalEdit"        , qsTr( "DecimalEdit"         ), application.DecimalEdit        , { "toolTip" : qsTr( "DecimalEdit"         ), "mandatory" : false, "readOnly" : false, "minimum" : null, "maximum" : null, "decimals" : 2, "default" : null } ],
							[ "CheckBox"           , qsTr( "CheckBox"            ), application.CheckBox           , { "toolTip" : qsTr( "CheckBox"            ), "mandatory" : false, "readOnly" : false, "labelPosition" : "right|left", "default" : "off|on" } ],
							[ "ComboBox"           , qsTr( "ComboBox"            ), application.ComboBox           , { "toolTip" : qsTr( "ComboBox"            ), "mandatory" : false, "readOnly" : false, "editable" : false, "items" : [ [ "label_1", "key_1" ], [ "label_n", "key_n" ] ], "default" : null } ],
							[ "DateEdit"           , qsTr( "DateEdit"            ), application.DateEdit           , { "toolTip" : qsTr( "DateEdit"            ), "mandatory" : false, "readOnly" : false, "default" : null } ],
							[ "TimeEdit"           , qsTr( "TimeEdit"            ), application.TimeEdit           , { "toolTip" : qsTr( "TimeEdit"            ), "mandatory" : false, "readOnly" : false, "default" : null } ],
							[ "DateTimeEdit"       , qsTr( "DateTimeEdit"        ), application.DateTimeEdit       , { "toolTip" : qsTr( "DateTimeEdit"        ), "mandatory" : false, "readOnly" : false, "default" : null } ],
							[ "DatabaseComboBox"   , qsTr( "DatabaseComboBox"    ), application.DatabaseComboBox   , { "toolTip" : qsTr( "DatabaseComboBox"    ), "mandatory" : false, "readOnly" : false, "use_default_database" : false, "database" : "exampleexchangeplugin.internal", "query" : null } ],
							[ "DatabaseLineEdit"   , qsTr( "DatabaseLineEdit"    ), application.DatabaseLineEdit   , { "toolTip" : qsTr( "DatabaseLineEdit"    ), "mandatory" : false, "readOnly" : false, "database" : "exampleexchangeplugin.internal", "query" : null, "valueField" : null, "textField" : null, "columns" : null, "treeIdField" : null, "treeParentIdField" : null, "onlyLeafSelectable" : false } ], // columns example: "columns": [ { "width" : 200, "caption" : "Description" }, { "width" : 50, "caption" : "Key" } ] }
							[ "Table"              , qsTr( "Table"               ), application.Table              , { "toolTip" : qsTr( "Table"               ), "mandatory" : false, "readOnly" : false, "showVerticalHeader" : true, "columns" : 
									[
										[ "LineEdit"           , qsTr( "LineEdit"            ), application.LineEdit           , { "toolTip" : qsTr( "LineEdit"            ), "mandatory" : false, "readOnly" : false, "placeholderText" : null, "echoMode" : "normal|password", "default" : null } ],
										[ "TextEdit"           , qsTr( "TextEdit"            ), application.TextEdit           , { "toolTip" : qsTr( "TextEdit"            ), "mandatory" : false, "readOnly" : false } ],
//										[ "HtmlEdit"           , qsTr( "HtmlEdit"            ), application.HtmlEdit           , { "toolTip" : qsTr( "HtmlEdit"            ), "mandatory" : false, "readOnly" : false } ],
										[ "IntegerEdit"        , qsTr( "IntegerEdit"         ), application.IntegerEdit        , { "toolTip" : qsTr( "IntegerEdit"         ), "mandatory" : false, "readOnly" : false, "minimum" : null, "maximum" : null, "default" : null } ],
										[ "DecimalEdit"        , qsTr( "DecimalEdit"         ), application.DecimalEdit        , { "toolTip" : qsTr( "DecimalEdit"         ), "mandatory" : false, "readOnly" : false, "minimum" : null, "maximum" : null, "decimals" : 2, "default" : null } ],
										[ "CheckBox"           , qsTr( "CheckBox"            ), application.CheckBox           , { "toolTip" : qsTr( "CheckBox"            ), "mandatory" : false, "readOnly" : false, "labelPosition" : "right|left", "default" : "off|on" } ],
										[ "ComboBox"           , qsTr( "ComboBox"            ), application.ComboBox           , { "toolTip" : qsTr( "ComboBox"            ), "mandatory" : false, "readOnly" : false, "editable" : false, "items" : [ [ "label_1", "key_1" ], [ "label_n", "key_n" ] ], "default" : null } ],
										[ "DateEdit"           , qsTr( "DateEdit"            ), application.DateEdit           , { "toolTip" : qsTr( "DateEdit"            ), "mandatory" : false, "readOnly" : false, "default" : null } ],
										[ "TimeEdit"           , qsTr( "TimeEdit"            ), application.TimeEdit           , { "toolTip" : qsTr( "TimeEdit"            ), "mandatory" : false, "readOnly" : false, "default" : null } ],
										[ "DateTimeEdit"       , qsTr( "DateTimeEdit"        ), application.DateTimeEdit       , { "toolTip" : qsTr( "DateTimeEdit"        ), "mandatory" : false, "readOnly" : false, "default" : null } ],
										[ "DatabaseComboBox"   , qsTr( "DatabaseComboBox"    ), application.DatabaseComboBox   , { "toolTip" : qsTr( "DatabaseComboBox"    ), "mandatory" : false, "readOnly" : false, "use_default_database" : false, "database" : "exampleexchangeplugin.internal", "query" : null } ],
										[ "DatabaseLineEdit"   , qsTr( "DatabaseLineEdit"    ), application.DatabaseLineEdit   , { "toolTip" : qsTr( "DatabaseLineEdit"    ), "mandatory" : false, "readOnly" : false, "database" : "exampleexchangeplugin.internal", "query" : null, "valueField" : null, "textField" : null, "columns" : null, "treeIdField" : null, "treeParentIdField" : null, "onlyLeafSelectable" : false } ], // columns example: "columns": [ { "width" : 200, "caption" : "Description" }, { "width" : 50, "caption" : "Key" } ] }F
										[ "FileSelector"       , qsTr( "FileSelector"        ), application.FileSelector       , { "toolTip" : qsTr( "FileSelector"        ), "mandatory" : false, "readOnly" : false, "selectorType" : "OpenFile|SaveFile|ExistingDirectory", "showFullPath" : false, "default" : null, "filter" : null, "pathOnly" : false } ],
										[ "ContactsLineEdit"   , qsTr( "ContactsLineEdit"    ), application.ContactsLineEdit   , { "toolTip" : qsTr( "ContactsLineEdit"    ), "mandatory" : false, "readOnly" : false, "database" : "exampleexchangeplugin.internal", "fillMode" : "FillPrettyName|FillAddress" } ],
									]
							} ],
							[ "FileSelector"       , qsTr( "FileSelector"        ), application.FileSelector       , { "toolTip" : qsTr( "FileSelector"        ), "mandatory" : false, "readOnly" : false, "selectorType" : "OpenFile|SaveFile|ExistingDirectory", "showFullPath" : false, "default" : null, "filter" : null, "pathOnly" : false } ],
							[ "CertificateSelector", qsTr( "CertificateSelector" ), application.CertificateSelector, { "toolTip" : qsTr( "CertificateSelector" ), "mandatory" : false, "readOnly" : false } ],
							[ "ImageSelector"      , qsTr( "ImageSelector"       ), application.ImageSelector      , { "toolTip" : qsTr( "ImageSelector"       ), "mandatory" : false, "readOnly" : false } ],
							[ "ContactsLineEdit"   , qsTr( "ContactsLineEdit"    ), application.ContactsLineEdit   , { "toolTip" : qsTr( "ContactsLineEdit"    ), "mandatory" : false, "readOnly" : false, "database" : "exampleexchangeplugin.internal", "fillMode" : "FillPrettyName|FillAddress" } ],
							[ "Custom"             , qsTr( "Custom"              ), application.Custom             ,
								{
									createEditor : function( parent, details )
									{
										return new QLineEdit( parent );
									},
								
									setEditorData : function( widget, value )
									{
										widget.text = value;
									},
									
									getEditorData : function( widget )
									{
										return widget.text;
									}
								}
							]
						],
						
						"groups" :
						[
							{
								"id" : "g1",
								"label" : "Group 1",
								"fields" :
								[
									[ "LineEdit"           , qsTr( "LineEdit"            ), application.LineEdit           , { "toolTip" : qsTr( "LineEdit"            ), "mandatory" : true, "readOnly" : false, "placeholderText" : null, "echoMode" : "normal|password", "default" : null } ],
									[ "TextEdit"           , qsTr( "TextEdit"            ), application.TextEdit           , { "toolTip" : qsTr( "TextEdit"            ), "mandatory" : false, "readOnly" : false } ],
//									[ "HtmlEdit"           , qsTr( "HtmlEdit"            ), application.HtmlEdit           , { "toolTip" : qsTr( "HtmlEdit"            ), "mandatory" : false, "readOnly" : false } ],
									[ "IntegerEdit"        , qsTr( "IntegerEdit"         ), application.IntegerEdit        , { "toolTip" : qsTr( "IntegerEdit"         ), "mandatory" : false, "readOnly" : false, "minimum" : null, "maximum" : null, "default" : null } ],
									[ "DecimalEdit"        , qsTr( "DecimalEdit"         ), application.DecimalEdit        , { "toolTip" : qsTr( "DecimalEdit"         ), "mandatory" : false, "readOnly" : false, "minimum" : null, "maximum" : null, "decimals" : 2, "default" : null } ],
								]
							}
						],

						// which settings are displayed in rules list
						"display" : [ "field1" ] 
					},

					// set this when ReceiveDocuments is supported
					"system_receive" :
					{
						// system settings for protocol
						"fields" :
						[
							[ "field1", qsTr( "Field 1" ), application.LineEdit ]
						],

						// which fields must be unique for each setting on organization unit
						"unique" : [ "host", "username" ],

						// supports testin connection to server
						"test_connection" : true,
						
						// can have multiple account for one organization unit
						"multiple_accounts" : true
					},
					
					// set this when SendDocuments is supported
					"send" :
					{
						// rule settings fields
						"fields" :
						[
							[ "field1", qsTr( "Field 1" ), application.LineEdit, { "toolTip" : qsTr( "Exmple field." ), "mandatory" : true } ],
						],

						// which settings are displayed in rules list
						"display" : [ "field1" ] 
					},

					// set this when SendDocuments is supported
					"system_send" :
					{
						// system settings for protocol
						"fields" :
						[
							[ "field1", qsTr( "Field 1" ), application.LineEdit ]
						],

						// which fields must be unique for each setting on organization unit
						"unique" : [ "host", "username" ],

						// supports testin connection to server
						"test_connection" : true,
						
						// can have multiple account for one organization unit
						"multiple_accounts" : true
					}
				}
			}
		],
		
		"converters" :
		[
			{
				"name" : "blank",
				"caption" : "Blank Converter",

				"capabilities" :
				[
					"ConvertIncoming",
					"ConvertOutgoing"
				]
			}
		],

		"rule_matchers" :
		[
			{
				"name" : "blank",
				"caption" : "Blank Converter",

				"capabilities" :
				[
					"ConvertIncoming",
					"ConvertOutgoing"
				]
			}
		],
		
		"lookups" :
		[
			{
				"name" : "test",
				"caption" : "Test Lookup",

				"capabilities" :
				[
					"IncomingLookup"
//					"OutgoingLookup"
				],
				
				"settings" :
				{
					// set this when IncomingLookup is supported
					"receive" :
					{
						// rule settings fields
						"fields" : 
						[
							[ "field1", qsTr( "Field 1" ), application.LineEdit, { "toolTip" : qsTr( "Exmple field." ), "mandatory" : true } ]
						]
					},
					
					// set this when OutgoingLookup is supported
					"send" :
					{
						// rule settings fields
						"fields" : 
						[
							[ "field1", qsTr( "Field 1" ), application.LineEdit, { "toolTip" : qsTr( "Exmple field." ), "mandatory" : true } ]
						]
					},
				}
			}
		]
	};
	return info;
}

// extension entry point
function createInstance()
{
	var plugin = new ExchangePlugin();
	plugin.setInfo( getInfo() );
//	plugin.plugin.setListenCB( ExampleExchangePlugin.listen );
	
	// receive callbacks
	plugin.setReceiveDocumentsCB( ExampleExchangePlugin.receiveDocuments );
	plugin.setReceiveTestConnectionCB( ExampleExchangePlugin.receiveTestConnection );

	// send callbacks
	plugin.setSendTestConnectionCB( ExampleExchangePlugin.sendTestConnection );
	plugin.setProtocolValidCB( ExampleExchangePlugin.isProtocolValid );
	plugin.setSendDocumentsCB( ExampleExchangePlugin.sendDocuments );

	// converter callbacks
	plugin.setConvertIncomingCB( ExampleExchangePlugin.convertIncoming );
	plugin.setConvertOutgoingCB( ExampleExchangePlugin.convertOutgoing );

	// lookupa callbacks
	plugin.setIncomingLookupCB( ExampleExchangePlugin.incomingLookup );
	plugin.setOutgoingLookupCB( ExampleExchangePlugin.outgoingLookup );

	ExampleExchangePlugin.plugin = plugin;

	return plugin;
}

// return true if protocol can be selected for given company
ExampleExchangePlugin.isProtocolValid = function( protocol, direction, doctype, companyId )
{
	return true;
}


ExampleExchangePlugin.convertIncoming = function( originalDoc, rule, data, originalPlugin )
{
//	originalDoc.setStopProcessing( true );
	
	// loop
//	for( var i = 0; i < i; i++ ) {
		var doc = originalPlugin.createDocument( rule );
		doc.subject = originalDoc.subject;
		doc.protocolAddress = originalDoc.protocolAddress;
		
		// set direct xml data
//		originalPlugin.setDocumentData( doc, rule, newData );
		// or set data by keys
		doc.setContentData( "InvoiceNumber", "666666" );
		doc.updateXmlContent();

		try {
			originalPlugin.newDocument( doc, rule );
			// imported
			originalDoc.stopProcessing = true;
		}
		catch( e ) {
			// error on import
		}
//		return;
//	}
	
	// data is byte array containing raw data
	
	// set document's data through api functions
//	doc.setValue( "InvoiceNumber", "..." );
/*	doc.setContentData( "InvoiceNumber", "666666" );
	doc.appendContentMulti( "InvoiceItem" );
	for( var i = 1; i <= 100000; i++ ) {
		doc.setContentData( "InvoiceItemRowNumber", "" + i );
	}*/
}

ExampleExchangePlugin.convertOutgoing = function( doc, rule )
{
	var data = new QByteArray();
	return data;
}

ExampleExchangePlugin.incomingLookup = function( doc, rule, settings )
{
	logDebug( "ExampleExchangePlugin.incomingLookup: doc=" + doc.id );
	logDebug( "ExampleExchangePlugin.incomingLookup: doc.protocol=" + doc.protocol );
	logDebug( "ExampleExchangePlugin.incomingLookup: doc.protocolAddress=" + doc.protocolAddress );
	doc.senderCompanyId = "veterpiha";
};

ExampleExchangePlugin.outgoingLookup = function( doc, rule, settings )
{
	
};
