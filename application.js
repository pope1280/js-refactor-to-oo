// Die related //

function Die(sides) {
  this.sides = sides;
  this.value = 0;
}

Die.prototype.roll = function() {
  return this.value = Math.floor((Math.random()*this.sides)+1);
};



// Die "Bag" Related //


function Bag() {
  this.dice = [];
}

Bag.prototype.addDie = function(sides) {
  var die = new Die(sides);
  this.dice.push(die);
}

Bag.prototype.shakeDie = function() {
  $.each(this.dice, function(index, die) {
    die.roll();
  });
}

// Event listeners //

$(document).ready(function() {

  function addDieToDom() {
    $('.dice').append('<div class="die">0</div>');
  }

  function updateDomDieValue(k, value) {
    var domIndex = k+1;
    $('.dice').find('.die:nth-child('+domIndex+')').text(value);
  }

  var bag = new Bag();
  

  $('#roller button.add').on('click', function() {
    bag.addDie(6);
    addDieToDom();
  });

  $('#roller button.roll').on('click', function() {
    bag.shakeDie();
    for (var k=0; k < bag.dice.length; k++)
    {
      updateDomDieValue(k, bag.dice[k].value);
    }
  });
});


// Driver(ish) Code //
// When I shake the die, none are 0;
var bag = new Bag();
bag.addDie(12);
bag.shakeDie();

console.log("SHAKE IT!");
$.each(bag.dice, function() {
  console.log(this.value != 0);
});
