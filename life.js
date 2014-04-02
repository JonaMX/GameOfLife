var interval;

var life = {
  board: [],
  interval: 200,
  dead: 0,
  live: 0,
  gen: 0,

  cleanBoard: function(){
    var board = [];

    _(20).times(function(x){
      board.push([]);
      _(20).times(function(y){
        board[x].push(0);
      });
    });

    return board;
  },

  refresh: function(){
    //Draw board
    var html    = "";
    var counter = 0;
    this.dead   = 0;
    this.live   = 0;

    _.each(this.board, function(row){
      _.each(row, function(cell){
        html += "<li id='" + counter + "' class='cell "+ (cell == 0 ? "dead" : "live") + "'></li>";
        counter++;

        this.live += cell;
      });
    });

    this.dead = counter - this.live;
    $("#board").html(html);
    $(".cell").click(function(){
      life.cellClick($(this).attr('id'));
    });
    this.refreshPanel();
  },

  refreshPanel: function(){
    $("#dead").html(this.dead);
    $("#live").html(this.live);
    $("#gen").html(this.gen);
  },

  cellClick: function(id){
    //Change a dead cell to live
    $("#" + id).toggleClass("dead");
    $("#" + id).toggleClass("live");

    this.board[Math.floor(id/20)][id%20] = this.board[Math.floor(id/20)][id%20] == 0 ? 1 : 0;

    if(this.board[Math.floor(id/20)][id%20] == 1){
      this.dead--;
      this.live++;
    }else{
      this.dead++;
      this.live--;
    }

    this.refreshPanel();
  },

  init: function(){
    $("#start").attr('disabled', true);
    $("#stop").attr('disabled', false);

    this.process = setInterval(function(){
      life.nextGen();
    },this.interval);
  },

  stop: function(){
    $("#stop").attr('disabled', true);
    $("#start").attr('disabled', false);

    clearInterval(this.process);
  },

  nextGen: function(){
    this.gen++;
    var cleanBoard = this.cleanBoard();
    var live = 0;

    for (var i = 0; i < this.board.length; i++) {
      for (var j = 0; j < this.board[i].length; j++) {
        live = 0;
        //Check state of neighbour cells
        for (var x = i-1; x < i+2; x++){
          for (var y = j-1; y < j+2; y++){
            //Check board limits
            if(x >= 0 && x < this.board.length && y >= 0 &&  y < this.board[i].length && !(x == i && y == j)){
              live = this.board[x][y] == 1 ? live + 1 : live;
            }
          }
        }

        if(this.board[i][j]){
          //A live cell with 2 or 3 lives cell lives on the next gen
          if(live == 2 || live == 3){
            cleanBoard[i][j] = 1;
          }
        }else{
          //A dead cell with exactly three live neighbours becomes a live cell
          if(live == 3){
            //Revive
            cleanBoard[i][j] = 1;
          }
        }
      }
    }

    this.board = _.clone(cleanBoard);
    this.refresh();
  }
};


$(document).ready(function(){

  life.board = life.cleanBoard();

  //Draw board
  life.refresh();
});
