import input from "@/styles/components/input/input.module.scss";
type Props = {
    title: string;
    placeholder: string;
    type: string;
    [x: string]: any;
};
const Input = ({ title, placeholder, type, ...otherProps }: Props) => {
    return (
        <div className={input.input}>
            <span className={input.title}>{title}</span>
            <input placeholder={placeholder} type={type} {...otherProps} />
        </div>
    );
};
export default Input;
