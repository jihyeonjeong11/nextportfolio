'use client';

import * as React from 'react';

export default function RefProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  } // this actually causes initial blank screen, or light themed page.

  return <div {...props}>{children}</div>;
}
