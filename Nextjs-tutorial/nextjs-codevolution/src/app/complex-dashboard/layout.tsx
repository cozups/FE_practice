export default function ComplexDashboardLayout({
  children,
  users,
  notifications,
  revenues,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
  revenues: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revenues}</div>
        </div>
        <div className="flex">{notifications}</div>
      </div>
    </>
  );
}
