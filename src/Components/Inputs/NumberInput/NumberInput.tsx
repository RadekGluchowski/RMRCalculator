import './NumberInput.css';

interface FormikFieldProps {
    children: object,
    id: string,
    name: string,
    onBlur(): void,
    onChange(): void,
    placeholder: string,
}

export const NumberInput: React.FC<FormikFieldProps> = ({ name, ...props }: FormikFieldProps) => {
    return (
        <div className="number-input">
            <label> {name} </label>
            <input type="number" {...props} />
        </div>
    )
};