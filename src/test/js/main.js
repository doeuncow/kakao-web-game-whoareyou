var game = new Phaser.Game(960, 640, Phaser.CANVAS, null, {preload:preload, create:create, update:update});

function preload(){
  game.load.image("door", "./images/background_1.png");

  game.load.image("correct", "./images/correct.png");
  game.load.image("wrong", "./images/wrong.png");
}
function create(){
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.stage.backgroundColor = "#eee8aa"; //배경색 지정
  var image = game.add.image(0, 0, "door"); //배경이미지 0, 0 좌표에 지정

  game.scale.pageAlignHorizontally = true; //화면 가운데위치
  game.scale.pageAlignVertically = true; //화면 가운데위치

  correct = game.add.sprite(55,400,"correct");
  game.physics.arcade.enable(correct);
  wrong = game.add.sprite(800,400,"wrong");
  game.physics.arcade.enable(wrong);
}
function update(){

}
