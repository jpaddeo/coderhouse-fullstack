import Header from '@/components/Header';
import ItemListContainer from '@/components/ItemListContainer';

function App() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-start gap-12'>
      <Header />
      <ItemListContainer items={['Item 1', 'Item 2', 'Item 3']} />
    </main>
  );
}

export default App;
