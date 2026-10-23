board=[

     [" "," "," "],
     [" "," "," "],
     [" "," "," "]

]
current_player="X"

game_running=True

while game_running:
      position=(int(input("enter your position:")))
      r=(position-1)//3
      c=(position-1)% 3

      if  board[r][c]==" ":
        board[r][c]=current_player
      else:
          print("position already occupied")

      for row in board:
          print(" | " .join(row))
          print("---------")

     #winner check 
      if board[0][0]==current_player and board[0][1]==current_player and board[0][2]==current_player:
         print(current_player,"wins")
         game_runnig=False 
      elif board[1][0]==current_player and board[1][1]==current_player and board[1][2]==current_player:
         print(current_player,"wins")
         game_running=False
      elif board[2][0]==current_player and board[2][1]==current_player and board[2][2]==current_player:
          print(current_player,"wins")
          game_runnig=False
      elif board[0][0]==current_player and board[1][0]==current_player and board[2][0]==current_player:
          print(current_player,"wins")
          game_runnig=False
      elif board[0][1]==current_player and board[1][1]==current_player and board[2][1]==current_player:
          print(current_player,"wins")
          game_runnig=False
      elif board[0][2]==current_player and board[1][2]==current_player and board[2][2]==current_player:
          print(current_player,"wins")
          game_runnig=False
      elif board[0][0]==current_player and board[1][1]==current_player and board[2][2]==current_player:
          print(current_player,"wins")
          game_running=False
      elif board[0][2]==current_player and board[1][1]==current_player and board[2][0]==current_player:
          print(current_player,"wins")
          game_runnig=False
      else:
          empty_found=False

          for row in board:
              for cell in row:
                  if cell ==" ":
                      empty_found=True

          if empty_found==False:
              print("Draw")
              game_runnig=False

          if current_player=="X":
             current_player="O"
          else:
              current_player="X"

              
          


         


       