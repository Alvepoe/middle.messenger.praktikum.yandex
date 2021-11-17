import Handlebars from "handlebars/dist/handlebars.runtime";
import "../../components/field/field";
import "../../components/button/button";
import "../../components/link/link";
import template from "./form.hbs";
import "./form.scss";

Handlebars.registerPartial("form", template);
