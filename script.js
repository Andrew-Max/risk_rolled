$(document).ready(function () {
  var aDice1, aDice2, aDice3, bDice1, bDice2;

  function resetDice() {
   aDice1 = undefined;
   aDice2 = undefined;
   aDice3 = undefined;
   dDice1 = undefined;
   dDice2 = undefined;
  };

  function setDebugInfo() {
    $('.a1').text(aDice1);
    $('.a2').text(aDice2);
    $('.a3').text(aDice3);
    $('.b1').text(bDice1);
    $('.b2').text(bDice2);
  };

  function rollDice() {
    return Math.floor( (Math.random() * 6 ) + 1);
  };

  function fakeRollAllDice() {
    aDice1 = rollDice();
    aDice2 = rollDice();
    aDice3 = rollDice();
    bDice1 = rollDice();
    bDice2 = rollDice();
  }

  function rollAllDice() {
    if (attack_remaining >= 4) {
      aDice1 = rollDice();
      aDice2 = rollDice();
      aDice3 = rollDice();
    } else if (attack_remaining = 3) {
      aDice1 = rollDice();
      aDice2 = rollDice();
      aDice3 = 0

    } else {
      aDice1 = rollDice();
      aDice2 = rollDice();
      aDice3 = 0
    }

    if (defense_remaining > 1) {
      bDice1 = rollDice();
      bDice2 = rollDice();
    } else {
      bDice1 = rollDice();
    }
  };

  $('.role').on('click', function () {
    resetDice();
    var attack_initial = parseInt($('.offense input').val());
    var defense_initial = parseInt($('.defense input').val());

    var attack_remaining = attack_initial;
    var defense_remaining = defense_initial

    // while(attack_remaining > 1 && defense_remaining > 0) {
    // }
    fakeRollAllDice();

    setDebugInfo();
  });


});