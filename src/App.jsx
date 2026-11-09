import Notes from './components/Notes.jsx'
import Info from './components/Info.jsx'
 
function App() {
  return (
    <div className="bg-[#f5f5f5] font-light text-[#111]">
      <aside className="sticky top-0 flex h-screen flex-col gap-5 bg-white px-8 py-9 shadow-[0_2px_4px_0_rgba(0,0,0,0.2),0_25px_50px_0_rgba(0,0,0,0.1)]">
        <h1 className="text-[72px] leading-none font-extralight text-[#b83f45]">
          notes
        </h1>
      </aside>
      <Notes />
      <Info name="YOUR NAME" />
    </div>
  )
}
 
export default App