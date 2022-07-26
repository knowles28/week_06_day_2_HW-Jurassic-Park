const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dino1;
  let dino2;
  let dino3;
  let dino4;

  let park;


  beforeEach(function () {
    dino1 = new Dinosaur("t-rex", "carnivore", 100);
    dino2 = new Dinosaur("stegosaurus", "herbivore", 50);
    dino3 = new Dinosaur("raptor", "omnivore", 20);
    dino4 = new Dinosaur("t-rex", "carnivore", 105);
    

    park = new Park("Jurassic Park", 200);

  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park")
  });

  it('should have a ticket price', function (){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 200);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs.length;
    assert.deepStrictEqual(actual, 0)
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dino1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dino1]);
  });


  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.removeDinosaur();
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1);
  });


  it('should be able to find the dinosaur that attracts the most visitors');


  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);

    const actual = park.findSpecies('t-rex')
    assert.deepStrictEqual(actual, [dino1, dino4])
  });



  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
 
    const actual = park.showDailyVisitors();
    assert.strictEqual(actual, 170)
  });

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
