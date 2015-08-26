var firstGame = {};

firstGame.MainMenuState = function(game){
    this.playButton = null;
    this.exitButton = null;
    this.testButton = null;
};

firstGame.MainMenuState.prototype = {
    preload: function () {
        this.load.image('background', 'assets/sky.png');
        this.load.image('play-button', 'assets/play_button.jpg');
        this.load.image('exit-button', 'assets/button_exit.png');
        this.load.image('test-button', 'assets/test.png');
    },

    create: function () {
       // this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.add.sprite(0, 0, 'background');
        this.add.text(30, 50, 'Anastasya Game', {font: '40px Arial', fill: 'yellow'});
        this.playButton = this.add.button(80, 250, 'play-button', this.startGame, this);
        this.exitButton = this.add.button(90, 350, 'exit-button', this.finishGame, this);
        this.testButton = this.add.button(190, 500, 'test-button', this.testGame, this);
    },

    startGame: function (pointer) {
        this.state.start('Game');
    },

    testGame: function (pointer) {
        this.state.start('Test');
    },

    finishGame: function (pointer) {
        this.state.start('GameOver');
    }
}
