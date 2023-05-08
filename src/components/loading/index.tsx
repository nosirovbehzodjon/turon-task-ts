import { Grid } from "react-loader-spinner";

const Loading = () => {
    return (
        <div className="loading flex justify-center items-center py-3">
            <Grid
                height="80"
                width="80"
                color="#d81111"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loading;
