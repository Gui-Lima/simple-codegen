"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reducer = `import * as A from "../actions/actionTypes";
import { updateObject } from "./helper";

const initialState = {
  $objectList: [],
  $objectDict: {},
  loading: false
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    
    default: return state
  }
}
`;
exports.default = reducer;
//# sourceMappingURL=store_reducer.js.map