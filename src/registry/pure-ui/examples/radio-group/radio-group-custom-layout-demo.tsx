import type { SVGProps } from "react";

import { Label } from "@/registry/pure-ui/ui/label";
import { Radio, RadioGroup } from "@/registry/pure-ui/ui/radio-group";

export function RadioGroupCustomLayoutDemo() {
  return (
    <div className="flex flex-col gap-4 max-w-sm w-full">
      <div className="flex flex-col">
        <div className="text-lg font-medium">AI Model Selection</div>
        <p className="text-muted-foreground text-sm">
          Choose your preferred AI model
        </p>
      </div>

      <RadioGroup className="w-full" defaultValue="openai-gpt-5-1-codex-max">
        <Label className="relative border p-3 rounded-xl bg-card shadow-xs flex items-center gap-3 cursor-pointer has-data-checked:border-primary has-data-checked:ring-1 has-data-checked:ring-primary [transition-property:box-shadow,border-color] duration-200 ease-out">
          <Openai />
          <span className="absolute -top-3 -right-2.5 p-0.5 bg-card rounded-full flex items-center justify-center">
            <Radio value="openai-gpt-5-1-codex-max" />
          </span>
          <div className="flex flex-col">
            <span className="font-medium">OpenAI GPT-5.1 Codex Max</span>
            <p className="text-muted-foreground text-sm">
              Openai's latest code model specially for coding.
            </p>
          </div>
        </Label>
        <Label className="relative border p-3 rounded-xl bg-card shadow-xs flex items-center gap-3 cursor-pointer has-data-checked:border-primary has-data-checked:ring-1 has-data-checked:ring-primary [transition-property:box-shadow,border-color] duration-200 ease-out">
          <Gemini />
          <span className="absolute -top-3 -right-2.5 p-0.5 bg-card rounded-full flex items-center justify-center">
            <Radio value="google-gemini-3-flash" />
          </span>
          <div className="flex flex-col">
            <span className="font-medium">Google Gemini 3 Flash</span>
            <p className="text-muted-foreground text-sm">
              Google's latest flash model, best for daily use.
            </p>
          </div>
        </Label>
        <Label className="relative border p-3 rounded-xl bg-card shadow-xs flex items-center gap-3 cursor-pointer has-data-checked:border-primary has-data-checked:ring-1 has-data-checked:ring-primary [transition-property:box-shadow,border-color] duration-200 ease-out">
          <Anthropic />
          <span className="absolute -top-3 -right-2.5 p-0.5 bg-card rounded-full flex items-center justify-center">
            <Radio value="anthropic-claude-4-5-sonnet" />
          </span>
          <div className="flex flex-col">
            <span className="font-medium">Anthropic Claude 4.5 Sonnet</span>
            <p className="text-muted-foreground text-sm">
              Excellent for writing, analysis, and coding.
            </p>
          </div>
        </Label>
      </RadioGroup>
    </div>
  );
}

const Anthropic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    fill="currentColor"
    fillRule="evenodd"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <title>Anthropic</title>
    <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z" />
  </svg>
);

function Gemini(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      {...props}
    >
      <defs>
        <filter
          id="SVGqoIxVV2h"
          width="39.274"
          height="43.217"
          x="-19.824"
          y="13.152"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_10859_4895"
            stdDeviation="2.46"
          />
        </filter>
        <filter
          id="SVGOahAkcjC"
          width="84.868"
          height="85.688"
          x="-15.001"
          y="-40.257"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_10859_4895"
            stdDeviation="11.891"
          />
        </filter>
        <filter
          id="SVGyT4fLePl"
          width="79.454"
          height="90.917"
          x="-20.776"
          y="11.927"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_10859_4895"
            stdDeviation="10.109"
          />
        </filter>
        <filter
          id="SVGonSETbRF"
          width="79.731"
          height="81.505"
          x="-19.845"
          y="15.459"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_10859_4895"
            stdDeviation="10.109"
          />
        </filter>
        <filter
          id="SVGSN7ofz6B"
          width="75.117"
          height="73.758"
          x="29.832"
          y="-11.552"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_10859_4895"
            stdDeviation="9.606"
          />
        </filter>
        <filter
          id="SVGHvbpPvOn"
          width="78.135"
          height="78.758"
          x="-38.583"
          y="-16.253"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_10859_4895"
            stdDeviation="8.706"
          />
        </filter>
        <filter
          id="SVG7JmfweRd"
          width="78.877"
          height="77.539"
          x="8.107"
          y="-5.966"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_10859_4895"
            stdDeviation="7.775"
          />
        </filter>
        <filter
          id="SVGgGkiybCN"
          width="56.272"
          height="51.81"
          x="13.587"
          y="-18.488"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_10859_4895"
            stdDeviation="6.957"
          />
        </filter>
        <filter
          id="SVGxEY6lcrm"
          width="70.856"
          height="69.306"
          x="-15.526"
          y="-31.297"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_10859_4895"
            stdDeviation="5.876"
          />
        </filter>
        <filter
          id="SVGg29FyG4g"
          width="55.501"
          height="51.571"
          x="-14.168"
          y="20.964"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_10859_4895"
            stdDeviation="7.273"
          />
        </filter>
        <linearGradient
          id="SVGlOwgwsgJ"
          x1="18.447"
          x2="52.153"
          y1="43.42"
          y2="15.004"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#4893fc" />
          <stop offset=".27" stopColor="#4893fc" />
          <stop offset=".777" stopColor="#969dff" />
          <stop offset="1" stopColor="#bd99fe" />
        </linearGradient>
        <mask
          id="SVGbqsmycuA"
          width="65"
          height="65"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path d="M32.447 0c.68 0 1.272.465 1.438 1.125a39 39 0 0 0 2 5.905q3.23 7.5 8.854 13.125q5.626 5.626 13.125 8.855a39 39 0 0 0 5.905 1.999c.66.166 1.125.758 1.125 1.438s-.464 1.273-1.125 1.439a39 39 0 0 0-5.905 1.999q-7.5 3.23-13.125 8.854q-5.625 5.627-8.854 13.125a39 39 0 0 0-2 5.906a1.485 1.485 0 0 1-1.438 1.124c-.68 0-1.272-.464-1.438-1.125a39 39 0 0 0-2-5.905q-3.228-7.5-8.854-13.125T7.03 35.885a39 39 0 0 0-5.905-2A1.485 1.485 0 0 1 0 32.448c0-.68.465-1.272 1.125-1.438a39 39 0 0 0 5.905-2q7.5-3.229 13.125-8.854C25.78 14.53 26.857 12.03 29.01 7.03a39 39 0 0 0 1.999-5.905A1.485 1.485 0 0 1 32.447 0" />
          <path
            fill="url(#SVGlOwgwsgJ)"
            d="M32.447 0c.68 0 1.272.465 1.438 1.125a39 39 0 0 0 2 5.905q3.23 7.5 8.854 13.125q5.626 5.626 13.125 8.855a39 39 0 0 0 5.905 1.999c.66.166 1.125.758 1.125 1.438s-.464 1.273-1.125 1.439a39 39 0 0 0-5.905 1.999q-7.5 3.23-13.125 8.854q-5.625 5.627-8.854 13.125a39 39 0 0 0-2 5.906a1.485 1.485 0 0 1-1.438 1.124c-.68 0-1.272-.464-1.438-1.125a39 39 0 0 0-2-5.905q-3.228-7.5-8.854-13.125T7.03 35.885a39 39 0 0 0-5.905-2A1.485 1.485 0 0 1 0 32.448c0-.68.465-1.272 1.125-1.438a39 39 0 0 0 5.905-2q7.5-3.229 13.125-8.854C25.78 14.53 26.857 12.03 29.01 7.03a39 39 0 0 0 1.999-5.905A1.485 1.485 0 0 1 32.447 0"
          />
        </mask>
      </defs>
      <g mask="url(#SVGbqsmycuA)" transform="translate(2.15 2.15)scale(.42687)">
        <g filter="url(#SVGqoIxVV2h)">
          <ellipse
            cx="14.407"
            cy="16.95"
            fill="#ffe432"
            rx="14.407"
            ry="16.95"
            transform="rotate(19.551 -44.575 -16.496)"
          />
        </g>
        <g filter="url(#SVGOahAkcjC)">
          <ellipse
            cx="27.433"
            cy="2.587"
            fill="#fc413d"
            rx="18.652"
            ry="19.062"
          />
        </g>
        <g filter="url(#SVGyT4fLePl)">
          <ellipse
            cx="18.951"
            cy="57.386"
            fill="#00b95c"
            rx="19.493"
            ry="25.253"
            transform="rotate(-2.799 18.951 57.386)"
          />
        </g>
        <g filter="url(#SVGyT4fLePl)">
          <ellipse
            cx="18.951"
            cy="57.386"
            fill="#00b95c"
            rx="19.493"
            ry="25.253"
            transform="rotate(-2.799 18.951 57.386)"
          />
        </g>
        <g filter="url(#SVGonSETbRF)">
          <ellipse
            cx="20.02"
            cy="56.211"
            fill="#00b95c"
            rx="19.107"
            ry="21.034"
            transform="rotate(-31.318 20.02 56.211)"
          />
        </g>
        <g filter="url(#SVGSN7ofz6B)">
          <ellipse
            cx="67.391"
            cy="25.327"
            fill="#3186ff"
            rx="18.346"
            ry="17.667"
          />
        </g>
        <g filter="url(#SVGHvbpPvOn)">
          <ellipse
            cx="21.222"
            cy="22.384"
            fill="#fbbc04"
            rx="21.222"
            ry="22.384"
            transform="rotate(37.252 9.752 -8.009)"
          />
        </g>
        <g filter="url(#SVG7JmfweRd)">
          <ellipse
            cx="24.469"
            cy="22.604"
            fill="#3186ff"
            rx="24.469"
            ry="22.604"
            transform="rotate(34.51 19.587 64.852)"
          />
        </g>
        <g filter="url(#SVGgGkiybCN)">
          <path
            fill="#749bff"
            d="M54.984-2.336c2.833 3.852-.807 11.34-8.13 16.728c-7.325 5.386-15.558 6.63-18.39 2.779c-2.834-3.852.806-11.341 8.13-16.728c7.323-5.387 15.557-6.631 18.39-2.78z"
          />
        </g>
        <g filter="url(#SVGxEY6lcrm)">
          <ellipse
            cx="19.902"
            cy="3.356"
            fill="#fc413d"
            rx="27.971"
            ry="17.388"
            transform="rotate(-42.848 19.902 3.356)"
          />
        </g>
        <g filter="url(#SVGg29FyG4g)">
          <ellipse
            cx="13.583"
            cy="46.75"
            fill="#ffee48"
            rx="14.989"
            ry="8.717"
            transform="rotate(35.592 13.583 46.75)"
          />
        </g>
      </g>
    </svg>
  );
}

function Openai(props: SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm2.382 6.022a3.478 3.478 0 0 1 5.58-2.125l-.008.005L8.82 7.288a.5.5 0 0 0-.25.435l.022 5.106l-1.263-.722V7.625q0-.31.052-.603Zm10.822.019a3.46 3.46 0 0 1 .43 2.241l-.01-.005l-4.133-2.387a.5.5 0 0 0-.502.002l-4.41 2.572l-.007-1.455l3.882-2.241a3.48 3.48 0 0 1 4.75 1.273m-8.62 3.578l.012 2.783l2.417 1.381l2.404-1.402l-.013-2.784l-2.416-1.38zm3.401-1.984l1.257-.733l3.882 2.24a3.478 3.478 0 0 1-.454 6.243v-4.783a.5.5 0 0 0-.252-.434zm3.686 3.257l-1.264-.722l.023 5.106a.5.5 0 0 1-.25.436l-4.133 2.386l-.01.005a3.478 3.478 0 0 0 5.633-2.728zm-2.249 2.644l.006 1.455l-3.881 2.24a3.478 3.478 0 0 1-5.18-3.514l.01.006l4.132 2.387a.5.5 0 0 0 .502-.002zm-4.664 1.562l1.257-.733l-4.433-2.533a.5.5 0 0 1-.252-.434V7.615a3.478 3.478 0 0 0-.454 6.243z"
        clipRule="evenodd"
      />
    </svg>
  );
}
