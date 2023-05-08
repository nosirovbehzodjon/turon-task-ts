import error from "@/styles/components/error/error.module.scss";
type Props = {
    message: string | unknown;
};
const Error = ({ message }: Props) => {
    return (
        <div className="flex justify-center py-3">
            <p className={error.message}>{String(message)}</p>
        </div>
    );
};

export default Error;
