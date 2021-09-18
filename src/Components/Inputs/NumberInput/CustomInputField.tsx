import './CustomInputField.css';

interface FormikFieldProps {
    children: object,
    id: string,
    name: string,
    onBlur(): void,
    onChange(): void,
    placeholder: string,
    inputType?: string,
}

export const NumberInput: React.FC<FormikFieldProps> = ({ placeholder, inputType = "number", ...props }: FormikFieldProps) => {
    return (
        <div className="custom-input--container">
            <label> {placeholder} </label>
            <input className="custom-input" type={inputType} {...props} />
        </div>
    )
};