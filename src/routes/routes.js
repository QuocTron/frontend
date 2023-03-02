import config from "../config";

import Home from "../pages/Home";
import Conversation from "../pages/Conversation";

const publicRouters = [
    { path: config.routes.home, component: Home },
    { path: config.routes.conversations, component: Conversation }
]

const privateRouters = [];

export { publicRouters, privateRouters };