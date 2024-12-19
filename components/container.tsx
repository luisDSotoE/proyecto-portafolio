interface ContainerProps {
    children: React.ReactNode
}


const ContainerPage = (props: ContainerProps) => {
    const {children} = props
    return (
        <div className="w-full max-w-6xL px-4 pb-40
        mx-auto mt-40 md:pb-0 md:px-0
        ">
            
    {children}
        </div>
    );
}
export default ContainerPage;