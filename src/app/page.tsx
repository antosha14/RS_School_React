import HomePage from "./(mainPage)/homePage";

export default async function MainPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <HomePage
      searchParams={searchParams}
    ></HomePage>
  );
}
