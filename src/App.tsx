import MenuItem from "./Components/MenuItem.tsx"
import OrderContents from "./Components/OrderContents.tsx"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder.ts"
import OrderTotal from "./Components/OrderTotal.tsx"
import TipePercentageForm from "./Components/TipePercentageForm.tsx"

function App() {

  const {order, addItem, removeItem, tip, setTip, placeOrder} = useOrder()
  
  return (
   <>
    <header className="bg-teal-400 py-5">
       <h1 className="text-4xl text-center font-black">Calculadora de propinas y consumos</h1>
    </header>

    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
      <div className="p-5">
        <h2 className="text-xl font-black">Menu</h2>
        <div className="space-y-3 mt-10"> 
        {menuItems.map(item => <MenuItem 
        key={item.id}
        item={item}
        addItem={addItem}
         />)}
         </div>
      </div>
      <div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
        {order.length ? ( 
          <>
           <OrderContents
          order={order}
          removeItem={removeItem}
          />
          
        <TipePercentageForm
        setTip={setTip}
        tip={tip}
        />

        <OrderTotal
        order={order}
        tip= {tip}
        placeOrder={placeOrder}
        />
          </>
        ) : (
          <p className="text-center">La orden esta vacia</p>
        )
        }  
         
        </div>
      </div>
    </main>


   </>
  )
}

export default App
