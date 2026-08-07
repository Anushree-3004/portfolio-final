import Introduction from '@/components/introduction/Introduction';
import TableOfContents from '@/components/tableOfContents/TableOfContents';
import VisualPosters from '@/components/visualPosters/VisualPosters';
import SocialMedia from '@/components/socialMedia/SocialMedia';
import BrandIdentityHalo from '@/components/brandIdentity/BrandIdentityHalo';

export default function Home() {
  return (
    <main data-testid="portfolio-root" style={{ backgroundColor: 'var(--portfolio-bg)' }}>
      <Introduction />
      <TableOfContents />
      <VisualPosters />
      <SocialMedia />
      <BrandIdentityHalo />
    </main>
  );
}
