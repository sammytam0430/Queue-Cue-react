function addGroup(party) {
  return {
    type: 'ADD_GROUP',
    id: party.id,
    party_size: party.party_size,
    time_added: party.time_added,
    restaurant_id: party.restaurant_id
  }
}

export default {
  addGroup
}
