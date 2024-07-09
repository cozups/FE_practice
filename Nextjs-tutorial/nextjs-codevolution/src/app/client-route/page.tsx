'use client';

import { useTheme } from '@/app/components/themeProvider';

export default function ClientRoutePage() {
  const theme = useTheme();
  const settings = {
    dots: true,
  };
  return (
    <h1
      style={{
        color: theme.colors.secondary,
      }}
    >
      Client Route Page
    </h1>
  );
}
