export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl p-8 m-2 shadow-lg border border-white flex justify-center items-center">
      {children}
    </div>
  );
}
