import * as React from "react";
import {ErrorBoundary} from 'react-error-boundary';
import Thing from "./SharedThing";

const RemoteButton = React.lazy(() => import("remoteButton/Button"));

const App = () => {
  return (
    <div>
      Minimal
      <br/>
      <React.Suspense fallback="remote button">
        <RemoteButton/>
      </React.Suspense>
      <hr/>
      Here is the local thing
      <Thing/>
    </div>
  );
}

export default App;
