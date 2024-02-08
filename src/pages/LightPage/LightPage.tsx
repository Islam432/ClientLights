import css from "./LightPage.module.css"
interface HomePageProps {
    // определите свои пропсы здесь, если есть
}

const LightPage: React.FC<HomePageProps> = () => {
    return (
        <div className={css.block}>
            <h1>
            LightPage
            </h1>
            
        </div>
    );
};

export default LightPage;
