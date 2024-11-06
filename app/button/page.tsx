import Button from "@/app/button/_components/Button";

const ButtonPage = () => {
    return (
        <div className={'flex flex-col items-center justify-center gap-2'}>
            <p>small 사이즈</p>
            <Button size={'small'}>클릭</Button>

            <p>medium 사이즈</p>
            <Button size={'medium'}>클릭</Button>

            <p>medium 사이즈 기본 버튼</p>
            <Button size={'wMedium'} color={'green'}>클릭</Button>

            <p>medium 사이즈 취소 버튼</p>
            <Button size={'wMedium'} color={'red'}>클릭</Button>
        </div>
    )
}
export default ButtonPage