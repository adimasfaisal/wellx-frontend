import Image from "next/image";
import MainForm from "@/components/form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <link rel="icon" href="/wellx-logo.png" sizes="any" />
      <MainForm />
    </main>
  );
}
