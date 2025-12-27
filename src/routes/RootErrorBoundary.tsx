import { isRouteErrorResponse, useRouteError, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { AppLayout } from "@/components/app-layout";

export function RootErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <AppLayout>
          <div className="min-h-screen">
            <div className="absolute top-1/2 left-1/2 mb-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center">
              <span className="from-foreground bg-linear-to-b to-transparent bg-clip-text text-[10rem] leading-none font-extrabold text-transparent">
                404
              </span>
              <h2 className="font-heading my-2 text-2xl font-bold">Something's not right...</h2>
              <p>Sorry, the page you are looking for doesn't exist or has been moved.</p>
              <div className="mt-8 flex justify-center gap-2">
                <Button onClick={() => navigate(-1)} variant="default" size="lg">
                  Go back
                </Button>
                <Button onClick={() => navigate("/")} variant="ghost" size="lg">
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
        </AppLayout>
      );
    }

    return (
      <AppLayout>
        <div className="min-h-screen">
          <div className="absolute top-1/2 left-1/2 mb-16 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 items-center justify-center px-4 text-center">
            <span className="from-foreground bg-linear-to-b to-transparent bg-clip-text text-[8rem] leading-none font-extrabold text-transparent">
              {error.status}
            </span>
            <h2 className="font-heading my-2 text-2xl font-bold">{error.statusText || "An error occurred"}</h2>
            {error.data && <p className="text-muted-foreground mt-2">{error.data}</p>}
            <div className="mt-8 flex justify-center gap-2">
              <Button onClick={() => navigate(-1)} variant="default" size="lg">
                Go back
              </Button>
              <Button onClick={() => navigate("/")} variant="ghost" size="lg">
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  } else if (error instanceof Error) {
    return (
      <AppLayout>
        <div className="min-h-screen">
          <div className="absolute top-1/2 left-1/2 mb-16 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 items-center justify-center px-4 text-center">
            <span className="from-foreground bg-linear-to-b to-transparent bg-clip-text text-[8rem] leading-none font-extrabold text-transparent">
              Error
            </span>
            <h2 className="font-heading my-2 text-2xl font-bold">Something went wrong</h2>
            <p className="text-muted-foreground mt-2 mb-4">{error.message}</p>
            {import.meta.env.DEV && error.stack && error.stack && (
              <details className="mt-4 text-left">
                <summary className="mb-2 cursor-pointer text-sm font-medium">Stack trace</summary>
                <pre className="bg-muted max-h-64 overflow-auto rounded-lg p-4 text-xs">{error.stack}</pre>
              </details>
            )}
            <div className="mt-8 flex justify-center gap-2">
              <Button onClick={() => navigate(-1)} variant="default" size="lg">
                Go back
              </Button>
              <Button onClick={() => navigate("/")} variant="ghost" size="lg">
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  } else {
    return (
      <AppLayout>
        <div className="min-h-screen">
          <div className="absolute top-1/2 left-1/2 mb-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center">
            <span className="from-foreground bg-linear-to-b to-transparent bg-clip-text text-[8rem] leading-none font-extrabold text-transparent">
              Error
            </span>
            <h2 className="font-heading my-2 text-2xl font-bold">Unknown Error</h2>
            <p className="text-muted-foreground">An unexpected error occurred. Please try again.</p>
            <div className="mt-8 flex justify-center gap-2">
              <Button onClick={() => navigate(-1)} variant="default" size="lg">
                Go back
              </Button>
              <Button onClick={() => navigate("/")} variant="ghost" size="lg">
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }
}
