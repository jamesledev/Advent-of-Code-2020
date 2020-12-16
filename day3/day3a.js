const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
  const result = event.target.files[0];
  const promise = result.text();
  promise.then((data) => {
    const theData = data.split('\n');
    const cloneData = theData;
    for (i = 0; i < cloneData.length; i++) {
      const inputData = cloneData.push(cloneData[i]);
      console.log(inputData);
    }
  });
});

let firstEvolutionChain = evolutionChain.evolves_to[0];
function evolution(param) {
  if (param) {
    for (var i = 0; i < param.replace('[0]', '').length; i++) {
      const evolutionTo = param.replace('[0]', '[i]');
      const evoName = evolutionTo.species.name;
      const level = evolutionTo.evolution_details[0].min_level;
      const id = getIDFromURL(evolutionTo.species.url);
      const evolutionDetails = evolutionTo.evolution_details[0];
      const trigger =
        evolutionTo.evolution_details[0].trigger.name != 'trade'
          ? null
          : evolutionTo.evolution_details[0].trigger.name;
      let {
        gender,
        held_item,
        item,
        known_move,
        known_move_type,
        location,
        min_affection,
        min_beauty,
        min_happiness,
        needs_overworld_rain,
        party_species,
        party_type,
        relative_physical_stats,
        time_of_day,
        turn_upside_down,
      } = evolutionDetails;
      item = item ? item.name : item;
      location = location ? location.name : location;
      known_move_type = known_move_type
        ? known_move_type.name
        : known_move_type;
      known_move = known_move ? known_move.name : known_move;
      held_item = held_item ? held_item.name : held_item;
      if (relative_physical_stats === 0) {
        relative_physical_stats = 'equal';
      }
      const evolutionTree = {
        name: evoName,
        level,
        id,
        gender,
        held_item,
        item,
        known_move,
        known_move_type,
        location,
        min_affection,
        min_beauty,
        min_happiness,
        needs_overworld_rain,
        party_species,
        party_type,
        relative_physical_stats,
        time_of_day,
        turn_upside_down,
        trigger,
      };
      secondEvo.push(evolutionTree);
    }
  }
}
