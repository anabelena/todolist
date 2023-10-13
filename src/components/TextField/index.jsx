

export default function TextField({
    value,
    onChange,
    placeholder="Your task goes here..."},
    className,){

    return(
        <input
        type="text"
        value={value}
        onChange={onChange}
        className={`border w-full px-2 py-3 rounded-l outline-none ${className}`}
        placeholder={placeholder}
      />
    )
}