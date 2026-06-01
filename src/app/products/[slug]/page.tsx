interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  return (
    <div>
      <h1 className="text-2xl font-bold">Product: {slug}</h1>
    </div>
  );
}
