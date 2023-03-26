import HeaderComponent from '@component/components/header';

const Features = () => {
    return (
        <div>
            <HeaderComponent />
            <div className="flex justify-center items-center h-screen w-screen bg-blue-100">
                <p>Welcome to the features page.</p>
            </div>
        </div>
    );
}

export default Features;