import express from "express";
import router from "../router";
import {
  home,
  bbq,
  restaurant,
  building,
  chicken,
  truck,
  postSignin,
  getSignin,
  getLogin,
  postLogin,
  logout,
  about,
  contact,
  projects,
  prodetail,
} from "../controllers/userController.js";
const globalRouter = express.Router();

globalRouter.get(router.home, home);
globalRouter.get(router.login, getLogin);
globalRouter.get(router.bbq, bbq);
globalRouter.get(router.restaurant, restaurant);
globalRouter.get(router.chicken, chicken);
globalRouter.get(router.building, building);
globalRouter.get(router.truck, truck);
globalRouter.post(router.login, postLogin);
globalRouter.get(router.logout, logout);
globalRouter.get(router.signin, getSignin);
globalRouter.post(router.signin, postSignin);

globalRouter.get(router.contact, contact);
globalRouter.get(router.about, about);
globalRouter.get(router.projects, projects);
globalRouter.get(router.prodetail, prodetail);

export default globalRouter;
