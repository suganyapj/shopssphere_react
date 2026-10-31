import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Home from "./pages/Home";
import Developers from "./pages/Developers";
import About from "./pages/About";
import DeveloperDetails from "./pages/DevelopersDetails";
import DeveloperCounter from "./components/DeveloperCounter";
import ShoppingCart from "./components/ShoppingCart";
import ShoppingCartStorage from "./components/ShoppingCartStorage";
import PerformanceDemo from "./components/PerformanceDemo";
import UseMemoDemo from "./components/UseMemoDemo";
import UseCallbackDemo from "./components/UseCallbackDemo";
import MemoCallbackDemo from "./components/MemoCallBackDemo";
import CustomHookDemo from "./components/CustomHookDemo";
import UserContext from "./UserContext";
import UserProfile from "./components/UserProfile";
import UserHeader from "./components/UserHeader";
import UseReducerDemo from "./components/UserReducerDemo";
import UseRefDemo from "./components/useRefDemo";
import ApiStatusDemo from "./components/ApiStatusDemo";
import ApiCrudDemo from "./components/ApiCrudDemo";
import UseFetchDemo from "./components/UseFetchDemo";
import CompositionDemo from "./components/CompositionDemo";
import UseLayoutEffectDemo from "./components/UseLayoutEffectDemo";
import ErrorBoundary from "./components/ErrorBoundary";
import CrashDemo from "./components/CrashDemo";
import PortalDemo from "./components/PortalDemo";
import UseTransitionDemo from "./components/useTransitionDemo";
import UseDeferredValueDemo from "./components/UseDeferredValueDemo";
import UseIdDemo from "./components/UseIdDemo";
import Login from "./components/Login";
import FormValidationDemo from "./components/FormValidationDemo";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./AuthContext";
const LazyLoadingDemo = lazy(() => import("./components/LazyLoadingDemo"));
function App() {
  const user = {
    name: "Yamini",
    email: "yamini@example.com",
    role: "Frontend Developer",
  };
  return (
    <AuthProvider>
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/developers/:id" element={<DeveloperDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/counter" element={<DeveloperCounter />} />
            <Route path="/storage" element={<ShoppingCartStorage />} />
            <Route path="/performance" element={<PerformanceDemo />} />
            <Route path="/usememo" element={<UseMemoDemo />} />
            <Route path="/usecallback" element={<UseCallbackDemo />} />
            <Route path="/memocallback" element={<MemoCallbackDemo />} />
            <Route path="/customhook" element={<CustomHookDemo />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/header" element={<UserHeader />} />
            <Route path="/usereducer" element={<UseReducerDemo />} />
            <Route path="/useref" element={<UseRefDemo />} />
            <Route path="/apistatus" element={<ApiStatusDemo />} />

            <Route path="/apicrud" element={<ApiCrudDemo />} />
            <Route path="/usefetch" element={<UseFetchDemo />} />
            <Route path="/composition" element={<CompositionDemo />} />

            <Route path="/uselayouteffect" element={<UseLayoutEffectDemo />} />
            <Route
              path="/errorboundary"
              element={
                <ErrorBoundary>
                  <CrashDemo />
                </ErrorBoundary>
              }
            />
            <Route path="/portal" element={<PortalDemo />} />
            <Route path="/usetransition" element={<UseTransitionDemo />} />
            <Route
              path="/usedeferredvalue"
              element={<UseDeferredValueDemo />}
            />
            <Route path="/userid" element={<UseIdDemo />} />
            <Route path="/formvalidation" element={<FormValidationDemo />} />
            <Route path="/login" element={<Login />} />
            {/* //<Route path="/dashboard" element={<Dashboard />} /> */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/lazyloading"
              element={
                <Suspense fallback={<h2>Loading component...</h2>}>
                  <LazyLoadingDemo />
                </Suspense>
              }
            />

            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </AuthProvider>
  );
}

export default App;
