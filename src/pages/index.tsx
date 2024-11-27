// pages/index.tsx
import Link from 'next/link';

const Home = () => {
    return (
        <div>
            <h1>Welcome to My Next.js App</h1>
            <p>This is the homepage of your Next.js application.</p>
            <Link href="/services" legacyBehavior>
                <a>Go to Services Page</a>
            </Link>
            <Link href="/products" legacyBehavior>
                <a>Go to Products Page</a>
            </Link>
        </div>
    );
};

export default Home;
