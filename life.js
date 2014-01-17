var interval;

var life = {
	tablero: [
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	],

	tableroAux: [
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	],

	interval: 200, 
	dead: 0,
	live: 0,
	gen: 0,

	cleanGrid: function(grid){
		for (var i = 0; i < grid.length; i++) {
			for (var j = 0; j < grid[i].length; j++) {
				grid[i][j] = 0;
			}
		}

		return grid;
	},

	refresh: function(){
		//Dibujar tablero
		html = "";
		contador = 0;
		life.dead = 0;
		life.live = 0;

		for (var i = 0; i < life.tablero.length; i++) {
			for (var j = 0; j < life.tablero[i].length; j++) {
				status = life.tablero[i][j] == 0 ? "dead" : "live";
				html += "<li id='" + contador + "' class='cell "+ status + "'></li>";
				contador++;

				if(life.tablero[i][j] == 1)
					life.live++;
				else
					life.dead++;
			};
		};

		$("#tablero").html(html);

		$(".cell").click(function(){
			life.cellClick($(this).attr('id'));
		});

		life.refreshPanel();
	},

	refreshPanel: function(){
		$("#dead").html(life.dead);
		$("#live").html(life.live);
		$("#gen").html(life.gen);
	},

	cellClick: function(id){
		//Change a dead cell to live
		$("#" + id).toggleClass("dead");
		$("#" + id).toggleClass("live");

		life.tablero[Math.floor(id/20)][id%20] = life.tablero[Math.floor(id/20)][id%20] == 0 ? 1 : 0;

		if(life.tablero[Math.floor(id/20)][id%20] == 1){
			life.dead--;
			life.live++;
		}else{
			life.dead++;
			life.live--;
		}

		life.refreshPanel();
	},

	init: function(){
		$("#start").attr('disabled', true);
		$("#stop").attr('disabled', false);

		interval = setInterval(function(){
			life.nextGen();
		},life.interval);
	},

	stop: function(){
		$("#stop").attr('disabled', true);
		$("#start").attr('disabled', false);

		clearInterval(interval);
	},

	nextGen: function(){
		life.gen++;
		life.tableroAux = life.cleanGrid(life.tableroAux);

		for (var i = 0; i < life.tablero.length; i++) {
			for (var j = 0; j < life.tablero[i].length; j++) {
				vivas = 0;

				//Una célula muerta con exactamente 3 células vecinas vivas "nace".
				if(life.tablero[i][j] == 0){
					//Comparar estado de celulas vecinas
					for (var x = i-1; x < i+2; x++){
						for (var y = j-1; y < j+2; y++){
							//Comprobar limites de tablero y que no sea la misma celula
							if(x >= 0 && x < life.tablero.length && y >= 0 &&  y < life.tablero[i].length && !(x == i && y == j)){
								vivas = life.tablero[x][y] == 1 ? vivas + 1 : vivas;
							}
						}
					}

					if(vivas == 3){
						//Revive
						life.tableroAux[i][j] = 1;
					}
				}

				vivas = 0;
				//Una célula muerta con exactamente 3 células vecinas vivas "nace".
				if(life.tablero[i][j] == 1){
					//Comparar estado de celulas vecinas
					for (var x = i-1; x < i+2; x++){
						for (var y = j-1; y < j+2; y++){
							//Comprobar limites de tablero y que no sea la misma celula
							if(x >= 0 && x < life.tablero.length && y >= 0 &&  y < life.tablero[i].length && !(x == i && y == j)){
								vivas = life.tablero[x][y] == 1 ? vivas + 1 : vivas;
							}
						}
					}

					if(vivas >= 2 && vivas <= 3){
						//Permanece viva
						life.tableroAux[i][j] = 1;
					}
				}
			}
		}

		for (var i = 0; i < life.tablero.length; i++) {
			for (var j = 0; j < life.tablero[i].length; j++) {
				life.tablero[i][j] = life.tableroAux[i][j];
			}
		}



		life.refresh();
	}
};


$(document).ready(function(){
	//Dibujar tablero
	life.refresh();
});