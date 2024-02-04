class DFATransition {
    constructor(fromNode, toNode, values, label) {
      this._fromNode = fromNode;
      this._toNode = toNode;
      this._values = values;
      this.label = label;
    }
  
    get toNode() {
      return this._toNode;
    }
  
    hasValue(char) {
      for (let i = 0; i < this._values.length; i++) {
        if (char === this._values[i]) {
          return true;
        }
      }
      return false;
    }
  }