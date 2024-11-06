import SelectBox from "@/app/selectBox/_components/SelectBox";

const SelectBoxPage = () => {
    return (
        <>
            <p>small 사이즈</p>
            <SelectBox
                size="small"
                options={[
                    {label: 'Option 1', value: '1'},
                    {label: 'Option 2', value: '2'},
                    {label: 'Option 3', value: '3'}
                ]}
            />

            <p>medium 사이즈</p>
            <SelectBox
                size="medium"
                options={[
                    {label: 'Option 1', value: '1'},
                    {label: 'Option 2', value: '2'},
                    {label: 'Option 3', value: '3'}
                ]}
            />

            <p>large 사이즈</p>
            <SelectBox
                size="large"
                options={[
                    {label: 'Option 1', value: '1'},
                    {label: 'Option 2', value: '2'},
                    {label: 'Option 3', value: '3'},
                    {label: 'Option 4', value: '4'},
                    {label: 'Option 5', value: '5'},
                    {label: 'Option 6', value: '6'}
                ]}
            />
        </>
    )
}
export default SelectBoxPage