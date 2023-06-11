import { QueryClient, QueryClientProvider } from "react-query"
import { RouterProvider } from "react-router-dom"
import router from "./router/routes"

export default function App() {
  const queryClient= new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}