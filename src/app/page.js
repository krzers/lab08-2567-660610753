import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import Task from "./components/Task";
import Footer from "./components/Footer";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <div>
        <Header/>
      </div>

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}                               
          <TaskInput/>
         
        {/* task */}
        <Task title = "Read a book" id="1" isDone = {true}  />
        <Task title = "Take a shower" id="2" isDone = {false} />
        <Task title = "Sleep" id="3" isDone ={false} />
      </div>

      {/* //footer section */}
      <Footer year="2024" fullName="Nattapat bootsing" studentId="660610753"/>
    </div>
  );
}