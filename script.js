var aDice1, aDice2, aDice3, dDice1, dDice2;
var attackDice, defenseDice;
var attack_remaining, defense_remaining;

$(document).ready(function () {

  function numberComparison(a, b) {
    return b - a;
  };

  function sortDice() {
    attackDice.sort(numberComparison);
    defenseDice.sort(numberComparison);
  }

  function resetDice() {
    aDice1 = undefined;
    aDice2 = undefined;
    aDice3 = undefined;
    dDice1 = undefined;
    dDice2 = undefined;
  };

  function compareDice() {
    var d1result = attackDice[0] > defenseDice[0];
    var d2result = attackDice[1] > defenseDice[1];

    d1result ? defense_remaining-- : attack_remaining--;
    d2result ? defense_remaining-- : attack_remaining--;
  };

  function setDebugInfo() {
    $('.a1 .val').text(aDice1);
    $('.a2 .val').text(aDice2);
    $('.a3 .val').text(aDice3);
    $('.b1 .val').text(dDice1);
    $('.b2 .val').text(dDice2);
    $('.attack-dice .val').text(attackDice);
    $('.defense-dice .val').text(defenseDice);
    $('.defense-remaining .val').text(defense_remaining);
    $('.attack-remaining .val').text(attack_remaining);

    if(attack_remaining <= 0) {
      $('.result .val').text("Defense Keeps " + defense_remaining);
    }

    if(defense_remaining <= 0) {
      $('.result .val').text("Attack Keeps " + attack_remaining);
    }
  };

  function rollSingleDice() {
    return Math.floor( (Math.random() * 6 ) + 1);
  };

  function fakeRollAllDice() {
    aDice1 = rollSingleDice();
    aDice2 = rollSingleDice();
    aDice3 = rollSingleDice();
    bDice1 = rollSingleDice();
    bDice2 = rollSingleDice();
  }

  function rollAllDice(attack_remaining, defense_remaining) {
    if (attack_remaining >= 4) {
      aDice1 = rollSingleDice();
      aDice2 = rollSingleDice();
      aDice3 = rollSingleDice();
    } else if (attack_remaining = 3) {
      aDice1 = rollSingleDice();
      aDice2 = rollSingleDice();
      aDice3 = undefined;

    } else {
      aDice1 = rollSingleDice();
      aDice2 = undefined;
      aDice3 = undefined;
    }

    if (defense_remaining > 1) {
      dDice1 = rollSingleDice();
      dDice2 = rollSingleDice();
    } else {
      dDice1 = rollSingleDice();
      dDice2 = undefined;
    }
  };



  $('.role').on('click', function () {
    resetDice();
    var attack_initial = parseInt($('.offense input').val());
    var defense_initial = parseInt($('.defense input').val());
    attack_remaining = attack_initial;
    defense_remaining = defense_initial

    // while(attack_remaining > 1 && defense_remaining > 0) {
    // }
    while(attack_remaining > 0 && defense_remaining > 0) {
      rollAllDice(attack_remaining, defense_remaining);
      attackDice = [aDice1, aDice2, aDice3];
      defenseDice = [dDice1, dDice2];
      sortDice();
      compareDice();
      setDebugInfo();
    }
  });


});