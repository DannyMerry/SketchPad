$(document).ready(function(){
	var count
	var pen 
	for (count = 0; count <= 398; count++) {
		$('#start').after("<div class='tile'></div>");
	}
	$('#normal').click(function(){
		newGrid();
		pen = 0;
	});
	$('#fade').click(function(){
		newGrid();
		pen = 1;
	})
	
		$(document).on('mouseenter','#start',function(){
			$(this).css('background-color','black');
		})
		$(document).on('mouseenter','.tile',function(){
			$(this).css('background-color','black');
		})
		

})

function newGrid() {
	var noRows = window.prompt("Number of rows");
	if (noRows > 70) {
		noRows = 70;
	}
	var noTiles = (noRows*noRows)-2;
	var tileSize = Math.round(960/noRows);
	var rowLength = tileSize*noRows;
	$('.tile').remove();
	$('#start').remove();
	$('.wrapper').css('height', rowLength + 'px');
	$('.wrapper').css('width', rowLength + 'px');
	$('.wrapper').append("<div id='start'></div>");
	$('#start').css('height', tileSize + 'px');
	$('#start').css('width', tileSize + 'px');
	var count
	for (count = 0; count <= noTiles; count++) {
		$('#start').after("<div class='tile'></div>");		
	}
	$('.tile').css('height', tileSize + 'px');
	$('.tile').css('width', tileSize + 'px');
}

function fade() {
	var noRows = window.prompt("Number of rows");
	if (noRows > 70) {
		noRows = 70;
	}
	var noTiles = (noRows*noRows)-2;
	var tileSize = Math.round(960/noRows);
	var rowLength = tileSize*noRows;
	$('.tile').remove();
	$('#start').remove();
	$('.wrapper').css('height', rowLength + 'px');
	$('.wrapper').css('width', rowLength + 'px');
	$('.wrapper').append("<div id='start'></div>");
	$('#start').css('height', tileSize + 'px');
	$('#start').css('width', tileSize + 'px');
	var count
	for (count = 0; count <= noTiles; count++) {
		$('#start').after("<div class='tile'></div>");		
	}
	$('.tile').css('height', tileSize + 'px');
	$('.tile').css('width', tileSize + 'px');
	$(document).ready(function(){
		var count
		for (count = 0; count <= 254; count++) {
			$('#start').after("<div class='tile'></div>");
		}
		$(document).on('mouseenter','#start',function(){
			$(this).css('background-color','black');
		})
		$(document).on('mouseenter','.tile',function(){
			$(this).css('background-color','black');
		})
		$(document).on('mouseleave','#start',function(){
			$(this).fade('300');
		})
		$(document).on('mouseleave','.tile',function(){
			$(this).fade('300');
		})
	})
}
