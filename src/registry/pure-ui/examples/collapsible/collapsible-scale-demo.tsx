import { type SVGProps } from "react";

import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/registry/pure-ui/ui/collapsible";

export function CollapsibleScaleDemo() {
  return (
    <Collapsible className="w-full max-w-sm border border-border/49 bg-muted rounded-xl overflow-hidden">
      <CollapsibleTrigger className="w-full p-3.5 flex items-center justify-between group">
        <div className="flex items-center gap-2">
          <div className="size-8 bg-[#D97757] text-white flex items-center justify-center rounded-md">
            <ClaudeAI className="size-5" />
          </div>
          <span className="text-sm font-medium">Claude</span>
        </div>
        <div className="border rounded-md p-1 bg-accent">
          <ChevronDownIcon className="size-4 transition-transform duration-200 ease group-data-panel-open:rotate-180" />
        </div>
      </CollapsibleTrigger>
      <CollapsiblePanel animationPreset="scale">
        <div className="bg-background dark:bg-secondary border-t p-4 rounded-xl flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <PlanetIcon className="size-4" />
              <span className="text-sm font-medium">Website</span>
            </div>
            <div className="border rounded-full px-2 py-1 bg-accent flex items-center gap-1">
              <LinkIcon className="size-3.5" />
              <span className="text-xs font-medium">https://claude.ai</span>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CursorClickIcon className="size-4" />
              <span className="text-sm font-medium">Monthly Visits</span>
            </div>
            <span className="text-sm font-medium">205M</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <FireIcon className="size-4" />
              <span className="text-sm font-medium">Heat Score</span>
            </div>
            <div className="border border-emerald-500 dark:border-emerald-700 rounded-full px-2 py-0.5 bg-emerald-100 dark:bg-emerald-800 flex items-center gap-1">
              <span className="text-xs font-medium text-emerald-700 dark:text-emerald-100">
                89
              </span>
              <ArrowOutwardIcon className="size-3.5 text-emerald-700 dark:text-emerald-100" />
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <LocationOnIcon className="size-4" />
              <span className="text-sm font-medium">Location</span>
            </div>
            <span className="text-sm font-medium">California, USA</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <ShoppingModeOutlineIcon className="size-4" />
              <span className="text-sm font-medium">Categories</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="border border-violet-500 dark:border-violet-700 rounded-full px-2 py-0.5 bg-violet-100 dark:bg-violet-800 flex items-center gap-1">
                <span className="text-xs font-medium text-violet-700 dark:text-violet-100">
                  AI
                </span>
              </div>

              <div className="border border-emerald-500 dark:border-emerald-700 rounded-full px-2 py-0.5 bg-emerald-100 dark:bg-emerald-800 flex items-center gap-1">
                <span className="text-xs font-medium text-emerald-700 dark:text-emerald-100">
                  SaaS
                </span>
              </div>

              <div className="border border-amber-500 dark:border-amber-700 rounded-full px-2 py-0.5 bg-amber-100 dark:bg-amber-800 flex items-center gap-1">
                <span className="text-xs font-medium text-amber-700 dark:text-amber-100">
                  B2B
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <UsersThreeIcon className="size-4" />
              <span className="text-sm font-medium">Employees</span>
            </div>
            <span className="text-sm font-medium">1001-5000</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <RevenueIcon className="size-4" />
              <span className="text-sm font-medium">Estimated ARR</span>
            </div>
            <div className="border border-emerald-500 dark:border-emerald-700 rounded-full px-2 py-0.5 bg-emerald-100 dark:bg-emerald-800 flex items-center gap-1">
              <span className="text-xs font-medium text-emerald-700 dark:text-emerald-100">
                $3-4B
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <FlagPennantIcon className="size-4" />
              <span className="text-sm font-medium">Founders</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="border rounded-full px-1 py-1 pr-1.5 bg-accent flex items-center gap-1">
                <img
                  src="https://github.com/shadcn.png"
                  alt="Founder"
                  className="size-4 rounded-full"
                />
                <span className="text-xs font-medium">Shadcn</span>
              </div>
              <div className="border rounded-full px-1 py-1 pr-1.5 bg-accent flex items-center gap-1">
                <span className="text-xs font-medium">+5 more</span>
              </div>
            </div>
          </div>
        </div>
      </CollapsiblePanel>
    </Collapsible>
  );
}

const ClaudeAI = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} preserveAspectRatio="xMidYMid" viewBox="0 0 256 257">
    <path
      fill="currentColor"
      d="m50.228 170.321 50.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0 125.796l.583-3.759 5.12-3.434 7.324.648 16.202 1.101 24.304 1.685 17.629 1.037 26.118 2.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758 7-7.713 9.397.649 2.398.648 9.527 7.323 20.35 15.75L94.817 91.9l3.889 3.24 1.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0 82.05 1.426l4.472 3.888 6.61 15.101 10.694 23.786 16.591 32.34 4.861 9.592 2.592 8.879.973 2.722h1.685v-1.556l1.36-18.211 2.528-22.36 2.463-28.776.843-8.1 4.018-9.722 7.971-5.25 6.222 2.981 5.12 7.324-.713 4.73-3.046 19.768-5.962 30.98-3.889 20.739h2.268l2.593-2.593 10.499-13.934 17.628-22.036 7.778-8.749 9.073-9.657 5.833-4.601h11.018l8.1 12.055-3.628 12.443-11.342 14.388-9.398 12.184-13.48 18.147-8.426 14.518.778 1.166 2.01-.194 30.46-6.481 16.462-2.982 19.637-3.37 8.88 4.148.971 4.213-3.5 8.62-20.998 5.184-24.628 4.926-36.682 8.685-.454.324.519.648 16.526 1.555 7.065.389h17.304l32.21 2.398 8.426 5.574 5.055 6.805-.843 5.184-12.962 6.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666 11.406 21.387 19.314 26.767 24.887 1.36 6.157-3.434 4.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73 6.935 25.017 37.59 1.296 11.536-1.814 3.76-6.481 2.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194 77.448-3.37 3.953-7.778 2.981-6.48-4.925-3.436-7.972 3.435-15.749 4.148-20.544 3.37-16.333 3.046-20.285 1.815-6.74-.13-.454-1.49.194-15.295 20.999-23.267 31.433-18.406 19.702-4.407 1.75-7.648-3.954.713-7.064 4.277-6.286 25.47-32.405 15.36-20.092 9.917-11.6-.065-1.686h-.583L44.07 198.125l-12.055 1.555-5.185-4.86.648-7.972 2.463-2.593 20.35-13.999-.064.065Z"
    />
  </svg>
);

function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
      />
    </svg>
  );
}

function PlanetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
        <path
          fill="currentColor"
          d="M12 3c2.225 0 4.263.808 5.833 2.146c.931-.22 1.785-.322 2.507-.26c.76.064 1.603.337 2.052 1.114c.407.704.352 1.49.076 2.204c-.272.702-.787 1.427-1.481 2.163l-.114.12a9 9 0 0 1-14.62 8.44l-.16.04c-.985.233-1.87.317-2.615.2c-.757-.118-1.465-.465-1.87-1.167c-.45-.777-.264-1.644.06-2.334c.308-.655.823-1.344 1.479-2.04A9 9 0 0 1 12 3M3.345 17.009c-.143-.709 1-1.75 1.406-2.167a1.53 1.53 0 0 0 .4-1.386a7 7 0 0 1 11.531-6.66a1.53 1.53 0 0 0 1.402.348c.563-.144 2.039-.613 2.581-.135c.336.704-.971 1.832-1.38 2.239l-.01.01c-1.236 1.23-3.281 2.746-6.275 4.474c-2.992 1.728-5.326 2.74-7.01 3.197l-.015.004c-.527.143-2.209.689-2.63.076m5.288 1.13c1.538-.614 3.33-1.499 5.367-2.675s3.698-2.284 4.998-3.31A7 7 0 0 1 8.633 18.14Z"
        />
      </g>
    </svg>
  );
}

function LinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M15.729 3.884c1.434-1.44 3.532-1.47 4.693-.304c1.164 1.168 1.133 3.28-.303 4.72l-2.423 2.433a.75.75 0 0 0 1.062 1.059l2.424-2.433c1.911-1.919 2.151-4.982.303-6.838c-1.85-1.857-4.907-1.615-6.82.304L9.819 7.692c-1.911 1.919-2.151 4.982-.303 6.837a.75.75 0 1 0 1.063-1.058c-1.164-1.168-1.132-3.28.303-4.72z"
      />
      <path
        fill="currentColor"
        d="M14.485 9.47a.75.75 0 0 0-1.063 1.06c1.164 1.168 1.133 3.279-.303 4.72l-4.847 4.866c-1.435 1.44-3.533 1.47-4.694.304c-1.164-1.168-1.132-3.28.303-4.72l2.424-2.433a.75.75 0 0 0-1.063-1.059l-2.424 2.433c-1.911 1.92-2.151 4.982-.303 6.838c1.85 1.858 4.907 1.615 6.82-.304l4.847-4.867c1.911-1.918 2.151-4.982.303-6.837"
      />
    </svg>
  );
}

function CursorClickIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d="m9.15 9.211l2.557 11.51l2.878-2.877L18.74 22l3.198-3.197l-4.156-4.156l2.877-2.878zM1.956 7.438l3.134.84M3.287 14.98l2.295-2.294M7.457 1.938l.84 3.134m6.701-1.803l-2.294 2.294"
      />
    </svg>
  );
}

function FireIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 23a7.5 7.5 0 0 0 7.5-7.5c0-.866-.23-1.697-.5-2.47q-2.5 2.47-3.8 2.47c3.995-7 1.8-10-4.2-14c.5 5-2.796 7.274-4.138 8.537A7.5 7.5 0 0 0 12 23m.71-17.765c3.241 2.75 3.257 4.887.753 9.274c-.761 1.333.202 2.991 1.737 2.991c.688 0 1.384-.2 2.119-.595a5.5 5.5 0 1 1-9.087-5.412c.126-.118.765-.685.793-.71c.424-.38.773-.717 1.118-1.086c1.23-1.318 2.114-2.78 2.566-4.462"
      />
    </svg>
  );
}

function ArrowOutwardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="currentColor" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z" />
    </svg>
  );
}

function LocationOnIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 19.677q2.82-2.454 4.458-4.991t1.638-4.39q0-2.744-1.737-4.53Q14.62 3.981 12 3.981T7.641 5.766t-1.737 4.53q0 1.852 1.638 4.39T12 19.677m0 .879q-.235 0-.47-.077t-.432-.25q-1.067-.981-2.164-2.185q-1.096-1.203-1.99-2.493t-1.468-2.633t-.572-2.622q0-3.173 2.066-5.234Q9.037 3 12 3t5.03 2.062q2.066 2.061 2.066 5.234q0 1.279-.572 2.613q-.572 1.333-1.458 2.632q-.885 1.3-1.981 2.494T12.92 20.21q-.191.173-.434.26q-.244.086-.487.086m.004-8.825q.667 0 1.14-.476q.472-.475.472-1.143t-.476-1.14t-1.143-.472t-1.14.476t-.472 1.143t.475 1.14t1.144.472"
      />
    </svg>
  );
}

function ShoppingModeOutlineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M11.001 21q-.303 0-.61-.121q-.305-.121-.55-.364l-6.362-6.361q-.25-.248-.365-.548T3 12.996t.114-.616t.365-.551l8.338-8.345q.223-.222.528-.353T12.973 3h6.387q.69 0 1.162.48t.472 1.154v6.387q0 .332-.121.632t-.357.518l-8.364 8.345q-.242.242-.545.363T11 21m-.447-1.192q.192.192.452.192t.452-.192l8.363-8.35q.096-.096.135-.212q.038-.115.038-.23V4.635q0-.27-.183-.443q-.182-.173-.452-.173h-6.63l-8.537 8.523Q4 12.734 4 12.994t.192.452zm6.883-12.25q.424 0 .722-.292t.297-.708q0-.425-.295-.722t-.717-.297t-.714.295t-.293.716t.291.715t.709.293m-5.456 4.48"
      />
    </svg>
  );
}

function UsersThreeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 256 256"
      {...props}
    >
      <g fill="currentColor">
        <path
          d="M168 144a40 40 0 1 1-40-40a40 40 0 0 1 40 40M64 56a32 32 0 1 0 32 32a32 32 0 0 0-32-32m128 0a32 32 0 1 0 32 32a32 32 0 0 0-32-32"
          opacity=".2"
        />
        <path d="M244.8 150.4a8 8 0 0 1-11.2-1.6A51.6 51.6 0 0 0 192 128a8 8 0 0 1 0-16a24 24 0 1 0-23.24-30a8 8 0 1 1-15.5-4A40 40 0 1 1 219 117.51a67.94 67.94 0 0 1 27.43 21.68a8 8 0 0 1-1.63 11.21M190.92 212a8 8 0 1 1-13.85 8a57 57 0 0 0-98.15 0a8 8 0 1 1-13.84-8a72.06 72.06 0 0 1 33.74-29.92a48 48 0 1 1 58.36 0A72.06 72.06 0 0 1 190.92 212M128 176a32 32 0 1 0-32-32a32 32 0 0 0 32 32m-56-56a8 8 0 0 0-8-8a24 24 0 1 1 23.24-30a8 8 0 1 0 15.5-4A40 40 0 1 0 37 117.51a67.94 67.94 0 0 0-27.4 21.68a8 8 0 1 0 12.8 9.61A51.6 51.6 0 0 1 64 128a8 8 0 0 0 8-8" />
      </g>
    </svg>
  );
}

function RevenueIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        fill="currentColor"
        d="M61.9 44.8c-1.1-3.4-4.7-5.3-8.1-4.4l-12.1 2.9c-.3-2.9-2.6-5.3-5.8-5.8H23.1c-1-1.5-2.6-2.5-4.6-2.5H8c-3.4 0-6.3 2.8-6.3 6.3v12.4C1.7 57.1 4.5 60 8 60h10.5c1.5 0 3-.6 4-1.7c.2-.2.3-.4.5-.6c2.9 1.4 6 2.2 9.1 2.2c1.9 0 3.8-.3 5.6-.8L53 54.5l4.3-1.3c1.7-.5 3.2-1.6 4.1-3.2c.9-1.5 1.1-3.4.5-5.2M19.3 54.9c-.2.2-.5.3-.8.3H8c-1 0-1.8-.8-1.8-1.8V41.1c0-1 .8-1.8 1.8-1.8h10.7c.5 0 .9.4.9.9v14c0 .4-.2.6-.3.7m38.2-7c-.3.5-.7.9-1.3 1l-4.4 1.3l-15.2 4.3c-3.9 1.1-8 .7-11.6-1.1l-.9-.5v-11h11.5c1.1.2 1.8 1 1.8 1.9v.5l-3.4.8c-1.2.3-2 1.5-1.7 2.7s1.5 2 2.7 1.7l20-4.8c1.1-.3 2.3.3 2.7 1.4c.1.6.1 1.3-.2 1.8M47.3 21.5h5.1c1.5 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8h-7.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h2.8v.3c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-.3h.3c4 0 7.3-3.3 7.3-7.3s-3.3-7.3-7.3-7.3h-5.1c-1.5 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8h7.6c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-2.8v-.4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v.3h-.3c-4 0-7.3 3.3-7.3 7.3c.1 4.1 3.4 7.4 7.4 7.4"
      />
    </svg>
  );
}

function FlagPennantIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 256 256"
      {...props}
    >
      <g fill="currentColor">
        <path d="M240 104L56 168V40Z" opacity=".2" />
        <path d="m242.63 96.44l-184-64A8 8 0 0 0 48 40v176a8 8 0 0 0 16 0v-42.31l178.63-62.13a8 8 0 0 0 0-15.12M64 156.75V51.25L215.65 104Z" />
      </g>
    </svg>
  );
}
