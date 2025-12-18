import './App.css'
let language = "JavaScript"

function Header({year}) {
  return (
    <header>
      <h1>Beastiary</h1>
      <h4>est {year}</h4>
    </header>
  );
} 

const items = [
  { name: "Unicorn", description: "Mythical creatures known for their beauty and grace. Often depicted as white horses with a single horn on their forehead." },
  { name: "Dragon", description: "Large, serpentine creatures that can fly and breathe fire. They are often portrayed as powerful and fearsome beings." },
  { name: "Phoenix", description: "Legendary birds that are said to burst into flames upon death and be reborn from their ashes. They symbolize renewal and immortality." },
  { name: "Griffin", description: "Mythical creatures with the body of a lion and the head and wings of an eagle. They are known for their strength and vigilance." },
  { name: "Mermaid", description: "Aquatic beings with the upper body of a human and the tail of a fish. They are often associated with the sea and are known for their enchanting songs." }
];

const beast = items.map((item, i) => ({
  id: i, 
  name: item.name,
  description: item.description
}));

function Main() {
  return (
    <main>
      
       <ul>
        {beast.map(beast => (
          <li style={{listStyleType: "none"}} key={beast.id}>
            <strong>{beast.name}</strong> - {beast.description}
          </li>
        ))}
      </ul>
    </main>
  );
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header year={new Date().getFullYear()} />
      <h2>Where you can find info on all manner of beasties</h2>
      <Main items={beast} />
     
    </>
  )
}

export default App
