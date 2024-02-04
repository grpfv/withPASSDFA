class DFANode {
    constructor(name, isInitial, isFinal, transitions) {
      this._name = name;
      this._isInitial = isInitial;
      this._isFinal = isFinal;
      this._transitions = transitions;
    }
  
    get name() {
      return this._name;
    }
  
    get isInitial() {
      return this._isInitial;
    }
  
    get isFinal() {
      return this._isFinal;
    }
  
    get transitions() {
      return this._transitions;
    }
  
    set transitions(transitions) {
      this._transitions = transitions;
    }
  }