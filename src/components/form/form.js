import Handlebars from "handlebars/dist/handlebars.runtime";
import "../field/field";
import "../profileField/profileField";
import "../button/button";
import "../link/link";
import template from "./form.hbs";
import "./form.scss";

Handlebars.registerPartial("form", template);
