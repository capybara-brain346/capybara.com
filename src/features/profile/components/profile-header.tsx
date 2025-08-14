import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>

        {/* Flag of India */}
        <svg
          className="absolute top-0 -left-px h-8 sm:h-9"
          viewBox="-45 -30 90 60"
          xmlns="http://www.w3.org/2000/svg"
          fill="#07038D"
        >
          <path fill="#FFF" d="m-45-30h90v60h-90z" />
          <path fill="#FF6820" d="m-45-30h90v20h-90z" />
          <path fill="#046A38" d="m-45 10h90v20h-90z" />
          <circle r="9.25" />
          <circle fill="#FFF" r="8" />
          <circle r="1.6" />
          <g id="d">
            <g id="c">
              <g id="b">
                <g id="a">
                  <path d="m0-8 .3 4.81409L0-.80235-.3-3.18591z" />
                  <circle transform="rotate(7.5)" r="0.35" cy="-8" />
                </g>
                <use xlinkHref="#a" transform="scale(-1)" />
              </g>
              <use xlinkHref="#b" transform="rotate(15)" />
            </g>
            <use xlinkHref="#c" transform="rotate(30)" />
          </g>
          <use xlinkHref="#d" transform="rotate(60)" />
          <use xlinkHref="#d" transform="rotate(120)" />
        </svg>
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 text-4xl sm:text-5xl font-bold py-2">
            {USER.displayName}
            &nbsp;
            <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.7em] translate-y-px text-info" />
            </SimpleTooltip>
          </h1>

          <div className="relative w-full overflow-hidden border-t border-edge">
            <div className="relative mx-auto max-w-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/nyan-cat.gif"
                alt="Nyan Cat animation"
                className="w-full h-[120px] object-cover object-center sm:h-[160px]"
              />
            </div>
          </div>

          <div className="h-auto border-t border-edge py-3 pl-4">
            <div className="text-xl sm:text-xl">
              <i>
                AI & Backend Engineer
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
