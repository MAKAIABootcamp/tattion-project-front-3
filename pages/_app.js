import { AuthProvider } from "@/context/AuthContext";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}
