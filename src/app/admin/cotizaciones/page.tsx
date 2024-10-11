import QuotesList from "./QuotesList";
import { getQuotes } from "@/app/libs/quotes";

export default async function QuotesPanel() {
  const fetchQuotes = async () => {
    "use server";
    return await getQuotes();

  }
  return (
    <main>
      <QuotesList getQuotes={fetchQuotes} />
    </main>
  );
}
