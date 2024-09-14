import { notFound } from 'next/navigation';

import Navbar from '@/app/landing/shared/Navbar';
import ProductView from './ProductView';

import { getProductById } from "@/app/libs/projects";

interface OwnProps {
  params: {
    id: string;
  };
}

export default async function ProjectPage({ params } : OwnProps) {
  const { id } = params;

  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-screen bg-primary pt-12">
      <Navbar />
      <ProductView product={product} />
    </main>
  );
}
