import './App.css';
import Product from './Products';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();


export default function App() {
  return(
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Product />
      </div>
    </QueryClientProvider>
  )
}
