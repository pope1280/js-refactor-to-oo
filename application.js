
// Die related //

function Die(index, sides) {
  this.index = index;
  this.sides = sides;
  this.value = 0;
  addDieToDom();
}

Die.prototype.roll = function() {
  return this.value = Math.floor((Math.random()*this.sides)+1);
};



// DOM Related ..... should these be Die prototypes? //

function addDieToDom() {
  $('.dice').append('<div class="die">0</div>');
}

function updateDomDieValue(k, value) {
  var domIndex = k+1;
  $('.dice').find('.die:nth-child('+domIndex+')').text(value);
}



// Event listeners //

$(document).ready(function() {
  var dice = [];
  var index = 0;

  $('#roller button.add').on('click', function() {
    var die = new Die(index, 6);
    dice.push(die);
    index++;
  });

  $('#roller button.roll').on('click', function() {
    for (var k=0; k < dice.length; k++)
    {
    var die = dice[k];
    var value = die.roll();
    updateDomDieValue(k, value);
    }
  });
});
