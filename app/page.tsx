import CreateStore from "./ui/store/CreateStore";
import CreateUser from "./ui/users/CreateUser";

export default function Home() {
  return (
    <div className="home min-h-screen flex items-center justify-center bg-gray-50">
      <main className="container">
        <CreateStore />
        {/* <CreateUser /> */}
      </main>
    </div>
  );
}
