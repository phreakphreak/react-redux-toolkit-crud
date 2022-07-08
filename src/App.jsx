import { Route } from "wouter";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskView from "./components/TaskView";
import Container from "./components/Container";

function App() {
  return (
    <Container>
      <Route path="/">
        <TaskView />
      </Route>
      <Route path="/tasks/add">
        <TaskForm />
      </Route>
    </Container>
  );
}

export default App;
