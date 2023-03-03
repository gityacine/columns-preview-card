
export default function Column(props) {
    return (
        <div className={`flex flex-col basis-1/3 ${props.color} p-14`}>
            <img className="w-20" src={props.icon} alt="category-icon" />
            <h1 className="font-shoulders font-bold text-[#f2f2f2] text-5xl uppercase mt-8">{props.category}</h1>
            <p className="font-lexend font-normal text-base text-white/75 mt-8">{props.description}</p>
            <button className={`font-lexend font-normal text-base bg-[#f2f2f2] ${props.text} w-40 rounded-full py-4 sm:hover:outline active:outline sm:hover:outline-[#f2f2f2] active:outline-[#f2f2f2] ${props.hover} sm:hover:text-[#f2f2f2] active:text-[#f2f2f2] ${props.active} mt-8 sm:mt-16`}>Learn More</button>
        </div>
    );
}