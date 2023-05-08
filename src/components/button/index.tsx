import button from "@/styles/components/button/button.module.scss";
import { type } from "os";
import React from "react";
type Props = {
    type?: string;
    children: React.ReactNode;
    [x: string]: any;
};
const Button = ({ type, children, ...otherProps }: Props) => {
    switch (type) {
        case "secondBtn":
            return (
                <button className={button.secondBtn} {...otherProps}>
                    {children}
                </button>
            );
        default:
            return (
                <button className={button.mainBtn} {...otherProps}>
                    {children}
                </button>
            );
    }
};
export default Button;
