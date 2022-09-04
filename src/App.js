import AnalogClock from './components/AnalogClock/AnalogClock';
import ContextProvider from './components/Context/ContextClock';
import DigitalClock from './components/DigitalClock/DigitalClock';

function App() {
  return (
    <section>
      <article>
        <ContextProvider>
          <DigitalClock />
          <AnalogClock />
        </ContextProvider>
      </article>
    </section>
  );
}

export default App;
