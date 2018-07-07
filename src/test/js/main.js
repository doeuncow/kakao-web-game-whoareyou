var game = new Phaser.Game(960, 640, Phaser.CANVAS, null, {preload:preload, create:create, update:update});

function preload(){
  game.load.image("door", "./images/background_1.png");

  game.load.image("correct", "./images/correct.png");
  game.load.image("wrong", "./images/wrong.png");

  // game.load.spritesheet("correct", "correct.png", 50, 50);
  // game.load.spritesheet("wrong", "wrong.png", 50, 50);
}
function create(){
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.stage.backgroundColor = "#eee8aa"; //배경색 지정

  // game.stage.backgroundColor = "#F5F5DC"; //배경색 지정
  // //인터폰 테두리(색은 아직..)
  // game.create.texture('up', ['A'], 1000, 80, 0);
  // game.add.sprite(0,0,'up');
  // game.create.texture('left', ['A'], 80, 600, 0);
  // game.add.sprite(0,0,'left');
  // game.create.texture('right', ['A'], 80, 600, 0);
  // game.add.sprite(880,0,'right');
  // game.create.texture('down', ['A'], 1000, 80, 0);
  // game.add.sprite(0,560,'down');
  door = game.add.group();
  door.create(180,27,"door");

  correct = game.add.group();
  correct.create(20,100,"correct");

  // correct = game.add.sprite(200, 200, "correct");
  // game.physics.arcade.enable(correct);
  // wrong_button = game.add.sprite(0, 300, "wrong");
  // game.physics.arcade.enable(wrong_button);

  game.scale.pageAlignHorizontally = true; //화면 가운데위치
  game.scale.pageAlignVertically = true; //화면 가운데위치
}
function update(){

}
