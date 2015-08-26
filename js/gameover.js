firstGame.GameOverState = function(game){
    this.reloadButton = null;
};

firstGame.GameOverState.prototype = {

    preload: function () {
        this.load.image('reload', 'assets/reload.png');
    },

    create: function () {
        //this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.add.sprite(0, 0,'background');
        this.add.text(100, 200, 'The END', {font: '40px Arial', fill: '#000'});
        this.reloadButton = this.add.button(110, 350, 'reload', this.startGame, this);
    },

    startGame: function (pointer) {
        this.state.start('Game');
    }
};