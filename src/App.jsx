
import './App.css'
import Footer from './components/Footer'
import UiverseBtnTailCSS from './components/UiverseBtnTailCSS'

function App() {

  return (
    <>
      <h1 className='bg-amber-200 mb-6 text-center font-bold text-2xl'>Open-Source button made with TailwindCSS (https://uiverse.io/)(https://uiverse.io/Rauliqbal/average-ladybug-82) </h1>
      <div className="m-auto text-center">
        <UiverseBtnTailCSS />
      </div>

      <h1 className='bg-amber-200 mb-6 text-center font-bold text-2xl mt-9'>
        Open-Source Footer made with TailwindCSS (https://daisyui.com/)(https://daisyui.com/components/footer/) </h1>
      <div className='max-w-[1170px] m-auto'>
        <Footer />
      </div>

    </>
  )
}

export default App
