import css from "./LightPage.module.css"
interface HomePageProps {
    // определите свои пропсы здесь, если есть
}

const HomePage: React.FC<HomePageProps> = () => {
    
    return (
        <div className={css.block}>
            <h1>
            LightPage
            </h1>
            
        </div>
    );
};

export default HomePage;
