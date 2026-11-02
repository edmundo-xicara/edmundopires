import { Link } from "react-router-dom";
import type { CaseItem } from "@/data/cases";

interface CaseRowProps {
  item: CaseItem;
  as?: "h2" | "h3";
}

/** A case as a full-width row: hovering floods it with cobalt and stretches the title. */
export function CaseRow({ item, as: Heading = "h3" }: CaseRowProps) {
  return (
    <Link
      to={`/cases/${item.slug}`}
      className="group relative block overflow-hidden border-b-2 border-foreground/10 first:border-t-2"
    >
      <span
        className="absolute inset-0 bg-primary origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-y-100 group-focus-visible:scale-y-100 motion-reduce:transition-none"
        aria-hidden
      />
      <div className="relative py-7 md:py-9 px-1 md:px-6 transition-colors duration-300 group-hover:text-primary-foreground group-focus-visible:text-primary-foreground">
        <p className="text-sm font-semibold text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/80">
          {item.client}
          <span aria-hidden className="mx-2.5 inline-block w-2 h-2 rounded-full bg-signal-yellow align-middle" />
          {item.category}
        </p>
        <Heading className="case-title mt-3 text-[clamp(28px,4vw,56px)]">{item.title}</Heading>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/85">
          {item.description}
        </p>
      </div>
    </Link>
  );
}
