import { PageOneComponent } from "./pages/page1/pageone.component";
import { PageTwoComponent } from "./pages/page2/pagetwo.component";
import './App.css';

export const App = () => {
  return <main>
    <PageTwoComponent />
    <PageOneComponent />
  </main>;
};
