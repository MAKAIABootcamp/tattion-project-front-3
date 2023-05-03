import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./DynamicMap"), {
    ssr: false,
});

const Map = () => {
    return (
        <main>
            <DynamicMap />
        </main>
    );
};

export default Map;
