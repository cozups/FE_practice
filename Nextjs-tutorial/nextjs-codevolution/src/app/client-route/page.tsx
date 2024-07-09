'use client';

import { useTheme } from '@/app/components/themeProvider';
import { clientSideFunction } from '@/app/utils/client-utils';

export default function ClientRoutePage() {
  const theme = useTheme();
  const result = clientSideFunction();
  return (
    <h1
      style={{
        color: theme.colors.secondary,
      }}
    >
      Client Route {result}
    </h1>
  );
}
