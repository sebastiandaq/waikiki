import itemController from './controllers/itemController';
import cartController from './controllers/cartController';
const router = (app) => { 
	
	app.get('/', itemController.getAllItems);
	app.get('/fetchCart', cartController.getAllItems);
	
};

export default router;
