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
    },
    {
        inputType: 'centimeter',
        outputType: [
            {
                outputType: 'millimeter',
                multiplyingFactor: 10
            },
            {
                outputType: 'centimeter',
                multiplyingFactor: 1
            },
            {
                outputType: 'meter',
                multiplyingFactor: 0.01
            },
            {
                outputType: 'inch',
                multiplyingFactor: 0.393701
            },
            {
                outputType: 'foot',
                multiplyingFactor: 0.0328084
            }

        ]
    },
    {
        inputType: 'meter',
        outputType: [
            {
                outputType: 'millimeter',
                multiplyingFactor: 1000
            },
            {
                outputType: 'centimeter',
                multiplyingFactor: 100
            },
            {
                outputType: 'meter',
                multiplyingFactor: 1
            },
            {
                outputType: 'inch',
                multiplyingFactor: 39.3701
            },
            {
                outputType: 'foot',
                multiplyingFactor: 3.28084
            }

        ]
    },
    {
        inputType: 'inch',
        outputType: [
            {
                outputType: 'millimeter',
                multiplyingFactor: 25.4
            },
            {
                outputType: 'centimeter',
                multiplyingFactor: 2.54
            },
            {
                outputType: 'meter',
                multiplyingFactor: 0.0254
            },
            {
                outputType: 'inch',
                multiplyingFactor: 1
            },
            {
                outputType: 'foot',
                multiplyingFactor: 0.0833333
            }

        ]
    },
    {
        inputType: 'foot',
        outputType: [
            {
                outputType: 'millimeter',
                multiplyingFactor: 304.8
            },
            {
                outputType: 'centimeter',
                multiplyingFactor: 30.48
            },
            {
                outputType: 'meter',
                multiplyingFactor: 0.3048
            },
            {
                outputType: 'inch',
                multiplyingFactor: 12
            },
            {
                outputType: 'foot',
                multiplyingFactor: 1
            }

        ]
    }
]  