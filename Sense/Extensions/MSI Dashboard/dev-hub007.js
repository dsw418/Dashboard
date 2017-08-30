/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );

var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
//to avoid errors in workbench: you can remove this when you have added an app
var app;
require.config({
	baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources"
});

require(["js/qlik"], function (qlik) {
	window.qlik = qlik;
	
	qlik.setOnError( function (error) {
		console.log(error);
	});

	

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('Test.qvf', config);


	//get objects -- inserted here --
	app.getObject('KPI-07','yVjvP');
	app.getObject('KPI-06','gLQSS');
	app.getObject('KPI-05','dfJyHD');
	app.getObject('KPI-04','AJjKyx');
	app.getObject('KPI-03','dfJyHD');
	
	app.getObject('QV2-04s','NwMgmw');
	app.getObject('QV3-05-2','PQaQx');
	app.getObject('QV3-05','rFfgVjy');
	app.getObject('QV3-04-2','akMrJy');
	app.getObject('QV3-04','QyTjZq');
	app.getObject('QV3-03-2','HZnKBF');
	app.getObject('QV3-03','pjJFm');
	app.getObject('QV3-02-2','pPTeg');
	app.getObject('QV3-02','fuejJ');
	app.getObject('QV3-01','yJmwu');
	app.getObject('KPI-09','yVjvP');
	app.getObject('KPI-08','gLQSS');
	
	
	
	
	app.getObject('QV2-03','07d9a6b7-2644-4bd0-aa21-38ed28dc6888');
	app.getObject('QV2-06s','jfzxJcY');
	
	app.getObject('QV2-01','xKYDKQ');
	app.getObject('KPI-02','AJjKyx');
	app.getObject('KPI-01','dfJyHD');
	app.getObject('QV1-04s','pgJgbsr');
	app.getObject('QV1-01','xKYDKQ');
	
	
	
	
	
	
	
	
	app.getObject('QV2-05-2','PQaQx');
	app.getObject('QV2-04-2','akMrJy');
	app.getObject('QV2-03-2','HZnKBF');
	app.getObject('QV2-02-2','pPTeg');
	app.getObject('QV2-05','rFfgVjy');
	app.getObject('QV2-04','QyTjZq');
	
	
	
	app.getObject('QV2-02','fuejJ');
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	app.getObject('CurrentSelections','CurrentSelections');
	
	
	
	
	
	app.getObject('QV3-11','jfzxJcY');
	app.getObject('QV1-06s','jfzxJcY');
	app.getObject('QV1-03','07d9a6b7-2644-4bd0-aa21-38ed28dc6888');
	
	
	
	
	
	
	
	
	


	
	
	
	
	
	
	
	
	
	
	app.getObject('QV3-09','jhTqX');
	
	
	
	
	app.getObject('QV3-08','TYsLbgX');
	
	
	
	
	
	app.getObject('QV3-06','07d9a6b7-2644-4bd0-aa21-38ed28dc6888');
	
	
	
	
	
	
	
	
	app.getObject('QV3-10','HyPrQUQ');
	app.getObject('QV3-07','GwJDgs');
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


	
	
	
	
	
	
	
	
	
	
	
	
	
	app.getObject('QV1-05s','fREG');
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

		
	  $("#btnClose").click(function () {
		  console.log("Close btn Pressed!");
		  app.back();
	  });
	  
	  	
	  $("#btnReload").click(function () {
		app.DoReload(0, false, false);
	  });
	
	
	
	  //Seting default filter in filter pane "canal filter pane".
	  app.field('name').selectValues(["Shakhab"], 0, true);
	  
     
	//create cubes and lists -- inserted here --


	if (app) {
		
		$(".filter-drawer-toggle, paper-menu paper-item").click(function() {
			qlik.resize();
		});
	} else {
		$(".current-selections-placeholder span").css("display", "inline-block");
	}
});
