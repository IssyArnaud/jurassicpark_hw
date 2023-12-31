const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park
  let dino1
  let dino2
  let dino3
  let dino4
  beforeEach(function () {
    park = new Park('Jurassic Park', 50)
    dino1 = new Dinosaur('t-rex', 'carnivore', 50)
    dino2 = new Dinosaur('velociraptor', 'carnivore', 30)
    dino3 = new Dinosaur('triceratops', 'herbivore', 20)
    dino4 = new Dinosaur('triceratops', 'herbivore', 20)
    park.collectionOfDinosaurs = [dino1, dino2, dino3]

  })

  it('should have a name', function(){
    const actual = park.name
    assert.strictEqual(actual, "Jurassic Park")
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice
    assert.strictEqual(actual, 50)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collectionOfDinosaurs
    assert.deepStrictEqual(actual, [dino1, dino2, dino3])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dino4)
    const actual = park.collectionOfDinosaurs
    assert.deepStrictEqual(actual, [dino1, dino2, dino3, dino4])
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dino2)
    const actual = park.collectionOfDinosaurs
    assert.deepStrictEqual(actual, [dino1, dino3])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.findMostPopularDino()
    assert.strictEqual(actual, dino1.name)
  });
  // check for multiples

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dino4)
    const actual = park.findAllDinosOfSpecies('triceratops')
    assert.deepStrictEqual(actual, [dino3, dino4])
  });

  it('should be able to calculate the total number of visitors per day', function(){
    const actual = park.calculateVisitorsPerDay()
    assert.strictEqual = (actual, 100)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    const actual = park.calculateVisitorsPerYear()
    assert.strictEqual = (actual, 36500)
  });

  it('should be able to calculate total revenue for one year', function(){
    const actual = park.calculateRevenuePerYear()
    assertEqual = (actual, 1825000)
  });

});
