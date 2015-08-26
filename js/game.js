firstGame.GameState = function(game){
    this.tween = null;
    this.filter = null;
    //this.rope = null;
};

firstGame.GameState.prototype = {
    preload: function () {
        this.time.advancedTiming = true;
        this.load.image('backgroundPlay', 'assets/sea.png');
        this.load.image('fish', 'assets/fish.png');
        this.load.image('fish2', 'assets/fish2.png');

    },

    listener: function(rope) {
        this.tween = this.add.tween(rope).to( { x: '-500' }, 500, Phaser.Easing.Linear.None, true);
        this.fish--;
    },

    createFish: function () {

        this.fish++;
        var fish = this.add.sprite(Math.random() * 270, 40 + Math.random() * 480, 'fish2');
        fish.inputEnabled = true;
        fish.events.onInputDown.add(this.listener, this);

        var count = 0;
        var length = 128 / 5;
        var points = [];

        for (var i = 0; i < 5; i++)
        {
            points.push(new Phaser.Point(i * length, 0));
        }

        var rope = this.add.rope(Math.random() * 270, 50 +  Math.random() * 480, 'fish', null, points);
        rope.scale.set(0.8);

        rope.inputEnabled = true;
        rope.events.onInputDown.addOnce(this.listener, this);

        rope.updateAnimation = function() {
            count += 0.1;

            for (var i = 0; i < this.points.length; i++)
            {
                this.points[i].y = Math.sin(i * 0.5 - count) * 10;
            }
        };

    },

    create: function () {
        //this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

        //this.spaun.onComplete.add(this.finish ,this);

        var sprite = this.add.sprite(0, 0, 'backgroundPlay');
        this.fish = 0;
        this.spaun = this.time.events.repeat(Phaser.Timer.SECOND, 10, this.createFish, this);
    },

    update: function (){

    },

    finish: function () {
        this.state.start('GameOver');
    },

    render: function() {
        game.debug.text("FPS: " + this.time.fps || '--', 2, 14,"#000");
        game.debug.text("Fish sprites: " + this.fish, 2, 34, "#000");
    }
};