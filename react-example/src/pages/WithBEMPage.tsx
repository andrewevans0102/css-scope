import '../styles/WithBEM.css';

const WithBEMPage = () => {
    return (
        <main className="sample-page">
            <h1 className="sample-page__title">With BEM</h1>
            <section className="sample-page__first-section">
                <p className="sample-page__first-section--first_line">
                    some text
                </p>
                <p className="sample-page__first-section--second-line">
                    some text and then a{' '}
                    <a
                        className="sample-page__first-section--second-line-link"
                        href="/"
                    >
                        back link
                    </a>
                </p>
            </section>
            <section className="sample-page__second-section">
                <h2 className="sample-page__second-section--title">
                    Dog Picture
                </h2>
                <div className="sample-page__second-section--div">
                    <p className="sample-page__second-section--div-paragraph">
                        second section paragraph text
                    </p>
                </div>
                <img
                    className="sample-page__second-section--image"
                    src={'./DOG_1.jpg'}
                    alt="dog"
                />
            </section>
        </main>
    );
};

export default WithBEMPage;
