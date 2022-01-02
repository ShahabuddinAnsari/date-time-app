import React,{ useState } from 'react';

export const HeightConverter = () => {

    const [inputValue, setInputValue] = useState(0);
    const [result, setResult] = useState(0);

    const [inputType, setInputType] = useState(null);
    const [outputType, setOutputType] = useState(null);

    const onClick = () => {
        console.log('test')

    }

    const onChange = (input) => {
        const inputValue =  input.target.value;
        setInputValue(inputValue);
    }

    const reset = () => {
        setInputValue(0);
        setResult(0);
        setInputType('');
        setOutputType('');
    }

    const onChangeSource = (event) => {
        setInputType(event.target.value);
    }

    const onChangeTarget = (event) => {
        setOutputType(event.target.value);
    }

    console.log('selectedInputTYpe : ', inputType);
    console.log('selectedoutputTYpe : ', outputType);

    return (
        <div className='heightConverterMain'>
            <div>
                <input type="text" name="centimeter" value={inputValue ? inputValue : ''} onChange={onChange} />
                <select value={inputType} onChange={onChangeSource}>
                    <option value="">Please select</option>
                    <option value="millimeter" >Millimeter</option>
                    <option value="centimeter">Centimeter</option>
                    <option value="meter">Meter</option>
                    <option value="inch">Inch</option>
                    <option value="foot">Foot</option>
                </select>
            </div>
            <div>
                <input type="text" value={result? result : ''} onChange={() =>{}}/>
                <select value={outputType} onChange={onChangeTarget}>
                    <option value="">Please select</option>
                    <option value="millimeter">Millimeter</option>
                    <option value="centimeter">Centimeter</option>
                    <option value="meter">Meter</option>
                    <option value="inch">Inch</option>
                    <option value="foot">Foot</option>
                </select>
            </div>
            <button className='resultBtn' disabled={!inputType || !outputType} onClick={() => onClick()}>Calculate</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}