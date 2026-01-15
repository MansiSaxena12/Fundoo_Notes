import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Notes from "./componenets/notes/Notes";
import Reminders from "./componenets/reminders/Reminders";
import Archive from "./componenets/archive/Archive";
import Trash from "./componenets/trash/Trash";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signup/Signup";

export default function ReactRouting() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />

    
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Notes />} />
          <Route path="notes" element={<Notes />} />
          <Route path="reminders" element={<Reminders />} />
          <Route path="archive" element={<Archive />} />
          <Route path="trash" element={<Trash />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
