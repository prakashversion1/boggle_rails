export default class DiceData {
  constructor(letter, rowId, columnId, selected = false) {
    this.letter = letter;
    this.rowId = rowId;
    this.colId = columnId;
    this.selected = selected;
  }
}
