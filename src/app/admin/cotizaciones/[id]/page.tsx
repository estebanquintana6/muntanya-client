import QuotePreview from "./QuotePreview";
import { getQuoteById } from "@/app/libs/quotes"

interface OwnProps {
    params: {
      id: string;
    };
  }

export default async function QuotePreviewPage({ params }: OwnProps) {
    const { id } = params;
    const quote = await getQuoteById(id);

    return (
        <main>
            <QuotePreview quote={quote} />
        </main>
    )
}