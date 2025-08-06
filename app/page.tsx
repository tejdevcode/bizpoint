import CreateStore from "./ui/store/CreateStore";

export default function Home() {
  return (
    <div className="home min-h-screen flex items-center justify-center bg-gray-50">
      <main className="container">
        <CreateStore />

      </main>
    </div>
  );
}
