/*

GAME
    State:
        Check if game started/running
        At start, should recreate the pile, reset all scores, reset all state (to initial values).
        PLAYERS : instantiate using array argument
        PILESIZE: 10  used to instantiate PILE

    Methods:
        PLAY:   should start the game.
        STOP:   Should stop the game.
        WINNER:

PILE
    State:
        COINS

    Methods:
        pickCoin(n) , where 1 <= n <= 2
        Player picks coin, affect pile's state

COIN:
    State:
        hasBeenPicked - boolean (initial value false) representing whether this coin has been picked.
    Methods:
        pick - picks the coin (changes its hasBeenPicked flag to true)

PLAYER
    State:
        name
        type

    Methods:
        pickCoin(n) , where 1 <= n <= 2
*/
