import { Model } from 'objection'

// character name
// player name
// class and level of that class (will determine some proficiencies)
// xp
// proficiency bonus
// race
// subrace (will determine some proficiencies)
// age
// languages (determined by race/background)
// base speed (determined by race)
// ability scores (rolled, point-buy, set-values)
// background (will determine some proficiencies)
// character description (quirk, bond, flaw, ideal )
// chosen proficiencies
// starting equipment
// alignment
// max hitpoints
// money
// spellcaster? (maybe we can just have a place to hold a pdf for the spellbook)
// spell slots
// known or prepared spells
// Equipped armor/shield
// weapons and damage type
// Features (this is a big one, you get them from class, race, and background)

export default class Character extends Model {
  static tableName = 'characters'

  static jsonSchema = {
    type: 'object',
    required: ['name']
  }
}
