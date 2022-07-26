const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(){
    this.dinosaurs.pop();
}

Park.prototype.findSpecies = function(species){
    const all_species = []

    for(const dinosaur of this.dinosaurs) {
        if (dinosaur.species == species){
            all_species.push(dinosaur)
        }

    }
    return all_species
}

Park.prototype.showDailyVisitors = function(){
    let visitors = 0;

    for(const dinosaur of this.dinosaurs) {
        visitors += dinosaur.guestsAtrractedPerDay;
        }
    return visitors;
}

module.exports = Park;