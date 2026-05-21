import { notFound } from "next/navigation";
import { pages404 } from "@/components/content/404";
import Script from "next/script";

export default async function Page(props: {
  params: Promise<{ key: string }>;
}) {
  const params = await props.params;
  const key = params.key as keyof typeof pages404;
  const entry = pages404[key];

  if (!entry) notFound();

  const Component = entry.Component;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        body::-webkit-scrollbar { display: none; }
        body { -ms-overflow-style: none; scrollbar-width: none; overflow: hidden; }
      ` }} />
      <Component />
      <Script id="prevent-navigation" strategy="afterInteractive">
        {`
          // Prevent navigation in preview iframe
          if (window.self !== window.top) {
            document.addEventListener('click', function(e) {
              const target = e.target.closest('a');
              if (target && target.href) {
                e.preventDefault();
                e.stopPropagation();
                // Optionally open in parent window
                window.top.location.href = target.href;
              }
            });
          }
        `}
      </Script>
    </>
  );
}
