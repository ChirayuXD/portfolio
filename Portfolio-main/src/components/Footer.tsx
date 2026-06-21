import { personal } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-semibold tracking-tight text-foreground">
            {personal.name}
          </p>
          <p className="spec-label mt-1">&copy; {year}</p>
        </div>

        <p className="spec-label">
          Built with <span className="text-red">Next.js</span>
        </p>
      </div>
    </footer>
  );
}
