import { Units } from './Units'
export const UnitConverterFormula = [
    {
        inputType: 'millimeter',
        outputType: [
            {
                outputType: 'millimeter',
                multiplyingFactor: 1
            },
            {
                outputType: 'centimeter',
                multiplyingFactor: 0.1
            },
            {
                outputType: 'meter',
                multiplyingFactor: 0.001
            },
            {
                outputType: 'inch',
                multiplyingFactor: 0.0393700787
            },
            {
                outputType: 'foot',
                multiplyingFactor: 0.0032808399
            }

        ]
    }
]  