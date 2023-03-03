import Column from "./Column";
import data from "../data";

export default function Card() {
    return (
        <div className="flex flex-col sm:flex-row sm:w-[63rem] rounded-xl overflow-hidden shadow-lg mx-6 my-10">
            {data.map((item, index) => (
                <Column
                    key={index}
                    category={item.category}
                    description={item.description}
                    icon={item.icon}
                    color={item.color}
                    text={item.text}
                    hover={item.hover}
                    active={item.active}
                />
            ))}
        </div>
    );
}