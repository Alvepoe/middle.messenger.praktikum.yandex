import template from './error.hbs';
import './error.scss';
import Block from "../../modules/Block";
import Link from "../link/link";

class Error extends Block {

    render(): DocumentFragment {
        this.initChildren(
            {
                link: new Link({
                    props: {
                        linkUrl: this.props.linkUrl,
                        linkText: this.props.linkText
                    }
                })
            }
        );
        return this.compile(template, {
            title: this.props.title,
            description: this.props.description

        }
        )
    }
}

export default Error;