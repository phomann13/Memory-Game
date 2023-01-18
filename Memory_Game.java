

public class Memory_Game {
    
    public static void main(String[] args) {
        // public int[][] board = NULL;
        // for (int level = 0; level < 5; level++ ) {
        // board = create_board(board, level);
        
    }

    int[][] create_board(int[][] board, int level){
        if (level == 1) {
            int[][] new_board = new int[2][2];
            board = insert_number(new_board);
      
        }
        return board;
    }
    int[][] insert_number(int[][] board){
        for(int i = 0; i < board.length; i++){
            for (int j = 0; j < board[i].length; j++){
                board[i][j] = 2;
            }
        }
        return board;
    }
}
