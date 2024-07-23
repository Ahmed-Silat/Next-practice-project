export default function Layout({
  children,
  articles,
  users,
}: {
  children: React.ReactNode;
  articles: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <div>
      {/* {children}
      {articles}
      {users} */}
      <div>{children}</div>
      <div style={{ display: "flex", flexDirection: "column" }}>{users}</div>
      <div style={{ display: "flex", flex: 1 }}>{articles}</div>
    </div>
  );
}
