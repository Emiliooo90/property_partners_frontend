import LandingPage from './components/LandingPage'

export const metadata = {
  title: 'Property Partners - Task Manager',
  description: 'Efficient task management platform for property investors',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <LandingPage />
      </main>
    </div>
  );
}
