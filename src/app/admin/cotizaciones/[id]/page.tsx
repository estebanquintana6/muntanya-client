import QuotePreview from "./QuotePreview";
import { getQuoteById } from "@/app/libs/quotes"
import { notFound } from "next/navigation";

interface OwnProps {
    params: {
      id: string;
    };
  }

export default async function QuotePreviewPage({ params }: OwnProps) {
    const { id } = params;
    const quote = await getQuoteById(id);

    if (!quote) {
      notFound();
    }

    return (
        <main>
            <QuotePreview quote={quote} />
        </main>
    )
}