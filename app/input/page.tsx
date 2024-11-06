import Input from "@/app/input/_components/Input";

const InputPage = () => {
    return (
        <>
            <p>small 사이즈</p>
            <Input size={'small'} placeholder="입력하세요."/>

            <p>medium 사이즈</p>
            <Input size={'medium'} placeholder="입력하세요."/>

            <p>large 사이즈</p>
            <Input size={'large'} placeholder="입력하세요."/>

        </>
    )
}

export default InputPage