import '../styles/WithScope.css';

const WithScopePage = () => {
    return (
        <main className="sample-page">
            <h1>With Scope</h1>
            <section className="first-section">
                <p>some text</p>
                <p>
                    some text and then a <a href="/">back link</a>
                </p>
            </section>
            <section className="second-section">
                <h2>Dog Picture</h2>
                <div>
                    <p>second section paragraph text</p>
                </div>
                <img src={'./DOG_1.jpg'} alt="dog" />
            </section>
        </main>
    );
};

export default WithScopePage;
