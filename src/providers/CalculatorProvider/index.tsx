import React, {createContext, useMemo, useState} from "react";

export interface CalculatorProviderReturnProps {
    displayValue: string;
}

export const initialProps: CalculatorProviderReturnProps = {
    displayValue: "",
};

export const CalculatorContext = createContext<CalculatorProviderReturnProps>(initialProps);

export const CalculatorProvider: React.FC = ({children}) => {
    const [displayValue, setDisplayValue] = useState<string>("12 + 34");

    const value = useMemo(
        () => ({
            displayValue,
        }),
        [displayValue]);

    return (
        <CalculatorContext.Provider value={value}>
            {children}
        </CalculatorContext.Provider>
    );
};
