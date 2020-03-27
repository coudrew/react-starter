import { createLogicMiddleware } from 'redux-logic';
import appLogic from './app';

const logics = [appLogic];
const logicMiddleware = createLogicMiddleware(logics);

export default logicMiddleware;
