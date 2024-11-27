// pages/index.tsx
import Link from 'next/link';

const Home = () => {
    return (
        <div>
            <h1>Services</h1>
            <p>This is the homepage of your Next.js application.</p>
            <Link href="/about" legacyBehavior>
                <a>Go to About Page</a>
            </Link>
            <Link href="/products" legacyBehavior>
                <a>Go to Products Page</a>
            </Link>
        </div>
    );
};

export default Home;
