import QuotesList from "./QuotesList";
import { getQuotes } from "@/app/libs/quotes";

export default async function QuotesPanel() {
  const contacts = await getQuotes();

  return (
    <main>
      <QuotesList quotes={contacts} />
    </main>
  );
}
