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
        <div className="number-input--container">
            <label> {placeholder} </label>
            <input className="number-input" type="number" {...props} />
        </div>
    )
};