import Card from '@/app/components/card';
import Link from 'next/link';

export default function NotificationPage() {
  return (
    <Card>
      <div>Notifications</div>
      <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  );
}
