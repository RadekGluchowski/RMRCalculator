import './NumberInput.css';

interface FormikFieldProps {
    children: object,
    id: string,
    name: string,
    onBlur(): void,
    onChange(): void,
    placeholder: string,
}

export const NumberInput: React.FC<FormikFieldProps> = ({ placeholder, ...props }: FormikFieldProps) => {
    return (
        <div className="number-input">
            <label> {placeholder} </label>
            <input type="number" {...props} />
        </div>
    )
};