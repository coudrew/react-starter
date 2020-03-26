import { createLogicMiddleware } from 'redux-logic';
import appLogic from './app';

const logics = [appLogic];
console.log(logics);
const logicMiddleware = createLogicMiddleware(logics);

export default logicMiddleware;
