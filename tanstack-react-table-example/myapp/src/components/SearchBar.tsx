

function SearchBar({
    value: initialValue,
    onChange,
    ...props
}: {
    value: string | number;
    onChange: (value: string | number) => void;
}
    & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {




    return (
        <input
            {...props}
            value={initialValue}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}


export default SearchBar