firstGame.TestState = function(game){

};

firstGame.TestState.prototype = {
    preload: function () {
        this.time.advancedTiming = true;
        this.load.image('backgroundPlay', 'assets/sea.png');
        this.load.image('fish', 'assets/fish.png');
    },

    createFish: function () {

        this.fish++;
        var fish = this.add.sprite(Math.random() * 270, 40 + Math.random() * 480, 'fish');
    },

    create: function () {
        var sprite = this.add.sprite(0, 0, 'backgroundPlay');
        this.fish = 0;
        this.spaun = this.time.events.add(Phaser.Timer.SECOND * 60, this.finish, this);
    },

    update: function (){
        this.createFish();
    },

    finish: function () {
        this.state.start('GameOver');
    },

    render: function() {
        game.debug.text("FPS: " + this.time.fps || '--', 2, 14,"#000");
        game.debug.text("Fish sprites: " + this.fish, 2, 34, "#000");
    }
};/**
 * Created by admin on 26-Aug-15.
 */
