import QuotesList from "./QuotesList";
import { getQuotes, deleteQuote } from "@/app/libs/quotes";

export default async function QuotesPanel() {
  const fetchQuotes = async () => {
    "use server";
    return await getQuotes();
  };

  const handleDeleteQuote = async (id: string) => {
    "use server";
    await deleteQuote(id);
  };

  return (
    <main>
      <QuotesList getQuotes={fetchQuotes} deleteQuote={handleDeleteQuote} />
    </main>
  );
}
