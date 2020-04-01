import { createLogicMiddleware } from 'redux-logic';
import { navigateTo, pageLoad } from './app';

const logics = [navigateTo, pageLoad];
const logicMiddleware = createLogicMiddleware(logics);

export default logicMiddleware;
