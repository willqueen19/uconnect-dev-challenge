
$(document).ready( function() {
  //constants, i.e. the three possible contents of a box, with blank being the default
    var X = 'X',
        O = 'O',
        BLANK = ' ';
    
    //variables
    var currPlayer = X,
        movesMade = 0,
        //board represents the tictactoe board in the fashion represented below,
        //with index '0' being the top-left box, and 8 being the bottom-right
        board = [BLANK, BLANK, BLANK,
                 BLANK, BLANK, BLANK,
                 BLANK, BLANK, BLANK];
    
    //finds the box that was clicked, and selects the correct functions below to execute
    $('#board').find('td').on('click', function() {
        //ID's of each box in the HTML table are mapped to corresponding indexes in board array
        var index = this.id;
        if(movesMade < 9) {
            if(board[index] === BLANK){
                $(this).text(currPlayer);
                makeMove(index);
            }
        //if 9 moves have been made, there are no more possible moves, and we will alert the user
        } else if (movesMade === 9) {
            gameOver()
        }
        //console.log(index, movesMade, board);
    });
    
    //switches the current player
    function switchPlayer() {
        if((movesMade % 2) == 0) {
            currPlayer = X;
        } else {
            currPlayer = O;
        }
        changeStatus('Current Turn: ' + currPlayer);
    };
    
    //sets the value at that index of the board to that player, adds to the moves counter and switches the player
    function makeMove(index) {
        board[index] = currPlayer;
        movesMade++;
        switchPlayer();
    }
    
    //indicates the end of the game
    function gameOver() {
        $('#newgame').text('Start New Game');
        changeStatus('Game is Over! Play Again!');
    }
    
    //will change the text presented in currentStatus div, placed above the table
    function changeStatus(text) {
        $('#currentStatus').text(text);
    };
    
    //clicking the "Restart Game" button will reset the webpage, effectively restarting the game
    $('#newGame').click(function() {
        location.reload();
    });
    
});