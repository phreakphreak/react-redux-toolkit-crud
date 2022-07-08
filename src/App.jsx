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
      <Route path="/tasks/:id">
        {(params) => <TaskForm taskId={params.id} />}
      </Route>
      <Route path="/tasks">
        <TaskForm />
      </Route>
    </Container>
  );
}

export default App;
