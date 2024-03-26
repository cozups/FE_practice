export default function ComplexDashboardLayout({
  children,
  users,
  notifications,
  revenues,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
  revenues: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false;
  return isLoggedIn ? (
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
  ) : (
    <div>{login}</div>
  );
}
