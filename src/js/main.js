var mainState = {
    preload: function() {
        // 이 기능은 처음에 실행됩니다.
        // 그것이 이미지와 사운드를 로드하는 곳입니다.
    },

    create: function() {
        // 이 함수는 preload 함수 후에 호출됩니다.
        // 여기에서는 게임을 설정하고 스프라이트를 표시합니다.
    },

    update: function() {
        // 이 함수는 초당 60 회 호출됩니다.
        // 여기에는 게임의 로직이 포함되어 있습니다.
    },
};

// 페이저 초기화 및 400 x 490 게임 만들기
var game = new Phaser.Game(400, 490);

// 'mainState'를 추가하고 'main' 이라고 설정합니다.
game.state.add('main', mainState);

// 실제로 게임을 시작하기 위해 'main' 을 시작합니다..
game.state.start('main');

// // 새 스프라이트 로드
// preload: function() {
//     game.load.image('bird', 'assets/bird.png');
// },

// create: function() {
//     // 게임의 배경색을 파란색으로 변경하십시오.
//     game.stage.backgroundColor = '#71c5cf';

//     // 물리 시스템 설정
//     game.physics.startSystem(Phaser.Physics.ARCADE);

//     // 새를 x = 100 및 y = 245 위치에 표시하십시오.
//     this.bird = game.add.sprite(100, 245, 'bird');

//     // 새를 물리 시스템에 추가
//     // 추가내용 : movements, gravity, collisions, etc.
//     game.physics.arcade.enable(this.bird);

//     // 새에 중력을 가하여 떨어 뜨립니다.
//     this.bird.body.gravity.y = 1000;

//     // 스페이스 키가 눌려지면 'jump'함수를 호출하십시오.
//     var spaceKey = game.input.keyboard.addKey(
//                     Phaser.Keyboard.SPACEBAR);
//     spaceKey.onDown.add(this.jump, this);
// },

// update: function() {
//     // 새가 화면에서 벗어난 경우 (너무 높거나 너무 낮은 경우)
//     // 'restartGame'함수를 호출하십시오.
//     if (this.bird.y < 0 || this.bird.y > 490)
//         this.restartGame();
// },
