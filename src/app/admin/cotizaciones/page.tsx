import QuotesList from "./QuotesList";
import { getQuotes } from "@/app/libs/quotes";

export default async function QuotesPanel() {
  const contacts = await getQuotes();

  return (
    <div>
      <QuotesList quotes={contacts} />
    </div>
  );
}
