import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageLoader } from "./components/page-loader";
import { AuthenticationGuard } from "./components/authentication-guard";
import { AdminPage } from "./pages/admin-page";
import { CallbackPage } from "./pages/callback-page";
import { HomePage } from "./pages/home-page";
import { NotFoundPage } from "./pages/not-found-page";
import { ProfilePage } from "./pages/profile-page";
import { ProtectedPage } from "./pages/protected-page";
import { PublicPage } from "./pages/public-page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./app.css";

export const App = () => {
  const { isLoading, error } = useAuth0();

  console.log("Auth0 isLoading:", isLoading);

  if (isLoading) {
    return <PageLoader />;
  }

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/profile"
          element={<AuthenticationGuard component={ProfilePage} />}
        />
        <Route path="/public" element={<PublicPage />} />
        <Route
          path="/protected"
          element={<AuthenticationGuard component={ProtectedPage} />}
        />
        <Route
          path="/admin"
          element={<AuthenticationGuard component={AdminPage} />}
        />{" "}
        <Route path="/callback" element={<CallbackPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </QueryClientProvider>
  );
};
